define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Abjure Undead"] = new engine.RulesElement({
    name: "Abjure Undead",
    type: "Power",
    id: "ID_FMP_POWER_5330",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5330",
    categories: ["Abjure Undead", "ID_FMP_POWER_5330", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_129", "Avenger"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Orb"] = new engine.RulesElement({
    name: "Acid Orb",
    type: "Power",
    id: "ID_FMP_POWER_5259",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5259",
    categories: ["Acid Orb", "ID_FMP_POWER_5259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Acidic Implantation"] = new engine.RulesElement({
    name: "Acidic Implantation",
    type: "Power",
    id: "ID_FMP_POWER_5272",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5272",
    categories: ["Acidic Implantation", "ID_FMP_POWER_5272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Adamantine Echo"] = new engine.RulesElement({
    name: "Adamantine Echo",
    type: "Power",
    id: "ID_FMP_POWER_3769",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3769",
    categories: ["Adamantine Echo", "ID_FMP_POWER_3769", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Adversarial Song"] = new engine.RulesElement({
    name: "Adversarial Song",
    type: "Power",
    id: "ID_FMP_POWER_2424",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2424",
    categories: ["Adversarial Song", "ID_FMP_POWER_2424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Allegro"] = new engine.RulesElement({
    name: "Allegro",
    type: "Power",
    id: "ID_FMP_POWER_2372",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2372",
    categories: ["Allegro", "ID_FMP_POWER_2372", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Ancient Warlord's Inspiration"] = new engine.RulesElement({
    name: "Ancient Warlord's Inspiration",
    type: "Power",
    id: "ID_FMP_POWER_5401",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5401",
    categories: ["Ancient Warlord's Inspiration", "ID_FMP_POWER_5401", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Alacrity"] = new engine.RulesElement({
    name: "Angelic Alacrity",
    type: "Power",
    id: "ID_FMP_POWER_5334",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5334",
    categories: ["Angelic Alacrity", "ID_FMP_POWER_5334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Blades"] = new engine.RulesElement({
    name: "Angelic Blades",
    type: "Power",
    id: "ID_FMP_POWER_5509",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5509",
    categories: ["Angelic Blades", "ID_FMP_POWER_5509", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_270", "Angelic Aspect", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Echelon"] = new engine.RulesElement({
    name: "Angelic Echelon",
    type: "Power",
    id: "ID_FMP_POWER_2856",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2856",
    categories: ["Angelic Echelon", "ID_FMP_POWER_2856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Visage"] = new engine.RulesElement({
    name: "Angelic Visage",
    type: "Power",
    id: "ID_FMP_POWER_2886",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2886",
    categories: ["Angelic Visage", "ID_FMP_POWER_2886", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Anthem of the First Dawn"] = new engine.RulesElement({
    name: "Anthem of the First Dawn",
    type: "Power",
    id: "ID_FMP_POWER_2859",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2859",
    categories: ["Anthem of the First Dawn", "ID_FMP_POWER_2859", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Anyspell"] = new engine.RulesElement({
    name: "Anyspell",
    type: "Power",
    id: "ID_FMP_POWER_5020",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5020",
    categories: ["Anyspell", "ID_FMP_POWER_5020", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_262", "Student of the Seven", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Empowerment"] = new engine.RulesElement({
    name: "Arcane Empowerment",
    type: "Power",
    id: "ID_FMP_POWER_5275",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5275",
    categories: ["Arcane Empowerment", "ID_FMP_POWER_5275", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Prodigy"] = new engine.RulesElement({
    name: "Arcane Prodigy",
    type: "Power",
    id: "ID_FMP_POWER_9782",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9782",
    categories: ["Arcane Prodigy", "ID_FMP_POWER_9782", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Arcing Throw"] = new engine.RulesElement({
    name: "Arcing Throw",
    type: "Power",
    id: "ID_FMP_POWER_6575",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6575",
    categories: ["Arcing Throw", "ID_FMP_POWER_6575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of the Wild"] = new engine.RulesElement({
    name: "Armor of the Wild",
    type: "Power",
    id: "ID_FMP_POWER_2844",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2844",
    categories: ["Armor of the Wild", "ID_FMP_POWER_2844", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Wrath"] = new engine.RulesElement({
    name: "Armor of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5184",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5184",
    categories: ["Armor of Wrath", "ID_FMP_POWER_5184", "ID_FMP_CLASS_FEATURE_1266", "Covenant of Wrath", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Ash Hammer Rage"] = new engine.RulesElement({
    name: "Ash Hammer Rage",
    type: "Power",
    id: "ID_FMP_POWER_4970",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4970",
    categories: ["Ash Hammer Rage", "ID_FMP_POWER_4970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Agility"] = new engine.RulesElement({
    name: "Aspect of Agility",
    type: "Power",
    id: "ID_FMP_POWER_3656",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3656",
    categories: ["Aspect of Agility", "ID_FMP_POWER_3656", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Awe"] = new engine.RulesElement({
    name: "Aspect of Awe",
    type: "Power",
    id: "ID_FMP_POWER_3641",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3641",
    categories: ["Aspect of Awe", "ID_FMP_POWER_3641", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Death"] = new engine.RulesElement({
    name: "Aspect of Death",
    type: "Power",
    id: "ID_FMP_POWER_3643",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3643",
    categories: ["Aspect of Death", "ID_FMP_POWER_3643", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Fury"] = new engine.RulesElement({
    name: "Aspect of Fury",
    type: "Power",
    id: "ID_FMP_POWER_3640",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3640",
    categories: ["Aspect of Fury", "ID_FMP_POWER_3640", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Might"] = new engine.RulesElement({
    name: "Aspect of Might",
    type: "Power",
    id: "ID_FMP_POWER_3592",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3592",
    categories: ["Aspect of Might", "ID_FMP_POWER_3592", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Speed"] = new engine.RulesElement({
    name: "Aspect of Speed",
    type: "Power",
    id: "ID_FMP_POWER_3636",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3636",
    categories: ["Aspect of Speed", "ID_FMP_POWER_3636", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Terror"] = new engine.RulesElement({
    name: "Aspect of Terror",
    type: "Power",
    id: "ID_FMP_POWER_3642",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3642",
    categories: ["Aspect of Terror", "ID_FMP_POWER_3642", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Charge"] = new engine.RulesElement({
    name: "Astral Charge",
    type: "Power",
    id: "ID_FMP_POWER_3541",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3541",
    categories: ["Astral Charge", "ID_FMP_POWER_3541", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Cloak"] = new engine.RulesElement({
    name: "Astral Cloak",
    type: "Power",
    id: "ID_FMP_POWER_3661",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3661",
    categories: ["Astral Cloak", "ID_FMP_POWER_3661", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Fury"] = new engine.RulesElement({
    name: "Astral Fury",
    type: "Power",
    id: "ID_FMP_POWER_3529",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3529",
    categories: ["Astral Fury", "ID_FMP_POWER_3529", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Step"] = new engine.RulesElement({
    name: "Astral Step",
    type: "Power",
    id: "ID_FMP_POWER_2883",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2883",
    categories: ["Astral Step", "ID_FMP_POWER_2883", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Tempest"] = new engine.RulesElement({
    name: "Astral Tempest",
    type: "Power",
    id: "ID_FMP_POWER_3347",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3347",
    categories: ["Astral Tempest", "ID_FMP_POWER_3347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Terror"] = new engine.RulesElement({
    name: "Astral Terror",
    type: "Power",
    id: "ID_FMP_POWER_5187",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5187",
    categories: ["Astral Terror", "ID_FMP_POWER_5187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Avalanche Assault"] = new engine.RulesElement({
    name: "Avalanche Assault",
    type: "Power",
    id: "ID_FMP_POWER_5494",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5494",
    categories: ["Avalanche Assault", "ID_FMP_POWER_5494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_251", "Stoneblessed", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Avalanche Strike"] = new engine.RulesElement({
    name: "Avalanche Strike",
    type: "Power",
    id: "ID_FMP_POWER_4821",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4821",
    categories: ["Avalanche Strike", "ID_FMP_POWER_4821", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Avenger's Readiness"] = new engine.RulesElement({
    name: "Avenger's Readiness",
    type: "Power",
    id: "ID_FMP_POWER_5342",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5342",
    categories: ["Avenger's Readiness", "ID_FMP_POWER_5342", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Avenger's Shield"] = new engine.RulesElement({
    name: "Avenger's Shield",
    type: "Power",
    id: "ID_FMP_POWER_2910",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2910",
    categories: ["Avenger's Shield", "ID_FMP_POWER_2910", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Echo"] = new engine.RulesElement({
    name: "Avenging Echo",
    type: "Power",
    id: "ID_FMP_POWER_2905",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2905",
    categories: ["Avenging Echo", "ID_FMP_POWER_2905", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Light"] = new engine.RulesElement({
    name: "Avenging Light",
    type: "Power",
    id: "ID_FMP_POWER_2847",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2847",
    categories: ["Avenging Light", "ID_FMP_POWER_2847", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Avenging Shadow"] = new engine.RulesElement({
    name: "Avenging Shadow",
    type: "Power",
    id: "ID_FMP_POWER_5364",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5364",
    categories: ["Avenging Shadow", "ID_FMP_POWER_5364", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_257", "Zealous Assassin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Winds"] = new engine.RulesElement({
    name: "Avenging Winds",
    type: "Power",
    id: "ID_FMP_POWER_3517",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3517",
    categories: ["Avenging Winds", "ID_FMP_POWER_3517", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Awaken the Forest"] = new engine.RulesElement({
    name: "Awaken the Forest",
    type: "Power",
    id: "ID_FMP_POWER_5182",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5182",
    categories: ["Awaken the Forest", "ID_FMP_POWER_5182", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_285", "Verdant Lord", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Eye of Judgment"] = new engine.RulesElement({
    name: "Baleful Eye of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_2872",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2872",
    categories: ["Baleful Eye of Judgment", "ID_FMP_POWER_2872", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Gaze of the Basilisk"] = new engine.RulesElement({
    name: "Baleful Gaze of the Basilisk",
    type: "Power",
    id: "ID_FMP_POWER_5297",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5297",
    categories: ["Baleful Gaze of the Basilisk", "ID_FMP_POWER_5297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Polymorph"] = new engine.RulesElement({
    name: "Baleful Polymorph",
    type: "Power",
    id: "ID_FMP_POWER_448",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=448",
    categories: ["Baleful Polymorph", "ID_FMP_POWER_448", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Barkskin"] = new engine.RulesElement({
    name: "Barkskin",
    type: "Power",
    id: "ID_FMP_POWER_5045",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5045",
    categories: ["Barkskin", "ID_FMP_POWER_5045", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Battering Claws"] = new engine.RulesElement({
    name: "Battering Claws",
    type: "Power",
    id: "ID_FMP_POWER_5047",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5047",
    categories: ["Battering Claws", "ID_FMP_POWER_5047", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Chant"] = new engine.RulesElement({
    name: "Battle Chant",
    type: "Power",
    id: "ID_FMP_POWER_5030",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5030",
    categories: ["Battle Chant", "ID_FMP_POWER_5030", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_265", "War Chanter", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Bear Fang Defense"] = new engine.RulesElement({
    name: "Bear Fang Defense",
    type: "Power",
    id: "ID_FMP_POWER_5426",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5426",
    categories: ["Bear Fang Defense", "ID_FMP_POWER_5426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_276", "Great Bear Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bear's Endurance"] = new engine.RulesElement({
    name: "Bear's Endurance",
    type: "Power",
    id: "ID_FMP_POWER_5119",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5119",
    categories: ["Bear's Endurance", "ID_FMP_POWER_5119", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Bedazzling Orb"] = new engine.RulesElement({
    name: "Bedazzling Orb",
    type: "Power",
    id: "ID_FMP_POWER_5476",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5476",
    categories: ["Bedazzling Orb", "ID_FMP_POWER_5476", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_245", "Fey Beguiler", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Bedazzling Orb") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Bedeviling Burst"] = new engine.RulesElement({
    name: "Bedeviling Burst",
    type: "Power",
    id: "ID_FMP_POWER_5262",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5262",
    categories: ["Bedeviling Burst", "ID_FMP_POWER_5262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Beguiling Bolt"] = new engine.RulesElement({
    name: "Beguiling Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5477",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5477",
    categories: ["Beguiling Bolt", "ID_FMP_POWER_5477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_245", "Fey Beguiler", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Beguiling Bolt") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Berserker's Shout"] = new engine.RulesElement({
    name: "Berserker's Shout",
    type: "Power",
    id: "ID_FMP_POWER_4967",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4967",
    categories: ["Berserker's Shout", "ID_FMP_POWER_4967", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Bestial Vigor"] = new engine.RulesElement({
    name: "Bestial Vigor",
    type: "Power",
    id: "ID_FMP_POWER_4979",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4979",
    categories: ["Bestial Vigor", "ID_FMP_POWER_4979", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_258", "Bear Warrior", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Invocation of Chains"] = new engine.RulesElement({
    name: "Binding Invocation of Chains",
    type: "Power",
    id: "ID_FMP_POWER_5189",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5189",
    categories: ["Binding Invocation of Chains", "ID_FMP_POWER_5189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Black Breath"] = new engine.RulesElement({
    name: "Black Breath",
    type: "Power",
    id: "ID_FMP_POWER_5305",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5305",
    categories: ["Black Breath", "ID_FMP_POWER_5305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Black Dragon Rage"] = new engine.RulesElement({
    name: "Black Dragon Rage",
    type: "Power",
    id: "ID_FMP_POWER_4949",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4949",
    categories: ["Black Dragon Rage", "ID_FMP_POWER_4949", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Black Harbinger"] = new engine.RulesElement({
    name: "Black Harbinger",
    type: "Power",
    id: "ID_FMP_POWER_5051",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5051",
    categories: ["Black Harbinger", "ID_FMP_POWER_5051", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Blackfire Serpent"] = new engine.RulesElement({
    name: "Blackfire Serpent",
    type: "Power",
    id: "ID_FMP_POWER_5298",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5298",
    categories: ["Blackfire Serpent", "ID_FMP_POWER_5298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of the Zealot"] = new engine.RulesElement({
    name: "Blade of the Zealot",
    type: "Power",
    id: "ID_FMP_POWER_5365",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5365",
    categories: ["Blade of the Zealot", "ID_FMP_POWER_5365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_257", "Zealous Assassin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Vengeance"] = new engine.RulesElement({
    name: "Blade of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5192",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5192",
    categories: ["Blade of Vengeance", "ID_FMP_POWER_5192", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7308"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Blade of Vengeance Attack"] = new engine.RulesElement({
    name: "Blade of Vengeance Attack",
    type: "Power",
    id: "ID_FMP_POWER_7308",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7308",
    categories: ["Blade of Vengeance Attack", "ID_FMP_POWER_7308", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Step"] = new engine.RulesElement({
    name: "Blade Step",
    type: "Power",
    id: "ID_FMP_POWER_3523",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3523",
    categories: ["Blade Step", "ID_FMP_POWER_3523", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Sweep"] = new engine.RulesElement({
    name: "Blade Sweep",
    type: "Power",
    id: "ID_FMP_POWER_4829",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4829",
    categories: ["Blade Sweep", "ID_FMP_POWER_4829", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Whirlwind"] = new engine.RulesElement({
    name: "Blade Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_4841",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4841",
    categories: ["Blade Whirlwind", "ID_FMP_POWER_4841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Blades of Astral Fire"] = new engine.RulesElement({
    name: "Blades of Astral Fire",
    type: "Power",
    id: "ID_FMP_POWER_5188",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5188",
    categories: ["Blades of Astral Fire", "ID_FMP_POWER_5188", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of the Iron Tree"] = new engine.RulesElement({
    name: "Blessing of the Iron Tree",
    type: "Power",
    id: "ID_FMP_POWER_3836",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3836",
    categories: ["Blessing of the Iron Tree", "ID_FMP_POWER_3836", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of the Seven Winds"] = new engine.RulesElement({
    name: "Blessing of the Seven Winds",
    type: "Power",
    id: "ID_FMP_POWER_3876",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3876",
    categories: ["Blessing of the Seven Winds", "ID_FMP_POWER_3876", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of Vengeance"] = new engine.RulesElement({
    name: "Blessing of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5336",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5336",
    categories: ["Blessing of Vengeance", "ID_FMP_POWER_5336", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Blizzard"] = new engine.RulesElement({
    name: "Blinding Blizzard",
    type: "Power",
    id: "ID_FMP_POWER_5077",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5077",
    categories: ["Blinding Blizzard", "ID_FMP_POWER_5077", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7307"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Blinding Blizzard Attack"] = new engine.RulesElement({
    name: "Blinding Blizzard Attack",
    type: "Power",
    id: "ID_FMP_POWER_7307",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7307",
    categories: ["Blinding Blizzard Attack", "ID_FMP_POWER_7307", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Talons"] = new engine.RulesElement({
    name: "Blinding Talons",
    type: "Power",
    id: "ID_FMP_POWER_5090",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5090",
    categories: ["Blinding Talons", "ID_FMP_POWER_5090", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_269", "Sky Hunter", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Ward"] = new engine.RulesElement({
    name: "Blinding Ward",
    type: "Power",
    id: "ID_FMP_POWER_5203",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5203",
    categories: ["Blinding Ward", "ID_FMP_POWER_5203", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_272", "Flame of Hope", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blink Zone"] = new engine.RulesElement({
    name: "Blink Zone",
    type: "Power",
    id: "ID_FMP_POWER_2402",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2402",
    categories: ["Blink Zone", "ID_FMP_POWER_2402", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Blizzard Strike"] = new engine.RulesElement({
    name: "Blizzard Strike",
    type: "Power",
    id: "ID_FMP_POWER_5150",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5150",
    categories: ["Blizzard Strike", "ID_FMP_POWER_5150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Debt"] = new engine.RulesElement({
    name: "Blood Debt",
    type: "Power",
    id: "ID_FMP_POWER_3302",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3302",
    categories: ["Blood Debt", "ID_FMP_POWER_3302", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Hunger Rage"] = new engine.RulesElement({
    name: "Blood Hunger Rage",
    type: "Power",
    id: "ID_FMP_POWER_4855",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4855",
    categories: ["Blood Hunger Rage", "ID_FMP_POWER_4855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Moon Frenzy"] = new engine.RulesElement({
    name: "Blood Moon Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_5081",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5081",
    categories: ["Blood Moon Frenzy", "ID_FMP_POWER_5081", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_266", "Blood Moon Stalker", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Reaper Spirit"] = new engine.RulesElement({
    name: "Blood Reaper Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3820",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3820",
    categories: ["Blood Reaper Spirit", "ID_FMP_POWER_3820", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Strike"] = new engine.RulesElement({
    name: "Blood Strike",
    type: "Power",
    id: "ID_FMP_POWER_4939",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4939",
    categories: ["Blood Strike", "ID_FMP_POWER_4939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Wrath"] = new engine.RulesElement({
    name: "Blood Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5503",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5503",
    categories: ["Blood Wrath", "ID_FMP_POWER_5503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodhunt Rage"] = new engine.RulesElement({
    name: "Bloodhunt Rage",
    type: "Power",
    id: "ID_FMP_POWER_4824",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4824",
    categories: ["Bloodhunt Rage", "ID_FMP_POWER_4824", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodied Greatness"] = new engine.RulesElement({
    name: "Bloodied Greatness",
    type: "Power",
    id: "ID_FMP_POWER_5475",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5475",
    categories: ["Bloodied Greatness", "ID_FMP_POWER_5475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_241", "Adroit Explorer", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodletting"] = new engine.RulesElement({
    name: "Bloodletting",
    type: "Power",
    id: "ID_FMP_POWER_4933",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4933",
    categories: ["Bloodletting", "ID_FMP_POWER_4933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodwrath Strike"] = new engine.RulesElement({
    name: "Bloodwrath Strike",
    type: "Power",
    id: "ID_FMP_POWER_5172",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5172",
    categories: ["Bloodwrath Strike", "ID_FMP_POWER_5172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_282", "Bloodwrath Guardian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blue Dragon Rage"] = new engine.RulesElement({
    name: "Blue Dragon Rage",
    type: "Power",
    id: "ID_FMP_POWER_4971",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4971",
    categories: ["Blue Dragon Rage", "ID_FMP_POWER_4971", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Blunder"] = new engine.RulesElement({
    name: "Blunder",
    type: "Power",
    id: "ID_FMP_POWER_2347",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2347",
    categories: ["Blunder", "ID_FMP_POWER_2347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bolt of the Rising Sun"] = new engine.RulesElement({
    name: "Bolt of the Rising Sun",
    type: "Power",
    id: "ID_FMP_POWER_2870",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2870",
    categories: ["Bolt of the Rising Sun", "ID_FMP_POWER_2870", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Bolts of Bedevilment"] = new engine.RulesElement({
    name: "Bolts of Bedevilment",
    type: "Power",
    id: "ID_FMP_POWER_5495",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5495",
    categories: ["Bolts of Bedevilment", "ID_FMP_POWER_5495", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_252", "Turathi Highborn", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Bolts of Bedevilment") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Bond of Destiny"] = new engine.RulesElement({
    name: "Bond of Destiny",
    type: "Power",
    id: "ID_FMP_POWER_5352",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5352",
    categories: ["Bond of Destiny", "ID_FMP_POWER_5352", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Foresight"] = new engine.RulesElement({
    name: "Bond of Foresight",
    type: "Power",
    id: "ID_FMP_POWER_5340",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5340",
    categories: ["Bond of Foresight", "ID_FMP_POWER_5340", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Justice"] = new engine.RulesElement({
    name: "Bond of Justice",
    type: "Power",
    id: "ID_FMP_POWER_5350",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5350",
    categories: ["Bond of Justice", "ID_FMP_POWER_5350", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Malediction"] = new engine.RulesElement({
    name: "Bond of Malediction",
    type: "Power",
    id: "ID_FMP_POWER_5016",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5016",
    categories: ["Bond of Malediction", "ID_FMP_POWER_5016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Pursuit"] = new engine.RulesElement({
    name: "Bond of Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_5332",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5332",
    categories: ["Bond of Pursuit", "ID_FMP_POWER_5332", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Retribution"] = new engine.RulesElement({
    name: "Bond of Retribution",
    type: "Power",
    id: "ID_FMP_POWER_5333",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5333",
    categories: ["Bond of Retribution", "ID_FMP_POWER_5333", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of the Sacred Duel"] = new engine.RulesElement({
    name: "Bond of the Sacred Duel",
    type: "Power",
    id: "ID_FMP_POWER_5346",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5346",
    categories: ["Bond of the Sacred Duel", "ID_FMP_POWER_5346", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bonds of Life"] = new engine.RulesElement({
    name: "Bonds of Life",
    type: "Power",
    id: "ID_FMP_POWER_5498",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5498",
    categories: ["Bonds of Life", "ID_FMP_POWER_5498", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_253", "Twilight Guardian", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Bonds of Life") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Bonds of the Clan"] = new engine.RulesElement({
    name: "Bonds of the Clan",
    type: "Power",
    id: "ID_FMP_POWER_3834",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3834",
    categories: ["Bonds of the Clan", "ID_FMP_POWER_3834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Bonebreaker"] = new engine.RulesElement({
    name: "Bonebreaker",
    type: "Power",
    id: "ID_FMP_POWER_4972",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4972",
    categories: ["Bonebreaker", "ID_FMP_POWER_4972", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bounty of Life"] = new engine.RulesElement({
    name: "Bounty of Life",
    type: "Power",
    id: "ID_FMP_POWER_3860",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3860",
    categories: ["Bounty of Life", "ID_FMP_POWER_3860", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of the Desert Dragon"] = new engine.RulesElement({
    name: "Breath of the Desert Dragon",
    type: "Power",
    id: "ID_FMP_POWER_3843",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3843",
    categories: ["Breath of the Desert Dragon", "ID_FMP_POWER_3843", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of the Dragon Soul"] = new engine.RulesElement({
    name: "Breath of the Dragon Soul",
    type: "Power",
    id: "ID_FMP_POWER_5325",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5325",
    categories: ["Breath of the Dragon Soul", "ID_FMP_POWER_5325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_280", "Dragonsoul Heir", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of Winter"] = new engine.RulesElement({
    name: "Breath of Winter",
    type: "Power",
    id: "ID_FMP_POWER_5295",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5295",
    categories: ["Breath of Winter", "ID_FMP_POWER_5295", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Bulwark of Defiance"] = new engine.RulesElement({
    name: "Bulwark of Defiance",
    type: "Power",
    id: "ID_FMP_POWER_3665",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3665",
    categories: ["Bulwark of Defiance", "ID_FMP_POWER_3665", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Spray"] = new engine.RulesElement({
    name: "Burning Spray",
    type: "Power",
    id: "ID_FMP_POWER_3701",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3701",
    categories: ["Burning Spray", "ID_FMP_POWER_3701", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burst of Earth's Fury"] = new engine.RulesElement({
    name: "Burst of Earth's Fury",
    type: "Power",
    id: "ID_FMP_POWER_5111",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5111",
    categories: ["Burst of Earth's Fury", "ID_FMP_POWER_5111", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Butcher's Feast"] = new engine.RulesElement({
    name: "Butcher's Feast",
    type: "Power",
    id: "ID_FMP_POWER_4974",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4974",
    categories: ["Butcher's Feast", "ID_FMP_POWER_4974", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Call Forth the Harvest"] = new engine.RulesElement({
    name: "Call Forth the Harvest",
    type: "Power",
    id: "ID_FMP_POWER_5146",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5146",
    categories: ["Call Forth the Harvest", "ID_FMP_POWER_5146", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Call Lightning"] = new engine.RulesElement({
    name: "Call Lightning",
    type: "Power",
    id: "ID_FMP_POWER_2689",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2689",
    categories: ["Call Lightning", "ID_FMP_POWER_2689", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Call Lightning Storm"] = new engine.RulesElement({
    name: "Call Lightning Storm",
    type: "Power",
    id: "ID_FMP_POWER_6576",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6576",
    categories: ["Call Lightning Storm", "ID_FMP_POWER_6576", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Call of the Beast"] = new engine.RulesElement({
    name: "Call of the Beast",
    type: "Power",
    id: "ID_FMP_POWER_5033",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5033",
    categories: ["Call of the Beast", "ID_FMP_POWER_5033", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Call Spirit Companion"] = new engine.RulesElement({
    name: "Call Spirit Companion",
    type: "Power",
    id: "ID_FMP_POWER_6515",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6515",
    categories: ["Call Spirit Companion", "ID_FMP_POWER_6515"]
  });
  byID[te.id] = te;
  
  te = Power["Call the Dead"] = new engine.RulesElement({
    name: "Call the Dead",
    type: "Power",
    id: "ID_FMP_POWER_3856",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3856",
    categories: ["Call the Dead", "ID_FMP_POWER_3856", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Ancestral Warrior"] = new engine.RulesElement({
    name: "Call to the Ancestral Warrior",
    type: "Power",
    id: "ID_FMP_POWER_3786",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3786",
    categories: ["Call to the Ancestral Warrior", "ID_FMP_POWER_3786", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Ancient Defender"] = new engine.RulesElement({
    name: "Call to the Ancient Defender",
    type: "Power",
    id: "ID_FMP_POWER_3784",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3784",
    categories: ["Call to the Ancient Defender", "ID_FMP_POWER_3784", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Blood Dancer"] = new engine.RulesElement({
    name: "Call to the Blood Dancer",
    type: "Power",
    id: "ID_FMP_POWER_3796",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3796",
    categories: ["Call to the Blood Dancer", "ID_FMP_POWER_3796", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Cleansing Fire"] = new engine.RulesElement({
    name: "Call to the Cleansing Fire",
    type: "Power",
    id: "ID_FMP_POWER_5416",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5416",
    categories: ["Call to the Cleansing Fire", "ID_FMP_POWER_5416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Great Bear"] = new engine.RulesElement({
    name: "Call to the Great Bear",
    type: "Power",
    id: "ID_FMP_POWER_5428",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5428",
    categories: ["Call to the Great Bear", "ID_FMP_POWER_5428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_276", "Great Bear Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Great Hunter"] = new engine.RulesElement({
    name: "Call to the Great Hunter",
    type: "Power",
    id: "ID_FMP_POWER_5417",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5417",
    categories: ["Call to the Great Hunter", "ID_FMP_POWER_5417", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Howling Storm"] = new engine.RulesElement({
    name: "Call to the Howling Storm",
    type: "Power",
    id: "ID_FMP_POWER_3795",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3795",
    categories: ["Call to the Howling Storm", "ID_FMP_POWER_3795", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Indomitable Defender"] = new engine.RulesElement({
    name: "Call to the Indomitable Defender",
    type: "Power",
    id: "ID_FMP_POWER_5405",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5405",
    categories: ["Call to the Indomitable Defender", "ID_FMP_POWER_5405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Lashing Behemoth"] = new engine.RulesElement({
    name: "Call to the Lashing Behemoth",
    type: "Power",
    id: "ID_FMP_POWER_5410",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5410",
    categories: ["Call to the Lashing Behemoth", "ID_FMP_POWER_5410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Laughing Fortune"] = new engine.RulesElement({
    name: "Call to the Laughing Fortune",
    type: "Power",
    id: "ID_FMP_POWER_5406",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5406",
    categories: ["Call to the Laughing Fortune", "ID_FMP_POWER_5406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Moon"] = new engine.RulesElement({
    name: "Call to the Moon",
    type: "Power",
    id: "ID_FMP_POWER_5484",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5484",
    categories: ["Call to the Moon", "ID_FMP_POWER_5484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_248", "Moonstalker", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Primal Protector"] = new engine.RulesElement({
    name: "Call to the Primal Protector",
    type: "Power",
    id: "ID_FMP_POWER_5414",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5414",
    categories: ["Call to the Primal Protector", "ID_FMP_POWER_5414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Relentless Hunter"] = new engine.RulesElement({
    name: "Call to the Relentless Hunter",
    type: "Power",
    id: "ID_FMP_POWER_5415",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5415",
    categories: ["Call to the Relentless Hunter", "ID_FMP_POWER_5415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Savage Elder"] = new engine.RulesElement({
    name: "Call to the Savage Elder",
    type: "Power",
    id: "ID_FMP_POWER_3789",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3789",
    categories: ["Call to the Savage Elder", "ID_FMP_POWER_3789", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Camouflage Cloak"] = new engine.RulesElement({
    name: "Camouflage Cloak",
    type: "Power",
    id: "ID_FMP_POWER_2730",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2730",
    categories: ["Camouflage Cloak", "ID_FMP_POWER_2730", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Cascade of Five Suns"] = new engine.RulesElement({
    name: "Cascade of Five Suns",
    type: "Power",
    id: "ID_FMP_POWER_3311",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3311",
    categories: ["Cascade of Five Suns", "ID_FMP_POWER_3311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Flames"] = new engine.RulesElement({
    name: "Cerulean Flames",
    type: "Power",
    id: "ID_FMP_POWER_3315",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3315",
    categories: ["Cerulean Flames", "ID_FMP_POWER_3315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Carceri"] = new engine.RulesElement({
    name: "Chains of Carceri",
    type: "Power",
    id: "ID_FMP_POWER_5191",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5191",
    categories: ["Chains of Carceri", "ID_FMP_POWER_5191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Death"] = new engine.RulesElement({
    name: "Chains of Death",
    type: "Power",
    id: "ID_FMP_POWER_5198",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5198",
    categories: ["Chains of Death", "ID_FMP_POWER_5198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_271", "Blightspeaker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Fire"] = new engine.RulesElement({
    name: "Chains of Fire",
    type: "Power",
    id: "ID_FMP_POWER_5284",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5284",
    categories: ["Chains of Fire", "ID_FMP_POWER_5284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Channel Endurance"] = new engine.RulesElement({
    name: "Channel Endurance",
    type: "Power",
    id: "ID_FMP_POWER_5343",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5343",
    categories: ["Channel Endurance", "ID_FMP_POWER_5343", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Chant of Sustenance"] = new engine.RulesElement({
    name: "Chant of Sustenance",
    type: "Power",
    id: "ID_FMP_POWER_5052",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5052",
    categories: ["Chant of Sustenance", "ID_FMP_POWER_5052", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Bolt"] = new engine.RulesElement({
    name: "Chaos Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5260",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5260",
    categories: ["Chaos Bolt", "ID_FMP_POWER_5260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Echoes"] = new engine.RulesElement({
    name: "Chaos Echoes",
    type: "Power",
    id: "ID_FMP_POWER_5292",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5292",
    categories: ["Chaos Echoes", "ID_FMP_POWER_5292", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Link"] = new engine.RulesElement({
    name: "Chaos Link",
    type: "Power",
    id: "ID_FMP_POWER_5281",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5281",
    categories: ["Chaos Link", "ID_FMP_POWER_5281", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Orbs"] = new engine.RulesElement({
    name: "Chaos Orbs",
    type: "Power",
    id: "ID_FMP_POWER_5306",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5306",
    categories: ["Chaos Orbs", "ID_FMP_POWER_5306", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Sanctuary"] = new engine.RulesElement({
    name: "Chaos Sanctuary",
    type: "Power",
    id: "ID_FMP_POWER_5293",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5293",
    categories: ["Chaos Sanctuary", "ID_FMP_POWER_5293", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Storm"] = new engine.RulesElement({
    name: "Chaos Storm",
    type: "Power",
    id: "ID_FMP_POWER_5278",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5278",
    categories: ["Chaos Storm", "ID_FMP_POWER_5278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Charger's Call"] = new engine.RulesElement({
    name: "Charger's Call",
    type: "Power",
    id: "ID_FMP_POWER_2785",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2785",
    categories: ["Charger's Call", "ID_FMP_POWER_2785", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Chill Wind"] = new engine.RulesElement({
    name: "Chill Wind",
    type: "Power",
    id: "ID_FMP_POWER_5034",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5034",
    categories: ["Chill Wind", "ID_FMP_POWER_5034", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Chorus of Recovery"] = new engine.RulesElement({
    name: "Chorus of Recovery",
    type: "Power",
    id: "ID_FMP_POWER_2403",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2403",
    categories: ["Chorus of Recovery", "ID_FMP_POWER_2403", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Chromatic Orb"] = new engine.RulesElement({
    name: "Chromatic Orb",
    type: "Power",
    id: "ID_FMP_POWER_1163",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1163",
    categories: ["Chromatic Orb", "ID_FMP_POWER_1163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Circle the Prey"] = new engine.RulesElement({
    name: "Circle the Prey",
    type: "Power",
    id: "ID_FMP_POWER_5486",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5486",
    categories: ["Circle the Prey", "ID_FMP_POWER_5486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_248", "Moonstalker", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Circle the Prey") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Claws of Retribution"] = new engine.RulesElement({
    name: "Claws of Retribution",
    type: "Power",
    id: "ID_FMP_POWER_5058",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5058",
    categories: ["Claws of Retribution", "ID_FMP_POWER_5058", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Earth"] = new engine.RulesElement({
    name: "Cleansing Earth",
    type: "Power",
    id: "ID_FMP_POWER_5142",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5142",
    categories: ["Cleansing Earth", "ID_FMP_POWER_5142", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Wind of the North"] = new engine.RulesElement({
    name: "Cleansing Wind of the North",
    type: "Power",
    id: "ID_FMP_POWER_3886",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3886",
    categories: ["Cleansing Wind of the North", "ID_FMP_POWER_3886", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Clever Trickster Spirit"] = new engine.RulesElement({
    name: "Clever Trickster Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3884",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3884",
    categories: ["Clever Trickster Spirit", "ID_FMP_POWER_3884", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Clinging Breath"] = new engine.RulesElement({
    name: "Clinging Breath",
    type: "Power",
    id: "ID_FMP_POWER_5489",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5489",
    categories: ["Clinging Breath", "ID_FMP_POWER_5489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_249", "Scion of Arkhosia", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Doom"] = new engine.RulesElement({
    name: "Cloak of Doom",
    type: "Power",
    id: "ID_FMP_POWER_5464",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5464",
    categories: ["Cloak of Doom", "ID_FMP_POWER_5464", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_288", "Harbinger of Doom", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Souls"] = new engine.RulesElement({
    name: "Cloud of Souls",
    type: "Power",
    id: "ID_FMP_POWER_5344",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5344",
    categories: ["Cloud of Souls", "ID_FMP_POWER_5344", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Coldfire Pillar"] = new engine.RulesElement({
    name: "Coldfire Pillar",
    type: "Power",
    id: "ID_FMP_POWER_5197",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5197",
    categories: ["Coldfire Pillar", "ID_FMP_POWER_5197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_270", "Angelic Aspect", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Combat Sprint"] = new engine.RulesElement({
    name: "Combat Sprint",
    type: "Power",
    id: "ID_FMP_POWER_4937",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4937",
    categories: ["Combat Sprint", "ID_FMP_POWER_4937", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Combat Surge"] = new engine.RulesElement({
    name: "Combat Surge",
    type: "Power",
    id: "ID_FMP_POWER_4945",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4945",
    categories: ["Combat Surge", "ID_FMP_POWER_4945", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Compel Attention"] = new engine.RulesElement({
    name: "Compel Attention",
    type: "Power",
    id: "ID_FMP_POWER_3298",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3298",
    categories: ["Compel Attention", "ID_FMP_POWER_3298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Comrades' Mantle"] = new engine.RulesElement({
    name: "Comrades' Mantle",
    type: "Power",
    id: "ID_FMP_POWER_5294",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5294",
    categories: ["Comrades' Mantle", "ID_FMP_POWER_5294", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Confusing Chorus"] = new engine.RulesElement({
    name: "Confusing Chorus",
    type: "Power",
    id: "ID_FMP_POWER_2395",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2395",
    categories: ["Confusing Chorus", "ID_FMP_POWER_2395", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Contagious Curse"] = new engine.RulesElement({
    name: "Contagious Curse",
    type: "Power",
    id: "ID_FMP_POWER_5279",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5279",
    categories: ["Contagious Curse", "ID_FMP_POWER_5279", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Covenant of Endurance"] = new engine.RulesElement({
    name: "Covenant of Endurance",
    type: "Power",
    id: "ID_FMP_POWER_3351",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3351",
    categories: ["Covenant of Endurance", "ID_FMP_POWER_3351", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Covenant of Life"] = new engine.RulesElement({
    name: "Covenant of Life",
    type: "Power",
    id: "ID_FMP_POWER_3353",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3353",
    categories: ["Covenant of Life", "ID_FMP_POWER_3353", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Covenant of Vengeance"] = new engine.RulesElement({
    name: "Covenant of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_3352",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3352",
    categories: ["Covenant of Vengeance", "ID_FMP_POWER_3352", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Crack the Skull"] = new engine.RulesElement({
    name: "Crack the Skull",
    type: "Power",
    id: "ID_FMP_POWER_4842",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4842",
    categories: ["Crack the Skull", "ID_FMP_POWER_4842", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crater Fall"] = new engine.RulesElement({
    name: "Crater Fall",
    type: "Power",
    id: "ID_FMP_POWER_4853",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4853",
    categories: ["Crater Fall", "ID_FMP_POWER_4853", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Creeper's Grasp"] = new engine.RulesElement({
    name: "Creeper's Grasp",
    type: "Power",
    id: "ID_FMP_POWER_5134",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5134",
    categories: ["Creeper's Grasp", "ID_FMP_POWER_5134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crimson Phoenix Rage"] = new engine.RulesElement({
    name: "Crimson Phoenix Rage",
    type: "Power",
    id: "ID_FMP_POWER_4976",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4976",
    categories: ["Crimson Phoenix Rage", "ID_FMP_POWER_4976", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Crush of the Serpent"] = new engine.RulesElement({
    name: "Crush of the Serpent",
    type: "Power",
    id: "ID_FMP_POWER_5422",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5422",
    categories: ["Crush of the Serpent", "ID_FMP_POWER_5422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_274", "Disciple of the World Serpent", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Sphere"] = new engine.RulesElement({
    name: "Crushing Sphere",
    type: "Power",
    id: "ID_FMP_POWER_3768",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3768",
    categories: ["Crushing Sphere", "ID_FMP_POWER_3768", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cull the Herd"] = new engine.RulesElement({
    name: "Cull the Herd",
    type: "Power",
    id: "ID_FMP_POWER_2688",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2688",
    categories: ["Cull the Herd", "ID_FMP_POWER_2688", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Ferocity"] = new engine.RulesElement({
    name: "Cunning Ferocity",
    type: "Power",
    id: "ID_FMP_POWER_4991",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4991",
    categories: ["Cunning Ferocity", "ID_FMP_POWER_4991", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of Haemnathuun"] = new engine.RulesElement({
    name: "Curse of Haemnathuun",
    type: "Power",
    id: "ID_FMP_POWER_3304",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3304",
    categories: ["Curse of Haemnathuun", "ID_FMP_POWER_3304", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Curtain of Steel"] = new engine.RulesElement({
    name: "Curtain of Steel",
    type: "Power",
    id: "ID_FMP_POWER_4947",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4947",
    categories: ["Curtain of Steel", "ID_FMP_POWER_4947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Biting Wind"] = new engine.RulesElement({
    name: "Dance of Biting Wind",
    type: "Power",
    id: "ID_FMP_POWER_5005",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5005",
    categories: ["Dance of Biting Wind", "ID_FMP_POWER_5005", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Lightning"] = new engine.RulesElement({
    name: "Dancing Lightning",
    type: "Power",
    id: "ID_FMP_POWER_5269",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5269",
    categories: ["Dancing Lightning", "ID_FMP_POWER_5269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Daring Charge"] = new engine.RulesElement({
    name: "Daring Charge",
    type: "Power",
    id: "ID_FMP_POWER_4940",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4940",
    categories: ["Daring Charge", "ID_FMP_POWER_4940", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_4940:attack", function() { /* for each opportunity attack made against you while you charge */ return 2; });
      model.statadd("ID_FMP_POWER_4940:damage", function() { /* for each opportunity attack made against you while you charge */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Power["Darting Bite"] = new engine.RulesElement({
    name: "Darting Bite",
    type: "Power",
    id: "ID_FMP_POWER_2671",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2671",
    categories: ["Darting Bite", "ID_FMP_POWER_2671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dawn Fire Sigil"] = new engine.RulesElement({
    name: "Dawn Fire Sigil",
    type: "Power",
    id: "ID_FMP_POWER_3599",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3599",
    categories: ["Dawn Fire Sigil", "ID_FMP_POWER_3599", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Ray"] = new engine.RulesElement({
    name: "Dazzling Ray",
    type: "Power",
    id: "ID_FMP_POWER_5264",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5264",
    categories: ["Dazzling Ray", "ID_FMP_POWER_5264", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Death Spirit"] = new engine.RulesElement({
    name: "Death Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3907",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3907",
    categories: ["Death Spirit", "ID_FMP_POWER_3907", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Death Stroke"] = new engine.RulesElement({
    name: "Death Stroke",
    type: "Power",
    id: "ID_FMP_POWER_5353",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5353",
    categories: ["Death Stroke", "ID_FMP_POWER_5353", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Deathless Frenzy"] = new engine.RulesElement({
    name: "Deathless Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4862",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4862",
    categories: ["Deathless Frenzy", "ID_FMP_POWER_4862", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_214", "Frenzied Berserker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Defending Strike"] = new engine.RulesElement({
    name: "Defending Strike",
    type: "Power",
    id: "ID_FMP_POWER_3780",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3780",
    categories: ["Defending Strike", "ID_FMP_POWER_3780", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Deflect Attention"] = new engine.RulesElement({
    name: "Deflect Attention",
    type: "Power",
    id: "ID_FMP_POWER_2369",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2369",
    categories: ["Deflect Attention", "ID_FMP_POWER_2369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Deflecting Thunder"] = new engine.RulesElement({
    name: "Deflecting Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5339",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5339",
    categories: ["Deflecting Thunder", "ID_FMP_POWER_5339", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Demand Justice"] = new engine.RulesElement({
    name: "Demand Justice",
    type: "Power",
    id: "ID_FMP_POWER_2884",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2884",
    categories: ["Demand Justice", "ID_FMP_POWER_2884", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Demonic Wrath"] = new engine.RulesElement({
    name: "Demonic Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5323",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5323",
    categories: ["Demonic Wrath", "ID_FMP_POWER_5323", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_279", "Demonskin Adept", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Demon-Soul Bolts"] = new engine.RulesElement({
    name: "Demon-Soul Bolts",
    type: "Power",
    id: "ID_FMP_POWER_5322",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5322",
    categories: ["Demon-Soul Bolts", "ID_FMP_POWER_5322", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_279", "Demonskin Adept", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deny Death"] = new engine.RulesElement({
    name: "Deny Death",
    type: "Power",
    id: "ID_FMP_POWER_4951",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4951",
    categories: ["Deny Death", "ID_FMP_POWER_4951", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Destined for Greatness"] = new engine.RulesElement({
    name: "Destined for Greatness",
    type: "Power",
    id: "ID_FMP_POWER_5474",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5474",
    categories: ["Destined for Greatness", "ID_FMP_POWER_5474", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_241", "Adroit Explorer", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Blow"] = new engine.RulesElement({
    name: "Devastating Blow",
    type: "Power",
    id: "ID_FMP_POWER_4960",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4960",
    categories: ["Devastating Blow", "ID_FMP_POWER_4960", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Strike"] = new engine.RulesElement({
    name: "Devastating Strike",
    type: "Power",
    id: "ID_FMP_POWER_563",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=563",
    categories: ["Devastating Strike", "ID_FMP_POWER_563", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Devour Magic"] = new engine.RulesElement({
    name: "Devour Magic",
    type: "Power",
    id: "ID_FMP_POWER_3782",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3782",
    categories: ["Devour Magic", "ID_FMP_POWER_3782", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Devouring Ice"] = new engine.RulesElement({
    name: "Devouring Ice",
    type: "Power",
    id: "ID_FMP_POWER_5508",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5508",
    categories: ["Devouring Ice", "ID_FMP_POWER_5508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Beast Assault"] = new engine.RulesElement({
    name: "Dire Beast Assault",
    type: "Power",
    id: "ID_FMP_POWER_5151",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5151",
    categories: ["Dire Beast Assault", "ID_FMP_POWER_5151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Dissonant Strain"] = new engine.RulesElement({
    name: "Dissonant Strain",
    type: "Power",
    id: "ID_FMP_POWER_4992",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4992",
    categories: ["Dissonant Strain", "ID_FMP_POWER_4992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Flare"] = new engine.RulesElement({
    name: "Distracting Flare",
    type: "Power",
    id: "ID_FMP_POWER_5337",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5337",
    categories: ["Distracting Flare", "ID_FMP_POWER_5337", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Shout"] = new engine.RulesElement({
    name: "Distracting Shout",
    type: "Power",
    id: "ID_FMP_POWER_4997",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4997",
    categories: ["Distracting Shout", "ID_FMP_POWER_4997", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Aspect"] = new engine.RulesElement({
    name: "Divine Aspect",
    type: "Power",
    id: "ID_FMP_POWER_5362",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5362",
    categories: ["Divine Aspect", "ID_FMP_POWER_5362", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_256", "Unveiled Visage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Bolts"] = new engine.RulesElement({
    name: "Divine Bolts",
    type: "Power",
    id: "ID_FMP_POWER_2848",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2848",
    categories: ["Divine Bolts", "ID_FMP_POWER_2848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Call"] = new engine.RulesElement({
    name: "Divine Call",
    type: "Power",
    id: "ID_FMP_POWER_2863",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2863",
    categories: ["Divine Call", "ID_FMP_POWER_2863", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Guidance"] = new engine.RulesElement({
    name: "Divine Guidance",
    type: "Power",
    id: "ID_FMP_POWER_5331",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5331",
    categories: ["Divine Guidance", "ID_FMP_POWER_5331", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_129", "Avenger"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Renewal"] = new engine.RulesElement({
    name: "Divine Renewal",
    type: "Power",
    id: "ID_FMP_POWER_2861",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2861",
    categories: ["Divine Renewal", "ID_FMP_POWER_2861", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Vigilance"] = new engine.RulesElement({
    name: "Divine Vigilance",
    type: "Power",
    id: "ID_FMP_POWER_5361",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5361",
    categories: ["Divine Vigilance", "ID_FMP_POWER_5361", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_256", "Unveiled Visage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Doom Echo"] = new engine.RulesElement({
    name: "Doom Echo",
    type: "Power",
    id: "ID_FMP_POWER_5027",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5027",
    categories: ["Doom Echo", "ID_FMP_POWER_5027", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_264", "Voice of Thunder", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Doorway to the Spirit World"] = new engine.RulesElement({
    name: "Doorway to the Spirit World",
    type: "Power",
    id: "ID_FMP_POWER_5413",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5413",
    categories: ["Doorway to the Spirit World", "ID_FMP_POWER_5413", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Incarnation"] = new engine.RulesElement({
    name: "Draconic Incarnation",
    type: "Power",
    id: "ID_FMP_POWER_5309",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5309",
    categories: ["Draconic Incarnation", "ID_FMP_POWER_5309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Majesty"] = new engine.RulesElement({
    name: "Draconic Majesty",
    type: "Power",
    id: "ID_FMP_POWER_5512",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5512",
    categories: ["Draconic Majesty", "ID_FMP_POWER_5512", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Fear"] = new engine.RulesElement({
    name: "Dragon Fear",
    type: "Power",
    id: "ID_FMP_POWER_5301",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5301",
    categories: ["Dragon Fear", "ID_FMP_POWER_5301", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Tail Meditation"] = new engine.RulesElement({
    name: "Dragon Tail Meditation",
    type: "Power",
    id: "ID_FMP_POWER_3809",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3809",
    categories: ["Dragon Tail Meditation", "ID_FMP_POWER_3809", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Wings"] = new engine.RulesElement({
    name: "Dragon Wings",
    type: "Power",
    id: "ID_FMP_POWER_5488",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5488",
    categories: ["Dragon Wings", "ID_FMP_POWER_5488", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_249", "Scion of Arkhosia", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonfang Bolt"] = new engine.RulesElement({
    name: "Dragonfang Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5265",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5265",
    categories: ["Dragonfang Bolt", "ID_FMP_POWER_5265", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonflame Mantle"] = new engine.RulesElement({
    name: "Dragonflame Mantle",
    type: "Power",
    id: "ID_FMP_POWER_3741",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3741",
    categories: ["Dragonflame Mantle", "ID_FMP_POWER_3741", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonfrost"] = new engine.RulesElement({
    name: "Dragonfrost",
    type: "Power",
    id: "ID_FMP_POWER_3705",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3705",
    categories: ["Dragonfrost", "ID_FMP_POWER_3705", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Revenge"] = new engine.RulesElement({
    name: "Dragon's Revenge",
    type: "Power",
    id: "ID_FMP_POWER_5326",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5326",
    categories: ["Dragon's Revenge", "ID_FMP_POWER_5326", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_280", "Dragonsoul Heir", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Wrath"] = new engine.RulesElement({
    name: "Dragon's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5487",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5487",
    categories: ["Dragon's Wrath", "ID_FMP_POWER_5487", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_249", "Scion of Arkhosia", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Eager Vine Strike"] = new engine.RulesElement({
    name: "Eager Vine Strike",
    type: "Power",
    id: "ID_FMP_POWER_5147",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5147",
    categories: ["Eager Vine Strike", "ID_FMP_POWER_5147", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Eagle's Wings"] = new engine.RulesElement({
    name: "Eagle's Wings",
    type: "Power",
    id: "ID_FMP_POWER_5153",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5153",
    categories: ["Eagle's Wings", "ID_FMP_POWER_5153", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Gift"] = new engine.RulesElement({
    name: "Earth Gift",
    type: "Power",
    id: "ID_FMP_POWER_5123",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5123",
    categories: ["Earth Gift", "ID_FMP_POWER_5123", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Hold's Rebuke"] = new engine.RulesElement({
    name: "Earth Hold's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_5148",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5148",
    categories: ["Earth Hold's Rebuke", "ID_FMP_POWER_5148", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Shield Strike"] = new engine.RulesElement({
    name: "Earth Shield Strike",
    type: "Power",
    id: "ID_FMP_POWER_5095",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5095",
    categories: ["Earth Shield Strike", "ID_FMP_POWER_5095", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Spikes"] = new engine.RulesElement({
    name: "Earth Spikes",
    type: "Power",
    id: "ID_FMP_POWER_5099",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5099",
    categories: ["Earth Spikes", "ID_FMP_POWER_5099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Tomb"] = new engine.RulesElement({
    name: "Earth Tomb",
    type: "Power",
    id: "ID_FMP_POWER_5164",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5164",
    categories: ["Earth Tomb", "ID_FMP_POWER_5164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Earthgrasp Strike"] = new engine.RulesElement({
    name: "Earthgrasp Strike",
    type: "Power",
    id: "ID_FMP_POWER_5112",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5112",
    categories: ["Earthgrasp Strike", "ID_FMP_POWER_5112", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Earthguard"] = new engine.RulesElement({
    name: "Earthguard",
    type: "Power",
    id: "ID_FMP_POWER_5120",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5120",
    categories: ["Earthguard", "ID_FMP_POWER_5120", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Earthquake Strike"] = new engine.RulesElement({
    name: "Earthquake Strike",
    type: "Power",
    id: "ID_FMP_POWER_5003",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5003",
    categories: ["Earthquake Strike", "ID_FMP_POWER_5003", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Earthrage Spirit"] = new engine.RulesElement({
    name: "Earthrage Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3881",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3881",
    categories: ["Earthrage Spirit", "ID_FMP_POWER_3881", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Earthsense"] = new engine.RulesElement({
    name: "Earthsense",
    type: "Power",
    id: "ID_FMP_POWER_5479",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5479",
    categories: ["Earthsense", "ID_FMP_POWER_5479", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_246", "Firstborn of Moradin", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Earthstride"] = new engine.RulesElement({
    name: "Earthstride",
    type: "Power",
    id: "ID_FMP_POWER_5130",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5130",
    categories: ["Earthstride", "ID_FMP_POWER_5130", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Echoes in Time"] = new engine.RulesElement({
    name: "Echoes in Time",
    type: "Power",
    id: "ID_FMP_POWER_5013",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5013",
    categories: ["Echoes in Time", "ID_FMP_POWER_5013", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Echoes of the Guardian"] = new engine.RulesElement({
    name: "Echoes of the Guardian",
    type: "Power",
    id: "ID_FMP_POWER_2352",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2352",
    categories: ["Echoes of the Guardian", "ID_FMP_POWER_2352", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Elegy of the Undefeated"] = new engine.RulesElement({
    name: "Elegy of the Undefeated",
    type: "Power",
    id: "ID_FMP_POWER_3417",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3417",
    categories: ["Elegy of the Undefeated", "ID_FMP_POWER_3417", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Elegy Unwritten"] = new engine.RulesElement({
    name: "Elegy Unwritten",
    type: "Power",
    id: "ID_FMP_POWER_3416",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3416",
    categories: ["Elegy Unwritten", "ID_FMP_POWER_3416", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Shift"] = new engine.RulesElement({
    name: "Elemental Shift",
    type: "Power",
    id: "ID_FMP_POWER_3763",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3763",
    categories: ["Elemental Shift", "ID_FMP_POWER_3763", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Emissary of the Gods"] = new engine.RulesElement({
    name: "Emissary of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_2864",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2864",
    categories: ["Emissary of the Gods", "ID_FMP_POWER_2864", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Encircling Dance"] = new engine.RulesElement({
    name: "Encircling Dance",
    type: "Power",
    id: "ID_FMP_POWER_5011",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5011",
    categories: ["Encircling Dance", "ID_FMP_POWER_5011", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Endbringer"] = new engine.RulesElement({
    name: "Endbringer",
    type: "Power",
    id: "ID_FMP_POWER_5200",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5200",
    categories: ["Endbringer", "ID_FMP_POWER_5200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_271", "Blightspeaker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Endless Acid"] = new engine.RulesElement({
    name: "Endless Acid",
    type: "Power",
    id: "ID_FMP_POWER_5315",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5315",
    categories: ["Endless Acid", "ID_FMP_POWER_5315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Strike"] = new engine.RulesElement({
    name: "Enduring Strike",
    type: "Power",
    id: "ID_FMP_POWER_3602",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3602",
    categories: ["Enduring Strike", "ID_FMP_POWER_3602", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Energetic Flight"] = new engine.RulesElement({
    name: "Energetic Flight",
    type: "Power",
    id: "ID_FMP_POWER_5276",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5276",
    categories: ["Energetic Flight", "ID_FMP_POWER_5276", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Enmity's Reach"] = new engine.RulesElement({
    name: "Enmity's Reach",
    type: "Power",
    id: "ID_FMP_POWER_2904",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2904",
    categories: ["Enmity's Reach", "ID_FMP_POWER_2904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Ensorcelled Mind"] = new engine.RulesElement({
    name: "Ensorcelled Mind",
    type: "Power",
    id: "ID_FMP_POWER_5491",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5491",
    categories: ["Ensorcelled Mind", "ID_FMP_POWER_5491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_250", "Shiere Knight", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Ensorcelled Mind") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Entangle"] = new engine.RulesElement({
    name: "Entangle",
    type: "Power",
    id: "ID_FMP_POWER_2697",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2697",
    categories: ["Entangle", "ID_FMP_POWER_2697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Thorns"] = new engine.RulesElement({
    name: "Entangling Thorns",
    type: "Power",
    id: "ID_FMP_POWER_2705",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2705",
    categories: ["Entangling Thorns", "ID_FMP_POWER_2705", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Entropic Whirlwind"] = new engine.RulesElement({
    name: "Entropic Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_5316",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5316",
    categories: ["Entropic Whirlwind", "ID_FMP_POWER_5316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Cloak"] = new engine.RulesElement({
    name: "Executioner's Cloak",
    type: "Power",
    id: "ID_FMP_POWER_2919",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2919",
    categories: ["Executioner's Cloak", "ID_FMP_POWER_2919", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Justice"] = new engine.RulesElement({
    name: "Executioner's Justice",
    type: "Power",
    id: "ID_FMP_POWER_3648",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3648",
    categories: ["Executioner's Justice", "ID_FMP_POWER_3648", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Pyre"] = new engine.RulesElement({
    name: "Explosive Pyre",
    type: "Power",
    id: "ID_FMP_POWER_3718",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3718",
    categories: ["Explosive Pyre", "ID_FMP_POWER_3718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Wind"] = new engine.RulesElement({
    name: "Explosive Wind",
    type: "Power",
    id: "ID_FMP_POWER_5076",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5076",
    categories: ["Explosive Wind", "ID_FMP_POWER_5076", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_13", "Paralysis", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Expose Weakness"] = new engine.RulesElement({
    name: "Expose Weakness",
    type: "Power",
    id: "ID_FMP_POWER_5059",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5059",
    categories: ["Expose Weakness", "ID_FMP_POWER_5059", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of Justice"] = new engine.RulesElement({
    name: "Eye of Justice",
    type: "Power",
    id: "ID_FMP_POWER_3658",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3658",
    categories: ["Eye of Justice", "ID_FMP_POWER_3658", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Hawk"] = new engine.RulesElement({
    name: "Eyes of the Hawk",
    type: "Power",
    id: "ID_FMP_POWER_5107",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5107",
    categories: ["Eyes of the Hawk", "ID_FMP_POWER_5107", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fade Away"] = new engine.RulesElement({
    name: "Fade Away",
    type: "Power",
    id: "ID_FMP_POWER_377",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=377",
    categories: ["Fade Away", "ID_FMP_POWER_377", "ID_FMP_RACIAL_TRAIT_427", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Faerie Fire"] = new engine.RulesElement({
    name: "Faerie Fire",
    type: "Power",
    id: "ID_FMP_POWER_2794",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2794",
    categories: ["Faerie Fire", "ID_FMP_POWER_2794", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Tree Strike"] = new engine.RulesElement({
    name: "Falling Tree Strike",
    type: "Power",
    id: "ID_FMP_POWER_5181",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5181",
    categories: ["Falling Tree Strike", "ID_FMP_POWER_5181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_285", "Verdant Lord", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["False Life"] = new engine.RulesElement({
    name: "False Life",
    type: "Power",
    id: "ID_FMP_POWER_5199",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5199",
    categories: ["False Life", "ID_FMP_POWER_5199", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_271", "Blightspeaker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fast Friends"] = new engine.RulesElement({
    name: "Fast Friends",
    type: "Power",
    id: "ID_FMP_POWER_2346",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2346",
    categories: ["Fast Friends", "ID_FMP_POWER_2346", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Strike"] = new engine.RulesElement({
    name: "Fatal Strike",
    type: "Power",
    id: "ID_FMP_POWER_4854",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4854",
    categories: ["Fatal Strike", "ID_FMP_POWER_4854", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fate Weaver's Shield"] = new engine.RulesElement({
    name: "Fate Weaver's Shield",
    type: "Power",
    id: "ID_FMP_POWER_6522",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6522",
    categories: ["Fate Weaver's Shield", "ID_FMP_POWER_6522", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Presence"] = new engine.RulesElement({
    name: "Fearsome Presence",
    type: "Power",
    id: "ID_FMP_POWER_4982",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4982",
    categories: ["Fearsome Presence", "ID_FMP_POWER_4982", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_259", "Fearbringer Thane", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Fury"] = new engine.RulesElement({
    name: "Feast of Fury",
    type: "Power",
    id: "ID_FMP_POWER_5053",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5053",
    categories: ["Feast of Fury", "ID_FMP_POWER_5053", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Violence"] = new engine.RulesElement({
    name: "Feast of Violence",
    type: "Power",
    id: "ID_FMP_POWER_4948",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4948",
    categories: ["Feast of Violence", "ID_FMP_POWER_4948", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Accuracy"] = new engine.RulesElement({
    name: "Feral Accuracy",
    type: "Power",
    id: "ID_FMP_POWER_5082",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5082",
    categories: ["Feral Accuracy", "ID_FMP_POWER_5082", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_266", "Blood Moon Stalker", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Mauling"] = new engine.RulesElement({
    name: "Feral Mauling",
    type: "Power",
    id: "ID_FMP_POWER_2703",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2703",
    categories: ["Feral Mauling", "ID_FMP_POWER_2703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Scythe"] = new engine.RulesElement({
    name: "Feral Scythe",
    type: "Power",
    id: "ID_FMP_POWER_5502",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5502",
    categories: ["Feral Scythe", "ID_FMP_POWER_5502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Whirlwind"] = new engine.RulesElement({
    name: "Feral Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_2692",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2692",
    categories: ["Feral Whirlwind", "ID_FMP_POWER_2692", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ferocious Maul"] = new engine.RulesElement({
    name: "Ferocious Maul",
    type: "Power",
    id: "ID_FMP_POWER_2715",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2715",
    categories: ["Ferocious Maul", "ID_FMP_POWER_2715", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Escape"] = new engine.RulesElement({
    name: "Fey Escape",
    type: "Power",
    id: "ID_FMP_POWER_6221",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6221",
    categories: ["Fey Escape", "ID_FMP_POWER_6221", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_250", "Shiere Knight", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Lure"] = new engine.RulesElement({
    name: "Fey Lure",
    type: "Power",
    id: "ID_FMP_POWER_2718",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2718",
    categories: ["Fey Lure", "ID_FMP_POWER_2718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Feywild Sojourn"] = new engine.RulesElement({
    name: "Feywild Sojourn",
    type: "Power",
    id: "ID_FMP_POWER_2734",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2734",
    categories: ["Feywild Sojourn", "ID_FMP_POWER_2734", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Fiery Vengeance"] = new engine.RulesElement({
    name: "Fiery Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_3646",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3646",
    categories: ["Fiery Vengeance", "ID_FMP_POWER_3646", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Final Confrontation"] = new engine.RulesElement({
    name: "Final Confrontation",
    type: "Power",
    id: "ID_FMP_POWER_4863",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4863",
    categories: ["Final Confrontation", "ID_FMP_POWER_4863", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_214", "Frenzied Berserker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Final Oath"] = new engine.RulesElement({
    name: "Final Oath",
    type: "Power",
    id: "ID_FMP_POWER_3639",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3639",
    categories: ["Final Oath", "ID_FMP_POWER_3639", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Fires of Life"] = new engine.RulesElement({
    name: "Fires of Life",
    type: "Power",
    id: "ID_FMP_POWER_5506",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5506",
    categories: ["Fires of Life", "ID_FMP_POWER_5506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fires of the Silver Gate"] = new engine.RulesElement({
    name: "Fires of the Silver Gate",
    type: "Power",
    id: "ID_FMP_POWER_3317",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3317",
    categories: ["Fires of the Silver Gate", "ID_FMP_POWER_3317", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["First Ward of the Living Gate"] = new engine.RulesElement({
    name: "First Ward of the Living Gate",
    type: "Power",
    id: "ID_FMP_POWER_5084",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5084",
    categories: ["First Ward of the Living Gate", "ID_FMP_POWER_5084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_267", "Guardian of the Living Gate", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Seed"] = new engine.RulesElement({
    name: "Flame Seed",
    type: "Power",
    id: "ID_FMP_POWER_5505",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5505",
    categories: ["Flame Seed", "ID_FMP_POWER_5505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Spiral"] = new engine.RulesElement({
    name: "Flame Spiral",
    type: "Power",
    id: "ID_FMP_POWER_3749",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3749",
    categories: ["Flame Spiral", "ID_FMP_POWER_3749", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Flameheart Rage"] = new engine.RulesElement({
    name: "Flameheart Rage",
    type: "Power",
    id: "ID_FMP_POWER_4843",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4843",
    categories: ["Flameheart Rage", "ID_FMP_POWER_4843", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fleet Pursuit"] = new engine.RulesElement({
    name: "Fleet Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_2724",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2724",
    categories: ["Fleet Pursuit", "ID_FMP_POWER_2724", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Foolhardy Fighting"] = new engine.RulesElement({
    name: "Foolhardy Fighting",
    type: "Power",
    id: "ID_FMP_POWER_2392",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2392",
    categories: ["Foolhardy Fighting", "ID_FMP_POWER_2392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Force Storm"] = new engine.RulesElement({
    name: "Force Storm",
    type: "Power",
    id: "ID_FMP_POWER_5310",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5310",
    categories: ["Force Storm", "ID_FMP_POWER_5310", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Conduit"] = new engine.RulesElement({
    name: "Forceful Conduit",
    type: "Power",
    id: "ID_FMP_POWER_4999",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4999",
    categories: ["Forceful Conduit", "ID_FMP_POWER_4999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Forge the Chains of Life"] = new engine.RulesElement({
    name: "Forge the Chains of Life",
    type: "Power",
    id: "ID_FMP_POWER_3854",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3854",
    categories: ["Forge the Chains of Life", "ID_FMP_POWER_3854", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Spring Renewal"] = new engine.RulesElement({
    name: "Form of Spring Renewal",
    type: "Power",
    id: "ID_FMP_POWER_5169",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5169",
    categories: ["Form of Spring Renewal", "ID_FMP_POWER_5169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7330"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Spring Renewal Attack"] = new engine.RulesElement({
    name: "Form of Spring Renewal Attack",
    type: "Power",
    id: "ID_FMP_POWER_7330",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7330",
    categories: ["Form of Spring Renewal Attack", "ID_FMP_POWER_7330", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Storm's Wrath"] = new engine.RulesElement({
    name: "Form of Storm's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5180",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5180",
    categories: ["Form of Storm's Wrath", "ID_FMP_POWER_5180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_284", "Storm Sentinel", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Summer Fire"] = new engine.RulesElement({
    name: "Form of Summer Fire",
    type: "Power",
    id: "ID_FMP_POWER_5138",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5138",
    categories: ["Form of Summer Fire", "ID_FMP_POWER_5138", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7321"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Summer Fire Attack"] = new engine.RulesElement({
    name: "Form of Summer Fire Attack",
    type: "Power",
    id: "ID_FMP_POWER_7321",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7321",
    categories: ["Form of Summer Fire Attack", "ID_FMP_POWER_7321", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Autumn Reaper"] = new engine.RulesElement({
    name: "Form of the Autumn Reaper",
    type: "Power",
    id: "ID_FMP_POWER_5163",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5163",
    categories: ["Form of the Autumn Reaper", "ID_FMP_POWER_5163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7328"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Autumn Reaper Attack"] = new engine.RulesElement({
    name: "Form of the Autumn Reaper Attack",
    type: "Power",
    id: "ID_FMP_POWER_7328",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7328",
    categories: ["Form of the Autumn Reaper Attack", "ID_FMP_POWER_7328", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Blood Wolf"] = new engine.RulesElement({
    name: "Form of the Blood Wolf",
    type: "Power",
    id: "ID_FMP_POWER_5160",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5160",
    categories: ["Form of the Blood Wolf", "ID_FMP_POWER_5160", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7325"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Blood Wolf Attack"] = new engine.RulesElement({
    name: "Form of the Blood Wolf Attack",
    type: "Power",
    id: "ID_FMP_POWER_7325",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7325",
    categories: ["Form of the Blood Wolf Attack", "ID_FMP_POWER_7325", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Charging Boar"] = new engine.RulesElement({
    name: "Form of the Charging Boar",
    type: "Power",
    id: "ID_FMP_POWER_5139",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5139",
    categories: ["Form of the Charging Boar", "ID_FMP_POWER_5139", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7322"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Charging Boar Attack"] = new engine.RulesElement({
    name: "Form of the Charging Boar Attack",
    type: "Power",
    id: "ID_FMP_POWER_7322",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7322",
    categories: ["Form of the Charging Boar Attack", "ID_FMP_POWER_7322", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Chimera"] = new engine.RulesElement({
    name: "Form of the Chimera",
    type: "Power",
    id: "ID_FMP_POWER_5168",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5168",
    categories: ["Form of the Chimera", "ID_FMP_POWER_5168", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7329"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Chimera Attack"] = new engine.RulesElement({
    name: "Form of the Chimera Attack",
    type: "Power",
    id: "ID_FMP_POWER_7329",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7329",
    categories: ["Form of the Chimera Attack", "ID_FMP_POWER_7329", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Displacer Beast"] = new engine.RulesElement({
    name: "Form of the Displacer Beast",
    type: "Power",
    id: "ID_FMP_POWER_5161",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5161",
    categories: ["Form of the Displacer Beast", "ID_FMP_POWER_5161", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7326"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Displacer Beast Attack"] = new engine.RulesElement({
    name: "Form of the Displacer Beast Attack",
    type: "Power",
    id: "ID_FMP_POWER_7326",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7326",
    categories: ["Form of the Displacer Beast Attack", "ID_FMP_POWER_7326", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Fearsome Ram"] = new engine.RulesElement({
    name: "Form of the Fearsome Ram",
    type: "Power",
    id: "ID_FMP_POWER_5103",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5103",
    categories: ["Form of the Fearsome Ram", "ID_FMP_POWER_5103", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7313"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Fearsome Ram Attack"] = new engine.RulesElement({
    name: "Form of the Fearsome Ram Attack",
    type: "Power",
    id: "ID_FMP_POWER_7313",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7313",
    categories: ["Form of the Fearsome Ram Attack", "ID_FMP_POWER_7313", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Frenzied Wolverine"] = new engine.RulesElement({
    name: "Form of the Frenzied Wolverine",
    type: "Power",
    id: "ID_FMP_POWER_5127",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5127",
    categories: ["Form of the Frenzied Wolverine", "ID_FMP_POWER_5127", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7318"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Frenzied Wolverine Attack"] = new engine.RulesElement({
    name: "Form of the Frenzied Wolverine Attack",
    type: "Power",
    id: "ID_FMP_POWER_7318",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7318",
    categories: ["Form of the Frenzied Wolverine Attack", "ID_FMP_POWER_7318", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Jungle Lord"] = new engine.RulesElement({
    name: "Form of the Jungle Lord",
    type: "Power",
    id: "ID_FMP_POWER_5162",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5162",
    categories: ["Form of the Jungle Lord", "ID_FMP_POWER_5162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7327"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Jungle Lord Attack"] = new engine.RulesElement({
    name: "Form of the Jungle Lord Attack",
    type: "Power",
    id: "ID_FMP_POWER_7327",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7327",
    categories: ["Form of the Jungle Lord Attack", "ID_FMP_POWER_7327", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Leaping Stag"] = new engine.RulesElement({
    name: "Form of the Leaping Stag",
    type: "Power",
    id: "ID_FMP_POWER_5177",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5177",
    categories: ["Form of the Leaping Stag", "ID_FMP_POWER_5177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_227", "Horned Champion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7334"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Leaping Stag Attack"] = new engine.RulesElement({
    name: "Form of the Leaping Stag Attack",
    type: "Power",
    id: "ID_FMP_POWER_7334",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7334",
    categories: ["Form of the Leaping Stag Attack", "ID_FMP_POWER_7334", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_227", "Horned Champion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Oak Sentinel"] = new engine.RulesElement({
    name: "Form of the Oak Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_5126",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5126",
    categories: ["Form of the Oak Sentinel", "ID_FMP_POWER_5126", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7317"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Oak Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Oak Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_7317",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7317",
    categories: ["Form of the Oak Sentinel Attack", "ID_FMP_POWER_7317", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primal Beast"] = new engine.RulesElement({
    name: "Form of the Primal Beast",
    type: "Power",
    id: "ID_FMP_POWER_5174",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5174",
    categories: ["Form of the Primal Beast", "ID_FMP_POWER_5174", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_282", "Bloodwrath Guardian", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7333"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primal Beast Attack"] = new engine.RulesElement({
    name: "Form of the Primal Beast Attack",
    type: "Power",
    id: "ID_FMP_POWER_7333",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7333",
    categories: ["Form of the Primal Beast Attack", "ID_FMP_POWER_7333", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_282", "Bloodwrath Guardian", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Relentless Panther"] = new engine.RulesElement({
    name: "Form of the Relentless Panther",
    type: "Power",
    id: "ID_FMP_POWER_5104",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5104",
    categories: ["Form of the Relentless Panther", "ID_FMP_POWER_5104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7314"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Relentless Panther Attack"] = new engine.RulesElement({
    name: "Form of the Relentless Panther Attack",
    type: "Power",
    id: "ID_FMP_POWER_7314",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7314",
    categories: ["Form of the Relentless Panther Attack", "ID_FMP_POWER_7314", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Rowan Sentinel"] = new engine.RulesElement({
    name: "Form of the Rowan Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_5140",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5140",
    categories: ["Form of the Rowan Sentinel", "ID_FMP_POWER_5140", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7323"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Rowan Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Rowan Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_7323",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7323",
    categories: ["Form of the Rowan Sentinel Attack", "ID_FMP_POWER_7323", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Soul Serpent"] = new engine.RulesElement({
    name: "Form of the Soul Serpent",
    type: "Power",
    id: "ID_FMP_POWER_5171",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5171",
    categories: ["Form of the Soul Serpent", "ID_FMP_POWER_5171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7332"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Soul Serpent Attack"] = new engine.RulesElement({
    name: "Form of the Soul Serpent Attack",
    type: "Power",
    id: "ID_FMP_POWER_7332",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7332",
    categories: ["Form of the Soul Serpent Attack", "ID_FMP_POWER_7332", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Starmetal Warrior"] = new engine.RulesElement({
    name: "Form of the Starmetal Warrior",
    type: "Power",
    id: "ID_FMP_POWER_5170",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5170",
    categories: ["Form of the Starmetal Warrior", "ID_FMP_POWER_5170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7331"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Starmetal Warrior Attack"] = new engine.RulesElement({
    name: "Form of the Starmetal Warrior Attack",
    type: "Power",
    id: "ID_FMP_POWER_7331",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7331",
    categories: ["Form of the Starmetal Warrior Attack", "ID_FMP_POWER_7331", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stone Sentinel"] = new engine.RulesElement({
    name: "Form of the Stone Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_5128",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5128",
    categories: ["Form of the Stone Sentinel", "ID_FMP_POWER_5128", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7319"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stone Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Stone Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_7319",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7319",
    categories: ["Form of the Stone Sentinel Attack", "ID_FMP_POWER_7319", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stonecrusher"] = new engine.RulesElement({
    name: "Form of the Stonecrusher",
    type: "Power",
    id: "ID_FMP_POWER_5141",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5141",
    categories: ["Form of the Stonecrusher", "ID_FMP_POWER_5141", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7324"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stonecrusher Attack"] = new engine.RulesElement({
    name: "Form of the Stonecrusher Attack",
    type: "Power",
    id: "ID_FMP_POWER_7324",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7324",
    categories: ["Form of the Stonecrusher Attack", "ID_FMP_POWER_7324", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Storm Eagle"] = new engine.RulesElement({
    name: "Form of the Storm Eagle",
    type: "Power",
    id: "ID_FMP_POWER_5129",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5129",
    categories: ["Form of the Storm Eagle", "ID_FMP_POWER_5129", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7320"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Storm Eagle Attack"] = new engine.RulesElement({
    name: "Form of the Storm Eagle Attack",
    type: "Power",
    id: "ID_FMP_POWER_7320",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7320",
    categories: ["Form of the Storm Eagle Attack", "ID_FMP_POWER_7320", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Verdant Lord"] = new engine.RulesElement({
    name: "Form of the Verdant Lord",
    type: "Power",
    id: "ID_FMP_POWER_5183",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5183",
    categories: ["Form of the Verdant Lord", "ID_FMP_POWER_5183", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_285", "Verdant Lord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7335"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Verdant Lord Attack"] = new engine.RulesElement({
    name: "Form of the Verdant Lord Attack",
    type: "Power",
    id: "ID_FMP_POWER_7335",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7335",
    categories: ["Form of the Verdant Lord Attack", "ID_FMP_POWER_7335", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_285", "Verdant Lord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Willow Sentinel"] = new engine.RulesElement({
    name: "Form of the Willow Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_5105",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5105",
    categories: ["Form of the Willow Sentinel", "ID_FMP_POWER_5105", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7315"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Willow Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Willow Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_7315",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7315",
    categories: ["Form of the Willow Sentinel Attack", "ID_FMP_POWER_7315", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Winter's Herald"] = new engine.RulesElement({
    name: "Form of Winter's Herald",
    type: "Power",
    id: "ID_FMP_POWER_5106",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5106",
    categories: ["Form of Winter's Herald", "ID_FMP_POWER_5106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7316"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Winter's Herald Attack"] = new engine.RulesElement({
    name: "Form of Winter's Herald Attack",
    type: "Power",
    id: "ID_FMP_POWER_7316",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7316",
    categories: ["Form of Winter's Herald Attack", "ID_FMP_POWER_7316", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Fourfold Invocation of Doom"] = new engine.RulesElement({
    name: "Fourfold Invocation of Doom",
    type: "Power",
    id: "ID_FMP_POWER_2879",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2879",
    categories: ["Fourfold Invocation of Doom", "ID_FMP_POWER_2879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fragment of the Song"] = new engine.RulesElement({
    name: "Fragment of the Song",
    type: "Power",
    id: "ID_FMP_POWER_5462",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5462",
    categories: ["Fragment of the Song", "ID_FMP_POWER_5462", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_286", "Fatesinger", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Fraught with Failure"] = new engine.RulesElement({
    name: "Fraught with Failure",
    type: "Power",
    id: "ID_FMP_POWER_2749",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2749",
    categories: ["Fraught with Failure", "ID_FMP_POWER_2749", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Frenzied Rhythm"] = new engine.RulesElement({
    name: "Frenzied Rhythm",
    type: "Power",
    id: "ID_FMP_POWER_5015",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5015",
    categories: ["Frenzied Rhythm", "ID_FMP_POWER_5015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Frost Eddies"] = new engine.RulesElement({
    name: "Frost Eddies",
    type: "Power",
    id: "ID_FMP_POWER_5288",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5288",
    categories: ["Frost Eddies", "ID_FMP_POWER_5288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Frost Flash"] = new engine.RulesElement({
    name: "Frost Flash",
    type: "Power",
    id: "ID_FMP_POWER_5041",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5041",
    categories: ["Frost Flash", "ID_FMP_POWER_5041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Frost Wolf Rage"] = new engine.RulesElement({
    name: "Frost Wolf Rage",
    type: "Power",
    id: "ID_FMP_POWER_4831",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4831",
    categories: ["Frost Wolf Rage", "ID_FMP_POWER_4831", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Frostbind"] = new engine.RulesElement({
    name: "Frostbind",
    type: "Power",
    id: "ID_FMP_POWER_5263",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5263",
    categories: ["Frostbind", "ID_FMP_POWER_5263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Frothing Madness"] = new engine.RulesElement({
    name: "Frothing Madness",
    type: "Power",
    id: "ID_FMP_POWER_5472",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5472",
    categories: ["Frothing Madness", "ID_FMP_POWER_5472", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_244", "Bloodfury Savage", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fuel the Fire"] = new engine.RulesElement({
    name: "Fuel the Fire",
    type: "Power",
    id: "ID_FMP_POWER_4958",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4958",
    categories: ["Fuel the Fire", "ID_FMP_POWER_4958", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Assault"] = new engine.RulesElement({
    name: "Furious Assault",
    type: "Power",
    id: "ID_FMP_POWER_6189",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6189",
    categories: ["Furious Assault", "ID_FMP_POWER_6189", "ID_FMP_RACIAL_TRAIT_1146", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Galvanizing Bellow"] = new engine.RulesElement({
    name: "Galvanizing Bellow",
    type: "Power",
    id: "ID_FMP_POWER_5427",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5427",
    categories: ["Galvanizing Bellow", "ID_FMP_POWER_5427", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_276", "Great Bear Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Gaze of the Beast"] = new engine.RulesElement({
    name: "Gaze of the Beast",
    type: "Power",
    id: "ID_FMP_POWER_5078",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5078",
    categories: ["Gaze of the Beast", "ID_FMP_POWER_5078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Panther Spiral"] = new engine.RulesElement({
    name: "Ghost Panther Spiral",
    type: "Power",
    id: "ID_FMP_POWER_5425",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5425",
    categories: ["Ghost Panther Spiral", "ID_FMP_POWER_5425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_275", "Ghost Panther", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Viper Rage"] = new engine.RulesElement({
    name: "Ghost Viper Rage",
    type: "Power",
    id: "ID_FMP_POWER_4963",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4963",
    categories: ["Ghost Viper Rage", "ID_FMP_POWER_4963", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Ghostly Vengeance"] = new engine.RulesElement({
    name: "Ghostly Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5348",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5348",
    categories: ["Ghostly Vengeance", "ID_FMP_POWER_5348", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Glyph of Imprisonment"] = new engine.RulesElement({
    name: "Glyph of Imprisonment",
    type: "Power",
    id: "ID_FMP_POWER_2866",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2866",
    categories: ["Glyph of Imprisonment", "ID_FMP_POWER_2866", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Glyph of Radiance"] = new engine.RulesElement({
    name: "Glyph of Radiance",
    type: "Power",
    id: "ID_FMP_POWER_3308",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3308",
    categories: ["Glyph of Radiance", "ID_FMP_POWER_3308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Glyph of Three Blades"] = new engine.RulesElement({
    name: "Glyph of Three Blades",
    type: "Power",
    id: "ID_FMP_POWER_3301",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3301",
    categories: ["Glyph of Three Blades", "ID_FMP_POWER_3301", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["God Hammer"] = new engine.RulesElement({
    name: "God Hammer",
    type: "Power",
    id: "ID_FMP_POWER_3341",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3341",
    categories: ["God Hammer", "ID_FMP_POWER_3341", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Chains of the Justiciar"] = new engine.RulesElement({
    name: "Grasping Chains of the Justiciar",
    type: "Power",
    id: "ID_FMP_POWER_2874",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2874",
    categories: ["Grasping Chains of the Justiciar", "ID_FMP_POWER_2874", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Claws"] = new engine.RulesElement({
    name: "Grasping Claws",
    type: "Power",
    id: "ID_FMP_POWER_5036",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5036",
    categories: ["Grasping Claws", "ID_FMP_POWER_5036", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Grasping Earth"] = new engine.RulesElement({
    name: "Grasping Earth",
    type: "Power",
    id: "ID_FMP_POWER_5070",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5070",
    categories: ["Grasping Earth", "ID_FMP_POWER_5070", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Shards"] = new engine.RulesElement({
    name: "Grasping Shards",
    type: "Power",
    id: "ID_FMP_POWER_2850",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2850",
    categories: ["Grasping Shards", "ID_FMP_POWER_2850", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Great Bear Guardian"] = new engine.RulesElement({
    name: "Great Bear Guardian",
    type: "Power",
    id: "ID_FMP_POWER_3919",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3919",
    categories: ["Great Bear Guardian", "ID_FMP_POWER_3919", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Great Cat's Dodge"] = new engine.RulesElement({
    name: "Great Cat's Dodge",
    type: "Power",
    id: "ID_FMP_POWER_5424",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5424",
    categories: ["Great Cat's Dodge", "ID_FMP_POWER_5424", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_275", "Ghost Panther", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Great Cleave"] = new engine.RulesElement({
    name: "Great Cleave",
    type: "Power",
    id: "ID_FMP_POWER_1020",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1020",
    categories: ["Great Cleave", "ID_FMP_POWER_1020", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Great Shout"] = new engine.RulesElement({
    name: "Great Shout",
    type: "Power",
    id: "ID_FMP_POWER_4835",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4835",
    categories: ["Great Shout", "ID_FMP_POWER_4835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Great Stomp"] = new engine.RulesElement({
    name: "Great Stomp",
    type: "Power",
    id: "ID_FMP_POWER_4845",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4845",
    categories: ["Great Stomp", "ID_FMP_POWER_4845", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian of the Primal Copse"] = new engine.RulesElement({
    name: "Guardian of the Primal Copse",
    type: "Power",
    id: "ID_FMP_POWER_3909",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3909",
    categories: ["Guardian of the Primal Copse", "ID_FMP_POWER_3909", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Storm"] = new engine.RulesElement({
    name: "Guardian's Storm",
    type: "Power",
    id: "ID_FMP_POWER_5165",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5165",
    categories: ["Guardian's Storm", "ID_FMP_POWER_5165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Wrath"] = new engine.RulesElement({
    name: "Guardian's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_327",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=327",
    categories: ["Guardian's Wrath", "ID_FMP_POWER_327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Guiding Strike"] = new engine.RulesElement({
    name: "Guiding Strike",
    type: "Power",
    id: "ID_FMP_POWER_4987",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4987",
    categories: ["Guiding Strike", "ID_FMP_POWER_4987", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Thorns"] = new engine.RulesElement({
    name: "Hail of Thorns",
    type: "Power",
    id: "ID_FMP_POWER_5116",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5116",
    categories: ["Hail of Thorns", "ID_FMP_POWER_5116", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Halfling's Taunt"] = new engine.RulesElement({
    name: "Halfling's Taunt",
    type: "Power",
    id: "ID_FMP_POWER_5483",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5483",
    categories: ["Halfling's Taunt", "ID_FMP_POWER_5483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_247", "Halfling Scoundrel", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Halfling's Taunt") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Halo of Fire"] = new engine.RulesElement({
    name: "Halo of Fire",
    type: "Power",
    id: "ID_FMP_POWER_3518",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3518",
    categories: ["Halo of Fire", "ID_FMP_POWER_3518", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer Fall"] = new engine.RulesElement({
    name: "Hammer Fall",
    type: "Power",
    id: "ID_FMP_POWER_4830",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4830",
    categories: ["Hammer Fall", "ID_FMP_POWER_4830", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer of the Final Pronouncement"] = new engine.RulesElement({
    name: "Hammer of the Final Pronouncement",
    type: "Power",
    id: "ID_FMP_POWER_5356",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5356",
    categories: ["Hammer of the Final Pronouncement", "ID_FMP_POWER_5356", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_254", "Hammer of Judgment", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Harmony of the Two"] = new engine.RulesElement({
    name: "Harmony of the Two",
    type: "Power",
    id: "ID_FMP_POWER_5004",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5004",
    categories: ["Harmony of the Two", "ID_FMP_POWER_5004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Haunting Spirits"] = new engine.RulesElement({
    name: "Haunting Spirits",
    type: "Power",
    id: "ID_FMP_POWER_4783",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4783",
    categories: ["Haunting Spirits", "ID_FMP_POWER_4783", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Spirit"] = new engine.RulesElement({
    name: "Healing Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3773",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3773",
    categories: ["Healing Spirit", "ID_FMP_POWER_3773"]
  });
  byID[te.id] = te;
  
  te = Power["Heart Strike"] = new engine.RulesElement({
    name: "Heart Strike",
    type: "Power",
    id: "ID_FMP_POWER_4952",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4952",
    categories: ["Heart Strike", "ID_FMP_POWER_4952", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hero's Beacon"] = new engine.RulesElement({
    name: "Hero's Beacon",
    type: "Power",
    id: "ID_FMP_POWER_5504",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5504",
    categories: ["Hero's Beacon", "ID_FMP_POWER_5504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hideous Laughter"] = new engine.RulesElement({
    name: "Hideous Laughter",
    type: "Power",
    id: "ID_FMP_POWER_5000",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5000",
    categories: ["Hideous Laughter", "ID_FMP_POWER_5000", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Hobbling Rend"] = new engine.RulesElement({
    name: "Hobbling Rend",
    type: "Power",
    id: "ID_FMP_POWER_5049",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5049",
    categories: ["Hobbling Rend", "ID_FMP_POWER_5049", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Horns of the Undefeated Khan"] = new engine.RulesElement({
    name: "Horns of the Undefeated Khan",
    type: "Power",
    id: "ID_FMP_POWER_5412",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5412",
    categories: ["Horns of the Undefeated Khan", "ID_FMP_POWER_5412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hostility Charm"] = new engine.RulesElement({
    name: "Hostility Charm",
    type: "Power",
    id: "ID_FMP_POWER_5289",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5289",
    categories: ["Hostility Charm", "ID_FMP_POWER_5289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of the Wild"] = new engine.RulesElement({
    name: "Howl of the Wild",
    type: "Power",
    id: "ID_FMP_POWER_2736",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2736",
    categories: ["Howl of the Wild", "ID_FMP_POWER_2736", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Howling Gust"] = new engine.RulesElement({
    name: "Howling Gust",
    type: "Power",
    id: "ID_FMP_POWER_5407",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5407",
    categories: ["Howling Gust", "ID_FMP_POWER_5407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Howling Strike"] = new engine.RulesElement({
    name: "Howling Strike",
    type: "Power",
    id: "ID_FMP_POWER_4818",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4818",
    categories: ["Howling Strike", "ID_FMP_POWER_4818", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry Earth"] = new engine.RulesElement({
    name: "Hungry Earth",
    type: "Power",
    id: "ID_FMP_POWER_5100",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5100",
    categories: ["Hungry Earth", "ID_FMP_POWER_5100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Tune"] = new engine.RulesElement({
    name: "Hunter's Tune",
    type: "Power",
    id: "ID_FMP_POWER_2360",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2360",
    categories: ["Hunter's Tune", "ID_FMP_POWER_2360", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hunting Lion Rage"] = new engine.RulesElement({
    name: "Hunting Lion Rage",
    type: "Power",
    id: "ID_FMP_POWER_4955",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4955",
    categories: ["Hunting Lion Rage", "ID_FMP_POWER_4955", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Hurricane of Blades"] = new engine.RulesElement({
    name: "Hurricane of Blades",
    type: "Power",
    id: "ID_FMP_POWER_4858",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4858",
    categories: ["Hurricane of Blades", "ID_FMP_POWER_4858", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hydra Rage"] = new engine.RulesElement({
    name: "Hydra Rage",
    type: "Power",
    id: "ID_FMP_POWER_4964",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4964",
    categories: ["Hydra Rage", "ID_FMP_POWER_4964", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hymn of the Daring Rescue"] = new engine.RulesElement({
    name: "Hymn of the Daring Rescue",
    type: "Power",
    id: "ID_FMP_POWER_3464",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3464",
    categories: ["Hymn of the Daring Rescue", "ID_FMP_POWER_3464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Dragon's Teeth"] = new engine.RulesElement({
    name: "Ice Dragon's Teeth",
    type: "Power",
    id: "ID_FMP_POWER_3753",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3753",
    categories: ["Ice Dragon's Teeth", "ID_FMP_POWER_3753", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Icon of LIfe"] = new engine.RulesElement({
    name: "Icon of LIfe",
    type: "Power",
    id: "ID_FMP_POWER_3350",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3350",
    categories: ["Icon of LIfe", "ID_FMP_POWER_3350", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Icon of Terror"] = new engine.RulesElement({
    name: "Icon of Terror",
    type: "Power",
    id: "ID_FMP_POWER_2873",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2873",
    categories: ["Icon of Terror", "ID_FMP_POWER_2873", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Shards"] = new engine.RulesElement({
    name: "Icy Shards",
    type: "Power",
    id: "ID_FMP_POWER_5135",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5135",
    categories: ["Icy Shards", "ID_FMP_POWER_5135", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Illusory Erasure"] = new engine.RulesElement({
    name: "Illusory Erasure",
    type: "Power",
    id: "ID_FMP_POWER_2386",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2386",
    categories: ["Illusory Erasure", "ID_FMP_POWER_2386", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Impelling Force"] = new engine.RulesElement({
    name: "Impelling Force",
    type: "Power",
    id: "ID_FMP_POWER_4993",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4993",
    categories: ["Impelling Force", "ID_FMP_POWER_4993", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Imperious Presence"] = new engine.RulesElement({
    name: "Imperious Presence",
    type: "Power",
    id: "ID_FMP_POWER_5490",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5490",
    categories: ["Imperious Presence", "ID_FMP_POWER_5490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_250", "Shiere Knight", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Imperious Presence") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Impetuous Stride"] = new engine.RulesElement({
    name: "Impetuous Stride",
    type: "Power",
    id: "ID_FMP_POWER_5176",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5176",
    categories: ["Impetuous Stride", "ID_FMP_POWER_5176", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_227", "Horned Champion", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Increasing the Tempo"] = new engine.RulesElement({
    name: "Increasing the Tempo",
    type: "Power",
    id: "ID_FMP_POWER_2782",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2782",
    categories: ["Increasing the Tempo", "ID_FMP_POWER_2782", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Resolve"] = new engine.RulesElement({
    name: "Indomitable Resolve",
    type: "Power",
    id: "ID_FMP_POWER_3660",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3660",
    categories: ["Indomitable Resolve", "ID_FMP_POWER_3660", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Shift"] = new engine.RulesElement({
    name: "Indomitable Shift",
    type: "Power",
    id: "ID_FMP_POWER_5501",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5501",
    categories: ["Indomitable Shift", "ID_FMP_POWER_5501", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable End"] = new engine.RulesElement({
    name: "Inevitable End",
    type: "Power",
    id: "ID_FMP_POWER_3539",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3539",
    categories: ["Inevitable End", "ID_FMP_POWER_3539", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Pursuit"] = new engine.RulesElement({
    name: "Inexorable Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_2943",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2943",
    categories: ["Inexorable Pursuit", "ID_FMP_POWER_2943", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Nova"] = new engine.RulesElement({
    name: "Infernal Nova",
    type: "Power",
    id: "ID_FMP_POWER_5496",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5496",
    categories: ["Infernal Nova", "ID_FMP_POWER_5496", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_252", "Turathi Highborn", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Insect Plague"] = new engine.RulesElement({
    name: "Insect Plague",
    type: "Power",
    id: "ID_FMP_POWER_5063",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5063",
    categories: ["Insect Plague", "ID_FMP_POWER_5063", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Inspire Competence"] = new engine.RulesElement({
    name: "Inspire Competence",
    type: "Power",
    id: "ID_FMP_POWER_4990",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4990",
    categories: ["Inspire Competence", "ID_FMP_POWER_4990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Refrain"] = new engine.RulesElement({
    name: "Inspiring Refrain",
    type: "Power",
    id: "ID_FMP_POWER_2348",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2348",
    categories: ["Inspiring Refrain", "ID_FMP_POWER_2348", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Instinctive Charge"] = new engine.RulesElement({
    name: "Instinctive Charge",
    type: "Power",
    id: "ID_FMP_POWER_4834",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4834",
    categories: ["Instinctive Charge", "ID_FMP_POWER_4834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Invert Resistance"] = new engine.RulesElement({
    name: "Invert Resistance",
    type: "Power",
    id: "ID_FMP_POWER_3779",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3779",
    categories: ["Invert Resistance", "ID_FMP_POWER_3779", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Invisible Troupe"] = new engine.RulesElement({
    name: "Invisible Troupe",
    type: "Power",
    id: "ID_FMP_POWER_2417",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2417",
    categories: ["Invisible Troupe", "ID_FMP_POWER_2417", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke Angelic Form"] = new engine.RulesElement({
    name: "Invoke Angelic Form",
    type: "Power",
    id: "ID_FMP_POWER_2881",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2881",
    categories: ["Invoke Angelic Form", "ID_FMP_POWER_2881", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke Heroism"] = new engine.RulesElement({
    name: "Invoke Heroism",
    type: "Power",
    id: "ID_FMP_POWER_3355",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3355",
    categories: ["Invoke Heroism", "ID_FMP_POWER_3355", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke Obedience"] = new engine.RulesElement({
    name: "Invoke Obedience",
    type: "Power",
    id: "ID_FMP_POWER_2869",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2869",
    categories: ["Invoke Obedience", "ID_FMP_POWER_2869", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke Terror"] = new engine.RulesElement({
    name: "Invoke Terror",
    type: "Power",
    id: "ID_FMP_POWER_3305",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3305",
    categories: ["Invoke Terror", "ID_FMP_POWER_3305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke the Absolute Dark"] = new engine.RulesElement({
    name: "Invoke the Absolute Dark",
    type: "Power",
    id: "ID_FMP_POWER_3318",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3318",
    categories: ["Invoke the Absolute Dark", "ID_FMP_POWER_3318", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke the Fallen"] = new engine.RulesElement({
    name: "Invoke the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_3345",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3345",
    categories: ["Invoke the Fallen", "ID_FMP_POWER_3345", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Chains"] = new engine.RulesElement({
    name: "Iron Chains",
    type: "Power",
    id: "ID_FMP_POWER_5307",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5307",
    categories: ["Iron Chains", "ID_FMP_POWER_5307", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Hammer Rage"] = new engine.RulesElement({
    name: "Iron Hammer Rage",
    type: "Power",
    id: "ID_FMP_POWER_4956",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4956",
    categories: ["Iron Hammer Rage", "ID_FMP_POWER_4956", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Ironborn Spirit"] = new engine.RulesElement({
    name: "Ironborn Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3924",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3924",
    categories: ["Ironborn Spirit", "ID_FMP_POWER_3924", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Irresistible Dance"] = new engine.RulesElement({
    name: "Irresistible Dance",
    type: "Power",
    id: "ID_FMP_POWER_5012",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5012",
    categories: ["Irresistible Dance", "ID_FMP_POWER_5012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Jaws of the Earth"] = new engine.RulesElement({
    name: "Jaws of the Earth",
    type: "Power",
    id: "ID_FMP_POWER_5285",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5285",
    categories: ["Jaws of the Earth", "ID_FMP_POWER_5285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Kaleidoscopic Burst"] = new engine.RulesElement({
    name: "Kaleidoscopic Burst",
    type: "Power",
    id: "ID_FMP_POWER_5018",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5018",
    categories: ["Kaleidoscopic Burst", "ID_FMP_POWER_5018", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Last Stand"] = new engine.RulesElement({
    name: "Last Stand",
    type: "Power",
    id: "ID_FMP_POWER_193",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=193",
    categories: ["Last Stand", "ID_FMP_POWER_193", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Latch On"] = new engine.RulesElement({
    name: "Latch On",
    type: "Power",
    id: "ID_FMP_POWER_2804",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2804",
    categories: ["Latch On", "ID_FMP_POWER_2804", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Rake"] = new engine.RulesElement({
    name: "Leaping Rake",
    type: "Power",
    id: "ID_FMP_POWER_2691",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2691",
    categories: ["Leaping Rake", "ID_FMP_POWER_2691", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lifeleech Thorns"] = new engine.RulesElement({
    name: "Lifeleech Thorns",
    type: "Power",
    id: "ID_FMP_POWER_5079",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5079",
    categories: ["Lifeleech Thorns", "ID_FMP_POWER_5079", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Light of the Avenging Sun"] = new engine.RulesElement({
    name: "Light of the Avenging Sun",
    type: "Power",
    id: "ID_FMP_POWER_2902",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2902",
    categories: ["Light of the Avenging Sun", "ID_FMP_POWER_2902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Barrage"] = new engine.RulesElement({
    name: "Lightning Barrage",
    type: "Power",
    id: "ID_FMP_POWER_5152",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5152",
    categories: ["Lightning Barrage", "ID_FMP_POWER_5152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Breath"] = new engine.RulesElement({
    name: "Lightning Breath",
    type: "Power",
    id: "ID_FMP_POWER_5266",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5266",
    categories: ["Lightning Breath", "ID_FMP_POWER_5266", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Cascade"] = new engine.RulesElement({
    name: "Lightning Cascade",
    type: "Power",
    id: "ID_FMP_POWER_2686",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2686",
    categories: ["Lightning Cascade", "ID_FMP_POWER_2686", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Eruption"] = new engine.RulesElement({
    name: "Lightning Eruption",
    type: "Power",
    id: "ID_FMP_POWER_5311",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5311",
    categories: ["Lightning Eruption", "ID_FMP_POWER_5311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Panther Spirit"] = new engine.RulesElement({
    name: "Lightning Panther Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5395",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5395",
    categories: ["Lightning Panther Spirit", "ID_FMP_POWER_5395", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Longtooth Shifting"] = new engine.RulesElement({
    name: "Longtooth Shifting",
    type: "Power",
    id: "ID_FMP_POWER_2483",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2483",
    categories: ["Longtooth Shifting", "ID_FMP_POWER_2483", "ID_FMP_RACIAL_TRAIT_429", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Loss of Will"] = new engine.RulesElement({
    name: "Loss of Will",
    type: "Power",
    id: "ID_FMP_POWER_4946",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4946",
    categories: ["Loss of Will", "ID_FMP_POWER_4946", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Lunge and Vanish"] = new engine.RulesElement({
    name: "Lunge and Vanish",
    type: "Power",
    id: "ID_FMP_POWER_2712",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2712",
    categories: ["Lunge and Vanish", "ID_FMP_POWER_2712", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Macetail's Rage"] = new engine.RulesElement({
    name: "Macetail's Rage",
    type: "Power",
    id: "ID_FMP_POWER_4935",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4935",
    categories: ["Macetail's Rage", "ID_FMP_POWER_4935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Majestic Word"] = new engine.RulesElement({
    name: "Majestic Word",
    type: "Power",
    id: "ID_FMP_POWER_2339",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2339",
    categories: ["Majestic Word", "ID_FMP_POWER_2339"]
  });
  byID[te.id] = te;
  
  te = Power["Malediction of Gartak"] = new engine.RulesElement({
    name: "Malediction of Gartak",
    type: "Power",
    id: "ID_FMP_POWER_3346",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3346",
    categories: ["Malediction of Gartak", "ID_FMP_POWER_3346", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Anathema"] = new engine.RulesElement({
    name: "Mark of Anathema",
    type: "Power",
    id: "ID_FMP_POWER_486",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=486",
    categories: ["Mark of Anathema", "ID_FMP_POWER_486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Castigation"] = new engine.RulesElement({
    name: "Mark of Castigation",
    type: "Power",
    id: "ID_FMP_POWER_5204",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5204",
    categories: ["Mark of Castigation", "ID_FMP_POWER_5204", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_273", "Hammer of Vengeance (PH2)", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Martyr's Ward"] = new engine.RulesElement({
    name: "Martyr's Ward",
    type: "Power",
    id: "ID_FMP_POWER_5193",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5193",
    categories: ["Martyr's Ward", "ID_FMP_POWER_5193", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Masks of Menace"] = new engine.RulesElement({
    name: "Masks of Menace",
    type: "Power",
    id: "ID_FMP_POWER_2410",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2410",
    categories: ["Masks of Menace", "ID_FMP_POWER_2410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Mauling Bear"] = new engine.RulesElement({
    name: "Mauling Bear",
    type: "Power",
    id: "ID_FMP_POWER_4978",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4978",
    categories: ["Mauling Bear", "ID_FMP_POWER_4978", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_258", "Bear Warrior", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Memory of a Thousand Lifetimes"] = new engine.RulesElement({
    name: "Memory of a Thousand Lifetimes",
    type: "Power",
    id: "ID_FMP_POWER_6186",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6186",
    categories: ["Memory of a Thousand Lifetimes", "ID_FMP_POWER_6186", "ID_FMP_RACIAL_TRAIT_1140", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Menacing Thunder"] = new engine.RulesElement({
    name: "Menacing Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5006",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5006",
    categories: ["Menacing Thunder", "ID_FMP_POWER_5006", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Hammer"] = new engine.RulesElement({
    name: "Mind Hammer",
    type: "Power",
    id: "ID_FMP_POWER_5286",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5286",
    categories: ["Mind Hammer", "ID_FMP_POWER_5286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Mirrored Entourage"] = new engine.RulesElement({
    name: "Mirrored Entourage",
    type: "Power",
    id: "ID_FMP_POWER_2418",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2418",
    categories: ["Mirrored Entourage", "ID_FMP_POWER_2418", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Misdirected Mark"] = new engine.RulesElement({
    name: "Misdirected Mark",
    type: "Power",
    id: "ID_FMP_POWER_2365",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2365",
    categories: ["Misdirected Mark", "ID_FMP_POWER_2365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Monkey's Grip"] = new engine.RulesElement({
    name: "Monkey's Grip",
    type: "Power",
    id: "ID_FMP_POWER_5143",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5143",
    categories: ["Monkey's Grip", "ID_FMP_POWER_5143", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Grasp"] = new engine.RulesElement({
    name: "Mountain Grasp",
    type: "Power",
    id: "ID_FMP_POWER_4961",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4961",
    categories: ["Mountain Grasp", "ID_FMP_POWER_4961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Hammer"] = new engine.RulesElement({
    name: "Mountain Hammer",
    type: "Power",
    id: "ID_FMP_POWER_5124",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5124",
    categories: ["Mountain Hammer", "ID_FMP_POWER_5124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Lion Step"] = new engine.RulesElement({
    name: "Mountain Lion Step",
    type: "Power",
    id: "ID_FMP_POWER_5108",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5108",
    categories: ["Mountain Lion Step", "ID_FMP_POWER_5108", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Roots"] = new engine.RulesElement({
    name: "Mountain Roots",
    type: "Power",
    id: "ID_FMP_POWER_4839",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4839",
    categories: ["Mountain Roots", "ID_FMP_POWER_4839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Stance Strike"] = new engine.RulesElement({
    name: "Mountain Stance Strike",
    type: "Power",
    id: "ID_FMP_POWER_5480",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5480",
    categories: ["Mountain Stance Strike", "ID_FMP_POWER_5480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_246", "Firstborn of Moradin", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Sweep"] = new engine.RulesElement({
    name: "Mountain Sweep",
    type: "Power",
    id: "ID_FMP_POWER_5492",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5492",
    categories: ["Mountain Sweep", "ID_FMP_POWER_5492", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_251", "Stoneblessed", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Murderous Rage"] = new engine.RulesElement({
    name: "Murderous Rage",
    type: "Power",
    id: "ID_FMP_POWER_5473",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5473",
    categories: ["Murderous Rage", "ID_FMP_POWER_5473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_244", "Bloodfury Savage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Murderous Rage") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Narrow Escape"] = new engine.RulesElement({
    name: "Narrow Escape",
    type: "Power",
    id: "ID_FMP_POWER_5283",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5283",
    categories: ["Narrow Escape", "ID_FMP_POWER_5283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Abundance"] = new engine.RulesElement({
    name: "Nature's Abundance",
    type: "Power",
    id: "ID_FMP_POWER_5109",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5109",
    categories: ["Nature's Abundance", "ID_FMP_POWER_5109", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Ally"] = new engine.RulesElement({
    name: "Nature's Ally",
    type: "Power",
    id: "ID_FMP_POWER_5157",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5157",
    categories: ["Nature's Ally", "ID_FMP_POWER_5157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Grave"] = new engine.RulesElement({
    name: "Nature's Grave",
    type: "Power",
    id: "ID_FMP_POWER_5083",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5083",
    categories: ["Nature's Grave", "ID_FMP_POWER_5083", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_266", "Blood Moon Stalker", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Rage"] = new engine.RulesElement({
    name: "Nature's Rage",
    type: "Power",
    id: "ID_FMP_POWER_5500",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5500",
    categories: ["Nature's Rage", "ID_FMP_POWER_5500", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_253", "Twilight Guardian", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Nature's Rage") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Numinous Cascade"] = new engine.RulesElement({
    name: "Numinous Cascade",
    type: "Power",
    id: "ID_FMP_POWER_5201",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5201",
    categories: ["Numinous Cascade", "ID_FMP_POWER_5201", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_272", "Flame of Hope", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Oak Hammer Rage"] = new engine.RulesElement({
    name: "Oak Hammer Rage",
    type: "Power",
    id: "ID_FMP_POWER_4837",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4837",
    categories: ["Oak Hammer Rage", "ID_FMP_POWER_4837", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Oath Bond"] = new engine.RulesElement({
    name: "Oath Bond",
    type: "Power",
    id: "ID_FMP_POWER_5359",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5359",
    categories: ["Oath Bond", "ID_FMP_POWER_5359", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_255", "Oathsworn", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Consuming Light"] = new engine.RulesElement({
    name: "Oath of Consuming Light",
    type: "Power",
    id: "ID_FMP_POWER_2920",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2920",
    categories: ["Oath of Consuming Light", "ID_FMP_POWER_2920", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Divine Lightning"] = new engine.RulesElement({
    name: "Oath of Divine Lightning",
    type: "Power",
    id: "ID_FMP_POWER_5347",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5347",
    categories: ["Oath of Divine Lightning", "ID_FMP_POWER_5347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Enduring Wrath"] = new engine.RulesElement({
    name: "Oath of Enduring Wrath",
    type: "Power",
    id: "ID_FMP_POWER_2933",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2933",
    categories: ["Oath of Enduring Wrath", "ID_FMP_POWER_2933", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Enmity"] = new engine.RulesElement({
    name: "Oath of Enmity",
    type: "Power",
    id: "ID_FMP_POWER_3069",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3069",
    categories: ["Oath of Enmity", "ID_FMP_POWER_3069"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Pursuit"] = new engine.RulesElement({
    name: "Oath of Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_3638",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3638",
    categories: ["Oath of Pursuit", "ID_FMP_POWER_3638", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of the Final Duel"] = new engine.RulesElement({
    name: "Oath of the Final Duel",
    type: "Power",
    id: "ID_FMP_POWER_3590",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3590",
    categories: ["Oath of the Final Duel", "ID_FMP_POWER_3590", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of the Final Strike"] = new engine.RulesElement({
    name: "Oath of the Final Strike",
    type: "Power",
    id: "ID_FMP_POWER_3664",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3664",
    categories: ["Oath of the Final Strike", "ID_FMP_POWER_3664", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of the Inevitable Blade"] = new engine.RulesElement({
    name: "Oath of the Inevitable Blade",
    type: "Power",
    id: "ID_FMP_POWER_3644",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3644",
    categories: ["Oath of the Inevitable Blade", "ID_FMP_POWER_3644", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of the Relentless Hunter"] = new engine.RulesElement({
    name: "Oath of the Relentless Hunter",
    type: "Power",
    id: "ID_FMP_POWER_3657",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3657",
    categories: ["Oath of the Relentless Hunter", "ID_FMP_POWER_3657", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Weakness"] = new engine.RulesElement({
    name: "Oath of Weakness",
    type: "Power",
    id: "ID_FMP_POWER_5357",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5357",
    categories: ["Oath of Weakness", "ID_FMP_POWER_5357", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_255", "Oathsworn", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Obscuring Mist"] = new engine.RulesElement({
    name: "Obscuring Mist",
    type: "Power",
    id: "ID_FMP_POWER_2726",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2726",
    categories: ["Obscuring Mist", "ID_FMP_POWER_2726", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ode to Sacrifice"] = new engine.RulesElement({
    name: "Ode to Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_2374",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2374",
    categories: ["Ode to Sacrifice", "ID_FMP_POWER_2374", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Offering of Justice"] = new engine.RulesElement({
    name: "Offering of Justice",
    type: "Power",
    id: "ID_FMP_POWER_2865",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2865",
    categories: ["Offering of Justice", "ID_FMP_POWER_2865", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Offering of Peace"] = new engine.RulesElement({
    name: "Offering of Peace",
    type: "Power",
    id: "ID_FMP_POWER_3300",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3300",
    categories: ["Offering of Peace", "ID_FMP_POWER_3300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Strike"] = new engine.RulesElement({
    name: "Overwhelming Strike",
    type: "Power",
    id: "ID_FMP_POWER_3423",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3423",
    categories: ["Overwhelming Strike", "ID_FMP_POWER_3423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Palest Flames"] = new engine.RulesElement({
    name: "Palest Flames",
    type: "Power",
    id: "ID_FMP_POWER_3759",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3759",
    categories: ["Palest Flames", "ID_FMP_POWER_3759", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Panacea"] = new engine.RulesElement({
    name: "Panacea",
    type: "Power",
    id: "ID_FMP_POWER_5154",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5154",
    categories: ["Panacea", "ID_FMP_POWER_5154", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Past-Life Guardian"] = new engine.RulesElement({
    name: "Past-Life Guardian",
    type: "Power",
    id: "ID_FMP_POWER_5468",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5468",
    categories: ["Past-Life Guardian", "ID_FMP_POWER_5468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_242", "Ancestral Incarnate", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Past-Life Servant"] = new engine.RulesElement({
    name: "Past-Life Servant",
    type: "Power",
    id: "ID_FMP_POWER_5469",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5469",
    categories: ["Past-Life Servant", "ID_FMP_POWER_5469", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_242", "Ancestral Incarnate", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Past-Life Vanguard"] = new engine.RulesElement({
    name: "Past-Life Vanguard",
    type: "Power",
    id: "ID_FMP_POWER_5470",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5470",
    categories: ["Past-Life Vanguard", "ID_FMP_POWER_5470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_242", "Ancestral Incarnate", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Frenzy"] = new engine.RulesElement({
    name: "Persistent Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4861",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4861",
    categories: ["Persistent Frenzy", "ID_FMP_POWER_4861", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_214", "Frenzied Berserker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Beast (Daily 22)"] = new engine.RulesElement({
    name: "Phantom Beast (Daily 22)",
    type: "Power",
    id: "ID_FMP_POWER_2740",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2740",
    categories: ["Phantom Beast (Daily 22)", "ID_FMP_POWER_2740", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Phase Duel"] = new engine.RulesElement({
    name: "Phase Duel",
    type: "Power",
    id: "ID_FMP_POWER_5351",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5351",
    categories: ["Phase Duel", "ID_FMP_POWER_5351", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Pillar of Guardian Flame"] = new engine.RulesElement({
    name: "Pillar of Guardian Flame",
    type: "Power",
    id: "ID_FMP_POWER_3297",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3297",
    categories: ["Pillar of Guardian Flame", "ID_FMP_POWER_3297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Plates of Ice"] = new engine.RulesElement({
    name: "Plates of Ice",
    type: "Power",
    id: "ID_FMP_POWER_6538",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6538",
    categories: ["Plates of Ice", "ID_FMP_POWER_6538", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Scales"] = new engine.RulesElement({
    name: "Platinum Scales",
    type: "Power",
    id: "ID_FMP_POWER_5302",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5302",
    categories: ["Platinum Scales", "ID_FMP_POWER_5302", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Poison Ward"] = new engine.RulesElement({
    name: "Poison Ward",
    type: "Power",
    id: "ID_FMP_POWER_5312",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5312",
    categories: ["Poison Ward", "ID_FMP_POWER_5312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Poisonous Evasion"] = new engine.RulesElement({
    name: "Poisonous Evasion",
    type: "Power",
    id: "ID_FMP_POWER_5296",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5296",
    categories: ["Poisonous Evasion", "ID_FMP_POWER_5296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Poisonous Exhalation"] = new engine.RulesElement({
    name: "Poisonous Exhalation",
    type: "Power",
    id: "ID_FMP_POWER_5270",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5270",
    categories: ["Poisonous Exhalation", "ID_FMP_POWER_5270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Polar Blast"] = new engine.RulesElement({
    name: "Polar Blast",
    type: "Power",
    id: "ID_FMP_POWER_2694",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2694",
    categories: ["Polar Blast", "ID_FMP_POWER_2694", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ponderous Strike"] = new engine.RulesElement({
    name: "Ponderous Strike",
    type: "Power",
    id: "ID_FMP_POWER_5136",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5136",
    categories: ["Ponderous Strike", "ID_FMP_POWER_5136", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Pounce"] = new engine.RulesElement({
    name: "Pounce",
    type: "Power",
    id: "ID_FMP_POWER_5037",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5037",
    categories: ["Pounce", "ID_FMP_POWER_5037", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Predator Spirit"] = new engine.RulesElement({
    name: "Predator Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5423",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5423",
    categories: ["Predator Spirit", "ID_FMP_POWER_5423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_275", "Ghost Panther", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Predator's Flurry"] = new engine.RulesElement({
    name: "Predator's Flurry",
    type: "Power",
    id: "ID_FMP_POWER_5048",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5048",
    categories: ["Predator's Flurry", "ID_FMP_POWER_5048", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Predatory Guardian"] = new engine.RulesElement({
    name: "Predatory Guardian",
    type: "Power",
    id: "ID_FMP_POWER_5113",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5113",
    categories: ["Predatory Guardian", "ID_FMP_POWER_5113", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Preserver's Rebuke"] = new engine.RulesElement({
    name: "Preserver's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_5185",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5185",
    categories: ["Preserver's Rebuke", "ID_FMP_POWER_5185", "ID_FMP_CLASS_FEATURE_1265", "Covenant of Preservation", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Press the Kill"] = new engine.RulesElement({
    name: "Press the Kill",
    type: "Power",
    id: "ID_FMP_POWER_4985",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4985",
    categories: ["Press the Kill", "ID_FMP_POWER_4985", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_261", "Wildrunner", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Pressing Strike"] = new engine.RulesElement({
    name: "Pressing Strike",
    type: "Power",
    id: "ID_FMP_POWER_4819",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4819",
    categories: ["Pressing Strike", "ID_FMP_POWER_4819", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Archetype"] = new engine.RulesElement({
    name: "Primal Archetype",
    type: "Power",
    id: "ID_FMP_POWER_5080",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5080",
    categories: ["Primal Archetype", "ID_FMP_POWER_5080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Bear"] = new engine.RulesElement({
    name: "Primal Bear",
    type: "Power",
    id: "ID_FMP_POWER_5065",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5065",
    categories: ["Primal Bear", "ID_FMP_POWER_5065", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Eagle"] = new engine.RulesElement({
    name: "Primal Eagle",
    type: "Power",
    id: "ID_FMP_POWER_5092",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5092",
    categories: ["Primal Eagle", "ID_FMP_POWER_5092", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_269", "Sky Hunter", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Gust"] = new engine.RulesElement({
    name: "Primal Gust",
    type: "Power",
    id: "ID_FMP_POWER_5402",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5402",
    categories: ["Primal Gust", "ID_FMP_POWER_5402", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Instinct"] = new engine.RulesElement({
    name: "Primal Instinct",
    type: "Power",
    id: "ID_FMP_POWER_4851",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4851",
    categories: ["Primal Instinct", "ID_FMP_POWER_4851", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Leap"] = new engine.RulesElement({
    name: "Primal Leap",
    type: "Power",
    id: "ID_FMP_POWER_5144",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5144",
    categories: ["Primal Leap", "ID_FMP_POWER_5144", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Resistance"] = new engine.RulesElement({
    name: "Primal Resistance",
    type: "Power",
    id: "ID_FMP_POWER_4959",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4959",
    categories: ["Primal Resistance", "ID_FMP_POWER_4959", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Restoration"] = new engine.RulesElement({
    name: "Primal Restoration",
    type: "Power",
    id: "ID_FMP_POWER_2737",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2737",
    categories: ["Primal Restoration", "ID_FMP_POWER_2737", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Roar"] = new engine.RulesElement({
    name: "Primal Roar",
    type: "Power",
    id: "ID_FMP_POWER_5071",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5071",
    categories: ["Primal Roar", "ID_FMP_POWER_5071", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Storm"] = new engine.RulesElement({
    name: "Primal Storm",
    type: "Power",
    id: "ID_FMP_POWER_5074",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5074",
    categories: ["Primal Storm", "ID_FMP_POWER_5074", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7306"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Primal Storm Attack"] = new engine.RulesElement({
    name: "Primal Storm Attack",
    type: "Power",
    id: "ID_FMP_POWER_7306",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7306",
    categories: ["Primal Storm Attack", "ID_FMP_POWER_7306", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Tiger"] = new engine.RulesElement({
    name: "Primal Tiger",
    type: "Power",
    id: "ID_FMP_POWER_5075",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5075",
    categories: ["Primal Tiger", "ID_FMP_POWER_5075", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Vigor"] = new engine.RulesElement({
    name: "Primal Vigor",
    type: "Power",
    id: "ID_FMP_POWER_4965",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4965",
    categories: ["Primal Vigor", "ID_FMP_POWER_4965", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Vitality"] = new engine.RulesElement({
    name: "Primal Vitality",
    type: "Power",
    id: "ID_FMP_POWER_4827",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4827",
    categories: ["Primal Vitality", "ID_FMP_POWER_4827", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Wolf"] = new engine.RulesElement({
    name: "Primal Wolf",
    type: "Power",
    id: "ID_FMP_POWER_5055",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5055",
    categories: ["Primal Wolf", "ID_FMP_POWER_5055", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Wolverine"] = new engine.RulesElement({
    name: "Primal Wolverine",
    type: "Power",
    id: "ID_FMP_POWER_5050",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5050",
    categories: ["Primal Wolverine", "ID_FMP_POWER_5050", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Prime the Fire"] = new engine.RulesElement({
    name: "Prime the Fire",
    type: "Power",
    id: "ID_FMP_POWER_3771",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3771",
    categories: ["Prime the Fire", "ID_FMP_POWER_3771", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Bolt"] = new engine.RulesElement({
    name: "Prismatic Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5329",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5329",
    categories: ["Prismatic Bolt", "ID_FMP_POWER_5329", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_281", "Wild Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Explosion"] = new engine.RulesElement({
    name: "Prismatic Explosion",
    type: "Power",
    id: "ID_FMP_POWER_5299",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5299",
    categories: ["Prismatic Explosion", "ID_FMP_POWER_5299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Storm"] = new engine.RulesElement({
    name: "Prismatic Storm",
    type: "Power",
    id: "ID_FMP_POWER_5318",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5318",
    categories: ["Prismatic Storm", "ID_FMP_POWER_5318", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Problem Solver"] = new engine.RulesElement({
    name: "Problem Solver",
    type: "Power",
    id: "ID_FMP_POWER_5482",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5482",
    categories: ["Problem Solver", "ID_FMP_POWER_5482", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_247", "Halfling Scoundrel", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Protecting Strike"] = new engine.RulesElement({
    name: "Protecting Strike",
    type: "Power",
    id: "ID_FMP_POWER_6521",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6521",
    categories: ["Protecting Strike", "ID_FMP_POWER_6521", "ID_FMP_CLASS_FEATURE_1251", "Protector Spirit", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Purging Flame"] = new engine.RulesElement({
    name: "Purging Flame",
    type: "Power",
    id: "ID_FMP_POWER_2875",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2875",
    categories: ["Purging Flame", "ID_FMP_POWER_2875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Steel Dance"] = new engine.RulesElement({
    name: "Quick Steel Dance",
    type: "Power",
    id: "ID_FMP_POWER_5007",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5007",
    categories: ["Quick Steel Dance", "ID_FMP_POWER_5007", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Racking Invocation of Pain"] = new engine.RulesElement({
    name: "Racking Invocation of Pain",
    type: "Power",
    id: "ID_FMP_POWER_3338",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3338",
    categories: ["Racking Invocation of Pain", "ID_FMP_POWER_3338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Vengeance"] = new engine.RulesElement({
    name: "Radiant Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_2894",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2894",
    categories: ["Radiant Vengeance", "ID_FMP_POWER_2894", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Visage"] = new engine.RulesElement({
    name: "Radiant Visage",
    type: "Power",
    id: "ID_FMP_POWER_5360",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5360",
    categories: ["Radiant Visage", "ID_FMP_POWER_5360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_256", "Unveiled Visage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rage Drake's Frenzy"] = new engine.RulesElement({
    name: "Rage Drake's Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4936",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4936",
    categories: ["Rage Drake's Frenzy", "ID_FMP_POWER_4936", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Primal Beast"] = new engine.RulesElement({
    name: "Rage of the Primal Beast",
    type: "Power",
    id: "ID_FMP_POWER_4859",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4859",
    categories: ["Rage of the Primal Beast", "ID_FMP_POWER_4859", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rage Strike"] = new engine.RulesElement({
    name: "Rage Strike",
    type: "Power",
    id: "ID_FMP_POWER_4807",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4807",
    categories: ["Rage Strike", "ID_FMP_POWER_4807"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Raging Storm Spirit"] = new engine.RulesElement({
    name: "Raging Storm Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3875",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3875",
    categories: ["Raging Storm Spirit", "ID_FMP_POWER_3875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Colorless Fire"] = new engine.RulesElement({
    name: "Rain of Colorless Fire",
    type: "Power",
    id: "ID_FMP_POWER_3344",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3344",
    categories: ["Rain of Colorless Fire", "ID_FMP_POWER_3344", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rampaging Bear"] = new engine.RulesElement({
    name: "Rampaging Bear",
    type: "Power",
    id: "ID_FMP_POWER_4980",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4980",
    categories: ["Rampaging Bear", "ID_FMP_POWER_4980", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_258", "Bear Warrior", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Rampaging Dragon Strike"] = new engine.RulesElement({
    name: "Rampaging Dragon Strike",
    type: "Power",
    id: "ID_FMP_POWER_4975",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4975",
    categories: ["Rampaging Dragon Strike", "ID_FMP_POWER_4975", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Razorclaw Shifting"] = new engine.RulesElement({
    name: "Razorclaw Shifting",
    type: "Power",
    id: "ID_FMP_POWER_2484",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2484",
    categories: ["Razorclaw Shifting", "ID_FMP_POWER_2484", "ID_FMP_RACIAL_TRAIT_720", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Razorleaf Cut"] = new engine.RulesElement({
    name: "Razorleaf Cut",
    type: "Power",
    id: "ID_FMP_POWER_5149",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5149",
    categories: ["Razorleaf Cut", "ID_FMP_POWER_5149", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Ready the Final Blow"] = new engine.RulesElement({
    name: "Ready the Final Blow",
    type: "Power",
    id: "ID_FMP_POWER_3527",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3527",
    categories: ["Ready the Final Blow", "ID_FMP_POWER_3527", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Rebuke Undead"] = new engine.RulesElement({
    name: "Rebuke Undead",
    type: "Power",
    id: "ID_FMP_POWER_5186",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5186",
    categories: ["Rebuke Undead", "ID_FMP_POWER_5186", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_127", "Invoker"]
  });
  byID[te.id] = te;
  
  te = Power["Receive the Charge"] = new engine.RulesElement({
    name: "Receive the Charge",
    type: "Power",
    id: "ID_FMP_POWER_5478",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5478",
    categories: ["Receive the Charge", "ID_FMP_POWER_5478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_246", "Firstborn of Moradin", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Recuperating Strike"] = new engine.RulesElement({
    name: "Recuperating Strike",
    type: "Power",
    id: "ID_FMP_POWER_4820",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4820",
    categories: ["Recuperating Strike", "ID_FMP_POWER_4820", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reeling Torment"] = new engine.RulesElement({
    name: "Reeling Torment",
    type: "Power",
    id: "ID_FMP_POWER_5273",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5273",
    categories: ["Reeling Torment", "ID_FMP_POWER_5273", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Refocus Enmity"] = new engine.RulesElement({
    name: "Refocus Enmity",
    type: "Power",
    id: "ID_FMP_POWER_5338",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5338",
    categories: ["Refocus Enmity", "ID_FMP_POWER_5338", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Renewal"] = new engine.RulesElement({
    name: "Renewal",
    type: "Power",
    id: "ID_FMP_POWER_5155",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5155",
    categories: ["Renewal", "ID_FMP_POWER_5155", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Renewing Strike"] = new engine.RulesElement({
    name: "Renewing Strike",
    type: "Power",
    id: "ID_FMP_POWER_2915",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2915",
    categories: ["Renewing Strike", "ID_FMP_POWER_2915", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Resolve of Steel"] = new engine.RulesElement({
    name: "Resolve of Steel",
    type: "Power",
    id: "ID_FMP_POWER_5355",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5355",
    categories: ["Resolve of Steel", "ID_FMP_POWER_5355", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_254", "Hammer of Judgment", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Resonant Escape"] = new engine.RulesElement({
    name: "Resonant Escape",
    type: "Power",
    id: "ID_FMP_POWER_2928",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2928",
    categories: ["Resonant Escape", "ID_FMP_POWER_2928", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Returning Strength"] = new engine.RulesElement({
    name: "Returning Strength",
    type: "Power",
    id: "ID_FMP_POWER_5131",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5131",
    categories: ["Returning Strength", "ID_FMP_POWER_5131", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Revitalizing Pounce"] = new engine.RulesElement({
    name: "Revitalizing Pounce",
    type: "Power",
    id: "ID_FMP_POWER_5062",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5062",
    categories: ["Revitalizing Pounce", "ID_FMP_POWER_5062", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rhythm of Disorientation"] = new engine.RulesElement({
    name: "Rhythm of Disorientation",
    type: "Power",
    id: "ID_FMP_POWER_2396",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2396",
    categories: ["Rhythm of Disorientation", "ID_FMP_POWER_2396", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rimefire Spirit"] = new engine.RulesElement({
    name: "Rimefire Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3792",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3792",
    categories: ["Rimefire Spirit", "ID_FMP_POWER_3792", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rimestorm"] = new engine.RulesElement({
    name: "Rimestorm",
    type: "Power",
    id: "ID_FMP_POWER_3765",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3765",
    categories: ["Rimestorm", "ID_FMP_POWER_3765", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["River of Life"] = new engine.RulesElement({
    name: "River of Life",
    type: "Power",
    id: "ID_FMP_POWER_2938",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2938",
    categories: ["River of Life", "ID_FMP_POWER_2938", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Roar of Terror"] = new engine.RulesElement({
    name: "Roar of Terror",
    type: "Power",
    id: "ID_FMP_POWER_2789",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2789",
    categories: ["Roar of Terror", "ID_FMP_POWER_2789", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Roar of Triumph"] = new engine.RulesElement({
    name: "Roar of Triumph",
    type: "Power",
    id: "ID_FMP_POWER_4932",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4932",
    categories: ["Roar of Triumph", "ID_FMP_POWER_4932"]
  });
  byID[te.id] = te;
  
  te = Power["Rock Shield Spirits"] = new engine.RulesElement({
    name: "Rock Shield Spirits",
    type: "Power",
    id: "ID_FMP_POWER_5403",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5403",
    categories: ["Rock Shield Spirits", "ID_FMP_POWER_5403", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rolling Echo"] = new engine.RulesElement({
    name: "Rolling Echo",
    type: "Power",
    id: "ID_FMP_POWER_5026",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5026",
    categories: ["Rolling Echo", "ID_FMP_POWER_5026", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_264", "Voice of Thunder", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Roots of Rescue"] = new engine.RulesElement({
    name: "Roots of Rescue",
    type: "Power",
    id: "ID_FMP_POWER_2733",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2733",
    categories: ["Roots of Rescue", "ID_FMP_POWER_2733", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Satire of Bravery"] = new engine.RulesElement({
    name: "Satire of Bravery",
    type: "Power",
    id: "ID_FMP_POWER_2370",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2370",
    categories: ["Satire of Bravery", "ID_FMP_POWER_2370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Satire of Leadership"] = new engine.RulesElement({
    name: "Satire of Leadership",
    type: "Power",
    id: "ID_FMP_POWER_2434",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2434",
    categories: ["Satire of Leadership", "ID_FMP_POWER_2434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Satire of Prowess"] = new engine.RulesElement({
    name: "Satire of Prowess",
    type: "Power",
    id: "ID_FMP_POWER_2416",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2416",
    categories: ["Satire of Prowess", "ID_FMP_POWER_2416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Frenzy"] = new engine.RulesElement({
    name: "Savage Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_5043",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5043",
    categories: ["Savage Frenzy", "ID_FMP_POWER_5043", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Rend"] = new engine.RulesElement({
    name: "Savage Rend",
    type: "Power",
    id: "ID_FMP_POWER_5038",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5038",
    categories: ["Savage Rend", "ID_FMP_POWER_5038", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Scatter to the Astral Winds"] = new engine.RulesElement({
    name: "Scatter to the Astral Winds",
    type: "Power",
    id: "ID_FMP_POWER_3540",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3540",
    categories: ["Scatter to the Astral Winds", "ID_FMP_POWER_3540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Scavenger's Prize"] = new engine.RulesElement({
    name: "Scavenger's Prize",
    type: "Power",
    id: "ID_FMP_POWER_2684",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2684",
    categories: ["Scavenger's Prize", "ID_FMP_POWER_2684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Scintillating Starburst"] = new engine.RulesElement({
    name: "Scintillating Starburst",
    type: "Power",
    id: "ID_FMP_POWER_5290",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5290",
    categories: ["Scintillating Starburst", "ID_FMP_POWER_5290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Scorpion's Claw Strike"] = new engine.RulesElement({
    name: "Scorpion's Claw Strike",
    type: "Power",
    id: "ID_FMP_POWER_4998",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4998",
    categories: ["Scorpion's Claw Strike", "ID_FMP_POWER_4998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Screaming Hawk Strike"] = new engine.RulesElement({
    name: "Screaming Hawk Strike",
    type: "Power",
    id: "ID_FMP_POWER_4981",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4981",
    categories: ["Screaming Hawk Strike", "ID_FMP_POWER_4981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_259", "Fearbringer Thane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Screaming Wind Strike"] = new engine.RulesElement({
    name: "Screaming Wind Strike",
    type: "Power",
    id: "ID_FMP_POWER_5166",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5166",
    categories: ["Screaming Wind Strike", "ID_FMP_POWER_5166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sea of Serpents"] = new engine.RulesElement({
    name: "Sea of Serpents",
    type: "Power",
    id: "ID_FMP_POWER_5418",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5418",
    categories: ["Sea of Serpents", "ID_FMP_POWER_5418", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Sea Stride"] = new engine.RulesElement({
    name: "Sea Stride",
    type: "Power",
    id: "ID_FMP_POWER_5121",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5121",
    categories: ["Sea Stride", "ID_FMP_POWER_5121", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Seal of the Heretic"] = new engine.RulesElement({
    name: "Seal of the Heretic",
    type: "Power",
    id: "ID_FMP_POWER_3299",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3299",
    categories: ["Seal of the Heretic", "ID_FMP_POWER_3299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Seal of the Serpent"] = new engine.RulesElement({
    name: "Seal of the Serpent",
    type: "Power",
    id: "ID_FMP_POWER_5421",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5421",
    categories: ["Seal of the Serpent", "ID_FMP_POWER_5421", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_274", "Disciple of the World Serpent", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Searing Orb"] = new engine.RulesElement({
    name: "Searing Orb",
    type: "Power",
    id: "ID_FMP_POWER_2877",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2877",
    categories: ["Searing Orb", "ID_FMP_POWER_2877", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Searing Wind of the South"] = new engine.RulesElement({
    name: "Searing Wind of the South",
    type: "Power",
    id: "ID_FMP_POWER_3908",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3908",
    categories: ["Searing Wind of the South", "ID_FMP_POWER_3908", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Second Ward of the Living Gate"] = new engine.RulesElement({
    name: "Second Ward of the Living Gate",
    type: "Power",
    id: "ID_FMP_POWER_5085",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5085",
    categories: ["Second Ward of the Living Gate", "ID_FMP_POWER_5085", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_267", "Guardian of the Living Gate", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sequestering Strike"] = new engine.RulesElement({
    name: "Sequestering Strike",
    type: "Power",
    id: "ID_FMP_POWER_2911",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2911",
    categories: ["Sequestering Strike", "ID_FMP_POWER_2911", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sequestering Word"] = new engine.RulesElement({
    name: "Sequestering Word",
    type: "Power",
    id: "ID_FMP_POWER_5345",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5345",
    categories: ["Sequestering Word", "ID_FMP_POWER_5345", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Serene Protection"] = new engine.RulesElement({
    name: "Serene Protection",
    type: "Power",
    id: "ID_FMP_POWER_5467",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5467",
    categories: ["Serene Protection", "ID_FMP_POWER_5467", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_291", "Revered One", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Serpentine Blast"] = new engine.RulesElement({
    name: "Serpentine Blast",
    type: "Power",
    id: "ID_FMP_POWER_554",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=554",
    categories: ["Serpentine Blast", "ID_FMP_POWER_554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent's Rebuke"] = new engine.RulesElement({
    name: "Serpent's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_5420",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5420",
    categories: ["Serpent's Rebuke", "ID_FMP_POWER_5420", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_274", "Disciple of the World Serpent", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shackles of the Mountain"] = new engine.RulesElement({
    name: "Shackles of the Mountain",
    type: "Power",
    id: "ID_FMP_POWER_3808",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3808",
    categories: ["Shackles of the Mountain", "ID_FMP_POWER_3808", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Endurance"] = new engine.RulesElement({
    name: "Shared Endurance",
    type: "Power",
    id: "ID_FMP_POWER_3348",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3348",
    categories: ["Shared Endurance", "ID_FMP_POWER_3348", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Madness"] = new engine.RulesElement({
    name: "Shared Madness",
    type: "Power",
    id: "ID_FMP_POWER_5335",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5335",
    categories: ["Shared Madness", "ID_FMP_POWER_5335", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Sorcery"] = new engine.RulesElement({
    name: "Shared Sorcery",
    type: "Power",
    id: "ID_FMP_POWER_5303",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5303",
    categories: ["Shared Sorcery", "ID_FMP_POWER_5303", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Shatterbone Strike"] = new engine.RulesElement({
    name: "Shatterbone Strike",
    type: "Power",
    id: "ID_FMP_POWER_4941",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4941",
    categories: ["Shatterbone Strike", "ID_FMP_POWER_4941", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Justice"] = new engine.RulesElement({
    name: "Shield of Justice",
    type: "Power",
    id: "ID_FMP_POWER_3356",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3356",
    categories: ["Shield of Justice", "ID_FMP_POWER_3356", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Light"] = new engine.RulesElement({
    name: "Shield of Light",
    type: "Power",
    id: "ID_FMP_POWER_2862",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2862",
    categories: ["Shield of Light", "ID_FMP_POWER_2862", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Stone"] = new engine.RulesElement({
    name: "Shield of Stone",
    type: "Power",
    id: "ID_FMP_POWER_5132",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5132",
    categories: ["Shield of Stone", "ID_FMP_POWER_5132", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Nimbus"] = new engine.RulesElement({
    name: "Shielding Nimbus",
    type: "Power",
    id: "ID_FMP_POWER_5196",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5196",
    categories: ["Shielding Nimbus", "ID_FMP_POWER_5196", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_270", "Angelic Aspect", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shifting Rake"] = new engine.RulesElement({
    name: "Shifting Rake",
    type: "Power",
    id: "ID_FMP_POWER_2683",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2683",
    categories: ["Shifting Rake", "ID_FMP_POWER_2683", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shifting Wilds Strike"] = new engine.RulesElement({
    name: "Shifting Wilds Strike",
    type: "Power",
    id: "ID_FMP_POWER_4984",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4984",
    categories: ["Shifting Wilds Strike", "ID_FMP_POWER_4984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_261", "Wildrunner", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shoulder Slam"] = new engine.RulesElement({
    name: "Shoulder Slam",
    type: "Power",
    id: "ID_FMP_POWER_4847",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4847",
    categories: ["Shoulder Slam", "ID_FMP_POWER_4847", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_4847:attack", function() { /* if you charge */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Power["Shout"] = new engine.RulesElement({
    name: "Shout",
    type: "Power",
    id: "ID_FMP_POWER_3767",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3767",
    categories: ["Shout", "ID_FMP_POWER_3767", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shout of Evasion"] = new engine.RulesElement({
    name: "Shout of Evasion",
    type: "Power",
    id: "ID_FMP_POWER_5008",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5008",
    categories: ["Shout of Evasion", "ID_FMP_POWER_5008", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shout of Triumph"] = new engine.RulesElement({
    name: "Shout of Triumph",
    type: "Power",
    id: "ID_FMP_POWER_2349",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2349",
    categories: ["Shout of Triumph", "ID_FMP_POWER_2349", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shroud of Awe"] = new engine.RulesElement({
    name: "Shroud of Awe",
    type: "Power",
    id: "ID_FMP_POWER_5190",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5190",
    categories: ["Shroud of Awe", "ID_FMP_POWER_5190", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shroud of Warning"] = new engine.RulesElement({
    name: "Shroud of Warning",
    type: "Power",
    id: "ID_FMP_POWER_3397",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3397",
    categories: ["Shroud of Warning", "ID_FMP_POWER_3397", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Carceri"] = new engine.RulesElement({
    name: "Sigil of Carceri",
    type: "Power",
    id: "ID_FMP_POWER_3650",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3650",
    categories: ["Sigil of Carceri", "ID_FMP_POWER_3650", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Damnation"] = new engine.RulesElement({
    name: "Sigil of Damnation",
    type: "Power",
    id: "ID_FMP_POWER_3649",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3649",
    categories: ["Sigil of Damnation", "ID_FMP_POWER_3649", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Phoenix Rage"] = new engine.RulesElement({
    name: "Silver Phoenix Rage",
    type: "Power",
    id: "ID_FMP_POWER_4943",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4943",
    categories: ["Silver Phoenix Rage", "ID_FMP_POWER_4943", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Skittering Sneak"] = new engine.RulesElement({
    name: "Skittering Sneak",
    type: "Power",
    id: "ID_FMP_POWER_5046",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5046",
    categories: ["Skittering Sneak", "ID_FMP_POWER_5046", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sky Talon"] = new engine.RulesElement({
    name: "Sky Talon",
    type: "Power",
    id: "ID_FMP_POWER_5069",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5069",
    categories: ["Sky Talon", "ID_FMP_POWER_5069", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Slashing Claws"] = new engine.RulesElement({
    name: "Slashing Claws",
    type: "Power",
    id: "ID_FMP_POWER_2707",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2707",
    categories: ["Slashing Claws", "ID_FMP_POWER_2707", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Song"] = new engine.RulesElement({
    name: "Slayer's Song",
    type: "Power",
    id: "ID_FMP_POWER_2350",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2350",
    categories: ["Slayer's Song", "ID_FMP_POWER_2350", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Sly Offensive"] = new engine.RulesElement({
    name: "Sly Offensive",
    type: "Power",
    id: "ID_FMP_POWER_5481",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5481",
    categories: ["Sly Offensive", "ID_FMP_POWER_5481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_247", "Halfling Scoundrel", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Sly Offensive") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Soaring Falcon"] = new engine.RulesElement({
    name: "Soaring Falcon",
    type: "Power",
    id: "ID_FMP_POWER_5091",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5091",
    categories: ["Soaring Falcon", "ID_FMP_POWER_5091", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_269", "Sky Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Conquest"] = new engine.RulesElement({
    name: "Song of Conquest",
    type: "Power",
    id: "ID_FMP_POWER_2373",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2373",
    categories: ["Song of Conquest", "ID_FMP_POWER_2373", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Courage"] = new engine.RulesElement({
    name: "Song of Courage",
    type: "Power",
    id: "ID_FMP_POWER_2359",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2359",
    categories: ["Song of Courage", "ID_FMP_POWER_2359", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Defense"] = new engine.RulesElement({
    name: "Song of Defense",
    type: "Power",
    id: "ID_FMP_POWER_2358",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2358",
    categories: ["Song of Defense", "ID_FMP_POWER_2358", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Discord"] = new engine.RulesElement({
    name: "Song of Discord",
    type: "Power",
    id: "ID_FMP_POWER_4994",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4994",
    categories: ["Song of Discord", "ID_FMP_POWER_4994", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Liberation"] = new engine.RulesElement({
    name: "Song of Liberation",
    type: "Power",
    id: "ID_FMP_POWER_5014",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5014",
    categories: ["Song of Liberation", "ID_FMP_POWER_5014", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Recovery"] = new engine.RulesElement({
    name: "Song of Recovery",
    type: "Power",
    id: "ID_FMP_POWER_2388",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2388",
    categories: ["Song of Recovery", "ID_FMP_POWER_2388", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Spiral Paths"] = new engine.RulesElement({
    name: "Song of Spiral Paths",
    type: "Power",
    id: "ID_FMP_POWER_5024",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5024",
    categories: ["Song of Spiral Paths", "ID_FMP_POWER_5024", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_263", "Summer Rhymer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Storms"] = new engine.RulesElement({
    name: "Song of Storms",
    type: "Power",
    id: "ID_FMP_POWER_2394",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2394",
    categories: ["Song of Storms", "ID_FMP_POWER_2394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Sublime Snowfall"] = new engine.RulesElement({
    name: "Song of Sublime Snowfall",
    type: "Power",
    id: "ID_FMP_POWER_2404",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2404",
    categories: ["Song of Sublime Snowfall", "ID_FMP_POWER_2404", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Summons"] = new engine.RulesElement({
    name: "Song of Summons",
    type: "Power",
    id: "ID_FMP_POWER_5009",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5009",
    categories: ["Song of Summons", "ID_FMP_POWER_5009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Song of the High Court"] = new engine.RulesElement({
    name: "Song of the High Court",
    type: "Power",
    id: "ID_FMP_POWER_5025",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5025",
    categories: ["Song of the High Court", "ID_FMP_POWER_5025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_263", "Summer Rhymer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Song of the Queen's Protection"] = new engine.RulesElement({
    name: "Song of the Queen's Protection",
    type: "Power",
    id: "ID_FMP_POWER_5023",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5023",
    categories: ["Song of the Queen's Protection", "ID_FMP_POWER_5023", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_263", "Summer Rhymer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Thunder"] = new engine.RulesElement({
    name: "Song of Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5028",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5028",
    categories: ["Song of Thunder", "ID_FMP_POWER_5028", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_264", "Voice of Thunder", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Transition"] = new engine.RulesElement({
    name: "Song of Transition",
    type: "Power",
    id: "ID_FMP_POWER_2419",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2419",
    categories: ["Song of Transition", "ID_FMP_POWER_2419", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerous Metamorphosis"] = new engine.RulesElement({
    name: "Sorcerous Metamorphosis",
    type: "Power",
    id: "ID_FMP_POWER_5321",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5321",
    categories: ["Sorcerous Metamorphosis", "ID_FMP_POWER_5321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_278", "Arcane Wellspring", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerous Wings"] = new engine.RulesElement({
    name: "Sorcerous Wings",
    type: "Power",
    id: "ID_FMP_POWER_5320",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5320",
    categories: ["Sorcerous Wings", "ID_FMP_POWER_5320", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_278", "Arcane Wellspring", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spark of Fury"] = new engine.RulesElement({
    name: "Spark of Fury",
    type: "Power",
    id: "ID_FMP_POWER_5088",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5088",
    categories: ["Spark of Fury", "ID_FMP_POWER_5088", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_268", "Keeper of the Hidden Flame", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Speak with Spirits"] = new engine.RulesElement({
    name: "Speak with Spirits",
    type: "Power",
    id: "ID_FMP_POWER_3775",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3775",
    categories: ["Speak with Spirits", "ID_FMP_POWER_3775"]
  });
  byID[te.id] = te;
  
  te = Power["Spear of the Inquisitor"] = new engine.RulesElement({
    name: "Spear of the Inquisitor",
    type: "Power",
    id: "ID_FMP_POWER_2855",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2855",
    categories: ["Spear of the Inquisitor", "ID_FMP_POWER_2855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Charge"] = new engine.RulesElement({
    name: "Spectral Charge",
    type: "Power",
    id: "ID_FMP_POWER_3533",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3533",
    categories: ["Spectral Charge", "ID_FMP_POWER_3533", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Claw"] = new engine.RulesElement({
    name: "Spectral Claw",
    type: "Power",
    id: "ID_FMP_POWER_5271",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5271",
    categories: ["Spectral Claw", "ID_FMP_POWER_5271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spellbind"] = new engine.RulesElement({
    name: "Spellbind",
    type: "Power",
    id: "ID_FMP_POWER_2414",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2414",
    categories: ["Spellbind", "ID_FMP_POWER_2414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Binding"] = new engine.RulesElement({
    name: "Spirit Binding",
    type: "Power",
    id: "ID_FMP_POWER_3833",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3833",
    categories: ["Spirit Binding", "ID_FMP_POWER_3833", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Bond of Vengeance"] = new engine.RulesElement({
    name: "Spirit Bond of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5411",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5411",
    categories: ["Spirit Bond of Vengeance", "ID_FMP_POWER_5411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Call"] = new engine.RulesElement({
    name: "Spirit Call",
    type: "Power",
    id: "ID_FMP_POWER_3838",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3838",
    categories: ["Spirit Call", "ID_FMP_POWER_3838", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Flow"] = new engine.RulesElement({
    name: "Spirit Flow",
    type: "Power",
    id: "ID_FMP_POWER_5430",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5430",
    categories: ["Spirit Flow", "ID_FMP_POWER_5430", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_277", "Spirit Tempest", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Autumn's Reaping"] = new engine.RulesElement({
    name: "Spirit of Autumn's Reaping",
    type: "Power",
    id: "ID_FMP_POWER_3885",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3885",
    categories: ["Spirit of Autumn's Reaping", "ID_FMP_POWER_3885", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Cleansing Light"] = new engine.RulesElement({
    name: "Spirit of Cleansing Light",
    type: "Power",
    id: "ID_FMP_POWER_3807",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3807",
    categories: ["Spirit of Cleansing Light", "ID_FMP_POWER_3807", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Dawn"] = new engine.RulesElement({
    name: "Spirit of Dawn",
    type: "Power",
    id: "ID_FMP_POWER_5398",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5398",
    categories: ["Spirit of Dawn", "ID_FMP_POWER_5398", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Elder Wisdom"] = new engine.RulesElement({
    name: "Spirit of Elder Wisdom",
    type: "Power",
    id: "ID_FMP_POWER_3819",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3819",
    categories: ["Spirit of Elder Wisdom", "ID_FMP_POWER_3819", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Life"] = new engine.RulesElement({
    name: "Spirit of Life",
    type: "Power",
    id: "ID_FMP_POWER_3832",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3832",
    categories: ["Spirit of Life", "ID_FMP_POWER_3832", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Spring's Renewal"] = new engine.RulesElement({
    name: "Spirit of Spring's Renewal",
    type: "Power",
    id: "ID_FMP_POWER_3810",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3810",
    categories: ["Spirit of Spring's Renewal", "ID_FMP_POWER_3810", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Beast"] = new engine.RulesElement({
    name: "Spirit of the Beast",
    type: "Power",
    id: "ID_FMP_POWER_5089",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5089",
    categories: ["Spirit of the Beast", "ID_FMP_POWER_5089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_268", "Keeper of the Hidden Flame", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Dancing Zephyr"] = new engine.RulesElement({
    name: "Spirit of the Dancing Zephyr",
    type: "Power",
    id: "ID_FMP_POWER_5408",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5408",
    categories: ["Spirit of the Dancing Zephyr", "ID_FMP_POWER_5408", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Death Raven"] = new engine.RulesElement({
    name: "Spirit of the Death Raven",
    type: "Power",
    id: "ID_FMP_POWER_3815",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3815",
    categories: ["Spirit of the Death Raven", "ID_FMP_POWER_3815", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Hawk's Wind"] = new engine.RulesElement({
    name: "Spirit of the Hawk's Wind",
    type: "Power",
    id: "ID_FMP_POWER_3882",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3882",
    categories: ["Spirit of the Hawk's Wind", "ID_FMP_POWER_3882", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Healing Flood"] = new engine.RulesElement({
    name: "Spirit of the Healing Flood",
    type: "Power",
    id: "ID_FMP_POWER_5393",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5393",
    categories: ["Spirit of the Healing Flood", "ID_FMP_POWER_5393", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Keeper"] = new engine.RulesElement({
    name: "Spirit of the Keeper",
    type: "Power",
    id: "ID_FMP_POWER_3847",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3847",
    categories: ["Spirit of the Keeper", "ID_FMP_POWER_3847", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Laughing Wanderer"] = new engine.RulesElement({
    name: "Spirit of the Laughing Wanderer",
    type: "Power",
    id: "ID_FMP_POWER_3933",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3933",
    categories: ["Spirit of the Laughing Wanderer", "ID_FMP_POWER_3933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Shield Breaker"] = new engine.RulesElement({
    name: "Spirit of the Shield Breaker",
    type: "Power",
    id: "ID_FMP_POWER_3918",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3918",
    categories: ["Spirit of the Shield Breaker", "ID_FMP_POWER_3918", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Shielding Fire"] = new engine.RulesElement({
    name: "Spirit of the Shielding Fire",
    type: "Power",
    id: "ID_FMP_POWER_3877",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3877",
    categories: ["Spirit of the Shielding Fire", "ID_FMP_POWER_3877", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7310"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Shielding Fire Attack"] = new engine.RulesElement({
    name: "Spirit of the Shielding Fire Attack",
    type: "Power",
    id: "ID_FMP_POWER_7310",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7310",
    categories: ["Spirit of the Shielding Fire Attack", "ID_FMP_POWER_7310", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Unbroken Vow"] = new engine.RulesElement({
    name: "Spirit of the Unbroken Vow",
    type: "Power",
    id: "ID_FMP_POWER_3934",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3934",
    categories: ["Spirit of the Unbroken Vow", "ID_FMP_POWER_3934", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Wolf Pack"] = new engine.RulesElement({
    name: "Spirit of the Wolf Pack",
    type: "Power",
    id: "ID_FMP_POWER_3911",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3911",
    categories: ["Spirit of the Wolf Pack", "ID_FMP_POWER_3911", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the World Healer"] = new engine.RulesElement({
    name: "Spirit of the World Healer",
    type: "Power",
    id: "ID_FMP_POWER_3862",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3862",
    categories: ["Spirit of the World Healer", "ID_FMP_POWER_3862", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the World Serpent"] = new engine.RulesElement({
    name: "Spirit of the World Serpent",
    type: "Power",
    id: "ID_FMP_POWER_3927",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3927",
    categories: ["Spirit of the World Serpent", "ID_FMP_POWER_3927", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Steed"] = new engine.RulesElement({
    name: "Spirit Steed",
    type: "Power",
    id: "ID_FMP_POWER_5463",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5463",
    categories: ["Spirit Steed", "ID_FMP_POWER_5463", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_EPIC_DESTINY_287", "Glorious Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Storm"] = new engine.RulesElement({
    name: "Spirit Storm",
    type: "Power",
    id: "ID_FMP_POWER_5431",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5431",
    categories: ["Spirit Storm", "ID_FMP_POWER_5431", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_277", "Spirit Tempest", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Summons"] = new engine.RulesElement({
    name: "Spirit Summons",
    type: "Power",
    id: "ID_FMP_POWER_3839",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3839",
    categories: ["Spirit Summons", "ID_FMP_POWER_3839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Tide"] = new engine.RulesElement({
    name: "Spirit Tide",
    type: "Power",
    id: "ID_FMP_POWER_5429",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5429",
    categories: ["Spirit Tide", "ID_FMP_POWER_5429", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_277", "Spirit Tempest", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Fangs"] = new engine.RulesElement({
    name: "Spirit's Fangs",
    type: "Power",
    id: "ID_FMP_POWER_5388",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5388",
    categories: ["Spirit's Fangs", "ID_FMP_POWER_5388", "ID_FMP_FEAT_668", "Spirit Talker"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of Battle"] = new engine.RulesElement({
    name: "Spirits of Battle",
    type: "Power",
    id: "ID_FMP_POWER_5394",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5394",
    categories: ["Spirits of Battle", "ID_FMP_POWER_5394", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of Mist"] = new engine.RulesElement({
    name: "Spirits of Mist",
    type: "Power",
    id: "ID_FMP_POWER_5419",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5419",
    categories: ["Spirits of Mist", "ID_FMP_POWER_5419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of the Shadowed Moon"] = new engine.RulesElement({
    name: "Spirits of the Shadowed Moon",
    type: "Power",
    id: "ID_FMP_POWER_5404",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5404",
    categories: ["Spirits of the Shadowed Moon", "ID_FMP_POWER_5404", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Shield"] = new engine.RulesElement({
    name: "Spirit's Shield",
    type: "Power",
    id: "ID_FMP_POWER_5389",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5389",
    categories: ["Spirit's Shield", "ID_FMP_POWER_5389", "ID_FMP_FEAT_668", "Spirit Talker"]
  });
  byID[te.id] = te;
  
  te = Power["Spitfire Furnace"] = new engine.RulesElement({
    name: "Spitfire Furnace",
    type: "Power",
    id: "ID_FMP_POWER_5291",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5291",
    categories: ["Spitfire Furnace", "ID_FMP_POWER_5291", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Splinter the Formation"] = new engine.RulesElement({
    name: "Splinter the Formation",
    type: "Power",
    id: "ID_FMP_POWER_3522",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3522",
    categories: ["Splinter the Formation", "ID_FMP_POWER_3522", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Split Strike"] = new engine.RulesElement({
    name: "Split Strike",
    type: "Power",
    id: "ID_FMP_POWER_5300",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5300",
    categories: ["Split Strike", "ID_FMP_POWER_5300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spring Renewal Strike"] = new engine.RulesElement({
    name: "Spring Renewal Strike",
    type: "Power",
    id: "ID_FMP_POWER_5396",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5396",
    categories: ["Spring Renewal Strike", "ID_FMP_POWER_5396", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spur the Cycle"] = new engine.RulesElement({
    name: "Spur the Cycle",
    type: "Power",
    id: "ID_FMP_POWER_4846",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4846",
    categories: ["Spur the Cycle", "ID_FMP_POWER_4846", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Blast"] = new engine.RulesElement({
    name: "Staggering Blast",
    type: "Power",
    id: "ID_FMP_POWER_5280",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5280",
    categories: ["Staggering Blast", "ID_FMP_POWER_5280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Strike"] = new engine.RulesElement({
    name: "Staggering Strike",
    type: "Power",
    id: "ID_FMP_POWER_4969",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4969",
    categories: ["Staggering Strike", "ID_FMP_POWER_4969", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Stalker's Eyes"] = new engine.RulesElement({
    name: "Stalker's Eyes",
    type: "Power",
    id: "ID_FMP_POWER_5507",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5507",
    categories: ["Stalker's Eyes", "ID_FMP_POWER_5507", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Stalker's Positioning"] = new engine.RulesElement({
    name: "Stalker's Positioning",
    type: "Power",
    id: "ID_FMP_POWER_5515",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5515",
    categories: ["Stalker's Positioning", "ID_FMP_POWER_5515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stalker's Strike"] = new engine.RulesElement({
    name: "Stalker's Strike",
    type: "Power",
    id: "ID_FMP_POWER_5510",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5510",
    categories: ["Stalker's Strike", "ID_FMP_POWER_5510", "ID_FMP_CLASS_FEATURE_1252", "Stalker Spirit", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Startling Savagery"] = new engine.RulesElement({
    name: "Startling Savagery",
    type: "Power",
    id: "ID_FMP_POWER_5158",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5158",
    categories: ["Startling Savagery", "ID_FMP_POWER_5158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Stirring Shout"] = new engine.RulesElement({
    name: "Stirring Shout",
    type: "Power",
    id: "ID_FMP_POWER_4989",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4989",
    categories: ["Stirring Shout", "ID_FMP_POWER_4989", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Bear Rage"] = new engine.RulesElement({
    name: "Stone Bear Rage",
    type: "Power",
    id: "ID_FMP_POWER_4838",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4838",
    categories: ["Stone Bear Rage", "ID_FMP_POWER_4838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Tempest Rage"] = new engine.RulesElement({
    name: "Stone Tempest Rage",
    type: "Power",
    id: "ID_FMP_POWER_4856",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4856",
    categories: ["Stone Tempest Rage", "ID_FMP_POWER_4856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stonebreaker"] = new engine.RulesElement({
    name: "Stonebreaker",
    type: "Power",
    id: "ID_FMP_POWER_4938",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4938",
    categories: ["Stonebreaker", "ID_FMP_POWER_4938", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Stone's Endurance"] = new engine.RulesElement({
    name: "Stone's Endurance",
    type: "Power",
    id: "ID_FMP_POWER_6188",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6188",
    categories: ["Stone's Endurance", "ID_FMP_POWER_6188", "ID_FMP_RACIAL_TRAIT_1145", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Drake Rage"] = new engine.RulesElement({
    name: "Storm Drake Rage",
    type: "Power",
    id: "ID_FMP_POWER_4849",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4849",
    categories: ["Storm Drake Rage", "ID_FMP_POWER_4849", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Guardian Spirit"] = new engine.RulesElement({
    name: "Storm Guardian Spirit",
    type: "Power",
    id: "ID_FMP_POWER_3879",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3879",
    categories: ["Storm Guardian Spirit", "ID_FMP_POWER_3879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Blades"] = new engine.RulesElement({
    name: "Storm of Blades",
    type: "Power",
    id: "ID_FMP_POWER_2047",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2047",
    categories: ["Storm of Blades", "ID_FMP_POWER_2047", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Celestia"] = new engine.RulesElement({
    name: "Storm of Celestia",
    type: "Power",
    id: "ID_FMP_POWER_3312",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3312",
    categories: ["Storm of Celestia", "ID_FMP_POWER_3312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Spike"] = new engine.RulesElement({
    name: "Storm Spike",
    type: "Power",
    id: "ID_FMP_POWER_5039",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5039",
    categories: ["Storm Spike", "ID_FMP_POWER_5039", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Step"] = new engine.RulesElement({
    name: "Storm Step",
    type: "Power",
    id: "ID_FMP_POWER_5179",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5179",
    categories: ["Storm Step", "ID_FMP_POWER_5179", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_284", "Storm Sentinel", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Strike"] = new engine.RulesElement({
    name: "Storm Strike",
    type: "Power",
    id: "ID_FMP_POWER_5115",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5115",
    categories: ["Storm Strike", "ID_FMP_POWER_5115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Walk"] = new engine.RulesElement({
    name: "Storm Walk",
    type: "Power",
    id: "ID_FMP_POWER_5261",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5261",
    categories: ["Storm Walk", "ID_FMP_POWER_5261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stormburst"] = new engine.RulesElement({
    name: "Stormburst",
    type: "Power",
    id: "ID_FMP_POWER_5072",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5072",
    categories: ["Stormburst", "ID_FMP_POWER_5072", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Stone"] = new engine.RulesElement({
    name: "Strength of Stone",
    type: "Power",
    id: "ID_FMP_POWER_5096",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5096",
    categories: ["Strength of Stone", "ID_FMP_POWER_5096", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of the Hunt"] = new engine.RulesElement({
    name: "Strength of the Hunt",
    type: "Power",
    id: "ID_FMP_POWER_5073",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5073",
    categories: ["Strength of the Hunt", "ID_FMP_POWER_5073", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Stretch Spell"] = new engine.RulesElement({
    name: "Stretch Spell",
    type: "Power",
    id: "ID_FMP_POWER_5267",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5267",
    categories: ["Stretch Spell", "ID_FMP_POWER_5267", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Strike from Empty Air"] = new engine.RulesElement({
    name: "Strike from Empty Air",
    type: "Power",
    id: "ID_FMP_POWER_5363",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5363",
    categories: ["Strike from Empty Air", "ID_FMP_POWER_5363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_257", "Zealous Assassin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Restoration"] = new engine.RulesElement({
    name: "Sudden Restoration",
    type: "Power",
    id: "ID_FMP_POWER_3835",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3835",
    categories: ["Sudden Restoration", "ID_FMP_POWER_3835", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Scales"] = new engine.RulesElement({
    name: "Sudden Scales",
    type: "Power",
    id: "ID_FMP_POWER_5277",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5277",
    categories: ["Sudden Scales", "ID_FMP_POWER_5277", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Summit Advantage"] = new engine.RulesElement({
    name: "Summit Advantage",
    type: "Power",
    id: "ID_FMP_POWER_5493",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5493",
    categories: ["Summit Advantage", "ID_FMP_POWER_5493", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_251", "Stoneblessed", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Angel of Fire"] = new engine.RulesElement({
    name: "Summon Angel of Fire",
    type: "Power",
    id: "ID_FMP_POWER_3314",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3314",
    categories: ["Summon Angel of Fire", "ID_FMP_POWER_3314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Angel of Light"] = new engine.RulesElement({
    name: "Summon Angel of Light",
    type: "Power",
    id: "ID_FMP_POWER_3320",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3320",
    categories: ["Summon Angel of Light", "ID_FMP_POWER_3320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Angel of Victory"] = new engine.RulesElement({
    name: "Summon Angel of Victory",
    type: "Power",
    id: "ID_FMP_POWER_3321",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3321",
    categories: ["Summon Angel of Victory", "ID_FMP_POWER_3321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Blade Angel"] = new engine.RulesElement({
    name: "Summon Blade Angel",
    type: "Power",
    id: "ID_FMP_POWER_2880",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2880",
    categories: ["Summon Blade Angel", "ID_FMP_POWER_2880", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon the Beast"] = new engine.RulesElement({
    name: "Summon the Beast",
    type: "Power",
    id: "ID_FMP_POWER_5087",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5087",
    categories: ["Summon the Beast", "ID_FMP_POWER_5087", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_268", "Keeper of the Hidden Flame", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sun Hammer"] = new engine.RulesElement({
    name: "Sun Hammer",
    type: "Power",
    id: "ID_FMP_POWER_2867",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2867",
    categories: ["Sun Hammer", "ID_FMP_POWER_2867", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sun Strike"] = new engine.RulesElement({
    name: "Sun Strike",
    type: "Power",
    id: "ID_FMP_POWER_5137",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5137",
    categories: ["Sun Strike", "ID_FMP_POWER_5137", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Sunbeam"] = new engine.RulesElement({
    name: "Sunbeam",
    type: "Power",
    id: "ID_FMP_POWER_2670",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2670",
    categories: ["Sunbeam", "ID_FMP_POWER_2670", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Sunburst Bulwark"] = new engine.RulesElement({
    name: "Sunburst Bulwark",
    type: "Power",
    id: "ID_FMP_POWER_5202",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5202",
    categories: ["Sunburst Bulwark", "ID_FMP_POWER_5202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_272", "Flame of Hope", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sunburst Strike"] = new engine.RulesElement({
    name: "Sunburst Strike",
    type: "Power",
    id: "ID_FMP_POWER_6558",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6558",
    categories: ["Sunburst Strike", "ID_FMP_POWER_6558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Surge of Valor"] = new engine.RulesElement({
    name: "Surge of Valor",
    type: "Power",
    id: "ID_FMP_POWER_5019",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5019",
    categories: ["Surge of Valor", "ID_FMP_POWER_5019", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Swarm of Astral Steel"] = new engine.RulesElement({
    name: "Swarm of Astral Steel",
    type: "Power",
    id: "ID_FMP_POWER_5195",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5195",
    categories: ["Swarm of Astral Steel", "ID_FMP_POWER_5195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Charge"] = new engine.RulesElement({
    name: "Swift Charge",
    type: "Power",
    id: "ID_FMP_POWER_4809",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4809",
    categories: ["Swift Charge", "ID_FMP_POWER_4809"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Escape"] = new engine.RulesElement({
    name: "Swift Escape",
    type: "Power",
    id: "ID_FMP_POWER_5511",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5511",
    categories: ["Swift Escape", "ID_FMP_POWER_5511", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Panther Rage"] = new engine.RulesElement({
    name: "Swift Panther Rage",
    type: "Power",
    id: "ID_FMP_POWER_4825",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4825",
    categories: ["Swift Panther Rage", "ID_FMP_POWER_4825", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swirling Winds"] = new engine.RulesElement({
    name: "Swirling Winds",
    type: "Power",
    id: "ID_FMP_POWER_5054",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5054",
    categories: ["Swirling Winds", "ID_FMP_POWER_5054", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Swords of the Marilith"] = new engine.RulesElement({
    name: "Swords of the Marilith",
    type: "Power",
    id: "ID_FMP_POWER_5324",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5324",
    categories: ["Swords of the Marilith", "ID_FMP_POWER_5324", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_279", "Demonskin Adept", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sworn Crusade"] = new engine.RulesElement({
    name: "Sworn Crusade",
    type: "Power",
    id: "ID_FMP_POWER_5358",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5358",
    categories: ["Sworn Crusade", "ID_FMP_POWER_5358", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_255", "Oathsworn", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of Hope"] = new engine.RulesElement({
    name: "Symbol of Hope",
    type: "Power",
    id: "ID_FMP_POWER_2885",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2885",
    categories: ["Symbol of Hope", "ID_FMP_POWER_2885", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest Breath"] = new engine.RulesElement({
    name: "Tempest Breath",
    type: "Power",
    id: "ID_FMP_POWER_3716",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3716",
    categories: ["Tempest Breath", "ID_FMP_POWER_3716", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest Surge"] = new engine.RulesElement({
    name: "Tempest Surge",
    type: "Power",
    id: "ID_FMP_POWER_5514",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5514",
    categories: ["Tempest Surge", "ID_FMP_POWER_5514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_281", "Wild Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Light"] = new engine.RulesElement({
    name: "Temple of Light",
    type: "Power",
    id: "ID_FMP_POWER_2914",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2914",
    categories: ["Temple of Light", "ID_FMP_POWER_2914", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Resolution"] = new engine.RulesElement({
    name: "Temple of Resolution",
    type: "Power",
    id: "ID_FMP_POWER_3652",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3652",
    categories: ["Temple of Resolution", "ID_FMP_POWER_3652", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Respite"] = new engine.RulesElement({
    name: "Temple of Respite",
    type: "Power",
    id: "ID_FMP_POWER_3651",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3651",
    categories: ["Temple of Respite", "ID_FMP_POWER_3651", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Shadow"] = new engine.RulesElement({
    name: "Temple of Shadow",
    type: "Power",
    id: "ID_FMP_POWER_3601",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3601",
    categories: ["Temple of Shadow", "ID_FMP_POWER_3601", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Tendrils of the Fate Weaver"] = new engine.RulesElement({
    name: "Tendrils of the Fate Weaver",
    type: "Power",
    id: "ID_FMP_POWER_3917",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3917",
    categories: ["Tendrils of the Fate Weaver", "ID_FMP_POWER_3917", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Terror's Cry"] = new engine.RulesElement({
    name: "Terror's Cry",
    type: "Power",
    id: "ID_FMP_POWER_4953",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4953",
    categories: ["Terror's Cry", "ID_FMP_POWER_4953", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Third Ward of the Living Gate"] = new engine.RulesElement({
    name: "Third Ward of the Living Gate",
    type: "Power",
    id: "ID_FMP_POWER_5086",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5086",
    categories: ["Third Ward of the Living Gate", "ID_FMP_POWER_5086", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_267", "Guardian of the Living Gate", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Burst"] = new engine.RulesElement({
    name: "Thorn Burst",
    type: "Power",
    id: "ID_FMP_POWER_5125",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5125",
    categories: ["Thorn Burst", "ID_FMP_POWER_5125", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Strike"] = new engine.RulesElement({
    name: "Thorn Strike",
    type: "Power",
    id: "ID_FMP_POWER_5097",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5097",
    categories: ["Thorn Strike", "ID_FMP_POWER_5097", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Whip"] = new engine.RulesElement({
    name: "Thorn Whip",
    type: "Power",
    id: "ID_FMP_POWER_2666",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2666",
    categories: ["Thorn Whip", "ID_FMP_POWER_2666", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thrall of Turath"] = new engine.RulesElement({
    name: "Thrall of Turath",
    type: "Power",
    id: "ID_FMP_POWER_5497",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5497",
    categories: ["Thrall of Turath", "ID_FMP_POWER_5497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_252", "Turathi Highborn", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Thrall of Turath") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Threatening Fury"] = new engine.RulesElement({
    name: "Threatening Fury",
    type: "Power",
    id: "ID_FMP_POWER_4962",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4962",
    categories: ["Threatening Fury", "ID_FMP_POWER_4962", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Three Beacons of Twilight"] = new engine.RulesElement({
    name: "Three Beacons of Twilight",
    type: "Power",
    id: "ID_FMP_POWER_3339",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3339",
    categories: ["Three Beacons of Twilight", "ID_FMP_POWER_3339", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Bear's Warding"] = new engine.RulesElement({
    name: "Thunder Bear's Warding",
    type: "Power",
    id: "ID_FMP_POWER_5392",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5392",
    categories: ["Thunder Bear's Warding", "ID_FMP_POWER_5392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Blade"] = new engine.RulesElement({
    name: "Thunder Blade",
    type: "Power",
    id: "ID_FMP_POWER_5001",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5001",
    categories: ["Thunder Blade", "ID_FMP_POWER_5001", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Breath"] = new engine.RulesElement({
    name: "Thunder Breath",
    type: "Power",
    id: "ID_FMP_POWER_5287",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5287",
    categories: ["Thunder Breath", "ID_FMP_POWER_5287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Crash"] = new engine.RulesElement({
    name: "Thunder Crash",
    type: "Power",
    id: "ID_FMP_POWER_5060",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5060",
    categories: ["Thunder Crash", "ID_FMP_POWER_5060", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Hammer"] = new engine.RulesElement({
    name: "Thunder Hammer",
    type: "Power",
    id: "ID_FMP_POWER_5354",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5354",
    categories: ["Thunder Hammer", "ID_FMP_POWER_5354", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_254", "Hammer of Judgment", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Hawk Rage"] = new engine.RulesElement({
    name: "Thunder Hawk Rage",
    type: "Power",
    id: "ID_FMP_POWER_4832",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4832",
    categories: ["Thunder Hawk Rage", "ID_FMP_POWER_4832", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7305"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Thunder Hawk Rage Attack"] = new engine.RulesElement({
    name: "Thunder Hawk Rage Attack",
    type: "Power",
    id: "ID_FMP_POWER_7305",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7305",
    categories: ["Thunder Hawk Rage Attack", "ID_FMP_POWER_7305", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Leap"] = new engine.RulesElement({
    name: "Thunder Leap",
    type: "Power",
    id: "ID_FMP_POWER_5274",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5274",
    categories: ["Thunder Leap", "ID_FMP_POWER_5274", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder of Judgment"] = new engine.RulesElement({
    name: "Thunder of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_2853",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2853",
    categories: ["Thunder of Judgment", "ID_FMP_POWER_2853", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Pulse"] = new engine.RulesElement({
    name: "Thunder Pulse",
    type: "Power",
    id: "ID_FMP_POWER_5313",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5313",
    categories: ["Thunder Pulse", "ID_FMP_POWER_5313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Ram Assault"] = new engine.RulesElement({
    name: "Thunder Ram Assault",
    type: "Power",
    id: "ID_FMP_POWER_5101",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5101",
    categories: ["Thunder Ram Assault", "ID_FMP_POWER_5101", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Slam"] = new engine.RulesElement({
    name: "Thunder Slam",
    type: "Power",
    id: "ID_FMP_POWER_5114",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5114",
    categories: ["Thunder Slam", "ID_FMP_POWER_5114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Smash"] = new engine.RulesElement({
    name: "Thunder Smash",
    type: "Power",
    id: "ID_FMP_POWER_5178",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5178",
    categories: ["Thunder Smash", "ID_FMP_POWER_5178", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_284", "Storm Sentinel", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Step"] = new engine.RulesElement({
    name: "Thunder Step",
    type: "Power",
    id: "ID_FMP_POWER_5117",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5117",
    categories: ["Thunder Step", "ID_FMP_POWER_5117", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Summons"] = new engine.RulesElement({
    name: "Thunder Summons",
    type: "Power",
    id: "ID_FMP_POWER_6537",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6537",
    categories: ["Thunder Summons", "ID_FMP_POWER_6537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderbolt of the Heavens"] = new engine.RulesElement({
    name: "Thunderbolt of the Heavens",
    type: "Power",
    id: "ID_FMP_POWER_2871",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2871",
    categories: ["Thunderbolt of the Heavens", "ID_FMP_POWER_2871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderfall"] = new engine.RulesElement({
    name: "Thunderfall",
    type: "Power",
    id: "ID_FMP_POWER_4954",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4954",
    categories: ["Thunderfall", "ID_FMP_POWER_4954", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderfury Rage"] = new engine.RulesElement({
    name: "Thunderfury Rage",
    type: "Power",
    id: "ID_FMP_POWER_4844",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4844",
    categories: ["Thunderfury Rage", "ID_FMP_POWER_4844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Bolts"] = new engine.RulesElement({
    name: "Thundering Bolts",
    type: "Power",
    id: "ID_FMP_POWER_5516",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5516",
    categories: ["Thundering Bolts", "ID_FMP_POWER_5516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Strike"] = new engine.RulesElement({
    name: "Thundering Strike",
    type: "Power",
    id: "ID_FMP_POWER_6557",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6557",
    categories: ["Thundering Strike", "ID_FMP_POWER_6557", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Summons"] = new engine.RulesElement({
    name: "Thundering Summons",
    type: "Power",
    id: "ID_FMP_POWER_5205",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5205",
    categories: ["Thundering Summons", "ID_FMP_POWER_5205", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_273", "Hammer of Vengeance (PH2)", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderstorm Spirit"] = new engine.RulesElement({
    name: "Thunderstorm Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5399",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5399",
    categories: ["Thunderstorm Spirit", "ID_FMP_POWER_5399", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Tidal Surge"] = new engine.RulesElement({
    name: "Tidal Surge",
    type: "Power",
    id: "ID_FMP_POWER_2681",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2681",
    categories: ["Tidal Surge", "ID_FMP_POWER_2681", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Tide of Battle"] = new engine.RulesElement({
    name: "Tide of Battle",
    type: "Power",
    id: "ID_FMP_POWER_4983",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4983",
    categories: ["Tide of Battle", "ID_FMP_POWER_4983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_259", "Fearbringer Thane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Tide of Blood"] = new engine.RulesElement({
    name: "Tide of Blood",
    type: "Power",
    id: "ID_FMP_POWER_4836",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4836",
    categories: ["Tide of Blood", "ID_FMP_POWER_4836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Tiger's Leap"] = new engine.RulesElement({
    name: "Tiger's Leap",
    type: "Power",
    id: "ID_FMP_POWER_376",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=376",
    categories: ["Tiger's Leap", "ID_FMP_POWER_376", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Tomb of Magrym"] = new engine.RulesElement({
    name: "Tomb of Magrym",
    type: "Power",
    id: "ID_FMP_POWER_3316",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3316",
    categories: ["Tomb of Magrym", "ID_FMP_POWER_3316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Torrent of Power"] = new engine.RulesElement({
    name: "Torrent of Power",
    type: "Power",
    id: "ID_FMP_POWER_5328",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5328",
    categories: ["Torrent of Power", "ID_FMP_POWER_5328", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_281", "Wild Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Tremor"] = new engine.RulesElement({
    name: "Tremor",
    type: "Power",
    id: "ID_FMP_POWER_2682",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2682",
    categories: ["Tremor", "ID_FMP_POWER_2682", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Trickster's Healing"] = new engine.RulesElement({
    name: "Trickster's Healing",
    type: "Power",
    id: "ID_FMP_POWER_2361",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2361",
    categories: ["Trickster's Healing", "ID_FMP_POWER_2361", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Triumphant Vigor"] = new engine.RulesElement({
    name: "Triumphant Vigor",
    type: "Power",
    id: "ID_FMP_POWER_5110",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5110",
    categories: ["Triumphant Vigor", "ID_FMP_POWER_5110", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["True Name"] = new engine.RulesElement({
    name: "True Name",
    type: "Power",
    id: "ID_FMP_POWER_5465",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5465",
    categories: ["True Name", "ID_FMP_POWER_5465", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_289", "Lorekeeper", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Tundra Wind"] = new engine.RulesElement({
    name: "Tundra Wind",
    type: "Power",
    id: "ID_FMP_POWER_2669",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2669",
    categories: ["Tundra Wind", "ID_FMP_POWER_2669", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Tune of Ice and Wind"] = new engine.RulesElement({
    name: "Tune of Ice and Wind",
    type: "Power",
    id: "ID_FMP_POWER_4995",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4995",
    categories: ["Tune of Ice and Wind", "ID_FMP_POWER_4995", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight Stealth"] = new engine.RulesElement({
    name: "Twilight Stealth",
    type: "Power",
    id: "ID_FMP_POWER_5499",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5499",
    categories: ["Twilight Stealth", "ID_FMP_POWER_5499", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_253", "Twilight Guardian", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Bolt"] = new engine.RulesElement({
    name: "Twin Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5319",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5319",
    categories: ["Twin Bolt", "ID_FMP_POWER_5319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_278", "Arcane Wellspring", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Panthers"] = new engine.RulesElement({
    name: "Twin Panthers",
    type: "Power",
    id: "ID_FMP_POWER_3783",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3783",
    categories: ["Twin Panthers", "ID_FMP_POWER_3783", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Step"] = new engine.RulesElement({
    name: "Twin Step",
    type: "Power",
    id: "ID_FMP_POWER_5349",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5349",
    categories: ["Twin Step", "ID_FMP_POWER_5349", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Tempest Spirits"] = new engine.RulesElement({
    name: "Twin Tempest Spirits",
    type: "Power",
    id: "ID_FMP_POWER_3817",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3817",
    categories: ["Twin Tempest Spirits", "ID_FMP_POWER_3817", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Twisting Vines"] = new engine.RulesElement({
    name: "Twisting Vines",
    type: "Power",
    id: "ID_FMP_POWER_5042",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5042",
    categories: ["Twisting Vines", "ID_FMP_POWER_5042", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Unbound Assault"] = new engine.RulesElement({
    name: "Unbound Assault",
    type: "Power",
    id: "ID_FMP_POWER_5471",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5471",
    categories: ["Unbound Assault", "ID_FMP_POWER_5471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_244", "Bloodfury Savage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Unbound Assault") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Unleash the Silent Predator"] = new engine.RulesElement({
    name: "Unleash the Silent Predator",
    type: "Power",
    id: "ID_FMP_POWER_5485",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5485",
    categories: ["Unleash the Silent Predator", "ID_FMP_POWER_5485", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_248", "Moonstalker", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unluck"] = new engine.RulesElement({
    name: "Unluck",
    type: "Power",
    id: "ID_FMP_POWER_2376",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2376",
    categories: ["Unluck", "ID_FMP_POWER_2376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Aid"] = new engine.RulesElement({
    name: "Unseen Aid",
    type: "Power",
    id: "ID_FMP_POWER_5268",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5268",
    categories: ["Unseen Aid", "ID_FMP_POWER_5268", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Beast"] = new engine.RulesElement({
    name: "Unseen Beast",
    type: "Power",
    id: "ID_FMP_POWER_2735",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2735",
    categories: ["Unseen Beast", "ID_FMP_POWER_2735", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Untouched"] = new engine.RulesElement({
    name: "Untouched",
    type: "Power",
    id: "ID_FMP_POWER_4852",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4852",
    categories: ["Untouched", "ID_FMP_POWER_4852", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Unyielding Roots"] = new engine.RulesElement({
    name: "Unyielding Roots",
    type: "Power",
    id: "ID_FMP_POWER_2741",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2741",
    categories: ["Unyielding Roots", "ID_FMP_POWER_2741", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Vanguard's Lightning"] = new engine.RulesElement({
    name: "Vanguard's Lightning",
    type: "Power",
    id: "ID_FMP_POWER_2849",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2849",
    categories: ["Vanguard's Lightning", "ID_FMP_POWER_2849", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vault the Fallen"] = new engine.RulesElement({
    name: "Vault the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_4934",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4934",
    categories: ["Vault the Fallen", "ID_FMP_POWER_4934", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Veil"] = new engine.RulesElement({
    name: "Veil",
    type: "Power",
    id: "ID_FMP_POWER_2385",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2385",
    categories: ["Veil", "ID_FMP_POWER_2385", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Dragon"] = new engine.RulesElement({
    name: "Veil of the Dragon",
    type: "Power",
    id: "ID_FMP_POWER_5327",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5327",
    categories: ["Veil of the Dragon", "ID_FMP_POWER_5327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_280", "Dragonsoul Heir", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7312"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Veil of the Dragon Attack"] = new engine.RulesElement({
    name: "Veil of the Dragon Attack",
    type: "Power",
    id: "ID_FMP_POWER_7312",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7312",
    categories: ["Veil of the Dragon Attack", "ID_FMP_POWER_7312", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_280", "Dragonsoul Heir", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Recovery"] = new engine.RulesElement({
    name: "Vengeful Recovery",
    type: "Power",
    id: "ID_FMP_POWER_3645",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3645",
    categories: ["Vengeful Recovery", "ID_FMP_POWER_3645", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Revenant"] = new engine.RulesElement({
    name: "Vengeful Revenant",
    type: "Power",
    id: "ID_FMP_POWER_3663",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3663",
    categories: ["Vengeful Revenant", "ID_FMP_POWER_3663", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Storm Rage"] = new engine.RulesElement({
    name: "Vengeful Storm Rage",
    type: "Power",
    id: "ID_FMP_POWER_4944",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4944",
    categories: ["Vengeful Storm Rage", "ID_FMP_POWER_4944", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Verdant Life"] = new engine.RulesElement({
    name: "Verdant Life",
    type: "Power",
    id: "ID_FMP_POWER_5145",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5145",
    categories: ["Verdant Life", "ID_FMP_POWER_5145", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Versatile Glamor"] = new engine.RulesElement({
    name: "Versatile Glamor",
    type: "Power",
    id: "ID_FMP_POWER_5021",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5021",
    categories: ["Versatile Glamor", "ID_FMP_POWER_5021", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_262", "Student of the Seven", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Verse of Triumph"] = new engine.RulesElement({
    name: "Verse of Triumph",
    type: "Power",
    id: "ID_FMP_POWER_2784",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2784",
    categories: ["Verse of Triumph", "ID_FMP_POWER_2784", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Mockery"] = new engine.RulesElement({
    name: "Vicious Mockery",
    type: "Power",
    id: "ID_FMP_POWER_2780",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2780",
    categories: ["Vicious Mockery", "ID_FMP_POWER_2780", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Smite"] = new engine.RulesElement({
    name: "Victorious Smite",
    type: "Power",
    id: "ID_FMP_POWER_5029",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5029",
    categories: ["Victorious Smite", "ID_FMP_POWER_5029", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_265", "War Chanter", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vigorous Strike"] = new engine.RulesElement({
    name: "Vigorous Strike",
    type: "Power",
    id: "ID_FMP_POWER_4848",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4848",
    categories: ["Vigorous Strike", "ID_FMP_POWER_4848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Vindicating Flames"] = new engine.RulesElement({
    name: "Vindicating Flames",
    type: "Power",
    id: "ID_FMP_POWER_2868",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2868",
    categories: ["Vindicating Flames", "ID_FMP_POWER_2868", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Vision Distortion"] = new engine.RulesElement({
    name: "Vision Distortion",
    type: "Power",
    id: "ID_FMP_POWER_2415",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2415",
    categories: ["Vision Distortion", "ID_FMP_POWER_2415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Paradise"] = new engine.RulesElement({
    name: "Visions of Paradise",
    type: "Power",
    id: "ID_FMP_POWER_2876",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2876",
    categories: ["Visions of Paradise", "ID_FMP_POWER_2876", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Victory"] = new engine.RulesElement({
    name: "Visions of Victory",
    type: "Power",
    id: "ID_FMP_POWER_5031",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5031",
    categories: ["Visions of Victory", "ID_FMP_POWER_5031", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_265", "War Chanter", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Voice of the Seven"] = new engine.RulesElement({
    name: "Voice of the Seven",
    type: "Power",
    id: "ID_FMP_POWER_5022",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5022",
    categories: ["Voice of the Seven", "ID_FMP_POWER_5022", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_262", "Student of the Seven", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Walk Between Worlds"] = new engine.RulesElement({
    name: "Walk Between Worlds",
    type: "Power",
    id: "ID_FMP_POWER_3349",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3349",
    categories: ["Walk Between Worlds", "ID_FMP_POWER_3349", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Walk with the Spirits"] = new engine.RulesElement({
    name: "Walk with the Spirits",
    type: "Power",
    id: "ID_FMP_POWER_5466",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5466",
    categories: ["Walk with the Spirits", "ID_FMP_POWER_5466", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_243", "Primal Avatar", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Blades"] = new engine.RulesElement({
    name: "Wall of Blades",
    type: "Power",
    id: "ID_FMP_POWER_3337",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3337",
    categories: ["Wall of Blades", "ID_FMP_POWER_3337", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7309"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wall of Blades Attack"] = new engine.RulesElement({
    name: "Wall of Blades Attack",
    type: "Power",
    id: "ID_FMP_POWER_7309",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7309",
    categories: ["Wall of Blades Attack", "ID_FMP_POWER_7309", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Light"] = new engine.RulesElement({
    name: "Wall of Light",
    type: "Power",
    id: "ID_FMP_POWER_2860",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2860",
    categories: ["Wall of Light", "ID_FMP_POWER_2860", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Stone"] = new engine.RulesElement({
    name: "Wall of Stone",
    type: "Power",
    id: "ID_FMP_POWER_2738",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2738",
    categories: ["Wall of Stone", "ID_FMP_POWER_2738", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Thorns"] = new engine.RulesElement({
    name: "Wall of Thorns",
    type: "Power",
    id: "ID_FMP_POWER_2702",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2702",
    categories: ["Wall of Thorns", "ID_FMP_POWER_2702", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["War Chieftain's Blessing"] = new engine.RulesElement({
    name: "War Chieftain's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_5397",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5397",
    categories: ["War Chieftain's Blessing", "ID_FMP_POWER_5397", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["War Song Strike"] = new engine.RulesElement({
    name: "War Song Strike",
    type: "Power",
    id: "ID_FMP_POWER_4988",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4988",
    categories: ["War Song Strike", "ID_FMP_POWER_4988", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ward of Divine Light"] = new engine.RulesElement({
    name: "Ward of Divine Light",
    type: "Power",
    id: "ID_FMP_POWER_6577",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6577",
    categories: ["Ward of Divine Light", "ID_FMP_POWER_6577", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Fury"] = new engine.RulesElement({
    name: "Warden's Fury",
    type: "Power",
    id: "ID_FMP_POWER_5093",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5093",
    categories: ["Warden's Fury", "ID_FMP_POWER_5093"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Grasp"] = new engine.RulesElement({
    name: "Warden's Grasp",
    type: "Power",
    id: "ID_FMP_POWER_5094",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5094",
    categories: ["Warden's Grasp", "ID_FMP_POWER_5094"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Blade"] = new engine.RulesElement({
    name: "Warding Blade",
    type: "Power",
    id: "ID_FMP_POWER_3528",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3528",
    categories: ["Warding Blade", "ID_FMP_POWER_3528", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Frenzy"] = new engine.RulesElement({
    name: "Warding Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_5173",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5173",
    categories: ["Warding Frenzy", "ID_FMP_POWER_5173", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_282", "Bloodwrath Guardian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Thunder"] = new engine.RulesElement({
    name: "Warding Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5206",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5206",
    categories: ["Warding Thunder", "ID_FMP_POWER_5206", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_273", "Hammer of Vengeance (PH2)", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Vines"] = new engine.RulesElement({
    name: "Warding Vines",
    type: "Power",
    id: "ID_FMP_POWER_5133",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5133",
    categories: ["Warding Vines", "ID_FMP_POWER_5133", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Watcher's Strike"] = new engine.RulesElement({
    name: "Watcher's Strike",
    type: "Power",
    id: "ID_FMP_POWER_3778",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3778",
    categories: ["Watcher's Strike", "ID_FMP_POWER_3778", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Weal and Woe"] = new engine.RulesElement({
    name: "Weal and Woe",
    type: "Power",
    id: "ID_FMP_POWER_2411",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2411",
    categories: ["Weal and Woe", "ID_FMP_POWER_2411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Weight of Earth"] = new engine.RulesElement({
    name: "Weight of Earth",
    type: "Power",
    id: "ID_FMP_POWER_5098",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5098",
    categories: ["Weight of Earth", "ID_FMP_POWER_5098", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Weight of the Mountain"] = new engine.RulesElement({
    name: "Weight of the Mountain",
    type: "Power",
    id: "ID_FMP_POWER_5167",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5167",
    categories: ["Weight of the Mountain", "ID_FMP_POWER_5167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wellspring of Life"] = new engine.RulesElement({
    name: "Wellspring of Life",
    type: "Power",
    id: "ID_FMP_POWER_5156",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5156",
    categories: ["Wellspring of Life", "ID_FMP_POWER_5156", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Wellspring of Renewal"] = new engine.RulesElement({
    name: "Wellspring of Renewal",
    type: "Power",
    id: "ID_FMP_POWER_4840",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4840",
    categories: ["Wellspring of Renewal", "ID_FMP_POWER_4840", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Western Wind of Storms"] = new engine.RulesElement({
    name: "Western Wind of Storms",
    type: "Power",
    id: "ID_FMP_POWER_3930",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3930",
    categories: ["Western Wind of Storms", "ID_FMP_POWER_3930", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Blades"] = new engine.RulesElement({
    name: "Whirling Blades",
    type: "Power",
    id: "ID_FMP_POWER_3525",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3525",
    categories: ["Whirling Blades", "ID_FMP_POWER_3525", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind Assault"] = new engine.RulesElement({
    name: "Whirlwind Assault",
    type: "Power",
    id: "ID_FMP_POWER_5159",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5159",
    categories: ["Whirlwind Assault", "ID_FMP_POWER_5159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind Charge"] = new engine.RulesElement({
    name: "Whirlwind Charge",
    type: "Power",
    id: "ID_FMP_POWER_2893",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2893",
    categories: ["Whirlwind Charge", "ID_FMP_POWER_2893", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["White Tiger Rage"] = new engine.RulesElement({
    name: "White Tiger Rage",
    type: "Power",
    id: "ID_FMP_POWER_4950",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4950",
    categories: ["White Tiger Rage", "ID_FMP_POWER_4950", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Shape"] = new engine.RulesElement({
    name: "Wild Shape",
    type: "Power",
    id: "ID_FMP_POWER_5032",
    source: "Player's Handbook 2,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5032",
    categories: ["Wild Shape", "ID_FMP_POWER_5032"]
  });
  byID[te.id] = te;
  
  te = Power["Wildblood Frenzy"] = new engine.RulesElement({
    name: "Wildblood Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_5102",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5102",
    categories: ["Wildblood Frenzy", "ID_FMP_POWER_5102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wildfire Curse"] = new engine.RulesElement({
    name: "Wildfire Curse",
    type: "Power",
    id: "ID_FMP_POWER_5314",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5314",
    categories: ["Wildfire Curse", "ID_FMP_POWER_5314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wildrunner's Rage"] = new engine.RulesElement({
    name: "Wildrunner's Rage",
    type: "Power",
    id: "ID_FMP_POWER_4986",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4986",
    categories: ["Wildrunner's Rage", "ID_FMP_POWER_4986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_261", "Wildrunner", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wind Prison"] = new engine.RulesElement({
    name: "Wind Prison",
    type: "Power",
    id: "ID_FMP_POWER_5044",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5044",
    categories: ["Wind Prison", "ID_FMP_POWER_5044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wind Shape"] = new engine.RulesElement({
    name: "Wind Shape",
    type: "Power",
    id: "ID_FMP_POWER_5304",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5304",
    categories: ["Wind Shape", "ID_FMP_POWER_5304", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Windborne Step"] = new engine.RulesElement({
    name: "Windborne Step",
    type: "Power",
    id: "ID_FMP_POWER_5122",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5122",
    categories: ["Windborne Step", "ID_FMP_POWER_5122", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Winds of Celestia"] = new engine.RulesElement({
    name: "Winds of Celestia",
    type: "Power",
    id: "ID_FMP_POWER_3296",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3296",
    categories: ["Winds of Celestia", "ID_FMP_POWER_3296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Winds of the Astral Sea"] = new engine.RulesElement({
    name: "Winds of the Astral Sea",
    type: "Power",
    id: "ID_FMP_POWER_3662",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3662",
    categories: ["Winds of the Astral Sea", "ID_FMP_POWER_3662", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Windstorm"] = new engine.RulesElement({
    name: "Windstorm",
    type: "Power",
    id: "ID_FMP_POWER_5064",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5064",
    categories: ["Windstorm", "ID_FMP_POWER_5064", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Ghost Rage"] = new engine.RulesElement({
    name: "Winter Ghost Rage",
    type: "Power",
    id: "ID_FMP_POWER_4860",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4860",
    categories: ["Winter Ghost Rage", "ID_FMP_POWER_4860", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Hailstorm"] = new engine.RulesElement({
    name: "Winter Hailstorm",
    type: "Power",
    id: "ID_FMP_POWER_5066",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5066",
    categories: ["Winter Hailstorm", "ID_FMP_POWER_5066", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Phoenix Rage"] = new engine.RulesElement({
    name: "Winter Phoenix Rage",
    type: "Power",
    id: "ID_FMP_POWER_4850",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4850",
    categories: ["Winter Phoenix Rage", "ID_FMP_POWER_4850", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Storm"] = new engine.RulesElement({
    name: "Winter Storm",
    type: "Power",
    id: "ID_FMP_POWER_5057",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5057",
    categories: ["Winter Storm", "ID_FMP_POWER_5057", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Winter Wind Spirit"] = new engine.RulesElement({
    name: "Winter Wind Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5400",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5400",
    categories: ["Winter Wind Spirit", "ID_FMP_POWER_5400", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Grip"] = new engine.RulesElement({
    name: "Winter's Grip",
    type: "Power",
    id: "ID_FMP_POWER_5118",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5118",
    categories: ["Winter's Grip", "ID_FMP_POWER_5118", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Annihilation"] = new engine.RulesElement({
    name: "Word of Annihilation",
    type: "Power",
    id: "ID_FMP_POWER_3309",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3309",
    categories: ["Word of Annihilation", "ID_FMP_POWER_3309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Life"] = new engine.RulesElement({
    name: "Word of Life",
    type: "Power",
    id: "ID_FMP_POWER_5002",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5002",
    categories: ["Word of Life", "ID_FMP_POWER_5002", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Mystic Warding"] = new engine.RulesElement({
    name: "Word of Mystic Warding",
    type: "Power",
    id: "ID_FMP_POWER_4996",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4996",
    categories: ["Word of Mystic Warding", "ID_FMP_POWER_4996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Rebuke"] = new engine.RulesElement({
    name: "Word of Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_3306",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3306",
    categories: ["Word of Rebuke", "ID_FMP_POWER_3306", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Word of the Gods"] = new engine.RulesElement({
    name: "Word of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_3334",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3334",
    categories: ["Word of the Gods", "ID_FMP_POWER_3334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Vulnerability"] = new engine.RulesElement({
    name: "Word of Vulnerability",
    type: "Power",
    id: "ID_FMP_POWER_5010",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5010",
    categories: ["Word of Vulnerability", "ID_FMP_POWER_5010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Words of Chaos"] = new engine.RulesElement({
    name: "Words of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_5513",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5513",
    categories: ["Words of Chaos", "ID_FMP_POWER_5513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7311"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Words of Chaos Attack"] = new engine.RulesElement({
    name: "Words of Chaos Attack",
    type: "Power",
    id: "ID_FMP_POWER_7311",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7311",
    categories: ["Words of Chaos Attack", "ID_FMP_POWER_7311", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Words of Friendship"] = new engine.RulesElement({
    name: "Words of Friendship",
    type: "Power",
    id: "ID_FMP_POWER_2887",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2887",
    categories: ["Words of Friendship", "ID_FMP_POWER_2887"]
  });
  byID[te.id] = te;
  
  te = Power["World Serpent Rage"] = new engine.RulesElement({
    name: "World Serpent Rage",
    type: "Power",
    id: "ID_FMP_POWER_4977",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4977",
    categories: ["World Serpent Rage", "ID_FMP_POWER_4977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Divine"] = new engine.RulesElement({
    name: "Wrath of the Divine",
    type: "Power",
    id: "ID_FMP_POWER_5341",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5341",
    categories: ["Wrath of the Divine", "ID_FMP_POWER_5341", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Spirit World"] = new engine.RulesElement({
    name: "Wrath of the Spirit World",
    type: "Power",
    id: "ID_FMP_POWER_3878",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3878",
    categories: ["Wrath of the Spirit World", "ID_FMP_POWER_3878", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of Winter"] = new engine.RulesElement({
    name: "Wrath of Winter",
    type: "Power",
    id: "ID_FMP_POWER_5391",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5391",
    categories: ["Wrath of Winter", "ID_FMP_POWER_5391", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Zealous Strike"] = new engine.RulesElement({
    name: "Zealous Strike",
    type: "Power",
    id: "ID_FMP_POWER_5175",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5175",
    categories: ["Zealous Strike", "ID_FMP_POWER_5175", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_227", "Horned Champion", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
