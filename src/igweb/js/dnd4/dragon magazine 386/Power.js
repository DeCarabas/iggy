define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["All-Encompassing Nature"] = new engine.RulesElement({
    name: "All-Encompassing Nature",
    type: "Power",
    id: "ID_FMP_POWER_12326",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12326",
    categories: ["All-Encompassing Nature", "ID_FMP_POWER_12326", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["All-Spirit Attack"] = new engine.RulesElement({
    name: "All-Spirit Attack",
    type: "Power",
    id: "ID_FMP_POWER_12463",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12463",
    categories: ["All-Spirit Attack", "ID_FMP_POWER_12463", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_685", "Scion of the All-Spirit", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["All-Spirit Step"] = new engine.RulesElement({
    name: "All-Spirit Step",
    type: "Power",
    id: "ID_FMP_POWER_12464",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12464",
    categories: ["All-Spirit Step", "ID_FMP_POWER_12464", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_685", "Scion of the All-Spirit", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ameliorating Onslaught"] = new engine.RulesElement({
    name: "Ameliorating Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_12442",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12442",
    categories: ["Ameliorating Onslaught", "ID_FMP_POWER_12442", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_680", "Mighty Judge", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Annihilating Strike"] = new engine.RulesElement({
    name: "Annihilating Strike",
    type: "Power",
    id: "ID_FMP_POWER_12450",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12450",
    categories: ["Annihilating Strike", "ID_FMP_POWER_12450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_683", "Goliath Juggernaut", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Falcon"] = new engine.RulesElement({
    name: "Argent Falcon",
    type: "Power",
    id: "ID_FMP_POWER_12290",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12290",
    categories: ["Argent Falcon", "ID_FMP_POWER_12290", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Auspicious Foresight"] = new engine.RulesElement({
    name: "Auspicious Foresight",
    type: "Power",
    id: "ID_FMP_POWER_12417",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12417",
    categories: ["Auspicious Foresight", "ID_FMP_POWER_12417", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bathed in the Light"] = new engine.RulesElement({
    name: "Bathed in the Light",
    type: "Power",
    id: "ID_FMP_POWER_12356",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12356",
    categories: ["Bathed in the Light", "ID_FMP_POWER_12356", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Bestowed Lunacy"] = new engine.RulesElement({
    name: "Bestowed Lunacy",
    type: "Power",
    id: "ID_FMP_POWER_12303",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12303",
    categories: ["Bestowed Lunacy", "ID_FMP_POWER_12303", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Flows Like Water"] = new engine.RulesElement({
    name: "Blade Flows Like Water",
    type: "Power",
    id: "ID_FMP_POWER_12446",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12446",
    categories: ["Blade Flows Like Water", "ID_FMP_POWER_12446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_682", "Sharakim Blademaster", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodthirsty Resurgence"] = new engine.RulesElement({
    name: "Bloodthirsty Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_12277",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12277",
    categories: ["Bloodthirsty Resurgence", "ID_FMP_POWER_12277", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Roar"] = new engine.RulesElement({
    name: "Bloody Roar",
    type: "Power",
    id: "ID_FMP_POWER_12282",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12282",
    categories: ["Bloody Roar", "ID_FMP_POWER_12282", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Bog Hunter's Poison"] = new engine.RulesElement({
    name: "Bog Hunter's Poison",
    type: "Power",
    id: "ID_FMP_POWER_12352",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12352",
    categories: ["Bog Hunter's Poison", "ID_FMP_POWER_12352", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Bogtangle Dart"] = new engine.RulesElement({
    name: "Bogtangle Dart",
    type: "Power",
    id: "ID_FMP_POWER_12353",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12353",
    categories: ["Bogtangle Dart", "ID_FMP_POWER_12353", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Break the Bonds"] = new engine.RulesElement({
    name: "Break the Bonds",
    type: "Power",
    id: "ID_FMP_POWER_12291",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12291",
    categories: ["Break the Bonds", "ID_FMP_POWER_12291", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_PARAGON_PATH_667", "Arrow of the Moonbow"]
  });
  byID[te.id] = te;
  
  te = Power["Catastrophic Impact"] = new engine.RulesElement({
    name: "Catastrophic Impact",
    type: "Power",
    id: "ID_FMP_POWER_12444",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12444",
    categories: ["Catastrophic Impact", "ID_FMP_POWER_12444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_681", "Lightning Blitzer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Poison Blast"] = new engine.RulesElement({
    name: "Chaos Poison Blast",
    type: "Power",
    id: "ID_FMP_POWER_12475",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12475",
    categories: ["Chaos Poison Blast", "ID_FMP_POWER_12475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Chaotic Spray"] = new engine.RulesElement({
    name: "Chaotic Spray",
    type: "Power",
    id: "ID_FMP_POWER_12482",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12482",
    categories: ["Chaotic Spray", "ID_FMP_POWER_12482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Chaotic Strike"] = new engine.RulesElement({
    name: "Chaotic Strike",
    type: "Power",
    id: "ID_FMP_POWER_12467",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12467",
    categories: ["Chaotic Strike", "ID_FMP_POWER_12467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Charging Rebuke"] = new engine.RulesElement({
    name: "Charging Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_12445",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12445",
    categories: ["Charging Rebuke", "ID_FMP_POWER_12445", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_681", "Lightning Blitzer", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cloaked Steps"] = new engine.RulesElement({
    name: "Cloaked Steps",
    type: "Power",
    id: "ID_FMP_POWER_12295",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12295",
    categories: ["Cloaked Steps", "ID_FMP_POWER_12295", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Contrivance of Speed"] = new engine.RulesElement({
    name: "Contrivance of Speed",
    type: "Power",
    id: "ID_FMP_POWER_12452",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12452",
    categories: ["Contrivance of Speed", "ID_FMP_POWER_12452", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Corner of the Eye"] = new engine.RulesElement({
    name: "Corner of the Eye",
    type: "Power",
    id: "ID_FMP_POWER_12285",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12285",
    categories: ["Corner of the Eye", "ID_FMP_POWER_12285", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_665", "Phantasmagoric Scoundrel", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Covenant of Assassination"] = new engine.RulesElement({
    name: "Covenant of Assassination",
    type: "Power",
    id: "ID_FMP_POWER_12459",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12459",
    categories: ["Covenant of Assassination", "ID_FMP_POWER_12459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_684", "Covenant Agent", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Crescent Moon"] = new engine.RulesElement({
    name: "Crescent Moon",
    type: "Power",
    id: "ID_FMP_POWER_12305",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12305",
    categories: ["Crescent Moon", "ID_FMP_POWER_12305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Moon Strike"] = new engine.RulesElement({
    name: "Dark Moon Strike",
    type: "Power",
    id: "ID_FMP_POWER_12296",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12296",
    categories: ["Dark Moon Strike", "ID_FMP_POWER_12296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Visions"] = new engine.RulesElement({
    name: "Deadly Visions",
    type: "Power",
    id: "ID_FMP_POWER_12286",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12286",
    categories: ["Deadly Visions", "ID_FMP_POWER_12286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_665", "Phantasmagoric Scoundrel", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Deft Diver"] = new engine.RulesElement({
    name: "Deft Diver",
    type: "Power",
    id: "ID_FMP_POWER_12354",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12354",
    categories: ["Deft Diver", "ID_FMP_POWER_12354", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Portents of Malbolge"] = new engine.RulesElement({
    name: "Dire Portents of Malbolge",
    type: "Power",
    id: "ID_FMP_POWER_12312",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12312",
    categories: ["Dire Portents of Malbolge", "ID_FMP_POWER_12312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Diverting Taunt"] = new engine.RulesElement({
    name: "Diverting Taunt",
    type: "Power",
    id: "ID_FMP_POWER_12287",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12287",
    categories: ["Diverting Taunt", "ID_FMP_POWER_12287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_666", "Silver-Tongued Scoundrel", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Drive Them to Their Knees"] = new engine.RulesElement({
    name: "Drive Them to Their Knees",
    type: "Power",
    id: "ID_FMP_POWER_12449",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12449",
    categories: ["Drive Them to Their Knees", "ID_FMP_POWER_12449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_683", "Goliath Juggernaut", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Enforced Peace"] = new engine.RulesElement({
    name: "Enforced Peace",
    type: "Power",
    id: "ID_FMP_POWER_12447",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12447",
    categories: ["Enforced Peace", "ID_FMP_POWER_12447", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_682", "Sharakim Blademaster", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Leaves"] = new engine.RulesElement({
    name: "Falling Leaves",
    type: "Power",
    id: "ID_FMP_POWER_12301",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12301",
    categories: ["Falling Leaves", "ID_FMP_POWER_12301", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Familiar Fires"] = new engine.RulesElement({
    name: "Familiar Fires",
    type: "Power",
    id: "ID_FMP_POWER_12465",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12465",
    categories: ["Familiar Fires", "ID_FMP_POWER_12465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Entanglement"] = new engine.RulesElement({
    name: "Flame Entanglement",
    type: "Power",
    id: "ID_FMP_POWER_12469",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12469",
    categories: ["Flame Entanglement", "ID_FMP_POWER_12469", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Flanking Familiar"] = new engine.RulesElement({
    name: "Flanking Familiar",
    type: "Power",
    id: "ID_FMP_POWER_12473",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12473",
    categories: ["Flanking Familiar", "ID_FMP_POWER_12473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the All-Spirit"] = new engine.RulesElement({
    name: "Form of the All-Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12462",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12462",
    categories: ["Form of the All-Spirit", "ID_FMP_POWER_12462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_685", "Scion of the All-Spirit", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12463"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Full Eclipse"] = new engine.RulesElement({
    name: "Full Eclipse",
    type: "Power",
    id: "ID_FMP_POWER_12300",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12300",
    categories: ["Full Eclipse", "ID_FMP_POWER_12300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fungal Eruption"] = new engine.RulesElement({
    name: "Fungal Eruption",
    type: "Power",
    id: "ID_FMP_POWER_12330",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12330",
    categories: ["Fungal Eruption", "ID_FMP_POWER_12330", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Lion's Step"] = new engine.RulesElement({
    name: "Ghost Lion's Step",
    type: "Power",
    id: "ID_FMP_POWER_12448",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12448",
    categories: ["Ghost Lion's Step", "ID_FMP_POWER_12448", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_682", "Sharakim Blademaster", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Gift to Avernus"] = new engine.RulesElement({
    name: "Gift to Avernus",
    type: "Power",
    id: "ID_FMP_POWER_12307",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12307",
    categories: ["Gift to Avernus", "ID_FMP_POWER_12307", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Grasp of the Iron Tower"] = new engine.RulesElement({
    name: "Grasp of the Iron Tower",
    type: "Power",
    id: "ID_FMP_POWER_12308",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12308",
    categories: ["Grasp of the Iron Tower", "ID_FMP_POWER_12308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Fury"] = new engine.RulesElement({
    name: "Hellfire Fury",
    type: "Power",
    id: "ID_FMP_POWER_12314",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12314",
    categories: ["Hellfire Fury", "ID_FMP_POWER_12314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Blessing"] = new engine.RulesElement({
    name: "Holy Blessing",
    type: "Power",
    id: "ID_FMP_POWER_12456",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12456",
    categories: ["Holy Blessing", "ID_FMP_POWER_12456", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Horror Blast"] = new engine.RulesElement({
    name: "Horror Blast",
    type: "Power",
    id: "ID_FMP_POWER_12472",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12472",
    categories: ["Horror Blast", "ID_FMP_POWER_12472", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Howl at the Moon"] = new engine.RulesElement({
    name: "Howl at the Moon",
    type: "Power",
    id: "ID_FMP_POWER_12302",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12302",
    categories: ["Howl at the Moon", "ID_FMP_POWER_12302", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Blades of Levistus"] = new engine.RulesElement({
    name: "Ice Blades of Levistus",
    type: "Power",
    id: "ID_FMP_POWER_12311",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12311",
    categories: ["Ice Blades of Levistus", "ID_FMP_POWER_12311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Inferno Ring"] = new engine.RulesElement({
    name: "Inferno Ring",
    type: "Power",
    id: "ID_FMP_POWER_12481",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12481",
    categories: ["Inferno Ring", "ID_FMP_POWER_12481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Kill Them All"] = new engine.RulesElement({
    name: "Kill Them All",
    type: "Power",
    id: "ID_FMP_POWER_12281",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12281",
    categories: ["Kill Them All", "ID_FMP_POWER_12281", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Backlash"] = new engine.RulesElement({
    name: "Lightning Backlash",
    type: "Power",
    id: "ID_FMP_POWER_12483",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12483",
    categories: ["Lightning Backlash", "ID_FMP_POWER_12483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lost Love"] = new engine.RulesElement({
    name: "Lost Love",
    type: "Power",
    id: "ID_FMP_POWER_12299",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12299",
    categories: ["Lost Love", "ID_FMP_POWER_12299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Lure of Minauros"] = new engine.RulesElement({
    name: "Lure of Minauros",
    type: "Power",
    id: "ID_FMP_POWER_12309",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12309",
    categories: ["Lure of Minauros", "ID_FMP_POWER_12309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Master Negotiator"] = new engine.RulesElement({
    name: "Master Negotiator",
    type: "Power",
    id: "ID_FMP_POWER_12289",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12289",
    categories: ["Master Negotiator", "ID_FMP_POWER_12289", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_666", "Silver-Tongued Scoundrel", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Moon Eye"] = new engine.RulesElement({
    name: "Moon Eye",
    type: "Power",
    id: "ID_FMP_POWER_12294",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12294",
    categories: ["Moon Eye", "ID_FMP_POWER_12294", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_667", "Arrow of the Moonbow", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Moon Shot"] = new engine.RulesElement({
    name: "Moon Shot",
    type: "Power",
    id: "ID_FMP_POWER_12293",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12293",
    categories: ["Moon Shot", "ID_FMP_POWER_12293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_667", "Arrow of the Moonbow", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Necrotic Storm"] = new engine.RulesElement({
    name: "Necrotic Storm",
    type: "Power",
    id: "ID_FMP_POWER_12484",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12484",
    categories: ["Necrotic Storm", "ID_FMP_POWER_12484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Net Snare"] = new engine.RulesElement({
    name: "Net Snare",
    type: "Power",
    id: "ID_FMP_POWER_12355",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12355",
    categories: ["Net Snare", "ID_FMP_POWER_12355", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Night's Mantle"] = new engine.RulesElement({
    name: "Night's Mantle",
    type: "Power",
    id: "ID_FMP_POWER_12304",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12304",
    categories: ["Night's Mantle", "ID_FMP_POWER_12304", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Nowhere to Run"] = new engine.RulesElement({
    name: "Nowhere to Run",
    type: "Power",
    id: "ID_FMP_POWER_12284",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12284",
    categories: ["Nowhere to Run", "ID_FMP_POWER_12284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ominous Portent"] = new engine.RulesElement({
    name: "Ominous Portent",
    type: "Power",
    id: "ID_FMP_POWER_12413",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12413",
    categories: ["Ominous Portent", "ID_FMP_POWER_12413", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Opportunistic Familiar"] = new engine.RulesElement({
    name: "Opportunistic Familiar",
    type: "Power",
    id: "ID_FMP_POWER_12476",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12476",
    categories: ["Opportunistic Familiar", "ID_FMP_POWER_12476", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Overpowering Retribution"] = new engine.RulesElement({
    name: "Overpowering Retribution",
    type: "Power",
    id: "ID_FMP_POWER_12440",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12440",
    categories: ["Overpowering Retribution", "ID_FMP_POWER_12440", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_680", "Mighty Judge", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Pain from Perseverance"] = new engine.RulesElement({
    name: "Pain from Perseverance",
    type: "Power",
    id: "ID_FMP_POWER_12327",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12327",
    categories: ["Pain from Perseverance", "ID_FMP_POWER_12327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Pain to Pleasure"] = new engine.RulesElement({
    name: "Pain to Pleasure",
    type: "Power",
    id: "ID_FMP_POWER_12310",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12310",
    categories: ["Pain to Pleasure", "ID_FMP_POWER_12310", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Darts"] = new engine.RulesElement({
    name: "Pinning Darts",
    type: "Power",
    id: "ID_FMP_POWER_12470",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12470",
    categories: ["Pinning Darts", "ID_FMP_POWER_12470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer of Sacrifice"] = new engine.RulesElement({
    name: "Prayer of Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_12457",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12457",
    categories: ["Prayer of Sacrifice", "ID_FMP_POWER_12457", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Precision Gait"] = new engine.RulesElement({
    name: "Precision Gait",
    type: "Power",
    id: "ID_FMP_POWER_12460",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12460",
    categories: ["Precision Gait", "ID_FMP_POWER_12460", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_684", "Covenant Agent", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Boon"] = new engine.RulesElement({
    name: "Prescient Boon",
    type: "Power",
    id: "ID_FMP_POWER_12415",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12415",
    categories: ["Prescient Boon", "ID_FMP_POWER_12415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Prophecy of Reprisal"] = new engine.RulesElement({
    name: "Prophecy of Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_12443",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12443",
    categories: ["Prophecy of Reprisal", "ID_FMP_POWER_12443", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_681", "Lightning Blitzer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Fervor"] = new engine.RulesElement({
    name: "Prophetic Fervor",
    type: "Power",
    id: "ID_FMP_POWER_12416",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12416",
    categories: ["Prophetic Fervor", "ID_FMP_POWER_12416", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Guidance"] = new engine.RulesElement({
    name: "Prophetic Guidance",
    type: "Power",
    id: "ID_FMP_POWER_12410",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12410",
    categories: ["Prophetic Guidance", "ID_FMP_POWER_12410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Protection"] = new engine.RulesElement({
    name: "Prophetic Protection",
    type: "Power",
    id: "ID_FMP_POWER_12412",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12412",
    categories: ["Prophetic Protection", "ID_FMP_POWER_12412", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Familiar"] = new engine.RulesElement({
    name: "Protective Familiar",
    type: "Power",
    id: "ID_FMP_POWER_12471",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12471",
    categories: ["Protective Familiar", "ID_FMP_POWER_12471", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rending Strike"] = new engine.RulesElement({
    name: "Rending Strike",
    type: "Power",
    id: "ID_FMP_POWER_12276",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12276",
    categories: ["Rending Strike", "ID_FMP_POWER_12276", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rise, My Pet"] = new engine.RulesElement({
    name: "Rise, My Pet",
    type: "Power",
    id: "ID_FMP_POWER_12477",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12477",
    categories: ["Rise, My Pet", "ID_FMP_POWER_12477", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Roaring Challenge"] = new engine.RulesElement({
    name: "Roaring Challenge",
    type: "Power",
    id: "ID_FMP_POWER_12278",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12278",
    categories: ["Roaring Challenge", "ID_FMP_POWER_12278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rolls of Thunder"] = new engine.RulesElement({
    name: "Rolls of Thunder",
    type: "Power",
    id: "ID_FMP_POWER_12478",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12478",
    categories: ["Rolls of Thunder", "ID_FMP_POWER_12478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Kismet"] = new engine.RulesElement({
    name: "Ruinous Kismet",
    type: "Power",
    id: "ID_FMP_POWER_12414",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12414",
    categories: ["Ruinous Kismet", "ID_FMP_POWER_12414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Strike"] = new engine.RulesElement({
    name: "Ruinous Strike",
    type: "Power",
    id: "ID_FMP_POWER_12280",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12280",
    categories: ["Ruinous Strike", "ID_FMP_POWER_12280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Savior Spirit"] = new engine.RulesElement({
    name: "Savior Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12480",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12480",
    categories: ["Savior Spirit", "ID_FMP_POWER_12480", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Sentence of Banishment"] = new engine.RulesElement({
    name: "Sentence of Banishment",
    type: "Power",
    id: "ID_FMP_POWER_12441",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12441",
    categories: ["Sentence of Banishment", "ID_FMP_POWER_12441", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_680", "Mighty Judge", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Adept"] = new engine.RulesElement({
    name: "Shadow Adept",
    type: "Power",
    id: "ID_FMP_POWER_12454",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12454",
    categories: ["Shadow Adept", "ID_FMP_POWER_12454", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Tricks"] = new engine.RulesElement({
    name: "Shadow Tricks",
    type: "Power",
    id: "ID_FMP_POWER_12297",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12297",
    categories: ["Shadow Tricks", "ID_FMP_POWER_12297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding the Bound Spirit"] = new engine.RulesElement({
    name: "Shielding the Bound Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12474",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12474",
    categories: ["Shielding the Bound Spirit", "ID_FMP_POWER_12474", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Tongue, Silver Blade"] = new engine.RulesElement({
    name: "Silver Tongue, Silver Blade",
    type: "Power",
    id: "ID_FMP_POWER_12288",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12288",
    categories: ["Silver Tongue, Silver Blade", "ID_FMP_POWER_12288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_666", "Silver-Tongued Scoundrel", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Silvery Arrow"] = new engine.RulesElement({
    name: "Silvery Arrow",
    type: "Power",
    id: "ID_FMP_POWER_12298",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12298",
    categories: ["Silvery Arrow", "ID_FMP_POWER_12298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Briar"] = new engine.RulesElement({
    name: "Spirit Briar",
    type: "Power",
    id: "ID_FMP_POWER_12325",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12325",
    categories: ["Spirit Briar", "ID_FMP_POWER_12325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Guidance"] = new engine.RulesElement({
    name: "Spirit Guidance",
    type: "Power",
    id: "ID_FMP_POWER_12468",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12468",
    categories: ["Spirit Guidance", "ID_FMP_POWER_12468", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritual Venom"] = new engine.RulesElement({
    name: "Spiritual Venom",
    type: "Power",
    id: "ID_FMP_POWER_12479",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12479",
    categories: ["Spiritual Venom", "ID_FMP_POWER_12479", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Stave Off Winter"] = new engine.RulesElement({
    name: "Stave Off Winter",
    type: "Power",
    id: "ID_FMP_POWER_12306",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12306",
    categories: ["Stave Off Winter", "ID_FMP_POWER_12306", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sundered Fortune"] = new engine.RulesElement({
    name: "Sundered Fortune",
    type: "Power",
    id: "ID_FMP_POWER_12411",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12411",
    categories: ["Sundered Fortune", "ID_FMP_POWER_12411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Sunspray Dance"] = new engine.RulesElement({
    name: "Sunspray Dance",
    type: "Power",
    id: "ID_FMP_POWER_12357",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12357",
    categories: ["Sunspray Dance", "ID_FMP_POWER_12357", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Thorns of the Hinterlands"] = new engine.RulesElement({
    name: "Thorns of the Hinterlands",
    type: "Power",
    id: "ID_FMP_POWER_12329",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12329",
    categories: ["Thorns of the Hinterlands", "ID_FMP_POWER_12329", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Three Moonbeams"] = new engine.RulesElement({
    name: "Three Moonbeams",
    type: "Power",
    id: "ID_FMP_POWER_12292",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12292",
    categories: ["Three Moonbeams", "ID_FMP_POWER_12292", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_667", "Arrow of the Moonbow", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Throw Back the Horde"] = new engine.RulesElement({
    name: "Throw Back the Horde",
    type: "Power",
    id: "ID_FMP_POWER_12283",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12283",
    categories: ["Throw Back the Horde", "ID_FMP_POWER_12283", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Undeniable Tenacity"] = new engine.RulesElement({
    name: "Undeniable Tenacity",
    type: "Power",
    id: "ID_FMP_POWER_12451",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12451",
    categories: ["Undeniable Tenacity", "ID_FMP_POWER_12451", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_683", "Goliath Juggernaut", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unrelenting Mountain"] = new engine.RulesElement({
    name: "Unrelenting Mountain",
    type: "Power",
    id: "ID_FMP_POWER_12358",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12358",
    categories: ["Unrelenting Mountain", "ID_FMP_POWER_12358", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Vaporous Step"] = new engine.RulesElement({
    name: "Vaporous Step",
    type: "Power",
    id: "ID_FMP_POWER_12455",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12455",
    categories: ["Vaporous Step", "ID_FMP_POWER_12455", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Voice of the All-Spirit"] = new engine.RulesElement({
    name: "Voice of the All-Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12461",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12461",
    categories: ["Voice of the All-Spirit", "ID_FMP_POWER_12461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_685", "Scion of the All-Spirit", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Light"] = new engine.RulesElement({
    name: "Wave of Light",
    type: "Power",
    id: "ID_FMP_POWER_12466",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12466",
    categories: ["Wave of Light", "ID_FMP_POWER_12466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Web of Lies"] = new engine.RulesElement({
    name: "Web of Lies",
    type: "Power",
    id: "ID_FMP_POWER_12313",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12313",
    categories: ["Web of Lies", "ID_FMP_POWER_12313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Wheat to the Scythe"] = new engine.RulesElement({
    name: "Wheat to the Scythe",
    type: "Power",
    id: "ID_FMP_POWER_12279",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12279",
    categories: ["Wheat to the Scythe", "ID_FMP_POWER_12279", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Withering Onslaught"] = new engine.RulesElement({
    name: "Withering Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_12458",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12458",
    categories: ["Withering Onslaught", "ID_FMP_POWER_12458", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_684", "Covenant Agent", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Wolfstone Frenzy"] = new engine.RulesElement({
    name: "Wolfstone Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_12359",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12359",
    categories: ["Wolfstone Frenzy", "ID_FMP_POWER_12359", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["World-Warp"] = new engine.RulesElement({
    name: "World-Warp",
    type: "Power",
    id: "ID_FMP_POWER_12328",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12328",
    categories: ["World-Warp", "ID_FMP_POWER_12328", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Writhing Henge"] = new engine.RulesElement({
    name: "Writhing Henge",
    type: "Power",
    id: "ID_FMP_POWER_12331",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12331",
    categories: ["Writhing Henge", "ID_FMP_POWER_12331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
