define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Altar of Confinement"] = new engine.RulesElement({
    name: "Altar of Confinement",
    type: "Power",
    id: "ID_FMP_POWER_11284",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11284",
    categories: ["Altar of Confinement", "ID_FMP_POWER_11284", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Altar of Defense"] = new engine.RulesElement({
    name: "Altar of Defense",
    type: "Power",
    id: "ID_FMP_POWER_11290",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11290",
    categories: ["Altar of Defense", "ID_FMP_POWER_11290", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Aura"] = new engine.RulesElement({
    name: "Angelic Aura",
    type: "Power",
    id: "ID_FMP_POWER_11315",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11315",
    categories: ["Angelic Aura", "ID_FMP_POWER_11315", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_599", "Astral Ascendant", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Harrier"] = new engine.RulesElement({
    name: "Angelic Harrier",
    type: "Power",
    id: "ID_FMP_POWER_11280",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11280",
    categories: ["Angelic Harrier", "ID_FMP_POWER_11280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Messenger"] = new engine.RulesElement({
    name: "Angelic Messenger",
    type: "Power",
    id: "ID_FMP_POWER_11296",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11296",
    categories: ["Angelic Messenger", "ID_FMP_POWER_11296", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Protector"] = new engine.RulesElement({
    name: "Angelic Protector",
    type: "Power",
    id: "ID_FMP_POWER_11282",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11282",
    categories: ["Angelic Protector", "ID_FMP_POWER_11282", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Whirlwind"] = new engine.RulesElement({
    name: "Arcane Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_11031",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11031",
    categories: ["Arcane Whirlwind", "ID_FMP_POWER_11031", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Archer's Stairway"] = new engine.RulesElement({
    name: "Archer's Stairway",
    type: "Power",
    id: "ID_FMP_POWER_10699",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10699",
    categories: ["Archer's Stairway", "ID_FMP_POWER_10699", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of the Savior"] = new engine.RulesElement({
    name: "Arrow of the Savior",
    type: "Power",
    id: "ID_FMP_POWER_10702",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10702",
    categories: ["Arrow of the Savior", "ID_FMP_POWER_10702", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Assistance of the Strong Spirit"] = new engine.RulesElement({
    name: "Assistance of the Strong Spirit",
    type: "Power",
    id: "ID_FMP_POWER_11358",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11358",
    categories: ["Assistance of the Strong Spirit", "ID_FMP_POWER_11358", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Aura of Flawed Nature"] = new engine.RulesElement({
    name: "Aura of Flawed Nature",
    type: "Power",
    id: "ID_FMP_POWER_11302",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11302",
    categories: ["Aura of Flawed Nature", "ID_FMP_POWER_11302", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_597", "Broken Mirror", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Back on Target"] = new engine.RulesElement({
    name: "Back on Target",
    type: "Power",
    id: "ID_FMP_POWER_10708",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10708",
    categories: ["Back on Target", "ID_FMP_POWER_10708", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bane's Tyrannical Transference"] = new engine.RulesElement({
    name: "Bane's Tyrannical Transference",
    type: "Power",
    id: "ID_FMP_POWER_11278",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11278",
    categories: ["Bane's Tyrannical Transference", "ID_FMP_POWER_11278", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Bear Hug"] = new engine.RulesElement({
    name: "Bear Hug",
    type: "Power",
    id: "ID_FMP_POWER_11360",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11360",
    categories: ["Bear Hug", "ID_FMP_POWER_11360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Behemoth's Club"] = new engine.RulesElement({
    name: "Behemoth's Club",
    type: "Power",
    id: "ID_FMP_POWER_11362",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11362",
    categories: ["Behemoth's Club", "ID_FMP_POWER_11362", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of the Storm Father"] = new engine.RulesElement({
    name: "Blessing of the Storm Father",
    type: "Power",
    id: "ID_FMP_POWER_11047",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11047",
    categories: ["Blessing of the Storm Father", "ID_FMP_POWER_11047", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Boiling Cloud"] = new engine.RulesElement({
    name: "Boiling Cloud",
    type: "Power",
    id: "ID_FMP_POWER_11075",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11075",
    categories: ["Boiling Cloud", "ID_FMP_POWER_11075", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11076"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Boiling Cloud Attack"] = new engine.RulesElement({
    name: "Boiling Cloud Attack",
    type: "Power",
    id: "ID_FMP_POWER_11076",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11076",
    categories: ["Boiling Cloud Attack", "ID_FMP_POWER_11076", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Brand the Heretic"] = new engine.RulesElement({
    name: "Brand the Heretic",
    type: "Power",
    id: "ID_FMP_POWER_11294",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11294",
    categories: ["Brand the Heretic", "ID_FMP_POWER_11294", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of Chaos"] = new engine.RulesElement({
    name: "Breath of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_11074",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11074",
    categories: ["Breath of Chaos", "ID_FMP_POWER_11074", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Beacon"] = new engine.RulesElement({
    name: "Brilliant Beacon",
    type: "Power",
    id: "ID_FMP_POWER_11283",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11283",
    categories: ["Brilliant Beacon", "ID_FMP_POWER_11283", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Recollection"] = new engine.RulesElement({
    name: "Burning Recollection",
    type: "Power",
    id: "ID_FMP_POWER_10939",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10939",
    categories: ["Burning Recollection", "ID_FMP_POWER_10939", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_573", "Fireforged Champion", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cast the First Stone"] = new engine.RulesElement({
    name: "Cast the First Stone",
    type: "Power",
    id: "ID_FMP_POWER_11295",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11295",
    categories: ["Cast the First Stone", "ID_FMP_POWER_11295", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Cherub's Song"] = new engine.RulesElement({
    name: "Cherub's Song",
    type: "Power",
    id: "ID_FMP_POWER_11116",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11116",
    categories: ["Cherub's Song", "ID_FMP_POWER_11116", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cinderfall"] = new engine.RulesElement({
    name: "Cinderfall",
    type: "Power",
    id: "ID_FMP_POWER_11033",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11033",
    categories: ["Cinderfall", "ID_FMP_POWER_11033", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Clarifying Rebuke"] = new engine.RulesElement({
    name: "Clarifying Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_11312",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11312",
    categories: ["Clarifying Rebuke", "ID_FMP_POWER_11312", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_598", "Umbral Cabalist", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Locusts"] = new engine.RulesElement({
    name: "Cloud of Locusts",
    type: "Power",
    id: "ID_FMP_POWER_11298",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11298",
    categories: ["Cloud of Locusts", "ID_FMP_POWER_11298", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Misfortune"] = new engine.RulesElement({
    name: "Cloud of Misfortune",
    type: "Power",
    id: "ID_FMP_POWER_11301",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11301",
    categories: ["Cloud of Misfortune", "ID_FMP_POWER_11301", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_597", "Broken Mirror", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Command of the Abyss"] = new engine.RulesElement({
    name: "Command of the Abyss",
    type: "Power",
    id: "ID_FMP_POWER_11310",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11310",
    categories: ["Command of the Abyss", "ID_FMP_POWER_11310", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_598", "Umbral Cabalist", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Corrosive Mist"] = new engine.RulesElement({
    name: "Corrosive Mist",
    type: "Power",
    id: "ID_FMP_POWER_11036",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11036",
    categories: ["Corrosive Mist", "ID_FMP_POWER_11036", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Covering Volley"] = new engine.RulesElement({
    name: "Covering Volley",
    type: "Power",
    id: "ID_FMP_POWER_10700",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10700",
    categories: ["Covering Volley", "ID_FMP_POWER_10700", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Craven Chorus"] = new engine.RulesElement({
    name: "Craven Chorus",
    type: "Power",
    id: "ID_FMP_POWER_11115",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11115",
    categories: ["Craven Chorus", "ID_FMP_POWER_11115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crimson Agony Tide"] = new engine.RulesElement({
    name: "Crimson Agony Tide",
    type: "Power",
    id: "ID_FMP_POWER_11089",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11089",
    categories: ["Crimson Agony Tide", "ID_FMP_POWER_11089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Divine Plague"] = new engine.RulesElement({
    name: "Curse of the Divine Plague",
    type: "Power",
    id: "ID_FMP_POWER_11292",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11292",
    categories: ["Curse of the Divine Plague", "ID_FMP_POWER_11292", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dangerous Friends"] = new engine.RulesElement({
    name: "Dangerous Friends",
    type: "Power",
    id: "ID_FMP_POWER_10711",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10711",
    categories: ["Dangerous Friends", "ID_FMP_POWER_10711", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Dawn's Blazing Fingers"] = new engine.RulesElement({
    name: "Dawn's Blazing Fingers",
    type: "Power",
    id: "ID_FMP_POWER_11289",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11289",
    categories: ["Dawn's Blazing Fingers", "ID_FMP_POWER_11289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Volley"] = new engine.RulesElement({
    name: "Defensive Volley",
    type: "Power",
    id: "ID_FMP_POWER_10705",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10705",
    categories: ["Defensive Volley", "ID_FMP_POWER_10705", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Disorienting Ditty"] = new engine.RulesElement({
    name: "Disorienting Ditty",
    type: "Power",
    id: "ID_FMP_POWER_11109",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11109",
    categories: ["Disorienting Ditty", "ID_FMP_POWER_11109", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dissonant Imbuement"] = new engine.RulesElement({
    name: "Dissonant Imbuement",
    type: "Power",
    id: "ID_FMP_POWER_11114",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11114",
    categories: ["Dissonant Imbuement", "ID_FMP_POWER_11114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Blades"] = new engine.RulesElement({
    name: "Driving Blades",
    type: "Power",
    id: "ID_FMP_POWER_11048",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11048",
    categories: ["Driving Blades", "ID_FMP_POWER_11048", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Drown in Blood"] = new engine.RulesElement({
    name: "Drown in Blood",
    type: "Power",
    id: "ID_FMP_POWER_11084",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11084",
    categories: ["Drown in Blood", "ID_FMP_POWER_11084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Drown in Mud"] = new engine.RulesElement({
    name: "Drown in Mud",
    type: "Power",
    id: "ID_FMP_POWER_11080",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11080",
    categories: ["Drown in Mud", "ID_FMP_POWER_11080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Legacy"] = new engine.RulesElement({
    name: "Elemental Legacy",
    type: "Power",
    id: "ID_FMP_POWER_10940",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10940",
    categories: ["Elemental Legacy", "ID_FMP_POWER_10940", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Entrapping Arrows"] = new engine.RulesElement({
    name: "Entrapping Arrows",
    type: "Power",
    id: "ID_FMP_POWER_10709",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10709",
    categories: ["Entrapping Arrows", "ID_FMP_POWER_10709", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Erupting Volcano Attack"] = new engine.RulesElement({
    name: "Erupting Volcano Attack",
    type: "Power",
    id: "ID_FMP_POWER_11092",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11092",
    categories: ["Erupting Volcano Attack", "ID_FMP_POWER_11092", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Fires of Judgment"] = new engine.RulesElement({
    name: "Fires of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_931",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=931",
    categories: ["Fires of Judgment", "ID_FMP_POWER_931", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Firescythe"] = new engine.RulesElement({
    name: "Firescythe",
    type: "Power",
    id: "ID_FMP_POWER_11037",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11037",
    categories: ["Firescythe", "ID_FMP_POWER_11037", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Flying Steel"] = new engine.RulesElement({
    name: "Flying Steel",
    type: "Power",
    id: "ID_FMP_POWER_10701",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10701",
    categories: ["Flying Steel", "ID_FMP_POWER_10701", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Focus of Cascading Power"] = new engine.RulesElement({
    name: "Focus of Cascading Power",
    type: "Power",
    id: "ID_FMP_POWER_11043",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11043",
    categories: ["Focus of Cascading Power", "ID_FMP_POWER_11043", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Force Ladder"] = new engine.RulesElement({
    name: "Force Ladder",
    type: "Power",
    id: "ID_FMP_POWER_11035",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11035",
    categories: ["Force Ladder", "ID_FMP_POWER_11035", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Forge of Fire and Smoke"] = new engine.RulesElement({
    name: "Forge of Fire and Smoke",
    type: "Power",
    id: "ID_FMP_POWER_11077",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11077",
    categories: ["Forge of Fire and Smoke", "ID_FMP_POWER_11077", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Forge Spirit Attack"] = new engine.RulesElement({
    name: "Forge Spirit Attack",
    type: "Power",
    id: "ID_FMP_POWER_11098",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11098",
    categories: ["Forge Spirit Attack", "ID_FMP_POWER_11098", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_573", "Fireforged Champion", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Forge Strike"] = new engine.RulesElement({
    name: "Forge Strike",
    type: "Power",
    id: "ID_FMP_POWER_10937",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10937",
    categories: ["Forge Strike", "ID_FMP_POWER_10937", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_573", "Fireforged Champion", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Erupting Volcano"] = new engine.RulesElement({
    name: "Form of the Erupting Volcano",
    type: "Power",
    id: "ID_FMP_POWER_11091",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11091",
    categories: ["Form of the Erupting Volcano", "ID_FMP_POWER_11091", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11092"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Forge Spirit"] = new engine.RulesElement({
    name: "Form of the Forge Spirit",
    type: "Power",
    id: "ID_FMP_POWER_11097",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11097",
    categories: ["Form of the Forge Spirit", "ID_FMP_POWER_11097", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_573", "Fireforged Champion", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11098"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Living Breach"] = new engine.RulesElement({
    name: "Form of the Living Breach",
    type: "Power",
    id: "ID_FMP_POWER_11094",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11094",
    categories: ["Form of the Living Breach", "ID_FMP_POWER_11094", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_589", "Breach Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11095"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Magma Brute"] = new engine.RulesElement({
    name: "Form of the Magma Brute",
    type: "Power",
    id: "ID_FMP_POWER_11081",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11081",
    categories: ["Form of the Magma Brute", "ID_FMP_POWER_11081", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11082"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Ape"] = new engine.RulesElement({
    name: "Form of the Primeval Ape",
    type: "Power",
    id: "ID_FMP_POWER_10838",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10838",
    categories: ["Form of the Primeval Ape", "ID_FMP_POWER_10838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10839"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Bear"] = new engine.RulesElement({
    name: "Form of the Primeval Bear",
    type: "Power",
    id: "ID_FMP_POWER_10840",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10840",
    categories: ["Form of the Primeval Bear", "ID_FMP_POWER_10840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10841"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Boar"] = new engine.RulesElement({
    name: "Form of the Primeval Boar",
    type: "Power",
    id: "ID_FMP_POWER_10842",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10842",
    categories: ["Form of the Primeval Boar", "ID_FMP_POWER_10842", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10843"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Cat"] = new engine.RulesElement({
    name: "Form of the Primeval Cat",
    type: "Power",
    id: "ID_FMP_POWER_10850",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10850",
    categories: ["Form of the Primeval Cat", "ID_FMP_POWER_10850", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10851"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Lizard"] = new engine.RulesElement({
    name: "Form of the Primeval Lizard",
    type: "Power",
    id: "ID_FMP_POWER_10844",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10844",
    categories: ["Form of the Primeval Lizard", "ID_FMP_POWER_10844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10845"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Raptor"] = new engine.RulesElement({
    name: "Form of the Primeval Raptor",
    type: "Power",
    id: "ID_FMP_POWER_10852",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10852",
    categories: ["Form of the Primeval Raptor", "ID_FMP_POWER_10852", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10853"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Serpent"] = new engine.RulesElement({
    name: "Form of the Primeval Serpent",
    type: "Power",
    id: "ID_FMP_POWER_10854",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10854",
    categories: ["Form of the Primeval Serpent", "ID_FMP_POWER_10854", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10855"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Spider"] = new engine.RulesElement({
    name: "Form of the Primeval Spider",
    type: "Power",
    id: "ID_FMP_POWER_10846",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10846",
    categories: ["Form of the Primeval Spider", "ID_FMP_POWER_10846", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10847"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Wolf"] = new engine.RulesElement({
    name: "Form of the Primeval Wolf",
    type: "Power",
    id: "ID_FMP_POWER_10848",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10848",
    categories: ["Form of the Primeval Wolf", "ID_FMP_POWER_10848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10849"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Seething Sandstorm"] = new engine.RulesElement({
    name: "Form of the Seething Sandstorm",
    type: "Power",
    id: "ID_FMP_POWER_11087",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11087",
    categories: ["Form of the Seething Sandstorm", "ID_FMP_POWER_11087", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11088"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Vengeful Storm"] = new engine.RulesElement({
    name: "Form of the Vengeful Storm",
    type: "Power",
    id: "ID_FMP_POWER_11078",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11078",
    categories: ["Form of the Vengeful Storm", "ID_FMP_POWER_11078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11079"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Walking Conflagration"] = new engine.RulesElement({
    name: "Form of the Walking Conflagration",
    type: "Power",
    id: "ID_FMP_POWER_11072",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11072",
    categories: ["Form of the Walking Conflagration", "ID_FMP_POWER_11072", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11073"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fury of the Battle God"] = new engine.RulesElement({
    name: "Fury of the Battle God",
    type: "Power",
    id: "ID_FMP_POWER_11050",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11050",
    categories: ["Fury of the Battle God", "ID_FMP_POWER_11050", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Gift of Incomparable Strength"] = new engine.RulesElement({
    name: "Gift of Incomparable Strength",
    type: "Power",
    id: "ID_FMP_POWER_11042",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11042",
    categories: ["Gift of Incomparable Strength", "ID_FMP_POWER_11042", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Gray Roarer's Rampage"] = new engine.RulesElement({
    name: "Gray Roarer's Rampage",
    type: "Power",
    id: "ID_FMP_POWER_11366",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11366",
    categories: ["Gray Roarer's Rampage", "ID_FMP_POWER_11366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Arrow"] = new engine.RulesElement({
    name: "Guardian Arrow",
    type: "Power",
    id: "ID_FMP_POWER_10698",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10698",
    categories: ["Guardian Arrow", "ID_FMP_POWER_10698", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Heaven's Bountiful Reward"] = new engine.RulesElement({
    name: "Heaven's Bountiful Reward",
    type: "Power",
    id: "ID_FMP_POWER_11285",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11285",
    categories: ["Heaven's Bountiful Reward", "ID_FMP_POWER_11285", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Herder of Hulculmak"] = new engine.RulesElement({
    name: "Herder of Hulculmak",
    type: "Power",
    id: "ID_FMP_POWER_11359",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11359",
    categories: ["Herder of Hulculmak", "ID_FMP_POWER_11359", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hindering Shot"] = new engine.RulesElement({
    name: "Hindering Shot",
    type: "Power",
    id: "ID_FMP_POWER_10697",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10697",
    categories: ["Hindering Shot", "ID_FMP_POWER_10697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Outrage"] = new engine.RulesElement({
    name: "Holy Outrage",
    type: "Power",
    id: "ID_FMP_POWER_11051",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11051",
    categories: ["Holy Outrage", "ID_FMP_POWER_11051", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Imprisoning Arrows"] = new engine.RulesElement({
    name: "Imprisoning Arrows",
    type: "Power",
    id: "ID_FMP_POWER_10714",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10714",
    categories: ["Imprisoning Arrows", "ID_FMP_POWER_10714", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Infectious Spark"] = new engine.RulesElement({
    name: "Infectious Spark",
    type: "Power",
    id: "ID_FMP_POWER_11364",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11364",
    categories: ["Infectious Spark", "ID_FMP_POWER_11364", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Interrupting Volley"] = new engine.RulesElement({
    name: "Interrupting Volley",
    type: "Power",
    id: "ID_FMP_POWER_10713",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10713",
    categories: ["Interrupting Volley", "ID_FMP_POWER_10713", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Kord's Strength"] = new engine.RulesElement({
    name: "Kord's Strength",
    type: "Power",
    id: "ID_FMP_POWER_11049",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11049",
    categories: ["Kord's Strength", "ID_FMP_POWER_11049", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Spike"] = new engine.RulesElement({
    name: "Lightning Spike",
    type: "Power",
    id: "ID_FMP_POWER_11045",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11045",
    categories: ["Lightning Spike", "ID_FMP_POWER_11045", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Living Breach Attack"] = new engine.RulesElement({
    name: "Living Breach Attack",
    type: "Power",
    id: "ID_FMP_POWER_11095",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11095",
    categories: ["Living Breach Attack", "ID_FMP_POWER_11095", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_589", "Breach Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Magma Brute Attack"] = new engine.RulesElement({
    name: "Magma Brute Attack",
    type: "Power",
    id: "ID_FMP_POWER_11082",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11082",
    categories: ["Magma Brute Attack", "ID_FMP_POWER_11082", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Mantle of Misfortune"] = new engine.RulesElement({
    name: "Mantle of Misfortune",
    type: "Power",
    id: "ID_FMP_POWER_11299",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11299",
    categories: ["Mantle of Misfortune", "ID_FMP_POWER_11299", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Massive Companion"] = new engine.RulesElement({
    name: "Massive Companion",
    type: "Power",
    id: "ID_FMP_POWER_11357",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11357",
    categories: ["Massive Companion", "ID_FMP_POWER_11357", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mighty Hew"] = new engine.RulesElement({
    name: "Mighty Hew",
    type: "Power",
    id: "ID_FMP_POWER_11041",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11041",
    categories: ["Mighty Hew", "ID_FMP_POWER_11041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Musical Chairs"] = new engine.RulesElement({
    name: "Musical Chairs",
    type: "Power",
    id: "ID_FMP_POWER_11113",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11113",
    categories: ["Musical Chairs", "ID_FMP_POWER_11113", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mystical Debris"] = new engine.RulesElement({
    name: "Mystical Debris",
    type: "Power",
    id: "ID_FMP_POWER_11032",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11032",
    categories: ["Mystical Debris", "ID_FMP_POWER_11032", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Omen of Damnation"] = new engine.RulesElement({
    name: "Omen of Damnation",
    type: "Power",
    id: "ID_FMP_POWER_11293",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11293",
    categories: ["Omen of Damnation", "ID_FMP_POWER_11293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["One Spirit, One Body"] = new engine.RulesElement({
    name: "One Spirit, One Body",
    type: "Power",
    id: "ID_FMP_POWER_11361",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11361",
    categories: ["One Spirit, One Body", "ID_FMP_POWER_11361", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Radiance"] = new engine.RulesElement({
    name: "Overwhelming Radiance",
    type: "Power",
    id: "ID_FMP_POWER_11313",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11313",
    categories: ["Overwhelming Radiance", "ID_FMP_POWER_11313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_599", "Astral Ascendant", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Patron's Blessing"] = new engine.RulesElement({
    name: "Patron's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_11291",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11291",
    categories: ["Patron's Blessing", "ID_FMP_POWER_11291", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Peal of Thunder"] = new engine.RulesElement({
    name: "Peal of Thunder",
    type: "Power",
    id: "ID_FMP_POWER_11040",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11040",
    categories: ["Peal of Thunder", "ID_FMP_POWER_11040", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Pitch"] = new engine.RulesElement({
    name: "Perfect Pitch",
    type: "Power",
    id: "ID_FMP_POWER_11111",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11111",
    categories: ["Perfect Pitch", "ID_FMP_POWER_11111", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Arrow Rain"] = new engine.RulesElement({
    name: "Pinning Arrow Rain",
    type: "Power",
    id: "ID_FMP_POWER_10712",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10712",
    categories: ["Pinning Arrow Rain", "ID_FMP_POWER_10712", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Shot"] = new engine.RulesElement({
    name: "Pinning Shot",
    type: "Power",
    id: "ID_FMP_POWER_10703",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10703",
    categories: ["Pinning Shot", "ID_FMP_POWER_10703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Ape Attack"] = new engine.RulesElement({
    name: "Primeval Ape Attack",
    type: "Power",
    id: "ID_FMP_POWER_10839",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10839",
    categories: ["Primeval Ape Attack", "ID_FMP_POWER_10839", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Bear Attack"] = new engine.RulesElement({
    name: "Primeval Bear Attack",
    type: "Power",
    id: "ID_FMP_POWER_10841",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10841",
    categories: ["Primeval Bear Attack", "ID_FMP_POWER_10841", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Boar Attack"] = new engine.RulesElement({
    name: "Primeval Boar Attack",
    type: "Power",
    id: "ID_FMP_POWER_10843",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10843",
    categories: ["Primeval Boar Attack", "ID_FMP_POWER_10843", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Cat Attack"] = new engine.RulesElement({
    name: "Primeval Cat Attack",
    type: "Power",
    id: "ID_FMP_POWER_10851",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10851",
    categories: ["Primeval Cat Attack", "ID_FMP_POWER_10851", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Lizard Attack"] = new engine.RulesElement({
    name: "Primeval Lizard Attack",
    type: "Power",
    id: "ID_FMP_POWER_10845",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10845",
    categories: ["Primeval Lizard Attack", "ID_FMP_POWER_10845", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Raptor Attack"] = new engine.RulesElement({
    name: "Primeval Raptor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10853",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10853",
    categories: ["Primeval Raptor Attack", "ID_FMP_POWER_10853", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Serpent Attack"] = new engine.RulesElement({
    name: "Primeval Serpent Attack",
    type: "Power",
    id: "ID_FMP_POWER_10855",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10855",
    categories: ["Primeval Serpent Attack", "ID_FMP_POWER_10855", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Spider Attack"] = new engine.RulesElement({
    name: "Primeval Spider Attack",
    type: "Power",
    id: "ID_FMP_POWER_10847",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10847",
    categories: ["Primeval Spider Attack", "ID_FMP_POWER_10847", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Primeval Wolf Attack"] = new engine.RulesElement({
    name: "Primeval Wolf Attack",
    type: "Power",
    id: "ID_FMP_POWER_10849",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10849",
    categories: ["Primeval Wolf Attack", "ID_FMP_POWER_10849", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Progress of Erathis"] = new engine.RulesElement({
    name: "Progress of Erathis",
    type: "Power",
    id: "ID_FMP_POWER_11279",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11279",
    categories: ["Progress of Erathis", "ID_FMP_POWER_11279", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Cordon"] = new engine.RulesElement({
    name: "Radiant Cordon",
    type: "Power",
    id: "ID_FMP_POWER_11287",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11287",
    categories: ["Radiant Cordon", "ID_FMP_POWER_11287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Raging Tempest"] = new engine.RulesElement({
    name: "Raging Tempest",
    type: "Power",
    id: "ID_FMP_POWER_11038",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11038",
    categories: ["Raging Tempest", "ID_FMP_POWER_11038", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Recall the Breach"] = new engine.RulesElement({
    name: "Recall the Breach",
    type: "Power",
    id: "ID_FMP_POWER_11096",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11096",
    categories: ["Recall the Breach", "ID_FMP_POWER_11096", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_589", "Breach Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Roaming Mind, Roving Spirit"] = new engine.RulesElement({
    name: "Roaming Mind, Roving Spirit",
    type: "Power",
    id: "ID_FMP_POWER_11365",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11365",
    categories: ["Roaming Mind, Roving Spirit", "ID_FMP_POWER_11365", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rolling Thunderstrike"] = new engine.RulesElement({
    name: "Rolling Thunderstrike",
    type: "Power",
    id: "ID_FMP_POWER_11044",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11044",
    categories: ["Rolling Thunderstrike", "ID_FMP_POWER_11044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Scattering Shock"] = new engine.RulesElement({
    name: "Scattering Shock",
    type: "Power",
    id: "ID_FMP_POWER_11034",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11034",
    categories: ["Scattering Shock", "ID_FMP_POWER_11034", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Scourge of Heaven"] = new engine.RulesElement({
    name: "Scourge of Heaven",
    type: "Power",
    id: "ID_FMP_POWER_11281",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11281",
    categories: ["Scourge of Heaven", "ID_FMP_POWER_11281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Seething Sandstorm Attack"] = new engine.RulesElement({
    name: "Seething Sandstorm Attack",
    type: "Power",
    id: "ID_FMP_POWER_11088",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11088",
    categories: ["Seething Sandstorm Attack", "ID_FMP_POWER_11088", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Skewering Spikes"] = new engine.RulesElement({
    name: "Skewering Spikes",
    type: "Power",
    id: "ID_FMP_POWER_11030",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11030",
    categories: ["Skewering Spikes", "ID_FMP_POWER_11030", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Consuming Terror"] = new engine.RulesElement({
    name: "Spirit of Consuming Terror",
    type: "Power",
    id: "ID_FMP_POWER_11363",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11363",
    categories: ["Spirit of Consuming Terror", "ID_FMP_POWER_11363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Brain Mole"] = new engine.RulesElement({
    name: "Spirit of the Brain Mole",
    type: "Power",
    id: "ID_FMP_POWER_11367",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11367",
    categories: ["Spirit of the Brain Mole", "ID_FMP_POWER_11367", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sprightly Rhythm"] = new engine.RulesElement({
    name: "Sprightly Rhythm",
    type: "Power",
    id: "ID_FMP_POWER_11110",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11110",
    categories: ["Sprightly Rhythm", "ID_FMP_POWER_11110", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Note"] = new engine.RulesElement({
    name: "Staggering Note",
    type: "Power",
    id: "ID_FMP_POWER_11108",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11108",
    categories: ["Staggering Note", "ID_FMP_POWER_11108", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Father's Favor"] = new engine.RulesElement({
    name: "Storm Father's Favor",
    type: "Power",
    id: "ID_FMP_POWER_11039",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11039",
    categories: ["Storm Father's Favor", "ID_FMP_POWER_11039", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Stormclaw"] = new engine.RulesElement({
    name: "Stormclaw",
    type: "Power",
    id: "ID_FMP_POWER_11046",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11046",
    categories: ["Stormclaw", "ID_FMP_POWER_11046", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Strike Up the Dance"] = new engine.RulesElement({
    name: "Strike Up the Dance",
    type: "Power",
    id: "ID_FMP_POWER_11112",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11112",
    categories: ["Strike Up the Dance", "ID_FMP_POWER_11112", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Celestial Lion"] = new engine.RulesElement({
    name: "Summon Celestial Lion",
    type: "Power",
    id: "ID_FMP_POWER_11288",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11288",
    categories: ["Summon Celestial Lion", "ID_FMP_POWER_11288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Surprising Arrow Attack"] = new engine.RulesElement({
    name: "Surprising Arrow Attack",
    type: "Power",
    id: "ID_FMP_POWER_11141",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11141",
    categories: ["Surprising Arrow Attack", "ID_FMP_POWER_11141", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Surprising Arrow Stance"] = new engine.RulesElement({
    name: "Surprising Arrow Stance",
    type: "Power",
    id: "ID_FMP_POWER_10710",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10710",
    categories: ["Surprising Arrow Stance", "ID_FMP_POWER_10710", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11141"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Thousand Arrow Awareness"] = new engine.RulesElement({
    name: "Thousand Arrow Awareness",
    type: "Power",
    id: "ID_FMP_POWER_10704",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10704",
    categories: ["Thousand Arrow Awareness", "ID_FMP_POWER_10704", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderhead Strike"] = new engine.RulesElement({
    name: "Thunderhead Strike",
    type: "Power",
    id: "ID_FMP_POWER_11083",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11083",
    categories: ["Thunderhead Strike", "ID_FMP_POWER_11083", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Tracking the Target"] = new engine.RulesElement({
    name: "Tracking the Target",
    type: "Power",
    id: "ID_FMP_POWER_10707",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10707",
    categories: ["Tracking the Target", "ID_FMP_POWER_10707", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Transference Tune"] = new engine.RulesElement({
    name: "Transference Tune",
    type: "Power",
    id: "ID_FMP_POWER_11117",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11117",
    categories: ["Transference Tune", "ID_FMP_POWER_11117", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Tremor Slam"] = new engine.RulesElement({
    name: "Tremor Slam",
    type: "Power",
    id: "ID_FMP_POWER_11071",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11071",
    categories: ["Tremor Slam", "ID_FMP_POWER_11071", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Turathi Assault"] = new engine.RulesElement({
    name: "Turathi Assault",
    type: "Power",
    id: "ID_FMP_POWER_11300",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11300",
    categories: ["Turathi Assault", "ID_FMP_POWER_11300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_597", "Broken Mirror", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Storm Attack"] = new engine.RulesElement({
    name: "Vengeful Storm Attack",
    type: "Power",
    id: "ID_FMP_POWER_11079",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11079",
    categories: ["Vengeful Storm Attack", "ID_FMP_POWER_11079", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Venting Breach"] = new engine.RulesElement({
    name: "Venting Breach",
    type: "Power",
    id: "ID_FMP_POWER_11093",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11093",
    categories: ["Venting Breach", "ID_FMP_POWER_11093", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_589", "Breach Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Baatar"] = new engine.RulesElement({
    name: "Vestige of Baatar",
    type: "Power",
    id: "ID_FMP_POWER_11304",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11304",
    categories: ["Vestige of Baatar", "ID_FMP_POWER_11304", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Kronata"] = new engine.RulesElement({
    name: "Vestige of Kronata",
    type: "Power",
    id: "ID_FMP_POWER_11307",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11307",
    categories: ["Vestige of Kronata", "ID_FMP_POWER_11307", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Kulnoghrim"] = new engine.RulesElement({
    name: "Vestige of Kulnoghrim",
    type: "Power",
    id: "ID_FMP_POWER_11311",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11311",
    categories: ["Vestige of Kulnoghrim", "ID_FMP_POWER_11311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_598", "Umbral Cabalist", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Thaxter"] = new engine.RulesElement({
    name: "Vestige of Thaxter",
    type: "Power",
    id: "ID_FMP_POWER_11303",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11303",
    categories: ["Vestige of Thaxter", "ID_FMP_POWER_11303", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Ascendant Commander"] = new engine.RulesElement({
    name: "Vestige of the Ascendant Commander",
    type: "Power",
    id: "ID_FMP_POWER_11314",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11314",
    categories: ["Vestige of the Ascendant Commander", "ID_FMP_POWER_11314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_599", "Astral Ascendant", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Earthen Maker"] = new engine.RulesElement({
    name: "Vestige of the Earthen Maker",
    type: "Power",
    id: "ID_FMP_POWER_11309",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11309",
    categories: ["Vestige of the Earthen Maker", "ID_FMP_POWER_11309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Onyx Queen"] = new engine.RulesElement({
    name: "Vestige of the Onyx Queen",
    type: "Power",
    id: "ID_FMP_POWER_11305",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11305",
    categories: ["Vestige of the Onyx Queen", "ID_FMP_POWER_11305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Unknown Arcanist"] = new engine.RulesElement({
    name: "Vestige of the Unknown Arcanist",
    type: "Power",
    id: "ID_FMP_POWER_11306",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11306",
    categories: ["Vestige of the Unknown Arcanist", "ID_FMP_POWER_11306", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Vykolad"] = new engine.RulesElement({
    name: "Vestige of Vykolad",
    type: "Power",
    id: "ID_FMP_POWER_11308",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11308",
    categories: ["Vestige of Vykolad", "ID_FMP_POWER_11308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Walking Conflagration Attack"] = new engine.RulesElement({
    name: "Walking Conflagration Attack",
    type: "Power",
    id: "ID_FMP_POWER_11073",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11073",
    categories: ["Walking Conflagration Attack", "ID_FMP_POWER_11073", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Shot"] = new engine.RulesElement({
    name: "Warding Shot",
    type: "Power",
    id: "ID_FMP_POWER_10706",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10706",
    categories: ["Warding Shot", "ID_FMP_POWER_10706", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Warning Shot"] = new engine.RulesElement({
    name: "Warning Shot",
    type: "Power",
    id: "ID_FMP_POWER_10696",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10696",
    categories: ["Warning Shot", "ID_FMP_POWER_10696", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wicked Flames"] = new engine.RulesElement({
    name: "Wicked Flames",
    type: "Power",
    id: "ID_FMP_POWER_11085",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11085",
    categories: ["Wicked Flames", "ID_FMP_POWER_11085", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11086"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wicked Flames Attack"] = new engine.RulesElement({
    name: "Wicked Flames Attack",
    type: "Power",
    id: "ID_FMP_POWER_11086",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11086",
    categories: ["Wicked Flames Attack", "ID_FMP_POWER_11086", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
