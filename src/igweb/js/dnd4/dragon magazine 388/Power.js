(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Aura of Fear"] = new RulesElement({
    name: "Aura of Fear",
    type: "Power",
    id: "ID_FMP_POWER_12580",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12580",
    categories: ["Aura of Fear", "ID_FMP_POWER_12580", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_695", "Fear Walker", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Shadows"] = new RulesElement({
    name: "Blood Shadows",
    type: "Power",
    id: "ID_FMP_POWER_12567",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12567",
    categories: ["Blood Shadows", "ID_FMP_POWER_12567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Transformation"] = new RulesElement({
    name: "Burning Transformation",
    type: "Power",
    id: "ID_FMP_POWER_12559",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12559",
    categories: ["Burning Transformation", "ID_FMP_POWER_12559", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_692", "Master of Flame", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Converging Shadows"] = new RulesElement({
    name: "Converging Shadows",
    type: "Power",
    id: "ID_FMP_POWER_12563",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12563",
    categories: ["Converging Shadows", "ID_FMP_POWER_12563", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Darkening Veil"] = new RulesElement({
    name: "Darkening Veil",
    type: "Power",
    id: "ID_FMP_POWER_12564",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12564",
    categories: ["Darkening Veil", "ID_FMP_POWER_12564", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12565"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Darkening Veil Action"] = new RulesElement({
    name: "Darkening Veil Action",
    type: "Power",
    id: "ID_FMP_POWER_12565",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12565",
    categories: ["Darkening Veil Action", "ID_FMP_POWER_12565", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Form"] = new RulesElement({
    name: "Draconic Form",
    type: "Power",
    id: "ID_FMP_POWER_12581",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12581",
    categories: ["Draconic Form", "ID_FMP_POWER_12581", "ID_FMP_CLASS_FEATURE_2719", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_696", "Draconic Incarnation", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12582"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Draconic Form Attack"] = new RulesElement({
    name: "Draconic Form Attack",
    type: "Power",
    id: "ID_FMP_POWER_12582",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12582",
    categories: ["Draconic Form Attack", "ID_FMP_POWER_12582", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_696", "Draconic Incarnation", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonfear"] = new RulesElement({
    name: "Dragonfear",
    type: "Power",
    id: "ID_FMP_POWER_12577",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12577",
    categories: ["Dragonfear", "ID_FMP_POWER_12577", "ID_FMP_RACIAL_TRAIT_2711", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonfear Overwhelming"] = new RulesElement({
    name: "Dragonfear Overwhelming",
    type: "Power",
    id: "ID_FMP_POWER_12579",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12579",
    categories: ["Dragonfear Overwhelming", "ID_FMP_POWER_12579", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_695", "Fear Walker", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Erupting Flare"] = new RulesElement({
    name: "Erupting Flare",
    type: "Power",
    id: "ID_FMP_POWER_12547",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12547",
    categories: ["Erupting Flare", "ID_FMP_POWER_12547", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fanning the Flames"] = new RulesElement({
    name: "Fanning the Flames",
    type: "Power",
    id: "ID_FMP_POWER_12557",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12557",
    categories: ["Fanning the Flames", "ID_FMP_POWER_12557", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_692", "Master of Flame", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Destruction"] = new RulesElement({
    name: "Feast of Destruction",
    type: "Power",
    id: "ID_FMP_POWER_12554",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12554",
    categories: ["Feast of Destruction", "ID_FMP_POWER_12554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Sea Travel"] = new RulesElement({
    name: "Fire Sea Travel",
    type: "Power",
    id: "ID_FMP_POWER_12548",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12548",
    categories: ["Fire Sea Travel", "ID_FMP_POWER_12548", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Sigil"] = new RulesElement({
    name: "Fire Sigil",
    type: "Power",
    id: "ID_FMP_POWER_12555",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12555",
    categories: ["Fire Sigil", "ID_FMP_POWER_12555", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Flame's Protection"] = new RulesElement({
    name: "Flame's Protection",
    type: "Power",
    id: "ID_FMP_POWER_12553",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12553",
    categories: ["Flame's Protection", "ID_FMP_POWER_12553", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Flaming Rebuke"] = new RulesElement({
    name: "Flaming Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_12556",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12556",
    categories: ["Flaming Rebuke", "ID_FMP_POWER_12556", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Flickering Shadow"] = new RulesElement({
    name: "Flickering Shadow",
    type: "Power",
    id: "ID_FMP_POWER_12575",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12575",
    categories: ["Flickering Shadow", "ID_FMP_POWER_12575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_694", "Gloaming Dancer", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Immolation"] = new RulesElement({
    name: "Furious Immolation",
    type: "Power",
    id: "ID_FMP_POWER_12558",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12558",
    categories: ["Furious Immolation", "ID_FMP_POWER_12558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_692", "Master of Flame", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Gloaming Call"] = new RulesElement({
    name: "Gloaming Call",
    type: "Power",
    id: "ID_FMP_POWER_12568",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12568",
    categories: ["Gloaming Call", "ID_FMP_POWER_12568", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12569"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Gloaming Call Action"] = new RulesElement({
    name: "Gloaming Call Action",
    type: "Power",
    id: "ID_FMP_POWER_12569",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12569",
    categories: ["Gloaming Call Action", "ID_FMP_POWER_12569", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Gloaming Dance"] = new RulesElement({
    name: "Gloaming Dance",
    type: "Power",
    id: "ID_FMP_POWER_12573",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12573",
    categories: ["Gloaming Dance", "ID_FMP_POWER_12573", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Impossible Theft"] = new RulesElement({
    name: "Impossible Theft",
    type: "Power",
    id: "ID_FMP_POWER_12584",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12584",
    categories: ["Impossible Theft", "ID_FMP_POWER_12584", "ID_FMP_CLASS_FEATURE_2723", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_697", "Thief of Legend", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Lashing Branches"] = new RulesElement({
    name: "Lashing Branches",
    type: "Power",
    id: "ID_FMP_POWER_12560",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12560",
    categories: ["Lashing Branches", "ID_FMP_POWER_12560", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_693", "Treeborn", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Murderous Shadow"] = new RulesElement({
    name: "Murderous Shadow",
    type: "Power",
    id: "ID_FMP_POWER_12572",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12572",
    categories: ["Murderous Shadow", "ID_FMP_POWER_12572", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Penumbral Leap"] = new RulesElement({
    name: "Penumbral Leap",
    type: "Power",
    id: "ID_FMP_POWER_12574",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12574",
    categories: ["Penumbral Leap", "ID_FMP_POWER_12574", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_694", "Gloaming Dancer", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Phoenix Step"] = new RulesElement({
    name: "Phoenix Step",
    type: "Power",
    id: "ID_FMP_POWER_12549",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12549",
    categories: ["Phoenix Step", "ID_FMP_POWER_12549", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Root Sense"] = new RulesElement({
    name: "Root Sense",
    type: "Power",
    id: "ID_FMP_POWER_12562",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12562",
    categories: ["Root Sense", "ID_FMP_POWER_12562", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_693", "Treeborn", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Serpents of Flame"] = new RulesElement({
    name: "Serpents of Flame",
    type: "Power",
    id: "ID_FMP_POWER_12551",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12551",
    categories: ["Serpents of Flame", "ID_FMP_POWER_12551", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12552"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Serpents of Flame Attack"] = new RulesElement({
    name: "Serpents of Flame Attack",
    type: "Power",
    id: "ID_FMP_POWER_12552",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12552",
    categories: ["Serpents of Flame Attack", "ID_FMP_POWER_12552", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Dance"] = new RulesElement({
    name: "Shadow Dance",
    type: "Power",
    id: "ID_FMP_POWER_12576",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12576",
    categories: ["Shadow Dance", "ID_FMP_POWER_12576", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_694", "Gloaming Dancer", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Knives"] = new RulesElement({
    name: "Shadow Knives",
    type: "Power",
    id: "ID_FMP_POWER_12570",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12570",
    categories: ["Shadow Knives", "ID_FMP_POWER_12570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12571"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shadow Knives Attack"] = new RulesElement({
    name: "Shadow Knives Attack",
    type: "Power",
    id: "ID_FMP_POWER_12571",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12571",
    categories: ["Shadow Knives Attack", "ID_FMP_POWER_12571", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Detection"] = new RulesElement({
    name: "Siberys Mark of Detection",
    type: "Power",
    id: "ID_FMP_POWER_12587",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12587",
    categories: ["Siberys Mark of Detection", "ID_FMP_POWER_12587", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Finding"] = new RulesElement({
    name: "Siberys Mark of Finding",
    type: "Power",
    id: "ID_FMP_POWER_12588",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12588",
    categories: ["Siberys Mark of Finding", "ID_FMP_POWER_12588", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Handling"] = new RulesElement({
    name: "Siberys Mark of Handling",
    type: "Power",
    id: "ID_FMP_POWER_12589",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12589",
    categories: ["Siberys Mark of Handling", "ID_FMP_POWER_12589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Healing"] = new RulesElement({
    name: "Siberys Mark of Healing",
    type: "Power",
    id: "ID_FMP_POWER_12590",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12590",
    categories: ["Siberys Mark of Healing", "ID_FMP_POWER_12590", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Hospitality"] = new RulesElement({
    name: "Siberys Mark of Hospitality",
    type: "Power",
    id: "ID_FMP_POWER_12591",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12591",
    categories: ["Siberys Mark of Hospitality", "ID_FMP_POWER_12591", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Making"] = new RulesElement({
    name: "Siberys Mark of Making",
    type: "Power",
    id: "ID_FMP_POWER_12592",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12592",
    categories: ["Siberys Mark of Making", "ID_FMP_POWER_12592", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Passage"] = new RulesElement({
    name: "Siberys Mark of Passage",
    type: "Power",
    id: "ID_FMP_POWER_12593",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12593",
    categories: ["Siberys Mark of Passage", "ID_FMP_POWER_12593", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Scribing"] = new RulesElement({
    name: "Siberys Mark of Scribing",
    type: "Power",
    id: "ID_FMP_POWER_12594",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12594",
    categories: ["Siberys Mark of Scribing", "ID_FMP_POWER_12594", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Sentinel"] = new RulesElement({
    name: "Siberys Mark of Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_12595",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12595",
    categories: ["Siberys Mark of Sentinel", "ID_FMP_POWER_12595", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Shadow"] = new RulesElement({
    name: "Siberys Mark of Shadow",
    type: "Power",
    id: "ID_FMP_POWER_12596",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12596",
    categories: ["Siberys Mark of Shadow", "ID_FMP_POWER_12596", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Storm"] = new RulesElement({
    name: "Siberys Mark of Storm",
    type: "Power",
    id: "ID_FMP_POWER_12597",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12597",
    categories: ["Siberys Mark of Storm", "ID_FMP_POWER_12597", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Mark of Warding"] = new RulesElement({
    name: "Siberys Mark of Warding",
    type: "Power",
    id: "ID_FMP_POWER_12598",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12598",
    categories: ["Siberys Mark of Warding", "ID_FMP_POWER_12598", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_699", "Heir of Siberys", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Assailants"] = new RulesElement({
    name: "Spectral Assailants",
    type: "Power",
    id: "ID_FMP_POWER_12566",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12566",
    categories: ["Spectral Assailants", "ID_FMP_POWER_12566", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Undying Vanguard"] = new RulesElement({
    name: "Undying Vanguard",
    type: "Power",
    id: "ID_FMP_POWER_12585",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12585",
    categories: ["Undying Vanguard", "ID_FMP_POWER_12585", "ID_FMP_CLASS_FEATURE_2728", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_698", "Unyielding Sentinel", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Wake of Fire"] = new RulesElement({
    name: "Wake of Fire",
    type: "Power",
    id: "ID_FMP_POWER_12550",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12550",
    categories: ["Wake of Fire", "ID_FMP_POWER_12550", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Walking Sentinel"] = new RulesElement({
    name: "Walking Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_12561",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12561",
    categories: ["Walking Sentinel", "ID_FMP_POWER_12561", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_693", "Treeborn", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Terror"] = new RulesElement({
    name: "Wave of Terror",
    type: "Power",
    id: "ID_FMP_POWER_12578",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12578",
    categories: ["Wave of Terror", "ID_FMP_POWER_12578", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_695", "Fear Walker", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  
})(this);
