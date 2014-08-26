define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Astonishing Wound"] = new engine.RulesElement({
    name: "Astonishing Wound",
    type: "Power",
    id: "ID_FMP_POWER_13436",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13436",
    categories: ["Astonishing Wound", "ID_FMP_POWER_13436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["At Your Expense"] = new engine.RulesElement({
    name: "At Your Expense",
    type: "Power",
    id: "ID_FMP_POWER_13446",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13446",
    categories: ["At Your Expense", "ID_FMP_POWER_13446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Blade"] = new engine.RulesElement({
    name: "Blinding Blade",
    type: "Power",
    id: "ID_FMP_POWER_13428",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13428",
    categories: ["Blinding Blade", "ID_FMP_POWER_13428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Corona"] = new engine.RulesElement({
    name: "Brilliant Corona",
    type: "Power",
    id: "ID_FMP_POWER_13453",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13453",
    categories: ["Brilliant Corona", "ID_FMP_POWER_13453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_771", "Sainted General", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Call Nature's Shroud"] = new engine.RulesElement({
    name: "Call Nature's Shroud",
    type: "Power",
    id: "ID_FMP_POWER_13240",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13240",
    categories: ["Call Nature's Shroud", "ID_FMP_POWER_13240", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Confounding Laughter"] = new engine.RulesElement({
    name: "Confounding Laughter",
    type: "Power",
    id: "ID_FMP_POWER_13449",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13449",
    categories: ["Confounding Laughter", "ID_FMP_POWER_13449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Crush Them"] = new engine.RulesElement({
    name: "Crush Them",
    type: "Power",
    id: "ID_FMP_POWER_13456",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13456",
    categories: ["Crush Them", "ID_FMP_POWER_13456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_772", "Warpath Berserker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Decisive Stratagem"] = new engine.RulesElement({
    name: "Decisive Stratagem",
    type: "Power",
    id: "ID_FMP_POWER_13451",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13451",
    categories: ["Decisive Stratagem", "ID_FMP_POWER_13451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_770", "Battle Champion", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dweomer Dagger"] = new engine.RulesElement({
    name: "Dweomer Dagger",
    type: "Power",
    id: "ID_FMP_POWER_13429",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13429",
    categories: ["Dweomer Dagger", "ID_FMP_POWER_13429", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Allies"] = new engine.RulesElement({
    name: "Eldritch Allies",
    type: "Power",
    id: "ID_FMP_POWER_13460",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13460",
    categories: ["Eldritch Allies", "ID_FMP_POWER_13460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_773", "Witchmaster", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Missile"] = new engine.RulesElement({
    name: "Eldritch Missile",
    type: "Power",
    id: "ID_FMP_POWER_13459",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13459",
    categories: ["Eldritch Missile", "ID_FMP_POWER_13459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_773", "Witchmaster", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["End This"] = new engine.RulesElement({
    name: "End This",
    type: "Power",
    id: "ID_FMP_POWER_13450",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13450",
    categories: ["End This", "ID_FMP_POWER_13450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_770", "Battle Champion", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ensorcelled Blade"] = new engine.RulesElement({
    name: "Ensorcelled Blade",
    type: "Power",
    id: "ID_FMP_POWER_13425",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13425",
    categories: ["Ensorcelled Blade", "ID_FMP_POWER_13425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Everywhere and Nowhere"] = new engine.RulesElement({
    name: "Everywhere and Nowhere",
    type: "Power",
    id: "ID_FMP_POWER_13448",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13448",
    categories: ["Everywhere and Nowhere", "ID_FMP_POWER_13448", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Force Daggers"] = new engine.RulesElement({
    name: "Force Daggers",
    type: "Power",
    id: "ID_FMP_POWER_13430",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13430",
    categories: ["Force Daggers", "ID_FMP_POWER_13430", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Heaven's Warriors"] = new engine.RulesElement({
    name: "Heaven's Warriors",
    type: "Power",
    id: "ID_FMP_POWER_13455",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13455",
    categories: ["Heaven's Warriors", "ID_FMP_POWER_13455", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_771", "Sainted General", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Strike"] = new engine.RulesElement({
    name: "Hidden Strike",
    type: "Power",
    id: "ID_FMP_POWER_13431",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13431",
    categories: ["Hidden Strike", "ID_FMP_POWER_13431"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Doubt"] = new engine.RulesElement({
    name: "Insidious Doubt",
    type: "Power",
    id: "ID_FMP_POWER_13444",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13444",
    categories: ["Insidious Doubt", "ID_FMP_POWER_13444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Doubt (Augment 0)"] = new engine.RulesElement({
    name: "Insidious Doubt (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INSIDIOUS_DOUBT_(AUGMENT_0)",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INSIDIOUS_DOUBT_(AUGMENT_0)",
    categories: ["Insidious Doubt (Augment 0)", "ID_INTERNAL_POWER_INSIDIOUS_DOUBT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Doubt (Augment 1)"] = new engine.RulesElement({
    name: "Insidious Doubt (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INSIDIOUS_DOUBT_(AUGMENT_1)",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INSIDIOUS_DOUBT_(AUGMENT_1)",
    categories: ["Insidious Doubt (Augment 1)", "ID_INTERNAL_POWER_INSIDIOUS_DOUBT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Example"] = new engine.RulesElement({
    name: "Inspiring Example",
    type: "Power",
    id: "ID_FMP_POWER_13440",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13440",
    categories: ["Inspiring Example", "ID_FMP_POWER_13440", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_769", "Freedom Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Cuts"] = new engine.RulesElement({
    name: "Lightning Cuts",
    type: "Power",
    id: "ID_FMP_POWER_13427",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13427",
    categories: ["Lightning Cuts", "ID_FMP_POWER_13427", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Mocking Smite"] = new engine.RulesElement({
    name: "Mocking Smite",
    type: "Power",
    id: "ID_FMP_POWER_13447",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13447",
    categories: ["Mocking Smite", "ID_FMP_POWER_13447", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["No Bonds Can Hold"] = new engine.RulesElement({
    name: "No Bonds Can Hold",
    type: "Power",
    id: "ID_FMP_POWER_13432",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13432",
    categories: ["No Bonds Can Hold", "ID_FMP_POWER_13432", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["No Wasted Opportunity"] = new engine.RulesElement({
    name: "No Wasted Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_13461",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13461",
    categories: ["No Wasted Opportunity", "ID_FMP_POWER_13461", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_773", "Witchmaster", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Opportune Distraction"] = new engine.RulesElement({
    name: "Opportune Distraction",
    type: "Power",
    id: "ID_FMP_POWER_13438",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13438",
    categories: ["Opportune Distraction", "ID_FMP_POWER_13438", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Phantasmal Henchman"] = new engine.RulesElement({
    name: "Phantasmal Henchman",
    type: "Power",
    id: "ID_FMP_POWER_13442",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13442",
    categories: ["Phantasmal Henchman", "ID_FMP_POWER_13442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13443"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Phantasmal Henchman Attack"] = new engine.RulesElement({
    name: "Phantasmal Henchman Attack",
    type: "Power",
    id: "ID_FMP_POWER_13443",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13443",
    categories: ["Phantasmal Henchman Attack", "ID_FMP_POWER_13443", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Crusade"] = new engine.RulesElement({
    name: "Radiant Crusade",
    type: "Power",
    id: "ID_FMP_POWER_13454",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13454",
    categories: ["Radiant Crusade", "ID_FMP_POWER_13454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_771", "Sainted General", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Remain Elusive"] = new engine.RulesElement({
    name: "Remain Elusive",
    type: "Power",
    id: "ID_FMP_POWER_13241",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13241",
    categories: ["Remain Elusive", "ID_FMP_POWER_13241", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_748", "Champion of the Vigil", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Remain Unflinching"] = new engine.RulesElement({
    name: "Remain Unflinching",
    type: "Power",
    id: "ID_FMP_POWER_13243",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13243",
    categories: ["Remain Unflinching", "ID_FMP_POWER_13243", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_748", "Champion of the Vigil", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Remain Vigilant"] = new engine.RulesElement({
    name: "Remain Vigilant",
    type: "Power",
    id: "ID_FMP_POWER_13242",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13242",
    categories: ["Remain Vigilant", "ID_FMP_POWER_13242", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_748", "Champion of the Vigil", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Repel the Siege"] = new engine.RulesElement({
    name: "Repel the Siege",
    type: "Power",
    id: "ID_FMP_POWER_13433",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13433",
    categories: ["Repel the Siege", "ID_FMP_POWER_13433", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Self-Sacrificing Strike"] = new engine.RulesElement({
    name: "Self-Sacrificing Strike",
    type: "Power",
    id: "ID_FMP_POWER_13439",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13439",
    categories: ["Self-Sacrificing Strike", "ID_FMP_POWER_13439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_769", "Freedom Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Teleporting Strike"] = new engine.RulesElement({
    name: "Teleporting Strike",
    type: "Power",
    id: "ID_FMP_POWER_13426",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13426",
    categories: ["Teleporting Strike", "ID_FMP_POWER_13426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Test of Mettle"] = new engine.RulesElement({
    name: "Test of Mettle",
    type: "Power",
    id: "ID_FMP_POWER_13458",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13458",
    categories: ["Test of Mettle", "ID_FMP_POWER_13458", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_772", "Warpath Berserker", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Turn the Tables"] = new engine.RulesElement({
    name: "Turn the Tables",
    type: "Power",
    id: "ID_FMP_POWER_13434",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13434",
    categories: ["Turn the Tables", "ID_FMP_POWER_13434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Vanishing Blade"] = new engine.RulesElement({
    name: "Vanishing Blade",
    type: "Power",
    id: "ID_FMP_POWER_13445",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13445",
    categories: ["Vanishing Blade", "ID_FMP_POWER_13445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Guardian"] = new engine.RulesElement({
    name: "Vicious Guardian",
    type: "Power",
    id: "ID_FMP_POWER_13441",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13441",
    categories: ["Vicious Guardian", "ID_FMP_POWER_13441", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_769", "Freedom Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vigilant Defense"] = new engine.RulesElement({
    name: "Vigilant Defense",
    type: "Power",
    id: "ID_FMP_POWER_13452",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13452",
    categories: ["Vigilant Defense", "ID_FMP_POWER_13452", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_770", "Battle Champion", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warpath Rage"] = new engine.RulesElement({
    name: "Warpath Rage",
    type: "Power",
    id: "ID_FMP_POWER_13457",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13457",
    categories: ["Warpath Rage", "ID_FMP_POWER_13457", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_772", "Warpath Berserker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wary Defense"] = new engine.RulesElement({
    name: "Wary Defense",
    type: "Power",
    id: "ID_FMP_POWER_13435",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13435",
    categories: ["Wary Defense", "ID_FMP_POWER_13435", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Who Is Master Now"] = new engine.RulesElement({
    name: "Who Is Master Now",
    type: "Power",
    id: "ID_FMP_POWER_13437",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13437",
    categories: ["Who Is Master Now", "ID_FMP_POWER_13437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_THEME_POWER", "Theme Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
