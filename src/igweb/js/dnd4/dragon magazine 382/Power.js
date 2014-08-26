define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Allied Terrain"] = new engine.RulesElement({
    name: "Allied Terrain",
    type: "Power",
    id: "ID_FMP_POWER_10393",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10393",
    categories: ["Allied Terrain", "ID_FMP_POWER_10393", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_539", "Primal Mapper", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Chastisement"] = new engine.RulesElement({
    name: "Arcane Chastisement",
    type: "Power",
    id: "ID_FMP_POWER_10423",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10423",
    categories: ["Arcane Chastisement", "ID_FMP_POWER_10423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Assault"] = new engine.RulesElement({
    name: "Armor of Assault",
    type: "Power",
    id: "ID_FMP_POWER_10437",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10437",
    categories: ["Armor of Assault", "ID_FMP_POWER_10437", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Shackles"] = new engine.RulesElement({
    name: "Avenging Shackles",
    type: "Power",
    id: "ID_FMP_POWER_10401",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10401",
    categories: ["Avenging Shackles", "ID_FMP_POWER_10401", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Battering Shield"] = new engine.RulesElement({
    name: "Battering Shield",
    type: "Power",
    id: "ID_FMP_POWER_10342",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10342",
    categories: ["Battering Shield", "ID_FMP_POWER_10342", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Fury Stance"] = new engine.RulesElement({
    name: "Battle Fury Stance",
    type: "Power",
    id: "ID_FMP_POWER_10333",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10333",
    categories: ["Battle Fury Stance", "ID_FMP_POWER_10333", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Repulsion"] = new engine.RulesElement({
    name: "Blade of Repulsion",
    type: "Power",
    id: "ID_FMP_POWER_10406",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10406",
    categories: ["Blade of Repulsion", "ID_FMP_POWER_10406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blades of Fiery Wrath"] = new engine.RulesElement({
    name: "Blades of Fiery Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10429",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10429",
    categories: ["Blades of Fiery Wrath", "ID_FMP_POWER_10429", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blasphemous Utterance"] = new engine.RulesElement({
    name: "Blasphemous Utterance",
    type: "Power",
    id: "ID_FMP_POWER_10386",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10386",
    categories: ["Blasphemous Utterance", "ID_FMP_POWER_10386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Assailant"] = new engine.RulesElement({
    name: "Blinding Assailant",
    type: "Power",
    id: "ID_FMP_POWER_10357",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10357",
    categories: ["Blinding Assailant", "ID_FMP_POWER_10357", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_532", "Darkening Blade", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blistering Torrent"] = new engine.RulesElement({
    name: "Blistering Torrent",
    type: "Power",
    id: "ID_FMP_POWER_10381",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10381",
    categories: ["Blistering Torrent", "ID_FMP_POWER_10381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Bodyguard's Stance"] = new engine.RulesElement({
    name: "Bodyguard's Stance",
    type: "Power",
    id: "ID_FMP_POWER_10335",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10335",
    categories: ["Bodyguard's Stance", "ID_FMP_POWER_10335", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Brand on the Soul"] = new engine.RulesElement({
    name: "Brand on the Soul",
    type: "Power",
    id: "ID_FMP_POWER_10416",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10416",
    categories: ["Brand on the Soul", "ID_FMP_POWER_10416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Brimstone Caress"] = new engine.RulesElement({
    name: "Brimstone Caress",
    type: "Power",
    id: "ID_FMP_POWER_10385",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10385",
    categories: ["Brimstone Caress", "ID_FMP_POWER_10385", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Charm of Hearts"] = new engine.RulesElement({
    name: "Charm of Hearts",
    type: "Power",
    id: "ID_FMP_POWER_10351",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10351",
    categories: ["Charm of Hearts", "ID_FMP_POWER_10351", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Circle of Protection"] = new engine.RulesElement({
    name: "Circle of Protection",
    type: "Power",
    id: "ID_FMP_POWER_10422",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10422",
    categories: ["Circle of Protection", "ID_FMP_POWER_10422", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Conduit of Ice"] = new engine.RulesElement({
    name: "Conduit of Ice",
    type: "Power",
    id: "ID_FMP_POWER_10417",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10417",
    categories: ["Conduit of Ice", "ID_FMP_POWER_10417", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Covenant of Repentance"] = new engine.RulesElement({
    name: "Covenant of Repentance",
    type: "Power",
    id: "ID_FMP_POWER_10415",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10415",
    categories: ["Covenant of Repentance", "ID_FMP_POWER_10415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Necrotism"] = new engine.RulesElement({
    name: "Crushing Necrotism",
    type: "Power",
    id: "ID_FMP_POWER_10427",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10427",
    categories: ["Crushing Necrotism", "ID_FMP_POWER_10427", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Defiant Shield"] = new engine.RulesElement({
    name: "Defiant Shield",
    type: "Power",
    id: "ID_FMP_POWER_10339",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10339",
    categories: ["Defiant Shield", "ID_FMP_POWER_10339", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Deflecting Shield"] = new engine.RulesElement({
    name: "Deflecting Shield",
    type: "Power",
    id: "ID_FMP_POWER_10334",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10334",
    categories: ["Deflecting Shield", "ID_FMP_POWER_10334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Destructive Power"] = new engine.RulesElement({
    name: "Destructive Power",
    type: "Power",
    id: "ID_FMP_POWER_10343",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10343",
    categories: ["Destructive Power", "ID_FMP_POWER_10343", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Echoes"] = new engine.RulesElement({
    name: "Dimensional Echoes",
    type: "Power",
    id: "ID_FMP_POWER_10433",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10433",
    categories: ["Dimensional Echoes", "ID_FMP_POWER_10433", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Familiar Incantation"] = new engine.RulesElement({
    name: "Dire Familiar Incantation",
    type: "Power",
    id: "ID_FMP_POWER_10426",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10426",
    categories: ["Dire Familiar Incantation", "ID_FMP_POWER_10426", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Diving Fin"] = new engine.RulesElement({
    name: "Diving Fin",
    type: "Power",
    id: "ID_FMP_POWER_10373",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10373",
    categories: ["Diving Fin", "ID_FMP_POWER_10373", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Drow Ecclesiastic"] = new engine.RulesElement({
    name: "Drow Ecclesiastic",
    type: "Power",
    id: "ID_FMP_POWER_10395",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10395",
    categories: ["Drow Ecclesiastic", "ID_FMP_POWER_10395", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Echoes of Sword Magic"] = new engine.RulesElement({
    name: "Echoes of Sword Magic",
    type: "Power",
    id: "ID_FMP_POWER_10430",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10430",
    categories: ["Echoes of Sword Magic", "ID_FMP_POWER_10430", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Entrapping Shield"] = new engine.RulesElement({
    name: "Entrapping Shield",
    type: "Power",
    id: "ID_FMP_POWER_10338",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10338",
    categories: ["Entrapping Shield", "ID_FMP_POWER_10338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Evil Expulsion"] = new engine.RulesElement({
    name: "Evil Expulsion",
    type: "Power",
    id: "ID_FMP_POWER_10387",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10387",
    categories: ["Evil Expulsion", "ID_FMP_POWER_10387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Power"] = new engine.RulesElement({
    name: "Explosive Power",
    type: "Power",
    id: "ID_FMP_POWER_10344",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10344",
    categories: ["Explosive Power", "ID_FMP_POWER_10344", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Familiar Harrier"] = new engine.RulesElement({
    name: "Familiar Harrier",
    type: "Power",
    id: "ID_FMP_POWER_10418",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10418",
    categories: ["Familiar Harrier", "ID_FMP_POWER_10418", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Familiar Shape"] = new engine.RulesElement({
    name: "Familiar Shape",
    type: "Power",
    id: "ID_FMP_POWER_10424",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10424",
    categories: ["Familiar Shape", "ID_FMP_POWER_10424", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Familiar's Call"] = new engine.RulesElement({
    name: "Familiar's Call",
    type: "Power",
    id: "ID_FMP_POWER_10420",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10420",
    categories: ["Familiar's Call", "ID_FMP_POWER_10420", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fate's Frayed Thread"] = new engine.RulesElement({
    name: "Fate's Frayed Thread",
    type: "Power",
    id: "ID_FMP_POWER_10352",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10352",
    categories: ["Fate's Frayed Thread", "ID_FMP_POWER_10352", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Power"] = new engine.RulesElement({
    name: "Forceful Power",
    type: "Power",
    id: "ID_FMP_POWER_10345",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10345",
    categories: ["Forceful Power", "ID_FMP_POWER_10345", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Glaring Admonition"] = new engine.RulesElement({
    name: "Glaring Admonition",
    type: "Power",
    id: "ID_FMP_POWER_10404",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10404",
    categories: ["Glaring Admonition", "ID_FMP_POWER_10404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Gloaming Shroud"] = new engine.RulesElement({
    name: "Gloaming Shroud",
    type: "Power",
    id: "ID_FMP_POWER_10358",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10358",
    categories: ["Gloaming Shroud", "ID_FMP_POWER_10358", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_532", "Darkening Blade", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Haunting Step"] = new engine.RulesElement({
    name: "Haunting Step",
    type: "Power",
    id: "ID_FMP_POWER_10409",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10409",
    categories: ["Haunting Step", "ID_FMP_POWER_10409", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Eruption"] = new engine.RulesElement({
    name: "Hellfire Eruption",
    type: "Power",
    id: "ID_FMP_POWER_10389",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10389",
    categories: ["Hellfire Eruption", "ID_FMP_POWER_10389", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hellsworn Blessing"] = new engine.RulesElement({
    name: "Hellsworn Blessing",
    type: "Power",
    id: "ID_FMP_POWER_10382",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10382",
    categories: ["Hellsworn Blessing", "ID_FMP_POWER_10382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Infectious Curse"] = new engine.RulesElement({
    name: "Infectious Curse",
    type: "Power",
    id: "ID_FMP_POWER_10384",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10384",
    categories: ["Infectious Curse", "ID_FMP_POWER_10384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Lifedrinking Covenant"] = new engine.RulesElement({
    name: "Lifedrinking Covenant",
    type: "Power",
    id: "ID_FMP_POWER_10407",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10407",
    categories: ["Lifedrinking Covenant", "ID_FMP_POWER_10407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lugos's Hunt"] = new engine.RulesElement({
    name: "Lugos's Hunt",
    type: "Power",
    id: "ID_FMP_POWER_10392",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10392",
    categories: ["Lugos's Hunt", "ID_FMP_POWER_10392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_539", "Primal Mapper", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Maiden's Waking"] = new engine.RulesElement({
    name: "Maiden's Waking",
    type: "Power",
    id: "ID_FMP_POWER_10355",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10355",
    categories: ["Maiden's Waking", "ID_FMP_POWER_10355", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Martial Redoubt"] = new engine.RulesElement({
    name: "Martial Redoubt",
    type: "Power",
    id: "ID_FMP_POWER_10337",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10337",
    categories: ["Martial Redoubt", "ID_FMP_POWER_10337", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Martial Supremacy"] = new engine.RulesElement({
    name: "Martial Supremacy",
    type: "Power",
    id: "ID_FMP_POWER_10341",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10341",
    categories: ["Martial Supremacy", "ID_FMP_POWER_10341", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Melting Pool"] = new engine.RulesElement({
    name: "Melting Pool",
    type: "Power",
    id: "ID_FMP_POWER_10419",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10419",
    categories: ["Melting Pool", "ID_FMP_POWER_10419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Mind-Numbing Presence"] = new engine.RulesElement({
    name: "Mind-Numbing Presence",
    type: "Power",
    id: "ID_FMP_POWER_10428",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10428",
    categories: ["Mind-Numbing Presence", "ID_FMP_POWER_10428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Moonstride"] = new engine.RulesElement({
    name: "Moonstride",
    type: "Power",
    id: "ID_FMP_POWER_10350",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10350",
    categories: ["Moonstride", "ID_FMP_POWER_10350", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Nimbus of Shielding"] = new engine.RulesElement({
    name: "Nimbus of Shielding",
    type: "Power",
    id: "ID_FMP_POWER_10435",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10435",
    categories: ["Nimbus of Shielding", "ID_FMP_POWER_10435", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["No Respite"] = new engine.RulesElement({
    name: "No Respite",
    type: "Power",
    id: "ID_FMP_POWER_10405",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10405",
    categories: ["No Respite", "ID_FMP_POWER_10405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of the Many"] = new engine.RulesElement({
    name: "Oath of the Many",
    type: "Power",
    id: "ID_FMP_POWER_10408",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10408",
    categories: ["Oath of the Many", "ID_FMP_POWER_10408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Urgency"] = new engine.RulesElement({
    name: "Oath of Urgency",
    type: "Power",
    id: "ID_FMP_POWER_10359",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10359",
    categories: ["Oath of Urgency", "ID_FMP_POWER_10359", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Pale Wolf's Lure"] = new engine.RulesElement({
    name: "Pale Wolf's Lure",
    type: "Power",
    id: "ID_FMP_POWER_10391",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10391",
    categories: ["Pale Wolf's Lure", "ID_FMP_POWER_10391", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_539", "Primal Mapper", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Penetrating Power"] = new engine.RulesElement({
    name: "Penetrating Power",
    type: "Power",
    id: "ID_FMP_POWER_10346",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10346",
    categories: ["Penetrating Power", "ID_FMP_POWER_10346", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Price of Ensnarement"] = new engine.RulesElement({
    name: "Price of Ensnarement",
    type: "Power",
    id: "ID_FMP_POWER_10434",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10434",
    categories: ["Price of Ensnarement", "ID_FMP_POWER_10434", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Boar"] = new engine.RulesElement({
    name: "Primal Boar",
    type: "Power",
    id: "ID_FMP_POWER_10374",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10374",
    categories: ["Primal Boar", "ID_FMP_POWER_10374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Crocodile"] = new engine.RulesElement({
    name: "Primal Crocodile",
    type: "Power",
    id: "ID_FMP_POWER_10375",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10375",
    categories: ["Primal Crocodile", "ID_FMP_POWER_10375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Lion"] = new engine.RulesElement({
    name: "Primal Lion",
    type: "Power",
    id: "ID_FMP_POWER_10376",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10376",
    categories: ["Primal Lion", "ID_FMP_POWER_10376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Panther"] = new engine.RulesElement({
    name: "Primal Panther",
    type: "Power",
    id: "ID_FMP_POWER_10377",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10377",
    categories: ["Primal Panther", "ID_FMP_POWER_10377", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Serpent"] = new engine.RulesElement({
    name: "Primal Serpent",
    type: "Power",
    id: "ID_FMP_POWER_10372",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10372",
    categories: ["Primal Serpent", "ID_FMP_POWER_10372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Spider"] = new engine.RulesElement({
    name: "Primal Spider",
    type: "Power",
    id: "ID_FMP_POWER_10370",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10370",
    categories: ["Primal Spider", "ID_FMP_POWER_10370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Beckoning"] = new engine.RulesElement({
    name: "Radiant Beckoning",
    type: "Power",
    id: "ID_FMP_POWER_10410",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10410",
    categories: ["Radiant Beckoning", "ID_FMP_POWER_10410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Stride"] = new engine.RulesElement({
    name: "Relentless Stride",
    type: "Power",
    id: "ID_FMP_POWER_10403",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10403",
    categories: ["Relentless Stride", "ID_FMP_POWER_10403", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Repelling Sphere"] = new engine.RulesElement({
    name: "Repelling Sphere",
    type: "Power",
    id: "ID_FMP_POWER_10421",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10421",
    categories: ["Repelling Sphere", "ID_FMP_POWER_10421", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Resolute Shield"] = new engine.RulesElement({
    name: "Resolute Shield",
    type: "Power",
    id: "ID_FMP_POWER_10331",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10331",
    categories: ["Resolute Shield", "ID_FMP_POWER_10331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Phrase"] = new engine.RulesElement({
    name: "Ruinous Phrase",
    type: "Power",
    id: "ID_FMP_POWER_10380",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10380",
    categories: ["Ruinous Phrase", "ID_FMP_POWER_10380", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Arena"] = new engine.RulesElement({
    name: "Sacred Arena",
    type: "Power",
    id: "ID_FMP_POWER_10411",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10411",
    categories: ["Sacred Arena", "ID_FMP_POWER_10411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Seeking Brand"] = new engine.RulesElement({
    name: "Seeking Brand",
    type: "Power",
    id: "ID_FMP_POWER_10400",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10400",
    categories: ["Seeking Brand", "ID_FMP_POWER_10400", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Seeking Power"] = new engine.RulesElement({
    name: "Seeking Power",
    type: "Power",
    id: "ID_FMP_POWER_10347",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10347",
    categories: ["Seeking Power", "ID_FMP_POWER_10347", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shape of the Traveler"] = new engine.RulesElement({
    name: "Shape of the Traveler",
    type: "Power",
    id: "ID_FMP_POWER_10399",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10399",
    categories: ["Shape of the Traveler", "ID_FMP_POWER_10399", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_540", "Traveler's Harlequin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Charmer"] = new engine.RulesElement({
    name: "Spider Charmer",
    type: "Power",
    id: "ID_FMP_POWER_10396",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10396",
    categories: ["Spider Charmer", "ID_FMP_POWER_10396", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Steelsworn Oath"] = new engine.RulesElement({
    name: "Steelsworn Oath",
    type: "Power",
    id: "ID_FMP_POWER_10402",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10402",
    categories: ["Steelsworn Oath", "ID_FMP_POWER_10402", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stride of the Gallant"] = new engine.RulesElement({
    name: "Stride of the Gallant",
    type: "Power",
    id: "ID_FMP_POWER_10353",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10353",
    categories: ["Stride of the Gallant", "ID_FMP_POWER_10353", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["The Lash's Bite"] = new engine.RulesElement({
    name: "The Lash's Bite",
    type: "Power",
    id: "ID_FMP_POWER_10378",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10378",
    categories: ["The Lash's Bite", "ID_FMP_POWER_10378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Theft of Alacrity"] = new engine.RulesElement({
    name: "Theft of Alacrity",
    type: "Power",
    id: "ID_FMP_POWER_10431",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10431",
    categories: ["Theft of Alacrity", "ID_FMP_POWER_10431", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Transformation"] = new engine.RulesElement({
    name: "Thunderous Transformation",
    type: "Power",
    id: "ID_FMP_POWER_10425",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10425",
    categories: ["Thunderous Transformation", "ID_FMP_POWER_10425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Traveler's Celerity"] = new engine.RulesElement({
    name: "Traveler's Celerity",
    type: "Power",
    id: "ID_FMP_POWER_10397",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10397",
    categories: ["Traveler's Celerity", "ID_FMP_POWER_10397", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Traveler's Mummery"] = new engine.RulesElement({
    name: "Traveler's Mummery",
    type: "Power",
    id: "ID_FMP_POWER_10398",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10398",
    categories: ["Traveler's Mummery", "ID_FMP_POWER_10398", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_540", "Traveler's Harlequin", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Treetop Lurker"] = new engine.RulesElement({
    name: "Treetop Lurker",
    type: "Power",
    id: "ID_FMP_POWER_10371",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10371",
    categories: ["Treetop Lurker", "ID_FMP_POWER_10371", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Unspeakable Bond"] = new engine.RulesElement({
    name: "Unspeakable Bond",
    type: "Power",
    id: "ID_FMP_POWER_10383",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10383",
    categories: ["Unspeakable Bond", "ID_FMP_POWER_10383", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Vanishing Cut"] = new engine.RulesElement({
    name: "Vanishing Cut",
    type: "Power",
    id: "ID_FMP_POWER_10356",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10356",
    categories: ["Vanishing Cut", "ID_FMP_POWER_10356", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_532", "Darkening Blade", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vile Brand"] = new engine.RulesElement({
    name: "Vile Brand",
    type: "Power",
    id: "ID_FMP_POWER_10379",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10379",
    categories: ["Vile Brand", "ID_FMP_POWER_10379", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vile Resonance"] = new engine.RulesElement({
    name: "Vile Resonance",
    type: "Power",
    id: "ID_FMP_POWER_10388",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10388",
    categories: ["Vile Resonance", "ID_FMP_POWER_10388", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon Master's Gambit"] = new engine.RulesElement({
    name: "Weapon Master's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_10336",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10336",
    categories: ["Weapon Master's Gambit", "ID_FMP_POWER_10336", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon Master's Strike"] = new engine.RulesElement({
    name: "Weapon Master's Strike",
    type: "Power",
    id: "ID_FMP_POWER_10332",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10332",
    categories: ["Weapon Master's Strike", "ID_FMP_POWER_10332", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon Master's Tactics"] = new engine.RulesElement({
    name: "Weapon Master's Tactics",
    type: "Power",
    id: "ID_FMP_POWER_10340",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10340",
    categories: ["Weapon Master's Tactics", "ID_FMP_POWER_10340", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Pursuit"] = new engine.RulesElement({
    name: "Wings of Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_10412",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10412",
    categories: ["Wings of Pursuit", "ID_FMP_POWER_10412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10413"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wings of Pursuit Flight"] = new engine.RulesElement({
    name: "Wings of Pursuit Flight",
    type: "Power",
    id: "ID_FMP_POWER_10413",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10413",
    categories: ["Wings of Pursuit Flight", "ID_FMP_POWER_10413", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Witch's Reversal"] = new engine.RulesElement({
    name: "Witch's Reversal",
    type: "Power",
    id: "ID_FMP_POWER_10354",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10354",
    categories: ["Witch's Reversal", "ID_FMP_POWER_10354", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
