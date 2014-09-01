define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Arcane Blade"] = new engine.RulesElement({
    name: "Arcane Blade",
    type: "Power",
    id: "ID_FMP_POWER_4239",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4239",
    categories: ["Arcane Blade", "ID_FMP_POWER_4239", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_155", "Watcher of the Night", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Insight"] = new engine.RulesElement({
    name: "Arcane Insight",
    type: "Power",
    id: "ID_FMP_POWER_4236",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4236",
    categories: ["Arcane Insight", "ID_FMP_POWER_4236", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blades from All Angles"] = new engine.RulesElement({
    name: "Blades from All Angles",
    type: "Power",
    id: "ID_FMP_POWER_4232",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4232",
    categories: ["Blades from All Angles", "ID_FMP_POWER_4232", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Blaze of Ulban"] = new engine.RulesElement({
    name: "Blaze of Ulban",
    type: "Power",
    id: "ID_FMP_POWER_4289",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4289",
    categories: ["Blaze of Ulban", "ID_FMP_POWER_4289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Drain"] = new engine.RulesElement({
    name: "Blood Drain",
    type: "Power",
    id: "ID_FMP_POWER_6579",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6579",
    categories: ["Blood Drain", "ID_FMP_POWER_6579", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"],
    rules: function(model) {
      model.select('Racial Trait', 1, "Blood Drain", {
        filter: function(model, element) { return (element.hasCategory("Blood Drain") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Bloodletting Strike"] = new engine.RulesElement({
    name: "Bloodletting Strike",
    type: "Power",
    id: "ID_FMP_POWER_5243",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5243",
    categories: ["Bloodletting Strike", "ID_FMP_POWER_5243", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_217", "Arena Champion", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodseeking Strike"] = new engine.RulesElement({
    name: "Bloodseeking Strike",
    type: "Power",
    id: "ID_FMP_POWER_6583",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6583",
    categories: ["Bloodseeking Strike", "ID_FMP_POWER_6583", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_292", "Bloodknight", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bravo's Finish"] = new engine.RulesElement({
    name: "Bravo's Finish",
    type: "Power",
    id: "ID_FMP_POWER_7360",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7360",
    categories: ["Bravo's Finish", "ID_FMP_POWER_7360", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Brood of Hadar"] = new engine.RulesElement({
    name: "Brood of Hadar",
    type: "Power",
    id: "ID_FMP_POWER_4287",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4287",
    categories: ["Brood of Hadar", "ID_FMP_POWER_4287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Caiphon's Abominable Melody"] = new engine.RulesElement({
    name: "Caiphon's Abominable Melody",
    type: "Power",
    id: "ID_FMP_POWER_4299",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4299",
    categories: ["Caiphon's Abominable Melody", "ID_FMP_POWER_4299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Caiphon's Disquieting Liberty"] = new engine.RulesElement({
    name: "Caiphon's Disquieting Liberty",
    type: "Power",
    id: "ID_FMP_POWER_4292",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4292",
    categories: ["Caiphon's Disquieting Liberty", "ID_FMP_POWER_4292", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Caiphon's Hungry Mercy"] = new engine.RulesElement({
    name: "Caiphon's Hungry Mercy",
    type: "Power",
    id: "ID_FMP_POWER_4254",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4254",
    categories: ["Caiphon's Hungry Mercy", "ID_FMP_POWER_4254", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_156", "Student of Caiphon", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Chain Trip"] = new engine.RulesElement({
    name: "Chain Trip",
    type: "Power",
    id: "ID_FMP_POWER_6962",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6962",
    categories: ["Chain Trip", "ID_FMP_POWER_6962", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Chain Ward"] = new engine.RulesElement({
    name: "Chain Ward",
    type: "Power",
    id: "ID_FMP_POWER_6963",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6963",
    categories: ["Chain Ward", "ID_FMP_POWER_6963", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Stars"] = new engine.RulesElement({
    name: "Crown of Stars",
    type: "Power",
    id: "ID_FMP_POWER_4279",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4279",
    categories: ["Crown of Stars", "ID_FMP_POWER_4279", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Blood"] = new engine.RulesElement({
    name: "Dance of Blood",
    type: "Power",
    id: "ID_FMP_POWER_6585",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6585",
    categories: ["Dance of Blood", "ID_FMP_POWER_6585", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_292", "Bloodknight", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Side of the Moon"] = new engine.RulesElement({
    name: "Dark Side of the Moon",
    type: "Power",
    id: "ID_FMP_POWER_4294",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4294",
    categories: ["Dark Side of the Moon", "ID_FMP_POWER_4294", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Messenger"] = new engine.RulesElement({
    name: "Death's Messenger",
    type: "Power",
    id: "ID_FMP_POWER_7358",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7358",
    categories: ["Death's Messenger", "ID_FMP_POWER_7358", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_48", "Rattling", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Delban's Eye"] = new engine.RulesElement({
    name: "Delban's Eye",
    type: "Power",
    id: "ID_FMP_POWER_4293",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4293",
    categories: ["Delban's Eye", "ID_FMP_POWER_4293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dominating Gaze"] = new engine.RulesElement({
    name: "Dominating Gaze",
    type: "Power",
    id: "ID_FMP_POWER_6582",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6582",
    categories: ["Dominating Gaze", "ID_FMP_POWER_6582", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss"],
    rules: function(model) {
      model.select('Racial Trait', 1, "Dominating Gaze", {
        filter: function(model, element) { return (element.hasCategory("Dominating Gaze") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Envoy of Nihal"] = new engine.RulesElement({
    name: "Envoy of Nihal",
    type: "Power",
    id: "ID_FMP_POWER_4298",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4298",
    categories: ["Envoy of Nihal", "ID_FMP_POWER_4298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm Glimpse"] = new engine.RulesElement({
    name: "Far Realm Glimpse",
    type: "Power",
    id: "ID_FMP_POWER_4291",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4291",
    categories: ["Far Realm Glimpse", "ID_FMP_POWER_4291", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm Phantasm"] = new engine.RulesElement({
    name: "Far Realm Phantasm",
    type: "Power",
    id: "ID_FMP_POWER_4285",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4285",
    categories: ["Far Realm Phantasm", "ID_FMP_POWER_4285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fevered Certainty of Caiphon"] = new engine.RulesElement({
    name: "Fevered Certainty of Caiphon",
    type: "Power",
    id: "ID_FMP_POWER_4280",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4280",
    categories: ["Fevered Certainty of Caiphon", "ID_FMP_POWER_4280", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Feywild Spell Surge"] = new engine.RulesElement({
    name: "Feywild Spell Surge",
    type: "Power",
    id: "ID_FMP_POWER_4237",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4237",
    categories: ["Feywild Spell Surge", "ID_FMP_POWER_4237", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Fury of Gibbeth"] = new engine.RulesElement({
    name: "Fury of Gibbeth",
    type: "Power",
    id: "ID_FMP_POWER_4282",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4282",
    categories: ["Fury of Gibbeth", "ID_FMP_POWER_4282", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Gibbeth's Embrace"] = new engine.RulesElement({
    name: "Gibbeth's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_4297",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4297",
    categories: ["Gibbeth's Embrace", "ID_FMP_POWER_4297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Glaring Wound"] = new engine.RulesElement({
    name: "Glaring Wound",
    type: "Power",
    id: "ID_FMP_POWER_4241",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4241",
    categories: ["Glaring Wound", "ID_FMP_POWER_4241", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_155", "Watcher of the Night", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Glow of Ulban"] = new engine.RulesElement({
    name: "Glow of Ulban",
    type: "Power",
    id: "ID_FMP_POWER_4277",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4277",
    categories: ["Glow of Ulban", "ID_FMP_POWER_4277", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hands of Ihbar"] = new engine.RulesElement({
    name: "Hands of Ihbar",
    type: "Power",
    id: "ID_FMP_POWER_4281",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4281",
    categories: ["Hands of Ihbar", "ID_FMP_POWER_4281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Hesitation Slash"] = new engine.RulesElement({
    name: "Hesitation Slash",
    type: "Power",
    id: "ID_FMP_POWER_4230",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4230",
    categories: ["Hesitation Slash", "ID_FMP_POWER_4230", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Reserves (Arena Champion)"] = new engine.RulesElement({
    name: "Hidden Reserves (Arena Champion)",
    type: "Power",
    id: "ID_FMP_POWER_5242",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5242",
    categories: ["Hidden Reserves (Arena Champion)", "ID_FMP_POWER_5242", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_217", "Arena Champion", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Immortal Curse"] = new engine.RulesElement({
    name: "Immortal Curse",
    type: "Power",
    id: "ID_FMP_POWER_6604",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6604",
    categories: ["Immortal Curse", "ID_FMP_POWER_6604"]
  });
  byID[te.id] = te;
  
  te = Power["Influence of Acamar"] = new engine.RulesElement({
    name: "Influence of Acamar",
    type: "Power",
    id: "ID_FMP_POWER_4286",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4286",
    categories: ["Influence of Acamar", "ID_FMP_POWER_4286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Maneuvering Assault"] = new engine.RulesElement({
    name: "Maneuvering Assault",
    type: "Power",
    id: "ID_FMP_POWER_4234",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4234",
    categories: ["Maneuvering Assault", "ID_FMP_POWER_4234", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mistblood Form"] = new engine.RulesElement({
    name: "Mistblood Form",
    type: "Power",
    id: "ID_FMP_POWER_6584",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6584",
    categories: ["Mistblood Form", "ID_FMP_POWER_6584", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_292", "Bloodknight", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Bladestorm"] = new engine.RulesElement({
    name: "Nimble Bladestorm",
    type: "Power",
    id: "ID_FMP_POWER_4231",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4231",
    categories: ["Nimble Bladestorm", "ID_FMP_POWER_4231", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["No More Secrets"] = new engine.RulesElement({
    name: "No More Secrets",
    type: "Power",
    id: "ID_FMP_POWER_4240",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4240",
    categories: ["No More Secrets", "ID_FMP_POWER_4240", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_155", "Watcher of the Night", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Pinpoint Cyclone"] = new engine.RulesElement({
    name: "Pinpoint Cyclone",
    type: "Power",
    id: "ID_FMP_POWER_4235",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4235",
    categories: ["Pinpoint Cyclone", "ID_FMP_POWER_4235", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Prophecy of Zhudun"] = new engine.RulesElement({
    name: "Prophecy of Zhudun",
    type: "Power",
    id: "ID_FMP_POWER_4278",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4278",
    categories: ["Prophecy of Zhudun", "ID_FMP_POWER_4278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Red Leeches of Nihal"] = new engine.RulesElement({
    name: "Red Leeches of Nihal",
    type: "Power",
    id: "ID_FMP_POWER_4283",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4283",
    categories: ["Red Leeches of Nihal", "ID_FMP_POWER_4283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rending Fear of Khirad"] = new engine.RulesElement({
    name: "Rending Fear of Khirad",
    type: "Power",
    id: "ID_FMP_POWER_4284",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4284",
    categories: ["Rending Fear of Khirad", "ID_FMP_POWER_4284", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Repel Legions"] = new engine.RulesElement({
    name: "Repel Legions",
    type: "Power",
    id: "ID_FMP_POWER_6605",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6605",
    categories: ["Repel Legions", "ID_FMP_POWER_6605", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_300", "Punisher of the Gods", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shunt Between Worlds"] = new engine.RulesElement({
    name: "Shunt Between Worlds",
    type: "Power",
    id: "ID_FMP_POWER_4238",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4238",
    categories: ["Shunt Between Worlds", "ID_FMP_POWER_4238", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Star Flesh"] = new engine.RulesElement({
    name: "Star Flesh",
    type: "Power",
    id: "ID_FMP_POWER_4255",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4255",
    categories: ["Star Flesh", "ID_FMP_POWER_4255", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_157", "Radiant One", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Starless Void"] = new engine.RulesElement({
    name: "Starless Void",
    type: "Power",
    id: "ID_FMP_POWER_4296",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4296",
    categories: ["Starless Void", "ID_FMP_POWER_4296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Steps on the Purple Stair"] = new engine.RulesElement({
    name: "Steps on the Purple Stair",
    type: "Power",
    id: "ID_FMP_POWER_4253",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4253",
    categories: ["Steps on the Purple Stair", "ID_FMP_POWER_4253", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_156", "Student of Caiphon", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Taxing Strike"] = new engine.RulesElement({
    name: "Taxing Strike",
    type: "Power",
    id: "ID_FMP_POWER_5241",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5241",
    categories: ["Taxing Strike", "ID_FMP_POWER_5241", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_217", "Arena Champion", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Troublesome Aid of Caiphon"] = new engine.RulesElement({
    name: "Troublesome Aid of Caiphon",
    type: "Power",
    id: "ID_FMP_POWER_4288",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4288",
    categories: ["Troublesome Aid of Caiphon", "ID_FMP_POWER_4288", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Trust in the Guide Star"] = new engine.RulesElement({
    name: "Trust in the Guide Star",
    type: "Power",
    id: "ID_FMP_POWER_4252",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4252",
    categories: ["Trust in the Guide Star", "ID_FMP_POWER_4252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_156", "Student of Caiphon", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ulban's Shining Cloak"] = new engine.RulesElement({
    name: "Ulban's Shining Cloak",
    type: "Power",
    id: "ID_FMP_POWER_4295",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4295",
    categories: ["Ulban's Shining Cloak", "ID_FMP_POWER_4295", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Unerring Blow"] = new engine.RulesElement({
    name: "Unerring Blow",
    type: "Power",
    id: "ID_FMP_POWER_4233",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4233",
    categories: ["Unerring Blow", "ID_FMP_POWER_4233", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Visage of Zhudun"] = new engine.RulesElement({
    name: "Visage of Zhudun",
    type: "Power",
    id: "ID_FMP_POWER_4290",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4290",
    categories: ["Visage of Zhudun", "ID_FMP_POWER_4290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
