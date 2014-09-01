define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Blight Locus"] = new engine.RulesElement({
    name: "Blight Locus",
    type: "Power",
    id: "ID_FMP_POWER_7372",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7372",
    categories: ["Blight Locus", "ID_FMP_POWER_7372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_348", "Blightbeast", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blighted Agony"] = new engine.RulesElement({
    name: "Blighted Agony",
    type: "Power",
    id: "ID_FMP_POWER_7370",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7370",
    categories: ["Blighted Agony", "ID_FMP_POWER_7370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_348", "Blightbeast", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Body Shield (Garrote Expert)"] = new engine.RulesElement({
    name: "Body Shield (Garrote Expert)",
    type: "Power",
    id: "ID_FMP_POWER_3287",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3287",
    categories: ["Body Shield (Garrote Expert)", "ID_FMP_POWER_3287", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Instinct"] = new engine.RulesElement({
    name: "Brutal Instinct",
    type: "Power",
    id: "ID_FMP_POWER_7359",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7359",
    categories: ["Brutal Instinct", "ID_FMP_POWER_7359", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Choking Grab"] = new engine.RulesElement({
    name: "Choking Grab",
    type: "Power",
    id: "ID_FMP_POWER_7364",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7364",
    categories: ["Choking Grab", "ID_FMP_POWER_7364", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"],
    rules: function(model) {
      model.select('class feature', 1, "Choking Grab", {
        filter: function(model, element) { return (element.hasCategory("Choking Grab") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Crippling Needle"] = new engine.RulesElement({
    name: "Crippling Needle",
    type: "Power",
    id: "ID_FMP_POWER_7357",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7357",
    categories: ["Crippling Needle", "ID_FMP_POWER_7357", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Cutthroat's Scrutiny"] = new engine.RulesElement({
    name: "Cutthroat's Scrutiny",
    type: "Power",
    id: "ID_FMP_POWER_7362",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7362",
    categories: ["Cutthroat's Scrutiny", "ID_FMP_POWER_7362", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Disappearance"] = new engine.RulesElement({
    name: "Dread Disappearance",
    type: "Power",
    id: "ID_FMP_POWER_7375",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7375",
    categories: ["Dread Disappearance", "ID_FMP_POWER_7375", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_349", "Nightmare Weaver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Improvised Poison"] = new engine.RulesElement({
    name: "Improvised Poison",
    type: "Power",
    id: "ID_FMP_POWER_7367",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7367",
    categories: ["Improvised Poison", "ID_FMP_POWER_7367", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Maggot Form"] = new engine.RulesElement({
    name: "Maggot Form",
    type: "Power",
    id: "ID_FMP_POWER_7371",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7371",
    categories: ["Maggot Form", "ID_FMP_POWER_7371", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_348", "Blightbeast", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nightmare Stalker"] = new engine.RulesElement({
    name: "Nightmare Stalker",
    type: "Power",
    id: "ID_FMP_POWER_7376",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7376",
    categories: ["Nightmare Stalker", "ID_FMP_POWER_7376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_349", "Nightmare Weaver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Painful Delusion"] = new engine.RulesElement({
    name: "Painful Delusion",
    type: "Power",
    id: "ID_FMP_POWER_7373",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7373",
    categories: ["Painful Delusion", "ID_FMP_POWER_7373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_349", "Nightmare Weaver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Potent Poison"] = new engine.RulesElement({
    name: "Potent Poison",
    type: "Power",
    id: "ID_FMP_POWER_7368",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7368",
    categories: ["Potent Poison", "ID_FMP_POWER_7368", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Progressive Toxin"] = new engine.RulesElement({
    name: "Progressive Toxin",
    type: "Power",
    id: "ID_FMP_POWER_7369",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7369",
    categories: ["Progressive Toxin", "ID_FMP_POWER_7369", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Kill"] = new engine.RulesElement({
    name: "Quick Kill",
    type: "Power",
    id: "ID_FMP_POWER_7363",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7363",
    categories: ["Quick Kill", "ID_FMP_POWER_7363", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Shot"] = new engine.RulesElement({
    name: "Stinging Shot",
    type: "Power",
    id: "ID_FMP_POWER_7355",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7355",
    categories: ["Stinging Shot", "ID_FMP_POWER_7355", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Strangler's Hold"] = new engine.RulesElement({
    name: "Strangler's Hold",
    type: "Power",
    id: "ID_FMP_POWER_7366",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7366",
    categories: ["Strangler's Hold", "ID_FMP_POWER_7366", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"],
    rules: function(model) {
      model.select('class feature', 1, "Strangler's Hold", {
        filter: function(model, element) { return (element.hasCategory("Strangler's Hold") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Sudden Retaliation"] = new engine.RulesElement({
    name: "Sudden Retaliation",
    type: "Power",
    id: "ID_FMP_POWER_7361",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7361",
    categories: ["Sudden Retaliation", "ID_FMP_POWER_7361", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Aim (Blowgun)"] = new engine.RulesElement({
    name: "Uncanny Aim (Blowgun)",
    type: "Power",
    id: "ID_FMP_POWER_7356",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7356",
    categories: ["Uncanny Aim (Blowgun)", "ID_FMP_POWER_7356", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
