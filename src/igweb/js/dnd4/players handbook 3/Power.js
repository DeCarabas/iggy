define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Abundant Growth"] = new engine.RulesElement({
    name: "Abundant Growth",
    type: "Power",
    id: "ID_FMP_POWER_11510",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11510",
    categories: ["Abundant Growth", "ID_FMP_POWER_11510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Adrenaline Strike"] = new engine.RulesElement({
    name: "Adrenaline Strike",
    type: "Power",
    id: "ID_FMP_POWER_11063",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11063",
    categories: ["Adrenaline Strike", "ID_FMP_POWER_11063", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Agile Recovery"] = new engine.RulesElement({
    name: "Agile Recovery",
    type: "Power",
    id: "ID_FMP_POWER_9295",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9295",
    categories: ["Agile Recovery", "ID_FMP_POWER_9295", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Agony Field"] = new engine.RulesElement({
    name: "Agony Field",
    type: "Power",
    id: "ID_FMP_POWER_11107",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11107",
    categories: ["Agony Field", "ID_FMP_POWER_11107", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Allies to Enemies"] = new engine.RulesElement({
    name: "Allies to Enemies",
    type: "Power",
    id: "ID_FMP_POWER_10442",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10442",
    categories: ["Allies to Enemies", "ID_FMP_POWER_10442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Legion Technique"] = new engine.RulesElement({
    name: "Angelic Legion Technique",
    type: "Power",
    id: "ID_FMP_POWER_11244",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11244",
    categories: ["Angelic Legion Technique", "ID_FMP_POWER_11244", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Angry Earth"] = new engine.RulesElement({
    name: "Angry Earth",
    type: "Power",
    id: "ID_FMP_POWER_11511",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11511",
    categories: ["Angry Earth", "ID_FMP_POWER_11511", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Anthem of the Dawn"] = new engine.RulesElement({
    name: "Anthem of the Dawn",
    type: "Power",
    id: "ID_FMP_POWER_11454",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11454",
    categories: ["Anthem of the Dawn", "ID_FMP_POWER_11454", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_604", "Light Bringer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipate Maneuver"] = new engine.RulesElement({
    name: "Anticipate Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_9323",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9323",
    categories: ["Anticipate Maneuver", "ID_FMP_POWER_9323", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipation Tactics"] = new engine.RulesElement({
    name: "Anticipation Tactics",
    type: "Power",
    id: "ID_FMP_POWER_10316",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10316",
    categories: ["Anticipation Tactics", "ID_FMP_POWER_10316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_531", "Talaric Strategist", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipation Tactics (Augment 0)"] = new engine.RulesElement({
    name: "Anticipation Tactics (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ANTICIPATION_TACTICS_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ANTICIPATION_TACTICS_(AUGMENT_0)",
    categories: ["Anticipation Tactics (Augment 0)", "ID_INTERNAL_POWER_ANTICIPATION_TACTICS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipation Tactics (Augment 2)"] = new engine.RulesElement({
    name: "Anticipation Tactics (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ANTICIPATION_TACTICS_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ANTICIPATION_TACTICS_(AUGMENT_2)",
    categories: ["Anticipation Tactics (Augment 2)", "ID_INTERNAL_POWER_ANTICIPATION_TACTICS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Anvil of Battle"] = new engine.RulesElement({
    name: "Anvil of Battle",
    type: "Power",
    id: "ID_FMP_POWER_11369",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11369",
    categories: ["Anvil of Battle", "ID_FMP_POWER_11369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Mutterings"] = new engine.RulesElement({
    name: "Arcane Mutterings",
    type: "Power",
    id: "ID_FMP_POWER_9298",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9298",
    categories: ["Arcane Mutterings", "ID_FMP_POWER_9298", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Senses"] = new engine.RulesElement({
    name: "Arcane Senses",
    type: "Power",
    id: "ID_FMP_POWER_11532",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11532",
    categories: ["Arcane Senses", "ID_FMP_POWER_11532", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Alacrity"] = new engine.RulesElement({
    name: "Ardent Alacrity",
    type: "Power",
    id: "ID_FMP_POWER_10272",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10272",
    categories: ["Ardent Alacrity", "ID_FMP_POWER_10272"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Outrage"] = new engine.RulesElement({
    name: "Ardent Outrage",
    type: "Power",
    id: "ID_FMP_POWER_11060",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11060",
    categories: ["Ardent Outrage", "ID_FMP_POWER_11060"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Surge"] = new engine.RulesElement({
    name: "Ardent Surge",
    type: "Power",
    id: "ID_FMP_POWER_10273",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10273",
    categories: ["Ardent Surge", "ID_FMP_POWER_10273"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Flood"] = new engine.RulesElement({
    name: "Argent Flood",
    type: "Power",
    id: "ID_FMP_POWER_11150",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11150",
    categories: ["Argent Flood", "ID_FMP_POWER_11150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_591", "Argent Soul", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Strike"] = new engine.RulesElement({
    name: "Argent Strike",
    type: "Power",
    id: "ID_FMP_POWER_11149",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11149",
    categories: ["Argent Strike", "ID_FMP_POWER_11149", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_591", "Argent Soul", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Strike (Augment 0)"] = new engine.RulesElement({
    name: "Argent Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ARGENT_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ARGENT_STRIKE_(AUGMENT_0)",
    categories: ["Argent Strike (Augment 0)", "ID_INTERNAL_POWER_ARGENT_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Strike (Augment 2)"] = new engine.RulesElement({
    name: "Argent Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ARGENT_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ARGENT_STRIKE_(AUGMENT_2)",
    categories: ["Argent Strike (Augment 2)", "ID_INTERNAL_POWER_ARGENT_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Blades"] = new engine.RulesElement({
    name: "Armor of Blades",
    type: "Power",
    id: "ID_FMP_POWER_10450",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10450",
    categories: ["Armor of Blades", "ID_FMP_POWER_10450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Blades (Augment 0)"] = new engine.RulesElement({
    name: "Armor of Blades (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ARMOR_OF_BLADES_(AUGMENT_0)",
    categories: ["Armor of Blades (Augment 0)", "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Blades (Augment 2)"] = new engine.RulesElement({
    name: "Armor of Blades (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ARMOR_OF_BLADES_(AUGMENT_2)",
    categories: ["Armor of Blades (Augment 2)", "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Blades (Augment 6)"] = new engine.RulesElement({
    name: "Armor of Blades (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ARMOR_OF_BLADES_(AUGMENT_6)",
    categories: ["Armor of Blades (Augment 6)", "ID_INTERNAL_POWER_ARMOR_OF_BLADES_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Annihilation"] = new engine.RulesElement({
    name: "Aspect of Annihilation",
    type: "Power",
    id: "ID_FMP_POWER_11198",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11198",
    categories: ["Aspect of Annihilation", "ID_FMP_POWER_11198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Annihilation (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Annihilation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ANNIHILATION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ANNIHILATION_(AUGMENT_0)",
    categories: ["Aspect of Annihilation (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_ANNIHILATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Annihilation (Augment 2)"] = new engine.RulesElement({
    name: "Aspect of Annihilation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ANNIHILATION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ANNIHILATION_(AUGMENT_2)",
    categories: ["Aspect of Annihilation (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_ANNIHILATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Disembodiment"] = new engine.RulesElement({
    name: "Aspect of Disembodiment",
    type: "Power",
    id: "ID_FMP_POWER_11172",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11172",
    categories: ["Aspect of Disembodiment", "ID_FMP_POWER_11172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Disembodiment (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Disembodiment (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_0)",
    categories: ["Aspect of Disembodiment (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Disembodiment (Augment 1)"] = new engine.RulesElement({
    name: "Aspect of Disembodiment (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_1)",
    categories: ["Aspect of Disembodiment (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_DISEMBODIMENT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Elevated Harmony"] = new engine.RulesElement({
    name: "Aspect of Elevated Harmony",
    type: "Power",
    id: "ID_FMP_POWER_11158",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11158",
    categories: ["Aspect of Elevated Harmony", "ID_FMP_POWER_11158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Elevated Harmony (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Elevated Harmony (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_0)",
    categories: ["Aspect of Elevated Harmony (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Elevated Harmony (Augment 1)"] = new engine.RulesElement({
    name: "Aspect of Elevated Harmony (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_1)",
    categories: ["Aspect of Elevated Harmony (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_ELEVATED_HARMONY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Enlightening Flame"] = new engine.RulesElement({
    name: "Aspect of Enlightening Flame",
    type: "Power",
    id: "ID_FMP_POWER_11180",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11180",
    categories: ["Aspect of Enlightening Flame", "ID_FMP_POWER_11180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Enlightening Flame (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Enlightening Flame (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_0)",
    categories: ["Aspect of Enlightening Flame (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Enlightening Flame (Augment 1)"] = new engine.RulesElement({
    name: "Aspect of Enlightening Flame (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_1)",
    categories: ["Aspect of Enlightening Flame (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_ENLIGHTENING_FLAME_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Living Stone"] = new engine.RulesElement({
    name: "Aspect of Living Stone",
    type: "Power",
    id: "ID_FMP_POWER_11165",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11165",
    categories: ["Aspect of Living Stone", "ID_FMP_POWER_11165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Living Stone (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Living Stone (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_LIVING_STONE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_LIVING_STONE_(AUGMENT_0)",
    categories: ["Aspect of Living Stone (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_LIVING_STONE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Living Stone (Augment 1)"] = new engine.RulesElement({
    name: "Aspect of Living Stone (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_LIVING_STONE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_LIVING_STONE_(AUGMENT_1)",
    categories: ["Aspect of Living Stone (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_LIVING_STONE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Luminous Thought"] = new engine.RulesElement({
    name: "Aspect of Luminous Thought",
    type: "Power",
    id: "ID_FMP_POWER_11194",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11194",
    categories: ["Aspect of Luminous Thought", "ID_FMP_POWER_11194", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Luminous Thought (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Luminous Thought (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_0)",
    categories: ["Aspect of Luminous Thought (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Luminous Thought (Augment 2)"] = new engine.RulesElement({
    name: "Aspect of Luminous Thought (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_2)",
    categories: ["Aspect of Luminous Thought (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_LUMINOUS_THOUGHT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Stolen Identity"] = new engine.RulesElement({
    name: "Aspect of Stolen Identity",
    type: "Power",
    id: "ID_FMP_POWER_11187",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11187",
    categories: ["Aspect of Stolen Identity", "ID_FMP_POWER_11187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Stolen Identity (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of Stolen Identity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_0)",
    categories: ["Aspect of Stolen Identity (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Stolen Identity (Augment 2)"] = new engine.RulesElement({
    name: "Aspect of Stolen Identity (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_2)",
    categories: ["Aspect of Stolen Identity (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_STOLEN_IDENTITY_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Iron Guardian"] = new engine.RulesElement({
    name: "Aspect of the Iron Guardian",
    type: "Power",
    id: "ID_FMP_POWER_11205",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11205",
    categories: ["Aspect of the Iron Guardian", "ID_FMP_POWER_11205", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_594", "Iron Guardian", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Iron Guardian (Augment 0)"] = new engine.RulesElement({
    name: "Aspect of the Iron Guardian (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0)",
    categories: ["Aspect of the Iron Guardian (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Iron Guardian (Augment 1)"] = new engine.RulesElement({
    name: "Aspect of the Iron Guardian (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1)",
    categories: ["Aspect of the Iron Guardian (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Avalanche Throw"] = new engine.RulesElement({
    name: "Avalanche Throw",
    type: "Power",
    id: "ID_FMP_POWER_11264",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11264",
    categories: ["Avalanche Throw", "ID_FMP_POWER_11264", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_596", "Mountain Devotee", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Hammer"] = new engine.RulesElement({
    name: "Avenging Hammer",
    type: "Power",
    id: "ID_FMP_POWER_11449",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11449",
    categories: ["Avenging Hammer", "ID_FMP_POWER_11449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_603", "Hammer of Vengeance (PH3)", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Awaken the Slumbering Hurt"] = new engine.RulesElement({
    name: "Awaken the Slumbering Hurt",
    type: "Power",
    id: "ID_FMP_POWER_11208",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11208",
    categories: ["Awaken the Slumbering Hurt", "ID_FMP_POWER_11208", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11209"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Awaken the Slumbering Hurt [Movement Technique]"] = new engine.RulesElement({
    name: "Awaken the Slumbering Hurt [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11209",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11209",
    categories: ["Awaken the Slumbering Hurt [Movement Technique]", "ID_FMP_POWER_11209", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Shot"] = new engine.RulesElement({
    name: "Baleful Shot",
    type: "Power",
    id: "ID_FMP_POWER_9544",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9544",
    categories: ["Baleful Shot", "ID_FMP_POWER_9544", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Balm of the Cultivator"] = new engine.RulesElement({
    name: "Balm of the Cultivator",
    type: "Power",
    id: "ID_FMP_POWER_11572",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11572",
    categories: ["Balm of the Cultivator", "ID_FMP_POWER_11572", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Banner of Alliance"] = new engine.RulesElement({
    name: "Banner of Alliance",
    type: "Power",
    id: "ID_FMP_POWER_11390",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11390",
    categories: ["Banner of Alliance", "ID_FMP_POWER_11390", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Banner of Resolution"] = new engine.RulesElement({
    name: "Banner of Resolution",
    type: "Power",
    id: "ID_FMP_POWER_11404",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11404",
    categories: ["Banner of Resolution", "ID_FMP_POWER_11404", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Banner of the Undefeated"] = new engine.RulesElement({
    name: "Banner of the Undefeated",
    type: "Power",
    id: "ID_FMP_POWER_11430",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11430",
    categories: ["Banner of the Undefeated", "ID_FMP_POWER_11430", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Banner of Victory"] = new engine.RulesElement({
    name: "Banner of Victory",
    type: "Power",
    id: "ID_FMP_POWER_11431",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11431",
    categories: ["Banner of Victory", "ID_FMP_POWER_11431", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Battering Rune"] = new engine.RulesElement({
    name: "Battering Rune",
    type: "Power",
    id: "ID_FMP_POWER_11458",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11458",
    categories: ["Battering Rune", "ID_FMP_POWER_11458", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_606", "Rune Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Aspect"] = new engine.RulesElement({
    name: "Battle Aspect",
    type: "Power",
    id: "ID_FMP_POWER_11175",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11175",
    categories: ["Battle Aspect", "ID_FMP_POWER_11175", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Feint"] = new engine.RulesElement({
    name: "Battle Feint",
    type: "Power",
    id: "ID_FMP_POWER_9304",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9304",
    categories: ["Battle Feint", "ID_FMP_POWER_9304", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Link"] = new engine.RulesElement({
    name: "Battle Link",
    type: "Power",
    id: "ID_FMP_POWER_11101",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11101",
    categories: ["Battle Link", "ID_FMP_POWER_11101", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Resilience"] = new engine.RulesElement({
    name: "Battle Resilience",
    type: "Power",
    id: "ID_FMP_POWER_11155",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11155",
    categories: ["Battle Resilience", "ID_FMP_POWER_11155"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Vortex"] = new engine.RulesElement({
    name: "Battle Vortex",
    type: "Power",
    id: "ID_FMP_POWER_10446",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10446",
    categories: ["Battle Vortex", "ID_FMP_POWER_10446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Vortex (Augment 0)"] = new engine.RulesElement({
    name: "Battle Vortex (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BATTLE_VORTEX_(AUGMENT_0)",
    categories: ["Battle Vortex (Augment 0)", "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Vortex (Augment 1)"] = new engine.RulesElement({
    name: "Battle Vortex (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BATTLE_VORTEX_(AUGMENT_1)",
    categories: ["Battle Vortex (Augment 1)", "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Vortex (Augment 4)"] = new engine.RulesElement({
    name: "Battle Vortex (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BATTLE_VORTEX_(AUGMENT_4)",
    categories: ["Battle Vortex (Augment 4)", "ID_INTERNAL_POWER_BATTLE_VORTEX_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Battleborn Acuity"] = new engine.RulesElement({
    name: "Battleborn Acuity",
    type: "Power",
    id: "ID_FMP_POWER_11064",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11064",
    categories: ["Battleborn Acuity", "ID_FMP_POWER_11064", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Battlemind's Demand"] = new engine.RulesElement({
    name: "Battlemind's Demand",
    type: "Power",
    id: "ID_FMP_POWER_10438",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10438",
    categories: ["Battlemind's Demand", "ID_FMP_POWER_10438"]
  });
  byID[te.id] = te;
  
  te = Power["Battlemind's Demand (Augment 0)"] = new engine.RulesElement({
    name: "Battlemind's Demand (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BATTLEMIND'S_DEMAND_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BATTLEMIND'S_DEMAND_(AUGMENT_0)",
    categories: ["Battlemind's Demand (Augment 0)", "ID_INTERNAL_POWER_BATTLEMIND'S_DEMAND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Battlemind's Demand (Augment 1)"] = new engine.RulesElement({
    name: "Battlemind's Demand (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BATTLEMIND'S_DEMAND_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BATTLEMIND'S_DEMAND_(AUGMENT_1)",
    categories: ["Battlemind's Demand (Augment 1)", "ID_INTERNAL_POWER_BATTLEMIND'S_DEMAND_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Beacon of Vengeance"] = new engine.RulesElement({
    name: "Beacon of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_11382",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11382",
    categories: ["Beacon of Vengeance", "ID_FMP_POWER_11382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Beckoning Strike"] = new engine.RulesElement({
    name: "Beckoning Strike",
    type: "Power",
    id: "ID_FMP_POWER_2629",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2629",
    categories: ["Beckoning Strike", "ID_FMP_POWER_2629", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2630"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Beckoning Strike Attack"] = new engine.RulesElement({
    name: "Beckoning Strike Attack",
    type: "Power",
    id: "ID_FMP_POWER_2630",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2630",
    categories: ["Beckoning Strike Attack", "ID_FMP_POWER_2630", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Befriend"] = new engine.RulesElement({
    name: "Befriend",
    type: "Power",
    id: "ID_FMP_POWER_11541",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11541",
    categories: ["Befriend", "ID_FMP_POWER_11541", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Bend Space"] = new engine.RulesElement({
    name: "Bend Space",
    type: "Power",
    id: "ID_FMP_POWER_11066",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11066",
    categories: ["Bend Space", "ID_FMP_POWER_11066", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Betrayal"] = new engine.RulesElement({
    name: "Betrayal",
    type: "Power",
    id: "ID_FMP_POWER_8233",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8233",
    categories: ["Betrayal", "ID_FMP_POWER_8233", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Betrayal (Augment 0)"] = new engine.RulesElement({
    name: "Betrayal (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BETRAYAL_(AUGMENT_0)",
    categories: ["Betrayal (Augment 0)", "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Betrayal (Augment 1)"] = new engine.RulesElement({
    name: "Betrayal (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BETRAYAL_(AUGMENT_1)",
    categories: ["Betrayal (Augment 1)", "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Betrayal (Augment 2)"] = new engine.RulesElement({
    name: "Betrayal (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BETRAYAL_(AUGMENT_2)",
    categories: ["Betrayal (Augment 2)", "ID_INTERNAL_POWER_BETRAYAL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Aim"] = new engine.RulesElement({
    name: "Binding Aim",
    type: "Power",
    id: "ID_FMP_POWER_11517",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11517",
    categories: ["Binding Aim", "ID_FMP_POWER_11517", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_607", "Death Arrow", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Shot"] = new engine.RulesElement({
    name: "Binding Shot",
    type: "Power",
    id: "ID_FMP_POWER_9521",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9521",
    categories: ["Binding Shot", "ID_FMP_POWER_9521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Strike"] = new engine.RulesElement({
    name: "Binding Strike",
    type: "Power",
    id: "ID_FMP_POWER_10313",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10313",
    categories: ["Binding Strike", "ID_FMP_POWER_10313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_530", "Psionic Binder", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Strike (Augment 0)"] = new engine.RulesElement({
    name: "Binding Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BINDING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BINDING_STRIKE_(AUGMENT_0)",
    categories: ["Binding Strike (Augment 0)", "ID_INTERNAL_POWER_BINDING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Strike (Augment 2)"] = new engine.RulesElement({
    name: "Binding Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BINDING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BINDING_STRIKE_(AUGMENT_2)",
    categories: ["Binding Strike (Augment 2)", "ID_INTERNAL_POWER_BINDING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Biting Swarm"] = new engine.RulesElement({
    name: "Biting Swarm",
    type: "Power",
    id: "ID_FMP_POWER_9503",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9503",
    categories: ["Biting Swarm", "ID_FMP_POWER_9503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Blade Guide"] = new engine.RulesElement({
    name: "Blade Guide",
    type: "Power",
    id: "ID_FMP_POWER_11200",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11200",
    categories: ["Blade Guide", "ID_FMP_POWER_11200"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Guide (Augment 0)"] = new engine.RulesElement({
    name: "Blade Guide (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLADE_GUIDE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BLADE_GUIDE_(AUGMENT_0)",
    categories: ["Blade Guide (Augment 0)", "ID_INTERNAL_POWER_BLADE_GUIDE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Guide (Augment 1)"] = new engine.RulesElement({
    name: "Blade Guide (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLADE_GUIDE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BLADE_GUIDE_(AUGMENT_1)",
    categories: ["Blade Guide (Augment 1)", "ID_INTERNAL_POWER_BLADE_GUIDE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Guide's Counsel"] = new engine.RulesElement({
    name: "Blade Guide's Counsel",
    type: "Power",
    id: "ID_FMP_POWER_11203",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11203",
    categories: ["Blade Guide's Counsel", "ID_FMP_POWER_11203", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_593", "Eternal Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of the Forge"] = new engine.RulesElement({
    name: "Blessing of the Forge",
    type: "Power",
    id: "ID_FMP_POWER_11457",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11457",
    categories: ["Blessing of the Forge", "ID_FMP_POWER_11457", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_605", "Master of the Forge", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Sun Technique"] = new engine.RulesElement({
    name: "Blinding Sun Technique",
    type: "Power",
    id: "ID_FMP_POWER_7491",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7491",
    categories: ["Blinding Sun Technique", "ID_FMP_POWER_7491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_363", "Radiant Fist", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blistering Aversion"] = new engine.RulesElement({
    name: "Blistering Aversion",
    type: "Power",
    id: "ID_FMP_POWER_11142",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11142",
    categories: ["Blistering Aversion", "ID_FMP_POWER_11142", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodthirsty Shift"] = new engine.RulesElement({
    name: "Bloodthirsty Shift",
    type: "Power",
    id: "ID_FMP_POWER_5671",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5671",
    categories: ["Bloodthirsty Shift", "ID_FMP_POWER_5671", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_347", "Blooded Champion", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Despair"] = new engine.RulesElement({
    name: "Bloody Despair",
    type: "Power",
    id: "ID_FMP_POWER_9547",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9547",
    categories: ["Bloody Despair", "ID_FMP_POWER_9547", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_473", "Crimson Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blurred Step"] = new engine.RulesElement({
    name: "Blurred Step",
    type: "Power",
    id: "ID_FMP_POWER_10439",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10439",
    categories: ["Blurred Step", "ID_FMP_POWER_10439"]
  });
  byID[te.id] = te;
  
  te = Power["Blurring Offensive"] = new engine.RulesElement({
    name: "Blurring Offensive",
    type: "Power",
    id: "ID_FMP_POWER_11518",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11518",
    categories: ["Blurring Offensive", "ID_FMP_POWER_11518", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_608", "Swift Strider", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blurring Stride"] = new engine.RulesElement({
    name: "Blurring Stride",
    type: "Power",
    id: "ID_FMP_POWER_9517",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9517",
    categories: ["Blurring Stride", "ID_FMP_POWER_9517", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Body Adjustment"] = new engine.RulesElement({
    name: "Body Adjustment",
    type: "Power",
    id: "ID_FMP_POWER_11102",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11102",
    categories: ["Body Adjustment", "ID_FMP_POWER_11102", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Bonds of Time"] = new engine.RulesElement({
    name: "Bonds of Time",
    type: "Power",
    id: "ID_FMP_POWER_11350",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11350",
    categories: ["Bonds of Time", "ID_FMP_POWER_11350", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_601", "Time Bender", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bonds of Time (Augment 0)"] = new engine.RulesElement({
    name: "Bonds of Time (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BONDS_OF_TIME_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BONDS_OF_TIME_(AUGMENT_0)",
    categories: ["Bonds of Time (Augment 0)", "ID_INTERNAL_POWER_BONDS_OF_TIME_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Bonds of Time (Augment 2)"] = new engine.RulesElement({
    name: "Bonds of Time (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BONDS_OF_TIME_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BONDS_OF_TIME_(AUGMENT_2)",
    categories: ["Bonds of Time (Augment 2)", "ID_INTERNAL_POWER_BONDS_OF_TIME_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Bones of the Earth"] = new engine.RulesElement({
    name: "Bones of the Earth",
    type: "Power",
    id: "ID_FMP_POWER_3801",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3801",
    categories: ["Bones of the Earth", "ID_FMP_POWER_3801", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Borrowed Time"] = new engine.RulesElement({
    name: "Borrowed Time",
    type: "Power",
    id: "ID_FMP_POWER_11137",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11137",
    categories: ["Borrowed Time", "ID_FMP_POWER_11137", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Leap"] = new engine.RulesElement({
    name: "Bounding Leap",
    type: "Power",
    id: "ID_FMP_POWER_9301",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9301",
    categories: ["Bounding Leap", "ID_FMP_POWER_9301", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Bountiful Life"] = new engine.RulesElement({
    name: "Bountiful Life",
    type: "Power",
    id: "ID_FMP_POWER_10297",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10297",
    categories: ["Bountiful Life", "ID_FMP_POWER_10297", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bramble Hide"] = new engine.RulesElement({
    name: "Bramble Hide",
    type: "Power",
    id: "ID_FMP_POWER_9529",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9529",
    categories: ["Bramble Hide", "ID_FMP_POWER_9529", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Brand of Arcing Lightning"] = new engine.RulesElement({
    name: "Brand of Arcing Lightning",
    type: "Power",
    id: "ID_FMP_POWER_11412",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11412",
    categories: ["Brand of Arcing Lightning", "ID_FMP_POWER_11412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Brand of Death's Gate"] = new engine.RulesElement({
    name: "Brand of Death's Gate",
    type: "Power",
    id: "ID_FMP_POWER_11446",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11446",
    categories: ["Brand of Death's Gate", "ID_FMP_POWER_11446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Recovery"] = new engine.RulesElement({
    name: "Brilliant Recovery",
    type: "Power",
    id: "ID_FMP_POWER_10457",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10457",
    categories: ["Brilliant Recovery", "ID_FMP_POWER_10457", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Recovery (Augment 0)"] = new engine.RulesElement({
    name: "Brilliant Recovery (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRILLIANT_RECOVERY_(AUGMENT_0)",
    categories: ["Brilliant Recovery (Augment 0)", "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Recovery (Augment 2)"] = new engine.RulesElement({
    name: "Brilliant Recovery (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRILLIANT_RECOVERY_(AUGMENT_2)",
    categories: ["Brilliant Recovery (Augment 2)", "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Recovery (Augment 6)"] = new engine.RulesElement({
    name: "Brilliant Recovery (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRILLIANT_RECOVERY_(AUGMENT_6)",
    categories: ["Brilliant Recovery (Augment 6)", "ID_INTERNAL_POWER_BRILLIANT_RECOVERY_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Strategy"] = new engine.RulesElement({
    name: "Brilliant Strategy",
    type: "Power",
    id: "ID_FMP_POWER_11526",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11526",
    categories: ["Brilliant Strategy", "ID_FMP_POWER_11526", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_618", "War Master", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Barrage"] = new engine.RulesElement({
    name: "Brutal Barrage",
    type: "Power",
    id: "ID_FMP_POWER_2641",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2641",
    categories: ["Brutal Barrage", "ID_FMP_POWER_2641", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Barrage (Augment 0)"] = new engine.RulesElement({
    name: "Brutal Barrage (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRUTAL_BARRAGE_(AUGMENT_0)",
    categories: ["Brutal Barrage (Augment 0)", "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Barrage (Augment 1)"] = new engine.RulesElement({
    name: "Brutal Barrage (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRUTAL_BARRAGE_(AUGMENT_1)",
    categories: ["Brutal Barrage (Augment 1)", "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Barrage (Augment 4)"] = new engine.RulesElement({
    name: "Brutal Barrage (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BRUTAL_BARRAGE_(AUGMENT_4)",
    categories: ["Brutal Barrage (Augment 4)", "ID_INTERNAL_POWER_BRUTAL_BARRAGE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Bull's Strength"] = new engine.RulesElement({
    name: "Bull's Strength",
    type: "Power",
    id: "ID_FMP_POWER_11157",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11157",
    categories: ["Bull's Strength", "ID_FMP_POWER_11157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bull's Strength (Augment 0)"] = new engine.RulesElement({
    name: "Bull's Strength (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BULL'S_STRENGTH_(AUGMENT_0)",
    categories: ["Bull's Strength (Augment 0)", "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Bull's Strength (Augment 1)"] = new engine.RulesElement({
    name: "Bull's Strength (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BULL'S_STRENGTH_(AUGMENT_1)",
    categories: ["Bull's Strength (Augment 1)", "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Bull's Strength (Augment 2)"] = new engine.RulesElement({
    name: "Bull's Strength (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BULL'S_STRENGTH_(AUGMENT_2)",
    categories: ["Bull's Strength (Augment 2)", "ID_INTERNAL_POWER_BULL'S_STRENGTH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Burgeoning Reserves"] = new engine.RulesElement({
    name: "Burgeoning Reserves",
    type: "Power",
    id: "ID_FMP_POWER_11151",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11151",
    categories: ["Burgeoning Reserves", "ID_FMP_POWER_11151", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_591", "Argent Soul", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Flux"] = new engine.RulesElement({
    name: "Burning Flux",
    type: "Power",
    id: "ID_FMP_POWER_11275",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11275",
    categories: ["Burning Flux", "ID_FMP_POWER_11275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Flux (Augment 0)"] = new engine.RulesElement({
    name: "Burning Flux (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BURNING_FLUX_(AUGMENT_0)",
    categories: ["Burning Flux (Augment 0)", "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Flux (Augment 1)"] = new engine.RulesElement({
    name: "Burning Flux (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BURNING_FLUX_(AUGMENT_1)",
    categories: ["Burning Flux (Augment 1)", "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Flux (Augment 2)"] = new engine.RulesElement({
    name: "Burning Flux (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BURNING_FLUX_(AUGMENT_2)",
    categories: ["Burning Flux (Augment 2)", "ID_INTERNAL_POWER_BURNING_FLUX_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Burrowing Shot"] = new engine.RulesElement({
    name: "Burrowing Shot",
    type: "Power",
    id: "ID_FMP_POWER_11473",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11473",
    categories: ["Burrowing Shot", "ID_FMP_POWER_11473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Burrowing Stride"] = new engine.RulesElement({
    name: "Burrowing Stride",
    type: "Power",
    id: "ID_FMP_POWER_11486",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11486",
    categories: ["Burrowing Stride", "ID_FMP_POWER_11486", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Cowardice"] = new engine.RulesElement({
    name: "Cage of Cowardice",
    type: "Power",
    id: "ID_FMP_POWER_10458",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10458",
    categories: ["Cage of Cowardice", "ID_FMP_POWER_10458", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Cowardice (Augment 0)"] = new engine.RulesElement({
    name: "Cage of Cowardice (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CAGE_OF_COWARDICE_(AUGMENT_0)",
    categories: ["Cage of Cowardice (Augment 0)", "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Cowardice (Augment 2)"] = new engine.RulesElement({
    name: "Cage of Cowardice (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CAGE_OF_COWARDICE_(AUGMENT_2)",
    categories: ["Cage of Cowardice (Augment 2)", "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Cowardice (Augment 6)"] = new engine.RulesElement({
    name: "Cage of Cowardice (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CAGE_OF_COWARDICE_(AUGMENT_6)",
    categories: ["Cage of Cowardice (Augment 6)", "ID_INTERNAL_POWER_CAGE_OF_COWARDICE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Light"] = new engine.RulesElement({
    name: "Cage of Light",
    type: "Power",
    id: "ID_FMP_POWER_11386",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11386",
    categories: ["Cage of Light", "ID_FMP_POWER_11386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Call of Iron"] = new engine.RulesElement({
    name: "Call of Iron",
    type: "Power",
    id: "ID_FMP_POWER_11455",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11455",
    categories: ["Call of Iron", "ID_FMP_POWER_11455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_605", "Master of the Forge", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Call of the Ghost Wolf"] = new engine.RulesElement({
    name: "Call of the Ghost Wolf",
    type: "Power",
    id: "ID_FMP_POWER_11476",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11476",
    categories: ["Call of the Ghost Wolf", "ID_FMP_POWER_11476", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Captivating Missile"] = new engine.RulesElement({
    name: "Captivating Missile",
    type: "Power",
    id: "ID_FMP_POWER_9534",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9534",
    categories: ["Captivating Missile", "ID_FMP_POWER_9534", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Careful Stride"] = new engine.RulesElement({
    name: "Careful Stride",
    type: "Power",
    id: "ID_FMP_POWER_11214",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11214",
    categories: ["Careful Stride", "ID_FMP_POWER_11214", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Drunken Boxer"] = new engine.RulesElement({
    name: "Celestial Drunken Boxer",
    type: "Power",
    id: "ID_FMP_POWER_7533",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7533",
    categories: ["Celestial Drunken Boxer", "ID_FMP_POWER_7533", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7532"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Celestial Drunken Boxer [Movement Technique]"] = new engine.RulesElement({
    name: "Celestial Drunken Boxer [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7532",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7532",
    categories: ["Celestial Drunken Boxer [Movement Technique]", "ID_FMP_POWER_7532", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Censure the Unholy"] = new engine.RulesElement({
    name: "Censure the Unholy",
    type: "Power",
    id: "ID_FMP_POWER_11591",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11591",
    categories: ["Censure the Unholy", "ID_FMP_POWER_11591", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Centered Defense"] = new engine.RulesElement({
    name: "Centered Defense",
    type: "Power",
    id: "ID_FMP_POWER_7463",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7463",
    categories: ["Centered Defense", "ID_FMP_POWER_7463", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Centered Flurry of Blows"] = new engine.RulesElement({
    name: "Centered Flurry of Blows",
    type: "Power",
    id: "ID_FMP_POWER_7448",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7448",
    categories: ["Centered Flurry of Blows", "ID_FMP_POWER_7448"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Blaze"] = new engine.RulesElement({
    name: "Cerulean Blaze",
    type: "Power",
    id: "ID_FMP_POWER_8264",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8264",
    categories: ["Cerulean Blaze", "ID_FMP_POWER_8264", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_438", "Cerulean Adept", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Blaze (Augment 0)"] = new engine.RulesElement({
    name: "Cerulean Blaze (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CERULEAN_BLAZE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CERULEAN_BLAZE_(AUGMENT_0)",
    categories: ["Cerulean Blaze (Augment 0)", "ID_INTERNAL_POWER_CERULEAN_BLAZE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Blaze (Augment 2)"] = new engine.RulesElement({
    name: "Cerulean Blaze (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CERULEAN_BLAZE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CERULEAN_BLAZE_(AUGMENT_2)",
    categories: ["Cerulean Blaze (Augment 2)", "ID_INTERNAL_POWER_CERULEAN_BLAZE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Affinity"] = new engine.RulesElement({
    name: "Chains of Affinity",
    type: "Power",
    id: "ID_FMP_POWER_11134",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11134",
    categories: ["Chains of Affinity", "ID_FMP_POWER_11134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["City Dweller"] = new engine.RulesElement({
    name: "City Dweller",
    type: "Power",
    id: "ID_FMP_POWER_11597",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11597",
    categories: ["City Dweller", "ID_FMP_POWER_11597", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["City Rat"] = new engine.RulesElement({
    name: "City Rat",
    type: "Power",
    id: "ID_FMP_POWER_9341",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9341",
    categories: ["City Rat", "ID_FMP_POWER_9341", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Clasp of the Psion"] = new engine.RulesElement({
    name: "Clasp of the Psion",
    type: "Power",
    id: "ID_FMP_POWER_11344",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11344",
    categories: ["Clasp of the Psion", "ID_FMP_POWER_11344", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of Force"] = new engine.RulesElement({
    name: "Claws of Force",
    type: "Power",
    id: "ID_FMP_POWER_11342",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11342",
    categories: ["Claws of Force", "ID_FMP_POWER_11342", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of Force (Augment 0)"] = new engine.RulesElement({
    name: "Claws of Force (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CLAWS_OF_FORCE_(AUGMENT_0)",
    categories: ["Claws of Force (Augment 0)", "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of Force (Augment 2)"] = new engine.RulesElement({
    name: "Claws of Force (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CLAWS_OF_FORCE_(AUGMENT_2)",
    categories: ["Claws of Force (Augment 2)", "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of Force (Augment 6)"] = new engine.RulesElement({
    name: "Claws of Force (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CLAWS_OF_FORCE_(AUGMENT_6)",
    categories: ["Claws of Force (Augment 6)", "ID_INTERNAL_POWER_CLAWS_OF_FORCE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Clear the Slate"] = new engine.RulesElement({
    name: "Clear the Slate",
    type: "Power",
    id: "ID_FMP_POWER_11321",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11321",
    categories: ["Clear the Slate", "ID_FMP_POWER_11321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Quills"] = new engine.RulesElement({
    name: "Cloak of Quills",
    type: "Power",
    id: "ID_FMP_POWER_11479",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11479",
    categories: ["Cloak of Quills", "ID_FMP_POWER_11479", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Doom"] = new engine.RulesElement({
    name: "Cloud of Doom",
    type: "Power",
    id: "ID_FMP_POWER_11516",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11516",
    categories: ["Cloud of Doom", "ID_FMP_POWER_11516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_607", "Death Arrow", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Combined Effort"] = new engine.RulesElement({
    name: "Combined Effort",
    type: "Power",
    id: "ID_FMP_POWER_10317",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10317",
    categories: ["Combined Effort", "ID_FMP_POWER_10317", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_531", "Talaric Strategist", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Compact of Peace"] = new engine.RulesElement({
    name: "Compact of Peace",
    type: "Power",
    id: "ID_FMP_POWER_11391",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11391",
    categories: ["Compact of Peace", "ID_FMP_POWER_11391", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Concealed Shift"] = new engine.RulesElement({
    name: "Concealed Shift",
    type: "Power",
    id: "ID_FMP_POWER_9339",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9339",
    categories: ["Concealed Shift", "ID_FMP_POWER_9339", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Concussion Burst"] = new engine.RulesElement({
    name: "Concussion Burst",
    type: "Power",
    id: "ID_FMP_POWER_11325",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11325",
    categories: ["Concussion Burst", "ID_FMP_POWER_11325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Concussion Burst (Augment 0)"] = new engine.RulesElement({
    name: "Concussion Burst (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSION_BURST_(AUGMENT_0)",
    categories: ["Concussion Burst (Augment 0)", "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Concussion Burst (Augment 1)"] = new engine.RulesElement({
    name: "Concussion Burst (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSION_BURST_(AUGMENT_1)",
    categories: ["Concussion Burst (Augment 1)", "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Concussion Burst (Augment 4)"] = new engine.RulesElement({
    name: "Concussion Burst (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSION_BURST_(AUGMENT_4)",
    categories: ["Concussion Burst (Augment 4)", "ID_INTERNAL_POWER_CONCUSSION_BURST_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Concussive Detonation"] = new engine.RulesElement({
    name: "Concussive Detonation",
    type: "Power",
    id: "ID_FMP_POWER_8260",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8260",
    categories: ["Concussive Detonation", "ID_FMP_POWER_8260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Concussive Detonation (Augment 0)"] = new engine.RulesElement({
    name: "Concussive Detonation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSIVE_DETONATION_(AUGMENT_0)",
    categories: ["Concussive Detonation (Augment 0)", "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Concussive Detonation (Augment 2)"] = new engine.RulesElement({
    name: "Concussive Detonation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSIVE_DETONATION_(AUGMENT_2)",
    categories: ["Concussive Detonation (Augment 2)", "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Concussive Detonation (Augment 6)"] = new engine.RulesElement({
    name: "Concussive Detonation (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONCUSSIVE_DETONATION_(AUGMENT_6)",
    categories: ["Concussive Detonation (Augment 6)", "ID_INTERNAL_POWER_CONCUSSIVE_DETONATION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Conflagration Spirit"] = new engine.RulesElement({
    name: "Conflagration Spirit",
    type: "Power",
    id: "ID_FMP_POWER_11498",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11498",
    categories: ["Conflagration Spirit", "ID_FMP_POWER_11498", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Blather"] = new engine.RulesElement({
    name: "Confusing Blather",
    type: "Power",
    id: "ID_FMP_POWER_9305",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9305",
    categories: ["Confusing Blather", "ID_FMP_POWER_9305", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Strike"] = new engine.RulesElement({
    name: "Confusing Strike",
    type: "Power",
    id: "ID_FMP_POWER_11123",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11123",
    categories: ["Confusing Strike", "ID_FMP_POWER_11123", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Strike (Augment 0)"] = new engine.RulesElement({
    name: "Confusing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONFUSING_STRIKE_(AUGMENT_0)",
    categories: ["Confusing Strike (Augment 0)", "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Strike (Augment 1)"] = new engine.RulesElement({
    name: "Confusing Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONFUSING_STRIKE_(AUGMENT_1)",
    categories: ["Confusing Strike (Augment 1)", "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Strike (Augment 4)"] = new engine.RulesElement({
    name: "Confusing Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CONFUSING_STRIKE_(AUGMENT_4)",
    categories: ["Confusing Strike (Augment 4)", "ID_INTERNAL_POWER_CONFUSING_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Conviction"] = new engine.RulesElement({
    name: "Conviction",
    type: "Power",
    id: "ID_FMP_POWER_9337",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9337",
    categories: ["Conviction", "ID_FMP_POWER_9337", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Convocation of Arrows"] = new engine.RulesElement({
    name: "Convocation of Arrows",
    type: "Power",
    id: "ID_FMP_POWER_11496",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11496",
    categories: ["Convocation of Arrows", "ID_FMP_POWER_11496", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Corona of Battle"] = new engine.RulesElement({
    name: "Corona of Battle",
    type: "Power",
    id: "ID_FMP_POWER_10307",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10307",
    categories: ["Corona of Battle", "ID_FMP_POWER_10307", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Corralling Shot"] = new engine.RulesElement({
    name: "Corralling Shot",
    type: "Power",
    id: "ID_FMP_POWER_9514",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9514",
    categories: ["Corralling Shot", "ID_FMP_POWER_9514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Corrosive Slime"] = new engine.RulesElement({
    name: "Corrosive Slime",
    type: "Power",
    id: "ID_FMP_POWER_9527",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9527",
    categories: ["Corrosive Slime", "ID_FMP_POWER_9527", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Courageous Strike"] = new engine.RulesElement({
    name: "Courageous Strike",
    type: "Power",
    id: "ID_FMP_POWER_10287",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10287",
    categories: ["Courageous Strike", "ID_FMP_POWER_10287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Courageous Strike (Augment 0)"] = new engine.RulesElement({
    name: "Courageous Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_COURAGEOUS_STRIKE_(AUGMENT_0)",
    categories: ["Courageous Strike (Augment 0)", "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Courageous Strike (Augment 1)"] = new engine.RulesElement({
    name: "Courageous Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_COURAGEOUS_STRIKE_(AUGMENT_1)",
    categories: ["Courageous Strike (Augment 1)", "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Courageous Strike (Augment 2)"] = new engine.RulesElement({
    name: "Courageous Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_COURAGEOUS_STRIKE_(AUGMENT_2)",
    categories: ["Courageous Strike (Augment 2)", "ID_INTERNAL_POWER_COURAGEOUS_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Crane Dance"] = new engine.RulesElement({
    name: "Crane Dance",
    type: "Power",
    id: "ID_FMP_POWER_11228",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11228",
    categories: ["Crane Dance", "ID_FMP_POWER_11228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Crane's Wings"] = new engine.RulesElement({
    name: "Crane's Wings",
    type: "Power",
    id: "ID_FMP_POWER_7535",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7535",
    categories: ["Crane's Wings", "ID_FMP_POWER_7535", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7537"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Crane's Wings [Movement Technique]"] = new engine.RulesElement({
    name: "Crane's Wings [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7537",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7537",
    categories: ["Crane's Wings [Movement Technique]", "ID_FMP_POWER_7537", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Cranial Disturbance"] = new engine.RulesElement({
    name: "Cranial Disturbance",
    type: "Power",
    id: "ID_FMP_POWER_11319",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11319",
    categories: ["Cranial Disturbance", "ID_FMP_POWER_11319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cranial Disturbance (Augment 0)"] = new engine.RulesElement({
    name: "Cranial Disturbance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRANIAL_DISTURBANCE_(AUGMENT_0)",
    categories: ["Cranial Disturbance (Augment 0)", "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cranial Disturbance (Augment 1)"] = new engine.RulesElement({
    name: "Cranial Disturbance (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRANIAL_DISTURBANCE_(AUGMENT_1)",
    categories: ["Cranial Disturbance (Augment 1)", "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Cranial Disturbance (Augment 2)"] = new engine.RulesElement({
    name: "Cranial Disturbance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRANIAL_DISTURBANCE_(AUGMENT_2)",
    categories: ["Cranial Disturbance (Augment 2)", "ID_INTERNAL_POWER_CRANIAL_DISTURBANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Crisis of Breath"] = new engine.RulesElement({
    name: "Crisis of Breath",
    type: "Power",
    id: "ID_FMP_POWER_11333",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11333",
    categories: ["Crisis of Breath", "ID_FMP_POWER_11333", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crisis of Identity"] = new engine.RulesElement({
    name: "Crisis of Identity",
    type: "Power",
    id: "ID_FMP_POWER_8235",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8235",
    categories: ["Crisis of Identity", "ID_FMP_POWER_8235", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Crowd Cover"] = new engine.RulesElement({
    name: "Crowd Cover",
    type: "Power",
    id: "ID_FMP_POWER_9340",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9340",
    categories: ["Crowd Cover", "ID_FMP_POWER_9340", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Crush"] = new engine.RulesElement({
    name: "Cruel Crush",
    type: "Power",
    id: "ID_FMP_POWER_11338",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11338",
    categories: ["Cruel Crush", "ID_FMP_POWER_11338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Crush (Augment 0)"] = new engine.RulesElement({
    name: "Cruel Crush (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRUEL_CRUSH_(AUGMENT_0)",
    categories: ["Cruel Crush (Augment 0)", "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Crush (Augment 2)"] = new engine.RulesElement({
    name: "Cruel Crush (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRUEL_CRUSH_(AUGMENT_2)",
    categories: ["Cruel Crush (Augment 2)", "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Crush (Augment 6)"] = new engine.RulesElement({
    name: "Cruel Crush (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRUEL_CRUSH_(AUGMENT_6)",
    categories: ["Cruel Crush (Augment 6)", "ID_INTERNAL_POWER_CRUEL_CRUSH_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Bludgeon"] = new engine.RulesElement({
    name: "Crushing Bludgeon",
    type: "Power",
    id: "ID_FMP_POWER_11327",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11327",
    categories: ["Crushing Bludgeon", "ID_FMP_POWER_11327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Cry for Mercy"] = new engine.RulesElement({
    name: "Cry for Mercy",
    type: "Power",
    id: "ID_FMP_POWER_9310",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9310",
    categories: ["Cry for Mercy", "ID_FMP_POWER_9310", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Crystalline Bonds"] = new engine.RulesElement({
    name: "Crystalline Bonds",
    type: "Power",
    id: "ID_FMP_POWER_11331",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11331",
    categories: ["Crystalline Bonds", "ID_FMP_POWER_11331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Crystalline Bonds (Augment 0)"] = new engine.RulesElement({
    name: "Crystalline Bonds (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRYSTALLINE_BONDS_(AUGMENT_0)",
    categories: ["Crystalline Bonds (Augment 0)", "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Crystalline Bonds (Augment 1)"] = new engine.RulesElement({
    name: "Crystalline Bonds (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRYSTALLINE_BONDS_(AUGMENT_1)",
    categories: ["Crystalline Bonds (Augment 1)", "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Crystalline Bonds (Augment 4)"] = new engine.RulesElement({
    name: "Crystalline Bonds (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_CRYSTALLINE_BONDS_(AUGMENT_4)",
    categories: ["Crystalline Bonds (Augment 4)", "ID_INTERNAL_POWER_CRYSTALLINE_BONDS_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Daggers of Pain"] = new engine.RulesElement({
    name: "Daggers of Pain",
    type: "Power",
    id: "ID_FMP_POWER_8256",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8256",
    categories: ["Daggers of Pain", "ID_FMP_POWER_8256", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Daggers of Pain (Augment 0)"] = new engine.RulesElement({
    name: "Daggers of Pain (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAGGERS_OF_PAIN_(AUGMENT_0)",
    categories: ["Daggers of Pain (Augment 0)", "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Daggers of Pain (Augment 2)"] = new engine.RulesElement({
    name: "Daggers of Pain (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAGGERS_OF_PAIN_(AUGMENT_2)",
    categories: ["Daggers of Pain (Augment 2)", "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Daggers of Pain (Augment 6)"] = new engine.RulesElement({
    name: "Daggers of Pain (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAGGERS_OF_PAIN_(AUGMENT_6)",
    categories: ["Daggers of Pain (Augment 6)", "ID_INTERNAL_POWER_DAGGERS_OF_PAIN_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Swords"] = new engine.RulesElement({
    name: "Dance of Swords",
    type: "Power",
    id: "ID_FMP_POWER_7459",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7459",
    categories: ["Dance of Swords", "ID_FMP_POWER_7459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7518"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dance of Swords [Movement Technique]"] = new engine.RulesElement({
    name: "Dance of Swords [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7518",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7518",
    categories: ["Dance of Swords [Movement Technique]", "ID_FMP_POWER_7518", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of the Stinging Hornet"] = new engine.RulesElement({
    name: "Dance of the Stinging Hornet",
    type: "Power",
    id: "ID_FMP_POWER_7471",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7471",
    categories: ["Dance of the Stinging Hornet", "ID_FMP_POWER_7471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7522"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dance of the Stinging Hornet [Movement Technique]"] = new engine.RulesElement({
    name: "Dance of the Stinging Hornet [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7522",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7522",
    categories: ["Dance of the Stinging Hornet [Movement Technique]", "ID_FMP_POWER_7522", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dancer on the Sea of Battle"] = new engine.RulesElement({
    name: "Dancer on the Sea of Battle",
    type: "Power",
    id: "ID_FMP_POWER_11237",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11237",
    categories: ["Dancer on the Sea of Battle", "ID_FMP_POWER_11237", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Cobra"] = new engine.RulesElement({
    name: "Dancing Cobra",
    type: "Power",
    id: "ID_FMP_POWER_7449",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7449",
    categories: ["Dancing Cobra", "ID_FMP_POWER_7449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7512"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dancing Cobra [Movement Technique]"] = new engine.RulesElement({
    name: "Dancing Cobra [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7512",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7512",
    categories: ["Dancing Cobra [Movement Technique]", "ID_FMP_POWER_7512", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dawning Light"] = new engine.RulesElement({
    name: "Dawning Light",
    type: "Power",
    id: "ID_FMP_POWER_11453",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11453",
    categories: ["Dawning Light", "ID_FMP_POWER_11453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_604", "Light Bringer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Assault"] = new engine.RulesElement({
    name: "Dazzling Assault",
    type: "Power",
    id: "ID_FMP_POWER_11184",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11184",
    categories: ["Dazzling Assault", "ID_FMP_POWER_11184", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Assault (Augment 0)"] = new engine.RulesElement({
    name: "Dazzling Assault (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAZZLING_ASSAULT_(AUGMENT_0)",
    categories: ["Dazzling Assault (Augment 0)", "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Assault (Augment 1)"] = new engine.RulesElement({
    name: "Dazzling Assault (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAZZLING_ASSAULT_(AUGMENT_1)",
    categories: ["Dazzling Assault (Augment 1)", "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Assault (Augment 4)"] = new engine.RulesElement({
    name: "Dazzling Assault (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DAZZLING_ASSAULT_(AUGMENT_4)",
    categories: ["Dazzling Assault (Augment 4)", "ID_INTERNAL_POWER_DAZZLING_ASSAULT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Cobra Strike"] = new engine.RulesElement({
    name: "Deadly Cobra Strike",
    type: "Power",
    id: "ID_FMP_POWER_7461",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7461",
    categories: ["Deadly Cobra Strike", "ID_FMP_POWER_7461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Haste Attack"] = new engine.RulesElement({
    name: "Deadly Haste Attack",
    type: "Power",
    id: "ID_FMP_POWER_10455",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10455",
    categories: ["Deadly Haste Attack", "ID_FMP_POWER_10455", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Haste Strike"] = new engine.RulesElement({
    name: "Deadly Haste Strike",
    type: "Power",
    id: "ID_FMP_POWER_10454",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10454",
    categories: ["Deadly Haste Strike", "ID_FMP_POWER_10454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10455"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Death's Chilled Embrace"] = new engine.RulesElement({
    name: "Death's Chilled Embrace",
    type: "Power",
    id: "ID_FMP_POWER_11240",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11240",
    categories: ["Death's Chilled Embrace", "ID_FMP_POWER_11240", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11241"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Death's Chilled Embrace [Movement Technique]"] = new engine.RulesElement({
    name: "Death's Chilled Embrace [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11241",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11241",
    categories: ["Death's Chilled Embrace [Movement Technique]", "ID_FMP_POWER_11241", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Verge Attack"] = new engine.RulesElement({
    name: "Death's Verge Attack",
    type: "Power",
    id: "ID_FMP_POWER_11401",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11401",
    categories: ["Death's Verge Attack", "ID_FMP_POWER_11401", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Shadows"] = new engine.RulesElement({
    name: "Deep Shadows",
    type: "Power",
    id: "ID_FMP_POWER_11544",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11544",
    categories: ["Deep Shadows", "ID_FMP_POWER_11544", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Deepening Gloom"] = new engine.RulesElement({
    name: "Deepening Gloom",
    type: "Power",
    id: "ID_FMP_POWER_11595",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11595",
    categories: ["Deepening Gloom", "ID_FMP_POWER_11595", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Deflecting Disk"] = new engine.RulesElement({
    name: "Deflecting Disk",
    type: "Power",
    id: "ID_FMP_POWER_10301",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10301",
    categories: ["Deflecting Disk", "ID_FMP_POWER_10301", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Delay Poison"] = new engine.RulesElement({
    name: "Delay Poison",
    type: "Power",
    id: "ID_FMP_POWER_11549",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11549",
    categories: ["Delay Poison", "ID_FMP_POWER_11549", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Demon Dance"] = new engine.RulesElement({
    name: "Demon Dance",
    type: "Power",
    id: "ID_FMP_POWER_2628",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2628",
    categories: ["Demon Dance", "ID_FMP_POWER_2628", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Demon Dance (Augment 0)"] = new engine.RulesElement({
    name: "Demon Dance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMON_DANCE_(AUGMENT_0)",
    categories: ["Demon Dance (Augment 0)", "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Demon Dance (Augment 1)"] = new engine.RulesElement({
    name: "Demon Dance (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMON_DANCE_(AUGMENT_1)",
    categories: ["Demon Dance (Augment 1)", "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Demon Dance (Augment 2)"] = new engine.RulesElement({
    name: "Demon Dance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMON_DANCE_(AUGMENT_2)",
    categories: ["Demon Dance (Augment 2)", "ID_INTERNAL_POWER_DEMON_DANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Demoralize Foe"] = new engine.RulesElement({
    name: "Demoralize Foe",
    type: "Power",
    id: "ID_FMP_POWER_9327",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9327",
    categories: ["Demoralize Foe", "ID_FMP_POWER_9327", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Demoralizing Strike"] = new engine.RulesElement({
    name: "Demoralizing Strike",
    type: "Power",
    id: "ID_FMP_POWER_11061",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11061",
    categories: ["Demoralizing Strike", "ID_FMP_POWER_11061", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Demoralizing Strike (Augment 0)"] = new engine.RulesElement({
    name: "Demoralizing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMORALIZING_STRIKE_(AUGMENT_0)",
    categories: ["Demoralizing Strike (Augment 0)", "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Demoralizing Strike (Augment 1)"] = new engine.RulesElement({
    name: "Demoralizing Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMORALIZING_STRIKE_(AUGMENT_1)",
    categories: ["Demoralizing Strike (Augment 1)", "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Demoralizing Strike (Augment 2)"] = new engine.RulesElement({
    name: "Demoralizing Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DEMORALIZING_STRIKE_(AUGMENT_2)",
    categories: ["Demoralizing Strike (Augment 2)", "ID_INTERNAL_POWER_DEMORALIZING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Devouring Arrow"] = new engine.RulesElement({
    name: "Devouring Arrow",
    type: "Power",
    id: "ID_FMP_POWER_9542",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9542",
    categories: ["Devouring Arrow", "ID_FMP_POWER_9542", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Diamond Body"] = new engine.RulesElement({
    name: "Diamond Body",
    type: "Power",
    id: "ID_FMP_POWER_10033",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10033",
    categories: ["Diamond Body", "ID_FMP_POWER_10033", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Defense Assault"] = new engine.RulesElement({
    name: "Diamond Defense Assault",
    type: "Power",
    id: "ID_FMP_POWER_10299",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10299",
    categories: ["Diamond Defense Assault", "ID_FMP_POWER_10299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Defense Assault (Augment 0)"] = new engine.RulesElement({
    name: "Diamond Defense Assault (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_0)",
    categories: ["Diamond Defense Assault (Augment 0)", "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Defense Assault (Augment 1)"] = new engine.RulesElement({
    name: "Diamond Defense Assault (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_1)",
    categories: ["Diamond Defense Assault (Augment 1)", "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Defense Assault (Augment 4)"] = new engine.RulesElement({
    name: "Diamond Defense Assault (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_4)",
    categories: ["Diamond Defense Assault (Augment 4)", "ID_INTERNAL_POWER_DIAMOND_DEFENSE_ASSAULT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Mind"] = new engine.RulesElement({
    name: "Diamond Mind",
    type: "Power",
    id: "ID_FMP_POWER_7475",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7475",
    categories: ["Diamond Mind", "ID_FMP_POWER_7475", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Diehard"] = new engine.RulesElement({
    name: "Diehard",
    type: "Power",
    id: "ID_FMP_POWER_9317",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9317",
    categories: ["Diehard", "ID_FMP_POWER_9317", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dimension Swap"] = new engine.RulesElement({
    name: "Dimension Swap",
    type: "Power",
    id: "ID_FMP_POWER_10279",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10279",
    categories: ["Dimension Swap", "ID_FMP_POWER_10279", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Dirty Tricks"] = new engine.RulesElement({
    name: "Dirty Tricks",
    type: "Power",
    id: "ID_FMP_POWER_11537",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11537",
    categories: ["Dirty Tricks", "ID_FMP_POWER_11537", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dishearten"] = new engine.RulesElement({
    name: "Dishearten",
    type: "Power",
    id: "ID_FMP_POWER_8226",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8226",
    categories: ["Dishearten", "ID_FMP_POWER_8226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dishearten (Augment 0)"] = new engine.RulesElement({
    name: "Dishearten (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISHEARTEN_(AUGMENT_0)",
    categories: ["Dishearten (Augment 0)", "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dishearten (Augment 1)"] = new engine.RulesElement({
    name: "Dishearten (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISHEARTEN_(AUGMENT_1)",
    categories: ["Dishearten (Augment 1)", "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dishearten (Augment 2)"] = new engine.RulesElement({
    name: "Dishearten (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISHEARTEN_(AUGMENT_2)",
    categories: ["Dishearten (Augment 2)", "ID_INTERNAL_POWER_DISHEARTEN_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dismissive Strike"] = new engine.RulesElement({
    name: "Dismissive Strike",
    type: "Power",
    id: "ID_FMP_POWER_10311",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10311",
    categories: ["Dismissive Strike", "ID_FMP_POWER_10311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Dismissive Strike (Augment 0)"] = new engine.RulesElement({
    name: "Dismissive Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISMISSIVE_STRIKE_(AUGMENT_0)",
    categories: ["Dismissive Strike (Augment 0)", "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dismissive Strike (Augment 2)"] = new engine.RulesElement({
    name: "Dismissive Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISMISSIVE_STRIKE_(AUGMENT_2)",
    categories: ["Dismissive Strike (Augment 2)", "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dismissive Strike (Augment 6)"] = new engine.RulesElement({
    name: "Dismissive Strike (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISMISSIVE_STRIKE_(AUGMENT_6)",
    categories: ["Dismissive Strike (Augment 6)", "ID_INTERNAL_POWER_DISMISSIVE_STRIKE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Disruptive Stunt"] = new engine.RulesElement({
    name: "Disruptive Stunt",
    type: "Power",
    id: "ID_FMP_POWER_9346",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9346",
    categories: ["Disruptive Stunt", "ID_FMP_POWER_9346", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dissolve the Flesh"] = new engine.RulesElement({
    name: "Dissolve the Flesh",
    type: "Power",
    id: "ID_FMP_POWER_8270",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8270",
    categories: ["Dissolve the Flesh", "ID_FMP_POWER_8270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_447", "Uncarnate", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Distract"] = new engine.RulesElement({
    name: "Distract",
    type: "Power",
    id: "ID_FMP_POWER_8224",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8224",
    categories: ["Distract", "ID_FMP_POWER_8224"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Strike"] = new engine.RulesElement({
    name: "Distracting Strike",
    type: "Power",
    id: "ID_FMP_POWER_10281",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10281",
    categories: ["Distracting Strike", "ID_FMP_POWER_10281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Strike (Augment 0)"] = new engine.RulesElement({
    name: "Distracting Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISTRACTING_STRIKE_(AUGMENT_0)",
    categories: ["Distracting Strike (Augment 0)", "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Strike (Augment 1)"] = new engine.RulesElement({
    name: "Distracting Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISTRACTING_STRIKE_(AUGMENT_1)",
    categories: ["Distracting Strike (Augment 1)", "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Strike (Augment 2)"] = new engine.RulesElement({
    name: "Distracting Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DISTRACTING_STRIKE_(AUGMENT_2)",
    categories: ["Distracting Strike (Augment 2)", "ID_INTERNAL_POWER_DISTRACTING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Challenge (Hybrid)"] = new engine.RulesElement({
    name: "Divine Challenge (Hybrid)",
    type: "Power",
    id: "ID_FMP_POWER_7436",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7436",
    categories: ["Divine Challenge (Hybrid)", "ID_FMP_POWER_7436"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Rune of Thunder"] = new engine.RulesElement({
    name: "Divine Rune of Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11370",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11370",
    categories: ["Divine Rune of Thunder", "ID_FMP_POWER_11370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Sun"] = new engine.RulesElement({
    name: "Divine Sun",
    type: "Power",
    id: "ID_FMP_POWER_7489",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7489",
    categories: ["Divine Sun", "ID_FMP_POWER_7489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_363", "Radiant Fist", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7530"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Divine Sun [Movement Technique]"] = new engine.RulesElement({
    name: "Divine Sun [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7530",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7530",
    categories: ["Divine Sun [Movement Technique]", "ID_FMP_POWER_7530", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_363", "Radiant Fist", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dizzying Strike"] = new engine.RulesElement({
    name: "Dizzying Strike",
    type: "Power",
    id: "ID_FMP_POWER_11177",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11177",
    categories: ["Dizzying Strike", "ID_FMP_POWER_11177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dizzying Strike (Augment 0)"] = new engine.RulesElement({
    name: "Dizzying Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIZZYING_STRIKE_(AUGMENT_0)",
    categories: ["Dizzying Strike (Augment 0)", "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dizzying Strike (Augment 1)"] = new engine.RulesElement({
    name: "Dizzying Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIZZYING_STRIKE_(AUGMENT_1)",
    categories: ["Dizzying Strike (Augment 1)", "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dizzying Strike (Augment 4)"] = new engine.RulesElement({
    name: "Dizzying Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DIZZYING_STRIKE_(AUGMENT_4)",
    categories: ["Dizzying Strike (Augment 4)", "ID_INTERNAL_POWER_DIZZYING_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Dodge Step"] = new engine.RulesElement({
    name: "Dodge Step",
    type: "Power",
    id: "ID_FMP_POWER_9296",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9296",
    categories: ["Dodge Step", "ID_FMP_POWER_9296", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dominate"] = new engine.RulesElement({
    name: "Dominate",
    type: "Power",
    id: "ID_FMP_POWER_1198",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1198",
    categories: ["Dominate", "ID_FMP_POWER_1198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Avatar"] = new engine.RulesElement({
    name: "Draconic Avatar",
    type: "Power",
    id: "ID_FMP_POWER_11260",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11260",
    categories: ["Draconic Avatar", "ID_FMP_POWER_11260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_595", "Initiate of the Dragon", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Torrent"] = new engine.RulesElement({
    name: "Draconic Torrent",
    type: "Power",
    id: "ID_FMP_POWER_11259",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11259",
    categories: ["Draconic Torrent", "ID_FMP_POWER_11259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_595", "Initiate of the Dragon", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11261"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Draconic Torrent [Movement Technique]"] = new engine.RulesElement({
    name: "Draconic Torrent [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11261",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11261",
    categories: ["Draconic Torrent [Movement Technique]", "ID_FMP_POWER_11261", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_595", "Initiate of the Dragon", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Tail"] = new engine.RulesElement({
    name: "Dragon's Tail",
    type: "Power",
    id: "ID_FMP_POWER_7450",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7450",
    categories: ["Dragon's Tail", "ID_FMP_POWER_7450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7513"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Tail [Movement Technique]"] = new engine.RulesElement({
    name: "Dragon's Tail [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7513",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7513",
    categories: ["Dragon's Tail [Movement Technique]", "ID_FMP_POWER_7513", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Vengeance"] = new engine.RulesElement({
    name: "Dragon's Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_11262",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11262",
    categories: ["Dragon's Vengeance", "ID_FMP_POWER_11262", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_595", "Initiate of the Dragon", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Spiral"] = new engine.RulesElement({
    name: "Dread Spiral",
    type: "Power",
    id: "ID_FMP_POWER_11320",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11320",
    categories: ["Dread Spiral", "ID_FMP_POWER_11320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Spiral (Augment 0)"] = new engine.RulesElement({
    name: "Dread Spiral (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DREAD_SPIRAL_(AUGMENT_0)",
    categories: ["Dread Spiral (Augment 0)", "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Spiral (Augment 1)"] = new engine.RulesElement({
    name: "Dread Spiral (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DREAD_SPIRAL_(AUGMENT_1)",
    categories: ["Dread Spiral (Augment 1)", "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Spiral (Augment 2)"] = new engine.RulesElement({
    name: "Dread Spiral (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DREAD_SPIRAL_(AUGMENT_2)",
    categories: ["Dread Spiral (Augment 2)", "ID_INTERNAL_POWER_DREAD_SPIRAL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dream Blade"] = new engine.RulesElement({
    name: "Dream Blade",
    type: "Power",
    id: "ID_FMP_POWER_11347",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11347",
    categories: ["Dream Blade", "ID_FMP_POWER_11347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_600", "Dreamwalker", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Dream Blade (Augment 0)"] = new engine.RulesElement({
    name: "Dream Blade (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DREAM_BLADE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DREAM_BLADE_(AUGMENT_0)",
    categories: ["Dream Blade (Augment 0)", "ID_INTERNAL_POWER_DREAM_BLADE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dream Blade (Augment 2)"] = new engine.RulesElement({
    name: "Dream Blade (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DREAM_BLADE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DREAM_BLADE_(AUGMENT_2)",
    categories: ["Dream Blade (Augment 2)", "ID_INTERNAL_POWER_DREAM_BLADE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dream Stride"] = new engine.RulesElement({
    name: "Dream Stride",
    type: "Power",
    id: "ID_FMP_POWER_11349",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11349",
    categories: ["Dream Stride", "ID_FMP_POWER_11349", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_600", "Dreamwalker", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Gore"] = new engine.RulesElement({
    name: "Driving Gore",
    type: "Power",
    id: "ID_FMP_POWER_5672",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5672",
    categories: ["Driving Gore", "ID_FMP_POWER_5672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_347", "Blooded Champion", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Drop and Roll"] = new engine.RulesElement({
    name: "Drop and Roll",
    type: "Power",
    id: "ID_FMP_POWER_11530",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11530",
    categories: ["Drop and Roll", "ID_FMP_POWER_11530", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Drunken Monkey"] = new engine.RulesElement({
    name: "Drunken Monkey",
    type: "Power",
    id: "ID_FMP_POWER_7453",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7453",
    categories: ["Drunken Monkey", "ID_FMP_POWER_7453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7516"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Drunken Monkey [Movement Technique]"] = new engine.RulesElement({
    name: "Drunken Monkey [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7516",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7516",
    categories: ["Drunken Monkey [Movement Technique]", "ID_FMP_POWER_7516", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Hallucination"] = new engine.RulesElement({
    name: "Dual Hallucination",
    type: "Power",
    id: "ID_FMP_POWER_8245",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8245",
    categories: ["Dual Hallucination", "ID_FMP_POWER_8245", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Hallucination (Augment 0)"] = new engine.RulesElement({
    name: "Dual Hallucination (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DUAL_HALLUCINATION_(AUGMENT_0)",
    categories: ["Dual Hallucination (Augment 0)", "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Hallucination (Augment 1)"] = new engine.RulesElement({
    name: "Dual Hallucination (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DUAL_HALLUCINATION_(AUGMENT_1)",
    categories: ["Dual Hallucination (Augment 1)", "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Hallucination (Augment 4)"] = new engine.RulesElement({
    name: "Dual Hallucination (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_DUAL_HALLUCINATION_(AUGMENT_4)",
    categories: ["Dual Hallucination (Augment 4)", "ID_INTERNAL_POWER_DUAL_HALLUCINATION_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Duel in the Heavens"] = new engine.RulesElement({
    name: "Duel in the Heavens",
    type: "Power",
    id: "ID_FMP_POWER_11245",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11245",
    categories: ["Duel in the Heavens", "ID_FMP_POWER_11245", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Dulled Reflexes"] = new engine.RulesElement({
    name: "Dulled Reflexes",
    type: "Power",
    id: "ID_FMP_POWER_10289",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10289",
    categories: ["Dulled Reflexes", "ID_FMP_POWER_10289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Eagle's Aim"] = new engine.RulesElement({
    name: "Eagle's Aim",
    type: "Power",
    id: "ID_FMP_POWER_11480",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11480",
    categories: ["Eagle's Aim", "ID_FMP_POWER_11480", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Earthbond Gift"] = new engine.RulesElement({
    name: "Earthbond Gift",
    type: "Power",
    id: "ID_FMP_POWER_9518",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9518",
    categories: ["Earthbond Gift", "ID_FMP_POWER_9518", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Earthfriend"] = new engine.RulesElement({
    name: "Earthfriend",
    type: "Power",
    id: "ID_FMP_POWER_11494",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11494",
    categories: ["Earthfriend", "ID_FMP_POWER_11494", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Echoing Thunder"] = new engine.RulesElement({
    name: "Echoing Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11222",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11222",
    categories: ["Echoing Thunder", "ID_FMP_POWER_11222", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Crush"] = new engine.RulesElement({
    name: "Ego Crush",
    type: "Power",
    id: "ID_FMP_POWER_11169",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11169",
    categories: ["Ego Crush", "ID_FMP_POWER_11169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Crush (Augment 0)"] = new engine.RulesElement({
    name: "Ego Crush (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EGO_CRUSH_(AUGMENT_0)",
    categories: ["Ego Crush (Augment 0)", "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Crush (Augment 1)"] = new engine.RulesElement({
    name: "Ego Crush (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EGO_CRUSH_(AUGMENT_1)",
    categories: ["Ego Crush (Augment 1)", "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Crush (Augment 2)"] = new engine.RulesElement({
    name: "Ego Crush (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EGO_CRUSH_(AUGMENT_2)",
    categories: ["Ego Crush (Augment 2)", "ID_INTERNAL_POWER_EGO_CRUSH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Countermeasures"] = new engine.RulesElement({
    name: "Elemental Countermeasures",
    type: "Power",
    id: "ID_FMP_POWER_9300",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9300",
    categories: ["Elemental Countermeasures", "ID_FMP_POWER_9300", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Spirits"] = new engine.RulesElement({
    name: "Elemental Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9502",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9502",
    categories: ["Elemental Spirits", "ID_FMP_POWER_9502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Empathic Projection"] = new engine.RulesElement({
    name: "Empathic Projection",
    type: "Power",
    id: "ID_FMP_POWER_11147",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11147",
    categories: ["Empathic Projection", "ID_FMP_POWER_11147", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Empathic Read"] = new engine.RulesElement({
    name: "Empathic Read",
    type: "Power",
    id: "ID_FMP_POWER_11554",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11554",
    categories: ["Empathic Read", "ID_FMP_POWER_11554", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Empowered Arsenal"] = new engine.RulesElement({
    name: "Empowered Arsenal",
    type: "Power",
    id: "ID_FMP_POWER_11099",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11099",
    categories: ["Empowered Arsenal", "ID_FMP_POWER_11099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Encaging Spirits"] = new engine.RulesElement({
    name: "Encaging Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9500",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9500",
    categories: ["Encaging Spirits", "ID_FMP_POWER_9500"]
  });
  byID[te.id] = te;
  
  te = Power["Endure Pain"] = new engine.RulesElement({
    name: "Endure Pain",
    type: "Power",
    id: "ID_FMP_POWER_9314",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9314",
    categories: ["Endure Pain", "ID_FMP_POWER_9314", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Champion"] = new engine.RulesElement({
    name: "Enduring Champion",
    type: "Power",
    id: "ID_FMP_POWER_11216",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11216",
    categories: ["Enduring Champion", "ID_FMP_POWER_11216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11217"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Enduring Champion [Movement Technique]"] = new engine.RulesElement({
    name: "Enduring Champion [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11217",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11217",
    categories: ["Enduring Champion [Movement Technique]", "ID_FMP_POWER_11217", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Energizing Strike"] = new engine.RulesElement({
    name: "Energizing Strike",
    type: "Power",
    id: "ID_FMP_POWER_10274",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10274",
    categories: ["Energizing Strike", "ID_FMP_POWER_10274", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Energizing Strike (Augment 0)"] = new engine.RulesElement({
    name: "Energizing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENERGIZING_STRIKE_(AUGMENT_0)",
    categories: ["Energizing Strike (Augment 0)", "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Energizing Strike (Augment 1)"] = new engine.RulesElement({
    name: "Energizing Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENERGIZING_STRIKE_(AUGMENT_1)",
    categories: ["Energizing Strike (Augment 1)", "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Energizing Strike (Augment 2)"] = new engine.RulesElement({
    name: "Energizing Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENERGIZING_STRIKE_(AUGMENT_2)",
    categories: ["Energizing Strike (Augment 2)", "ID_INTERNAL_POWER_ENERGIZING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Enlightening Pulse"] = new engine.RulesElement({
    name: "Enlightening Pulse",
    type: "Power",
    id: "ID_FMP_POWER_10283",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10283",
    categories: ["Enlightening Pulse", "ID_FMP_POWER_10283", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Ensnaring Shot"] = new engine.RulesElement({
    name: "Ensnaring Shot",
    type: "Power",
    id: "ID_FMP_POWER_9515",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9515",
    categories: ["Ensnaring Shot", "ID_FMP_POWER_9515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9516"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Ensnaring Shot Attack"] = new engine.RulesElement({
    name: "Ensnaring Shot Attack",
    type: "Power",
    id: "ID_FMP_POWER_9516",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9516",
    categories: ["Ensnaring Shot Attack", "ID_FMP_POWER_9516", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Weapon"] = new engine.RulesElement({
    name: "Entangling Weapon",
    type: "Power",
    id: "ID_FMP_POWER_11185",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11185",
    categories: ["Entangling Weapon", "ID_FMP_POWER_11185", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Weapon (Augment 0)"] = new engine.RulesElement({
    name: "Entangling Weapon (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENTANGLING_WEAPON_(AUGMENT_0)",
    categories: ["Entangling Weapon (Augment 0)", "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Weapon (Augment 1)"] = new engine.RulesElement({
    name: "Entangling Weapon (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENTANGLING_WEAPON_(AUGMENT_1)",
    categories: ["Entangling Weapon (Augment 1)", "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Weapon (Augment 4)"] = new engine.RulesElement({
    name: "Entangling Weapon (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ENTANGLING_WEAPON_(AUGMENT_4)",
    categories: ["Entangling Weapon (Augment 4)", "ID_INTERNAL_POWER_ENTANGLING_WEAPON_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Ephemeral Wings"] = new engine.RulesElement({
    name: "Ephemeral Wings",
    type: "Power",
    id: "ID_FMP_POWER_11495",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11495",
    categories: ["Ephemeral Wings", "ID_FMP_POWER_11495", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Escaping Shot"] = new engine.RulesElement({
    name: "Escaping Shot",
    type: "Power",
    id: "ID_FMP_POWER_9512",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9512",
    categories: ["Escaping Shot", "ID_FMP_POWER_9512", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Eternal Mountain"] = new engine.RulesElement({
    name: "Eternal Mountain",
    type: "Power",
    id: "ID_FMP_POWER_11218",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11218",
    categories: ["Eternal Mountain", "ID_FMP_POWER_11218", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11219"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Eternal Mountain [Movement Technique]"] = new engine.RulesElement({
    name: "Eternal Mountain [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11219",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11219",
    categories: ["Eternal Mountain [Movement Technique]", "ID_FMP_POWER_11219", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Eternal Vigilance"] = new engine.RulesElement({
    name: "Eternal Vigilance",
    type: "Power",
    id: "ID_FMP_POWER_11201",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11201",
    categories: ["Eternal Vigilance", "ID_FMP_POWER_11201", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_593", "Eternal Blade", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Eternal Vigilance (Augment 0)"] = new engine.RulesElement({
    name: "Eternal Vigilance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ETERNAL_VIGILANCE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ETERNAL_VIGILANCE_(AUGMENT_0)",
    categories: ["Eternal Vigilance (Augment 0)", "ID_INTERNAL_POWER_ETERNAL_VIGILANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Eternal Vigilance (Augment 2)"] = new engine.RulesElement({
    name: "Eternal Vigilance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ETERNAL_VIGILANCE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ETERNAL_VIGILANCE_(AUGMENT_2)",
    categories: ["Eternal Vigilance (Augment 2)", "ID_INTERNAL_POWER_ETERNAL_VIGILANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Evade Attack"] = new engine.RulesElement({
    name: "Evade Attack",
    type: "Power",
    id: "ID_FMP_POWER_10285",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10285",
    categories: ["Evade Attack", "ID_FMP_POWER_10285", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Everybody Move"] = new engine.RulesElement({
    name: "Everybody Move",
    type: "Power",
    id: "ID_FMP_POWER_11582",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11582",
    categories: ["Everybody Move", "ID_FMP_POWER_11582", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Call"] = new engine.RulesElement({
    name: "Executioner's Call",
    type: "Power",
    id: "ID_FMP_POWER_11371",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11371",
    categories: ["Executioner's Call", "ID_FMP_POWER_11371", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Summons"] = new engine.RulesElement({
    name: "Executioner's Summons",
    type: "Power",
    id: "ID_FMP_POWER_10315",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10315",
    categories: ["Executioner's Summons", "ID_FMP_POWER_10315", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_530", "Psionic Binder", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Exhilarating Strike"] = new engine.RulesElement({
    name: "Exhilarating Strike",
    type: "Power",
    id: "ID_FMP_POWER_10312",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10312",
    categories: ["Exhilarating Strike", "ID_FMP_POWER_10312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Exhilarating Strike (Augment 0)"] = new engine.RulesElement({
    name: "Exhilarating Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EXHILARATING_STRIKE_(AUGMENT_0)",
    categories: ["Exhilarating Strike (Augment 0)", "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Exhilarating Strike (Augment 2)"] = new engine.RulesElement({
    name: "Exhilarating Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EXHILARATING_STRIKE_(AUGMENT_2)",
    categories: ["Exhilarating Strike (Augment 2)", "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Exhilarating Strike (Augment 6)"] = new engine.RulesElement({
    name: "Exhilarating Strike (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_EXHILARATING_STRIKE_(AUGMENT_6)",
    categories: ["Exhilarating Strike (Augment 6)", "ID_INTERNAL_POWER_EXHILARATING_STRIKE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Experienced Arcana"] = new engine.RulesElement({
    name: "Experienced Arcana",
    type: "Power",
    id: "ID_FMP_POWER_11533",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11533",
    categories: ["Experienced Arcana", "ID_FMP_POWER_11533", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Extend the Mind's Eye"] = new engine.RulesElement({
    name: "Extend the Mind's Eye",
    type: "Power",
    id: "ID_FMP_POWER_11182",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11182",
    categories: ["Extend the Mind's Eye", "ID_FMP_POWER_11182", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Extermination Urge"] = new engine.RulesElement({
    name: "Extermination Urge",
    type: "Power",
    id: "ID_FMP_POWER_11126",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11126",
    categories: ["Extermination Urge", "ID_FMP_POWER_11126", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Deep Delver"] = new engine.RulesElement({
    name: "Eyes of the Deep Delver",
    type: "Power",
    id: "ID_FMP_POWER_9312",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9312",
    categories: ["Eyes of the Deep Delver", "ID_FMP_POWER_9312", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Faith Healing"] = new engine.RulesElement({
    name: "Faith Healing",
    type: "Power",
    id: "ID_FMP_POWER_9335",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9335",
    categories: ["Faith Healing", "ID_FMP_POWER_9335", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["False Bravado"] = new engine.RulesElement({
    name: "False Bravado",
    type: "Power",
    id: "ID_FMP_POWER_11536",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11536",
    categories: ["False Bravado", "ID_FMP_POWER_11536", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Far Hand"] = new engine.RulesElement({
    name: "Far Hand",
    type: "Power",
    id: "ID_FMP_POWER_11267",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11267",
    categories: ["Far Hand", "ID_FMP_POWER_11267"]
  });
  byID[te.id] = te;
  
  te = Power["Far Sight"] = new engine.RulesElement({
    name: "Far Sight",
    type: "Power",
    id: "ID_FMP_POWER_9332",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9332",
    categories: ["Far Sight", "ID_FMP_POWER_9332", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fast Hands"] = new engine.RulesElement({
    name: "Fast Hands",
    type: "Power",
    id: "ID_FMP_POWER_9344",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9344",
    categories: ["Fast Hands", "ID_FMP_POWER_9344", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fast Talk"] = new engine.RulesElement({
    name: "Fast Talk",
    type: "Power",
    id: "ID_FMP_POWER_11538",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11538",
    categories: ["Fast Talk", "ID_FMP_POWER_11538", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Barrage"] = new engine.RulesElement({
    name: "Fatal Barrage",
    type: "Power",
    id: "ID_FMP_POWER_11199",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11199",
    categories: ["Fatal Barrage", "ID_FMP_POWER_11199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Fate Exchange"] = new engine.RulesElement({
    name: "Fate Exchange",
    type: "Power",
    id: "ID_FMP_POWER_10284",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10284",
    categories: ["Fate Exchange", "ID_FMP_POWER_10284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Fear and Loathing"] = new engine.RulesElement({
    name: "Fear and Loathing",
    type: "Power",
    id: "ID_FMP_POWER_10467",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10467",
    categories: ["Fear and Loathing", "ID_FMP_POWER_10467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_542", "Steel Ego", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Despair"] = new engine.RulesElement({
    name: "Feast of Despair",
    type: "Power",
    id: "ID_FMP_POWER_11118",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11118",
    categories: ["Feast of Despair", "ID_FMP_POWER_11118", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Plenty"] = new engine.RulesElement({
    name: "Feast of Plenty",
    type: "Power",
    id: "ID_FMP_POWER_10290",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10290",
    categories: ["Feast of Plenty", "ID_FMP_POWER_10290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Feather Step"] = new engine.RulesElement({
    name: "Feather Step",
    type: "Power",
    id: "ID_FMP_POWER_2625",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2625",
    categories: ["Feather Step", "ID_FMP_POWER_2625", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Festering Wound"] = new engine.RulesElement({
    name: "Festering Wound",
    type: "Power",
    id: "ID_FMP_POWER_11186",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11186",
    categories: ["Festering Wound", "ID_FMP_POWER_11186", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Festering Wound (Augment 0)"] = new engine.RulesElement({
    name: "Festering Wound (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FESTERING_WOUND_(AUGMENT_0)",
    categories: ["Festering Wound (Augment 0)", "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Festering Wound (Augment 1)"] = new engine.RulesElement({
    name: "Festering Wound (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FESTERING_WOUND_(AUGMENT_1)",
    categories: ["Festering Wound (Augment 1)", "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Festering Wound (Augment 4)"] = new engine.RulesElement({
    name: "Festering Wound (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FESTERING_WOUND_(AUGMENT_4)",
    categories: ["Festering Wound (Augment 4)", "ID_INTERNAL_POWER_FESTERING_WOUND_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Sinkhole"] = new engine.RulesElement({
    name: "Fey Sinkhole",
    type: "Power",
    id: "ID_FMP_POWER_11491",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11491",
    categories: ["Fey Sinkhole", "ID_FMP_POWER_11491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11492"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fey Sinkhole Attack"] = new engine.RulesElement({
    name: "Fey Sinkhole Attack",
    type: "Power",
    id: "ID_FMP_POWER_11492",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11492",
    categories: ["Fey Sinkhole Attack", "ID_FMP_POWER_11492", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Feyjump Shot"] = new engine.RulesElement({
    name: "Feyjump Shot",
    type: "Power",
    id: "ID_FMP_POWER_11481",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11481",
    categories: ["Feyjump Shot", "ID_FMP_POWER_11481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Feymire Trap"] = new engine.RulesElement({
    name: "Feymire Trap",
    type: "Power",
    id: "ID_FMP_POWER_11488",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11488",
    categories: ["Feymire Trap", "ID_FMP_POWER_11488", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Feywild Jaunt"] = new engine.RulesElement({
    name: "Feywild Jaunt",
    type: "Power",
    id: "ID_FMP_POWER_11487",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11487",
    categories: ["Feywild Jaunt", "ID_FMP_POWER_11487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Field of Alacrity"] = new engine.RulesElement({
    name: "Field of Alacrity",
    type: "Power",
    id: "ID_FMP_POWER_11124",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11124",
    categories: ["Field of Alacrity", "ID_FMP_POWER_11124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Field of Alacrity (Augment 0)"] = new engine.RulesElement({
    name: "Field of Alacrity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FIELD_OF_ALACRITY_(AUGMENT_0)",
    categories: ["Field of Alacrity (Augment 0)", "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Field of Alacrity (Augment 1)"] = new engine.RulesElement({
    name: "Field of Alacrity (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FIELD_OF_ALACRITY_(AUGMENT_1)",
    categories: ["Field of Alacrity (Augment 1)", "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Field of Alacrity (Augment 4)"] = new engine.RulesElement({
    name: "Field of Alacrity (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FIELD_OF_ALACRITY_(AUGMENT_4)",
    categories: ["Field of Alacrity (Augment 4)", "ID_INTERNAL_POWER_FIELD_OF_ALACRITY_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Fist of Golden Light"] = new engine.RulesElement({
    name: "Fist of Golden Light",
    type: "Power",
    id: "ID_FMP_POWER_7481",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7481",
    categories: ["Fist of Golden Light", "ID_FMP_POWER_7481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7526"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fist of Golden Light [Movement Technique]"] = new engine.RulesElement({
    name: "Fist of Golden Light [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7526",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7526",
    categories: ["Fist of Golden Light [Movement Technique]", "ID_FMP_POWER_7526", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fist of Indomitable Iron"] = new engine.RulesElement({
    name: "Fist of Indomitable Iron",
    type: "Power",
    id: "ID_FMP_POWER_11254",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11254",
    categories: ["Fist of Indomitable Iron", "ID_FMP_POWER_11254", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11255"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fist of Indomitable Iron [Movement Technique]"] = new engine.RulesElement({
    name: "Fist of Indomitable Iron [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11255",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11255",
    categories: ["Fist of Indomitable Iron [Movement Technique]", "ID_FMP_POWER_11255", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fist of One Hundred Strikes"] = new engine.RulesElement({
    name: "Fist of One Hundred Strikes",
    type: "Power",
    id: "ID_FMP_POWER_7465",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7465",
    categories: ["Fist of One Hundred Strikes", "ID_FMP_POWER_7465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7520"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fist of One Hundred Strikes [Movement Technique]"] = new engine.RulesElement({
    name: "Fist of One Hundred Strikes [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7520",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7520",
    categories: ["Fist of One Hundred Strikes [Movement Technique]", "ID_FMP_POWER_7520", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Five Storms"] = new engine.RulesElement({
    name: "Five Storms",
    type: "Power",
    id: "ID_FMP_POWER_7452",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7452",
    categories: ["Five Storms", "ID_FMP_POWER_7452", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7515"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Five Storms [Movement Technique]"] = new engine.RulesElement({
    name: "Five Storms [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7515",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7515",
    categories: ["Five Storms [Movement Technique]", "ID_FMP_POWER_7515", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Flames of Purity"] = new engine.RulesElement({
    name: "Flames of Purity",
    type: "Power",
    id: "ID_FMP_POWER_11372",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11372",
    categories: ["Flames of Purity", "ID_FMP_POWER_11372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flawless Maneuver"] = new engine.RulesElement({
    name: "Flawless Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_11521",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11521",
    categories: ["Flawless Maneuver", "ID_FMP_POWER_11521", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_613", "Diamond Soul", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Flesh-Tether Shot"] = new engine.RulesElement({
    name: "Flesh-Tether Shot",
    type: "Power",
    id: "ID_FMP_POWER_9531",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9531",
    categories: ["Flesh-Tether Shot", "ID_FMP_POWER_9531", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Flickering Arrow"] = new engine.RulesElement({
    name: "Flickering Arrow",
    type: "Power",
    id: "ID_FMP_POWER_9505",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9505",
    categories: ["Flickering Arrow", "ID_FMP_POWER_9505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flood of Madness"] = new engine.RulesElement({
    name: "Flood of Madness",
    type: "Power",
    id: "ID_FMP_POWER_11139",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11139",
    categories: ["Flood of Madness", "ID_FMP_POWER_11139", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Flood of Madness (Augment 0)"] = new engine.RulesElement({
    name: "Flood of Madness (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FLOOD_OF_MADNESS_(AUGMENT_0)",
    categories: ["Flood of Madness (Augment 0)", "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Flood of Madness (Augment 2)"] = new engine.RulesElement({
    name: "Flood of Madness (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FLOOD_OF_MADNESS_(AUGMENT_2)",
    categories: ["Flood of Madness (Augment 2)", "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Flood of Madness (Augment 6)"] = new engine.RulesElement({
    name: "Flood of Madness (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FLOOD_OF_MADNESS_(AUGMENT_6)",
    categories: ["Flood of Madness (Augment 6)", "ID_INTERNAL_POWER_FLOOD_OF_MADNESS_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Focused Sight"] = new engine.RulesElement({
    name: "Focused Sight",
    type: "Power",
    id: "ID_FMP_POWER_11588",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11588",
    categories: ["Focused Sight", "ID_FMP_POWER_11588", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Focusing Strike"] = new engine.RulesElement({
    name: "Focusing Strike",
    type: "Power",
    id: "ID_FMP_POWER_10275",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10275",
    categories: ["Focusing Strike", "ID_FMP_POWER_10275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Focusing Strike (Augment 0)"] = new engine.RulesElement({
    name: "Focusing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FOCUSING_STRIKE_(AUGMENT_0)",
    categories: ["Focusing Strike (Augment 0)", "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Focusing Strike (Augment 1)"] = new engine.RulesElement({
    name: "Focusing Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FOCUSING_STRIKE_(AUGMENT_1)",
    categories: ["Focusing Strike (Augment 1)", "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Focusing Strike (Augment 2)"] = new engine.RulesElement({
    name: "Focusing Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FOCUSING_STRIKE_(AUGMENT_2)",
    categories: ["Focusing Strike (Augment 2)", "ID_INTERNAL_POWER_FOCUSING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Follow-Up Gore"] = new engine.RulesElement({
    name: "Follow-Up Gore",
    type: "Power",
    id: "ID_FMP_POWER_5670",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5670",
    categories: ["Follow-Up Gore", "ID_FMP_POWER_5670", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_347", "Blooded Champion", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Force Bubble"] = new engine.RulesElement({
    name: "Force Bubble",
    type: "Power",
    id: "ID_FMP_POWER_11323",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11323",
    categories: ["Force Bubble", "ID_FMP_POWER_11323", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Force Grasp"] = new engine.RulesElement({
    name: "Force Grasp",
    type: "Power",
    id: "ID_FMP_POWER_8239",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8239",
    categories: ["Force Grasp", "ID_FMP_POWER_8239", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Force Grasp (Augment 0)"] = new engine.RulesElement({
    name: "Force Grasp (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_GRASP_(AUGMENT_0)",
    categories: ["Force Grasp (Augment 0)", "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Grasp (Augment 1)"] = new engine.RulesElement({
    name: "Force Grasp (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_GRASP_(AUGMENT_1)",
    categories: ["Force Grasp (Augment 1)", "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Grasp (Augment 2)"] = new engine.RulesElement({
    name: "Force Grasp (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_GRASP_(AUGMENT_2)",
    categories: ["Force Grasp (Augment 2)", "ID_INTERNAL_POWER_FORCE_GRASP_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Hammer"] = new engine.RulesElement({
    name: "Force Hammer",
    type: "Power",
    id: "ID_FMP_POWER_11276",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11276",
    categories: ["Force Hammer", "ID_FMP_POWER_11276", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Force Hammer (Augment 0)"] = new engine.RulesElement({
    name: "Force Hammer (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_HAMMER_(AUGMENT_0)",
    categories: ["Force Hammer (Augment 0)", "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Hammer (Augment 1)"] = new engine.RulesElement({
    name: "Force Hammer (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_HAMMER_(AUGMENT_1)",
    categories: ["Force Hammer (Augment 1)", "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Hammer (Augment 2)"] = new engine.RulesElement({
    name: "Force Hammer (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_HAMMER_(AUGMENT_2)",
    categories: ["Force Hammer (Augment 2)", "ID_INTERNAL_POWER_FORCE_HAMMER_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Punch"] = new engine.RulesElement({
    name: "Force Punch",
    type: "Power",
    id: "ID_FMP_POWER_11269",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11269",
    categories: ["Force Punch", "ID_FMP_POWER_11269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Force Punch (Augment 0)"] = new engine.RulesElement({
    name: "Force Punch (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_PUNCH_(AUGMENT_0)",
    categories: ["Force Punch (Augment 0)", "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Punch (Augment 1)"] = new engine.RulesElement({
    name: "Force Punch (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_PUNCH_(AUGMENT_1)",
    categories: ["Force Punch (Augment 1)", "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Punch (Augment 2)"] = new engine.RulesElement({
    name: "Force Punch (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCE_PUNCH_(AUGMENT_2)",
    categories: ["Force Punch (Augment 2)", "ID_INTERNAL_POWER_FORCE_PUNCH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Opportunity"] = new engine.RulesElement({
    name: "Forced Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_8251",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8251",
    categories: ["Forced Opportunity", "ID_FMP_POWER_8251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Opportunity (Augment 0)"] = new engine.RulesElement({
    name: "Forced Opportunity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCED_OPPORTUNITY_(AUGMENT_0)",
    categories: ["Forced Opportunity (Augment 0)", "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Opportunity (Augment 1)"] = new engine.RulesElement({
    name: "Forced Opportunity (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCED_OPPORTUNITY_(AUGMENT_1)",
    categories: ["Forced Opportunity (Augment 1)", "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Opportunity (Augment 4)"] = new engine.RulesElement({
    name: "Forced Opportunity (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORCED_OPPORTUNITY_(AUGMENT_4)",
    categories: ["Forced Opportunity (Augment 4)", "ID_INTERNAL_POWER_FORCED_OPPORTUNITY_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Contempt"] = new engine.RulesElement({
    name: "Forceful Contempt",
    type: "Power",
    id: "ID_FMP_POWER_10468",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10468",
    categories: ["Forceful Contempt", "ID_FMP_POWER_10468", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_542", "Steel Ego", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Push"] = new engine.RulesElement({
    name: "Forceful Push",
    type: "Power",
    id: "ID_FMP_POWER_11268",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11268",
    categories: ["Forceful Push", "ID_FMP_POWER_11268"]
  });
  byID[te.id] = te;
  
  te = Power["Forest of Exclusion"] = new engine.RulesElement({
    name: "Forest of Exclusion",
    type: "Power",
    id: "ID_FMP_POWER_11340",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11340",
    categories: ["Forest of Exclusion", "ID_FMP_POWER_11340", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Fortunate Recovery"] = new engine.RulesElement({
    name: "Fortunate Recovery",
    type: "Power",
    id: "ID_FMP_POWER_11129",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11129",
    categories: ["Fortunate Recovery", "ID_FMP_POWER_11129", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Forward-Thinking Cut"] = new engine.RulesElement({
    name: "Forward-Thinking Cut",
    type: "Power",
    id: "ID_FMP_POWER_11104",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11104",
    categories: ["Forward-Thinking Cut", "ID_FMP_POWER_11104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Forward-Thinking Cut (Augment 0)"] = new engine.RulesElement({
    name: "Forward-Thinking Cut (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORWARD-THINKING_CUT_(AUGMENT_0)",
    categories: ["Forward-Thinking Cut (Augment 0)", "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Forward-Thinking Cut (Augment 1)"] = new engine.RulesElement({
    name: "Forward-Thinking Cut (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORWARD-THINKING_CUT_(AUGMENT_1)",
    categories: ["Forward-Thinking Cut (Augment 1)", "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Forward-Thinking Cut (Augment 2)"] = new engine.RulesElement({
    name: "Forward-Thinking Cut (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_FORWARD-THINKING_CUT_(AUGMENT_2)",
    categories: ["Forward-Thinking Cut (Augment 2)", "ID_INTERNAL_POWER_FORWARD-THINKING_CUT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Freedom of Movement"] = new engine.RulesElement({
    name: "Freedom of Movement",
    type: "Power",
    id: "ID_FMP_POWER_2401",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2401",
    categories: ["Freedom of Movement", "ID_FMP_POWER_2401", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Freezing Blast"] = new engine.RulesElement({
    name: "Freezing Blast",
    type: "Power",
    id: "ID_FMP_POWER_11053",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11053",
    categories: ["Freezing Blast", "ID_FMP_POWER_11053", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_586", "Nature's Avatar", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["From the Brink"] = new engine.RulesElement({
    name: "From the Brink",
    type: "Power",
    id: "ID_FMP_POWER_10291",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10291",
    categories: ["From the Brink", "ID_FMP_POWER_10291", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Fungal Bloom Attack"] = new engine.RulesElement({
    name: "Fungal Bloom Attack",
    type: "Power",
    id: "ID_FMP_POWER_9509",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9509",
    categories: ["Fungal Bloom Attack", "ID_FMP_POWER_9509", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fungal Blooms"] = new engine.RulesElement({
    name: "Fungal Blooms",
    type: "Power",
    id: "ID_FMP_POWER_9507",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9507",
    categories: ["Fungal Blooms", "ID_FMP_POWER_9507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9509"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Furious Bull"] = new engine.RulesElement({
    name: "Furious Bull",
    type: "Power",
    id: "ID_FMP_POWER_11233",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11233",
    categories: ["Furious Bull", "ID_FMP_POWER_11233", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11234"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Furious Bull [Movement Technique]"] = new engine.RulesElement({
    name: "Furious Bull [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11234",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11234",
    categories: ["Furious Bull [Movement Technique]", "ID_FMP_POWER_11234", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fury of the Forge"] = new engine.RulesElement({
    name: "Fury of the Forge",
    type: "Power",
    id: "ID_FMP_POWER_11456",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11456",
    categories: ["Fury of the Forge", "ID_FMP_POWER_11456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_605", "Master of the Forge", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Fury Spirits"] = new engine.RulesElement({
    name: "Fury Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9533",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9533",
    categories: ["Fury Spirits", "ID_FMP_POWER_9533", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9535"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fury Spirits Attack"] = new engine.RulesElement({
    name: "Fury Spirits Attack",
    type: "Power",
    id: "ID_FMP_POWER_9535",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9535",
    categories: ["Fury Spirits Attack", "ID_FMP_POWER_9535", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Gathering Storm Intonation"] = new engine.RulesElement({
    name: "Gathering Storm Intonation",
    type: "Power",
    id: "ID_FMP_POWER_11394",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11394",
    categories: ["Gathering Storm Intonation", "ID_FMP_POWER_11394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11395"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Gathering Storm Intonation Attack"] = new engine.RulesElement({
    name: "Gathering Storm Intonation Attack",
    type: "Power",
    id: "ID_FMP_POWER_11395",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11395",
    categories: ["Gathering Storm Intonation Attack", "ID_FMP_POWER_11395", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost in the Steel"] = new engine.RulesElement({
    name: "Ghost in the Steel",
    type: "Power",
    id: "ID_FMP_POWER_11170",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11170",
    categories: ["Ghost in the Steel", "ID_FMP_POWER_11170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost in the Steel (Augment 0)"] = new engine.RulesElement({
    name: "Ghost in the Steel (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_GHOST_IN_THE_STEEL_(AUGMENT_0)",
    categories: ["Ghost in the Steel (Augment 0)", "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost in the Steel (Augment 1)"] = new engine.RulesElement({
    name: "Ghost in the Steel (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_GHOST_IN_THE_STEEL_(AUGMENT_1)",
    categories: ["Ghost in the Steel (Augment 1)", "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost in the Steel (Augment 2)"] = new engine.RulesElement({
    name: "Ghost in the Steel (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_GHOST_IN_THE_STEEL_(AUGMENT_2)",
    categories: ["Ghost in the Steel (Augment 2)", "ID_INTERNAL_POWER_GHOST_IN_THE_STEEL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Goring Charge"] = new engine.RulesElement({
    name: "Goring Charge",
    type: "Power",
    id: "ID_FMP_POWER_2480",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2480",
    categories: ["Goring Charge", "ID_FMP_POWER_2480", "ID_FMP_RACIAL_TRAIT_412", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Graceful Maneuver"] = new engine.RulesElement({
    name: "Graceful Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_11527",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11527",
    categories: ["Graceful Maneuver", "ID_FMP_POWER_11527", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Grappling Spirits"] = new engine.RulesElement({
    name: "Grappling Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11463",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11463",
    categories: ["Grappling Spirits", "ID_FMP_POWER_11463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Grasp the Wind"] = new engine.RulesElement({
    name: "Grasp the Wind",
    type: "Power",
    id: "ID_FMP_POWER_7457",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7457",
    categories: ["Grasp the Wind", "ID_FMP_POWER_7457", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Tide"] = new engine.RulesElement({
    name: "Grasping Tide",
    type: "Power",
    id: "ID_FMP_POWER_11224",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11224",
    categories: ["Grasping Tide", "ID_FMP_POWER_11224", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11225"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Grasping Tide [Movement Technique]"] = new engine.RulesElement({
    name: "Grasping Tide [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11225",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11225",
    categories: ["Grasping Tide [Movement Technique]", "ID_FMP_POWER_11225", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Vines"] = new engine.RulesElement({
    name: "Grasping Vines",
    type: "Power",
    id: "ID_FMP_POWER_11499",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11499",
    categories: ["Grasping Vines", "ID_FMP_POWER_11499", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Harrier"] = new engine.RulesElement({
    name: "Guardian Harrier",
    type: "Power",
    id: "ID_FMP_POWER_11464",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11464",
    categories: ["Guardian Harrier", "ID_FMP_POWER_11464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Might"] = new engine.RulesElement({
    name: "Guardian's Might",
    type: "Power",
    id: "ID_FMP_POWER_11204",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11204",
    categories: ["Guardian's Might", "ID_FMP_POWER_11204", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_594", "Iron Guardian", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Might (Augment 0)"] = new engine.RulesElement({
    name: "Guardian's Might (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GUARDIAN'S_MIGHT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_GUARDIAN'S_MIGHT_(AUGMENT_0)",
    categories: ["Guardian's Might (Augment 0)", "ID_INTERNAL_POWER_GUARDIAN'S_MIGHT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Might (Augment 2)"] = new engine.RulesElement({
    name: "Guardian's Might (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GUARDIAN'S_MIGHT_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_GUARDIAN'S_MIGHT_(AUGMENT_2)",
    categories: ["Guardian's Might (Augment 2)", "ID_INTERNAL_POWER_GUARDIAN'S_MIGHT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Speed"] = new engine.RulesElement({
    name: "Guardian's Speed",
    type: "Power",
    id: "ID_FMP_POWER_2639",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2639",
    categories: ["Guardian's Speed", "ID_FMP_POWER_2639", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Guided Aggression"] = new engine.RulesElement({
    name: "Guided Aggression",
    type: "Power",
    id: "ID_FMP_POWER_11202",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11202",
    categories: ["Guided Aggression", "ID_FMP_POWER_11202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_593", "Eternal Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Guided Opportunity"] = new engine.RulesElement({
    name: "Guided Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_11138",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11138",
    categories: ["Guided Opportunity", "ID_FMP_POWER_11138", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Guided Shot"] = new engine.RulesElement({
    name: "Guided Shot",
    type: "Power",
    id: "ID_FMP_POWER_9333",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9333",
    categories: ["Guided Shot", "ID_FMP_POWER_9333", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Guiding Spirit"] = new engine.RulesElement({
    name: "Guiding Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9537",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9537",
    categories: ["Guiding Spirit", "ID_FMP_POWER_9537", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Haggle"] = new engine.RulesElement({
    name: "Haggle",
    type: "Power",
    id: "ID_FMP_POWER_9309",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9309",
    categories: ["Haggle", "ID_FMP_POWER_9309", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of Caution"] = new engine.RulesElement({
    name: "Hand of Caution",
    type: "Power",
    id: "ID_FMP_POWER_11271",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11271",
    categories: ["Hand of Caution", "ID_FMP_POWER_11271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Harden Mind"] = new engine.RulesElement({
    name: "Harden Mind",
    type: "Power",
    id: "ID_FMP_POWER_8266",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8266",
    categories: ["Harden Mind", "ID_FMP_POWER_8266", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_438", "Cerulean Adept", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Harmonious Discipline"] = new engine.RulesElement({
    name: "Harmonious Discipline",
    type: "Power",
    id: "ID_FMP_POWER_7458",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7458",
    categories: ["Harmonious Discipline", "ID_FMP_POWER_7458", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Harmonious Thunder"] = new engine.RulesElement({
    name: "Harmonious Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11212",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11212",
    categories: ["Harmonious Thunder", "ID_FMP_POWER_11212", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Harrying Spirits"] = new engine.RulesElement({
    name: "Harrying Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11471",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11471",
    categories: ["Harrying Spirits", "ID_FMP_POWER_11471", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hasty Retreat"] = new engine.RulesElement({
    name: "Hasty Retreat",
    type: "Power",
    id: "ID_FMP_POWER_11600",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11600",
    categories: ["Hasty Retreat", "ID_FMP_POWER_11600", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Haunting Shadows"] = new engine.RulesElement({
    name: "Haunting Shadows",
    type: "Power",
    id: "ID_FMP_POWER_11154",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11154",
    categories: ["Haunting Shadows", "ID_FMP_POWER_11154", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_592", "Stygian Adept", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Healer's Gift"] = new engine.RulesElement({
    name: "Healer's Gift",
    type: "Power",
    id: "ID_FMP_POWER_9318",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9318",
    categories: ["Healer's Gift", "ID_FMP_POWER_9318", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Heart-Sundering Strike"] = new engine.RulesElement({
    name: "Heart-Sundering Strike",
    type: "Power",
    id: "ID_FMP_POWER_11256",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11256",
    categories: ["Heart-Sundering Strike", "ID_FMP_POWER_11256", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11257"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Heart-Sundering Strike [Movement Technique]"] = new engine.RulesElement({
    name: "Heart-Sundering Strike [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11257",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11257",
    categories: ["Heart-Sundering Strike [Movement Technique]", "ID_FMP_POWER_11257", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Historical Revelation"] = new engine.RulesElement({
    name: "Historical Revelation",
    type: "Power",
    id: "ID_FMP_POWER_9321",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9321",
    categories: ["Historical Revelation", "ID_FMP_POWER_9321", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hope's Audacity"] = new engine.RulesElement({
    name: "Hope's Audacity",
    type: "Power",
    id: "ID_FMP_POWER_10293",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10293",
    categories: ["Hope's Audacity", "ID_FMP_POWER_10293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Hope's Audacity (Augment 0)"] = new engine.RulesElement({
    name: "Hope's Audacity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_HOPE'S_AUDACITY_(AUGMENT_0)",
    categories: ["Hope's Audacity (Augment 0)", "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Hope's Audacity (Augment 1)"] = new engine.RulesElement({
    name: "Hope's Audacity (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_HOPE'S_AUDACITY_(AUGMENT_1)",
    categories: ["Hope's Audacity (Augment 1)", "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Hope's Audacity (Augment 4)"] = new engine.RulesElement({
    name: "Hope's Audacity (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_HOPE'S_AUDACITY_(AUGMENT_4)",
    categories: ["Hope's Audacity (Augment 4)", "ID_INTERNAL_POWER_HOPE'S_AUDACITY_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Host of Sparrows"] = new engine.RulesElement({
    name: "Host of Sparrows",
    type: "Power",
    id: "ID_FMP_POWER_9523",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9523",
    categories: ["Host of Sparrows", "ID_FMP_POWER_9523", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hounding Shield of Radiance"] = new engine.RulesElement({
    name: "Hounding Shield of Radiance",
    type: "Power",
    id: "ID_FMP_POWER_11459",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11459",
    categories: ["Hounding Shield of Radiance", "ID_FMP_POWER_11459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_606", "Rune Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11460"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Hungry Ghost"] = new engine.RulesElement({
    name: "Hungry Ghost",
    type: "Power",
    id: "ID_FMP_POWER_7482",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7482",
    categories: ["Hungry Ghost", "ID_FMP_POWER_7482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7527"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Hungry Ghost [Movement Technique]"] = new engine.RulesElement({
    name: "Hungry Ghost [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7527",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7527",
    categories: ["Hungry Ghost [Movement Technique]", "ID_FMP_POWER_7527", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Instinct"] = new engine.RulesElement({
    name: "Hunter's Instinct",
    type: "Power",
    id: "ID_FMP_POWER_9510",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9510",
    categories: ["Hunter's Instinct", "ID_FMP_POWER_9510", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Mobility"] = new engine.RulesElement({
    name: "Hunter's Mobility",
    type: "Power",
    id: "ID_FMP_POWER_9548",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9548",
    categories: ["Hunter's Mobility", "ID_FMP_POWER_9548", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_473", "Crimson Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Hypnotic Pulse"] = new engine.RulesElement({
    name: "Hypnotic Pulse",
    type: "Power",
    id: "ID_FMP_POWER_8236",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8236",
    categories: ["Hypnotic Pulse", "ID_FMP_POWER_8236", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Icon of Victory"] = new engine.RulesElement({
    name: "Icon of Victory",
    type: "Power",
    id: "ID_FMP_POWER_11378",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11378",
    categories: ["Icon of Victory", "ID_FMP_POWER_11378", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Id Insinuation"] = new engine.RulesElement({
    name: "Id Insinuation",
    type: "Power",
    id: "ID_FMP_POWER_8234",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8234",
    categories: ["Id Insinuation", "ID_FMP_POWER_8234", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Id Insinuation (Augment 0)"] = new engine.RulesElement({
    name: "Id Insinuation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ID_INSINUATION_(AUGMENT_0)",
    categories: ["Id Insinuation (Augment 0)", "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Id Insinuation (Augment 1)"] = new engine.RulesElement({
    name: "Id Insinuation (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ID_INSINUATION_(AUGMENT_1)",
    categories: ["Id Insinuation (Augment 1)", "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Id Insinuation (Augment 2)"] = new engine.RulesElement({
    name: "Id Insinuation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ID_INSINUATION_(AUGMENT_2)",
    categories: ["Id Insinuation (Augment 2)", "ID_INTERNAL_POWER_ID_INSINUATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminating Strike"] = new engine.RulesElement({
    name: "Illuminating Strike",
    type: "Power",
    id: "ID_FMP_POWER_11132",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11132",
    categories: ["Illuminating Strike", "ID_FMP_POWER_11132", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminating Strike (Augment 0)"] = new engine.RulesElement({
    name: "Illuminating Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ILLUMINATING_STRIKE_(AUGMENT_0)",
    categories: ["Illuminating Strike (Augment 0)", "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminating Strike (Augment 1)"] = new engine.RulesElement({
    name: "Illuminating Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ILLUMINATING_STRIKE_(AUGMENT_1)",
    categories: ["Illuminating Strike (Augment 1)", "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminating Strike (Augment 4)"] = new engine.RulesElement({
    name: "Illuminating Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_ILLUMINATING_STRIKE_(AUGMENT_4)",
    categories: ["Illuminating Strike (Augment 4)", "ID_INTERNAL_POWER_ILLUMINATING_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Image of Doom"] = new engine.RulesElement({
    name: "Image of Doom",
    type: "Power",
    id: "ID_FMP_POWER_10309",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10309",
    categories: ["Image of Doom", "ID_FMP_POWER_10309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Imminent Demise"] = new engine.RulesElement({
    name: "Imminent Demise",
    type: "Power",
    id: "ID_FMP_POWER_10295",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10295",
    categories: ["Imminent Demise", "ID_FMP_POWER_10295", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Immortal Endurance"] = new engine.RulesElement({
    name: "Immortal Endurance",
    type: "Power",
    id: "ID_FMP_POWER_11189",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11189",
    categories: ["Immortal Endurance", "ID_FMP_POWER_11189", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Impatient Strike"] = new engine.RulesElement({
    name: "Impatient Strike",
    type: "Power",
    id: "ID_FMP_POWER_11069",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11069",
    categories: ["Impatient Strike", "ID_FMP_POWER_11069", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Impatient Strike (Augment 0)"] = new engine.RulesElement({
    name: "Impatient Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IMPATIENT_STRIKE_(AUGMENT_0)",
    categories: ["Impatient Strike (Augment 0)", "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Impatient Strike (Augment 1)"] = new engine.RulesElement({
    name: "Impatient Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IMPATIENT_STRIKE_(AUGMENT_1)",
    categories: ["Impatient Strike (Augment 1)", "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Impatient Strike (Augment 2)"] = new engine.RulesElement({
    name: "Impatient Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IMPATIENT_STRIKE_(AUGMENT_2)",
    categories: ["Impatient Strike (Augment 2)", "ID_INTERNAL_POWER_IMPATIENT_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Implanted Suggestion"] = new engine.RulesElement({
    name: "Implanted Suggestion",
    type: "Power",
    id: "ID_FMP_POWER_10277",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10277",
    categories: ["Implanted Suggestion", "ID_FMP_POWER_10277", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Imprison"] = new engine.RulesElement({
    name: "Imprison",
    type: "Power",
    id: "ID_FMP_POWER_11328",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11328",
    categories: ["Imprison", "ID_FMP_POWER_11328", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Improvisational Arcana"] = new engine.RulesElement({
    name: "Improvisational Arcana",
    type: "Power",
    id: "ID_FMP_POWER_9306",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9306",
    categories: ["Improvisational Arcana", "ID_FMP_POWER_9306", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Incite Bravery"] = new engine.RulesElement({
    name: "Incite Bravery",
    type: "Power",
    id: "ID_FMP_POWER_10292",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10292",
    categories: ["Incite Bravery", "ID_FMP_POWER_10292", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Incredible Stride"] = new engine.RulesElement({
    name: "Incredible Stride",
    type: "Power",
    id: "ID_FMP_POWER_11535",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11535",
    categories: ["Incredible Stride", "ID_FMP_POWER_11535", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Ally"] = new engine.RulesElement({
    name: "Indomitable Ally",
    type: "Power",
    id: "ID_FMP_POWER_11543",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11543",
    categories: ["Indomitable Ally", "ID_FMP_POWER_11543", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Maneuver"] = new engine.RulesElement({
    name: "Indomitable Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_10452",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10452",
    categories: ["Indomitable Maneuver", "ID_FMP_POWER_10452", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Strategem"] = new engine.RulesElement({
    name: "Indomitable Strategem",
    type: "Power",
    id: "ID_FMP_POWER_11523",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11523",
    categories: ["Indomitable Strategem", "ID_FMP_POWER_11523", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_615", "Invincible Mind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Technique"] = new engine.RulesElement({
    name: "Indomitable Technique",
    type: "Power",
    id: "ID_FMP_POWER_11246",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11246",
    categories: ["Indomitable Technique", "ID_FMP_POWER_11246", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Fist"] = new engine.RulesElement({
    name: "Inevitable Fist",
    type: "Power",
    id: "ID_FMP_POWER_7479",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7479",
    categories: ["Inevitable Fist", "ID_FMP_POWER_7479", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Shot"] = new engine.RulesElement({
    name: "Inevitable Shot",
    type: "Power",
    id: "ID_FMP_POWER_9501",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9501",
    categories: ["Inevitable Shot", "ID_FMP_POWER_9501"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Death Attack"] = new engine.RulesElement({
    name: "Inexorable Death Attack",
    type: "Power",
    id: "ID_FMP_POWER_2637",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2637",
    categories: ["Inexorable Death Attack", "ID_FMP_POWER_2637", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Death Strike"] = new engine.RulesElement({
    name: "Inexorable Death Strike",
    type: "Power",
    id: "ID_FMP_POWER_2636",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2636",
    categories: ["Inexorable Death Strike", "ID_FMP_POWER_2636", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2637"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Infestation of Moths"] = new engine.RulesElement({
    name: "Infestation of Moths",
    type: "Power",
    id: "ID_FMP_POWER_11497",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11497",
    categories: ["Infestation of Moths", "ID_FMP_POWER_11497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Insensate Mind"] = new engine.RulesElement({
    name: "Insensate Mind",
    type: "Power",
    id: "ID_FMP_POWER_10303",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10303",
    categories: ["Insensate Mind", "ID_FMP_POWER_10303", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Command"] = new engine.RulesElement({
    name: "Insightful Command",
    type: "Power",
    id: "ID_FMP_POWER_10318",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10318",
    categories: ["Insightful Command", "ID_FMP_POWER_10318", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_531", "Talaric Strategist", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Comment"] = new engine.RulesElement({
    name: "Insightful Comment",
    type: "Power",
    id: "ID_FMP_POWER_9325",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9325",
    categories: ["Insightful Comment", "ID_FMP_POWER_9325", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Counter"] = new engine.RulesElement({
    name: "Insightful Counter",
    type: "Power",
    id: "ID_FMP_POWER_11555",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11555",
    categories: ["Insightful Counter", "ID_FMP_POWER_11555", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Riposte"] = new engine.RulesElement({
    name: "Insightful Riposte",
    type: "Power",
    id: "ID_FMP_POWER_11581",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11581",
    categories: ["Insightful Riposte", "ID_FMP_POWER_11581", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Warning"] = new engine.RulesElement({
    name: "Insightful Warning",
    type: "Power",
    id: "ID_FMP_POWER_9299",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9299",
    categories: ["Insightful Warning", "ID_FMP_POWER_9299", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Fortitude"] = new engine.RulesElement({
    name: "Inspiring Fortitude",
    type: "Power",
    id: "ID_FMP_POWER_9315",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9315",
    categories: ["Inspiring Fortitude", "ID_FMP_POWER_9315", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Bomb"] = new engine.RulesElement({
    name: "Intellect Bomb",
    type: "Power",
    id: "ID_FMP_POWER_10308",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10308",
    categories: ["Intellect Bomb", "ID_FMP_POWER_10308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Fortress"] = new engine.RulesElement({
    name: "Intellect Fortress",
    type: "Power",
    id: "ID_FMP_POWER_8231",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8231",
    categories: ["Intellect Fortress", "ID_FMP_POWER_8231", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Hammer"] = new engine.RulesElement({
    name: "Intellect Hammer",
    type: "Power",
    id: "ID_FMP_POWER_2638",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2638",
    categories: ["Intellect Hammer", "ID_FMP_POWER_2638", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Leech"] = new engine.RulesElement({
    name: "Intellect Leech",
    type: "Power",
    id: "ID_FMP_POWER_8243",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8243",
    categories: ["Intellect Leech", "ID_FMP_POWER_8243", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Sunder"] = new engine.RulesElement({
    name: "Intellect Sunder",
    type: "Power",
    id: "ID_FMP_POWER_2643",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2643",
    categories: ["Intellect Sunder", "ID_FMP_POWER_2643", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Intercepting Shot"] = new engine.RulesElement({
    name: "Intercepting Shot",
    type: "Power",
    id: "ID_FMP_POWER_9551",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9551",
    categories: ["Intercepting Shot", "ID_FMP_POWER_9551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_474", "Seven Fates Archer", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Internal Power"] = new engine.RulesElement({
    name: "Internal Power",
    type: "Power",
    id: "ID_FMP_POWER_11231",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11231",
    categories: ["Internal Power", "ID_FMP_POWER_11231", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Intrusive Spear"] = new engine.RulesElement({
    name: "Intrusive Spear",
    type: "Power",
    id: "ID_FMP_POWER_11343",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11343",
    categories: ["Intrusive Spear", "ID_FMP_POWER_11343", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Intrusive Spear (Augment 0)"] = new engine.RulesElement({
    name: "Intrusive Spear (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_INTRUSIVE_SPEAR_(AUGMENT_0)",
    categories: ["Intrusive Spear (Augment 0)", "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Intrusive Spear (Augment 2)"] = new engine.RulesElement({
    name: "Intrusive Spear (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_INTRUSIVE_SPEAR_(AUGMENT_2)",
    categories: ["Intrusive Spear (Augment 2)", "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Intrusive Spear (Augment 6)"] = new engine.RulesElement({
    name: "Intrusive Spear (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_INTRUSIVE_SPEAR_(AUGMENT_6)",
    categories: ["Intrusive Spear (Augment 6)", "ID_INTERNAL_POWER_INTRUSIVE_SPEAR_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Invocation of Carceri"] = new engine.RulesElement({
    name: "Invocation of Carceri",
    type: "Power",
    id: "ID_FMP_POWER_11442",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11442",
    categories: ["Invocation of Carceri", "ID_FMP_POWER_11442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ire Strike"] = new engine.RulesElement({
    name: "Ire Strike",
    type: "Power",
    id: "ID_FMP_POWER_11062",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11062",
    categories: ["Ire Strike", "ID_FMP_POWER_11062", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ire Strike (Augment 0)"] = new engine.RulesElement({
    name: "Ire Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRE_STRIKE_(AUGMENT_0)",
    categories: ["Ire Strike (Augment 0)", "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ire Strike (Augment 1)"] = new engine.RulesElement({
    name: "Ire Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRE_STRIKE_(AUGMENT_1)",
    categories: ["Ire Strike (Augment 1)", "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Ire Strike (Augment 2)"] = new engine.RulesElement({
    name: "Ire Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRE_STRIKE_(AUGMENT_2)",
    categories: ["Ire Strike (Augment 2)", "ID_INTERNAL_POWER_IRE_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Defense"] = new engine.RulesElement({
    name: "Iron Defense",
    type: "Power",
    id: "ID_FMP_POWER_11206",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11206",
    categories: ["Iron Defense", "ID_FMP_POWER_11206", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_594", "Iron Guardian", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Dragon Defense"] = new engine.RulesElement({
    name: "Iron Dragon Defense",
    type: "Power",
    id: "ID_FMP_POWER_7469",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7469",
    categories: ["Iron Dragon Defense", "ID_FMP_POWER_7469", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Fist"] = new engine.RulesElement({
    name: "Iron Fist",
    type: "Power",
    id: "ID_FMP_POWER_11156",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11156",
    categories: ["Iron Fist", "ID_FMP_POWER_11156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Fist (Augment 0)"] = new engine.RulesElement({
    name: "Iron Fist (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRON_FIST_(AUGMENT_0)",
    categories: ["Iron Fist (Augment 0)", "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Fist (Augment 1)"] = new engine.RulesElement({
    name: "Iron Fist (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRON_FIST_(AUGMENT_1)",
    categories: ["Iron Fist (Augment 1)", "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Fist (Augment 2)"] = new engine.RulesElement({
    name: "Iron Fist (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRON_FIST_(AUGMENT_2)",
    categories: ["Iron Fist (Augment 2)", "ID_INTERNAL_POWER_IRON_FIST_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Mind"] = new engine.RulesElement({
    name: "Iron Mind",
    type: "Power",
    id: "ID_FMP_POWER_2475",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2475",
    categories: ["Iron Mind", "ID_FMP_POWER_2475", "ID_FMP_RACIAL_TRAIT_420", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Redoubt"] = new engine.RulesElement({
    name: "Iron Redoubt",
    type: "Power",
    id: "ID_FMP_POWER_11408",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11408",
    categories: ["Iron Redoubt", "ID_FMP_POWER_11408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Tomb"] = new engine.RulesElement({
    name: "Iron Tomb",
    type: "Power",
    id: "ID_FMP_POWER_11173",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11173",
    categories: ["Iron Tomb", "ID_FMP_POWER_11173", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Warding"] = new engine.RulesElement({
    name: "Iron Warding",
    type: "Power",
    id: "ID_FMP_POWER_11176",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11176",
    categories: ["Iron Warding", "ID_FMP_POWER_11176", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Irruption of the Living Gate"] = new engine.RulesElement({
    name: "Irruption of the Living Gate",
    type: "Power",
    id: "ID_FMP_POWER_11057",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11057",
    categories: ["Irruption of the Living Gate", "ID_FMP_POWER_11057", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_587", "Shard Disciple", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Irruption of the Living Gate (Augment 0)"] = new engine.RulesElement({
    name: "Irruption of the Living Gate (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_0)",
    categories: ["Irruption of the Living Gate (Augment 0)", "ID_INTERNAL_POWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Irruption of the Living Gate (Augment 2)"] = new engine.RulesElement({
    name: "Irruption of the Living Gate (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_2)",
    categories: ["Irruption of the Living Gate (Augment 2)", "ID_INTERNAL_POWER_IRRUPTION_OF_THE_LIVING_GATE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Judgment's Levy Attack"] = new engine.RulesElement({
    name: "Judgment's Levy Attack",
    type: "Power",
    id: "ID_FMP_POWER_11414",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11414",
    categories: ["Judgment's Levy Attack", "ID_FMP_POWER_11414", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trawl"] = new engine.RulesElement({
    name: "Kinetic Trawl",
    type: "Power",
    id: "ID_FMP_POWER_11270",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11270",
    categories: ["Kinetic Trawl", "ID_FMP_POWER_11270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trawl (Augment 0)"] = new engine.RulesElement({
    name: "Kinetic Trawl (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_KINETIC_TRAWL_(AUGMENT_0)",
    categories: ["Kinetic Trawl (Augment 0)", "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trawl (Augment 1)"] = new engine.RulesElement({
    name: "Kinetic Trawl (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_KINETIC_TRAWL_(AUGMENT_1)",
    categories: ["Kinetic Trawl (Augment 1)", "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trawl (Augment 2)"] = new engine.RulesElement({
    name: "Kinetic Trawl (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_KINETIC_TRAWL_(AUGMENT_2)",
    categories: ["Kinetic Trawl (Augment 2)", "ID_INTERNAL_POWER_KINETIC_TRAWL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Knifing Wind"] = new engine.RulesElement({
    name: "Knifing Wind",
    type: "Power",
    id: "ID_FMP_POWER_10462",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10462",
    categories: ["Knifing Wind", "ID_FMP_POWER_10462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_541", "Zephyr Blade", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Knifing Wind (Augment 0)"] = new engine.RulesElement({
    name: "Knifing Wind (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KNIFING_WIND_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_KNIFING_WIND_(AUGMENT_0)",
    categories: ["Knifing Wind (Augment 0)", "ID_INTERNAL_POWER_KNIFING_WIND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Knifing Wind (Augment 2)"] = new engine.RulesElement({
    name: "Knifing Wind (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KNIFING_WIND_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_KNIFING_WIND_(AUGMENT_2)",
    categories: ["Knifing Wind (Augment 2)", "ID_INTERNAL_POWER_KNIFING_WIND_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Land Passage"] = new engine.RulesElement({
    name: "Land Passage",
    type: "Power",
    id: "ID_FMP_POWER_11502",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11502",
    categories: ["Land Passage", "ID_FMP_POWER_11502", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Leap of the Heavens"] = new engine.RulesElement({
    name: "Leap of the Heavens",
    type: "Power",
    id: "ID_FMP_POWER_11223",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11223",
    categories: ["Leap of the Heavens", "ID_FMP_POWER_11223", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Legend Lore"] = new engine.RulesElement({
    name: "Legend Lore",
    type: "Power",
    id: "ID_FMP_POWER_11552",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11552",
    categories: ["Legend Lore", "ID_FMP_POWER_11552", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Legion of One"] = new engine.RulesElement({
    name: "Legion of One",
    type: "Power",
    id: "ID_FMP_POWER_11248",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11248",
    categories: ["Legion of One", "ID_FMP_POWER_11248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11249"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Legion of One [Movement Technique]"] = new engine.RulesElement({
    name: "Legion of One [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11249",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11249",
    categories: ["Legion of One [Movement Technique]", "ID_FMP_POWER_11249", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Burst"] = new engine.RulesElement({
    name: "Lightning Burst",
    type: "Power",
    id: "ID_FMP_POWER_9541",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9541",
    categories: ["Lightning Burst", "ID_FMP_POWER_9541", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Rush"] = new engine.RulesElement({
    name: "Lightning Rush",
    type: "Power",
    id: "ID_FMP_POWER_2634",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2634",
    categories: ["Lightning Rush", "ID_FMP_POWER_2634", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Rush (Augment 0)"] = new engine.RulesElement({
    name: "Lightning Rush (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LIGHTNING_RUSH_(AUGMENT_0)",
    categories: ["Lightning Rush (Augment 0)", "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Rush (Augment 1)"] = new engine.RulesElement({
    name: "Lightning Rush (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LIGHTNING_RUSH_(AUGMENT_1)",
    categories: ["Lightning Rush (Augment 1)", "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Rush (Augment 2)"] = new engine.RulesElement({
    name: "Lightning Rush (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LIGHTNING_RUSH_(AUGMENT_2)",
    categories: ["Lightning Rush (Augment 2)", "ID_INTERNAL_POWER_LIGHTNING_RUSH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Lock Tap"] = new engine.RulesElement({
    name: "Lock Tap",
    type: "Power",
    id: "ID_FMP_POWER_11598",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11598",
    categories: ["Lock Tap", "ID_FMP_POWER_11598", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Lost in Time"] = new engine.RulesElement({
    name: "Lost in Time",
    type: "Power",
    id: "ID_FMP_POWER_11351",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11351",
    categories: ["Lost in Time", "ID_FMP_POWER_11351", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_601", "Time Bender", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Steel"] = new engine.RulesElement({
    name: "Luring Steel",
    type: "Power",
    id: "ID_FMP_POWER_2642",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2642",
    categories: ["Luring Steel", "ID_FMP_POWER_2642", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Steel (Augment 0)"] = new engine.RulesElement({
    name: "Luring Steel (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LURING_STEEL_(AUGMENT_0)",
    categories: ["Luring Steel (Augment 0)", "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Steel (Augment 1)"] = new engine.RulesElement({
    name: "Luring Steel (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LURING_STEEL_(AUGMENT_1)",
    categories: ["Luring Steel (Augment 1)", "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Steel (Augment 4)"] = new engine.RulesElement({
    name: "Luring Steel (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_LURING_STEEL_(AUGMENT_4)",
    categories: ["Luring Steel (Augment 4)", "ID_INTERNAL_POWER_LURING_STEEL_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Manifest Dream Form"] = new engine.RulesElement({
    name: "Manifest Dream Form",
    type: "Power",
    id: "ID_FMP_POWER_11346",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11346",
    categories: ["Manifest Dream Form", "ID_FMP_POWER_11346"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Battle's End"] = new engine.RulesElement({
    name: "Mark of Battle's End",
    type: "Power",
    id: "ID_FMP_POWER_11422",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11422",
    categories: ["Mark of Battle's End", "ID_FMP_POWER_11422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Ill Luck"] = new engine.RulesElement({
    name: "Mark of Ill Luck",
    type: "Power",
    id: "ID_FMP_POWER_11425",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11425",
    categories: ["Mark of Ill Luck", "ID_FMP_POWER_11425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Skilled Effort"] = new engine.RulesElement({
    name: "Mark of Skilled Effort",
    type: "Power",
    id: "ID_FMP_POWER_11379",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11379",
    categories: ["Mark of Skilled Effort", "ID_FMP_POWER_11379", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Untamed Wrath"] = new engine.RulesElement({
    name: "Mark of Untamed Wrath",
    type: "Power",
    id: "ID_FMP_POWER_11434",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11434",
    categories: ["Mark of Untamed Wrath", "ID_FMP_POWER_11434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Master of Winds Stance"] = new engine.RulesElement({
    name: "Master of Winds Stance",
    type: "Power",
    id: "ID_FMP_POWER_11238",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11238",
    categories: ["Master of Winds Stance", "ID_FMP_POWER_11238", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Masterful Spiral"] = new engine.RulesElement({
    name: "Masterful Spiral",
    type: "Power",
    id: "ID_FMP_POWER_7455",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7455",
    categories: ["Masterful Spiral", "ID_FMP_POWER_7455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Meditative Solace"] = new engine.RulesElement({
    name: "Meditative Solace",
    type: "Power",
    id: "ID_FMP_POWER_7476",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7476",
    categories: ["Meditative Solace", "ID_FMP_POWER_7476", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Memory Hole"] = new engine.RulesElement({
    name: "Memory Hole",
    type: "Power",
    id: "ID_FMP_POWER_8227",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8227",
    categories: ["Memory Hole", "ID_FMP_POWER_8227", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Memory Hole (Augment 0)"] = new engine.RulesElement({
    name: "Memory Hole (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MEMORY_HOLE_(AUGMENT_0)",
    categories: ["Memory Hole (Augment 0)", "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Memory Hole (Augment 1)"] = new engine.RulesElement({
    name: "Memory Hole (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MEMORY_HOLE_(AUGMENT_1)",
    categories: ["Memory Hole (Augment 1)", "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Memory Hole (Augment 2)"] = new engine.RulesElement({
    name: "Memory Hole (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MEMORY_HOLE_(AUGMENT_2)",
    categories: ["Memory Hole (Augment 2)", "ID_INTERNAL_POWER_MEMORY_HOLE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mend Wounds"] = new engine.RulesElement({
    name: "Mend Wounds",
    type: "Power",
    id: "ID_FMP_POWER_10286",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10286",
    categories: ["Mend Wounds", "ID_FMP_POWER_10286", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Rejuvenation"] = new engine.RulesElement({
    name: "Mental Rejuvenation",
    type: "Power",
    id: "ID_FMP_POWER_11130",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11130",
    categories: ["Mental Rejuvenation", "ID_FMP_POWER_11130", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Trauma"] = new engine.RulesElement({
    name: "Mental Trauma",
    type: "Power",
    id: "ID_FMP_POWER_8229",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8229",
    categories: ["Mental Trauma", "ID_FMP_POWER_8229", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Turmoil"] = new engine.RulesElement({
    name: "Mental Turmoil",
    type: "Power",
    id: "ID_FMP_POWER_11065",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11065",
    categories: ["Mental Turmoil", "ID_FMP_POWER_11065", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Zephyr"] = new engine.RulesElement({
    name: "Mental Zephyr",
    type: "Power",
    id: "ID_FMP_POWER_10465",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10465",
    categories: ["Mental Zephyr", "ID_FMP_POWER_10465", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_541", "Zephyr Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Microcosm"] = new engine.RulesElement({
    name: "Microcosm",
    type: "Power",
    id: "ID_FMP_POWER_8262",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8262",
    categories: ["Microcosm", "ID_FMP_POWER_8262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Might of the Ogre"] = new engine.RulesElement({
    name: "Might of the Ogre",
    type: "Power",
    id: "ID_FMP_POWER_11191",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11191",
    categories: ["Might of the Ogre", "ID_FMP_POWER_11191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Might of the Ogre (Augment 0)"] = new engine.RulesElement({
    name: "Might of the Ogre (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIGHT_OF_THE_OGRE_(AUGMENT_0)",
    categories: ["Might of the Ogre (Augment 0)", "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Might of the Ogre (Augment 2)"] = new engine.RulesElement({
    name: "Might of the Ogre (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIGHT_OF_THE_OGRE_(AUGMENT_2)",
    categories: ["Might of the Ogre (Augment 2)", "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Might of the Ogre (Augment 6)"] = new engine.RulesElement({
    name: "Might of the Ogre (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIGHT_OF_THE_OGRE_(AUGMENT_6)",
    categories: ["Might of the Ogre (Augment 6)", "ID_INTERNAL_POWER_MIGHT_OF_THE_OGRE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Mighty Sprint"] = new engine.RulesElement({
    name: "Mighty Sprint",
    type: "Power",
    id: "ID_FMP_POWER_9303",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9303",
    categories: ["Mighty Sprint", "ID_FMP_POWER_9303", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Blade"] = new engine.RulesElement({
    name: "Mind Blade",
    type: "Power",
    id: "ID_FMP_POWER_11181",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11181",
    categories: ["Mind Blade", "ID_FMP_POWER_11181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Blast"] = new engine.RulesElement({
    name: "Mind Blast",
    type: "Power",
    id: "ID_FMP_POWER_8241",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8241",
    categories: ["Mind Blast", "ID_FMP_POWER_8241", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Break"] = new engine.RulesElement({
    name: "Mind Break",
    type: "Power",
    id: "ID_FMP_POWER_8240",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8240",
    categories: ["Mind Break", "ID_FMP_POWER_8240", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Break (Augment 0)"] = new engine.RulesElement({
    name: "Mind Break (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_BREAK_(AUGMENT_0)",
    categories: ["Mind Break (Augment 0)", "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Break (Augment 1)"] = new engine.RulesElement({
    name: "Mind Break (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_BREAK_(AUGMENT_1)",
    categories: ["Mind Break (Augment 1)", "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Break (Augment 2)"] = new engine.RulesElement({
    name: "Mind Break (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_BREAK_(AUGMENT_2)",
    categories: ["Mind Break (Augment 2)", "ID_INTERNAL_POWER_MIND_BREAK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Cannon"] = new engine.RulesElement({
    name: "Mind Cannon",
    type: "Power",
    id: "ID_FMP_POWER_11322",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11322",
    categories: ["Mind Cannon", "ID_FMP_POWER_11322", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Mind of Endurance"] = new engine.RulesElement({
    name: "Mind of Endurance",
    type: "Power",
    id: "ID_FMP_POWER_11183",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11183",
    categories: ["Mind of Endurance", "ID_FMP_POWER_11183", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mind of Mirrors"] = new engine.RulesElement({
    name: "Mind of Mirrors",
    type: "Power",
    id: "ID_FMP_POWER_11196",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11196",
    categories: ["Mind of Mirrors", "ID_FMP_POWER_11196", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Mind of Mirrors (Augment 0)"] = new engine.RulesElement({
    name: "Mind of Mirrors (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_OF_MIRRORS_(AUGMENT_0)",
    categories: ["Mind of Mirrors (Augment 0)", "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind of Mirrors (Augment 2)"] = new engine.RulesElement({
    name: "Mind of Mirrors (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_OF_MIRRORS_(AUGMENT_2)",
    categories: ["Mind of Mirrors (Augment 2)", "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind of Mirrors (Augment 6)"] = new engine.RulesElement({
    name: "Mind of Mirrors (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_OF_MIRRORS_(AUGMENT_6)",
    categories: ["Mind of Mirrors (Augment 6)", "ID_INTERNAL_POWER_MIND_OF_MIRRORS_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Over Earth"] = new engine.RulesElement({
    name: "Mind Over Earth",
    type: "Power",
    id: "ID_FMP_POWER_8254",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8254",
    categories: ["Mind Over Earth", "ID_FMP_POWER_8254", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mind over Flesh"] = new engine.RulesElement({
    name: "Mind over Flesh",
    type: "Power",
    id: "ID_FMP_POWER_8244",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8244",
    categories: ["Mind over Flesh", "ID_FMP_POWER_8244", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mind over Matter"] = new engine.RulesElement({
    name: "Mind over Matter",
    type: "Power",
    id: "ID_FMP_POWER_10280",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10280",
    categories: ["Mind over Matter", "ID_FMP_POWER_10280", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Shadow"] = new engine.RulesElement({
    name: "Mind Shadow",
    type: "Power",
    id: "ID_FMP_POWER_8237",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8237",
    categories: ["Mind Shadow", "ID_FMP_POWER_8237", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Snare"] = new engine.RulesElement({
    name: "Mind Snare",
    type: "Power",
    id: "ID_FMP_POWER_11163",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11163",
    categories: ["Mind Snare", "ID_FMP_POWER_11163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Snare (Augment 0)"] = new engine.RulesElement({
    name: "Mind Snare (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_SNARE_(AUGMENT_0)",
    categories: ["Mind Snare (Augment 0)", "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Snare (Augment 1)"] = new engine.RulesElement({
    name: "Mind Snare (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_SNARE_(AUGMENT_1)",
    categories: ["Mind Snare (Augment 1)", "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Snare (Augment 2)"] = new engine.RulesElement({
    name: "Mind Snare (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_SNARE_(AUGMENT_2)",
    categories: ["Mind Snare (Augment 2)", "ID_INTERNAL_POWER_MIND_SNARE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Spike"] = new engine.RulesElement({
    name: "Mind Spike",
    type: "Power",
    id: "ID_FMP_POWER_10440",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10440",
    categories: ["Mind Spike", "ID_FMP_POWER_10440"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Switch"] = new engine.RulesElement({
    name: "Mind Switch",
    type: "Power",
    id: "ID_FMP_POWER_8258",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8258",
    categories: ["Mind Switch", "ID_FMP_POWER_8258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Thrust"] = new engine.RulesElement({
    name: "Mind Thrust",
    type: "Power",
    id: "ID_FMP_POWER_8228",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8228",
    categories: ["Mind Thrust", "ID_FMP_POWER_8228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Thrust (Augment 0)"] = new engine.RulesElement({
    name: "Mind Thrust (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_THRUST_(AUGMENT_0)",
    categories: ["Mind Thrust (Augment 0)", "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Thrust (Augment 1)"] = new engine.RulesElement({
    name: "Mind Thrust (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_THRUST_(AUGMENT_1)",
    categories: ["Mind Thrust (Augment 1)", "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Thrust (Augment 2)"] = new engine.RulesElement({
    name: "Mind Thrust (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_THRUST_(AUGMENT_2)",
    categories: ["Mind Thrust (Augment 2)", "ID_INTERNAL_POWER_MIND_THRUST_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Wipe"] = new engine.RulesElement({
    name: "Mind Wipe",
    type: "Power",
    id: "ID_FMP_POWER_8246",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8246",
    categories: ["Mind Wipe", "ID_FMP_POWER_8246", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Wipe (Augment 0)"] = new engine.RulesElement({
    name: "Mind Wipe (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_WIPE_(AUGMENT_0)",
    categories: ["Mind Wipe (Augment 0)", "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Wipe (Augment 1)"] = new engine.RulesElement({
    name: "Mind Wipe (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_WIPE_(AUGMENT_1)",
    categories: ["Mind Wipe (Augment 1)", "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Wipe (Augment 4)"] = new engine.RulesElement({
    name: "Mind Wipe (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIND_WIPE_(AUGMENT_4)",
    categories: ["Mind Wipe (Augment 4)", "ID_INTERNAL_POWER_MIND_WIPE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Wrack"] = new engine.RulesElement({
    name: "Mind Wrack",
    type: "Power",
    id: "ID_FMP_POWER_11188",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11188",
    categories: ["Mind Wrack", "ID_FMP_POWER_11188", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mindlink Strike"] = new engine.RulesElement({
    name: "Mindlink Strike",
    type: "Power",
    id: "ID_FMP_POWER_10288",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10288",
    categories: ["Mindlink Strike", "ID_FMP_POWER_10288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mindlink Strike (Augment 0)"] = new engine.RulesElement({
    name: "Mindlink Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MINDLINK_STRIKE_(AUGMENT_0)",
    categories: ["Mindlink Strike (Augment 0)", "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mindlink Strike (Augment 1)"] = new engine.RulesElement({
    name: "Mindlink Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MINDLINK_STRIKE_(AUGMENT_1)",
    categories: ["Mindlink Strike (Augment 1)", "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mindlink Strike (Augment 2)"] = new engine.RulesElement({
    name: "Mindlink Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MINDLINK_STRIKE_(AUGMENT_2)",
    categories: ["Mindlink Strike (Augment 2)", "ID_INTERNAL_POWER_MINDLINK_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind-Sundering Attack"] = new engine.RulesElement({
    name: "Mind-Sundering Attack",
    type: "Power",
    id: "ID_FMP_POWER_10460",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10460",
    categories: ["Mind-Sundering Attack", "ID_FMP_POWER_10460", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Mind-Sundering Burst"] = new engine.RulesElement({
    name: "Mind-Sundering Burst",
    type: "Power",
    id: "ID_FMP_POWER_10459",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10459",
    categories: ["Mind-Sundering Burst", "ID_FMP_POWER_10459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10460"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Miraculous Treatment"] = new engine.RulesElement({
    name: "Miraculous Treatment",
    type: "Power",
    id: "ID_FMP_POWER_11551",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11551",
    categories: ["Miraculous Treatment", "ID_FMP_POWER_11551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mischief Spirits"] = new engine.RulesElement({
    name: "Mischief Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11465",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11465",
    categories: ["Mischief Spirits", "ID_FMP_POWER_11465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Mist on the Storm"] = new engine.RulesElement({
    name: "Mist on the Storm",
    type: "Power",
    id: "ID_FMP_POWER_7488",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7488",
    categories: ["Mist on the Storm", "ID_FMP_POWER_7488", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Walker's Step"] = new engine.RulesElement({
    name: "Mist Walker's Step",
    type: "Power",
    id: "ID_FMP_POWER_10034",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10034",
    categories: ["Mist Walker's Step", "ID_FMP_POWER_10034", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Weapon"] = new engine.RulesElement({
    name: "Mist Weapon",
    type: "Power",
    id: "ID_FMP_POWER_11164",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11164",
    categories: ["Mist Weapon", "ID_FMP_POWER_11164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Weapon (Augment 0)"] = new engine.RulesElement({
    name: "Mist Weapon (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIST_WEAPON_(AUGMENT_0)",
    categories: ["Mist Weapon (Augment 0)", "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Weapon (Augment 1)"] = new engine.RulesElement({
    name: "Mist Weapon (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIST_WEAPON_(AUGMENT_1)",
    categories: ["Mist Weapon (Augment 1)", "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Weapon (Augment 2)"] = new engine.RulesElement({
    name: "Mist Weapon (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MIST_WEAPON_(AUGMENT_2)",
    categories: ["Mist Weapon (Augment 2)", "ID_INTERNAL_POWER_MIST_WEAPON_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mote of the Sun"] = new engine.RulesElement({
    name: "Mote of the Sun",
    type: "Power",
    id: "ID_FMP_POWER_11452",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11452",
    categories: ["Mote of the Sun", "ID_FMP_POWER_11452", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_604", "Light Bringer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Mountainfall Strike"] = new engine.RulesElement({
    name: "Mountainfall Strike",
    type: "Power",
    id: "ID_FMP_POWER_11127",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11127",
    categories: ["Mountainfall Strike", "ID_FMP_POWER_11127", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Mounted Coordination"] = new engine.RulesElement({
    name: "Mounted Coordination",
    type: "Power",
    id: "ID_FMP_POWER_11584",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11584",
    categories: ["Mounted Coordination", "ID_FMP_POWER_11584", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Nature Sense"] = new engine.RulesElement({
    name: "Nature Sense",
    type: "Power",
    id: "ID_FMP_POWER_9329",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9329",
    categories: ["Nature Sense", "ID_FMP_POWER_9329", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Passage"] = new engine.RulesElement({
    name: "Nature's Passage",
    type: "Power",
    id: "ID_FMP_POWER_9536",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9536",
    categories: ["Nature's Passage", "ID_FMP_POWER_9536", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Purging Fire"] = new engine.RulesElement({
    name: "Nature's Purging Fire",
    type: "Power",
    id: "ID_FMP_POWER_11054",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11054",
    categories: ["Nature's Purging Fire", "ID_FMP_POWER_11054", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_586", "Nature's Avatar", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Rebirth"] = new engine.RulesElement({
    name: "Nature's Rebirth",
    type: "Power",
    id: "ID_FMP_POWER_11056",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11056",
    categories: ["Nature's Rebirth", "ID_FMP_POWER_11056", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_586", "Nature's Avatar", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Vengeance"] = new engine.RulesElement({
    name: "Nature's Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_11484",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11484",
    categories: ["Nature's Vengeance", "ID_FMP_POWER_11484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Navigate Crowds"] = new engine.RulesElement({
    name: "Navigate Crowds",
    type: "Power",
    id: "ID_FMP_POWER_9343",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9343",
    categories: ["Navigate Crowds", "ID_FMP_POWER_9343", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Nightmare Vortex"] = new engine.RulesElement({
    name: "Nightmare Vortex",
    type: "Power",
    id: "ID_FMP_POWER_2631",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2631",
    categories: ["Nightmare Vortex", "ID_FMP_POWER_2631", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Noble Sacrifice"] = new engine.RulesElement({
    name: "Noble Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_11542",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11542",
    categories: ["Noble Sacrifice", "ID_FMP_POWER_11542", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Nose for Trouble"] = new engine.RulesElement({
    name: "Nose for Trouble",
    type: "Power",
    id: "ID_FMP_POWER_11596",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11596",
    categories: ["Nose for Trouble", "ID_FMP_POWER_11596", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Nova Strike"] = new engine.RulesElement({
    name: "Nova Strike",
    type: "Power",
    id: "ID_FMP_POWER_10461",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10461",
    categories: ["Nova Strike", "ID_FMP_POWER_10461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Obscured Avoidance"] = new engine.RulesElement({
    name: "Obscured Avoidance",
    type: "Power",
    id: "ID_FMP_POWER_9338",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9338",
    categories: ["Obscured Avoidance", "ID_FMP_POWER_9338", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ominous Threat"] = new engine.RulesElement({
    name: "Ominous Threat",
    type: "Power",
    id: "ID_FMP_POWER_9326",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9326",
    categories: ["Ominous Threat", "ID_FMP_POWER_9326", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["One Hundred Leaves"] = new engine.RulesElement({
    name: "One Hundred Leaves",
    type: "Power",
    id: "ID_FMP_POWER_7462",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7462",
    categories: ["One Hundred Leaves", "ID_FMP_POWER_7462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Gate of Battle"] = new engine.RulesElement({
    name: "Open the Gate of Battle",
    type: "Power",
    id: "ID_FMP_POWER_7454",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7454",
    categories: ["Open the Gate of Battle", "ID_FMP_POWER_7454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7517"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Open the Gate of Battle [Movement Technique]"] = new engine.RulesElement({
    name: "Open the Gate of Battle [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7517",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7517",
    categories: ["Open the Gate of Battle [Movement Technique]", "ID_FMP_POWER_7517", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Otherworldly Lore"] = new engine.RulesElement({
    name: "Otherworldly Lore",
    type: "Power",
    id: "ID_FMP_POWER_9311",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9311",
    categories: ["Otherworldly Lore", "ID_FMP_POWER_9311", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Overpowering Strike"] = new engine.RulesElement({
    name: "Overpowering Strike",
    type: "Power",
    id: "ID_FMP_POWER_7472",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7472",
    categories: ["Overpowering Strike", "ID_FMP_POWER_7472", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7523"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Overpowering Strike [Movement Technique]"] = new engine.RulesElement({
    name: "Overpowering Strike [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7523",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7523",
    categories: ["Overpowering Strike [Movement Technique]", "ID_FMP_POWER_7523", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Lunge"] = new engine.RulesElement({
    name: "Overwhelming Lunge",
    type: "Power",
    id: "ID_FMP_POWER_11178",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11178",
    categories: ["Overwhelming Lunge", "ID_FMP_POWER_11178", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Lunge (Augment 0)"] = new engine.RulesElement({
    name: "Overwhelming Lunge (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_OVERWHELMING_LUNGE_(AUGMENT_0)",
    categories: ["Overwhelming Lunge (Augment 0)", "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Lunge (Augment 1)"] = new engine.RulesElement({
    name: "Overwhelming Lunge (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_OVERWHELMING_LUNGE_(AUGMENT_1)",
    categories: ["Overwhelming Lunge (Augment 1)", "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Lunge (Augment 4)"] = new engine.RulesElement({
    name: "Overwhelming Lunge (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_OVERWHELMING_LUNGE_(AUGMENT_4)",
    categories: ["Overwhelming Lunge (Augment 4)", "ID_INTERNAL_POWER_OVERWHELMING_LUNGE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Paralyzing Fear Attack"] = new engine.RulesElement({
    name: "Paralyzing Fear Attack",
    type: "Power",
    id: "ID_FMP_POWER_2645",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2645",
    categories: ["Paralyzing Fear Attack", "ID_FMP_POWER_2645", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Paralyzing Fear Strike"] = new engine.RulesElement({
    name: "Paralyzing Fear Strike",
    type: "Power",
    id: "ID_FMP_POWER_2644",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2644",
    categories: ["Paralyzing Fear Strike", "ID_FMP_POWER_2644", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2645"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Passage of Swords"] = new engine.RulesElement({
    name: "Passage of Swords",
    type: "Power",
    id: "ID_FMP_POWER_11119",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11119",
    categories: ["Passage of Swords", "ID_FMP_POWER_11119", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Path of the Bounding Stag"] = new engine.RulesElement({
    name: "Path of the Bounding Stag",
    type: "Power",
    id: "ID_FMP_POWER_11585",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11585",
    categories: ["Path of the Bounding Stag", "ID_FMP_POWER_11585", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Perception Shift"] = new engine.RulesElement({
    name: "Perception Shift",
    type: "Power",
    id: "ID_FMP_POWER_10305",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10305",
    categories: ["Perception Shift", "ID_FMP_POWER_10305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Perception Shift (Augment 0)"] = new engine.RulesElement({
    name: "Perception Shift (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PERCEPTION_SHIFT_(AUGMENT_0)",
    categories: ["Perception Shift (Augment 0)", "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Perception Shift (Augment 2)"] = new engine.RulesElement({
    name: "Perception Shift (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PERCEPTION_SHIFT_(AUGMENT_2)",
    categories: ["Perception Shift (Augment 2)", "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Perception Shift (Augment 6)"] = new engine.RulesElement({
    name: "Perception Shift (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PERCEPTION_SHIFT_(AUGMENT_6)",
    categories: ["Perception Shift (Augment 6)", "ID_INTERNAL_POWER_PERCEPTION_SHIFT_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Balance"] = new engine.RulesElement({
    name: "Perfect Balance",
    type: "Power",
    id: "ID_FMP_POWER_11528",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11528",
    categories: ["Perfect Balance", "ID_FMP_POWER_11528", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Eye"] = new engine.RulesElement({
    name: "Perfect Eye",
    type: "Power",
    id: "ID_FMP_POWER_11190",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11190",
    categories: ["Perfect Eye", "ID_FMP_POWER_11190", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Prison"] = new engine.RulesElement({
    name: "Perfect Prison",
    type: "Power",
    id: "ID_FMP_POWER_10314",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10314",
    categories: ["Perfect Prison", "ID_FMP_POWER_10314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_530", "Psionic Binder", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Recall"] = new engine.RulesElement({
    name: "Perfect Recall",
    type: "Power",
    id: "ID_FMP_POWER_9349",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9349",
    categories: ["Perfect Recall", "ID_FMP_POWER_9349", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Sight"] = new engine.RulesElement({
    name: "Perfect Sight",
    type: "Power",
    id: "ID_FMP_POWER_11589",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11589",
    categories: ["Perfect Sight", "ID_FMP_POWER_11589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Runes"] = new engine.RulesElement({
    name: "Persistent Runes",
    type: "Power",
    id: "ID_FMP_POWER_11525",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11525",
    categories: ["Persistent Runes", "ID_FMP_POWER_11525", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_617", "Rune Maker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Tail"] = new engine.RulesElement({
    name: "Persistent Tail",
    type: "Power",
    id: "ID_FMP_POWER_11594",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11594",
    categories: ["Persistent Tail", "ID_FMP_POWER_11594", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Veil"] = new engine.RulesElement({
    name: "Persistent Veil",
    type: "Power",
    id: "ID_FMP_POWER_11100",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11100",
    categories: ["Persistent Veil", "ID_FMP_POWER_11100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Hook"] = new engine.RulesElement({
    name: "Phantom Hook",
    type: "Power",
    id: "ID_FMP_POWER_8268",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8268",
    categories: ["Phantom Hook", "ID_FMP_POWER_8268", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_447", "Uncarnate", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Hook (Augment 0)"] = new engine.RulesElement({
    name: "Phantom Hook (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHANTOM_HOOK_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PHANTOM_HOOK_(AUGMENT_0)",
    categories: ["Phantom Hook (Augment 0)", "ID_INTERNAL_POWER_PHANTOM_HOOK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Hook (Augment 2)"] = new engine.RulesElement({
    name: "Phantom Hook (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHANTOM_HOOK_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PHANTOM_HOOK_(AUGMENT_2)",
    categories: ["Phantom Hook (Augment 2)", "ID_INTERNAL_POWER_PHANTOM_HOOK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Phoenix Dance"] = new engine.RulesElement({
    name: "Phoenix Dance",
    type: "Power",
    id: "ID_FMP_POWER_11252",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11252",
    categories: ["Phoenix Dance", "ID_FMP_POWER_11252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Physician's Care"] = new engine.RulesElement({
    name: "Physician's Care",
    type: "Power",
    id: "ID_FMP_POWER_11550",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11550",
    categories: ["Physician's Care", "ID_FMP_POWER_11550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Possessing Spirits"] = new engine.RulesElement({
    name: "Possessing Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11466",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11466",
    categories: ["Possessing Spirits", "ID_FMP_POWER_11466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Practiced Rider"] = new engine.RulesElement({
    name: "Practiced Rider",
    type: "Power",
    id: "ID_FMP_POWER_9330",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9330",
    categories: ["Practiced Rider", "ID_FMP_POWER_9330", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Precognitive Step"] = new engine.RulesElement({
    name: "Precognitive Step",
    type: "Power",
    id: "ID_FMP_POWER_8249",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8249",
    categories: ["Precognitive Step", "ID_FMP_POWER_8249", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Predator to Prey"] = new engine.RulesElement({
    name: "Predator to Prey",
    type: "Power",
    id: "ID_FMP_POWER_11166",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11166",
    categories: ["Predator to Prey", "ID_FMP_POWER_11166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Defense"] = new engine.RulesElement({
    name: "Prescient Defense",
    type: "Power",
    id: "ID_FMP_POWER_11580",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11580",
    categories: ["Prescient Defense", "ID_FMP_POWER_11580", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Maneuver"] = new engine.RulesElement({
    name: "Prescient Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_9324",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9324",
    categories: ["Prescient Maneuver", "ID_FMP_POWER_9324", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Strike"] = new engine.RulesElement({
    name: "Prescient Strike",
    type: "Power",
    id: "ID_FMP_POWER_10282",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10282",
    categories: ["Prescient Strike", "ID_FMP_POWER_10282", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Strike (Augment 0)"] = new engine.RulesElement({
    name: "Prescient Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESCIENT_STRIKE_(AUGMENT_0)",
    categories: ["Prescient Strike (Augment 0)", "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Strike (Augment 1)"] = new engine.RulesElement({
    name: "Prescient Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESCIENT_STRIKE_(AUGMENT_1)",
    categories: ["Prescient Strike (Augment 1)", "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Strike (Augment 2)"] = new engine.RulesElement({
    name: "Prescient Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESCIENT_STRIKE_(AUGMENT_2)",
    categories: ["Prescient Strike (Augment 2)", "ID_INTERNAL_POWER_PRESCIENT_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Press of Battle"] = new engine.RulesElement({
    name: "Press of Battle",
    type: "Power",
    id: "ID_FMP_POWER_11192",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11192",
    categories: ["Press of Battle", "ID_FMP_POWER_11192", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Press of Battle (Augment 0)"] = new engine.RulesElement({
    name: "Press of Battle (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESS_OF_BATTLE_(AUGMENT_0)",
    categories: ["Press of Battle (Augment 0)", "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Press of Battle (Augment 2)"] = new engine.RulesElement({
    name: "Press of Battle (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESS_OF_BATTLE_(AUGMENT_2)",
    categories: ["Press of Battle (Augment 2)", "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Press of Battle (Augment 6)"] = new engine.RulesElement({
    name: "Press of Battle (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PRESS_OF_BATTLE_(AUGMENT_6)",
    categories: ["Press of Battle (Augment 6)", "ID_INTERNAL_POWER_PRESS_OF_BATTLE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Morass"] = new engine.RulesElement({
    name: "Primal Morass",
    type: "Power",
    id: "ID_FMP_POWER_11503",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11503",
    categories: ["Primal Morass", "ID_FMP_POWER_11503", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Protecting Spirits"] = new engine.RulesElement({
    name: "Protecting Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11477",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11477",
    categories: ["Protecting Spirits", "ID_FMP_POWER_11477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Ambush"] = new engine.RulesElement({
    name: "Psionic Ambush",
    type: "Power",
    id: "ID_FMP_POWER_11167",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11167",
    categories: ["Psionic Ambush", "ID_FMP_POWER_11167", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Anchor"] = new engine.RulesElement({
    name: "Psionic Anchor",
    type: "Power",
    id: "ID_FMP_POWER_11160",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11160",
    categories: ["Psionic Anchor", "ID_FMP_POWER_11160", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Conduit"] = new engine.RulesElement({
    name: "Psionic Conduit",
    type: "Power",
    id: "ID_FMP_POWER_11067",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11067",
    categories: ["Psionic Conduit", "ID_FMP_POWER_11067", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Shield"] = new engine.RulesElement({
    name: "Psionic Shield",
    type: "Power",
    id: "ID_FMP_POWER_10276",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10276",
    categories: ["Psionic Shield", "ID_FMP_POWER_10276", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Shield (Augment 0)"] = new engine.RulesElement({
    name: "Psionic Shield (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SHIELD_(AUGMENT_0)",
    categories: ["Psionic Shield (Augment 0)", "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Shield (Augment 1)"] = new engine.RulesElement({
    name: "Psionic Shield (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SHIELD_(AUGMENT_1)",
    categories: ["Psionic Shield (Augment 1)", "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Shield (Augment 2)"] = new engine.RulesElement({
    name: "Psionic Shield (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SHIELD_(AUGMENT_2)",
    categories: ["Psionic Shield (Augment 2)", "ID_INTERNAL_POWER_PSIONIC_SHIELD_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Speed"] = new engine.RulesElement({
    name: "Psionic Speed",
    type: "Power",
    id: "ID_FMP_POWER_2635",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2635",
    categories: ["Psionic Speed", "ID_FMP_POWER_2635", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Speed (Augment 0)"] = new engine.RulesElement({
    name: "Psionic Speed (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SPEED_(AUGMENT_0)",
    categories: ["Psionic Speed (Augment 0)", "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Speed (Augment 1)"] = new engine.RulesElement({
    name: "Psionic Speed (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SPEED_(AUGMENT_1)",
    categories: ["Psionic Speed (Augment 1)", "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Speed (Augment 2)"] = new engine.RulesElement({
    name: "Psionic Speed (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_SPEED_(AUGMENT_2)",
    categories: ["Psionic Speed (Augment 2)", "ID_INTERNAL_POWER_PSIONIC_SPEED_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Storm"] = new engine.RulesElement({
    name: "Psionic Storm",
    type: "Power",
    id: "ID_FMP_POWER_11197",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11197",
    categories: ["Psionic Storm", "ID_FMP_POWER_11197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Storm (Augment 0)"] = new engine.RulesElement({
    name: "Psionic Storm (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_STORM_(AUGMENT_0)",
    categories: ["Psionic Storm (Augment 0)", "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Storm (Augment 2)"] = new engine.RulesElement({
    name: "Psionic Storm (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_STORM_(AUGMENT_2)",
    categories: ["Psionic Storm (Augment 2)", "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Storm (Augment 6)"] = new engine.RulesElement({
    name: "Psionic Storm (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_STORM_(AUGMENT_6)",
    categories: ["Psionic Storm (Augment 6)", "ID_INTERNAL_POWER_PSIONIC_STORM_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Veil"] = new engine.RulesElement({
    name: "Psionic Veil",
    type: "Power",
    id: "ID_FMP_POWER_8261",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8261",
    categories: ["Psionic Veil", "ID_FMP_POWER_8261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Veil (Augment 0)"] = new engine.RulesElement({
    name: "Psionic Veil (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_VEIL_(AUGMENT_0)",
    categories: ["Psionic Veil (Augment 0)", "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Veil (Augment 2)"] = new engine.RulesElement({
    name: "Psionic Veil (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_VEIL_(AUGMENT_2)",
    categories: ["Psionic Veil (Augment 2)", "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Veil (Augment 6)"] = new engine.RulesElement({
    name: "Psionic Veil (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSIONIC_VEIL_(AUGMENT_6)",
    categories: ["Psionic Veil (Augment 6)", "ID_INTERNAL_POWER_PSIONIC_VEIL_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Vigor"] = new engine.RulesElement({
    name: "Psionic Vigor",
    type: "Power",
    id: "ID_FMP_POWER_11162",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11162",
    categories: ["Psionic Vigor", "ID_FMP_POWER_11162", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Brand"] = new engine.RulesElement({
    name: "Psychic Brand",
    type: "Power",
    id: "ID_FMP_POWER_8252",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8252",
    categories: ["Psychic Brand", "ID_FMP_POWER_8252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Brand (Augment 0)"] = new engine.RulesElement({
    name: "Psychic Brand (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSYCHIC_BRAND_(AUGMENT_0)",
    categories: ["Psychic Brand (Augment 0)", "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Brand (Augment 1)"] = new engine.RulesElement({
    name: "Psychic Brand (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSYCHIC_BRAND_(AUGMENT_1)",
    categories: ["Psychic Brand (Augment 1)", "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Brand (Augment 4)"] = new engine.RulesElement({
    name: "Psychic Brand (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_PSYCHIC_BRAND_(AUGMENT_4)",
    categories: ["Psychic Brand (Augment 4)", "ID_INTERNAL_POWER_PSYCHIC_BRAND_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Chirurgery"] = new engine.RulesElement({
    name: "Psychic Chirurgery",
    type: "Power",
    id: "ID_FMP_POWER_8250",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8250",
    categories: ["Psychic Chirurgery", "ID_FMP_POWER_8250", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Crush"] = new engine.RulesElement({
    name: "Psychic Crush",
    type: "Power",
    id: "ID_FMP_POWER_8247",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8247",
    categories: ["Psychic Crush", "ID_FMP_POWER_8247", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Hammer"] = new engine.RulesElement({
    name: "Psychic Hammer",
    type: "Power",
    id: "ID_FMP_POWER_10456",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10456",
    categories: ["Psychic Hammer", "ID_FMP_POWER_10456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Leech"] = new engine.RulesElement({
    name: "Psychic Leech",
    type: "Power",
    id: "ID_FMP_POWER_8253",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8253",
    categories: ["Psychic Leech", "ID_FMP_POWER_8253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Psychofeedback"] = new engine.RulesElement({
    name: "Psychofeedback",
    type: "Power",
    id: "ID_FMP_POWER_8248",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8248",
    categories: ["Psychofeedback", "ID_FMP_POWER_8248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Purifying Meditation"] = new engine.RulesElement({
    name: "Purifying Meditation",
    type: "Power",
    id: "ID_FMP_POWER_7464",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7464",
    categories: ["Purifying Meditation", "ID_FMP_POWER_7464", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Pursuit of the Hunter"] = new engine.RulesElement({
    name: "Pursuit of the Hunter",
    type: "Power",
    id: "ID_FMP_POWER_7443",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7443",
    categories: ["Pursuit of the Hunter", "ID_FMP_POWER_7443", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Palm"] = new engine.RulesElement({
    name: "Quick Palm",
    type: "Power",
    id: "ID_FMP_POWER_11599",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11599",
    categories: ["Quick Palm", "ID_FMP_POWER_11599", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Switch"] = new engine.RulesElement({
    name: "Quick Switch",
    type: "Power",
    id: "ID_FMP_POWER_11601",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11601",
    categories: ["Quick Switch", "ID_FMP_POWER_11601", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Quill Storm"] = new engine.RulesElement({
    name: "Quill Storm",
    type: "Power",
    id: "ID_FMP_POWER_9539",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9539",
    categories: ["Quill Storm", "ID_FMP_POWER_9539", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Quivering Palm"] = new engine.RulesElement({
    name: "Quivering Palm",
    type: "Power",
    id: "ID_FMP_POWER_7487",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7487",
    categories: ["Quivering Palm", "ID_FMP_POWER_7487", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rabid Shot"] = new engine.RulesElement({
    name: "Rabid Shot",
    type: "Power",
    id: "ID_FMP_POWER_11489",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11489",
    categories: ["Rabid Shot", "ID_FMP_POWER_11489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Rapid Escape"] = new engine.RulesElement({
    name: "Rapid Escape",
    type: "Power",
    id: "ID_FMP_POWER_9297",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9297",
    categories: ["Rapid Escape", "ID_FMP_POWER_9297", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rapid Recovery"] = new engine.RulesElement({
    name: "Rapid Recovery",
    type: "Power",
    id: "ID_FMP_POWER_10304",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10304",
    categories: ["Rapid Recovery", "ID_FMP_POWER_10304", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Ravaging Shot"] = new engine.RulesElement({
    name: "Ravaging Shot",
    type: "Power",
    id: "ID_FMP_POWER_9546",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9546",
    categories: ["Ravaging Shot", "ID_FMP_POWER_9546", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_473", "Crimson Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Raven Wing Shot"] = new engine.RulesElement({
    name: "Raven Wing Shot",
    type: "Power",
    id: "ID_FMP_POWER_9525",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9525",
    categories: ["Raven Wing Shot", "ID_FMP_POWER_9525", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Ravening Thought"] = new engine.RulesElement({
    name: "Ravening Thought",
    type: "Power",
    id: "ID_FMP_POWER_8230",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8230",
    categories: ["Ravening Thought", "ID_FMP_POWER_8230", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Razor Hail"] = new engine.RulesElement({
    name: "Razor Hail",
    type: "Power",
    id: "ID_FMP_POWER_9543",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9543",
    categories: ["Razor Hail", "ID_FMP_POWER_9543", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Reactive Resistance"] = new engine.RulesElement({
    name: "Reactive Resistance",
    type: "Power",
    id: "ID_FMP_POWER_11121",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11121",
    categories: ["Reactive Resistance", "ID_FMP_POWER_11121", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Reactive Surge"] = new engine.RulesElement({
    name: "Reactive Surge",
    type: "Power",
    id: "ID_FMP_POWER_11548",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11548",
    categories: ["Reactive Surge", "ID_FMP_POWER_11548", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Recitation"] = new engine.RulesElement({
    name: "Recitation",
    type: "Power",
    id: "ID_FMP_POWER_3684",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3684",
    categories: ["Recitation", "ID_FMP_POWER_3684", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Recrystallize"] = new engine.RulesElement({
    name: "Recrystallize",
    type: "Power",
    id: "ID_FMP_POWER_11059",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11059",
    categories: ["Recrystallize", "ID_FMP_POWER_11059", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_587", "Shard Disciple", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reflexive Dodge"] = new engine.RulesElement({
    name: "Reflexive Dodge",
    type: "Power",
    id: "ID_FMP_POWER_11531",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11531",
    categories: ["Reflexive Dodge", "ID_FMP_POWER_11531", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Re-Form Mind"] = new engine.RulesElement({
    name: "Re-Form Mind",
    type: "Power",
    id: "ID_FMP_POWER_10298",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10298",
    categories: ["Re-Form Mind", "ID_FMP_POWER_10298", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Rejuvenate Mind"] = new engine.RulesElement({
    name: "Rejuvenate Mind",
    type: "Power",
    id: "ID_FMP_POWER_11522",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11522",
    categories: ["Rejuvenate Mind", "ID_FMP_POWER_11522", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_614", "Godmind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Rejuvenate the Mind"] = new engine.RulesElement({
    name: "Rejuvenate the Mind",
    type: "Power",
    id: "ID_FMP_POWER_8255",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8255",
    categories: ["Rejuvenate the Mind", "ID_FMP_POWER_8255", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Hound Attack"] = new engine.RulesElement({
    name: "Relentless Hound Attack",
    type: "Power",
    id: "ID_FMP_POWER_11230",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11230",
    categories: ["Relentless Hound Attack", "ID_FMP_POWER_11230", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Hound Technique"] = new engine.RulesElement({
    name: "Relentless Hound Technique",
    type: "Power",
    id: "ID_FMP_POWER_11229",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11229",
    categories: ["Relentless Hound Technique", "ID_FMP_POWER_11229", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11230"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Relentless Step"] = new engine.RulesElement({
    name: "Relentless Step",
    type: "Power",
    id: "ID_FMP_POWER_11524",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11524",
    categories: ["Relentless Step", "ID_FMP_POWER_11524", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_616", "Master of the Eternal Hunt", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Strike"] = new engine.RulesElement({
    name: "Relentless Strike",
    type: "Power",
    id: "ID_FMP_POWER_10447",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10447",
    categories: ["Relentless Strike", "ID_FMP_POWER_10447", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10448"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Relentless Strike Attack"] = new engine.RulesElement({
    name: "Relentless Strike Attack",
    type: "Power",
    id: "ID_FMP_POWER_10448",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10448",
    categories: ["Relentless Strike Attack", "ID_FMP_POWER_10448", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Rending Vines"] = new engine.RulesElement({
    name: "Rending Vines",
    type: "Power",
    id: "ID_FMP_POWER_11500",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11500",
    categories: ["Rending Vines", "ID_FMP_POWER_11500", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11501"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Rending Vines Attack"] = new engine.RulesElement({
    name: "Rending Vines Attack",
    type: "Power",
    id: "ID_FMP_POWER_11501",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11501",
    categories: ["Rending Vines Attack", "ID_FMP_POWER_11501", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Bastion"] = new engine.RulesElement({
    name: "Restorative Bastion",
    type: "Power",
    id: "ID_FMP_POWER_11145",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11145",
    categories: ["Restorative Bastion", "ID_FMP_POWER_11145", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Bastion (Augment 0)"] = new engine.RulesElement({
    name: "Restorative Bastion (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_RESTORATIVE_BASTION_(AUGMENT_0)",
    categories: ["Restorative Bastion (Augment 0)", "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Bastion (Augment 2)"] = new engine.RulesElement({
    name: "Restorative Bastion (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_RESTORATIVE_BASTION_(AUGMENT_2)",
    categories: ["Restorative Bastion (Augment 2)", "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Bastion (Augment 6)"] = new engine.RulesElement({
    name: "Restorative Bastion (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_RESTORATIVE_BASTION_(AUGMENT_6)",
    categories: ["Restorative Bastion (Augment 6)", "ID_INTERNAL_POWER_RESTORATIVE_BASTION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Revealed Assets"] = new engine.RulesElement({
    name: "Revealed Assets",
    type: "Power",
    id: "ID_FMP_POWER_11143",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11143",
    categories: ["Revealed Assets", "ID_FMP_POWER_11143", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Strike"] = new engine.RulesElement({
    name: "Revealing Strike",
    type: "Power",
    id: "ID_FMP_POWER_10306",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10306",
    categories: ["Revealing Strike", "ID_FMP_POWER_10306", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Strike (Augment 0)"] = new engine.RulesElement({
    name: "Revealing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVEALING_STRIKE_(AUGMENT_0)",
    categories: ["Revealing Strike (Augment 0)", "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Strike (Augment 2)"] = new engine.RulesElement({
    name: "Revealing Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVEALING_STRIKE_(AUGMENT_2)",
    categories: ["Revealing Strike (Augment 2)", "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Strike (Augment 6)"] = new engine.RulesElement({
    name: "Revealing Strike (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVEALING_STRIKE_(AUGMENT_6)",
    categories: ["Revealing Strike (Augment 6)", "ID_INTERNAL_POWER_REVEALING_STRIKE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Slash"] = new engine.RulesElement({
    name: "Revelatory Slash",
    type: "Power",
    id: "ID_FMP_POWER_11140",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11140",
    categories: ["Revelatory Slash", "ID_FMP_POWER_11140", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Slash (Augment 0)"] = new engine.RulesElement({
    name: "Revelatory Slash (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_SLASH_(AUGMENT_0)",
    categories: ["Revelatory Slash (Augment 0)", "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Slash (Augment 2)"] = new engine.RulesElement({
    name: "Revelatory Slash (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_SLASH_(AUGMENT_2)",
    categories: ["Revelatory Slash (Augment 2)", "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Slash (Augment 6)"] = new engine.RulesElement({
    name: "Revelatory Slash (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_SLASH_(AUGMENT_6)",
    categories: ["Revelatory Slash (Augment 6)", "ID_INTERNAL_POWER_REVELATORY_SLASH_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Strike"] = new engine.RulesElement({
    name: "Revelatory Strike",
    type: "Power",
    id: "ID_FMP_POWER_10294",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10294",
    categories: ["Revelatory Strike", "ID_FMP_POWER_10294", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Strike (Augment 0)"] = new engine.RulesElement({
    name: "Revelatory Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_STRIKE_(AUGMENT_0)",
    categories: ["Revelatory Strike (Augment 0)", "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Strike (Augment 1)"] = new engine.RulesElement({
    name: "Revelatory Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_STRIKE_(AUGMENT_1)",
    categories: ["Revelatory Strike (Augment 1)", "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Revelatory Strike (Augment 4)"] = new engine.RulesElement({
    name: "Revelatory Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REVELATORY_STRIKE_(AUGMENT_4)",
    categories: ["Revelatory Strike (Augment 4)", "ID_INTERNAL_POWER_REVELATORY_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Rewarding Strike"] = new engine.RulesElement({
    name: "Rewarding Strike",
    type: "Power",
    id: "ID_FMP_POWER_11105",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11105",
    categories: ["Rewarding Strike", "ID_FMP_POWER_11105", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Rewarding Strike (Augment 0)"] = new engine.RulesElement({
    name: "Rewarding Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REWARDING_STRIKE_(AUGMENT_0)",
    categories: ["Rewarding Strike (Augment 0)", "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Rewarding Strike (Augment 1)"] = new engine.RulesElement({
    name: "Rewarding Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REWARDING_STRIKE_(AUGMENT_1)",
    categories: ["Rewarding Strike (Augment 1)", "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Rewarding Strike (Augment 2)"] = new engine.RulesElement({
    name: "Rewarding Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_REWARDING_STRIKE_(AUGMENT_2)",
    categories: ["Rewarding Strike (Augment 2)", "ID_INTERNAL_POWER_REWARDING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Rime Strike"] = new engine.RulesElement({
    name: "Rime Strike",
    type: "Power",
    id: "ID_FMP_POWER_11468",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11468",
    categories: ["Rime Strike", "ID_FMP_POWER_11468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ring the Golden Bell"] = new engine.RulesElement({
    name: "Ring the Golden Bell",
    type: "Power",
    id: "ID_FMP_POWER_7474",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7474",
    categories: ["Ring the Golden Bell", "ID_FMP_POWER_7474", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rising Dragon Fire"] = new engine.RulesElement({
    name: "Rising Dragon Fire",
    type: "Power",
    id: "ID_FMP_POWER_7480",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7480",
    categories: ["Rising Dragon Fire", "ID_FMP_POWER_7480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rising Storm"] = new engine.RulesElement({
    name: "Rising Storm",
    type: "Power",
    id: "ID_FMP_POWER_11210",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11210",
    categories: ["Rising Storm", "ID_FMP_POWER_11210", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11211"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Rising Storm [Movement Technique]"] = new engine.RulesElement({
    name: "Rising Storm [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11211",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11211",
    categories: ["Rising Storm [Movement Technique]", "ID_FMP_POWER_11211", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Roaring Missile"] = new engine.RulesElement({
    name: "Roaring Missile",
    type: "Power",
    id: "ID_FMP_POWER_11504",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11504",
    categories: ["Roaring Missile", "ID_FMP_POWER_11504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Root the Mountain"] = new engine.RulesElement({
    name: "Root the Mountain",
    type: "Power",
    id: "ID_FMP_POWER_11266",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11266",
    categories: ["Root the Mountain", "ID_FMP_POWER_11266", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_596", "Mountain Devotee", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Rrathmal Pursuit"] = new engine.RulesElement({
    name: "Rrathmal Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_9679",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9679",
    categories: ["Rrathmal Pursuit", "ID_FMP_POWER_9679", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_450", "Rrathmal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Allied Effort"] = new engine.RulesElement({
    name: "Rune of Allied Effort",
    type: "Power",
    id: "ID_FMP_POWER_11438",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11438",
    categories: ["Rune of Allied Effort", "ID_FMP_POWER_11438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Arrow's Flight"] = new engine.RulesElement({
    name: "Rune of Arrow's Flight",
    type: "Power",
    id: "ID_FMP_POWER_11387",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11387",
    categories: ["Rune of Arrow's Flight", "ID_FMP_POWER_11387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Awakening"] = new engine.RulesElement({
    name: "Rune of Awakening",
    type: "Power",
    id: "ID_FMP_POWER_11447",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11447",
    categories: ["Rune of Awakening", "ID_FMP_POWER_11447", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Boundless Fury"] = new engine.RulesElement({
    name: "Rune of Boundless Fury",
    type: "Power",
    id: "ID_FMP_POWER_11399",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11399",
    categories: ["Rune of Boundless Fury", "ID_FMP_POWER_11399", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Daunting Light"] = new engine.RulesElement({
    name: "Rune of Daunting Light",
    type: "Power",
    id: "ID_FMP_POWER_11405",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11405",
    categories: ["Rune of Daunting Light", "ID_FMP_POWER_11405", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Death's Verge"] = new engine.RulesElement({
    name: "Rune of Death's Verge",
    type: "Power",
    id: "ID_FMP_POWER_11400",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11400",
    categories: ["Rune of Death's Verge", "ID_FMP_POWER_11400", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11401"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Rune of Endless Fire"] = new engine.RulesElement({
    name: "Rune of Endless Fire",
    type: "Power",
    id: "ID_FMP_POWER_11373",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11373",
    categories: ["Rune of Endless Fire", "ID_FMP_POWER_11373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Iron's Rebuke"] = new engine.RulesElement({
    name: "Rune of Iron's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_11374",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11374",
    categories: ["Rune of Iron's Rebuke", "ID_FMP_POWER_11374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Judgment's Levy"] = new engine.RulesElement({
    name: "Rune of Judgment's Levy",
    type: "Power",
    id: "ID_FMP_POWER_11413",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11413",
    categories: ["Rune of Judgment's Levy", "ID_FMP_POWER_11413", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11414"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Rune of Mending"] = new engine.RulesElement({
    name: "Rune of Mending",
    type: "Power",
    id: "ID_FMP_POWER_11353",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11353",
    categories: ["Rune of Mending", "ID_FMP_POWER_11353"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Meritorious Alacrity"] = new engine.RulesElement({
    name: "Rune of Meritorious Alacrity",
    type: "Power",
    id: "ID_FMP_POWER_11392",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11392",
    categories: ["Rune of Meritorious Alacrity", "ID_FMP_POWER_11392", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Pacifism"] = new engine.RulesElement({
    name: "Rune of Pacifism",
    type: "Power",
    id: "ID_FMP_POWER_11448",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11448",
    categories: ["Rune of Pacifism", "ID_FMP_POWER_11448", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Preservation"] = new engine.RulesElement({
    name: "Rune of Preservation",
    type: "Power",
    id: "ID_FMP_POWER_11417",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11417",
    categories: ["Rune of Preservation", "ID_FMP_POWER_11417", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Reinvigoration"] = new engine.RulesElement({
    name: "Rune of Reinvigoration",
    type: "Power",
    id: "ID_FMP_POWER_11418",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11418",
    categories: ["Rune of Reinvigoration", "ID_FMP_POWER_11418", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Rising Fury"] = new engine.RulesElement({
    name: "Rune of Rising Fury",
    type: "Power",
    id: "ID_FMP_POWER_11435",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11435",
    categories: ["Rune of Rising Fury", "ID_FMP_POWER_11435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Roaring Fire"] = new engine.RulesElement({
    name: "Rune of Roaring Fire",
    type: "Power",
    id: "ID_FMP_POWER_11396",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11396",
    categories: ["Rune of Roaring Fire", "ID_FMP_POWER_11396", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Rust"] = new engine.RulesElement({
    name: "Rune of Rust",
    type: "Power",
    id: "ID_FMP_POWER_11426",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11426",
    categories: ["Rune of Rust", "ID_FMP_POWER_11426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Shared Lore"] = new engine.RulesElement({
    name: "Rune of Shared Lore",
    type: "Power",
    id: "ID_FMP_POWER_11406",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11406",
    categories: ["Rune of Shared Lore", "ID_FMP_POWER_11406", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Shielding (Rune Shield)"] = new engine.RulesElement({
    name: "Rune of Shielding (Rune Shield)",
    type: "Power",
    id: "ID_FMP_POWER_11461",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11461",
    categories: ["Rune of Shielding (Rune Shield)", "ID_FMP_POWER_11461", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_606", "Rune Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Shielding (Runepriest)"] = new engine.RulesElement({
    name: "Rune of Shielding (Runepriest)",
    type: "Power",
    id: "ID_FMP_POWER_11402",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11402",
    categories: ["Rune of Shielding (Runepriest)", "ID_FMP_POWER_11402", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Astral Phalanx"] = new engine.RulesElement({
    name: "Rune of the Astral Phalanx",
    type: "Power",
    id: "ID_FMP_POWER_11421",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11421",
    categories: ["Rune of the Astral Phalanx", "ID_FMP_POWER_11421", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Astral Winds"] = new engine.RulesElement({
    name: "Rune of the Astral Winds",
    type: "Power",
    id: "ID_FMP_POWER_11407",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11407",
    categories: ["Rune of the Astral Winds", "ID_FMP_POWER_11407", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Conquering Sign"] = new engine.RulesElement({
    name: "Rune of the Conquering Sign",
    type: "Power",
    id: "ID_FMP_POWER_11439",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11439",
    categories: ["Rune of the Conquering Sign", "ID_FMP_POWER_11439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Ember of Wrath"] = new engine.RulesElement({
    name: "Rune of the Ember of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_11388",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11388",
    categories: ["Rune of the Ember of Wrath", "ID_FMP_POWER_11388", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Final Act"] = new engine.RulesElement({
    name: "Rune of the Final Act",
    type: "Power",
    id: "ID_FMP_POWER_11389",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11389",
    categories: ["Rune of the Final Act", "ID_FMP_POWER_11389", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Final Effort"] = new engine.RulesElement({
    name: "Rune of the Final Effort",
    type: "Power",
    id: "ID_FMP_POWER_11380",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11380",
    categories: ["Rune of the Final Effort", "ID_FMP_POWER_11380", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the First Fortress"] = new engine.RulesElement({
    name: "Rune of the First Fortress",
    type: "Power",
    id: "ID_FMP_POWER_11415",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11415",
    categories: ["Rune of the First Fortress", "ID_FMP_POWER_11415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Flanking Wind"] = new engine.RulesElement({
    name: "Rune of the Flanking Wind",
    type: "Power",
    id: "ID_FMP_POWER_11416",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11416",
    categories: ["Rune of the Flanking Wind", "ID_FMP_POWER_11416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Hero's Resolve"] = new engine.RulesElement({
    name: "Rune of the Hero's Resolve",
    type: "Power",
    id: "ID_FMP_POWER_11432",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11432",
    categories: ["Rune of the Hero's Resolve", "ID_FMP_POWER_11432", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Penultimate Step"] = new engine.RulesElement({
    name: "Rune of the Penultimate Step",
    type: "Power",
    id: "ID_FMP_POWER_11440",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11440",
    categories: ["Rune of the Penultimate Step", "ID_FMP_POWER_11440", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Threshold"] = new engine.RulesElement({
    name: "Rune of the Threshold",
    type: "Power",
    id: "ID_FMP_POWER_11427",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11427",
    categories: ["Rune of the Threshold", "ID_FMP_POWER_11427", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Unblinking Eye"] = new engine.RulesElement({
    name: "Rune of the Unblinking Eye",
    type: "Power",
    id: "ID_FMP_POWER_11419",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11419",
    categories: ["Rune of the Unblinking Eye", "ID_FMP_POWER_11419", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Undeniable Dawn"] = new engine.RulesElement({
    name: "Rune of the Undeniable Dawn",
    type: "Power",
    id: "ID_FMP_POWER_11375",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11375",
    categories: ["Rune of the Undeniable Dawn", "ID_FMP_POWER_11375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Wandering Star"] = new engine.RulesElement({
    name: "Rune of the Wandering Star",
    type: "Power",
    id: "ID_FMP_POWER_11436",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11436",
    categories: ["Rune of the Wandering Star", "ID_FMP_POWER_11436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of the Warded Path"] = new engine.RulesElement({
    name: "Rune of the Warded Path",
    type: "Power",
    id: "ID_FMP_POWER_11420",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11420",
    categories: ["Rune of the Warded Path", "ID_FMP_POWER_11420", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Twilight's Beacon"] = new engine.RulesElement({
    name: "Rune of Twilight's Beacon",
    type: "Power",
    id: "ID_FMP_POWER_11376",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11376",
    categories: ["Rune of Twilight's Beacon", "ID_FMP_POWER_11376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Unyielding Steel"] = new engine.RulesElement({
    name: "Rune of Unyielding Steel",
    type: "Power",
    id: "ID_FMP_POWER_11393",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11393",
    categories: ["Rune of Unyielding Steel", "ID_FMP_POWER_11393", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Warding Light"] = new engine.RulesElement({
    name: "Rune of Warding Light",
    type: "Power",
    id: "ID_FMP_POWER_11428",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11428",
    categories: ["Rune of Warding Light", "ID_FMP_POWER_11428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11429"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Savage Archery"] = new engine.RulesElement({
    name: "Savage Archery",
    type: "Power",
    id: "ID_FMP_POWER_11515",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11515",
    categories: ["Savage Archery", "ID_FMP_POWER_11515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_607", "Death Arrow", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Scrambling Climb"] = new engine.RulesElement({
    name: "Scrambling Climb",
    type: "Power",
    id: "ID_FMP_POWER_9302",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9302",
    categories: ["Scrambling Climb", "ID_FMP_POWER_9302", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Seal the Threshold"] = new engine.RulesElement({
    name: "Seal the Threshold",
    type: "Power",
    id: "ID_FMP_POWER_8267",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8267",
    categories: ["Seal the Threshold", "ID_FMP_POWER_8267", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_438", "Cerulean Adept", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Send Thoughts"] = new engine.RulesElement({
    name: "Send Thoughts",
    type: "Power",
    id: "ID_FMP_POWER_8225",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8225",
    categories: ["Send Thoughts", "ID_FMP_POWER_8225"]
  });
  byID[te.id] = te;
  
  te = Power["Sense Minds"] = new engine.RulesElement({
    name: "Sense Minds",
    type: "Power",
    id: "ID_FMP_POWER_11168",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11168",
    categories: ["Sense Minds", "ID_FMP_POWER_11168", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sensory Onslaught"] = new engine.RulesElement({
    name: "Sensory Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_8242",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8242",
    categories: ["Sensory Onslaught", "ID_FMP_POWER_8242", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent Arrow"] = new engine.RulesElement({
    name: "Serpent Arrow",
    type: "Power",
    id: "ID_FMP_POWER_11467",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11467",
    categories: ["Serpent Arrow", "ID_FMP_POWER_11467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Ally"] = new engine.RulesElement({
    name: "Shadow Ally",
    type: "Power",
    id: "ID_FMP_POWER_2640",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2640",
    categories: ["Shadow Ally", "ID_FMP_POWER_2640", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shard Storm"] = new engine.RulesElement({
    name: "Shard Storm",
    type: "Power",
    id: "ID_FMP_POWER_11058",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11058",
    categories: ["Shard Storm", "ID_FMP_POWER_11058", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_587", "Shard Disciple", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shard Swarm"] = new engine.RulesElement({
    name: "Shard Swarm",
    type: "Power",
    id: "ID_FMP_POWER_11052",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11052",
    categories: ["Shard Swarm", "ID_FMP_POWER_11052", "ID_FMP_RACIAL_TRAIT_2328", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Vigor"] = new engine.RulesElement({
    name: "Shared Vigor",
    type: "Power",
    id: "ID_FMP_POWER_10302",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10302",
    categories: ["Shared Vigor", "ID_FMP_POWER_10302", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Shed Body"] = new engine.RulesElement({
    name: "Shed Body",
    type: "Power",
    id: "ID_FMP_POWER_8269",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8269",
    categories: ["Shed Body", "ID_FMP_POWER_8269", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_447", "Uncarnate", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sheltering Underbrush"] = new engine.RulesElement({
    name: "Sheltering Underbrush",
    type: "Power",
    id: "ID_FMP_POWER_9524",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9524",
    categories: ["Sheltering Underbrush", "ID_FMP_POWER_9524", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Crack"] = new engine.RulesElement({
    name: "Shield Crack",
    type: "Power",
    id: "ID_FMP_POWER_11332",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11332",
    categories: ["Shield Crack", "ID_FMP_POWER_11332", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Crack (Augment 0)"] = new engine.RulesElement({
    name: "Shield Crack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SHIELD_CRACK_(AUGMENT_0)",
    categories: ["Shield Crack (Augment 0)", "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Crack (Augment 1)"] = new engine.RulesElement({
    name: "Shield Crack (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SHIELD_CRACK_(AUGMENT_1)",
    categories: ["Shield Crack (Augment 1)", "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Crack (Augment 4)"] = new engine.RulesElement({
    name: "Shield Crack (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SHIELD_CRACK_(AUGMENT_4)",
    categories: ["Shield Crack (Augment 4)", "ID_INTERNAL_POWER_SHIELD_CRACK_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Radiance Attack"] = new engine.RulesElement({
    name: "Shield of Radiance Attack",
    type: "Power",
    id: "ID_FMP_POWER_11460",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11460",
    categories: ["Shield of Radiance Attack", "ID_FMP_POWER_11460", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_606", "Rune Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Sacrifice"] = new engine.RulesElement({
    name: "Shield of Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_11381",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11381",
    categories: ["Shield of Sacrifice", "ID_FMP_POWER_11381", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of the Iron Mind"] = new engine.RulesElement({
    name: "Shield of the Iron Mind",
    type: "Power",
    id: "ID_FMP_POWER_2646",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2646",
    categories: ["Shield of the Iron Mind", "ID_FMP_POWER_2646", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Vengeance"] = new engine.RulesElement({
    name: "Shield of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_11451",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11451",
    categories: ["Shield of Vengeance", "ID_FMP_POWER_11451", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_603", "Hammer of Vengeance (PH3)", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shred Reality"] = new engine.RulesElement({
    name: "Shred Reality",
    type: "Power",
    id: "ID_FMP_POWER_11334",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11334",
    categories: ["Shred Reality", "ID_FMP_POWER_11334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Shredding Ribbons"] = new engine.RulesElement({
    name: "Shredding Ribbons",
    type: "Power",
    id: "ID_FMP_POWER_11277",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11277",
    categories: ["Shredding Ribbons", "ID_FMP_POWER_11277", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Shrouding Gloom"] = new engine.RulesElement({
    name: "Shrouding Gloom",
    type: "Power",
    id: "ID_FMP_POWER_11593",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11593",
    categories: ["Shrouding Gloom", "ID_FMP_POWER_11593", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sinking Earth"] = new engine.RulesElement({
    name: "Sinking Earth",
    type: "Power",
    id: "ID_FMP_POWER_11505",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11505",
    categories: ["Sinking Earth", "ID_FMP_POWER_11505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Skill Empowerment"] = new engine.RulesElement({
    name: "Skill Empowerment",
    type: "Power",
    id: "ID_FMP_POWER_8232",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8232",
    categories: ["Skill Empowerment", "ID_FMP_POWER_8232", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sky Hook"] = new engine.RulesElement({
    name: "Sky Hook",
    type: "Power",
    id: "ID_FMP_POWER_11324",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11324",
    categories: ["Sky Hook", "ID_FMP_POWER_11324", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Slavering Sentinels"] = new engine.RulesElement({
    name: "Slavering Sentinels",
    type: "Power",
    id: "ID_FMP_POWER_11507",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11507",
    categories: ["Slavering Sentinels", "ID_FMP_POWER_11507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11508"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Slavering Sentinels Attack"] = new engine.RulesElement({
    name: "Slavering Sentinels Attack",
    type: "Power",
    id: "ID_FMP_POWER_11508",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11508",
    categories: ["Slavering Sentinels Attack", "ID_FMP_POWER_11508", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Slow Pursuit"] = new engine.RulesElement({
    name: "Slow Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_9342",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9342",
    categories: ["Slow Pursuit", "ID_FMP_POWER_9342", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Snap Out of It"] = new engine.RulesElement({
    name: "Snap Out of It",
    type: "Power",
    id: "ID_FMP_POWER_9328",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9328",
    categories: ["Snap Out of It", "ID_FMP_POWER_9328", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Soothing Words"] = new engine.RulesElement({
    name: "Soothing Words",
    type: "Power",
    id: "ID_FMP_POWER_9307",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9307",
    categories: ["Soothing Words", "ID_FMP_POWER_9307", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Break"] = new engine.RulesElement({
    name: "Soul Break",
    type: "Power",
    id: "ID_FMP_POWER_8263",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8263",
    categories: ["Soul Break", "ID_FMP_POWER_8263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Dance"] = new engine.RulesElement({
    name: "Soul Dance",
    type: "Power",
    id: "ID_FMP_POWER_7493",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7493",
    categories: ["Soul Dance", "ID_FMP_POWER_7493", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_364", "Ghostwalker", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Space Vortex"] = new engine.RulesElement({
    name: "Space Vortex",
    type: "Power",
    id: "ID_FMP_POWER_11339",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11339",
    categories: ["Space Vortex", "ID_FMP_POWER_11339", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Space Vortex (Augment 0)"] = new engine.RulesElement({
    name: "Space Vortex (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPACE_VORTEX_(AUGMENT_0)",
    categories: ["Space Vortex (Augment 0)", "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Space Vortex (Augment 2)"] = new engine.RulesElement({
    name: "Space Vortex (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPACE_VORTEX_(AUGMENT_2)",
    categories: ["Space Vortex (Augment 2)", "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Space Vortex (Augment 6)"] = new engine.RulesElement({
    name: "Space Vortex (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPACE_VORTEX_(AUGMENT_6)",
    categories: ["Space Vortex (Augment 6)", "ID_INTERNAL_POWER_SPACE_VORTEX_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Legion"] = new engine.RulesElement({
    name: "Spectral Legion",
    type: "Power",
    id: "ID_FMP_POWER_2626",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2626",
    categories: ["Spectral Legion", "ID_FMP_POWER_2626", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Legion (Augment 0)"] = new engine.RulesElement({
    name: "Spectral Legion (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPECTRAL_LEGION_(AUGMENT_0)",
    categories: ["Spectral Legion (Augment 0)", "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Legion (Augment 1)"] = new engine.RulesElement({
    name: "Spectral Legion (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPECTRAL_LEGION_(AUGMENT_1)",
    categories: ["Spectral Legion (Augment 1)", "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Legion (Augment 2)"] = new engine.RulesElement({
    name: "Spectral Legion (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPECTRAL_LEGION_(AUGMENT_2)",
    categories: ["Spectral Legion (Augment 2)", "ID_INTERNAL_POWER_SPECTRAL_LEGION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Scorpion Sting"] = new engine.RulesElement({
    name: "Spectral Scorpion Sting",
    type: "Power",
    id: "ID_FMP_POWER_11474",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11474",
    categories: ["Spectral Scorpion Sting", "ID_FMP_POWER_11474", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Speed of Thought"] = new engine.RulesElement({
    name: "Speed of Thought",
    type: "Power",
    id: "ID_FMP_POWER_10441",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10441",
    categories: ["Speed of Thought", "ID_FMP_POWER_10441"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Spirits"] = new engine.RulesElement({
    name: "Spider Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9506",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9506",
    categories: ["Spider Spirits", "ID_FMP_POWER_9506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Technique"] = new engine.RulesElement({
    name: "Spider Technique",
    type: "Power",
    id: "ID_FMP_POWER_7470",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7470",
    categories: ["Spider Technique", "ID_FMP_POWER_7470", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spinning Leopard Maneuver"] = new engine.RulesElement({
    name: "Spinning Leopard Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_11213",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11213",
    categories: ["Spinning Leopard Maneuver", "ID_FMP_POWER_11213", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Inferno"] = new engine.RulesElement({
    name: "Spirit Inferno",
    type: "Power",
    id: "ID_FMP_POWER_11506",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11506",
    categories: ["Spirit Inferno", "ID_FMP_POWER_11506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Rider"] = new engine.RulesElement({
    name: "Spirit Rider",
    type: "Power",
    id: "ID_FMP_POWER_11469",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11469",
    categories: ["Spirit Rider", "ID_FMP_POWER_11469", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Shackles"] = new engine.RulesElement({
    name: "Spirit Shackles",
    type: "Power",
    id: "ID_FMP_POWER_9549",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9549",
    categories: ["Spirit Shackles", "ID_FMP_POWER_9549", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_474", "Seven Fates Archer", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of Fire and Ice"] = new engine.RulesElement({
    name: "Spirits of Fire and Ice",
    type: "Power",
    id: "ID_FMP_POWER_11485",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11485",
    categories: ["Spirits of Fire and Ice", "ID_FMP_POWER_11485", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits' Rebuke"] = new engine.RulesElement({
    name: "Spirits' Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_11462",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11462",
    categories: ["Spirits' Rebuke", "ID_FMP_POWER_11462"]
  });
  byID[te.id] = te;
  
  te = Power["Spot the Path"] = new engine.RulesElement({
    name: "Spot the Path",
    type: "Power",
    id: "ID_FMP_POWER_9331",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9331",
    categories: ["Spot the Path", "ID_FMP_POWER_9331", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spot Weakness"] = new engine.RulesElement({
    name: "Spot Weakness",
    type: "Power",
    id: "ID_FMP_POWER_11590",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11590",
    categories: ["Spot Weakness", "ID_FMP_POWER_11590", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Assault"] = new engine.RulesElement({
    name: "Spring Assault",
    type: "Power",
    id: "ID_FMP_POWER_10451",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10451",
    categories: ["Spring Assault", "ID_FMP_POWER_10451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Assault (Augment 0)"] = new engine.RulesElement({
    name: "Spring Assault (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPRING_ASSAULT_(AUGMENT_0)",
    categories: ["Spring Assault (Augment 0)", "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Assault (Augment 2)"] = new engine.RulesElement({
    name: "Spring Assault (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPRING_ASSAULT_(AUGMENT_2)",
    categories: ["Spring Assault (Augment 2)", "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Assault (Augment 6)"] = new engine.RulesElement({
    name: "Spring Assault (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SPRING_ASSAULT_(AUGMENT_6)",
    categories: ["Spring Assault (Augment 6)", "ID_INTERNAL_POWER_SPRING_ASSAULT_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Up"] = new engine.RulesElement({
    name: "Spring Up",
    type: "Power",
    id: "ID_FMP_POWER_11232",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11232",
    categories: ["Spring Up", "ID_FMP_POWER_11232", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sprite Dance"] = new engine.RulesElement({
    name: "Sprite Dance",
    type: "Power",
    id: "ID_FMP_POWER_9532",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9532",
    categories: ["Sprite Dance", "ID_FMP_POWER_9532", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Squall Spirit"] = new engine.RulesElement({
    name: "Squall Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9522",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9522",
    categories: ["Squall Spirit", "ID_FMP_POWER_9522", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Stag's Grace"] = new engine.RulesElement({
    name: "Stag's Grace",
    type: "Power",
    id: "ID_FMP_POWER_9511",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9511",
    categories: ["Stag's Grace", "ID_FMP_POWER_9511", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Stag's Leap"] = new engine.RulesElement({
    name: "Stag's Leap",
    type: "Power",
    id: "ID_FMP_POWER_2632",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2632",
    categories: ["Stag's Leap", "ID_FMP_POWER_2632", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Stall Tactics"] = new engine.RulesElement({
    name: "Stall Tactics",
    type: "Power",
    id: "ID_FMP_POWER_11539",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11539",
    categories: ["Stall Tactics", "ID_FMP_POWER_11539", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Stampede Shot"] = new engine.RulesElement({
    name: "Stampede Shot",
    type: "Power",
    id: "ID_FMP_POWER_11475",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11475",
    categories: ["Stampede Shot", "ID_FMP_POWER_11475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Stance of the Still Sword"] = new engine.RulesElement({
    name: "Stance of the Still Sword",
    type: "Power",
    id: "ID_FMP_POWER_11239",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11239",
    categories: ["Stance of the Still Sword", "ID_FMP_POWER_11239", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Steadfast Stanchion"] = new engine.RulesElement({
    name: "Steadfast Stanchion",
    type: "Power",
    id: "ID_FMP_POWER_8238",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8238",
    categories: ["Steadfast Stanchion", "ID_FMP_POWER_8238", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Unity Attack"] = new engine.RulesElement({
    name: "Steel Unity Attack",
    type: "Power",
    id: "ID_FMP_POWER_2624",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2624",
    categories: ["Steel Unity Attack", "ID_FMP_POWER_2624", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Unity Strike"] = new engine.RulesElement({
    name: "Steel Unity Strike",
    type: "Power",
    id: "ID_FMP_POWER_2623",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2623",
    categories: ["Steel Unity Strike", "ID_FMP_POWER_2623", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2624"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Steel Warrior Technique"] = new engine.RulesElement({
    name: "Steel Warrior Technique",
    type: "Power",
    id: "ID_FMP_POWER_11220",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11220",
    categories: ["Steel Warrior Technique", "ID_FMP_POWER_11220", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Step Between the Worlds"] = new engine.RulesElement({
    name: "Step Between the Worlds",
    type: "Power",
    id: "ID_FMP_POWER_11235",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11235",
    categories: ["Step Between the Worlds", "ID_FMP_POWER_11235", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11236"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Step Between the Worlds [Movement Technique]"] = new engine.RulesElement({
    name: "Step Between the Worlds [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11236",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11236",
    categories: ["Step Between the Worlds [Movement Technique]", "ID_FMP_POWER_11236", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Step of the Pursuer"] = new engine.RulesElement({
    name: "Step of the Pursuer",
    type: "Power",
    id: "ID_FMP_POWER_10445",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10445",
    categories: ["Step of the Pursuer", "ID_FMP_POWER_10445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Step of the Pursuer (Augment 0)"] = new engine.RulesElement({
    name: "Step of the Pursuer (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STEP_OF_THE_PURSUER_(AUGMENT_0)",
    categories: ["Step of the Pursuer (Augment 0)", "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Step of the Pursuer (Augment 1)"] = new engine.RulesElement({
    name: "Step of the Pursuer (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STEP_OF_THE_PURSUER_(AUGMENT_1)",
    categories: ["Step of the Pursuer (Augment 1)", "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Step of the Pursuer (Augment 4)"] = new engine.RulesElement({
    name: "Step of the Pursuer (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STEP_OF_THE_PURSUER_(AUGMENT_4)",
    categories: ["Step of the Pursuer (Augment 4)", "ID_INTERNAL_POWER_STEP_OF_THE_PURSUER_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Steps of Grasping Fire"] = new engine.RulesElement({
    name: "Steps of Grasping Fire",
    type: "Power",
    id: "ID_FMP_POWER_7477",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7477",
    categories: ["Steps of Grasping Fire", "ID_FMP_POWER_7477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7524"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Steps of Grasping Fire [Movement Technique]"] = new engine.RulesElement({
    name: "Steps of Grasping Fire [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7524",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7524",
    categories: ["Steps of Grasping Fire [Movement Technique]", "ID_FMP_POWER_7524", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Rebuke"] = new engine.RulesElement({
    name: "Stinging Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_10466",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10466",
    categories: ["Stinging Rebuke", "ID_FMP_POWER_10466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_542", "Steel Ego", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Rebuke (Augment 0)"] = new engine.RulesElement({
    name: "Stinging Rebuke (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STINGING_REBUKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STINGING_REBUKE_(AUGMENT_0)",
    categories: ["Stinging Rebuke (Augment 0)", "ID_INTERNAL_POWER_STINGING_REBUKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Rebuke (Augment 2)"] = new engine.RulesElement({
    name: "Stinging Rebuke (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STINGING_REBUKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STINGING_REBUKE_(AUGMENT_2)",
    categories: ["Stinging Rebuke (Augment 2)", "ID_INTERNAL_POWER_STINGING_REBUKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Stirring Speech"] = new engine.RulesElement({
    name: "Stirring Speech",
    type: "Power",
    id: "ID_FMP_POWER_11540",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11540",
    categories: ["Stirring Speech", "ID_FMP_POWER_11540", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Defense"] = new engine.RulesElement({
    name: "Stolen Defense",
    type: "Power",
    id: "ID_FMP_POWER_9345",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9345",
    categories: ["Stolen Defense", "ID_FMP_POWER_9345", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Fist Flurry of Blows"] = new engine.RulesElement({
    name: "Stone Fist Flurry of Blows",
    type: "Power",
    id: "ID_FMP_POWER_11207",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11207",
    categories: ["Stone Fist Flurry of Blows", "ID_FMP_POWER_11207"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Spirit Ward"] = new engine.RulesElement({
    name: "Stone Spirit Ward",
    type: "Power",
    id: "ID_FMP_POWER_11472",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11472",
    categories: ["Stone Spirit Ward", "ID_FMP_POWER_11472", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Squire"] = new engine.RulesElement({
    name: "Stone Squire",
    type: "Power",
    id: "ID_FMP_POWER_11171",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11171",
    categories: ["Stone Squire", "ID_FMP_POWER_11171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Squire (Augment 0)"] = new engine.RulesElement({
    name: "Stone Squire (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STONE_SQUIRE_(AUGMENT_0)",
    categories: ["Stone Squire (Augment 0)", "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Squire (Augment 1)"] = new engine.RulesElement({
    name: "Stone Squire (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STONE_SQUIRE_(AUGMENT_1)",
    categories: ["Stone Squire (Augment 1)", "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Squire (Augment 2)"] = new engine.RulesElement({
    name: "Stone Squire (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STONE_SQUIRE_(AUGMENT_2)",
    categories: ["Stone Squire (Augment 2)", "ID_INTERNAL_POWER_STONE_SQUIRE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Stonecunning"] = new engine.RulesElement({
    name: "Stonecunning",
    type: "Power",
    id: "ID_FMP_POWER_11545",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11545",
    categories: ["Stonecunning", "ID_FMP_POWER_11545", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Dance Attack"] = new engine.RulesElement({
    name: "Storm Dance Attack",
    type: "Power",
    id: "ID_FMP_POWER_10464",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10464",
    categories: ["Storm Dance Attack", "ID_FMP_POWER_10464", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_541", "Zephyr Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Dance Strike"] = new engine.RulesElement({
    name: "Storm Dance Strike",
    type: "Power",
    id: "ID_FMP_POWER_10463",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10463",
    categories: ["Storm Dance Strike", "ID_FMP_POWER_10463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_541", "Zephyr Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10464"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Storm of Five Spirits"] = new engine.RulesElement({
    name: "Storm of Five Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9550",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9550",
    categories: ["Storm of Five Spirits", "ID_FMP_POWER_9550", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_474", "Seven Fates Archer", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Spirit Shards"] = new engine.RulesElement({
    name: "Storm of Spirit Shards",
    type: "Power",
    id: "ID_FMP_POWER_9508",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9508",
    categories: ["Storm of Spirit Shards", "ID_FMP_POWER_9508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strategist's Epiphany"] = new engine.RulesElement({
    name: "Strategist's Epiphany",
    type: "Power",
    id: "ID_FMP_POWER_11553",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11553",
    categories: ["Strategist's Epiphany", "ID_FMP_POWER_11553", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Strength to Weakness"] = new engine.RulesElement({
    name: "Strength to Weakness",
    type: "Power",
    id: "ID_FMP_POWER_7467",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7467",
    categories: ["Strength to Weakness", "ID_FMP_POWER_7467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Stride-Breaking Shot"] = new engine.RulesElement({
    name: "Stride-Breaking Shot",
    type: "Power",
    id: "ID_FMP_POWER_9538",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9538",
    categories: ["Stride-Breaking Shot", "ID_FMP_POWER_9538", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Striding Barrage"] = new engine.RulesElement({
    name: "Striding Barrage",
    type: "Power",
    id: "ID_FMP_POWER_11519",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11519",
    categories: ["Striding Barrage", "ID_FMP_POWER_11519", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_608", "Swift Strider", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Strike of the Vulnerable Turtle"] = new engine.RulesElement({
    name: "Strike of the Vulnerable Turtle",
    type: "Power",
    id: "ID_FMP_POWER_11253",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11253",
    categories: ["Strike of the Vulnerable Turtle", "ID_FMP_POWER_11253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Strike the Avalanche"] = new engine.RulesElement({
    name: "Strike the Avalanche",
    type: "Power",
    id: "ID_FMP_POWER_7466",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7466",
    categories: ["Strike the Avalanche", "ID_FMP_POWER_7466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7521"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Strike the Avalanche [Movement Technique]"] = new engine.RulesElement({
    name: "Strike the Avalanche [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7521",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7521",
    categories: ["Strike the Avalanche [Movement Technique]", "ID_FMP_POWER_7521", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Fist"] = new engine.RulesElement({
    name: "Stunning Fist",
    type: "Power",
    id: "ID_FMP_POWER_11258",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11258",
    categories: ["Stunning Fist", "ID_FMP_POWER_11258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Stygian Strike"] = new engine.RulesElement({
    name: "Stygian Strike",
    type: "Power",
    id: "ID_FMP_POWER_11152",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11152",
    categories: ["Stygian Strike", "ID_FMP_POWER_11152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_592", "Stygian Adept", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Stygian Strike (Augment 0)"] = new engine.RulesElement({
    name: "Stygian Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STYGIAN_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STYGIAN_STRIKE_(AUGMENT_0)",
    categories: ["Stygian Strike (Augment 0)", "ID_INTERNAL_POWER_STYGIAN_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Stygian Strike (Augment 2)"] = new engine.RulesElement({
    name: "Stygian Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STYGIAN_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_STYGIAN_STRIKE_(AUGMENT_2)",
    categories: ["Stygian Strike (Augment 2)", "ID_INTERNAL_POWER_STYGIAN_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Subconscious Horror"] = new engine.RulesElement({
    name: "Subconscious Horror",
    type: "Power",
    id: "ID_FMP_POWER_11153",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11153",
    categories: ["Subconscious Horror", "ID_FMP_POWER_11153", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_592", "Stygian Adept", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Control"] = new engine.RulesElement({
    name: "Sudden Control",
    type: "Power",
    id: "ID_FMP_POWER_8257",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8257",
    categories: ["Sudden Control", "ID_FMP_POWER_8257", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Control (Augment 0)"] = new engine.RulesElement({
    name: "Sudden Control (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SUDDEN_CONTROL_(AUGMENT_0)",
    categories: ["Sudden Control (Augment 0)", "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Control (Augment 2)"] = new engine.RulesElement({
    name: "Sudden Control (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SUDDEN_CONTROL_(AUGMENT_2)",
    categories: ["Sudden Control (Augment 2)", "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Control (Augment 6)"] = new engine.RulesElement({
    name: "Sudden Control (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_SUDDEN_CONTROL_(AUGMENT_6)",
    categories: ["Sudden Control (Augment 6)", "ID_INTERNAL_POWER_SUDDEN_CONTROL_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Leap (Skill Power)"] = new engine.RulesElement({
    name: "Sudden Leap (Skill Power)",
    type: "Power",
    id: "ID_FMP_POWER_11534",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11534",
    categories: ["Sudden Leap (Skill Power)", "ID_FMP_POWER_11534", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Rush"] = new engine.RulesElement({
    name: "Sudden Rush",
    type: "Power",
    id: "ID_FMP_POWER_2647",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2647",
    categories: ["Sudden Rush", "ID_FMP_POWER_2647", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Summons to Doom"] = new engine.RulesElement({
    name: "Summons to Doom",
    type: "Power",
    id: "ID_FMP_POWER_11144",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11144",
    categories: ["Summons to Doom", "ID_FMP_POWER_11144", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sunder the Castle"] = new engine.RulesElement({
    name: "Sunder the Castle",
    type: "Power",
    id: "ID_FMP_POWER_11250",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11250",
    categories: ["Sunder the Castle", "ID_FMP_POWER_11250", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11251"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Sunder the Castle [Movement Technique]"] = new engine.RulesElement({
    name: "Sunder the Castle [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11251",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11251",
    categories: ["Sunder the Castle [Movement Technique]", "ID_FMP_POWER_11251", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Supreme Avalanche Combination"] = new engine.RulesElement({
    name: "Supreme Avalanche Combination",
    type: "Power",
    id: "ID_FMP_POWER_11221",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11221",
    categories: ["Supreme Avalanche Combination", "ID_FMP_POWER_11221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Supreme Flurry"] = new engine.RulesElement({
    name: "Supreme Flurry",
    type: "Power",
    id: "ID_FMP_POWER_11215",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11215",
    categories: ["Supreme Flurry", "ID_FMP_POWER_11215", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sure Sight"] = new engine.RulesElement({
    name: "Sure Sight",
    type: "Power",
    id: "ID_FMP_POWER_9530",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9530",
    categories: ["Sure Sight", "ID_FMP_POWER_9530", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Swarming Bats"] = new engine.RulesElement({
    name: "Swarming Bats",
    type: "Power",
    id: "ID_FMP_POWER_11470",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11470",
    categories: ["Swarming Bats", "ID_FMP_POWER_11470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swarming Spirits"] = new engine.RulesElement({
    name: "Swarming Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9526",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9526",
    categories: ["Swarming Spirits", "ID_FMP_POWER_9526", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Recovery"] = new engine.RulesElement({
    name: "Swift Recovery",
    type: "Power",
    id: "ID_FMP_POWER_9319",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9319",
    categories: ["Swift Recovery", "ID_FMP_POWER_9319", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Vengeance"] = new engine.RulesElement({
    name: "Swift Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_11520",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11520",
    categories: ["Swift Vengeance", "ID_FMP_POWER_11520", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_608", "Swift Strider", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sylarian Sign"] = new engine.RulesElement({
    name: "Sylarian Sign",
    type: "Power",
    id: "ID_FMP_POWER_11441",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11441",
    categories: ["Sylarian Sign", "ID_FMP_POWER_11441", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of Cowardice"] = new engine.RulesElement({
    name: "Symbol of Cowardice",
    type: "Power",
    id: "ID_FMP_POWER_11397",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11397",
    categories: ["Symbol of Cowardice", "ID_FMP_POWER_11397", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of Defiance"] = new engine.RulesElement({
    name: "Symbol of Defiance",
    type: "Power",
    id: "ID_FMP_POWER_11433",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11433",
    categories: ["Symbol of Defiance", "ID_FMP_POWER_11433", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of Wrath Reversed"] = new engine.RulesElement({
    name: "Symbol of Wrath Reversed",
    type: "Power",
    id: "ID_FMP_POWER_11383",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11383",
    categories: ["Symbol of Wrath Reversed", "ID_FMP_POWER_11383", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Supremacy"] = new engine.RulesElement({
    name: "Tactical Supremacy",
    type: "Power",
    id: "ID_FMP_POWER_10453",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10453",
    categories: ["Tactical Supremacy", "ID_FMP_POWER_10453", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Tactician's Measure"] = new engine.RulesElement({
    name: "Tactician's Measure",
    type: "Power",
    id: "ID_FMP_POWER_9322",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9322",
    categories: ["Tactician's Measure", "ID_FMP_POWER_9322", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Tap the Life Well"] = new engine.RulesElement({
    name: "Tap the Life Well",
    type: "Power",
    id: "ID_FMP_POWER_7486",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7486",
    categories: ["Tap the Life Well", "ID_FMP_POWER_7486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7529"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Tap the Life Well [Movement Technique]"] = new engine.RulesElement({
    name: "Tap the Life Well [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7529",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7529",
    categories: ["Tap the Life Well [Movement Technique]", "ID_FMP_POWER_7529", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tear the World"] = new engine.RulesElement({
    name: "Tear the World",
    type: "Power",
    id: "ID_FMP_POWER_11345",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11345",
    categories: ["Tear the World", "ID_FMP_POWER_11345", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Anchor"] = new engine.RulesElement({
    name: "Telekinetic Anchor",
    type: "Power",
    id: "ID_FMP_POWER_11272",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11272",
    categories: ["Telekinetic Anchor", "ID_FMP_POWER_11272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Bombard"] = new engine.RulesElement({
    name: "Telekinetic Bombard",
    type: "Power",
    id: "ID_FMP_POWER_11341",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11341",
    categories: ["Telekinetic Bombard", "ID_FMP_POWER_11341", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Boost"] = new engine.RulesElement({
    name: "Telekinetic Boost",
    type: "Power",
    id: "ID_FMP_POWER_11330",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11330",
    categories: ["Telekinetic Boost", "ID_FMP_POWER_11330", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Lift"] = new engine.RulesElement({
    name: "Telekinetic Lift",
    type: "Power",
    id: "ID_FMP_POWER_11273",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11273",
    categories: ["Telekinetic Lift", "ID_FMP_POWER_11273", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Maul"] = new engine.RulesElement({
    name: "Telekinetic Maul",
    type: "Power",
    id: "ID_FMP_POWER_11316",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11316",
    categories: ["Telekinetic Maul", "ID_FMP_POWER_11316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Screen"] = new engine.RulesElement({
    name: "Telekinetic Screen",
    type: "Power",
    id: "ID_FMP_POWER_11318",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11318",
    categories: ["Telekinetic Screen", "ID_FMP_POWER_11318", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Telepathic Challenge"] = new engine.RulesElement({
    name: "Telepathic Challenge",
    type: "Power",
    id: "ID_FMP_POWER_10443",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10443",
    categories: ["Telepathic Challenge", "ID_FMP_POWER_10443", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Acceleration"] = new engine.RulesElement({
    name: "Temporal Acceleration",
    type: "Power",
    id: "ID_FMP_POWER_11135",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11135",
    categories: ["Temporal Acceleration", "ID_FMP_POWER_11135", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Strike"] = new engine.RulesElement({
    name: "Temporal Strike",
    type: "Power",
    id: "ID_FMP_POWER_10300",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10300",
    categories: ["Temporal Strike", "ID_FMP_POWER_10300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Strike (Augment 0)"] = new engine.RulesElement({
    name: "Temporal Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TEMPORAL_STRIKE_(AUGMENT_0)",
    categories: ["Temporal Strike (Augment 0)", "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Strike (Augment 1)"] = new engine.RulesElement({
    name: "Temporal Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TEMPORAL_STRIKE_(AUGMENT_1)",
    categories: ["Temporal Strike (Augment 1)", "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Strike (Augment 4)"] = new engine.RulesElement({
    name: "Temporal Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TEMPORAL_STRIKE_(AUGMENT_4)",
    categories: ["Temporal Strike (Augment 4)", "ID_INTERNAL_POWER_TEMPORAL_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Deluge"] = new engine.RulesElement({
    name: "Terrifying Deluge",
    type: "Power",
    id: "ID_FMP_POWER_11133",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11133",
    categories: ["Terrifying Deluge", "ID_FMP_POWER_11133", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Deluge (Augment 0)"] = new engine.RulesElement({
    name: "Terrifying Deluge (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TERRIFYING_DELUGE_(AUGMENT_0)",
    categories: ["Terrifying Deluge (Augment 0)", "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Deluge (Augment 1)"] = new engine.RulesElement({
    name: "Terrifying Deluge (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TERRIFYING_DELUGE_(AUGMENT_1)",
    categories: ["Terrifying Deluge (Augment 1)", "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Deluge (Augment 4)"] = new engine.RulesElement({
    name: "Terrifying Deluge (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TERRIFYING_DELUGE_(AUGMENT_4)",
    categories: ["Terrifying Deluge (Augment 4)", "ID_INTERNAL_POWER_TERRIFYING_DELUGE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Theologian's Shield"] = new engine.RulesElement({
    name: "Theologian's Shield",
    type: "Power",
    id: "ID_FMP_POWER_9336",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9336",
    categories: ["Theologian's Shield", "ID_FMP_POWER_9336", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Third Wind"] = new engine.RulesElement({
    name: "Third Wind",
    type: "Power",
    id: "ID_FMP_POWER_11546",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11546",
    categories: ["Third Wind", "ID_FMP_POWER_11546", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Cloud Shot"] = new engine.RulesElement({
    name: "Thorn Cloud Shot",
    type: "Power",
    id: "ID_FMP_POWER_9504",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9504",
    categories: ["Thorn Cloud Shot", "ID_FMP_POWER_9504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Shield"] = new engine.RulesElement({
    name: "Thought Shield",
    type: "Power",
    id: "ID_FMP_POWER_11103",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11103",
    categories: ["Thought Shield", "ID_FMP_POWER_11103", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Thrall"] = new engine.RulesElement({
    name: "Thrall",
    type: "Power",
    id: "ID_FMP_POWER_8259",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8259",
    categories: ["Thrall", "ID_FMP_POWER_8259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Three Winds Kick"] = new engine.RulesElement({
    name: "Three Winds Kick",
    type: "Power",
    id: "ID_FMP_POWER_7478",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7478",
    categories: ["Three Winds Kick", "ID_FMP_POWER_7478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7525"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Three Winds Kick [Movement Technique]"] = new engine.RulesElement({
    name: "Three Winds Kick [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7525",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7525",
    categories: ["Three Winds Kick [Movement Technique]", "ID_FMP_POWER_7525", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Through the Walls"] = new engine.RulesElement({
    name: "Through the Walls",
    type: "Power",
    id: "ID_FMP_POWER_11335",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11335",
    categories: ["Through the Walls", "ID_FMP_POWER_11335", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Spirit"] = new engine.RulesElement({
    name: "Thunder Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9519",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9519",
    categories: ["Thunder Spirit", "ID_FMP_POWER_9519", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Tether"] = new engine.RulesElement({
    name: "Thunder Tether",
    type: "Power",
    id: "ID_FMP_POWER_11326",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11326",
    categories: ["Thunder Tether", "ID_FMP_POWER_11326", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Tether (Augment 0)"] = new engine.RulesElement({
    name: "Thunder Tether (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_THUNDER_TETHER_(AUGMENT_0)",
    categories: ["Thunder Tether (Augment 0)", "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Tether (Augment 1)"] = new engine.RulesElement({
    name: "Thunder Tether (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_THUNDER_TETHER_(AUGMENT_1)",
    categories: ["Thunder Tether (Augment 1)", "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Tether (Augment 4)"] = new engine.RulesElement({
    name: "Thunder Tether (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_THUNDER_TETHER_(AUGMENT_4)",
    categories: ["Thunder Tether (Augment 4)", "ID_INTERNAL_POWER_THUNDER_TETHER_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Shot"] = new engine.RulesElement({
    name: "Thundering Shot",
    type: "Power",
    id: "ID_FMP_POWER_11509",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11509",
    categories: ["Thundering Shot", "ID_FMP_POWER_11509", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Tide of Victory"] = new engine.RulesElement({
    name: "Tide of Victory",
    type: "Power",
    id: "ID_FMP_POWER_11437",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11437",
    categories: ["Tide of Victory", "ID_FMP_POWER_11437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Time Out"] = new engine.RulesElement({
    name: "Time Out",
    type: "Power",
    id: "ID_FMP_POWER_9320",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9320",
    categories: ["Time Out", "ID_FMP_POWER_9320", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Time Strider"] = new engine.RulesElement({
    name: "Time Strider",
    type: "Power",
    id: "ID_FMP_POWER_11352",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11352",
    categories: ["Time Strider", "ID_FMP_POWER_11352", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_601", "Time Bender", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Titan's Step"] = new engine.RulesElement({
    name: "Titan's Step",
    type: "Power",
    id: "ID_FMP_POWER_11226",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11226",
    categories: ["Titan's Step", "ID_FMP_POWER_11226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11227"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Titan's Step [Movement Technique]"] = new engine.RulesElement({
    name: "Titan's Step [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11227",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11227",
    categories: ["Titan's Step [Movement Technique]", "ID_FMP_POWER_11227", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tormented Spirit"] = new engine.RulesElement({
    name: "Tormented Spirit",
    type: "Power",
    id: "ID_FMP_POWER_7492",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7492",
    categories: ["Tormented Spirit", "ID_FMP_POWER_7492", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_364", "Ghostwalker", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7531"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Tormented Spirit [Movement Technique]"] = new engine.RulesElement({
    name: "Tormented Spirit [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7531",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7531",
    categories: ["Tormented Spirit [Movement Technique]", "ID_FMP_POWER_7531", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_364", "Ghostwalker", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tower of Iron Will"] = new engine.RulesElement({
    name: "Tower of Iron Will",
    type: "Power",
    id: "ID_FMP_POWER_11122",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11122",
    categories: ["Tower of Iron Will", "ID_FMP_POWER_11122", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Trace Chance"] = new engine.RulesElement({
    name: "Trace Chance",
    type: "Power",
    id: "ID_FMP_POWER_8274",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8274",
    categories: ["Trace Chance", "ID_FMP_POWER_8274", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_450", "Rrathmal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Trampling Shot"] = new engine.RulesElement({
    name: "Trampling Shot",
    type: "Power",
    id: "ID_FMP_POWER_11514",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11514",
    categories: ["Trampling Shot", "ID_FMP_POWER_11514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Transport Self"] = new engine.RulesElement({
    name: "Transport Self",
    type: "Power",
    id: "ID_FMP_POWER_11274",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11274",
    categories: ["Transport Self", "ID_FMP_POWER_11274", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Trap Sense"] = new engine.RulesElement({
    name: "Trap Sense",
    type: "Power",
    id: "ID_FMP_POWER_9313",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9313",
    categories: ["Trap Sense", "ID_FMP_POWER_9313", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Trapfinding"] = new engine.RulesElement({
    name: "Trapfinding",
    type: "Power",
    id: "ID_FMP_POWER_11586",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11586",
    categories: ["Trapfinding", "ID_FMP_POWER_11586", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tremor Shot"] = new engine.RulesElement({
    name: "Tremor Shot",
    type: "Power",
    id: "ID_FMP_POWER_11482",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11482",
    categories: ["Tremor Shot", "ID_FMP_POWER_11482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Triple Raptor Shot"] = new engine.RulesElement({
    name: "Triple Raptor Shot",
    type: "Power",
    id: "ID_FMP_POWER_11493",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11493",
    categories: ["Triple Raptor Shot", "ID_FMP_POWER_11493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["True Dream Form"] = new engine.RulesElement({
    name: "True Dream Form",
    type: "Power",
    id: "ID_FMP_POWER_11348",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11348",
    categories: ["True Dream Form", "ID_FMP_POWER_11348", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_600", "Dreamwalker", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Try the Stick"] = new engine.RulesElement({
    name: "Try the Stick",
    type: "Power",
    id: "ID_FMP_POWER_11583",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11583",
    categories: ["Try the Stick", "ID_FMP_POWER_11583", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tumbling Boulder"] = new engine.RulesElement({
    name: "Tumbling Boulder",
    type: "Power",
    id: "ID_FMP_POWER_11263",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11263",
    categories: ["Tumbling Boulder", "ID_FMP_POWER_11263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_596", "Mountain Devotee", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11265"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Tumbling Boulder [Movement Technique]"] = new engine.RulesElement({
    name: "Tumbling Boulder [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11265",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11265",
    categories: ["Tumbling Boulder [Movement Technique]", "ID_FMP_POWER_11265", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_596", "Mountain Devotee", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tumbling Dodge"] = new engine.RulesElement({
    name: "Tumbling Dodge",
    type: "Power",
    id: "ID_FMP_POWER_11529",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11529",
    categories: ["Tumbling Dodge", "ID_FMP_POWER_11529", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight Touch"] = new engine.RulesElement({
    name: "Twilight Touch",
    type: "Power",
    id: "ID_FMP_POWER_7468",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7468",
    categories: ["Twilight Touch", "ID_FMP_POWER_7468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Thunders"] = new engine.RulesElement({
    name: "Twin Thunders",
    type: "Power",
    id: "ID_FMP_POWER_7460",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7460",
    categories: ["Twin Thunders", "ID_FMP_POWER_7460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7519"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Twin Thunders [Movement Technique]"] = new engine.RulesElement({
    name: "Twin Thunders [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_7519",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7519",
    categories: ["Twin Thunders [Movement Technique]", "ID_FMP_POWER_7519", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Twisted Eye"] = new engine.RulesElement({
    name: "Twisted Eye",
    type: "Power",
    id: "ID_FMP_POWER_2621",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2621",
    categories: ["Twisted Eye", "ID_FMP_POWER_2621", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Twisted Eye (Augment 0)"] = new engine.RulesElement({
    name: "Twisted Eye (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TWISTED_EYE_(AUGMENT_0)",
    categories: ["Twisted Eye (Augment 0)", "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Twisted Eye (Augment 1)"] = new engine.RulesElement({
    name: "Twisted Eye (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TWISTED_EYE_(AUGMENT_1)",
    categories: ["Twisted Eye (Augment 1)", "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Twisted Eye (Augment 2)"] = new engine.RulesElement({
    name: "Twisted Eye (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_TWISTED_EYE_(AUGMENT_2)",
    categories: ["Twisted Eye (Augment 2)", "ID_INTERNAL_POWER_TWISTED_EYE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Awareness"] = new engine.RulesElement({
    name: "Uncanny Awareness",
    type: "Power",
    id: "ID_FMP_POWER_11131",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11131",
    categories: ["Uncanny Awareness", "ID_FMP_POWER_11131", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Instincts"] = new engine.RulesElement({
    name: "Uncanny Instincts",
    type: "Power",
    id: "ID_FMP_POWER_9334",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9334",
    categories: ["Uncanny Instincts", "ID_FMP_POWER_9334", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Unchecked Aggression"] = new engine.RulesElement({
    name: "Unchecked Aggression",
    type: "Power",
    id: "ID_FMP_POWER_11128",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11128",
    categories: ["Unchecked Aggression", "ID_FMP_POWER_11128", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Unconquered Redoubt"] = new engine.RulesElement({
    name: "Unconquered Redoubt",
    type: "Power",
    id: "ID_FMP_POWER_11403",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11403",
    categories: ["Unconquered Redoubt", "ID_FMP_POWER_11403", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Undeniable Weakness"] = new engine.RulesElement({
    name: "Undeniable Weakness",
    type: "Power",
    id: "ID_FMP_POWER_11148",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11148",
    categories: ["Undeniable Weakness", "ID_FMP_POWER_11148", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Undimmed Sun"] = new engine.RulesElement({
    name: "Undimmed Sun",
    type: "Power",
    id: "ID_FMP_POWER_7490",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7490",
    categories: ["Undimmed Sun", "ID_FMP_POWER_7490", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_363", "Radiant Fist", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unhinging Strike"] = new engine.RulesElement({
    name: "Unhinging Strike",
    type: "Power",
    id: "ID_FMP_POWER_11106",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11106",
    categories: ["Unhinging Strike", "ID_FMP_POWER_11106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Unhinging Strike (Augment 0)"] = new engine.RulesElement({
    name: "Unhinging Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNHINGING_STRIKE_(AUGMENT_0)",
    categories: ["Unhinging Strike (Augment 0)", "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unhinging Strike (Augment 1)"] = new engine.RulesElement({
    name: "Unhinging Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNHINGING_STRIKE_(AUGMENT_1)",
    categories: ["Unhinging Strike (Augment 1)", "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Unhinging Strike (Augment 2)"] = new engine.RulesElement({
    name: "Unhinging Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNHINGING_STRIKE_(AUGMENT_2)",
    categories: ["Unhinging Strike (Augment 2)", "ID_INTERNAL_POWER_UNHINGING_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Disruption"] = new engine.RulesElement({
    name: "Unnerving Disruption",
    type: "Power",
    id: "ID_FMP_POWER_11146",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11146",
    categories: ["Unnerving Disruption", "ID_FMP_POWER_11146", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Disruption (Augment 0)"] = new engine.RulesElement({
    name: "Unnerving Disruption (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_DISRUPTION_(AUGMENT_0)",
    categories: ["Unnerving Disruption (Augment 0)", "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Disruption (Augment 2)"] = new engine.RulesElement({
    name: "Unnerving Disruption (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_DISRUPTION_(AUGMENT_2)",
    categories: ["Unnerving Disruption (Augment 2)", "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Disruption (Augment 6)"] = new engine.RulesElement({
    name: "Unnerving Disruption (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_DISRUPTION_(AUGMENT_6)",
    categories: ["Unnerving Disruption (Augment 6)", "ID_INTERNAL_POWER_UNNERVING_DISRUPTION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Shove"] = new engine.RulesElement({
    name: "Unnerving Shove",
    type: "Power",
    id: "ID_FMP_POWER_11070",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11070",
    categories: ["Unnerving Shove", "ID_FMP_POWER_11070", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Shove (Augment 0)"] = new engine.RulesElement({
    name: "Unnerving Shove (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_SHOVE_(AUGMENT_0)",
    categories: ["Unnerving Shove (Augment 0)", "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Shove (Augment 1)"] = new engine.RulesElement({
    name: "Unnerving Shove (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_SHOVE_(AUGMENT_1)",
    categories: ["Unnerving Shove (Augment 1)", "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Shove (Augment 2)"] = new engine.RulesElement({
    name: "Unnerving Shove (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_UNNERVING_SHOVE_(AUGMENT_2)",
    categories: ["Unnerving Shove (Augment 2)", "ID_INTERNAL_POWER_UNNERVING_SHOVE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Uttercold"] = new engine.RulesElement({
    name: "Uttercold",
    type: "Power",
    id: "ID_FMP_POWER_9545",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9545",
    categories: ["Uttercold", "ID_FMP_POWER_9545", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Mind's Eye"] = new engine.RulesElement({
    name: "Veil of the Mind's Eye",
    type: "Power",
    id: "ID_FMP_POWER_11193",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11193",
    categories: ["Veil of the Mind's Eye", "ID_FMP_POWER_11193", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Mind's Eye (Augment 0)"] = new engine.RulesElement({
    name: "Veil of the Mind's Eye (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_0)",
    categories: ["Veil of the Mind's Eye (Augment 0)", "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Mind's Eye (Augment 2)"] = new engine.RulesElement({
    name: "Veil of the Mind's Eye (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_2)",
    categories: ["Veil of the Mind's Eye (Augment 2)", "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Mind's Eye (Augment 6)"] = new engine.RulesElement({
    name: "Veil of the Mind's Eye (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_6)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_6)",
    categories: ["Veil of the Mind's Eye (Augment 6)", "ID_INTERNAL_POWER_VEIL_OF_THE_MIND'S_EYE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeance Shroud"] = new engine.RulesElement({
    name: "Vengeance Shroud",
    type: "Power",
    id: "ID_FMP_POWER_8275",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=8275",
    categories: ["Vengeance Shroud", "ID_FMP_POWER_8275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_450", "Rrathmal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeance's End"] = new engine.RulesElement({
    name: "Vengeance's End",
    type: "Power",
    id: "ID_FMP_POWER_11450",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11450",
    categories: ["Vengeance's End", "ID_FMP_POWER_11450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_603", "Hammer of Vengeance (PH3)", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Ghost"] = new engine.RulesElement({
    name: "Vengeful Ghost",
    type: "Power",
    id: "ID_FMP_POWER_7494",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7494",
    categories: ["Vengeful Ghost", "ID_FMP_POWER_7494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_364", "Ghostwalker", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Mind"] = new engine.RulesElement({
    name: "Vengeful Mind",
    type: "Power",
    id: "ID_FMP_POWER_10449",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10449",
    categories: ["Vengeful Mind", "ID_FMP_POWER_10449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Urging"] = new engine.RulesElement({
    name: "Victorious Urging",
    type: "Power",
    id: "ID_FMP_POWER_11125",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11125",
    categories: ["Victorious Urging", "ID_FMP_POWER_11125", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Urging (Augment 0)"] = new engine.RulesElement({
    name: "Victorious Urging (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VICTORIOUS_URGING_(AUGMENT_0)",
    categories: ["Victorious Urging (Augment 0)", "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Urging (Augment 1)"] = new engine.RulesElement({
    name: "Victorious Urging (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VICTORIOUS_URGING_(AUGMENT_1)",
    categories: ["Victorious Urging (Augment 1)", "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Urging (Augment 4)"] = new engine.RulesElement({
    name: "Victorious Urging (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VICTORIOUS_URGING_(AUGMENT_4)",
    categories: ["Victorious Urging (Augment 4)", "ID_INTERNAL_POWER_VICTORIOUS_URGING_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Vigorous Offensive"] = new engine.RulesElement({
    name: "Vigorous Offensive",
    type: "Power",
    id: "ID_FMP_POWER_10296",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10296",
    categories: ["Vigorous Offensive", "ID_FMP_POWER_10296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Spark"] = new engine.RulesElement({
    name: "Violent Spark",
    type: "Power",
    id: "ID_FMP_POWER_10310",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10310",
    categories: ["Violent Spark", "ID_FMP_POWER_10310", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Terror"] = new engine.RulesElement({
    name: "Visions of Terror",
    type: "Power",
    id: "ID_FMP_POWER_2627",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2627",
    categories: ["Visions of Terror", "ID_FMP_POWER_2627", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Terror (Augment 0)"] = new engine.RulesElement({
    name: "Visions of Terror (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VISIONS_OF_TERROR_(AUGMENT_0)",
    categories: ["Visions of Terror (Augment 0)", "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Terror (Augment 1)"] = new engine.RulesElement({
    name: "Visions of Terror (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VISIONS_OF_TERROR_(AUGMENT_1)",
    categories: ["Visions of Terror (Augment 1)", "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Terror (Augment 2)"] = new engine.RulesElement({
    name: "Visions of Terror (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VISIONS_OF_TERROR_(AUGMENT_2)",
    categories: ["Visions of Terror (Augment 2)", "ID_INTERNAL_POWER_VISIONS_OF_TERROR_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Vitality Theft"] = new engine.RulesElement({
    name: "Vitality Theft",
    type: "Power",
    id: "ID_FMP_POWER_11195",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11195",
    categories: ["Vitality Theft", "ID_FMP_POWER_11195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Vitality Transfer"] = new engine.RulesElement({
    name: "Vitality Transfer",
    type: "Power",
    id: "ID_FMP_POWER_11136",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11136",
    categories: ["Vitality Transfer", "ID_FMP_POWER_11136", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Voyage of the Ancients"] = new engine.RulesElement({
    name: "Voyage of the Ancients",
    type: "Power",
    id: "ID_FMP_POWER_7441",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7441",
    categories: ["Voyage of the Ancients", "ID_FMP_POWER_7441", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Walk It Off"] = new engine.RulesElement({
    name: "Walk It Off",
    type: "Power",
    id: "ID_FMP_POWER_11547",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11547",
    categories: ["Walk It Off", "ID_FMP_POWER_11547", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wandering Comet Strike"] = new engine.RulesElement({
    name: "Wandering Comet Strike",
    type: "Power",
    id: "ID_FMP_POWER_7483",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7483",
    categories: ["Wandering Comet Strike", "ID_FMP_POWER_7483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Light Attack"] = new engine.RulesElement({
    name: "Warding Light Attack",
    type: "Power",
    id: "ID_FMP_POWER_11429",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11429",
    categories: ["Warding Light Attack", "ID_FMP_POWER_11429", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Shield"] = new engine.RulesElement({
    name: "Warding Shield",
    type: "Power",
    id: "ID_FMP_POWER_11337",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11337",
    categories: ["Warding Shield", "ID_FMP_POWER_11337", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Warning of Peril"] = new engine.RulesElement({
    name: "Warning of Peril",
    type: "Power",
    id: "ID_FMP_POWER_11587",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11587",
    categories: ["Warning of Peril", "ID_FMP_POWER_11587", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wasp Sting Shot"] = new engine.RulesElement({
    name: "Wasp Sting Shot",
    type: "Power",
    id: "ID_FMP_POWER_9520",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9520",
    categories: ["Wasp Sting Shot", "ID_FMP_POWER_9520", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Watchful Hydra Stance"] = new engine.RulesElement({
    name: "Watchful Hydra Stance",
    type: "Power",
    id: "ID_FMP_POWER_7484",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7484",
    categories: ["Watchful Hydra Stance", "ID_FMP_POWER_7484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Sleep"] = new engine.RulesElement({
    name: "Wave of Sleep",
    type: "Power",
    id: "ID_FMP_POWER_9528",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9528",
    categories: ["Wave of Sleep", "ID_FMP_POWER_9528", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_17", "Sleep", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Way of the Autumn Wind"] = new engine.RulesElement({
    name: "Way of the Autumn Wind",
    type: "Power",
    id: "ID_FMP_POWER_7473",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7473",
    categories: ["Way of the Autumn Wind", "ID_FMP_POWER_7473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Web of Betrayal"] = new engine.RulesElement({
    name: "Web of Betrayal",
    type: "Power",
    id: "ID_FMP_POWER_11179",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11179",
    categories: ["Web of Betrayal", "ID_FMP_POWER_11179", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Web of Betrayal (Augment 0)"] = new engine.RulesElement({
    name: "Web of Betrayal (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WEB_OF_BETRAYAL_(AUGMENT_0)",
    categories: ["Web of Betrayal (Augment 0)", "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Web of Betrayal (Augment 1)"] = new engine.RulesElement({
    name: "Web of Betrayal (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WEB_OF_BETRAYAL_(AUGMENT_1)",
    categories: ["Web of Betrayal (Augment 1)", "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Web of Betrayal (Augment 4)"] = new engine.RulesElement({
    name: "Web of Betrayal (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_4)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WEB_OF_BETRAYAL_(AUGMENT_4)",
    categories: ["Web of Betrayal (Augment 4)", "ID_INTERNAL_POWER_WEB_OF_BETRAYAL_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Wellspring of Vigor"] = new engine.RulesElement({
    name: "Wellspring of Vigor",
    type: "Power",
    id: "ID_FMP_POWER_11068",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11068",
    categories: ["Wellspring of Vigor", "ID_FMP_POWER_11068", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Whelm"] = new engine.RulesElement({
    name: "Whelm",
    type: "Power",
    id: "ID_FMP_POWER_11174",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11174",
    categories: ["Whelm", "ID_FMP_POWER_11174", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Defense"] = new engine.RulesElement({
    name: "Whirling Defense",
    type: "Power",
    id: "ID_FMP_POWER_2622",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2622",
    categories: ["Whirling Defense", "ID_FMP_POWER_2622", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Defense (Augment 0)"] = new engine.RulesElement({
    name: "Whirling Defense (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_0)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WHIRLING_DEFENSE_(AUGMENT_0)",
    categories: ["Whirling Defense (Augment 0)", "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Defense (Augment 1)"] = new engine.RulesElement({
    name: "Whirling Defense (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_1)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WHIRLING_DEFENSE_(AUGMENT_1)",
    categories: ["Whirling Defense (Augment 1)", "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Defense (Augment 2)"] = new engine.RulesElement({
    name: "Whirling Defense (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_2)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_WHIRLING_DEFENSE_(AUGMENT_2)",
    categories: ["Whirling Defense (Augment 2)", "ID_INTERNAL_POWER_WHIRLING_DEFENSE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Mantis Step"] = new engine.RulesElement({
    name: "Whirling Mantis Step",
    type: "Power",
    id: "ID_FMP_POWER_7456",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7456",
    categories: ["Whirling Mantis Step", "ID_FMP_POWER_7456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Storm Word"] = new engine.RulesElement({
    name: "Whirling Storm Word",
    type: "Power",
    id: "ID_FMP_POWER_11409",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11409",
    categories: ["Whirling Storm Word", "ID_FMP_POWER_11409", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind Kick"] = new engine.RulesElement({
    name: "Whirlwind Kick",
    type: "Power",
    id: "ID_FMP_POWER_11242",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11242",
    categories: ["Whirlwind Kick", "ID_FMP_POWER_11242", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11243"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind Kick [Movement Technique]"] = new engine.RulesElement({
    name: "Whirlwind Kick [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_11243",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11243",
    categories: ["Whirlwind Kick [Movement Technique]", "ID_FMP_POWER_11243", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Whisper of the Cunning Step"] = new engine.RulesElement({
    name: "Whisper of the Cunning Step",
    type: "Power",
    id: "ID_FMP_POWER_11423",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11423",
    categories: ["Whisper of the Cunning Step", "ID_FMP_POWER_11423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Widows' Net"] = new engine.RulesElement({
    name: "Widows' Net",
    type: "Power",
    id: "ID_FMP_POWER_11512",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11512",
    categories: ["Widows' Net", "ID_FMP_POWER_11512", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wildfire Shot"] = new engine.RulesElement({
    name: "Wildfire Shot",
    type: "Power",
    id: "ID_FMP_POWER_11478",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11478",
    categories: ["Wildfire Shot", "ID_FMP_POWER_11478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Decay"] = new engine.RulesElement({
    name: "Wind of Decay",
    type: "Power",
    id: "ID_FMP_POWER_9540",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9540",
    categories: ["Wind of Decay", "ID_FMP_POWER_9540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Wind Spirits"] = new engine.RulesElement({
    name: "Wind Spirits",
    type: "Power",
    id: "ID_FMP_POWER_11490",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11490",
    categories: ["Wind Spirits", "ID_FMP_POWER_11490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Wind Walker"] = new engine.RulesElement({
    name: "Wind Walker",
    type: "Power",
    id: "ID_FMP_POWER_11247",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11247",
    categories: ["Wind Walker", "ID_FMP_POWER_11247", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Windstorm Strike"] = new engine.RulesElement({
    name: "Windstorm Strike",
    type: "Power",
    id: "ID_FMP_POWER_11483",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11483",
    categories: ["Windstorm Strike", "ID_FMP_POWER_11483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Winged Weapon"] = new engine.RulesElement({
    name: "Winged Weapon",
    type: "Power",
    id: "ID_FMP_POWER_2633",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2633",
    categories: ["Winged Weapon", "ID_FMP_POWER_2633", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Spirit"] = new engine.RulesElement({
    name: "Winter Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9513",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9513",
    categories: ["Winter Spirit", "ID_FMP_POWER_9513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Word of Alliance"] = new engine.RulesElement({
    name: "Word of Alliance",
    type: "Power",
    id: "ID_FMP_POWER_11384",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11384",
    categories: ["Word of Alliance", "ID_FMP_POWER_11384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Astral Defiance"] = new engine.RulesElement({
    name: "Word of Astral Defiance",
    type: "Power",
    id: "ID_FMP_POWER_11410",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11410",
    categories: ["Word of Astral Defiance", "ID_FMP_POWER_11410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Befuddlement"] = new engine.RulesElement({
    name: "Word of Befuddlement",
    type: "Power",
    id: "ID_FMP_POWER_11398",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11398",
    categories: ["Word of Befuddlement", "ID_FMP_POWER_11398", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Binding"] = new engine.RulesElement({
    name: "Word of Binding",
    type: "Power",
    id: "ID_FMP_POWER_11354",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11354",
    categories: ["Word of Binding", "ID_FMP_POWER_11354", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Diminishment"] = new engine.RulesElement({
    name: "Word of Diminishment",
    type: "Power",
    id: "ID_FMP_POWER_11355",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11355",
    categories: ["Word of Diminishment", "ID_FMP_POWER_11355", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Divine Battle"] = new engine.RulesElement({
    name: "Word of Divine Battle",
    type: "Power",
    id: "ID_FMP_POWER_11443",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11443",
    categories: ["Word of Divine Battle", "ID_FMP_POWER_11443", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Exchange"] = new engine.RulesElement({
    name: "Word of Exchange",
    type: "Power",
    id: "ID_FMP_POWER_11356",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11356",
    categories: ["Word of Exchange", "ID_FMP_POWER_11356", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Healing Assault"] = new engine.RulesElement({
    name: "Word of Healing Assault",
    type: "Power",
    id: "ID_FMP_POWER_11424",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11424",
    categories: ["Word of Healing Assault", "ID_FMP_POWER_11424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_65", "Runic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Lingering Thunder"] = new engine.RulesElement({
    name: "Word of Lingering Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11411",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11411",
    categories: ["Word of Lingering Thunder", "ID_FMP_POWER_11411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Shielding"] = new engine.RulesElement({
    name: "Word of Shielding",
    type: "Power",
    id: "ID_FMP_POWER_11368",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11368",
    categories: ["Word of Shielding", "ID_FMP_POWER_11368", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Word of the Blinding Shield"] = new engine.RulesElement({
    name: "Word of the Blinding Shield",
    type: "Power",
    id: "ID_FMP_POWER_11385",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11385",
    categories: ["Word of the Blinding Shield", "ID_FMP_POWER_11385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Vengeful Thunder"] = new engine.RulesElement({
    name: "Word of Vengeful Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11444",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11444",
    categories: ["Word of Vengeful Thunder", "ID_FMP_POWER_11444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Weal and Woe"] = new engine.RulesElement({
    name: "Word of Weal and Woe",
    type: "Power",
    id: "ID_FMP_POWER_11445",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=11445",
    categories: ["Word of Weal and Woe", "ID_FMP_POWER_11445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_65", "Runic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wormhole Plunge"] = new engine.RulesElement({
    name: "Wormhole Plunge",
    type: "Power",
    id: "ID_FMP_POWER_10278",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10278",
    categories: ["Wormhole Plunge", "ID_FMP_POWER_10278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Destroyer"] = new engine.RulesElement({
    name: "Wrath of the Destroyer",
    type: "Power",
    id: "ID_FMP_POWER_7442",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7442",
    categories: ["Wrath of the Destroyer", "ID_FMP_POWER_7442", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
