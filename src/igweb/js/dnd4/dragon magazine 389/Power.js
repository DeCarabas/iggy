define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Arrows of Misfortune"] = new engine.RulesElement({
    name: "Arrows of Misfortune",
    type: "Power",
    id: "ID_FMP_POWER_12796",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12796",
    categories: ["Arrows of Misfortune", "ID_FMP_POWER_12796", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12797"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Arrows of Misfortune Attack"] = new engine.RulesElement({
    name: "Arrows of Misfortune Attack",
    type: "Power",
    id: "ID_FMP_POWER_12797",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12797",
    categories: ["Arrows of Misfortune Attack", "ID_FMP_POWER_12797", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Biting Wind Arrows"] = new engine.RulesElement({
    name: "Biting Wind Arrows",
    type: "Power",
    id: "ID_FMP_POWER_12801",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12801",
    categories: ["Biting Wind Arrows", "ID_FMP_POWER_12801", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12802"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Biting Wind Arrows Attack"] = new engine.RulesElement({
    name: "Biting Wind Arrows Attack",
    type: "Power",
    id: "ID_FMP_POWER_12802",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12802",
    categories: ["Biting Wind Arrows Attack", "ID_FMP_POWER_12802", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Black Arrow of Fate"] = new engine.RulesElement({
    name: "Black Arrow of Fate",
    type: "Power",
    id: "ID_FMP_POWER_12799",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12799",
    categories: ["Black Arrow of Fate", "ID_FMP_POWER_12799", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Frenzy Howl"] = new engine.RulesElement({
    name: "Blood Frenzy Howl",
    type: "Power",
    id: "ID_FMP_POWER_12834",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12834",
    categories: ["Blood Frenzy Howl", "ID_FMP_POWER_12834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Fugue"] = new engine.RulesElement({
    name: "Blood Fugue",
    type: "Power",
    id: "ID_FMP_POWER_12783",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12783",
    categories: ["Blood Fugue", "ID_FMP_POWER_12783", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_706", "Scion of Leng", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cordon of Thorns"] = new engine.RulesElement({
    name: "Cordon of Thorns",
    type: "Power",
    id: "ID_FMP_POWER_12794",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12794",
    categories: ["Cordon of Thorns", "ID_FMP_POWER_12794", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12795"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Cordon of Thorns Attack"] = new engine.RulesElement({
    name: "Cordon of Thorns Attack",
    type: "Power",
    id: "ID_FMP_POWER_12795",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12795",
    categories: ["Cordon of Thorns Attack", "ID_FMP_POWER_12795", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Cursed Dart"] = new engine.RulesElement({
    name: "Cursed Dart",
    type: "Power",
    id: "ID_FMP_POWER_12791",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12791",
    categories: ["Cursed Dart", "ID_FMP_POWER_12791", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Damning Secret"] = new engine.RulesElement({
    name: "Damning Secret",
    type: "Power",
    id: "ID_FMP_POWER_12828",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12828",
    categories: ["Damning Secret", "ID_FMP_POWER_12828", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Enthroned in Blood"] = new engine.RulesElement({
    name: "Enthroned in Blood",
    type: "Power",
    id: "ID_FMP_POWER_12785",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12785",
    categories: ["Enthroned in Blood", "ID_FMP_POWER_12785", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_706", "Scion of Leng", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fall of the Anvil's Master"] = new engine.RulesElement({
    name: "Fall of the Anvil's Master",
    type: "Power",
    id: "ID_FMP_POWER_13229",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13229",
    categories: ["Fall of the Anvil's Master", "ID_FMP_POWER_13229", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13230"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fall of the Anvil's Master [Movement Technique]"] = new engine.RulesElement({
    name: "Fall of the Anvil's Master [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13230",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13230",
    categories: ["Fall of the Anvil's Master [Movement Technique]", "ID_FMP_POWER_13230", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fallen from the Thread"] = new engine.RulesElement({
    name: "Fallen from the Thread",
    type: "Power",
    id: "ID_FMP_POWER_13238",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13238",
    categories: ["Fallen from the Thread", "ID_FMP_POWER_13238", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_747", "Falling Needle Itinerant", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13237"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fallen from the Thread [Movement Technique]"] = new engine.RulesElement({
    name: "Fallen from the Thread [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13237",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13237",
    categories: ["Fallen from the Thread [Movement Technique]", "ID_FMP_POWER_13237", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_747", "Falling Needle Itinerant", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fallen Hammer in Repose"] = new engine.RulesElement({
    name: "Fallen Hammer in Repose",
    type: "Power",
    id: "ID_FMP_POWER_13223",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13223",
    categories: ["Fallen Hammer in Repose", "ID_FMP_POWER_13223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13224"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fallen Hammer in Repose [Movement Technique]"] = new engine.RulesElement({
    name: "Fallen Hammer in Repose [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13224",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13224",
    categories: ["Fallen Hammer in Repose [Movement Technique]", "ID_FMP_POWER_13224", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fallen Needle"] = new engine.RulesElement({
    name: "Fallen Needle",
    type: "Power",
    id: "ID_FMP_POWER_13219",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13219",
    categories: ["Fallen Needle", "ID_FMP_POWER_13219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13220"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fallen Needle [Movement Technique]"] = new engine.RulesElement({
    name: "Fallen Needle [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13220",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13220",
    categories: ["Fallen Needle [Movement Technique]", "ID_FMP_POWER_13220", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Far Step Arrow"] = new engine.RulesElement({
    name: "Far Step Arrow",
    type: "Power",
    id: "ID_FMP_POWER_12793",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12793",
    categories: ["Far Step Arrow", "ID_FMP_POWER_12793", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Faulty Memory"] = new engine.RulesElement({
    name: "Faulty Memory",
    type: "Power",
    id: "ID_FMP_POWER_12829",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12829",
    categories: ["Faulty Memory", "ID_FMP_POWER_12829", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Night Owl"] = new engine.RulesElement({
    name: "Form of the Night Owl",
    type: "Power",
    id: "ID_FMP_POWER_12836",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12836",
    categories: ["Form of the Night Owl", "ID_FMP_POWER_12836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12837"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Gentle Rainfall"] = new engine.RulesElement({
    name: "Gentle Rainfall",
    type: "Power",
    id: "ID_FMP_POWER_13221",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13221",
    categories: ["Gentle Rainfall", "ID_FMP_POWER_13221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13222"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Gentle Rainfall [Movement Technique]"] = new engine.RulesElement({
    name: "Gentle Rainfall [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13222",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13222",
    categories: ["Gentle Rainfall [Movement Technique]", "ID_FMP_POWER_13222", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Gripping Swarm"] = new engine.RulesElement({
    name: "Gripping Swarm",
    type: "Power",
    id: "ID_FMP_POWER_12843",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12843",
    categories: ["Gripping Swarm", "ID_FMP_POWER_12843", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Infesting Strike"] = new engine.RulesElement({
    name: "Infesting Strike",
    type: "Power",
    id: "ID_FMP_POWER_12840",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12840",
    categories: ["Infesting Strike", "ID_FMP_POWER_12840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Infiltrating Drone"] = new engine.RulesElement({
    name: "Infiltrating Drone",
    type: "Power",
    id: "ID_FMP_POWER_12841",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12841",
    categories: ["Infiltrating Drone", "ID_FMP_POWER_12841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Lost in the Labyrinth City"] = new engine.RulesElement({
    name: "Lost in the Labyrinth City",
    type: "Power",
    id: "ID_FMP_POWER_12784",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12784",
    categories: ["Lost in the Labyrinth City", "ID_FMP_POWER_12784", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_706", "Scion of Leng", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Master Diplomat"] = new engine.RulesElement({
    name: "Master Diplomat",
    type: "Power",
    id: "ID_FMP_POWER_12830",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12830",
    categories: ["Master Diplomat", "ID_FMP_POWER_12830", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Night Owl Attack"] = new engine.RulesElement({
    name: "Night Owl Attack",
    type: "Power",
    id: "ID_FMP_POWER_12837",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12837",
    categories: ["Night Owl Attack", "ID_FMP_POWER_12837", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Palming Strike"] = new engine.RulesElement({
    name: "Palming Strike",
    type: "Power",
    id: "ID_FMP_POWER_13217",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13217",
    categories: ["Palming Strike", "ID_FMP_POWER_13217", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Arrow"] = new engine.RulesElement({
    name: "Persistent Arrow",
    type: "Power",
    id: "ID_FMP_POWER_12787",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12787",
    categories: ["Persistent Arrow", "ID_FMP_POWER_12787", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12788"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Persistent Arrow Attack"] = new engine.RulesElement({
    name: "Persistent Arrow Attack",
    type: "Power",
    id: "ID_FMP_POWER_12788",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12788",
    categories: ["Persistent Arrow Attack", "ID_FMP_POWER_12788", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Beast Apotheosis"] = new engine.RulesElement({
    name: "Primal Beast Apotheosis",
    type: "Power",
    id: "ID_FMP_POWER_12839",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12839",
    categories: ["Primal Beast Apotheosis", "ID_FMP_POWER_12839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Secrets of the City"] = new engine.RulesElement({
    name: "Secrets of the City",
    type: "Power",
    id: "ID_FMP_POWER_12827",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12827",
    categories: ["Secrets of the City", "ID_FMP_POWER_12827", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Seeker's Due"] = new engine.RulesElement({
    name: "Seeker's Due",
    type: "Power",
    id: "ID_FMP_POWER_12790",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12790",
    categories: ["Seeker's Due", "ID_FMP_POWER_12790", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Seeker's Peerless Shot"] = new engine.RulesElement({
    name: "Seeker's Peerless Shot",
    type: "Power",
    id: "ID_FMP_POWER_12798",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12798",
    categories: ["Seeker's Peerless Shot", "ID_FMP_POWER_12798", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Seeking Arrow"] = new engine.RulesElement({
    name: "Seeking Arrow",
    type: "Power",
    id: "ID_FMP_POWER_12800",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12800",
    categories: ["Seeking Arrow", "ID_FMP_POWER_12800", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent's Hold"] = new engine.RulesElement({
    name: "Serpent's Hold",
    type: "Power",
    id: "ID_FMP_POWER_12835",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12835",
    categories: ["Serpent's Hold", "ID_FMP_POWER_12835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent's Tongue"] = new engine.RulesElement({
    name: "Serpent's Tongue",
    type: "Power",
    id: "ID_FMP_POWER_12826",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12826",
    categories: ["Serpent's Tongue", "ID_FMP_POWER_12826", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Slashing Dash"] = new engine.RulesElement({
    name: "Slashing Dash",
    type: "Power",
    id: "ID_FMP_POWER_12838",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12838",
    categories: ["Slashing Dash", "ID_FMP_POWER_12838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Dodge"] = new engine.RulesElement({
    name: "Spider Dodge",
    type: "Power",
    id: "ID_FMP_POWER_13216",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13216",
    categories: ["Spider Dodge", "ID_FMP_POWER_13216", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Forest"] = new engine.RulesElement({
    name: "Steel Forest",
    type: "Power",
    id: "ID_FMP_POWER_12786",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12786",
    categories: ["Steel Forest", "ID_FMP_POWER_12786", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Storms Fall without Warning"] = new engine.RulesElement({
    name: "Storms Fall without Warning",
    type: "Power",
    id: "ID_FMP_POWER_13231",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13231",
    categories: ["Storms Fall without Warning", "ID_FMP_POWER_13231", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13232"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Storms Fall without Warning [Movement Technique]"] = new engine.RulesElement({
    name: "Storms Fall without Warning [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13232",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13232",
    categories: ["Storms Fall without Warning [Movement Technique]", "ID_FMP_POWER_13232", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Swarming Bulwark"] = new engine.RulesElement({
    name: "Swarming Bulwark",
    type: "Power",
    id: "ID_FMP_POWER_12842",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12842",
    categories: ["Swarming Bulwark", "ID_FMP_POWER_12842", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12843"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Swirling Arrows"] = new engine.RulesElement({
    name: "Swirling Arrows",
    type: "Power",
    id: "ID_FMP_POWER_12792",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12792",
    categories: ["Swirling Arrows", "ID_FMP_POWER_12792", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Threading the Eye"] = new engine.RulesElement({
    name: "Threading the Eye",
    type: "Power",
    id: "ID_FMP_POWER_13236",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13236",
    categories: ["Threading the Eye", "ID_FMP_POWER_13236", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_747", "Falling Needle Itinerant", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Torrent of Falling Knives"] = new engine.RulesElement({
    name: "Torrent of Falling Knives",
    type: "Power",
    id: "ID_FMP_POWER_13227",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13227",
    categories: ["Torrent of Falling Knives", "ID_FMP_POWER_13227", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13228"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Torrent of Falling Knives [Movement Technique]"] = new engine.RulesElement({
    name: "Torrent of Falling Knives [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13228",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13228",
    categories: ["Torrent of Falling Knives [Movement Technique]", "ID_FMP_POWER_13228", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Two Falling Feathers"] = new engine.RulesElement({
    name: "Two Falling Feathers",
    type: "Power",
    id: "ID_FMP_POWER_13225",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13225",
    categories: ["Two Falling Feathers", "ID_FMP_POWER_13225", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13226"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Two Falling Feathers [Movement Technique]"] = new engine.RulesElement({
    name: "Two Falling Feathers [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13226",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13226",
    categories: ["Two Falling Feathers [Movement Technique]", "ID_FMP_POWER_13226", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Arrow"] = new engine.RulesElement({
    name: "Warding Arrow",
    type: "Power",
    id: "ID_FMP_POWER_12789",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12789",
    categories: ["Warding Arrow", "ID_FMP_POWER_12789", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Wind-Blown Pine"] = new engine.RulesElement({
    name: "Wind-Blown Pine",
    type: "Power",
    id: "ID_FMP_POWER_13239",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13239",
    categories: ["Wind-Blown Pine", "ID_FMP_POWER_13239", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_747", "Falling Needle Itinerant", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
