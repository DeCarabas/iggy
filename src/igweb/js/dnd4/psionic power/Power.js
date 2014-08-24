(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["A Feather's Weight"] = new RulesElement({
    name: "A Feather's Weight",
    type: "Power",
    id: "ID_FMP_POWER_13198",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13198",
    categories: ["A Feather's Weight", "ID_FMP_POWER_13198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13199"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["A Feather's Weight [Movement Technique]"] = new RulesElement({
    name: "A Feather's Weight [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13199",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13199",
    categories: ["A Feather's Weight [Movement Technique]", "ID_FMP_POWER_13199", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["A Scattering of Petals"] = new RulesElement({
    name: "A Scattering of Petals",
    type: "Power",
    id: "ID_FMP_POWER_13422",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13422",
    categories: ["A Scattering of Petals", "ID_FMP_POWER_13422", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_765", "Grandmaster of Flowers", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Absorb Momentum"] = new RulesElement({
    name: "Absorb Momentum",
    type: "Power",
    id: "ID_FMP_POWER_13112",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13112",
    categories: ["Absorb Momentum", "ID_FMP_POWER_13112", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_741", "Quicksilver Demon", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Abundant Step"] = new RulesElement({
    name: "Abundant Step",
    type: "Power",
    id: "ID_FMP_POWER_13159",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13159",
    categories: ["Abundant Step", "ID_FMP_POWER_13159", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Accelerated Maneuvers"] = new RulesElement({
    name: "Accelerated Maneuvers",
    type: "Power",
    id: "ID_FMP_POWER_12956",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12956",
    categories: ["Accelerated Maneuvers", "ID_FMP_POWER_12956", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Accelerated Maneuvers (Augment 0)"] = new RulesElement({
    name: "Accelerated Maneuvers (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ACCELERATED_MANEUVERS_(AUGMENT_0)",
    categories: ["Accelerated Maneuvers (Augment 0)", "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Accelerated Maneuvers (Augment 1)"] = new RulesElement({
    name: "Accelerated Maneuvers (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ACCELERATED_MANEUVERS_(AUGMENT_1)",
    categories: ["Accelerated Maneuvers (Augment 1)", "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Accelerated Maneuvers (Augment 2)"] = new RulesElement({
    name: "Accelerated Maneuvers (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ACCELERATED_MANEUVERS_(AUGMENT_2)",
    categories: ["Accelerated Maneuvers (Augment 2)", "ID_INTERNAL_POWER_ACCELERATED_MANEUVERS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Accelerating Strike"] = new RulesElement({
    name: "Accelerating Strike",
    type: "Power",
    id: "ID_FMP_POWER_13029",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13029",
    categories: ["Accelerating Strike", "ID_FMP_POWER_13029", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Adamant Soul"] = new RulesElement({
    name: "Adamant Soul",
    type: "Power",
    id: "ID_FMP_POWER_13176",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13176",
    categories: ["Adamant Soul", "ID_FMP_POWER_13176", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Adamantine Bones"] = new RulesElement({
    name: "Adamantine Bones",
    type: "Power",
    id: "ID_FMP_POWER_13177",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13177",
    categories: ["Adamantine Bones", "ID_FMP_POWER_13177", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Adamantine Hurricane"] = new RulesElement({
    name: "Adamantine Hurricane",
    type: "Power",
    id: "ID_FMP_POWER_13271",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13271",
    categories: ["Adamantine Hurricane", "ID_FMP_POWER_13271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Aggressive Accompaniment"] = new RulesElement({
    name: "Aggressive Accompaniment",
    type: "Power",
    id: "ID_FMP_POWER_12972",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12972",
    categories: ["Aggressive Accompaniment", "ID_FMP_POWER_12972", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Airborne Form"] = new RulesElement({
    name: "Airborne Form",
    type: "Power",
    id: "ID_FMP_POWER_13160",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13160",
    categories: ["Airborne Form", "ID_FMP_POWER_13160", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Altered Awareness"] = new RulesElement({
    name: "Altered Awareness",
    type: "Power",
    id: "ID_FMP_POWER_13194",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13194",
    categories: ["Altered Awareness", "ID_FMP_POWER_13194", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Anarchic Strike"] = new RulesElement({
    name: "Anarchic Strike",
    type: "Power",
    id: "ID_FMP_POWER_13006",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13006",
    categories: ["Anarchic Strike", "ID_FMP_POWER_13006", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_734", "Anarchic Adept", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Anarchic Strike (Augment 0)"] = new RulesElement({
    name: "Anarchic Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ANARCHIC_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ANARCHIC_STRIKE_(AUGMENT_0)",
    categories: ["Anarchic Strike (Augment 0)", "ID_INTERNAL_POWER_ANARCHIC_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Anarchic Strike (Augment 2)"] = new RulesElement({
    name: "Anarchic Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ANARCHIC_STRIKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ANARCHIC_STRIKE_(AUGMENT_2)",
    categories: ["Anarchic Strike (Augment 2)", "ID_INTERNAL_POWER_ANARCHIC_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Appalling Transformation"] = new RulesElement({
    name: "Appalling Transformation",
    type: "Power",
    id: "ID_FMP_POWER_13415",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13415",
    categories: ["Appalling Transformation", "ID_FMP_POWER_13415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_761", "Impure Scion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Appalling Transformation"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Arc of the Flashing Storm"] = new RulesElement({
    name: "Arc of the Flashing Storm",
    type: "Power",
    id: "ID_FMP_POWER_13163",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13163",
    categories: ["Arc of the Flashing Storm", "ID_FMP_POWER_13163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13164"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Arc of the Flashing Storm [Movement Technique]"] = new RulesElement({
    name: "Arc of the Flashing Storm [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13164",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13164",
    categories: ["Arc of the Flashing Storm [Movement Technique]", "ID_FMP_POWER_13164", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Eruption"] = new RulesElement({
    name: "Ardent Eruption",
    type: "Power",
    id: "ID_FMP_POWER_12931",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12931",
    categories: ["Ardent Eruption", "ID_FMP_POWER_12931"]
  });
  byID[te.id] = te;
  
  te = Power["As the Arrow Flies"] = new RulesElement({
    name: "As the Arrow Flies",
    type: "Power",
    id: "ID_FMP_POWER_13180",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13180",
    categories: ["As the Arrow Flies", "ID_FMP_POWER_13180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13181"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["As the Arrow Flies [Movement Technique]"] = new RulesElement({
    name: "As the Arrow Flies [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13181",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13181",
    categories: ["As the Arrow Flies [Movement Technique]", "ID_FMP_POWER_13181", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Bitter Ice"] = new RulesElement({
    name: "Aspect of Bitter Ice",
    type: "Power",
    id: "ID_FMP_POWER_13030",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13030",
    categories: ["Aspect of Bitter Ice", "ID_FMP_POWER_13030", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Bitter Ice (Augment 0)"] = new RulesElement({
    name: "Aspect of Bitter Ice (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_BITTER_ICE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_BITTER_ICE_(AUGMENT_0)",
    categories: ["Aspect of Bitter Ice (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_BITTER_ICE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Bitter Ice (Augment 1)"] = new RulesElement({
    name: "Aspect of Bitter Ice (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_BITTER_ICE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_BITTER_ICE_(AUGMENT_1)",
    categories: ["Aspect of Bitter Ice (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_BITTER_ICE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Quicksilver Strides"] = new RulesElement({
    name: "Aspect of Quicksilver Strides",
    type: "Power",
    id: "ID_FMP_POWER_13110",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13110",
    categories: ["Aspect of Quicksilver Strides", "ID_FMP_POWER_13110", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_741", "Quicksilver Demon", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Quicksilver Strides (Augment 0)"] = new RulesElement({
    name: "Aspect of Quicksilver Strides (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0)",
    categories: ["Aspect of Quicksilver Strides (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Quicksilver Strides (Augment 1)"] = new RulesElement({
    name: "Aspect of Quicksilver Strides (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1)",
    categories: ["Aspect of Quicksilver Strides (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Squamous Horror"] = new RulesElement({
    name: "Aspect of Squamous Horror",
    type: "Power",
    id: "ID_FMP_POWER_13081",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13081",
    categories: ["Aspect of Squamous Horror", "ID_FMP_POWER_13081", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Squamous Horror (Augment 0)"] = new RulesElement({
    name: "Aspect of Squamous Horror (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_0)",
    categories: ["Aspect of Squamous Horror (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Squamous Horror (Augment 2)"] = new RulesElement({
    name: "Aspect of Squamous Horror (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_2)",
    categories: ["Aspect of Squamous Horror (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_SQUAMOUS_HORROR_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Blackstone Gaoler"] = new RulesElement({
    name: "Aspect of the Blackstone Gaoler",
    type: "Power",
    id: "ID_FMP_POWER_13107",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13107",
    categories: ["Aspect of the Blackstone Gaoler", "ID_FMP_POWER_13107", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_740", "Blackstone Guardian", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Blackstone Gaoler (Augment 0)"] = new RulesElement({
    name: "Aspect of the Blackstone Gaoler (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0)",
    categories: ["Aspect of the Blackstone Gaoler (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Blackstone Gaoler (Augment 2)"] = new RulesElement({
    name: "Aspect of the Blackstone Gaoler (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2)",
    categories: ["Aspect of the Blackstone Gaoler (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Infinite Storm"] = new RulesElement({
    name: "Aspect of the Infinite Storm",
    type: "Power",
    id: "ID_FMP_POWER_13114",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13114",
    categories: ["Aspect of the Infinite Storm", "ID_FMP_POWER_13114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_742", "Storm Disciple", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Infinite Storm (Augment 0)"] = new RulesElement({
    name: "Aspect of the Infinite Storm (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0)",
    categories: ["Aspect of the Infinite Storm (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Infinite Storm (Augment 2)"] = new RulesElement({
    name: "Aspect of the Infinite Storm (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2)",
    categories: ["Aspect of the Infinite Storm (Augment 2)", "ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Raging Tempest"] = new RulesElement({
    name: "Aspect of the Raging Tempest",
    type: "Power",
    id: "ID_FMP_POWER_13068",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13068",
    categories: ["Aspect of the Raging Tempest", "ID_FMP_POWER_13068", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Raging Tempest (Augment 0)"] = new RulesElement({
    name: "Aspect of the Raging Tempest (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_0)",
    categories: ["Aspect of the Raging Tempest (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Raging Tempest (Augment 1)"] = new RulesElement({
    name: "Aspect of the Raging Tempest (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_1)",
    categories: ["Aspect of the Raging Tempest (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_THE_RAGING_TEMPEST_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Unspeakable Horror"] = new RulesElement({
    name: "Aspect of Unspeakable Horror",
    type: "Power",
    id: "ID_FMP_POWER_13043",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13043",
    categories: ["Aspect of Unspeakable Horror", "ID_FMP_POWER_13043", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Unspeakable Horror (Augment 0)"] = new RulesElement({
    name: "Aspect of Unspeakable Horror (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_0)",
    categories: ["Aspect of Unspeakable Horror (Augment 0)", "ID_INTERNAL_POWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Unspeakable Horror (Augment 1)"] = new RulesElement({
    name: "Aspect of Unspeakable Horror (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_1)",
    categories: ["Aspect of Unspeakable Horror (Augment 1)", "ID_INTERNAL_POWER_ASPECT_OF_UNSPEAKABLE_HORROR_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Awaken the Celestial Tiger"] = new RulesElement({
    name: "Awaken the Celestial Tiger",
    type: "Power",
    id: "ID_FMP_POWER_13289",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13289",
    categories: ["Awaken the Celestial Tiger", "ID_FMP_POWER_13289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_752", "Tiger Claw Master", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Awakened Id"] = new RulesElement({
    name: "Awakened Id",
    type: "Power",
    id: "ID_FMP_POWER_12988",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12988",
    categories: ["Awakened Id", "ID_FMP_POWER_12988", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Teleport"] = new RulesElement({
    name: "Baleful Teleport",
    type: "Power",
    id: "ID_FMP_POWER_13055",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13055",
    categories: ["Baleful Teleport", "ID_FMP_POWER_13055", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Basilisk Nature Defense"] = new RulesElement({
    name: "Basilisk Nature Defense",
    type: "Power",
    id: "ID_FMP_POWER_13279",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13279",
    categories: ["Basilisk Nature Defense", "ID_FMP_POWER_13279", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_749", "Basilisk's Fury Adept", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Flow"] = new RulesElement({
    name: "Battle Flow",
    type: "Power",
    id: "ID_FMP_POWER_12936",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12936",
    categories: ["Battle Flow", "ID_FMP_POWER_12936", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blackstone Curse"] = new RulesElement({
    name: "Blackstone Curse",
    type: "Power",
    id: "ID_FMP_POWER_13106",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13106",
    categories: ["Blackstone Curse", "ID_FMP_POWER_13106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_740", "Blackstone Guardian", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blackstone Curse (Augment 0)"] = new RulesElement({
    name: "Blackstone Curse (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLACKSTONE_CURSE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BLACKSTONE_CURSE_(AUGMENT_0)",
    categories: ["Blackstone Curse (Augment 0)", "ID_INTERNAL_POWER_BLACKSTONE_CURSE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Blackstone Curse (Augment 2)"] = new RulesElement({
    name: "Blackstone Curse (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLACKSTONE_CURSE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BLACKSTONE_CURSE_(AUGMENT_2)",
    categories: ["Blackstone Curse (Augment 2)", "ID_INTERNAL_POWER_BLACKSTONE_CURSE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Offensive"] = new RulesElement({
    name: "Blazing Offensive",
    type: "Power",
    id: "ID_FMP_POWER_13093",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13093",
    categories: ["Blazing Offensive", "ID_FMP_POWER_13093", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Clarity"] = new RulesElement({
    name: "Blinding Clarity",
    type: "Power",
    id: "ID_FMP_POWER_12980",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12980",
    categories: ["Blinding Clarity", "ID_FMP_POWER_12980", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Clarity (Augment 0)"] = new RulesElement({
    name: "Blinding Clarity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BLINDING_CLARITY_(AUGMENT_0)",
    categories: ["Blinding Clarity (Augment 0)", "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Clarity (Augment 1)"] = new RulesElement({
    name: "Blinding Clarity (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BLINDING_CLARITY_(AUGMENT_1)",
    categories: ["Blinding Clarity (Augment 1)", "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Clarity (Augment 4)"] = new RulesElement({
    name: "Blinding Clarity (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BLINDING_CLARITY_(AUGMENT_4)",
    categories: ["Blinding Clarity (Augment 4)", "ID_INTERNAL_POWER_BLINDING_CLARITY_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Resurgence"] = new RulesElement({
    name: "Bloody Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_12973",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12973",
    categories: ["Bloody Resurgence", "ID_FMP_POWER_12973", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Body Double"] = new RulesElement({
    name: "Body Double",
    type: "Power",
    id: "ID_FMP_POWER_13051",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13051",
    categories: ["Body Double", "ID_FMP_POWER_13051", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Body Double (Augment 0)"] = new RulesElement({
    name: "Body Double (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BODY_DOUBLE_(AUGMENT_0)",
    categories: ["Body Double (Augment 0)", "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Body Double (Augment 1)"] = new RulesElement({
    name: "Body Double (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BODY_DOUBLE_(AUGMENT_1)",
    categories: ["Body Double (Augment 1)", "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Body Double (Augment 2)"] = new RulesElement({
    name: "Body Double (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BODY_DOUBLE_(AUGMENT_2)",
    categories: ["Body Double (Augment 2)", "ID_INTERNAL_POWER_BODY_DOUBLE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Booming Shout"] = new RulesElement({
    name: "Booming Shout",
    type: "Power",
    id: "ID_FMP_POWER_13188",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13188",
    categories: ["Booming Shout", "ID_FMP_POWER_13188", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Borrow Training"] = new RulesElement({
    name: "Borrow Training",
    type: "Power",
    id: "ID_FMP_POWER_13313",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13313",
    categories: ["Borrow Training", "ID_FMP_POWER_13313", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Bountiful Portent"] = new RulesElement({
    name: "Bountiful Portent",
    type: "Power",
    id: "ID_FMP_POWER_12995",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12995",
    categories: ["Bountiful Portent", "ID_FMP_POWER_12995", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Brandished Promise"] = new RulesElement({
    name: "Brandished Promise",
    type: "Power",
    id: "ID_FMP_POWER_13097",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13097",
    categories: ["Brandished Promise", "ID_FMP_POWER_13097", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Brandished Promise (Augment 0)"] = new RulesElement({
    name: "Brandished Promise (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRANDISHED_PROMISE_(AUGMENT_0)",
    categories: ["Brandished Promise (Augment 0)", "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Brandished Promise (Augment 2)"] = new RulesElement({
    name: "Brandished Promise (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRANDISHED_PROMISE_(AUGMENT_2)",
    categories: ["Brandished Promise (Augment 2)", "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Brandished Promise (Augment 6)"] = new RulesElement({
    name: "Brandished Promise (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRANDISHED_PROMISE_(AUGMENT_6)",
    categories: ["Brandished Promise (Augment 6)", "ID_INTERNAL_POWER_BRANDISHED_PROMISE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of the Four WInds"] = new RulesElement({
    name: "Breath of the Four WInds",
    type: "Power",
    id: "ID_FMP_POWER_13283",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13283",
    categories: ["Breath of the Four WInds", "ID_FMP_POWER_13283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_750", "Four Winds Master", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Thought"] = new RulesElement({
    name: "Brilliant Thought",
    type: "Power",
    id: "ID_FMP_POWER_13346",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13346",
    categories: ["Brilliant Thought", "ID_FMP_POWER_13346", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Thought (Augment 0)"] = new RulesElement({
    name: "Brilliant Thought (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRILLIANT_THOUGHT_(AUGMENT_0)",
    categories: ["Brilliant Thought (Augment 0)", "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Thought (Augment 1)"] = new RulesElement({
    name: "Brilliant Thought (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRILLIANT_THOUGHT_(AUGMENT_1)",
    categories: ["Brilliant Thought (Augment 1)", "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Thought (Augment 4)"] = new RulesElement({
    name: "Brilliant Thought (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_BRILLIANT_THOUGHT_(AUGMENT_4)",
    categories: ["Brilliant Thought (Augment 4)", "ID_INTERNAL_POWER_BRILLIANT_THOUGHT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Buoyancy of Thought"] = new RulesElement({
    name: "Buoyancy of Thought",
    type: "Power",
    id: "ID_FMP_POWER_13314",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13314",
    categories: ["Buoyancy of Thought", "ID_FMP_POWER_13314", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cacophonous Shout"] = new RulesElement({
    name: "Cacophonous Shout",
    type: "Power",
    id: "ID_FMP_POWER_13138",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13138",
    categories: ["Cacophonous Shout", "ID_FMP_POWER_13138", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Call Forth the Seven Keys"] = new RulesElement({
    name: "Call Forth the Seven Keys",
    type: "Power",
    id: "ID_FMP_POWER_13421",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13421",
    categories: ["Call Forth the Seven Keys", "ID_FMP_POWER_13421", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_764", "Eighth Seal", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Cast the Net"] = new RulesElement({
    name: "Cast the Net",
    type: "Power",
    id: "ID_FMP_POWER_13039",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13039",
    categories: ["Cast the Net", "ID_FMP_POWER_13039", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Cast the Net (Augment 0)"] = new RulesElement({
    name: "Cast the Net (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CAST_THE_NET_(AUGMENT_0)",
    categories: ["Cast the Net (Augment 0)", "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cast the Net (Augment 1)"] = new RulesElement({
    name: "Cast the Net (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CAST_THE_NET_(AUGMENT_1)",
    categories: ["Cast the Net (Augment 1)", "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Cast the Net (Augment 2)"] = new RulesElement({
    name: "Cast the Net (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CAST_THE_NET_(AUGMENT_2)",
    categories: ["Cast the Net (Augment 2)", "ID_INTERNAL_POWER_CAST_THE_NET_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Cerebral Phantasm"] = new RulesElement({
    name: "Cerebral Phantasm",
    type: "Power",
    id: "ID_FMP_POWER_13363",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13363",
    categories: ["Cerebral Phantasm", "ID_FMP_POWER_13363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13364"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Cerebral Phantasm Attack"] = new RulesElement({
    name: "Cerebral Phantasm Attack",
    type: "Power",
    id: "ID_FMP_POWER_13364",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13364",
    categories: ["Cerebral Phantasm Attack", "ID_FMP_POWER_13364", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Cerebral Worm"] = new RulesElement({
    name: "Cerebral Worm",
    type: "Power",
    id: "ID_FMP_POWER_12960",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12960",
    categories: ["Cerebral Worm", "ID_FMP_POWER_12960", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Cage"] = new RulesElement({
    name: "Cerulean Cage",
    type: "Power",
    id: "ID_FMP_POWER_13358",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13358",
    categories: ["Cerulean Cage", "ID_FMP_POWER_13358", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Cage (Augment 0)"] = new RulesElement({
    name: "Cerulean Cage (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CERULEAN_CAGE_(AUGMENT_0)",
    categories: ["Cerulean Cage (Augment 0)", "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Cage (Augment 1)"] = new RulesElement({
    name: "Cerulean Cage (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CERULEAN_CAGE_(AUGMENT_1)",
    categories: ["Cerulean Cage (Augment 1)", "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Cerulean Cage (Augment 4)"] = new RulesElement({
    name: "Cerulean Cage (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CERULEAN_CAGE_(AUGMENT_4)",
    categories: ["Cerulean Cage (Augment 4)", "ID_INTERNAL_POWER_CERULEAN_CAGE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Breach"] = new RulesElement({
    name: "Chaos Breach",
    type: "Power",
    id: "ID_FMP_POWER_13007",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13007",
    categories: ["Chaos Breach", "ID_FMP_POWER_13007", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_734", "Anarchic Adept", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Unbound"] = new RulesElement({
    name: "Chaos Unbound",
    type: "Power",
    id: "ID_FMP_POWER_13008",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13008",
    categories: ["Chaos Unbound", "ID_FMP_POWER_13008", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_734", "Anarchic Adept", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Charge the Clouds"] = new RulesElement({
    name: "Charge the Clouds",
    type: "Power",
    id: "ID_FMP_POWER_13287",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13287",
    categories: ["Charge the Clouds", "ID_FMP_POWER_13287", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_751", "Soaring Blade", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Clarified Pain"] = new RulesElement({
    name: "Clarified Pain",
    type: "Power",
    id: "ID_FMP_POWER_12984",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12984",
    categories: ["Clarified Pain", "ID_FMP_POWER_12984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Clear Horizon"] = new RulesElement({
    name: "Clear Horizon",
    type: "Power",
    id: "ID_FMP_POWER_13011",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13011",
    categories: ["Clear Horizon", "ID_FMP_POWER_13011", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_735", "Awakened Visionary", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Close Wounds"] = new RulesElement({
    name: "Close Wounds",
    type: "Power",
    id: "ID_FMP_POWER_12940",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12940",
    categories: ["Close Wounds", "ID_FMP_POWER_12940", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Mind"] = new RulesElement({
    name: "Cloud Mind",
    type: "Power",
    id: "ID_FMP_POWER_12944",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12944",
    categories: ["Cloud Mind", "ID_FMP_POWER_12944", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Mind (Augment 0)"] = new RulesElement({
    name: "Cloud Mind (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_MIND_(AUGMENT_0)",
    categories: ["Cloud Mind (Augment 0)", "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Mind (Augment 1)"] = new RulesElement({
    name: "Cloud Mind (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_MIND_(AUGMENT_1)",
    categories: ["Cloud Mind (Augment 1)", "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Mind (Augment 2)"] = new RulesElement({
    name: "Cloud Mind (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_MIND_(AUGMENT_2)",
    categories: ["Cloud Mind (Augment 2)", "ID_INTERNAL_POWER_CLOUD_MIND_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Dancing Blades"] = new RulesElement({
    name: "Cloud of Dancing Blades",
    type: "Power",
    id: "ID_FMP_POWER_13076",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13076",
    categories: ["Cloud of Dancing Blades", "ID_FMP_POWER_13076", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13077"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Dancing Blades (Augment 0)"] = new RulesElement({
    name: "Cloud of Dancing Blades (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_0)",
    categories: ["Cloud of Dancing Blades (Augment 0)", "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Dancing Blades (Augment 1)"] = new RulesElement({
    name: "Cloud of Dancing Blades (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_1)",
    categories: ["Cloud of Dancing Blades (Augment 1)", "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Dancing Blades (Augment 4)"] = new RulesElement({
    name: "Cloud of Dancing Blades (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_4)",
    categories: ["Cloud of Dancing Blades (Augment 4)", "ID_INTERNAL_POWER_CLOUD_OF_DANCING_BLADES_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Dancing Blades Attack"] = new RulesElement({
    name: "Cloud of Dancing Blades Attack",
    type: "Power",
    id: "ID_FMP_POWER_13077",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13077",
    categories: ["Cloud of Dancing Blades Attack", "ID_FMP_POWER_13077", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Common Cause"] = new RulesElement({
    name: "Common Cause",
    type: "Power",
    id: "ID_FMP_POWER_12976",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12976",
    categories: ["Common Cause", "ID_FMP_POWER_12976", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Concerted Strike"] = new RulesElement({
    name: "Concerted Strike",
    type: "Power",
    id: "ID_FMP_POWER_12992",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12992",
    categories: ["Concerted Strike", "ID_FMP_POWER_12992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Concerted Strike (Augment 0)"] = new RulesElement({
    name: "Concerted Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONCERTED_STRIKE_(AUGMENT_0)",
    categories: ["Concerted Strike (Augment 0)", "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Concerted Strike (Augment 2)"] = new RulesElement({
    name: "Concerted Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONCERTED_STRIKE_(AUGMENT_2)",
    categories: ["Concerted Strike (Augment 2)", "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Concerted Strike (Augment 6)"] = new RulesElement({
    name: "Concerted Strike (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONCERTED_STRIKE_(AUGMENT_6)",
    categories: ["Concerted Strike (Augment 6)", "ID_INTERNAL_POWER_CONCERTED_STRIKE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Conductive Defense"] = new RulesElement({
    name: "Conductive Defense",
    type: "Power",
    id: "ID_FMP_POWER_13025",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13025",
    categories: ["Conductive Defense", "ID_FMP_POWER_13025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Conductive Defense (Augment 0)"] = new RulesElement({
    name: "Conductive Defense (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONDUCTIVE_DEFENSE_(AUGMENT_0)",
    categories: ["Conductive Defense (Augment 0)", "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Conductive Defense (Augment 1)"] = new RulesElement({
    name: "Conductive Defense (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONDUCTIVE_DEFENSE_(AUGMENT_1)",
    categories: ["Conductive Defense (Augment 1)", "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Conductive Defense (Augment 2)"] = new RulesElement({
    name: "Conductive Defense (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONDUCTIVE_DEFENSE_(AUGMENT_2)",
    categories: ["Conductive Defense (Augment 2)", "ID_INTERNAL_POWER_CONDUCTIVE_DEFENSE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Confirmation of Spirit"] = new RulesElement({
    name: "Confirmation of Spirit",
    type: "Power",
    id: "ID_FMP_POWER_13178",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13178",
    categories: ["Confirmation of Spirit", "ID_FMP_POWER_13178", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Conflicted Emotions"] = new RulesElement({
    name: "Conflicted Emotions",
    type: "Power",
    id: "ID_FMP_POWER_12968",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12968",
    categories: ["Conflicted Emotions", "ID_FMP_POWER_12968", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Conflicted Emotions (Augment 0)"] = new RulesElement({
    name: "Conflicted Emotions (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONFLICTED_EMOTIONS_(AUGMENT_0)",
    categories: ["Conflicted Emotions (Augment 0)", "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Conflicted Emotions (Augment 1)"] = new RulesElement({
    name: "Conflicted Emotions (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONFLICTED_EMOTIONS_(AUGMENT_1)",
    categories: ["Conflicted Emotions (Augment 1)", "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Conflicted Emotions (Augment 4)"] = new RulesElement({
    name: "Conflicted Emotions (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CONFLICTED_EMOTIONS_(AUGMENT_4)",
    categories: ["Conflicted Emotions (Augment 4)", "ID_INTERNAL_POWER_CONFLICTED_EMOTIONS_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Consuming Psychosis"] = new RulesElement({
    name: "Consuming Psychosis",
    type: "Power",
    id: "ID_FMP_POWER_13387",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13387",
    categories: ["Consuming Psychosis", "ID_FMP_POWER_13387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Coordinated Effort"] = new RulesElement({
    name: "Coordinated Effort",
    type: "Power",
    id: "ID_FMP_POWER_12974",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12974",
    categories: ["Coordinated Effort", "ID_FMP_POWER_12974", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Corridor of Pain"] = new RulesElement({
    name: "Corridor of Pain",
    type: "Power",
    id: "ID_FMP_POWER_12985",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12985",
    categories: ["Corridor of Pain", "ID_FMP_POWER_12985", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Reprisal"] = new RulesElement({
    name: "Crushing Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_13206",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13206",
    categories: ["Crushing Reprisal", "ID_FMP_POWER_13206", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Turmoil"] = new RulesElement({
    name: "Crushing Turmoil",
    type: "Power",
    id: "ID_FMP_POWER_13317",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13317",
    categories: ["Crushing Turmoil", "ID_FMP_POWER_13317", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Turmoil (Augment 0)"] = new RulesElement({
    name: "Crushing Turmoil (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_TURMOIL_(AUGMENT_0)",
    categories: ["Crushing Turmoil (Augment 0)", "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Turmoil (Augment 1)"] = new RulesElement({
    name: "Crushing Turmoil (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_TURMOIL_(AUGMENT_1)",
    categories: ["Crushing Turmoil (Augment 1)", "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Turmoil (Augment 2)"] = new RulesElement({
    name: "Crushing Turmoil (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_TURMOIL_(AUGMENT_2)",
    categories: ["Crushing Turmoil (Augment 2)", "ID_INTERNAL_POWER_CRUSHING_TURMOIL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Vortex"] = new RulesElement({
    name: "Crushing Vortex",
    type: "Power",
    id: "ID_FMP_POWER_13089",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13089",
    categories: ["Crushing Vortex", "ID_FMP_POWER_13089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Vortex (Augment 0)"] = new RulesElement({
    name: "Crushing Vortex (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_VORTEX_(AUGMENT_0)",
    categories: ["Crushing Vortex (Augment 0)", "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Vortex (Augment 2)"] = new RulesElement({
    name: "Crushing Vortex (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_VORTEX_(AUGMENT_2)",
    categories: ["Crushing Vortex (Augment 2)", "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Vortex (Augment 6)"] = new RulesElement({
    name: "Crushing Vortex (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CRUSHING_VORTEX_(AUGMENT_6)",
    categories: ["Crushing Vortex (Augment 6)", "ID_INTERNAL_POWER_CRUSHING_VORTEX_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Wave Strike"] = new RulesElement({
    name: "Crushing Wave Strike",
    type: "Power",
    id: "ID_FMP_POWER_13069",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13069",
    categories: ["Crushing Wave Strike", "ID_FMP_POWER_13069", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Abduction"] = new RulesElement({
    name: "Cunning Abduction",
    type: "Power",
    id: "ID_FMP_POWER_13120",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13120",
    categories: ["Cunning Abduction", "ID_FMP_POWER_13120", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_744", "Unbound Nomad", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Abduction (Augment 0)"] = new RulesElement({
    name: "Cunning Abduction (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CUNNING_ABDUCTION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CUNNING_ABDUCTION_(AUGMENT_0)",
    categories: ["Cunning Abduction (Augment 0)", "ID_INTERNAL_POWER_CUNNING_ABDUCTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Abduction (Augment 2)"] = new RulesElement({
    name: "Cunning Abduction (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_CUNNING_ABDUCTION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_CUNNING_ABDUCTION_(AUGMENT_2)",
    categories: ["Cunning Abduction (Augment 2)", "ID_INTERNAL_POWER_CUNNING_ABDUCTION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Strike"] = new RulesElement({
    name: "Dancing Strike",
    type: "Power",
    id: "ID_FMP_POWER_13078",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13078",
    categories: ["Dancing Strike", "ID_FMP_POWER_13078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Strike (Augment 0)"] = new RulesElement({
    name: "Dancing Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DANCING_STRIKE_(AUGMENT_0)",
    categories: ["Dancing Strike (Augment 0)", "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Strike (Augment 1)"] = new RulesElement({
    name: "Dancing Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DANCING_STRIKE_(AUGMENT_1)",
    categories: ["Dancing Strike (Augment 1)", "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Strike (Augment 4)"] = new RulesElement({
    name: "Dancing Strike (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DANCING_STRIKE_(AUGMENT_4)",
    categories: ["Dancing Strike (Augment 4)", "ID_INTERNAL_POWER_DANCING_STRIKE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Darting Grace Attack"] = new RulesElement({
    name: "Darting Grace Attack",
    type: "Power",
    id: "ID_FMP_POWER_13102",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13102",
    categories: ["Darting Grace Attack", "ID_FMP_POWER_13102", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Darting Grace Strike"] = new RulesElement({
    name: "Darting Grace Strike",
    type: "Power",
    id: "ID_FMP_POWER_13101",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13101",
    categories: ["Darting Grace Strike", "ID_FMP_POWER_13101", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13102"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Deaden Blow"] = new RulesElement({
    name: "Deaden Blow",
    type: "Power",
    id: "ID_FMP_POWER_13085",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13085",
    categories: ["Deaden Blow", "ID_FMP_POWER_13085", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Decelerating Slash"] = new RulesElement({
    name: "Decelerating Slash",
    type: "Power",
    id: "ID_FMP_POWER_12948",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12948",
    categories: ["Decelerating Slash", "ID_FMP_POWER_12948", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Decerebrate"] = new RulesElement({
    name: "Decerebrate",
    type: "Power",
    id: "ID_FMP_POWER_13381",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13381",
    categories: ["Decerebrate", "ID_FMP_POWER_13381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Decerebrate (Augment 0)"] = new RulesElement({
    name: "Decerebrate (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DECEREBRATE_(AUGMENT_0)",
    categories: ["Decerebrate (Augment 0)", "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Decerebrate (Augment 2)"] = new RulesElement({
    name: "Decerebrate (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DECEREBRATE_(AUGMENT_2)",
    categories: ["Decerebrate (Augment 2)", "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Decerebrate (Augment 6)"] = new RulesElement({
    name: "Decerebrate (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DECEREBRATE_(AUGMENT_6)",
    categories: ["Decerebrate (Augment 6)", "ID_INTERNAL_POWER_DECEREBRATE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Demiurge Resistance"] = new RulesElement({
    name: "Demiurge Resistance",
    type: "Power",
    id: "ID_FMP_POWER_13420",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13420",
    categories: ["Demiurge Resistance", "ID_FMP_POWER_13420", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_763", "Demiurge", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Detach Mind"] = new RulesElement({
    name: "Detach Mind",
    type: "Power",
    id: "ID_FMP_POWER_12977",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12977",
    categories: ["Detach Mind", "ID_FMP_POWER_12977", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dimension Slide"] = new RulesElement({
    name: "Dimension Slide",
    type: "Power",
    id: "ID_FMP_POWER_13033",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13033",
    categories: ["Dimension Slide", "ID_FMP_POWER_13033", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Ambush"] = new RulesElement({
    name: "Dimensional Ambush",
    type: "Power",
    id: "ID_FMP_POWER_13082",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13082",
    categories: ["Dimensional Ambush", "ID_FMP_POWER_13082", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Scramble"] = new RulesElement({
    name: "Dimensional Scramble",
    type: "Power",
    id: "ID_FMP_POWER_13302",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13302",
    categories: ["Dimensional Scramble", "ID_FMP_POWER_13302", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Scramble (Augment 0)"] = new RulesElement({
    name: "Dimensional Scramble (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_0)",
    categories: ["Dimensional Scramble (Augment 0)", "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Scramble (Augment 1)"] = new RulesElement({
    name: "Dimensional Scramble (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_1)",
    categories: ["Dimensional Scramble (Augment 1)", "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Scramble (Augment 2)"] = new RulesElement({
    name: "Dimensional Scramble (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_2)",
    categories: ["Dimensional Scramble (Augment 2)", "ID_INTERNAL_POWER_DIMENSIONAL_SCRAMBLE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Shortcut"] = new RulesElement({
    name: "Dimensional Shortcut",
    type: "Power",
    id: "ID_FMP_POWER_13342",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13342",
    categories: ["Dimensional Shortcut", "ID_FMP_POWER_13342", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Stowaway"] = new RulesElement({
    name: "Dimensional Stowaway",
    type: "Power",
    id: "ID_FMP_POWER_13315",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13315",
    categories: ["Dimensional Stowaway", "ID_FMP_POWER_13315", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Disbelieve Danger"] = new RulesElement({
    name: "Disbelieve Danger",
    type: "Power",
    id: "ID_FMP_POWER_12978",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12978",
    categories: ["Disbelieve Danger", "ID_FMP_POWER_12978", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Discorporate Retaliation"] = new RulesElement({
    name: "Discorporate Retaliation",
    type: "Power",
    id: "ID_FMP_POWER_13411",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13411",
    categories: ["Discorporate Retaliation", "ID_FMP_POWER_13411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_760", "Psionic Incarnate", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Discorporate Retaliation (Augment 0)"] = new RulesElement({
    name: "Discorporate Retaliation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DISCORPORATE_RETALIATION_(AUGMENT_0)",
    categories: ["Discorporate Retaliation (Augment 0)", "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Discorporate Retaliation (Augment 2)"] = new RulesElement({
    name: "Discorporate Retaliation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DISCORPORATE_RETALIATION_(AUGMENT_2)",
    categories: ["Discorporate Retaliation (Augment 2)", "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Disrupting Fist"] = new RulesElement({
    name: "Disrupting Fist",
    type: "Power",
    id: "ID_FMP_POWER_13154",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13154",
    categories: ["Disrupting Fist", "ID_FMP_POWER_13154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13155"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Disrupting Fist Attack"] = new RulesElement({
    name: "Disrupting Fist Attack",
    type: "Power",
    id: "ID_FMP_POWER_13155",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13155",
    categories: ["Disrupting Fist Attack", "ID_FMP_POWER_13155", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Double Vision"] = new RulesElement({
    name: "Double Vision",
    type: "Power",
    id: "ID_FMP_POWER_13090",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13090",
    categories: ["Double Vision", "ID_FMP_POWER_13090", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Double Vision (Augment 0)"] = new RulesElement({
    name: "Double Vision (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DOUBLE_VISION_(AUGMENT_0)",
    categories: ["Double Vision (Augment 0)", "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Double Vision (Augment 2)"] = new RulesElement({
    name: "Double Vision (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DOUBLE_VISION_(AUGMENT_2)",
    categories: ["Double Vision (Augment 2)", "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Double Vision (Augment 6)"] = new RulesElement({
    name: "Double Vision (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_DOUBLE_VISION_(AUGMENT_6)",
    categories: ["Double Vision (Augment 6)", "ID_INTERNAL_POWER_DOUBLE_VISION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Fist Strike"] = new RulesElement({
    name: "Dragon Fist Strike",
    type: "Power",
    id: "ID_FMP_POWER_13257",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13257",
    categories: ["Dragon Fist Strike", "ID_FMP_POWER_13257", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Dream Traveler"] = new RulesElement({
    name: "Dream Traveler",
    type: "Power",
    id: "ID_FMP_POWER_13354",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13354",
    categories: ["Dream Traveler", "ID_FMP_POWER_13354", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dull Pain"] = new RulesElement({
    name: "Dull Pain",
    type: "Power",
    id: "ID_FMP_POWER_12941",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12941",
    categories: ["Dull Pain", "ID_FMP_POWER_12941", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Eagle Claw Strike"] = new RulesElement({
    name: "Eagle Claw Strike",
    type: "Power",
    id: "ID_FMP_POWER_13128",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13128",
    categories: ["Eagle Claw Strike", "ID_FMP_POWER_13128", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13129"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Eagle Claw Strike [Movement Technique]"] = new RulesElement({
    name: "Eagle Claw Strike [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13129",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13129",
    categories: ["Eagle Claw Strike [Movement Technique]", "ID_FMP_POWER_13129", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Echoing Boom"] = new RulesElement({
    name: "Echoing Boom",
    type: "Power",
    id: "ID_FMP_POWER_13336",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13336",
    categories: ["Echoing Boom", "ID_FMP_POWER_13336", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13337"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Echoing Boom Attack"] = new RulesElement({
    name: "Echoing Boom Attack",
    type: "Power",
    id: "ID_FMP_POWER_13337",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13337",
    categories: ["Echoing Boom Attack", "ID_FMP_POWER_13337", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant"] = new RulesElement({
    name: "Ectoplasmic Servant",
    type: "Power",
    id: "ID_FMP_POWER_13331",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13331",
    categories: ["Ectoplasmic Servant", "ID_FMP_POWER_13331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13332"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant (Augment 0)"] = new RulesElement({
    name: "Ectoplasmic Servant (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ECTOPLASMIC_SERVANT_(AUGMENT_0)",
    categories: ["Ectoplasmic Servant (Augment 0)", "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant (Augment 1)"] = new RulesElement({
    name: "Ectoplasmic Servant (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ECTOPLASMIC_SERVANT_(AUGMENT_1)",
    categories: ["Ectoplasmic Servant (Augment 1)", "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant Attack"] = new RulesElement({
    name: "Ectoplasmic Servant Attack",
    type: "Power",
    id: "ID_FMP_POWER_13332",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13332",
    categories: ["Ectoplasmic Servant Attack", "ID_FMP_POWER_13332", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant Attack (Augment 0)"] = new RulesElement({
    name: "Ectoplasmic Servant Attack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_0)",
    categories: ["Ectoplasmic Servant Attack (Augment 0)", "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ectoplasmic Servant Attack (Augment 2)"] = new RulesElement({
    name: "Ectoplasmic Servant Attack (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_2)",
    categories: ["Ectoplasmic Servant Attack (Augment 2)", "ID_INTERNAL_POWER_ECTOPLASMIC_SERVANT_ATTACK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Whip"] = new RulesElement({
    name: "Ego Whip",
    type: "Power",
    id: "ID_FMP_POWER_13333",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13333",
    categories: ["Ego Whip", "ID_FMP_POWER_13333", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Whip (Augment 0)"] = new RulesElement({
    name: "Ego Whip (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EGO_WHIP_(AUGMENT_0)",
    categories: ["Ego Whip (Augment 0)", "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Whip (Augment 1)"] = new RulesElement({
    name: "Ego Whip (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EGO_WHIP_(AUGMENT_1)",
    categories: ["Ego Whip (Augment 1)", "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Ego Whip (Augment 2)"] = new RulesElement({
    name: "Ego Whip (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EGO_WHIP_(AUGMENT_2)",
    categories: ["Ego Whip (Augment 2)", "ID_INTERNAL_POWER_EGO_WHIP_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Elan Recovery"] = new RulesElement({
    name: "Elan Recovery",
    type: "Power",
    id: "ID_FMP_POWER_13413",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13413",
    categories: ["Elan Recovery", "ID_FMP_POWER_13413", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_760", "Psionic Incarnate", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Elan Resilience"] = new RulesElement({
    name: "Elan Resilience",
    type: "Power",
    id: "ID_FMP_POWER_13417",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13417",
    categories: ["Elan Resilience", "ID_FMP_POWER_13417", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Elusive Ghost"] = new RulesElement({
    name: "Elusive Ghost",
    type: "Power",
    id: "ID_FMP_POWER_13098",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13098",
    categories: ["Elusive Ghost", "ID_FMP_POWER_13098", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Elusive Ghost (Augment 0)"] = new RulesElement({
    name: "Elusive Ghost (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ELUSIVE_GHOST_(AUGMENT_0)",
    categories: ["Elusive Ghost (Augment 0)", "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Elusive Ghost (Augment 2)"] = new RulesElement({
    name: "Elusive Ghost (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ELUSIVE_GHOST_(AUGMENT_2)",
    categories: ["Elusive Ghost (Augment 2)", "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Elusive Ghost (Augment 6)"] = new RulesElement({
    name: "Elusive Ghost (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ELUSIVE_GHOST_(AUGMENT_6)",
    categories: ["Elusive Ghost (Augment 6)", "ID_INTERNAL_POWER_ELUSIVE_GHOST_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Emotion Leech"] = new RulesElement({
    name: "Emotion Leech",
    type: "Power",
    id: "ID_FMP_POWER_13022",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13022",
    categories: ["Emotion Leech", "ID_FMP_POWER_13022", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_739", "Siphon", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Emotional Flood"] = new RulesElement({
    name: "Emotional Flood",
    type: "Power",
    id: "ID_FMP_POWER_12981",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12981",
    categories: ["Emotional Flood", "ID_FMP_POWER_12981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Emotional Flood (Augment 0)"] = new RulesElement({
    name: "Emotional Flood (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EMOTIONAL_FLOOD_(AUGMENT_0)",
    categories: ["Emotional Flood (Augment 0)", "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Emotional Flood (Augment 1)"] = new RulesElement({
    name: "Emotional Flood (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EMOTIONAL_FLOOD_(AUGMENT_1)",
    categories: ["Emotional Flood (Augment 1)", "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Emotional Flood (Augment 4)"] = new RulesElement({
    name: "Emotional Flood (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_EMOTIONAL_FLOOD_(AUGMENT_4)",
    categories: ["Emotional Flood (Augment 4)", "ID_INTERNAL_POWER_EMOTIONAL_FLOOD_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Emotional Wellspring"] = new RulesElement({
    name: "Emotional Wellspring",
    type: "Power",
    id: "ID_FMP_POWER_12961",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12961",
    categories: ["Emotional Wellspring", "ID_FMP_POWER_12961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Empathic Feedback"] = new RulesElement({
    name: "Empathic Feedback",
    type: "Power",
    id: "ID_FMP_POWER_13044",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13044",
    categories: ["Empathic Feedback", "ID_FMP_POWER_13044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Empathic Recovery"] = new RulesElement({
    name: "Empathic Recovery",
    type: "Power",
    id: "ID_FMP_POWER_12989",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12989",
    categories: ["Empathic Recovery", "ID_FMP_POWER_12989", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Empty Body"] = new RulesElement({
    name: "Empty Body",
    type: "Power",
    id: "ID_FMP_POWER_13247",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13247",
    categories: ["Empty Body", "ID_FMP_POWER_13247", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Body"] = new RulesElement({
    name: "Enduring Body",
    type: "Power",
    id: "ID_FMP_POWER_13119",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13119",
    categories: ["Enduring Body", "ID_FMP_POWER_13119", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_743", "Talaric Ironjack", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Mitigation"] = new RulesElement({
    name: "Energy Mitigation",
    type: "Power",
    id: "ID_FMP_POWER_13343",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13343",
    categories: ["Energy Mitigation", "ID_FMP_POWER_13343", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Transformation"] = new RulesElement({
    name: "Energy Transformation",
    type: "Power",
    id: "ID_FMP_POWER_13047",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13047",
    categories: ["Energy Transformation", "ID_FMP_POWER_13047", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Escalating Fury"] = new RulesElement({
    name: "Escalating Fury",
    type: "Power",
    id: "ID_FMP_POWER_12952",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12952",
    categories: ["Escalating Fury", "ID_FMP_POWER_12952", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Conduit"] = new RulesElement({
    name: "Essence Conduit",
    type: "Power",
    id: "ID_FMP_POWER_12969",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12969",
    categories: ["Essence Conduit", "ID_FMP_POWER_12969", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Conduit (Augment 0)"] = new RulesElement({
    name: "Essence Conduit (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ESSENCE_CONDUIT_(AUGMENT_0)",
    categories: ["Essence Conduit (Augment 0)", "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Conduit (Augment 1)"] = new RulesElement({
    name: "Essence Conduit (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ESSENCE_CONDUIT_(AUGMENT_1)",
    categories: ["Essence Conduit (Augment 1)", "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Conduit (Augment 4)"] = new RulesElement({
    name: "Essence Conduit (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_ESSENCE_CONDUIT_(AUGMENT_4)",
    categories: ["Essence Conduit (Augment 4)", "ID_INTERNAL_POWER_ESSENCE_CONDUIT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Evade Explosion"] = new RulesElement({
    name: "Evade Explosion",
    type: "Power",
    id: "ID_FMP_POWER_13034",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13034",
    categories: ["Evade Explosion", "ID_FMP_POWER_13034", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Expedite Healing"] = new RulesElement({
    name: "Expedite Healing",
    type: "Power",
    id: "ID_FMP_POWER_12990",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12990",
    categories: ["Expedite Healing", "ID_FMP_POWER_12990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Force"] = new RulesElement({
    name: "Explosive Force",
    type: "Power",
    id: "ID_FMP_POWER_13327",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13327",
    categories: ["Explosive Force", "ID_FMP_POWER_13327", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Summons"] = new RulesElement({
    name: "Explosive Summons",
    type: "Power",
    id: "ID_FMP_POWER_13002",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13002",
    categories: ["Explosive Summons", "ID_FMP_POWER_13002", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Basilisk"] = new RulesElement({
    name: "Eyes of the Basilisk",
    type: "Power",
    id: "ID_FMP_POWER_13275",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13275",
    categories: ["Eyes of the Basilisk", "ID_FMP_POWER_13275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_749", "Basilisk's Fury Adept", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13277"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Basilisk [Movement Technique]"] = new RulesElement({
    name: "Eyes of the Basilisk [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13277",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13277",
    categories: ["Eyes of the Basilisk [Movement Technique]", "ID_FMP_POWER_13277", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_749", "Basilisk's Fury Adept", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Falcon's Rent"] = new RulesElement({
    name: "Falcon's Rent",
    type: "Power",
    id: "ID_FMP_POWER_13189",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13189",
    categories: ["Falcon's Rent", "ID_FMP_POWER_13189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fall of Wind"] = new RulesElement({
    name: "Fall of Wind",
    type: "Power",
    id: "ID_FMP_POWER_13143",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13143",
    categories: ["Fall of Wind", "ID_FMP_POWER_13143", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Sky"] = new RulesElement({
    name: "Falling Sky",
    type: "Power",
    id: "ID_FMP_POWER_12999",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12999",
    categories: ["Falling Sky", "ID_FMP_POWER_12999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Sky (Augment 0)"] = new RulesElement({
    name: "Falling Sky (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FALLING_SKY_(AUGMENT_0)",
    categories: ["Falling Sky (Augment 0)", "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Sky (Augment 2)"] = new RulesElement({
    name: "Falling Sky (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FALLING_SKY_(AUGMENT_2)",
    categories: ["Falling Sky (Augment 2)", "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Sky (Augment 6)"] = new RulesElement({
    name: "Falling Sky (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FALLING_SKY_(AUGMENT_6)",
    categories: ["Falling Sky (Augment 6)", "ID_INTERNAL_POWER_FALLING_SKY_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Falling Star Strike"] = new RulesElement({
    name: "Falling Star Strike",
    type: "Power",
    id: "ID_FMP_POWER_13272",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13272",
    categories: ["Falling Star Strike", "ID_FMP_POWER_13272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm's Embrace"] = new RulesElement({
    name: "Far Realm's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_13376",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13376",
    categories: ["Far Realm's Embrace", "ID_FMP_POWER_13376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13377"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Far Realm's Embrace Attack"] = new RulesElement({
    name: "Far Realm's Embrace Attack",
    type: "Power",
    id: "ID_FMP_POWER_13377",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13377",
    categories: ["Far Realm's Embrace Attack", "ID_FMP_POWER_13377", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm's Gift"] = new RulesElement({
    name: "Far Realm's Gift",
    type: "Power",
    id: "ID_FMP_POWER_13391",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13391",
    categories: ["Far Realm's Gift", "ID_FMP_POWER_13391", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_755", "Alienist", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm's Gift (Augment 0)"] = new RulesElement({
    name: "Far Realm's Gift (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FAR_REALM'S_GIFT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FAR_REALM'S_GIFT_(AUGMENT_0)",
    categories: ["Far Realm's Gift (Augment 0)", "ID_INTERNAL_POWER_FAR_REALM'S_GIFT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Far Realm's Gift (Augment 2)"] = new RulesElement({
    name: "Far Realm's Gift (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FAR_REALM'S_GIFT_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FAR_REALM'S_GIFT_(AUGMENT_2)",
    categories: ["Far Realm's Gift (Augment 2)", "ID_INTERNAL_POWER_FAR_REALM'S_GIFT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Attraction"] = new RulesElement({
    name: "Fatal Attraction",
    type: "Power",
    id: "ID_FMP_POWER_12957",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12957",
    categories: ["Fatal Attraction", "ID_FMP_POWER_12957", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Attraction (Augment 0)"] = new RulesElement({
    name: "Fatal Attraction (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FATAL_ATTRACTION_(AUGMENT_0)",
    categories: ["Fatal Attraction (Augment 0)", "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Attraction (Augment 1)"] = new RulesElement({
    name: "Fatal Attraction (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FATAL_ATTRACTION_(AUGMENT_1)",
    categories: ["Fatal Attraction (Augment 1)", "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Fatal Attraction (Augment 2)"] = new RulesElement({
    name: "Fatal Attraction (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FATAL_ATTRACTION_(AUGMENT_2)",
    categories: ["Fatal Attraction (Augment 2)", "ID_INTERNAL_POWER_FATAL_ATTRACTION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Fated Confrontation"] = new RulesElement({
    name: "Fated Confrontation",
    type: "Power",
    id: "ID_FMP_POWER_13045",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13045",
    categories: ["Fated Confrontation", "ID_FMP_POWER_13045", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Fate's Judgment"] = new RulesElement({
    name: "Fate's Judgment",
    type: "Power",
    id: "ID_FMP_POWER_13258",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13258",
    categories: ["Fate's Judgment", "ID_FMP_POWER_13258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Fearless Mindset"] = new RulesElement({
    name: "Fearless Mindset",
    type: "Power",
    id: "ID_FMP_POWER_13086",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13086",
    categories: ["Fearless Mindset", "ID_FMP_POWER_13086", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Death"] = new RulesElement({
    name: "Feast of Death",
    type: "Power",
    id: "ID_FMP_POWER_13023",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13023",
    categories: ["Feast of Death", "ID_FMP_POWER_13023", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_739", "Siphon", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Feeding the Doves"] = new RulesElement({
    name: "Feeding the Doves",
    type: "Power",
    id: "ID_FMP_POWER_13165",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13165",
    categories: ["Feeding the Doves", "ID_FMP_POWER_13165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13166"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Feeding the Doves [Movement Technique]"] = new RulesElement({
    name: "Feeding the Doves [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13166",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13166",
    categories: ["Feeding the Doves [Movement Technique]", "ID_FMP_POWER_13166", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Feigned Opening"] = new RulesElement({
    name: "Feigned Opening",
    type: "Power",
    id: "ID_FMP_POWER_13200",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13200",
    categories: ["Feigned Opening", "ID_FMP_POWER_13200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13201"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Feigned Opening [Movement Technique]"] = new RulesElement({
    name: "Feigned Opening [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13201",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13201",
    categories: ["Feigned Opening [Movement Technique]", "ID_FMP_POWER_13201", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fiery Lash"] = new RulesElement({
    name: "Fiery Lash",
    type: "Power",
    id: "ID_FMP_POWER_13399",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13399",
    categories: ["Fiery Lash", "ID_FMP_POWER_13399"]
  });
  byID[te.id] = te;
  
  te = Power["Fighting Fury"] = new RulesElement({
    name: "Fighting Fury",
    type: "Power",
    id: "ID_FMP_POWER_13144",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13144",
    categories: ["Fighting Fury", "ID_FMP_POWER_13144", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Finishing Move"] = new RulesElement({
    name: "Finishing Move",
    type: "Power",
    id: "ID_FMP_POWER_13171",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13171",
    categories: ["Finishing Move", "ID_FMP_POWER_13171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Walk"] = new RulesElement({
    name: "Fire Walk",
    type: "Power",
    id: "ID_FMP_POWER_13401",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13401",
    categories: ["Fire Walk", "ID_FMP_POWER_13401", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_757", "Firestarter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Terrain"] = new RulesElement({
    name: "Flowing Terrain",
    type: "Power",
    id: "ID_FMP_POWER_13365",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13365",
    categories: ["Flowing Terrain", "ID_FMP_POWER_13365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Weapon"] = new RulesElement({
    name: "Flowing Weapon",
    type: "Power",
    id: "ID_FMP_POWER_13052",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13052",
    categories: ["Flowing Weapon", "ID_FMP_POWER_13052", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Weapon (Augment 0)"] = new RulesElement({
    name: "Flowing Weapon (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FLOWING_WEAPON_(AUGMENT_0)",
    categories: ["Flowing Weapon (Augment 0)", "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Weapon (Augment 1)"] = new RulesElement({
    name: "Flowing Weapon (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FLOWING_WEAPON_(AUGMENT_1)",
    categories: ["Flowing Weapon (Augment 1)", "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Weapon (Augment 2)"] = new RulesElement({
    name: "Flowing Weapon (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FLOWING_WEAPON_(AUGMENT_2)",
    categories: ["Flowing Weapon (Augment 2)", "ID_INTERNAL_POWER_FLOWING_WEAPON_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Flying Tiger Assault"] = new RulesElement({
    name: "Flying Tiger Assault",
    type: "Power",
    id: "ID_FMP_POWER_13172",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13172",
    categories: ["Flying Tiger Assault", "ID_FMP_POWER_13172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Focus Bind"] = new RulesElement({
    name: "Focus Bind",
    type: "Power",
    id: "ID_FMP_POWER_13083",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13083",
    categories: ["Focus Bind", "ID_FMP_POWER_13083", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Force Barricade"] = new RulesElement({
    name: "Force Barricade",
    type: "Power",
    id: "ID_FMP_POWER_13344",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13344",
    categories: ["Force Barricade", "ID_FMP_POWER_13344", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Force Cube"] = new RulesElement({
    name: "Force Cube",
    type: "Power",
    id: "ID_FMP_POWER_13366",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13366",
    categories: ["Force Cube", "ID_FMP_POWER_13366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13367"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Force Cube Attack"] = new RulesElement({
    name: "Force Cube Attack",
    type: "Power",
    id: "ID_FMP_POWER_13367",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13367",
    categories: ["Force Cube Attack", "ID_FMP_POWER_13367", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Force of Will"] = new RulesElement({
    name: "Force of Will",
    type: "Power",
    id: "ID_FMP_POWER_12964",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12964",
    categories: ["Force of Will", "ID_FMP_POWER_12964", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Force Shard"] = new RulesElement({
    name: "Force Shard",
    type: "Power",
    id: "ID_FMP_POWER_13303",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13303",
    categories: ["Force Shard", "ID_FMP_POWER_13303", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13304"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Force Shard (Augment 0)"] = new RulesElement({
    name: "Force Shard (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FORCE_SHARD_(AUGMENT_0)",
    categories: ["Force Shard (Augment 0)", "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Shard (Augment 1)"] = new RulesElement({
    name: "Force Shard (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FORCE_SHARD_(AUGMENT_1)",
    categories: ["Force Shard (Augment 1)", "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Shard (Augment 2)"] = new RulesElement({
    name: "Force Shard (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FORCE_SHARD_(AUGMENT_2)",
    categories: ["Force Shard (Augment 2)", "ID_INTERNAL_POWER_FORCE_SHARD_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Force Shard Attack"] = new RulesElement({
    name: "Force Shard Attack",
    type: "Power",
    id: "ID_FMP_POWER_13304",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13304",
    categories: ["Force Shard Attack", "ID_FMP_POWER_13304", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Force Spheres"] = new RulesElement({
    name: "Force Spheres",
    type: "Power",
    id: "ID_FMP_POWER_13322",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13322",
    categories: ["Force Spheres", "ID_FMP_POWER_13322", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13323"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Force Spheres Attack"] = new RulesElement({
    name: "Force Spheres Attack",
    type: "Power",
    id: "ID_FMP_POWER_13323",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13323",
    categories: ["Force Spheres Attack", "ID_FMP_POWER_13323", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Serenity"] = new RulesElement({
    name: "Forced Serenity",
    type: "Power",
    id: "ID_FMP_POWER_13349",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13349",
    categories: ["Forced Serenity", "ID_FMP_POWER_13349", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Repositioning"] = new RulesElement({
    name: "Forceful Repositioning",
    type: "Power",
    id: "ID_FMP_POWER_13369",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13369",
    categories: ["Forceful Repositioning", "ID_FMP_POWER_13369", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Foretaste of Death"] = new RulesElement({
    name: "Foretaste of Death",
    type: "Power",
    id: "ID_FMP_POWER_12937",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12937",
    categories: ["Foretaste of Death", "ID_FMP_POWER_12937", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fostered Talent"] = new RulesElement({
    name: "Fostered Talent",
    type: "Power",
    id: "ID_FMP_POWER_12965",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12965",
    categories: ["Fostered Talent", "ID_FMP_POWER_12965", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Four Hidden Sounds"] = new RulesElement({
    name: "Four Hidden Sounds",
    type: "Power",
    id: "ID_FMP_POWER_13259",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13259",
    categories: ["Four Hidden Sounds", "ID_FMP_POWER_13259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13260"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Four Hidden Sounds Attack"] = new RulesElement({
    name: "Four Hidden Sounds Attack",
    type: "Power",
    id: "ID_FMP_POWER_13260",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13260",
    categories: ["Four Hidden Sounds Attack", "ID_FMP_POWER_13260", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Four Winds Assault"] = new RulesElement({
    name: "Four Winds Assault",
    type: "Power",
    id: "ID_FMP_POWER_13280",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13280",
    categories: ["Four Winds Assault", "ID_FMP_POWER_13280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_750", "Four Winds Master", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13282"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Four Winds Assault [Movement Technique]"] = new RulesElement({
    name: "Four Winds Assault [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13282",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13282",
    categories: ["Four Winds Assault [Movement Technique]", "ID_FMP_POWER_13282", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_750", "Four Winds Master", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Four Winds Tempest"] = new RulesElement({
    name: "Four Winds Tempest",
    type: "Power",
    id: "ID_FMP_POWER_13281",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13281",
    categories: ["Four Winds Tempest", "ID_FMP_POWER_13281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_750", "Four Winds Master", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Freeze the Life Blood"] = new RulesElement({
    name: "Freeze the Life Blood",
    type: "Power",
    id: "ID_FMP_POWER_13156",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13156",
    categories: ["Freeze the Life Blood", "ID_FMP_POWER_13156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Freeze Time"] = new RulesElement({
    name: "Freeze Time",
    type: "Power",
    id: "ID_FMP_POWER_13423",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13423",
    categories: ["Freeze Time", "ID_FMP_POWER_13423", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_766", "Master of Moments", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["From Earth to Heaven"] = new RulesElement({
    name: "From Earth to Heaven",
    type: "Power",
    id: "ID_FMP_POWER_13263",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13263",
    categories: ["From Earth to Heaven", "ID_FMP_POWER_13263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13264"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["From Earth to Heaven [Movement Technique]"] = new RulesElement({
    name: "From Earth to Heaven [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13264",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13264",
    categories: ["From Earth to Heaven [Movement Technique]", "ID_FMP_POWER_13264", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fuse Form"] = new RulesElement({
    name: "Fuse Form",
    type: "Power",
    id: "ID_FMP_POWER_13318",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13318",
    categories: ["Fuse Form", "ID_FMP_POWER_13318", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Fuse Form (Augment 0)"] = new RulesElement({
    name: "Fuse Form (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FUSE_FORM_(AUGMENT_0)",
    categories: ["Fuse Form (Augment 0)", "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Fuse Form (Augment 1)"] = new RulesElement({
    name: "Fuse Form (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FUSE_FORM_(AUGMENT_1)",
    categories: ["Fuse Form (Augment 1)", "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Fuse Form (Augment 2)"] = new RulesElement({
    name: "Fuse Form (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_FUSE_FORM_(AUGMENT_2)",
    categories: ["Fuse Form (Augment 2)", "ID_INTERNAL_POWER_FUSE_FORM_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Give Chase"] = new RulesElement({
    name: "Give Chase",
    type: "Power",
    id: "ID_FMP_POWER_13053",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13053",
    categories: ["Give Chase", "ID_FMP_POWER_13053", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Give Chase (Augment 0)"] = new RulesElement({
    name: "Give Chase (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GIVE_CHASE_(AUGMENT_0)",
    categories: ["Give Chase (Augment 0)", "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Give Chase (Augment 1)"] = new RulesElement({
    name: "Give Chase (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GIVE_CHASE_(AUGMENT_1)",
    categories: ["Give Chase (Augment 1)", "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Give Chase (Augment 2)"] = new RulesElement({
    name: "Give Chase (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GIVE_CHASE_(AUGMENT_2)",
    categories: ["Give Chase (Augment 2)", "ID_INTERNAL_POWER_GIVE_CHASE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Glacier's Mantle"] = new RulesElement({
    name: "Glacier's Mantle",
    type: "Power",
    id: "ID_FMP_POWER_13261",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13261",
    categories: ["Glacier's Mantle", "ID_FMP_POWER_13261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Glare of the Inner Eye"] = new RulesElement({
    name: "Glare of the Inner Eye",
    type: "Power",
    id: "ID_FMP_POWER_13202",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13202",
    categories: ["Glare of the Inner Eye", "ID_FMP_POWER_13202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13203"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Glare of the Inner Eye [Movement Technique]"] = new RulesElement({
    name: "Glare of the Inner Eye [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13203",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13203",
    categories: ["Glare of the Inner Eye [Movement Technique]", "ID_FMP_POWER_13203", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Gravity Well"] = new RulesElement({
    name: "Gravity Well",
    type: "Power",
    id: "ID_FMP_POWER_13079",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13079",
    categories: ["Gravity Well", "ID_FMP_POWER_13079", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Gravity Well (Augment 0)"] = new RulesElement({
    name: "Gravity Well (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GRAVITY_WELL_(AUGMENT_0)",
    categories: ["Gravity Well (Augment 0)", "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Gravity Well (Augment 1)"] = new RulesElement({
    name: "Gravity Well (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GRAVITY_WELL_(AUGMENT_1)",
    categories: ["Gravity Well (Augment 1)", "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Gravity Well (Augment 4)"] = new RulesElement({
    name: "Gravity Well (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GRAVITY_WELL_(AUGMENT_4)",
    categories: ["Gravity Well (Augment 4)", "ID_INTERNAL_POWER_GRAVITY_WELL_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Guarded Prison"] = new RulesElement({
    name: "Guarded Prison",
    type: "Power",
    id: "ID_FMP_POWER_12945",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12945",
    categories: ["Guarded Prison", "ID_FMP_POWER_12945", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Guarded Prison (Augment 0)"] = new RulesElement({
    name: "Guarded Prison (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GUARDED_PRISON_(AUGMENT_0)",
    categories: ["Guarded Prison (Augment 0)", "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Guarded Prison (Augment 1)"] = new RulesElement({
    name: "Guarded Prison (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GUARDED_PRISON_(AUGMENT_1)",
    categories: ["Guarded Prison (Augment 1)", "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Guarded Prison (Augment 2)"] = new RulesElement({
    name: "Guarded Prison (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_GUARDED_PRISON_(AUGMENT_2)",
    categories: ["Guarded Prison (Augment 2)", "ID_INTERNAL_POWER_GUARDED_PRISON_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Crystals"] = new RulesElement({
    name: "Hail of Crystals",
    type: "Power",
    id: "ID_FMP_POWER_13382",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13382",
    categories: ["Hail of Crystals", "ID_FMP_POWER_13382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Crystals (Augment 0)"] = new RulesElement({
    name: "Hail of Crystals (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HAIL_OF_CRYSTALS_(AUGMENT_0)",
    categories: ["Hail of Crystals (Augment 0)", "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Crystals (Augment 2)"] = new RulesElement({
    name: "Hail of Crystals (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HAIL_OF_CRYSTALS_(AUGMENT_2)",
    categories: ["Hail of Crystals (Augment 2)", "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Crystals (Augment 6)"] = new RulesElement({
    name: "Hail of Crystals (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HAIL_OF_CRYSTALS_(AUGMENT_6)",
    categories: ["Hail of Crystals (Augment 6)", "ID_INTERNAL_POWER_HAIL_OF_CRYSTALS_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Hare's Panicked Retreat"] = new RulesElement({
    name: "Hare's Panicked Retreat",
    type: "Power",
    id: "ID_FMP_POWER_13207",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13207",
    categories: ["Hare's Panicked Retreat", "ID_FMP_POWER_13207", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Harrier's Dance"] = new RulesElement({
    name: "Harrier's Dance",
    type: "Power",
    id: "ID_FMP_POWER_13040",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13040",
    categories: ["Harrier's Dance", "ID_FMP_POWER_13040", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Harrier's Dance (Augment 0)"] = new RulesElement({
    name: "Harrier's Dance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HARRIER'S_DANCE_(AUGMENT_0)",
    categories: ["Harrier's Dance (Augment 0)", "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Harrier's Dance (Augment 1)"] = new RulesElement({
    name: "Harrier's Dance (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HARRIER'S_DANCE_(AUGMENT_1)",
    categories: ["Harrier's Dance (Augment 1)", "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Harrier's Dance (Augment 2)"] = new RulesElement({
    name: "Harrier's Dance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HARRIER'S_DANCE_(AUGMENT_2)",
    categories: ["Harrier's Dance (Augment 2)", "ID_INTERNAL_POWER_HARRIER'S_DANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Bond"] = new RulesElement({
    name: "Healing Bond",
    type: "Power",
    id: "ID_FMP_POWER_12942",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12942",
    categories: ["Healing Bond", "ID_FMP_POWER_12942", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Reserves"] = new RulesElement({
    name: "Hidden Reserves",
    type: "Power",
    id: "ID_FMP_POWER_13412",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13412",
    categories: ["Hidden Reserves", "ID_FMP_POWER_13412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_760", "Psionic Incarnate", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hone Weapon"] = new RulesElement({
    name: "Hone Weapon",
    type: "Power",
    id: "ID_FMP_POWER_13060",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13060",
    categories: ["Hone Weapon", "ID_FMP_POWER_13060", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry Flames"] = new RulesElement({
    name: "Hungry Flames",
    type: "Power",
    id: "ID_FMP_POWER_13397",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13397",
    categories: ["Hungry Flames", "ID_FMP_POWER_13397", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_757", "Firestarter", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13400"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Hungry Flames (Augment 0)"] = new RulesElement({
    name: "Hungry Flames (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HUNGRY_FLAMES_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HUNGRY_FLAMES_(AUGMENT_0)",
    categories: ["Hungry Flames (Augment 0)", "ID_INTERNAL_POWER_HUNGRY_FLAMES_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry Flames (Augment 2)"] = new RulesElement({
    name: "Hungry Flames (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_HUNGRY_FLAMES_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_HUNGRY_FLAMES_(AUGMENT_2)",
    categories: ["Hungry Flames (Augment 2)", "ID_INTERNAL_POWER_HUNGRY_FLAMES_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry Flames Attack"] = new RulesElement({
    name: "Hungry Flames Attack",
    type: "Power",
    id: "ID_FMP_POWER_13400",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13400",
    categories: ["Hungry Flames Attack", "ID_FMP_POWER_13400", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_757", "Firestarter", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Hurl into Heaven"] = new RulesElement({
    name: "Hurl into Heaven",
    type: "Power",
    id: "ID_FMP_POWER_13388",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13388",
    categories: ["Hurl into Heaven", "ID_FMP_POWER_13388", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Ideal Champion"] = new RulesElement({
    name: "Ideal Champion",
    type: "Power",
    id: "ID_FMP_POWER_13405",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13405",
    categories: ["Ideal Champion", "ID_FMP_POWER_13405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_758", "Master Summoner", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Immolating Fist"] = new RulesElement({
    name: "Immolating Fist",
    type: "Power",
    id: "ID_FMP_POWER_13173",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13173",
    categories: ["Immolating Fist", "ID_FMP_POWER_13173", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13174"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Immolating Fist Attack"] = new RulesElement({
    name: "Immolating Fist Attack",
    type: "Power",
    id: "ID_FMP_POWER_13174",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13174",
    categories: ["Immolating Fist Attack", "ID_FMP_POWER_13174", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Impetuous Ruin"] = new RulesElement({
    name: "Impetuous Ruin",
    type: "Power",
    id: "ID_FMP_POWER_12932",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12932",
    categories: ["Impetuous Ruin", "ID_FMP_POWER_12932", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Impetuous Ruin (Augment 0)"] = new RulesElement({
    name: "Impetuous Ruin (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPETUOUS_RUIN_(AUGMENT_0)",
    categories: ["Impetuous Ruin (Augment 0)", "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Impetuous Ruin (Augment 1)"] = new RulesElement({
    name: "Impetuous Ruin (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPETUOUS_RUIN_(AUGMENT_1)",
    categories: ["Impetuous Ruin (Augment 1)", "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Impetuous Ruin (Augment 2)"] = new RulesElement({
    name: "Impetuous Ruin (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPETUOUS_RUIN_(AUGMENT_2)",
    categories: ["Impetuous Ruin (Augment 2)", "ID_INTERNAL_POWER_IMPETUOUS_RUIN_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Imprisoned Mind"] = new RulesElement({
    name: "Imprisoned Mind",
    type: "Power",
    id: "ID_FMP_POWER_13099",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13099",
    categories: ["Imprisoned Mind", "ID_FMP_POWER_13099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Imprisoned Mind (Augment 0)"] = new RulesElement({
    name: "Imprisoned Mind (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPRISONED_MIND_(AUGMENT_0)",
    categories: ["Imprisoned Mind (Augment 0)", "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Imprisoned Mind (Augment 2)"] = new RulesElement({
    name: "Imprisoned Mind (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPRISONED_MIND_(AUGMENT_2)",
    categories: ["Imprisoned Mind (Augment 2)", "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Imprisoned Mind (Augment 6)"] = new RulesElement({
    name: "Imprisoned Mind (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IMPRISONED_MIND_(AUGMENT_6)",
    categories: ["Imprisoned Mind (Augment 6)", "ID_INTERNAL_POWER_IMPRISONED_MIND_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Incandescent Strike"] = new RulesElement({
    name: "Incandescent Strike",
    type: "Power",
    id: "ID_FMP_POWER_13015",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13015",
    categories: ["Incandescent Strike", "ID_FMP_POWER_13015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_737", "Incandescent Champion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Incandescent Strike (Augment 0)"] = new RulesElement({
    name: "Incandescent Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INCANDESCENT_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INCANDESCENT_STRIKE_(AUGMENT_0)",
    categories: ["Incandescent Strike (Augment 0)", "ID_INTERNAL_POWER_INCANDESCENT_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Incandescent Strike (Augment 2)"] = new RulesElement({
    name: "Incandescent Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INCANDESCENT_STRIKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INCANDESCENT_STRIKE_(AUGMENT_2)",
    categories: ["Incandescent Strike (Augment 2)", "ID_INTERNAL_POWER_INCANDESCENT_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Inconstant Location"] = new RulesElement({
    name: "Inconstant Location",
    type: "Power",
    id: "ID_FMP_POWER_13046",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13046",
    categories: ["Inconstant Location", "ID_FMP_POWER_13046", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Inertial Barrier"] = new RulesElement({
    name: "Inertial Barrier",
    type: "Power",
    id: "ID_FMP_POWER_13072",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13072",
    categories: ["Inertial Barrier", "ID_FMP_POWER_13072", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Inexplicable Attraction"] = new RulesElement({
    name: "Inexplicable Attraction",
    type: "Power",
    id: "ID_FMP_POWER_13347",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13347",
    categories: ["Inexplicable Attraction", "ID_FMP_POWER_13347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Inexplicable Attraction (Augment 0)"] = new RulesElement({
    name: "Inexplicable Attraction (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INEXPLICABLE_ATTRACTION_(AUGMENT_0)",
    categories: ["Inexplicable Attraction (Augment 0)", "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Inexplicable Attraction (Augment 1)"] = new RulesElement({
    name: "Inexplicable Attraction (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INEXPLICABLE_ATTRACTION_(AUGMENT_1)",
    categories: ["Inexplicable Attraction (Augment 1)", "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Inexplicable Attraction (Augment 4)"] = new RulesElement({
    name: "Inexplicable Attraction (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INEXPLICABLE_ATTRACTION_(AUGMENT_4)",
    categories: ["Inexplicable Attraction (Augment 4)", "ID_INTERNAL_POWER_INEXPLICABLE_ATTRACTION_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Inflict Pain"] = new RulesElement({
    name: "Inflict Pain",
    type: "Power",
    id: "ID_FMP_POWER_13338",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13338",
    categories: ["Inflict Pain", "ID_FMP_POWER_13338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Inflicted Mindscape"] = new RulesElement({
    name: "Inflicted Mindscape",
    type: "Power",
    id: "ID_FMP_POWER_13324",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13324",
    categories: ["Inflicted Mindscape", "ID_FMP_POWER_13324", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Inner Eye Opened"] = new RulesElement({
    name: "Inner Eye Opened",
    type: "Power",
    id: "ID_FMP_POWER_13146",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13146",
    categories: ["Inner Eye Opened", "ID_FMP_POWER_13146", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13147"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Inner Eye Opened [Movement Technique]"] = new RulesElement({
    name: "Inner Eye Opened [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13147",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13147",
    categories: ["Inner Eye Opened [Movement Technique]", "ID_FMP_POWER_13147", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Distraction"] = new RulesElement({
    name: "Insidious Distraction",
    type: "Power",
    id: "ID_FMP_POWER_13021",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13021",
    categories: ["Insidious Distraction", "ID_FMP_POWER_13021", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_739", "Siphon", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Distraction (Augment 0)"] = new RulesElement({
    name: "Insidious Distraction (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INSIDIOUS_DISTRACTION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INSIDIOUS_DISTRACTION_(AUGMENT_0)",
    categories: ["Insidious Distraction (Augment 0)", "ID_INTERNAL_POWER_INSIDIOUS_DISTRACTION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Insidious Distraction (Augment 2)"] = new RulesElement({
    name: "Insidious Distraction (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INSIDIOUS_DISTRACTION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INSIDIOUS_DISTRACTION_(AUGMENT_2)",
    categories: ["Insidious Distraction (Augment 2)", "ID_INTERNAL_POWER_INSIDIOUS_DISTRACTION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Instant Move"] = new RulesElement({
    name: "Instant Move",
    type: "Power",
    id: "ID_FMP_POWER_13073",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13073",
    categories: ["Instant Move", "ID_FMP_POWER_13073", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Prism"] = new RulesElement({
    name: "Intellect Prism",
    type: "Power",
    id: "ID_FMP_POWER_13328",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13328",
    categories: ["Intellect Prism", "ID_FMP_POWER_13328", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Snap"] = new RulesElement({
    name: "Intellect Snap",
    type: "Power",
    id: "ID_FMP_POWER_13064",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13064",
    categories: ["Intellect Snap", "ID_FMP_POWER_13064", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Snap (Augment 0)"] = new RulesElement({
    name: "Intellect Snap (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INTELLECT_SNAP_(AUGMENT_0)",
    categories: ["Intellect Snap (Augment 0)", "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Snap (Augment 1)"] = new RulesElement({
    name: "Intellect Snap (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INTELLECT_SNAP_(AUGMENT_1)",
    categories: ["Intellect Snap (Augment 1)", "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Intellect Snap (Augment 4)"] = new RulesElement({
    name: "Intellect Snap (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INTELLECT_SNAP_(AUGMENT_4)",
    categories: ["Intellect Snap (Augment 4)", "ID_INTERNAL_POWER_INTELLECT_SNAP_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Interdicting Thoughts"] = new RulesElement({
    name: "Interdicting Thoughts",
    type: "Power",
    id: "ID_FMP_POWER_13370",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13370",
    categories: ["Interdicting Thoughts", "ID_FMP_POWER_13370", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Invert Defeat"] = new RulesElement({
    name: "Invert Defeat",
    type: "Power",
    id: "ID_FMP_POWER_12970",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12970",
    categories: ["Invert Defeat", "ID_FMP_POWER_12970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Invert Defeat (Augment 0)"] = new RulesElement({
    name: "Invert Defeat (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INVERT_DEFEAT_(AUGMENT_0)",
    categories: ["Invert Defeat (Augment 0)", "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Invert Defeat (Augment 1)"] = new RulesElement({
    name: "Invert Defeat (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INVERT_DEFEAT_(AUGMENT_1)",
    categories: ["Invert Defeat (Augment 1)", "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Invert Defeat (Augment 4)"] = new RulesElement({
    name: "Invert Defeat (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_INVERT_DEFEAT_(AUGMENT_4)",
    categories: ["Invert Defeat (Augment 4)", "ID_INTERNAL_POWER_INVERT_DEFEAT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Inverted Emotions"] = new RulesElement({
    name: "Inverted Emotions",
    type: "Power",
    id: "ID_FMP_POWER_12996",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12996",
    categories: ["Inverted Emotions", "ID_FMP_POWER_12996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Invitation to Defeat"] = new RulesElement({
    name: "Invitation to Defeat",
    type: "Power",
    id: "ID_FMP_POWER_12949",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12949",
    categories: ["Invitation to Defeat", "ID_FMP_POWER_12949", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Cascade"] = new RulesElement({
    name: "Iron Cascade",
    type: "Power",
    id: "ID_FMP_POWER_13251",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13251",
    categories: ["Iron Cascade", "ID_FMP_POWER_13251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13252"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Iron Cascade [Movement Technique]"] = new RulesElement({
    name: "Iron Cascade [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13252",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13252",
    categories: ["Iron Cascade [Movement Technique]", "ID_FMP_POWER_13252", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Heart Endurance"] = new RulesElement({
    name: "Iron Heart Endurance",
    type: "Power",
    id: "ID_FMP_POWER_13161",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13161",
    categories: ["Iron Heart Endurance", "ID_FMP_POWER_13161", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Heart Resilience"] = new RulesElement({
    name: "Iron Heart Resilience",
    type: "Power",
    id: "ID_FMP_POWER_13179",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13179",
    categories: ["Iron Heart Resilience", "ID_FMP_POWER_13179", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Presence"] = new RulesElement({
    name: "Iron Presence",
    type: "Power",
    id: "ID_FMP_POWER_13091",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13091",
    categories: ["Iron Presence", "ID_FMP_POWER_13091", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Presence (Augment 0)"] = new RulesElement({
    name: "Iron Presence (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IRON_PRESENCE_(AUGMENT_0)",
    categories: ["Iron Presence (Augment 0)", "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Presence (Augment 2)"] = new RulesElement({
    name: "Iron Presence (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IRON_PRESENCE_(AUGMENT_2)",
    categories: ["Iron Presence (Augment 2)", "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Presence (Augment 6)"] = new RulesElement({
    name: "Iron Presence (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IRON_PRESENCE_(AUGMENT_6)",
    categories: ["Iron Presence (Augment 6)", "ID_INTERNAL_POWER_IRON_PRESENCE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Soul Flurry of Blows"] = new RulesElement({
    name: "Iron Soul Flurry of Blows",
    type: "Power",
    id: "ID_FMP_POWER_13123",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13123",
    categories: ["Iron Soul Flurry of Blows", "ID_FMP_POWER_13123"]
  });
  byID[te.id] = te;
  
  te = Power["Iron-Hewed Smash"] = new RulesElement({
    name: "Iron-Hewed Smash",
    type: "Power",
    id: "ID_FMP_POWER_13116",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13116",
    categories: ["Iron-Hewed Smash", "ID_FMP_POWER_13116", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_743", "Talaric Ironjack", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Iron-Hewed Smash (Augment 0)"] = new RulesElement({
    name: "Iron-Hewed Smash (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON-HEWED_SMASH_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IRON-HEWED_SMASH_(AUGMENT_0)",
    categories: ["Iron-Hewed Smash (Augment 0)", "ID_INTERNAL_POWER_IRON-HEWED_SMASH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Iron-Hewed Smash (Augment 2)"] = new RulesElement({
    name: "Iron-Hewed Smash (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_IRON-HEWED_SMASH_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_IRON-HEWED_SMASH_(AUGMENT_2)",
    categories: ["Iron-Hewed Smash (Augment 2)", "ID_INTERNAL_POWER_IRON-HEWED_SMASH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Karmic Bond"] = new RulesElement({
    name: "Karmic Bond",
    type: "Power",
    id: "ID_FMP_POWER_12933",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12933",
    categories: ["Karmic Bond", "ID_FMP_POWER_12933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Karmic Bond (Augment 0)"] = new RulesElement({
    name: "Karmic Bond (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KARMIC_BOND_(AUGMENT_0)",
    categories: ["Karmic Bond (Augment 0)", "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Karmic Bond (Augment 1)"] = new RulesElement({
    name: "Karmic Bond (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KARMIC_BOND_(AUGMENT_1)",
    categories: ["Karmic Bond (Augment 1)", "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Karmic Bond (Augment 2)"] = new RulesElement({
    name: "Karmic Bond (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KARMIC_BOND_(AUGMENT_2)",
    categories: ["Karmic Bond (Augment 2)", "ID_INTERNAL_POWER_KARMIC_BOND_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Killing Wind Assault"] = new RulesElement({
    name: "Killing Wind Assault",
    type: "Power",
    id: "ID_FMP_POWER_13103",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13103",
    categories: ["Killing Wind Assault", "ID_FMP_POWER_13103", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Buffer"] = new RulesElement({
    name: "Kinetic Buffer",
    type: "Power",
    id: "ID_FMP_POWER_13334",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13334",
    categories: ["Kinetic Buffer", "ID_FMP_POWER_13334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Buffer (Augment 0)"] = new RulesElement({
    name: "Kinetic Buffer (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_BUFFER_(AUGMENT_0)",
    categories: ["Kinetic Buffer (Augment 0)", "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Buffer (Augment 1)"] = new RulesElement({
    name: "Kinetic Buffer (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_BUFFER_(AUGMENT_1)",
    categories: ["Kinetic Buffer (Augment 1)", "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Buffer (Augment 2)"] = new RulesElement({
    name: "Kinetic Buffer (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_BUFFER_(AUGMENT_2)",
    categories: ["Kinetic Buffer (Augment 2)", "ID_INTERNAL_POWER_KINETIC_BUFFER_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Detonation"] = new RulesElement({
    name: "Kinetic Detonation",
    type: "Power",
    id: "ID_FMP_POWER_13384",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13384",
    categories: ["Kinetic Detonation", "ID_FMP_POWER_13384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Detonation (Augment 0)"] = new RulesElement({
    name: "Kinetic Detonation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_DETONATION_(AUGMENT_0)",
    categories: ["Kinetic Detonation (Augment 0)", "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Detonation (Augment 2)"] = new RulesElement({
    name: "Kinetic Detonation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_DETONATION_(AUGMENT_2)",
    categories: ["Kinetic Detonation (Augment 2)", "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Detonation (Augment 6)"] = new RulesElement({
    name: "Kinetic Detonation (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_DETONATION_(AUGMENT_6)",
    categories: ["Kinetic Detonation (Augment 6)", "ID_INTERNAL_POWER_KINETIC_DETONATION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Grasp"] = new RulesElement({
    name: "Kinetic Grasp",
    type: "Power",
    id: "ID_FMP_POWER_13355",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13355",
    categories: ["Kinetic Grasp", "ID_FMP_POWER_13355", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Shield"] = new RulesElement({
    name: "Kinetic Shield",
    type: "Power",
    id: "ID_FMP_POWER_13065",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13065",
    categories: ["Kinetic Shield", "ID_FMP_POWER_13065", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Shield (Augment 0)"] = new RulesElement({
    name: "Kinetic Shield (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_SHIELD_(AUGMENT_0)",
    categories: ["Kinetic Shield (Augment 0)", "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Shield (Augment 1)"] = new RulesElement({
    name: "Kinetic Shield (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_SHIELD_(AUGMENT_1)",
    categories: ["Kinetic Shield (Augment 1)", "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Shield (Augment 4)"] = new RulesElement({
    name: "Kinetic Shield (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_SHIELD_(AUGMENT_4)",
    categories: ["Kinetic Shield (Augment 4)", "ID_INTERNAL_POWER_KINETIC_SHIELD_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trip"] = new RulesElement({
    name: "Kinetic Trip",
    type: "Power",
    id: "ID_FMP_POWER_13319",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13319",
    categories: ["Kinetic Trip", "ID_FMP_POWER_13319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trip (Augment 0)"] = new RulesElement({
    name: "Kinetic Trip (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_TRIP_(AUGMENT_0)",
    categories: ["Kinetic Trip (Augment 0)", "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trip (Augment 1)"] = new RulesElement({
    name: "Kinetic Trip (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_TRIP_(AUGMENT_1)",
    categories: ["Kinetic Trip (Augment 1)", "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Trip (Augment 2)"] = new RulesElement({
    name: "Kinetic Trip (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_TRIP_(AUGMENT_2)",
    categories: ["Kinetic Trip (Augment 2)", "ID_INTERNAL_POWER_KINETIC_TRIP_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Wave"] = new RulesElement({
    name: "Kinetic Wave",
    type: "Power",
    id: "ID_FMP_POWER_13348",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13348",
    categories: ["Kinetic Wave", "ID_FMP_POWER_13348", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Wave (Augment 0)"] = new RulesElement({
    name: "Kinetic Wave (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_WAVE_(AUGMENT_0)",
    categories: ["Kinetic Wave (Augment 0)", "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Wave (Augment 1)"] = new RulesElement({
    name: "Kinetic Wave (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_WAVE_(AUGMENT_1)",
    categories: ["Kinetic Wave (Augment 1)", "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Kinetic Wave (Augment 4)"] = new RulesElement({
    name: "Kinetic Wave (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_KINETIC_WAVE_(AUGMENT_4)",
    categories: ["Kinetic Wave (Augment 4)", "ID_INTERNAL_POWER_KINETIC_WAVE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Lashing Rain"] = new RulesElement({
    name: "Lashing Rain",
    type: "Power",
    id: "ID_FMP_POWER_13139",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13139",
    categories: ["Lashing Rain", "ID_FMP_POWER_13139", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Laughing Wind"] = new RulesElement({
    name: "Laughing Wind",
    type: "Power",
    id: "ID_FMP_POWER_13130",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13130",
    categories: ["Laughing Wind", "ID_FMP_POWER_13130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13131"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Laughing Wind [Movement Technique]"] = new RulesElement({
    name: "Laughing Wind [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13131",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13131",
    categories: ["Laughing Wind [Movement Technique]", "ID_FMP_POWER_13131", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Dragon Strike"] = new RulesElement({
    name: "Leaping Dragon Strike",
    type: "Power",
    id: "ID_FMP_POWER_13204",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13204",
    categories: ["Leaping Dragon Strike", "ID_FMP_POWER_13204", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13205"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Leaping Dragon Strike [Movement Technique]"] = new RulesElement({
    name: "Leaping Dragon Strike [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13205",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13205",
    categories: ["Leaping Dragon Strike [Movement Technique]", "ID_FMP_POWER_13205", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lethal Delusion"] = new RulesElement({
    name: "Lethal Delusion",
    type: "Power",
    id: "ID_FMP_POWER_13003",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13003",
    categories: ["Lethal Delusion", "ID_FMP_POWER_13003", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Strikes Twice"] = new RulesElement({
    name: "Lightning Strikes Twice",
    type: "Power",
    id: "ID_FMP_POWER_13113",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13113",
    categories: ["Lightning Strikes Twice", "ID_FMP_POWER_13113", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_742", "Storm Disciple", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Strikes Twice (Augment 0)"] = new RulesElement({
    name: "Lightning Strikes Twice (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_0)",
    categories: ["Lightning Strikes Twice (Augment 0)", "ID_INTERNAL_POWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Strikes Twice (Augment 2)"] = new RulesElement({
    name: "Lightning Strikes Twice (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_2)",
    categories: ["Lightning Strikes Twice (Augment 2)", "ID_INTERNAL_POWER_LIGHTNING_STRIKES_TWICE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Throw"] = new RulesElement({
    name: "Lightning Throw",
    type: "Power",
    id: "ID_FMP_POWER_13253",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13253",
    categories: ["Lightning Throw", "ID_FMP_POWER_13253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13254"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Lightning Throw [Movement Technique]"] = new RulesElement({
    name: "Lightning Throw [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13254",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13254",
    categories: ["Lightning Throw [Movement Technique]", "ID_FMP_POWER_13254", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lingering Fury"] = new RulesElement({
    name: "Lingering Fury",
    type: "Power",
    id: "ID_FMP_POWER_12938",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12938",
    categories: ["Lingering Fury", "ID_FMP_POWER_12938", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lion's Charge"] = new RulesElement({
    name: "Lion's Charge",
    type: "Power",
    id: "ID_FMP_POWER_13056",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13056",
    categories: ["Lion's Charge", "ID_FMP_POWER_13056", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Lion's Den"] = new RulesElement({
    name: "Lion's Den",
    type: "Power",
    id: "ID_FMP_POWER_13124",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13124",
    categories: ["Lion's Den", "ID_FMP_POWER_13124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13125"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Lion's Den [Movement Technique]"] = new RulesElement({
    name: "Lion's Den [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13125",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13125",
    categories: ["Lion's Den [Movement Technique]", "ID_FMP_POWER_13125", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Living Barrage"] = new RulesElement({
    name: "Living Barrage",
    type: "Power",
    id: "ID_FMP_POWER_13350",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13350",
    categories: ["Living Barrage", "ID_FMP_POWER_13350", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13351"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Living Barrage Attack"] = new RulesElement({
    name: "Living Barrage Attack",
    type: "Power",
    id: "ID_FMP_POWER_13351",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13351",
    categories: ["Living Barrage Attack", "ID_FMP_POWER_13351", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Living Fortress"] = new RulesElement({
    name: "Living Fortress",
    type: "Power",
    id: "ID_FMP_POWER_13031",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13031",
    categories: ["Living Fortress", "ID_FMP_POWER_13031", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Living Missile"] = new RulesElement({
    name: "Living Missile",
    type: "Power",
    id: "ID_FMP_POWER_13308",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13308",
    categories: ["Living Missile", "ID_FMP_POWER_13308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13309"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Living Missile Attack"] = new RulesElement({
    name: "Living Missile Attack",
    type: "Power",
    id: "ID_FMP_POWER_13309",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13309",
    categories: ["Living Missile Attack", "ID_FMP_POWER_13309", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Lodestone Lure"] = new RulesElement({
    name: "Lodestone Lure",
    type: "Power",
    id: "ID_FMP_POWER_13041",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13041",
    categories: ["Lodestone Lure", "ID_FMP_POWER_13041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Lodestone Lure (Augment 0)"] = new RulesElement({
    name: "Lodestone Lure (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_LODESTONE_LURE_(AUGMENT_0)",
    categories: ["Lodestone Lure (Augment 0)", "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Lodestone Lure (Augment 1)"] = new RulesElement({
    name: "Lodestone Lure (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_LODESTONE_LURE_(AUGMENT_1)",
    categories: ["Lodestone Lure (Augment 1)", "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Lodestone Lure (Augment 2)"] = new RulesElement({
    name: "Lodestone Lure (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_LODESTONE_LURE_(AUGMENT_2)",
    categories: ["Lodestone Lure (Augment 2)", "ID_INTERNAL_POWER_LODESTONE_LURE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Loosen the Chain"] = new RulesElement({
    name: "Loosen the Chain",
    type: "Power",
    id: "ID_FMP_POWER_13408",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13408",
    categories: ["Loosen the Chain", "ID_FMP_POWER_13408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_759", "Thrallherd", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Loud Fist Strike"] = new RulesElement({
    name: "Loud Fist Strike",
    type: "Power",
    id: "ID_FMP_POWER_13208",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13208",
    categories: ["Loud Fist Strike", "ID_FMP_POWER_13208", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mad Certainty"] = new RulesElement({
    name: "Mad Certainty",
    type: "Power",
    id: "ID_FMP_POWER_13393",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13393",
    categories: ["Mad Certainty", "ID_FMP_POWER_13393", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_755", "Alienist", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Magical Disruption"] = new RulesElement({
    name: "Magical Disruption",
    type: "Power",
    id: "ID_FMP_POWER_13396",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13396",
    categories: ["Magical Disruption", "ID_FMP_POWER_13396", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_756", "Anathema", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Malicious Lightning"] = new RulesElement({
    name: "Malicious Lightning",
    type: "Power",
    id: "ID_FMP_POWER_13339",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13339",
    categories: ["Malicious Lightning", "ID_FMP_POWER_13339", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13340"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Malicious Lightning Attack"] = new RulesElement({
    name: "Malicious Lightning Attack",
    type: "Power",
    id: "ID_FMP_POWER_13340",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13340",
    categories: ["Malicious Lightning Attack", "ID_FMP_POWER_13340", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Manifested Horror"] = new RulesElement({
    name: "Manifested Horror",
    type: "Power",
    id: "ID_FMP_POWER_13359",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13359",
    categories: ["Manifested Horror", "ID_FMP_POWER_13359", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Manifested Horror (Augment 0)"] = new RulesElement({
    name: "Manifested Horror (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MANIFESTED_HORROR_(AUGMENT_0)",
    categories: ["Manifested Horror (Augment 0)", "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Manifested Horror (Augment 1)"] = new RulesElement({
    name: "Manifested Horror (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MANIFESTED_HORROR_(AUGMENT_1)",
    categories: ["Manifested Horror (Augment 1)", "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Manifested Horror (Augment 4)"] = new RulesElement({
    name: "Manifested Horror (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MANIFESTED_HORROR_(AUGMENT_4)",
    categories: ["Manifested Horror (Augment 4)", "ID_INTERNAL_POWER_MANIFESTED_HORROR_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Many Doors Curse"] = new RulesElement({
    name: "Many Doors Curse",
    type: "Power",
    id: "ID_FMP_POWER_13104",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13104",
    categories: ["Many Doors Curse", "ID_FMP_POWER_13104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Matter Dissipation"] = new RulesElement({
    name: "Matter Dissipation",
    type: "Power",
    id: "ID_FMP_POWER_13335",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13335",
    categories: ["Matter Dissipation", "ID_FMP_POWER_13335", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Matter Dissipation (Augment 0)"] = new RulesElement({
    name: "Matter Dissipation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MATTER_DISSIPATION_(AUGMENT_0)",
    categories: ["Matter Dissipation (Augment 0)", "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Matter Dissipation (Augment 1)"] = new RulesElement({
    name: "Matter Dissipation (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MATTER_DISSIPATION_(AUGMENT_1)",
    categories: ["Matter Dissipation (Augment 1)", "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Matter Dissipation (Augment 2)"] = new RulesElement({
    name: "Matter Dissipation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MATTER_DISSIPATION_(AUGMENT_2)",
    categories: ["Matter Dissipation (Augment 2)", "ID_INTERNAL_POWER_MATTER_DISSIPATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Meditative Vanishing"] = new RulesElement({
    name: "Meditative Vanishing",
    type: "Power",
    id: "ID_FMP_POWER_13248",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13248",
    categories: ["Meditative Vanishing", "ID_FMP_POWER_13248", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Haven"] = new RulesElement({
    name: "Mental Haven",
    type: "Power",
    id: "ID_FMP_POWER_13087",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13087",
    categories: ["Mental Haven", "ID_FMP_POWER_13087", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Triumph"] = new RulesElement({
    name: "Mental Triumph",
    type: "Power",
    id: "ID_FMP_POWER_13048",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13048",
    categories: ["Mental Triumph", "ID_FMP_POWER_13048", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Void"] = new RulesElement({
    name: "Mental Void",
    type: "Power",
    id: "ID_FMP_POWER_13329",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13329",
    categories: ["Mental Void", "ID_FMP_POWER_13329", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Merge with the Cosmos"] = new RulesElement({
    name: "Merge with the Cosmos",
    type: "Power",
    id: "ID_FMP_POWER_13419",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13419",
    categories: ["Merge with the Cosmos", "ID_FMP_POWER_13419", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_762", "Cosmic Soul", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Meteoric Charge"] = new RulesElement({
    name: "Meteoric Charge",
    type: "Power",
    id: "ID_FMP_POWER_12950",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12950",
    categories: ["Meteoric Charge", "ID_FMP_POWER_12950", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Blank"] = new RulesElement({
    name: "Mind Blank",
    type: "Power",
    id: "ID_FMP_POWER_13356",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13356",
    categories: ["Mind Blank", "ID_FMP_POWER_13356", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Lock"] = new RulesElement({
    name: "Mind Lock",
    type: "Power",
    id: "ID_FMP_POWER_13305",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13305",
    categories: ["Mind Lock", "ID_FMP_POWER_13305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Lock (Augment 0)"] = new RulesElement({
    name: "Mind Lock (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_LOCK_(AUGMENT_0)",
    categories: ["Mind Lock (Augment 0)", "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Lock (Augment 1)"] = new RulesElement({
    name: "Mind Lock (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_LOCK_(AUGMENT_1)",
    categories: ["Mind Lock (Augment 1)", "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Lock (Augment 2)"] = new RulesElement({
    name: "Mind Lock (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_LOCK_(AUGMENT_2)",
    categories: ["Mind Lock (Augment 2)", "ID_INTERNAL_POWER_MIND_LOCK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Rend"] = new RulesElement({
    name: "Mind Rend",
    type: "Power",
    id: "ID_FMP_POWER_12986",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12986",
    categories: ["Mind Rend", "ID_FMP_POWER_12986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Shroud"] = new RulesElement({
    name: "Mind Shroud",
    type: "Power",
    id: "ID_FMP_POWER_13316",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13316",
    categories: ["Mind Shroud", "ID_FMP_POWER_13316", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Trap"] = new RulesElement({
    name: "Mind Trap",
    type: "Power",
    id: "ID_FMP_POWER_13372",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13372",
    categories: ["Mind Trap", "ID_FMP_POWER_13372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Trap (Augment 0)"] = new RulesElement({
    name: "Mind Trap (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_TRAP_(AUGMENT_0)",
    categories: ["Mind Trap (Augment 0)", "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Trap (Augment 2)"] = new RulesElement({
    name: "Mind Trap (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_TRAP_(AUGMENT_2)",
    categories: ["Mind Trap (Augment 2)", "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Trap (Augment 6)"] = new RulesElement({
    name: "Mind Trap (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MIND_TRAP_(AUGMENT_6)",
    categories: ["Mind Trap (Augment 6)", "ID_INTERNAL_POWER_MIND_TRAP_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Mindfire Explosion"] = new RulesElement({
    name: "Mindfire Explosion",
    type: "Power",
    id: "ID_FMP_POWER_13373",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13373",
    categories: ["Mindfire Explosion", "ID_FMP_POWER_13373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mindfire Explosion (Augment 0)"] = new RulesElement({
    name: "Mindfire Explosion (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MINDFIRE_EXPLOSION_(AUGMENT_0)",
    categories: ["Mindfire Explosion (Augment 0)", "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Mindfire Explosion (Augment 2)"] = new RulesElement({
    name: "Mindfire Explosion (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MINDFIRE_EXPLOSION_(AUGMENT_2)",
    categories: ["Mindfire Explosion (Augment 2)", "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Mindfire Explosion (Augment 6)"] = new RulesElement({
    name: "Mindfire Explosion (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MINDFIRE_EXPLOSION_(AUGMENT_6)",
    categories: ["Mindfire Explosion (Augment 6)", "ID_INTERNAL_POWER_MINDFIRE_EXPLOSION_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Mind's Bitter Betrayal"] = new RulesElement({
    name: "Mind's Bitter Betrayal",
    type: "Power",
    id: "ID_FMP_POWER_13020",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13020",
    categories: ["Mind's Bitter Betrayal", "ID_FMP_POWER_13020", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_738", "Phrenic Invader", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Minor Creation"] = new RulesElement({
    name: "Minor Creation",
    type: "Power",
    id: "ID_FMP_POWER_13301",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13301",
    categories: ["Minor Creation", "ID_FMP_POWER_13301"]
  });
  byID[te.id] = te;
  
  te = Power["Mithral Tornado"] = new RulesElement({
    name: "Mithral Tornado",
    type: "Power",
    id: "ID_FMP_POWER_13190",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13190",
    categories: ["Mithral Tornado", "ID_FMP_POWER_13190", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Momentum Swing"] = new RulesElement({
    name: "Momentum Swing",
    type: "Power",
    id: "ID_FMP_POWER_13042",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13042",
    categories: ["Momentum Swing", "ID_FMP_POWER_13042", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Momentum Swing (Augment 0)"] = new RulesElement({
    name: "Momentum Swing (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MOMENTUM_SWING_(AUGMENT_0)",
    categories: ["Momentum Swing (Augment 0)", "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Momentum Swing (Augment 1)"] = new RulesElement({
    name: "Momentum Swing (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MOMENTUM_SWING_(AUGMENT_1)",
    categories: ["Momentum Swing (Augment 1)", "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Momentum Swing (Augment 2)"] = new RulesElement({
    name: "Momentum Swing (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_MOMENTUM_SWING_(AUGMENT_2)",
    categories: ["Momentum Swing (Augment 2)", "ID_INTERNAL_POWER_MOMENTUM_SWING_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Monolithic Blessing"] = new RulesElement({
    name: "Monolithic Blessing",
    type: "Power",
    id: "ID_FMP_POWER_13108",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13108",
    categories: ["Monolithic Blessing", "ID_FMP_POWER_13108", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_740", "Blackstone Guardian", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Mountainfall Stomp"] = new RulesElement({
    name: "Mountainfall Stomp",
    type: "Power",
    id: "ID_FMP_POWER_13167",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13167",
    categories: ["Mountainfall Stomp", "ID_FMP_POWER_13167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13168"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Mountainfall Stomp [Movement Technique]"] = new RulesElement({
    name: "Mountainfall Stomp [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13168",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13168",
    categories: ["Mountainfall Stomp [Movement Technique]", "ID_FMP_POWER_13168", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Oaken Resilience"] = new RulesElement({
    name: "Oaken Resilience",
    type: "Power",
    id: "ID_FMP_POWER_13036",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13036",
    categories: ["Oaken Resilience", "ID_FMP_POWER_13036", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Oblivion Sphere"] = new RulesElement({
    name: "Oblivion Sphere",
    type: "Power",
    id: "ID_FMP_POWER_13395",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13395",
    categories: ["Oblivion Sphere", "ID_FMP_POWER_13395", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_756", "Anathema", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Obsidian Shield"] = new RulesElement({
    name: "Obsidian Shield",
    type: "Power",
    id: "ID_FMP_POWER_13100",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13100",
    categories: ["Obsidian Shield", "ID_FMP_POWER_13100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Obsidian Shield (Augment 0)"] = new RulesElement({
    name: "Obsidian Shield (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OBSIDIAN_SHIELD_(AUGMENT_0)",
    categories: ["Obsidian Shield (Augment 0)", "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Obsidian Shield (Augment 2)"] = new RulesElement({
    name: "Obsidian Shield (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OBSIDIAN_SHIELD_(AUGMENT_2)",
    categories: ["Obsidian Shield (Augment 2)", "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Obsidian Shield (Augment 6)"] = new RulesElement({
    name: "Obsidian Shield (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OBSIDIAN_SHIELD_(AUGMENT_6)",
    categories: ["Obsidian Shield (Augment 6)", "ID_INTERNAL_POWER_OBSIDIAN_SHIELD_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Omniscient Strike"] = new RulesElement({
    name: "Omniscient Strike",
    type: "Power",
    id: "ID_FMP_POWER_13105",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13105",
    categories: ["Omniscient Strike", "ID_FMP_POWER_13105", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["One Hundred Doors"] = new RulesElement({
    name: "One Hundred Doors",
    type: "Power",
    id: "ID_FMP_POWER_13122",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13122",
    categories: ["One Hundred Doors", "ID_FMP_POWER_13122", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_744", "Unbound Nomad", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Way"] = new RulesElement({
    name: "Open the Way",
    type: "Power",
    id: "ID_FMP_POWER_13080",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13080",
    categories: ["Open the Way", "ID_FMP_POWER_13080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Way (Augment 0)"] = new RulesElement({
    name: "Open the Way (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OPEN_THE_WAY_(AUGMENT_0)",
    categories: ["Open the Way (Augment 0)", "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Way (Augment 1)"] = new RulesElement({
    name: "Open the Way (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OPEN_THE_WAY_(AUGMENT_1)",
    categories: ["Open the Way (Augment 1)", "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Way (Augment 4)"] = new RulesElement({
    name: "Open the Way (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OPEN_THE_WAY_(AUGMENT_4)",
    categories: ["Open the Way (Augment 4)", "ID_INTERNAL_POWER_OPEN_THE_WAY_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Opportunity Seized"] = new RulesElement({
    name: "Opportunity Seized",
    type: "Power",
    id: "ID_FMP_POWER_12953",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12953",
    categories: ["Opportunity Seized", "ID_FMP_POWER_12953", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Otherworldly Pulse"] = new RulesElement({
    name: "Otherworldly Pulse",
    type: "Power",
    id: "ID_FMP_POWER_13414",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13414",
    categories: ["Otherworldly Pulse", "ID_FMP_POWER_13414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_761", "Impure Scion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Otherworldly Pulse"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Otherworldly Pulse (Augment 0)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OTHERWORLDLY_PULSE_(AUGMENT_0)",
    categories: ["Otherworldly Pulse (Augment 0)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Otherworldly Pulse (Augment 2)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_OTHERWORLDLY_PULSE_(AUGMENT_2)",
    categories: ["Otherworldly Pulse (Augment 2)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Outpouring of Grief"] = new RulesElement({
    name: "Outpouring of Grief",
    type: "Power",
    id: "ID_FMP_POWER_12997",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12997",
    categories: ["Outpouring of Grief", "ID_FMP_POWER_12997", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Force"] = new RulesElement({
    name: "Overwhelming Force",
    type: "Power",
    id: "ID_FMP_POWER_13117",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13117",
    categories: ["Overwhelming Force", "ID_FMP_POWER_13117", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_743", "Talaric Ironjack", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Part the Fog"] = new RulesElement({
    name: "Part the Fog",
    type: "Power",
    id: "ID_FMP_POWER_12934",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12934",
    categories: ["Part the Fog", "ID_FMP_POWER_12934", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Part the Fog (Augment 0)"] = new RulesElement({
    name: "Part the Fog (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PART_THE_FOG_(AUGMENT_0)",
    categories: ["Part the Fog (Augment 0)", "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Part the Fog (Augment 1)"] = new RulesElement({
    name: "Part the Fog (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PART_THE_FOG_(AUGMENT_1)",
    categories: ["Part the Fog (Augment 1)", "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Part the Fog (Augment 2)"] = new RulesElement({
    name: "Part the Fog (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PART_THE_FOG_(AUGMENT_2)",
    categories: ["Part the Fog (Augment 2)", "ID_INTERNAL_POWER_PART_THE_FOG_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Part the Seas"] = new RulesElement({
    name: "Part the Seas",
    type: "Power",
    id: "ID_FMP_POWER_13265",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13265",
    categories: ["Part the Seas", "ID_FMP_POWER_13265", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13266"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Part the Seas [Movement Technique]"] = new RulesElement({
    name: "Part the Seas [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13266",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13266",
    categories: ["Part the Seas [Movement Technique]", "ID_FMP_POWER_13266", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Parting Shot"] = new RulesElement({
    name: "Parting Shot",
    type: "Power",
    id: "ID_FMP_POWER_13066",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13066",
    categories: ["Parting Shot", "ID_FMP_POWER_13066", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Parting Shot (Augment 0)"] = new RulesElement({
    name: "Parting Shot (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PARTING_SHOT_(AUGMENT_0)",
    categories: ["Parting Shot (Augment 0)", "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Parting Shot (Augment 1)"] = new RulesElement({
    name: "Parting Shot (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PARTING_SHOT_(AUGMENT_1)",
    categories: ["Parting Shot (Augment 1)", "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Parting Shot (Augment 4)"] = new RulesElement({
    name: "Parting Shot (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PARTING_SHOT_(AUGMENT_4)",
    categories: ["Parting Shot (Augment 4)", "ID_INTERNAL_POWER_PARTING_SHOT_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Pearl of Black Doubt"] = new RulesElement({
    name: "Pearl of Black Doubt",
    type: "Power",
    id: "ID_FMP_POWER_13195",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13195",
    categories: ["Pearl of Black Doubt", "ID_FMP_POWER_13195", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Incandescence"] = new RulesElement({
    name: "Perfect Incandescence",
    type: "Power",
    id: "ID_FMP_POWER_13016",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13016",
    categories: ["Perfect Incandescence", "ID_FMP_POWER_13016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_737", "Incandescent Champion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Harrier"] = new RulesElement({
    name: "Persistent Harrier",
    type: "Power",
    id: "ID_FMP_POWER_13024",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13024",
    categories: ["Persistent Harrier", "ID_FMP_POWER_13024"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Burden"] = new RulesElement({
    name: "Phantom Burden",
    type: "Power",
    id: "ID_FMP_POWER_13374",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13374",
    categories: ["Phantom Burden", "ID_FMP_POWER_13374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Burden (Augment 0)"] = new RulesElement({
    name: "Phantom Burden (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PHANTOM_BURDEN_(AUGMENT_0)",
    categories: ["Phantom Burden (Augment 0)", "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Burden (Augment 2)"] = new RulesElement({
    name: "Phantom Burden (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PHANTOM_BURDEN_(AUGMENT_2)",
    categories: ["Phantom Burden (Augment 2)", "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Burden (Augment 6)"] = new RulesElement({
    name: "Phantom Burden (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PHANTOM_BURDEN_(AUGMENT_6)",
    categories: ["Phantom Burden (Augment 6)", "ID_INTERNAL_POWER_PHANTOM_BURDEN_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Phrenic Strike"] = new RulesElement({
    name: "Phrenic Strike",
    type: "Power",
    id: "ID_FMP_POWER_13018",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13018",
    categories: ["Phrenic Strike", "ID_FMP_POWER_13018", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_738", "Phrenic Invader", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Phrenic Strike (Augment 0)"] = new RulesElement({
    name: "Phrenic Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHRENIC_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PHRENIC_STRIKE_(AUGMENT_0)",
    categories: ["Phrenic Strike (Augment 0)", "ID_INTERNAL_POWER_PHRENIC_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Phrenic Strike (Augment 2)"] = new RulesElement({
    name: "Phrenic Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PHRENIC_STRIKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PHRENIC_STRIKE_(AUGMENT_2)",
    categories: ["Phrenic Strike (Augment 2)", "ID_INTERNAL_POWER_PHRENIC_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Precognitive Eye"] = new RulesElement({
    name: "Precognitive Eye",
    type: "Power",
    id: "ID_FMP_POWER_13070",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13070",
    categories: ["Precognitive Eye", "ID_FMP_POWER_13070", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Swarms"] = new RulesElement({
    name: "Prismatic Swarms",
    type: "Power",
    id: "ID_FMP_POWER_13375",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13375",
    categories: ["Prismatic Swarms", "ID_FMP_POWER_13375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Swarms (Augment 0)"] = new RulesElement({
    name: "Prismatic Swarms (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PRISMATIC_SWARMS_(AUGMENT_0)",
    categories: ["Prismatic Swarms (Augment 0)", "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Swarms (Augment 2)"] = new RulesElement({
    name: "Prismatic Swarms (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PRISMATIC_SWARMS_(AUGMENT_2)",
    categories: ["Prismatic Swarms (Augment 2)", "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Swarms (Augment 6)"] = new RulesElement({
    name: "Prismatic Swarms (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PRISMATIC_SWARMS_(AUGMENT_6)",
    categories: ["Prismatic Swarms (Augment 6)", "ID_INTERNAL_POWER_PRISMATIC_SWARMS_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Probability Flux"] = new RulesElement({
    name: "Probability Flux",
    type: "Power",
    id: "ID_FMP_POWER_12982",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12982",
    categories: ["Probability Flux", "ID_FMP_POWER_12982", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Probability Flux (Augment 0)"] = new RulesElement({
    name: "Probability Flux (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PROBABILITY_FLUX_(AUGMENT_0)",
    categories: ["Probability Flux (Augment 0)", "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Probability Flux (Augment 1)"] = new RulesElement({
    name: "Probability Flux (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PROBABILITY_FLUX_(AUGMENT_1)",
    categories: ["Probability Flux (Augment 1)", "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Probability Flux (Augment 4)"] = new RulesElement({
    name: "Probability Flux (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PROBABILITY_FLUX_(AUGMENT_4)",
    categories: ["Probability Flux (Augment 4)", "ID_INTERNAL_POWER_PROBABILITY_FLUX_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Psionic Charge"] = new RulesElement({
    name: "Psionic Charge",
    type: "Power",
    id: "ID_FMP_POWER_12943",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12943",
    categories: ["Psionic Charge", "ID_FMP_POWER_12943", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Anomaly"] = new RulesElement({
    name: "Psychic Anomaly",
    type: "Power",
    id: "ID_FMP_POWER_13320",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13320",
    categories: ["Psychic Anomaly", "ID_FMP_POWER_13320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13321"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Psychic Anomaly Attack"] = new RulesElement({
    name: "Psychic Anomaly Attack",
    type: "Power",
    id: "ID_FMP_POWER_13321",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13321",
    categories: ["Psychic Anomaly Attack", "ID_FMP_POWER_13321", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Anomaly Attack (Augment 0)"] = new RulesElement({
    name: "Psychic Anomaly Attack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_0)",
    categories: ["Psychic Anomaly Attack (Augment 0)", "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Anomaly Attack (Augment 1)"] = new RulesElement({
    name: "Psychic Anomaly Attack (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_1)",
    categories: ["Psychic Anomaly Attack (Augment 1)", "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Anomaly Attack (Augment 2)"] = new RulesElement({
    name: "Psychic Anomaly Attack (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_2)",
    categories: ["Psychic Anomaly Attack (Augment 2)", "ID_INTERNAL_POWER_PSYCHIC_ANOMALY_ATTACK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Boon"] = new RulesElement({
    name: "Psychic Boon",
    type: "Power",
    id: "ID_FMP_POWER_12966",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12966",
    categories: ["Psychic Boon", "ID_FMP_POWER_12966", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Dissolution"] = new RulesElement({
    name: "Psychic Dissolution",
    type: "Power",
    id: "ID_FMP_POWER_13310",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13310",
    categories: ["Psychic Dissolution", "ID_FMP_POWER_13310", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Quickening Assault"] = new RulesElement({
    name: "Quickening Assault",
    type: "Power",
    id: "ID_FMP_POWER_13191",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13191",
    categories: ["Quickening Assault", "ID_FMP_POWER_13191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Quicksilver Motion"] = new RulesElement({
    name: "Quicksilver Motion",
    type: "Power",
    id: "ID_FMP_POWER_13162",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13162",
    categories: ["Quicksilver Motion", "ID_FMP_POWER_13162", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rapid Calculation"] = new RulesElement({
    name: "Rapid Calculation",
    type: "Power",
    id: "ID_FMP_POWER_12954",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12954",
    categories: ["Rapid Calculation", "ID_FMP_POWER_12954", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Ravenous Singularity"] = new RulesElement({
    name: "Ravenous Singularity",
    type: "Power",
    id: "ID_FMP_POWER_13389",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13389",
    categories: ["Ravenous Singularity", "ID_FMP_POWER_13389", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Reactive Jaunt Strike"] = new RulesElement({
    name: "Reactive Jaunt Strike",
    type: "Power",
    id: "ID_FMP_POWER_12987",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12987",
    categories: ["Reactive Jaunt Strike", "ID_FMP_POWER_12987", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Meltdown"] = new RulesElement({
    name: "Reality Meltdown",
    type: "Power",
    id: "ID_FMP_POWER_13385",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13385",
    categories: ["Reality Meltdown", "ID_FMP_POWER_13385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13386"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Reality Meltdown Attack"] = new RulesElement({
    name: "Reality Meltdown Attack",
    type: "Power",
    id: "ID_FMP_POWER_13386",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13386",
    categories: ["Reality Meltdown Attack", "ID_FMP_POWER_13386", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Meltdown Attack (Augment 0)"] = new RulesElement({
    name: "Reality Meltdown Attack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_0)",
    categories: ["Reality Meltdown Attack (Augment 0)", "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Meltdown Attack (Augment 2)"] = new RulesElement({
    name: "Reality Meltdown Attack (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_2)",
    categories: ["Reality Meltdown Attack (Augment 2)", "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Meltdown Attack (Augment 6)"] = new RulesElement({
    name: "Reality Meltdown Attack (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_6)",
    categories: ["Reality Meltdown Attack (Augment 6)", "ID_INTERNAL_POWER_REALITY_MELTDOWN_ATTACK_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Shuffle"] = new RulesElement({
    name: "Reality Shuffle",
    type: "Power",
    id: "ID_FMP_POWER_13092",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13092",
    categories: ["Reality Shuffle", "ID_FMP_POWER_13092", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Shuffle (Augment 0)"] = new RulesElement({
    name: "Reality Shuffle (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_SHUFFLE_(AUGMENT_0)",
    categories: ["Reality Shuffle (Augment 0)", "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Shuffle (Augment 2)"] = new RulesElement({
    name: "Reality Shuffle (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_SHUFFLE_(AUGMENT_2)",
    categories: ["Reality Shuffle (Augment 2)", "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Shuffle (Augment 6)"] = new RulesElement({
    name: "Reality Shuffle (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REALITY_SHUFFLE_(AUGMENT_6)",
    categories: ["Reality Shuffle (Augment 6)", "ID_INTERNAL_POWER_REALITY_SHUFFLE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Rebounding Dance"] = new RulesElement({
    name: "Rebounding Dance",
    type: "Power",
    id: "ID_FMP_POWER_13109",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13109",
    categories: ["Rebounding Dance", "ID_FMP_POWER_13109", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_741", "Quicksilver Demon", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rebounding Dance (Augment 0)"] = new RulesElement({
    name: "Rebounding Dance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REBOUNDING_DANCE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REBOUNDING_DANCE_(AUGMENT_0)",
    categories: ["Rebounding Dance (Augment 0)", "ID_INTERNAL_POWER_REBOUNDING_DANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Rebounding Dance (Augment 2)"] = new RulesElement({
    name: "Rebounding Dance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_REBOUNDING_DANCE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_REBOUNDING_DANCE_(AUGMENT_2)",
    categories: ["Rebounding Dance (Augment 2)", "ID_INTERNAL_POWER_REBOUNDING_DANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Recall Agony"] = new RulesElement({
    name: "Recall Agony",
    type: "Power",
    id: "ID_FMP_POWER_13378",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13378",
    categories: ["Recall Agony", "ID_FMP_POWER_13378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Recursive Emotions"] = new RulesElement({
    name: "Recursive Emotions",
    type: "Power",
    id: "ID_FMP_POWER_12939",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12939",
    categories: ["Recursive Emotions", "ID_FMP_POWER_12939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Hostility"] = new RulesElement({
    name: "Relentless Hostility",
    type: "Power",
    id: "ID_FMP_POWER_13049",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13049",
    categories: ["Relentless Hostility", "ID_FMP_POWER_13049", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Renewed Focus"] = new RulesElement({
    name: "Renewed Focus",
    type: "Power",
    id: "ID_FMP_POWER_13026",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13026",
    categories: ["Renewed Focus", "ID_FMP_POWER_13026", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Renewed Focus (Augment 0)"] = new RulesElement({
    name: "Renewed Focus (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RENEWED_FOCUS_(AUGMENT_0)",
    categories: ["Renewed Focus (Augment 0)", "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Renewed Focus (Augment 1)"] = new RulesElement({
    name: "Renewed Focus (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RENEWED_FOCUS_(AUGMENT_1)",
    categories: ["Renewed Focus (Augment 1)", "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Renewed Focus (Augment 2)"] = new RulesElement({
    name: "Renewed Focus (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RENEWED_FOCUS_(AUGMENT_2)",
    categories: ["Renewed Focus (Augment 2)", "ID_INTERNAL_POWER_RENEWED_FOCUS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Resilient Bond"] = new RulesElement({
    name: "Resilient Bond",
    type: "Power",
    id: "ID_FMP_POWER_12979",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12979",
    categories: ["Resilient Bond", "ID_FMP_POWER_12979", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Resolute Recovery"] = new RulesElement({
    name: "Resolute Recovery",
    type: "Power",
    id: "ID_FMP_POWER_13074",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13074",
    categories: ["Resolute Recovery", "ID_FMP_POWER_13074", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Resonating Fist"] = new RulesElement({
    name: "Resonating Fist",
    type: "Power",
    id: "ID_FMP_POWER_13157",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13157",
    categories: ["Resonating Fist", "ID_FMP_POWER_13157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Resounding Fist"] = new RulesElement({
    name: "Resounding Fist",
    type: "Power",
    id: "ID_FMP_POWER_13182",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13182",
    categories: ["Resounding Fist", "ID_FMP_POWER_13182", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13183"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Resounding Fist [Movement Technique]"] = new RulesElement({
    name: "Resounding Fist [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13183",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13183",
    categories: ["Resounding Fist [Movement Technique]", "ID_FMP_POWER_13183", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Resounding Strike"] = new RulesElement({
    name: "Resounding Strike",
    type: "Power",
    id: "ID_FMP_POWER_13148",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13148",
    categories: ["Resounding Strike", "ID_FMP_POWER_13148", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13149"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Resounding Strike [Movement Technique]"] = new RulesElement({
    name: "Resounding Strike [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13149",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13149",
    categories: ["Resounding Strike [Movement Technique]", "ID_FMP_POWER_13149", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Smash"] = new RulesElement({
    name: "Restorative Smash",
    type: "Power",
    id: "ID_FMP_POWER_12993",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12993",
    categories: ["Restorative Smash", "ID_FMP_POWER_12993", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Smash (Augment 0)"] = new RulesElement({
    name: "Restorative Smash (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RESTORATIVE_SMASH_(AUGMENT_0)",
    categories: ["Restorative Smash (Augment 0)", "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Smash (Augment 2)"] = new RulesElement({
    name: "Restorative Smash (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RESTORATIVE_SMASH_(AUGMENT_2)",
    categories: ["Restorative Smash (Augment 2)", "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Smash (Augment 6)"] = new RulesElement({
    name: "Restorative Smash (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RESTORATIVE_SMASH_(AUGMENT_6)",
    categories: ["Restorative Smash (Augment 6)", "ID_INTERNAL_POWER_RESTORATIVE_SMASH_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Restore Thrall"] = new RulesElement({
    name: "Restore Thrall",
    type: "Power",
    id: "ID_FMP_POWER_13410",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13410",
    categories: ["Restore Thrall", "ID_FMP_POWER_13410", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_759", "Thrallherd", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Riddle of Health"] = new RulesElement({
    name: "Riddle of Health",
    type: "Power",
    id: "ID_FMP_POWER_13295",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13295",
    categories: ["Riddle of Health", "ID_FMP_POWER_13295", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_753", "Transcendent Perfection", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Riddle of Invulnerability"] = new RulesElement({
    name: "Riddle of Invulnerability",
    type: "Power",
    id: "ID_FMP_POWER_13293",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13293",
    categories: ["Riddle of Invulnerability", "ID_FMP_POWER_13293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_753", "Transcendent Perfection", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Riddle of Motion"] = new RulesElement({
    name: "Riddle of Motion",
    type: "Power",
    id: "ID_FMP_POWER_13292",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13292",
    categories: ["Riddle of Motion", "ID_FMP_POWER_13292", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_753", "Transcendent Perfection", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13294"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Riddle of Motion [Movement Technique]"] = new RulesElement({
    name: "Riddle of Motion [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13294",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13294",
    categories: ["Riddle of Motion [Movement Technique]", "ID_FMP_POWER_13294", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_753", "Transcendent Perfection", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Scream"] = new RulesElement({
    name: "Ruinous Scream",
    type: "Power",
    id: "ID_FMP_POWER_12994",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12994",
    categories: ["Ruinous Scream", "ID_FMP_POWER_12994", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Scream (Augment 0)"] = new RulesElement({
    name: "Ruinous Scream (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RUINOUS_SCREAM_(AUGMENT_0)",
    categories: ["Ruinous Scream (Augment 0)", "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Scream (Augment 2)"] = new RulesElement({
    name: "Ruinous Scream (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RUINOUS_SCREAM_(AUGMENT_2)",
    categories: ["Ruinous Scream (Augment 2)", "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Scream (Augment 6)"] = new RulesElement({
    name: "Ruinous Scream (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_RUINOUS_SCREAM_(AUGMENT_6)",
    categories: ["Ruinous Scream (Augment 6)", "ID_INTERNAL_POWER_RUINOUS_SCREAM_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Scattered Discorporation"] = new RulesElement({
    name: "Scattered Discorporation",
    type: "Power",
    id: "ID_FMP_POWER_13394",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13394",
    categories: ["Scattered Discorporation", "ID_FMP_POWER_13394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_756", "Anathema", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Scattered Discorporation (Augment 0)"] = new RulesElement({
    name: "Scattered Discorporation (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SCATTERED_DISCORPORATION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SCATTERED_DISCORPORATION_(AUGMENT_0)",
    categories: ["Scattered Discorporation (Augment 0)", "ID_INTERNAL_POWER_SCATTERED_DISCORPORATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Scattered Discorporation (Augment 2)"] = new RulesElement({
    name: "Scattered Discorporation (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SCATTERED_DISCORPORATION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SCATTERED_DISCORPORATION_(AUGMENT_2)",
    categories: ["Scattered Discorporation (Augment 2)", "ID_INTERNAL_POWER_SCATTERED_DISCORPORATION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Scattering of Leaves"] = new RulesElement({
    name: "Scattering of Leaves",
    type: "Power",
    id: "ID_FMP_POWER_13132",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13132",
    categories: ["Scattering of Leaves", "ID_FMP_POWER_13132", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13133"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Scattering of Leaves [Movement Technique]"] = new RulesElement({
    name: "Scattering of Leaves [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13133",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13133",
    categories: ["Scattering of Leaves [Movement Technique]", "ID_FMP_POWER_13133", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Serene Mind"] = new RulesElement({
    name: "Serene Mind",
    type: "Power",
    id: "ID_FMP_POWER_13014",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13014",
    categories: ["Serene Mind", "ID_FMP_POWER_13014", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_736", "Catalyst", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Serve Me Well"] = new RulesElement({
    name: "Serve Me Well",
    type: "Power",
    id: "ID_FMP_POWER_13407",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13407",
    categories: ["Serve Me Well", "ID_FMP_POWER_13407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_759", "Thrallherd", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Serve Me Well (Augment 0)"] = new RulesElement({
    name: "Serve Me Well (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SERVE_ME_WELL_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SERVE_ME_WELL_(AUGMENT_0)",
    categories: ["Serve Me Well (Augment 0)", "ID_INTERNAL_POWER_SERVE_ME_WELL_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Serve Me Well (Augment 2)"] = new RulesElement({
    name: "Serve Me Well (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SERVE_ME_WELL_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SERVE_ME_WELL_(AUGMENT_2)",
    categories: ["Serve Me Well (Augment 2)", "ID_INTERNAL_POWER_SERVE_ME_WELL_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Shaped Consciousness"] = new RulesElement({
    name: "Shaped Consciousness",
    type: "Power",
    id: "ID_FMP_POWER_13300",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13300",
    categories: ["Shaped Consciousness", "ID_FMP_POWER_13300"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Momentum"] = new RulesElement({
    name: "Shared Momentum",
    type: "Power",
    id: "ID_FMP_POWER_12955",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12955",
    categories: ["Shared Momentum", "ID_FMP_POWER_12955", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Recovery"] = new RulesElement({
    name: "Shared Recovery",
    type: "Power",
    id: "ID_FMP_POWER_13330",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13330",
    categories: ["Shared Recovery", "ID_FMP_POWER_13330", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shatter the Mountain"] = new RulesElement({
    name: "Shatter the Mountain",
    type: "Power",
    id: "ID_FMP_POWER_13267",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13267",
    categories: ["Shatter the Mountain", "ID_FMP_POWER_13267", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13268"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shatter the Mountain [Movement Technique]"] = new RulesElement({
    name: "Shatter the Mountain [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13268",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13268",
    categories: ["Shatter the Mountain [Movement Technique]", "ID_FMP_POWER_13268", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shattered Earth Fall"] = new RulesElement({
    name: "Shattered Earth Fall",
    type: "Power",
    id: "ID_FMP_POWER_13255",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13255",
    categories: ["Shattered Earth Fall", "ID_FMP_POWER_13255", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13256"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shattered Earth Fall [Movement Technique]"] = new RulesElement({
    name: "Shattered Earth Fall [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13256",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13256",
    categories: ["Shattered Earth Fall [Movement Technique]", "ID_FMP_POWER_13256", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shattered Time"] = new RulesElement({
    name: "Shattered Time",
    type: "Power",
    id: "ID_FMP_POWER_13057",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13057",
    categories: ["Shattered Time", "ID_FMP_POWER_13057", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13058"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shattered Time Attack"] = new RulesElement({
    name: "Shattered Time Attack",
    type: "Power",
    id: "ID_FMP_POWER_13058",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13058",
    categories: ["Shattered Time Attack", "ID_FMP_POWER_13058", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sonic Burst"] = new RulesElement({
    name: "Sonic Burst",
    type: "Power",
    id: "ID_FMP_POWER_13071",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13071",
    categories: ["Sonic Burst", "ID_FMP_POWER_13071", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Spatial Anomaly"] = new RulesElement({
    name: "Spatial Anomaly",
    type: "Power",
    id: "ID_FMP_POWER_12962",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12962",
    categories: ["Spatial Anomaly", "ID_FMP_POWER_12962", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Specter of Doubt"] = new RulesElement({
    name: "Specter of Doubt",
    type: "Power",
    id: "ID_FMP_POWER_12951",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12951",
    categories: ["Specter of Doubt", "ID_FMP_POWER_12951", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Spontaneous Combustion"] = new RulesElement({
    name: "Spontaneous Combustion",
    type: "Power",
    id: "ID_FMP_POWER_13398",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13398",
    categories: ["Spontaneous Combustion", "ID_FMP_POWER_13398", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_757", "Firestarter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13403"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spontaneous Combustion Attack"] = new RulesElement({
    name: "Spontaneous Combustion Attack",
    type: "Power",
    id: "ID_FMP_POWER_13403",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13403",
    categories: ["Spontaneous Combustion Attack", "ID_FMP_POWER_13403", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_757", "Firestarter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Springing Drake Assault"] = new RulesElement({
    name: "Springing Drake Assault",
    type: "Power",
    id: "ID_FMP_POWER_13150",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13150",
    categories: ["Springing Drake Assault", "ID_FMP_POWER_13150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13151"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Springing Drake Assault [Movement Technique]"] = new RulesElement({
    name: "Springing Drake Assault [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13151",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13151",
    categories: ["Springing Drake Assault [Movement Technique]", "ID_FMP_POWER_13151", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Spur the Battle"] = new RulesElement({
    name: "Spur the Battle",
    type: "Power",
    id: "ID_FMP_POWER_12963",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12963",
    categories: ["Spur the Battle", "ID_FMP_POWER_12963", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Stack the Odds"] = new RulesElement({
    name: "Stack the Odds",
    type: "Power",
    id: "ID_FMP_POWER_12971",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12971",
    categories: ["Stack the Odds", "ID_FMP_POWER_12971", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Stack the Odds (Augment 0)"] = new RulesElement({
    name: "Stack the Odds (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STACK_THE_ODDS_(AUGMENT_0)",
    categories: ["Stack the Odds (Augment 0)", "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Stack the Odds (Augment 1)"] = new RulesElement({
    name: "Stack the Odds (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STACK_THE_ODDS_(AUGMENT_1)",
    categories: ["Stack the Odds (Augment 1)", "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Stack the Odds (Augment 4)"] = new RulesElement({
    name: "Stack the Odds (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STACK_THE_ODDS_(AUGMENT_4)",
    categories: ["Stack the Odds (Augment 4)", "ID_INTERNAL_POWER_STACK_THE_ODDS_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Static Mote"] = new RulesElement({
    name: "Static Mote",
    type: "Power",
    id: "ID_FMP_POWER_13462",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13462",
    categories: ["Static Mote", "ID_FMP_POWER_13462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13463"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Static Mote Attack"] = new RulesElement({
    name: "Static Mote Attack",
    type: "Power",
    id: "ID_FMP_POWER_13463",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13463",
    categories: ["Static Mote Attack", "ID_FMP_POWER_13463", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Static Mote Attack (Augment 0)"] = new RulesElement({
    name: "Static Mote Attack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STATIC_MOTE_ATTACK_(AUGMENT_0)",
    categories: ["Static Mote Attack (Augment 0)", "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Static Mote Attack (Augment 1)"] = new RulesElement({
    name: "Static Mote Attack (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STATIC_MOTE_ATTACK_(AUGMENT_1)",
    categories: ["Static Mote Attack (Augment 1)", "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Static Mote Attack (Augment 2)"] = new RulesElement({
    name: "Static Mote Attack (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STATIC_MOTE_ATTACK_(AUGMENT_2)",
    categories: ["Static Mote Attack (Augment 2)", "ID_INTERNAL_POWER_STATIC_MOTE_ATTACK_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Avalanche"] = new RulesElement({
    name: "Steel Avalanche",
    type: "Power",
    id: "ID_FMP_POWER_13140",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13140",
    categories: ["Steel Avalanche", "ID_FMP_POWER_13140", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Wind"] = new RulesElement({
    name: "Steel Wind",
    type: "Power",
    id: "ID_FMP_POWER_13126",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13126",
    categories: ["Steel Wind", "ID_FMP_POWER_13126", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13127"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Steel Wind [Movement Technique]"] = new RulesElement({
    name: "Steel Wind [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13127",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13127",
    categories: ["Steel Wind [Movement Technique]", "ID_FMP_POWER_13127", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Still Waters Attack"] = new RulesElement({
    name: "Still Waters Attack",
    type: "Power",
    id: "ID_FMP_POWER_13193",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13193",
    categories: ["Still Waters Attack", "ID_FMP_POWER_13193", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Still Waters Strike"] = new RulesElement({
    name: "Still Waters Strike",
    type: "Power",
    id: "ID_FMP_POWER_13192",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13192",
    categories: ["Still Waters Strike", "ID_FMP_POWER_13192", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13193"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Stinging Nettles"] = new RulesElement({
    name: "Stinging Nettles",
    type: "Power",
    id: "ID_FMP_POWER_13134",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13134",
    categories: ["Stinging Nettles", "ID_FMP_POWER_13134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13135"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Stinging Nettles [Movement Technique]"] = new RulesElement({
    name: "Stinging Nettles [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13135",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13135",
    categories: ["Stinging Nettles [Movement Technique]", "ID_FMP_POWER_13135", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Grace"] = new RulesElement({
    name: "Stolen Grace",
    type: "Power",
    id: "ID_FMP_POWER_13032",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13032",
    categories: ["Stolen Grace", "ID_FMP_POWER_13032", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Strength"] = new RulesElement({
    name: "Stolen Strength",
    type: "Power",
    id: "ID_FMP_POWER_12958",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12958",
    categories: ["Stolen Strength", "ID_FMP_POWER_12958", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Strength (Augment 0)"] = new RulesElement({
    name: "Stolen Strength (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STOLEN_STRENGTH_(AUGMENT_0)",
    categories: ["Stolen Strength (Augment 0)", "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Strength (Augment 1)"] = new RulesElement({
    name: "Stolen Strength (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STOLEN_STRENGTH_(AUGMENT_1)",
    categories: ["Stolen Strength (Augment 1)", "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Strength (Augment 2)"] = new RulesElement({
    name: "Stolen Strength (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_STOLEN_STRENGTH_(AUGMENT_2)",
    categories: ["Stolen Strength (Augment 2)", "ID_INTERNAL_POWER_STOLEN_STRENGTH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Vigor"] = new RulesElement({
    name: "Stolen Vigor",
    type: "Power",
    id: "ID_FMP_POWER_13094",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13094",
    categories: ["Stolen Vigor", "ID_FMP_POWER_13094", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stone-Shatter Attack"] = new RulesElement({
    name: "Stone-Shatter Attack",
    type: "Power",
    id: "ID_FMP_POWER_13278",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13278",
    categories: ["Stone-Shatter Attack", "ID_FMP_POWER_13278", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_749", "Basilisk's Fury Adept", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Stone-Shatter Strike"] = new RulesElement({
    name: "Stone-Shatter Strike",
    type: "Power",
    id: "ID_FMP_POWER_13276",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13276",
    categories: ["Stone-Shatter Strike", "ID_FMP_POWER_13276", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_749", "Basilisk's Fury Adept", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13278"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Storm of Raining Blades"] = new RulesElement({
    name: "Storm of Raining Blades",
    type: "Power",
    id: "ID_FMP_POWER_13285",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13285",
    categories: ["Storm of Raining Blades", "ID_FMP_POWER_13285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_751", "Soaring Blade", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Storm's Wake"] = new RulesElement({
    name: "Storm's Wake",
    type: "Power",
    id: "ID_FMP_POWER_13184",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13184",
    categories: ["Storm's Wake", "ID_FMP_POWER_13184", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13185"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Storm's Wake [Movement Technique]"] = new RulesElement({
    name: "Storm's Wake [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13185",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13185",
    categories: ["Storm's Wake [Movement Technique]", "ID_FMP_POWER_13185", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Stormwalker"] = new RulesElement({
    name: "Stormwalker",
    type: "Power",
    id: "ID_FMP_POWER_13115",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13115",
    categories: ["Stormwalker", "ID_FMP_POWER_13115", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_742", "Storm Disciple", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Strange Anatomy"] = new RulesElement({
    name: "Strange Anatomy",
    type: "Power",
    id: "ID_FMP_POWER_13416",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13416",
    categories: ["Strange Anatomy", "ID_FMP_POWER_13416", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_761", "Impure Scion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of my Enemy"] = new RulesElement({
    name: "Strength of my Enemy",
    type: "Power",
    id: "ID_FMP_POWER_13059",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13059",
    categories: ["Strength of my Enemy", "ID_FMP_POWER_13059", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Strike of Perfect Clarity"] = new RulesElement({
    name: "Strike of Perfect Clarity",
    type: "Power",
    id: "ID_FMP_POWER_13262",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13262",
    categories: ["Strike of Perfect Clarity", "ID_FMP_POWER_13262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Palm"] = new RulesElement({
    name: "Stunning Palm",
    type: "Power",
    id: "ID_FMP_POWER_13141",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13141",
    categories: ["Stunning Palm", "ID_FMP_POWER_13141", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13142"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Stunning Palm Attack"] = new RulesElement({
    name: "Stunning Palm Attack",
    type: "Power",
    id: "ID_FMP_POWER_13142",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13142",
    categories: ["Stunning Palm Attack", "ID_FMP_POWER_13142", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Subjective Gravity"] = new RulesElement({
    name: "Subjective Gravity",
    type: "Power",
    id: "ID_FMP_POWER_13061",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13061",
    categories: ["Subjective Gravity", "ID_FMP_POWER_13061", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Subjective Reality"] = new RulesElement({
    name: "Subjective Reality",
    type: "Power",
    id: "ID_FMP_POWER_13357",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13357",
    categories: ["Subjective Reality", "ID_FMP_POWER_13357", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sublime Fury"] = new RulesElement({
    name: "Sublime Fury",
    type: "Power",
    id: "ID_FMP_POWER_13095",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13095",
    categories: ["Sublime Fury", "ID_FMP_POWER_13095", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Reinforcements"] = new RulesElement({
    name: "Sudden Reinforcements",
    type: "Power",
    id: "ID_FMP_POWER_12991",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12991",
    categories: ["Sudden Reinforcements", "ID_FMP_POWER_12991", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Ebony Stinger"] = new RulesElement({
    name: "Summon Ebony Stinger",
    type: "Power",
    id: "ID_FMP_POWER_13325",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13325",
    categories: ["Summon Ebony Stinger", "ID_FMP_POWER_13325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Ebony Stinger (Augment 0)"] = new RulesElement({
    name: "Summon Ebony Stinger (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_EBONY_STINGER_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_EBONY_STINGER_(AUGMENT_0)",
    categories: ["Summon Ebony Stinger (Augment 0)", "ID_INTERNAL_POWER_SUMMON_EBONY_STINGER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Ebony Stinger (Augment 1)"] = new RulesElement({
    name: "Summon Ebony Stinger (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_EBONY_STINGER_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_EBONY_STINGER_(AUGMENT_1)",
    categories: ["Summon Ebony Stinger (Augment 1)", "ID_INTERNAL_POWER_SUMMON_EBONY_STINGER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Emerald Terror"] = new RulesElement({
    name: "Summon Emerald Terror",
    type: "Power",
    id: "ID_FMP_POWER_13379",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13379",
    categories: ["Summon Emerald Terror", "ID_FMP_POWER_13379", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Emerald Terror (Augment 0)"] = new RulesElement({
    name: "Summon Emerald Terror (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_EMERALD_TERROR_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_EMERALD_TERROR_(AUGMENT_0)",
    categories: ["Summon Emerald Terror (Augment 0)", "ID_INTERNAL_POWER_SUMMON_EMERALD_TERROR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Emerald Terror (Augment 2)"] = new RulesElement({
    name: "Summon Emerald Terror (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_EMERALD_TERROR_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_EMERALD_TERROR_(AUGMENT_2)",
    categories: ["Summon Emerald Terror (Augment 2)", "ID_INTERNAL_POWER_SUMMON_EMERALD_TERROR_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Far Realm Abomination"] = new RulesElement({
    name: "Summon Far Realm Abomination",
    type: "Power",
    id: "ID_FMP_POWER_13392",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13392",
    categories: ["Summon Far Realm Abomination", "ID_FMP_POWER_13392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_755", "Alienist", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fleeting Thoughts"] = new RulesElement({
    name: "Summon Fleeting Thoughts",
    type: "Power",
    id: "ID_FMP_POWER_13371",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13371",
    categories: ["Summon Fleeting Thoughts", "ID_FMP_POWER_13371", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fleeting Thoughts (Augment 0)"] = new RulesElement({
    name: "Summon Fleeting Thoughts (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_0)",
    categories: ["Summon Fleeting Thoughts (Augment 0)", "ID_INTERNAL_POWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fleeting Thoughts (Augment 1)"] = new RulesElement({
    name: "Summon Fleeting Thoughts (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_1)",
    categories: ["Summon Fleeting Thoughts (Augment 1)", "ID_INTERNAL_POWER_SUMMON_FLEETING_THOUGHTS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Mind Weirds"] = new RulesElement({
    name: "Summon Mind Weirds",
    type: "Power",
    id: "ID_FMP_POWER_13368",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13368",
    categories: ["Summon Mind Weirds", "ID_FMP_POWER_13368", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Mind Weirds (Augment 0)"] = new RulesElement({
    name: "Summon Mind Weirds (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_MIND_WEIRDS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_MIND_WEIRDS_(AUGMENT_0)",
    categories: ["Summon Mind Weirds (Augment 0)", "ID_INTERNAL_POWER_SUMMON_MIND_WEIRDS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Mind Weirds (Augment 1)"] = new RulesElement({
    name: "Summon Mind Weirds (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_MIND_WEIRDS_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_MIND_WEIRDS_(AUGMENT_1)",
    categories: ["Summon Mind Weirds (Augment 1)", "ID_INTERNAL_POWER_SUMMON_MIND_WEIRDS_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Phantasmal Killer"] = new RulesElement({
    name: "Summon Phantasmal Killer",
    type: "Power",
    id: "ID_FMP_POWER_13341",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13341",
    categories: ["Summon Phantasmal Killer", "ID_FMP_POWER_13341", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Phantasmal Killer (Augment 0)"] = new RulesElement({
    name: "Summon Phantasmal Killer (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_0)",
    categories: ["Summon Phantasmal Killer (Augment 0)", "ID_INTERNAL_POWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Phantasmal Killer (Augment 1)"] = new RulesElement({
    name: "Summon Phantasmal Killer (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_1)",
    categories: ["Summon Phantasmal Killer (Augment 1)", "ID_INTERNAL_POWER_SUMMON_PHANTASMAL_KILLER_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Champion"] = new RulesElement({
    name: "Summon Thought Champion",
    type: "Power",
    id: "ID_FMP_POWER_13390",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13390",
    categories: ["Summon Thought Champion", "ID_FMP_POWER_13390", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Champion (Augment 0)"] = new RulesElement({
    name: "Summon Thought Champion (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_0)",
    categories: ["Summon Thought Champion (Augment 0)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Champion (Augment 2)"] = new RulesElement({
    name: "Summon Thought Champion (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_2)",
    categories: ["Summon Thought Champion (Augment 2)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_CHAMPION_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Servant"] = new RulesElement({
    name: "Summon Thought Servant",
    type: "Power",
    id: "ID_FMP_POWER_13311",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13311",
    categories: ["Summon Thought Servant", "ID_FMP_POWER_13311", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Servant (Augment 0)"] = new RulesElement({
    name: "Summon Thought Servant (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_0)",
    categories: ["Summon Thought Servant (Augment 0)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Servant (Augment 1)"] = new RulesElement({
    name: "Summon Thought Servant (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_1)",
    categories: ["Summon Thought Servant (Augment 1)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_SERVANT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Warrior"] = new RulesElement({
    name: "Summon Thought Warrior",
    type: "Power",
    id: "ID_FMP_POWER_13352",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13352",
    categories: ["Summon Thought Warrior", "ID_FMP_POWER_13352", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Warrior (Augment 0)"] = new RulesElement({
    name: "Summon Thought Warrior (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_0)",
    categories: ["Summon Thought Warrior (Augment 0)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thought Warrior (Augment 1)"] = new RulesElement({
    name: "Summon Thought Warrior (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_1)",
    categories: ["Summon Thought Warrior (Augment 1)", "ID_INTERNAL_POWER_SUMMON_THOUGHT_WARRIOR_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Sundered Chains"] = new RulesElement({
    name: "Sundered Chains",
    type: "Power",
    id: "ID_FMP_POWER_13196",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13196",
    categories: ["Sundered Chains", "ID_FMP_POWER_13196", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Supreme Parry"] = new RulesElement({
    name: "Supreme Parry",
    type: "Power",
    id: "ID_FMP_POWER_13249",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13249",
    categories: ["Supreme Parry", "ID_FMP_POWER_13249", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Sustaining Harvest"] = new RulesElement({
    name: "Sustaining Harvest",
    type: "Power",
    id: "ID_FMP_POWER_13404",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13404",
    categories: ["Sustaining Harvest", "ID_FMP_POWER_13404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_758", "Master Summoner", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sustaining Harvest (Augment 0)"] = new RulesElement({
    name: "Sustaining Harvest (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUSTAINING_HARVEST_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUSTAINING_HARVEST_(AUGMENT_0)",
    categories: ["Sustaining Harvest (Augment 0)", "ID_INTERNAL_POWER_SUSTAINING_HARVEST_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Sustaining Harvest (Augment 2)"] = new RulesElement({
    name: "Sustaining Harvest (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_SUSTAINING_HARVEST_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_SUSTAINING_HARVEST_(AUGMENT_2)",
    categories: ["Sustaining Harvest (Augment 2)", "ID_INTERNAL_POWER_SUSTAINING_HARVEST_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Flight"] = new RulesElement({
    name: "Swift Flight",
    type: "Power",
    id: "ID_FMP_POWER_13145",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13145",
    categories: ["Swift Flight", "ID_FMP_POWER_13145", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Swift River Floods"] = new RulesElement({
    name: "Swift River Floods",
    type: "Power",
    id: "ID_FMP_POWER_13136",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13136",
    categories: ["Swift River Floods", "ID_FMP_POWER_13136", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13137"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Swift River Floods [Movement Technique]"] = new RulesElement({
    name: "Swift River Floods [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13137",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13137",
    categories: ["Swift River Floods [Movement Technique]", "ID_FMP_POWER_13137", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sword Fall Leap"] = new RulesElement({
    name: "Sword Fall Leap",
    type: "Power",
    id: "ID_FMP_POWER_13284",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13284",
    categories: ["Sword Fall Leap", "ID_FMP_POWER_13284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_751", "Soaring Blade", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13286"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Sword Fall Leap [Movement Technique]"] = new RulesElement({
    name: "Sword Fall Leap [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13286",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13286",
    categories: ["Sword Fall Leap [Movement Technique]", "ID_FMP_POWER_13286", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_751", "Soaring Blade", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Failure"] = new RulesElement({
    name: "Tactical Failure",
    type: "Power",
    id: "ID_FMP_POWER_13000",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13000",
    categories: ["Tactical Failure", "ID_FMP_POWER_13000", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Failure (Augment 0)"] = new RulesElement({
    name: "Tactical Failure (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TACTICAL_FAILURE_(AUGMENT_0)",
    categories: ["Tactical Failure (Augment 0)", "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Failure (Augment 2)"] = new RulesElement({
    name: "Tactical Failure (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TACTICAL_FAILURE_(AUGMENT_2)",
    categories: ["Tactical Failure (Augment 2)", "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Failure (Augment 6)"] = new RulesElement({
    name: "Tactical Failure (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TACTICAL_FAILURE_(AUGMENT_6)",
    categories: ["Tactical Failure (Augment 6)", "ID_INTERNAL_POWER_TACTICAL_FAILURE_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Haze"] = new RulesElement({
    name: "Telekinetic Haze",
    type: "Power",
    id: "ID_FMP_POWER_13360",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13360",
    categories: ["Telekinetic Haze", "ID_FMP_POWER_13360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Haze (Augment 0)"] = new RulesElement({
    name: "Telekinetic Haze (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TELEKINETIC_HAZE_(AUGMENT_0)",
    categories: ["Telekinetic Haze (Augment 0)", "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Haze (Augment 1)"] = new RulesElement({
    name: "Telekinetic Haze (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TELEKINETIC_HAZE_(AUGMENT_1)",
    categories: ["Telekinetic Haze (Augment 1)", "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Haze (Augment 4)"] = new RulesElement({
    name: "Telekinetic Haze (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TELEKINETIC_HAZE_(AUGMENT_4)",
    categories: ["Telekinetic Haze (Augment 4)", "ID_INTERNAL_POWER_TELEKINETIC_HAZE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Telepathic Projection"] = new RulesElement({
    name: "Telepathic Projection",
    type: "Power",
    id: "ID_FMP_POWER_13312",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13312",
    categories: ["Telepathic Projection", "ID_FMP_POWER_13312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Teleport Trigger"] = new RulesElement({
    name: "Teleport Trigger",
    type: "Power",
    id: "ID_FMP_POWER_13075",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13075",
    categories: ["Teleport Trigger", "ID_FMP_POWER_13075", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Regression"] = new RulesElement({
    name: "Temporal Regression",
    type: "Power",
    id: "ID_FMP_POWER_13084",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13084",
    categories: ["Temporal Regression", "ID_FMP_POWER_13084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Temporal Reiteration"] = new RulesElement({
    name: "Temporal Reiteration",
    type: "Power",
    id: "ID_FMP_POWER_13096",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13096",
    categories: ["Temporal Reiteration", "ID_FMP_POWER_13096", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Guardian"] = new RulesElement({
    name: "Thought Guardian",
    type: "Power",
    id: "ID_FMP_POWER_13361",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13361",
    categories: ["Thought Guardian", "ID_FMP_POWER_13361", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13362"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Thought Guardian (Augment 0)"] = new RulesElement({
    name: "Thought Guardian (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_THOUGHT_GUARDIAN_(AUGMENT_0)",
    categories: ["Thought Guardian (Augment 0)", "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Guardian (Augment 1)"] = new RulesElement({
    name: "Thought Guardian (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_THOUGHT_GUARDIAN_(AUGMENT_1)",
    categories: ["Thought Guardian (Augment 1)", "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Guardian (Augment 4)"] = new RulesElement({
    name: "Thought Guardian (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_THOUGHT_GUARDIAN_(AUGMENT_4)",
    categories: ["Thought Guardian (Augment 4)", "ID_INTERNAL_POWER_THOUGHT_GUARDIAN_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Guardian Attack"] = new RulesElement({
    name: "Thought Guardian Attack",
    type: "Power",
    id: "ID_FMP_POWER_13362",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13362",
    categories: ["Thought Guardian Attack", "ID_FMP_POWER_13362", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Hammer"] = new RulesElement({
    name: "Thought Hammer",
    type: "Power",
    id: "ID_FMP_POWER_13380",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13380",
    categories: ["Thought Hammer", "ID_FMP_POWER_13380", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Thought Interloper"] = new RulesElement({
    name: "Thought Interloper",
    type: "Power",
    id: "ID_FMP_POWER_13019",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13019",
    categories: ["Thought Interloper", "ID_FMP_POWER_13019", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_738", "Phrenic Invader", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Thought of Unmaking"] = new RulesElement({
    name: "Thought of Unmaking",
    type: "Power",
    id: "ID_FMP_POWER_13353",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13353",
    categories: ["Thought of Unmaking", "ID_FMP_POWER_13353", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Thousand World Stride"] = new RulesElement({
    name: "Thousand World Stride",
    type: "Power",
    id: "ID_FMP_POWER_13250",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13250",
    categories: ["Thousand World Stride", "ID_FMP_POWER_13250", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderbolt Surge"] = new RulesElement({
    name: "Thunderbolt Surge",
    type: "Power",
    id: "ID_FMP_POWER_13158",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13158",
    categories: ["Thunderbolt Surge", "ID_FMP_POWER_13158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Waterfall"] = new RulesElement({
    name: "Thundering Waterfall",
    type: "Power",
    id: "ID_FMP_POWER_13186",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13186",
    categories: ["Thundering Waterfall", "ID_FMP_POWER_13186", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13187"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Thundering Waterfall [Movement Technique]"] = new RulesElement({
    name: "Thundering Waterfall [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13187",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13187",
    categories: ["Thundering Waterfall [Movement Technique]", "ID_FMP_POWER_13187", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Exit"] = new RulesElement({
    name: "Thunderous Exit",
    type: "Power",
    id: "ID_FMP_POWER_13326",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13326",
    categories: ["Thunderous Exit", "ID_FMP_POWER_13326", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tiger Claw Rake"] = new RulesElement({
    name: "Tiger Claw Rake",
    type: "Power",
    id: "ID_FMP_POWER_13288",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13288",
    categories: ["Tiger Claw Rake", "ID_FMP_POWER_13288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_752", "Tiger Claw Master", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13290"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Tiger Claw Rake [Movement Technique]"] = new RulesElement({
    name: "Tiger Claw Rake [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13290",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13290",
    categories: ["Tiger Claw Rake [Movement Technique]", "ID_FMP_POWER_13290", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_752", "Tiger Claw Master", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tiger Frenzy"] = new RulesElement({
    name: "Tiger Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_13291",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13291",
    categories: ["Tiger Frenzy", "ID_FMP_POWER_13291", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_752", "Tiger Claw Master", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Titan's Mighty Grasp"] = new RulesElement({
    name: "Titan's Mighty Grasp",
    type: "Power",
    id: "ID_FMP_POWER_13273",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13273",
    categories: ["Titan's Mighty Grasp", "ID_FMP_POWER_13273", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13274"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Titan's Mighty Grasp Attack"] = new RulesElement({
    name: "Titan's Mighty Grasp Attack",
    type: "Power",
    id: "ID_FMP_POWER_13274",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13274",
    categories: ["Titan's Mighty Grasp Attack", "ID_FMP_POWER_13274", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Topaz Corona"] = new RulesElement({
    name: "Topaz Corona",
    type: "Power",
    id: "ID_FMP_POWER_13424",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13424",
    categories: ["Topaz Corona", "ID_FMP_POWER_13424", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_767", "Topaz Crusader", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Trace Teleport"] = new RulesElement({
    name: "Trace Teleport",
    type: "Power",
    id: "ID_FMP_POWER_13345",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13345",
    categories: ["Trace Teleport", "ID_FMP_POWER_13345", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Trailblazing Assault"] = new RulesElement({
    name: "Trailblazing Assault",
    type: "Power",
    id: "ID_FMP_POWER_12959",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12959",
    categories: ["Trailblazing Assault", "ID_FMP_POWER_12959", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Trailblazing Assault (Augment 0)"] = new RulesElement({
    name: "Trailblazing Assault (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TRAILBLAZING_ASSAULT_(AUGMENT_0)",
    categories: ["Trailblazing Assault (Augment 0)", "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Trailblazing Assault (Augment 1)"] = new RulesElement({
    name: "Trailblazing Assault (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TRAILBLAZING_ASSAULT_(AUGMENT_1)",
    categories: ["Trailblazing Assault (Augment 1)", "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Trailblazing Assault (Augment 2)"] = new RulesElement({
    name: "Trailblazing Assault (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_TRAILBLAZING_ASSAULT_(AUGMENT_2)",
    categories: ["Trailblazing Assault (Augment 2)", "ID_INTERNAL_POWER_TRAILBLAZING_ASSAULT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Treachery's Seed"] = new RulesElement({
    name: "Treachery's Seed",
    type: "Power",
    id: "ID_FMP_POWER_12975",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12975",
    categories: ["Treachery's Seed", "ID_FMP_POWER_12975", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Fountain Strike"] = new RulesElement({
    name: "Twin Fountain Strike",
    type: "Power",
    id: "ID_FMP_POWER_13209",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13209",
    categories: ["Twin Fountain Strike", "ID_FMP_POWER_13209", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Ubiquitous Vision"] = new RulesElement({
    name: "Ubiquitous Vision",
    type: "Power",
    id: "ID_FMP_POWER_13062",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13062",
    categories: ["Ubiquitous Vision", "ID_FMP_POWER_13062", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Unbalanced Mind"] = new RulesElement({
    name: "Unbalanced Mind",
    type: "Power",
    id: "ID_FMP_POWER_13418",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13418",
    categories: ["Unbalanced Mind", "ID_FMP_POWER_13418", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Unbearable Countenance"] = new RulesElement({
    name: "Unbearable Countenance",
    type: "Power",
    id: "ID_FMP_POWER_13017",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13017",
    categories: ["Unbearable Countenance", "ID_FMP_POWER_13017", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_737", "Incandescent Champion", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Senses"] = new RulesElement({
    name: "Uncanny Senses",
    type: "Power",
    id: "ID_FMP_POWER_13063",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13063",
    categories: ["Uncanny Senses", "ID_FMP_POWER_13063", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Uncommon Clarity"] = new RulesElement({
    name: "Uncommon Clarity",
    type: "Power",
    id: "ID_FMP_POWER_13175",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13175",
    categories: ["Uncommon Clarity", "ID_FMP_POWER_13175", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Unconscious Assault"] = new RulesElement({
    name: "Unconscious Assault",
    type: "Power",
    id: "ID_FMP_POWER_13001",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13001",
    categories: ["Unconscious Assault", "ID_FMP_POWER_13001", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Unconscious Assault (Augment 0)"] = new RulesElement({
    name: "Unconscious Assault (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNCONSCIOUS_ASSAULT_(AUGMENT_0)",
    categories: ["Unconscious Assault (Augment 0)", "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unconscious Assault (Augment 2)"] = new RulesElement({
    name: "Unconscious Assault (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNCONSCIOUS_ASSAULT_(AUGMENT_2)",
    categories: ["Unconscious Assault (Augment 2)", "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Unconscious Assault (Augment 6)"] = new RulesElement({
    name: "Unconscious Assault (Augment 6)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_6)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNCONSCIOUS_ASSAULT_(AUGMENT_6)",
    categories: ["Unconscious Assault (Augment 6)", "ID_INTERNAL_POWER_UNCONSCIOUS_ASSAULT_(AUGMENT_6)"]
  });
  byID[te.id] = te;
  
  te = Power["Undeniable Incitement"] = new RulesElement({
    name: "Undeniable Incitement",
    type: "Power",
    id: "ID_FMP_POWER_13152",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13152",
    categories: ["Undeniable Incitement", "ID_FMP_POWER_13152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13153"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Undeniable Incitement [Movement Technique]"] = new RulesElement({
    name: "Undeniable Incitement [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13153",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13153",
    categories: ["Undeniable Incitement [Movement Technique]", "ID_FMP_POWER_13153", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Unfailing Resolve"] = new RulesElement({
    name: "Unfailing Resolve",
    type: "Power",
    id: "ID_FMP_POWER_13197",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13197",
    categories: ["Unfailing Resolve", "ID_FMP_POWER_13197", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Unity of Steel"] = new RulesElement({
    name: "Unity of Steel",
    type: "Power",
    id: "ID_FMP_POWER_13169",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13169",
    categories: ["Unity of Steel", "ID_FMP_POWER_13169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13170"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Unity of Steel [Movement Technique]"] = new RulesElement({
    name: "Unity of Steel [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13170",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13170",
    categories: ["Unity of Steel [Movement Technique]", "ID_FMP_POWER_13170", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Unleash the Power Within"] = new RulesElement({
    name: "Unleash the Power Within",
    type: "Power",
    id: "ID_FMP_POWER_13013",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13013",
    categories: ["Unleash the Power Within", "ID_FMP_POWER_13013", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_736", "Catalyst", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Ambush"] = new RulesElement({
    name: "Unseen Ambush",
    type: "Power",
    id: "ID_FMP_POWER_13297",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13297",
    categories: ["Unseen Ambush", "ID_FMP_POWER_13297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_754", "Unseen Hand", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Hunter's Pounce"] = new RulesElement({
    name: "Unseen Hunter's Pounce",
    type: "Power",
    id: "ID_FMP_POWER_13296",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13296",
    categories: ["Unseen Hunter's Pounce", "ID_FMP_POWER_13296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_754", "Unseen Hand", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13298"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Unseen Hunter's Pounce [Movement Technique]"] = new RulesElement({
    name: "Unseen Hunter's Pounce [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13298",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13298",
    categories: ["Unseen Hunter's Pounce [Movement Technique]", "ID_FMP_POWER_13298", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_754", "Unseen Hand", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Scrutiny"] = new RulesElement({
    name: "Unseen Scrutiny",
    type: "Power",
    id: "ID_FMP_POWER_13299",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13299",
    categories: ["Unseen Scrutiny", "ID_FMP_POWER_13299", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_754", "Unseen Hand", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unstable Nexus"] = new RulesElement({
    name: "Unstable Nexus",
    type: "Power",
    id: "ID_FMP_POWER_13121",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13121",
    categories: ["Unstable Nexus", "ID_FMP_POWER_13121", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_744", "Unbound Nomad", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unsteadying Rebuke"] = new RulesElement({
    name: "Unsteadying Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_12946",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12946",
    categories: ["Unsteadying Rebuke", "ID_FMP_POWER_12946", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Unsteadying Rebuke (Augment 0)"] = new RulesElement({
    name: "Unsteadying Rebuke (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNSTEADYING_REBUKE_(AUGMENT_0)",
    categories: ["Unsteadying Rebuke (Augment 0)", "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unsteadying Rebuke (Augment 1)"] = new RulesElement({
    name: "Unsteadying Rebuke (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNSTEADYING_REBUKE_(AUGMENT_1)",
    categories: ["Unsteadying Rebuke (Augment 1)", "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Unsteadying Rebuke (Augment 2)"] = new RulesElement({
    name: "Unsteadying Rebuke (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNSTEADYING_REBUKE_(AUGMENT_2)",
    categories: ["Unsteadying Rebuke (Augment 2)", "ID_INTERNAL_POWER_UNSTEADYING_REBUKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Unwavering Concentration"] = new RulesElement({
    name: "Unwavering Concentration",
    type: "Power",
    id: "ID_FMP_POWER_13067",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13067",
    categories: ["Unwavering Concentration", "ID_FMP_POWER_13067", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Unwavering Concentration (Augment 0)"] = new RulesElement({
    name: "Unwavering Concentration (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNWAVERING_CONCENTRATION_(AUGMENT_0)",
    categories: ["Unwavering Concentration (Augment 0)", "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Unwavering Concentration (Augment 1)"] = new RulesElement({
    name: "Unwavering Concentration (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNWAVERING_CONCENTRATION_(AUGMENT_1)",
    categories: ["Unwavering Concentration (Augment 1)", "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Unwavering Concentration (Augment 4)"] = new RulesElement({
    name: "Unwavering Concentration (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_UNWAVERING_CONCENTRATION_(AUGMENT_4)",
    categories: ["Unwavering Concentration (Augment 4)", "ID_INTERNAL_POWER_UNWAVERING_CONCENTRATION_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Cobra Strike"] = new RulesElement({
    name: "Vicious Cobra Strike",
    type: "Power",
    id: "ID_FMP_POWER_13027",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13027",
    categories: ["Vicious Cobra Strike", "ID_FMP_POWER_13027", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Cobra Strike (Augment 0)"] = new RulesElement({
    name: "Vicious Cobra Strike (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VICIOUS_COBRA_STRIKE_(AUGMENT_0)",
    categories: ["Vicious Cobra Strike (Augment 0)", "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Cobra Strike (Augment 1)"] = new RulesElement({
    name: "Vicious Cobra Strike (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VICIOUS_COBRA_STRIKE_(AUGMENT_1)",
    categories: ["Vicious Cobra Strike (Augment 1)", "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Cobra Strike (Augment 2)"] = new RulesElement({
    name: "Vicious Cobra Strike (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VICIOUS_COBRA_STRIKE_(AUGMENT_2)",
    categories: ["Vicious Cobra Strike (Augment 2)", "ID_INTERNAL_POWER_VICIOUS_COBRA_STRIKE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Vision"] = new RulesElement({
    name: "Victorious Vision",
    type: "Power",
    id: "ID_FMP_POWER_12998",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12998",
    categories: ["Victorious Vision", "ID_FMP_POWER_12998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Impulse"] = new RulesElement({
    name: "Violent Impulse",
    type: "Power",
    id: "ID_FMP_POWER_13012",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13012",
    categories: ["Violent Impulse", "ID_FMP_POWER_13012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_736", "Catalyst", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Impulse (Augment 0)"] = new RulesElement({
    name: "Violent Impulse (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_IMPULSE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_IMPULSE_(AUGMENT_0)",
    categories: ["Violent Impulse (Augment 0)", "ID_INTERNAL_POWER_VIOLENT_IMPULSE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Impulse (Augment 2)"] = new RulesElement({
    name: "Violent Impulse (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_IMPULSE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_IMPULSE_(AUGMENT_2)",
    categories: ["Violent Impulse (Augment 2)", "ID_INTERNAL_POWER_VIOLENT_IMPULSE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Ubiquity"] = new RulesElement({
    name: "Violent Ubiquity",
    type: "Power",
    id: "ID_FMP_POWER_13054",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13054",
    categories: ["Violent Ubiquity", "ID_FMP_POWER_13054", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Ubiquity (Augment 0)"] = new RulesElement({
    name: "Violent Ubiquity (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UBIQUITY_(AUGMENT_0)",
    categories: ["Violent Ubiquity (Augment 0)", "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Ubiquity (Augment 1)"] = new RulesElement({
    name: "Violent Ubiquity (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UBIQUITY_(AUGMENT_1)",
    categories: ["Violent Ubiquity (Augment 1)", "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Ubiquity (Augment 2)"] = new RulesElement({
    name: "Violent Ubiquity (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UBIQUITY_(AUGMENT_2)",
    categories: ["Violent Ubiquity (Augment 2)", "ID_INTERNAL_POWER_VIOLENT_UBIQUITY_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Upsurge"] = new RulesElement({
    name: "Violent Upsurge",
    type: "Power",
    id: "ID_FMP_POWER_12983",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12983",
    categories: ["Violent Upsurge", "ID_FMP_POWER_12983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Upsurge (Augment 0)"] = new RulesElement({
    name: "Violent Upsurge (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UPSURGE_(AUGMENT_0)",
    categories: ["Violent Upsurge (Augment 0)", "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Upsurge (Augment 1)"] = new RulesElement({
    name: "Violent Upsurge (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UPSURGE_(AUGMENT_1)",
    categories: ["Violent Upsurge (Augment 1)", "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Upsurge (Augment 4)"] = new RulesElement({
    name: "Violent Upsurge (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VIOLENT_UPSURGE_(AUGMENT_4)",
    categories: ["Violent Upsurge (Augment 4)", "ID_INTERNAL_POWER_VIOLENT_UPSURGE_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Vital Summons"] = new RulesElement({
    name: "Vital Summons",
    type: "Power",
    id: "ID_FMP_POWER_12967",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12967",
    categories: ["Vital Summons", "ID_FMP_POWER_12967", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Void Shard"] = new RulesElement({
    name: "Void Shard",
    type: "Power",
    id: "ID_FMP_POWER_13464",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13464",
    categories: ["Void Shard", "ID_FMP_POWER_13464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13465"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Void Shard (Augment 0)"] = new RulesElement({
    name: "Void Shard (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VOID_SHARD_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VOID_SHARD_(AUGMENT_0)",
    categories: ["Void Shard (Augment 0)", "ID_INTERNAL_POWER_VOID_SHARD_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Void Shard (Augment 1)"] = new RulesElement({
    name: "Void Shard (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VOID_SHARD_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VOID_SHARD_(AUGMENT_1)",
    categories: ["Void Shard (Augment 1)", "ID_INTERNAL_POWER_VOID_SHARD_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Void Shard Attack"] = new RulesElement({
    name: "Void Shard Attack",
    type: "Power",
    id: "ID_FMP_POWER_13465",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13465",
    categories: ["Void Shard Attack", "ID_FMP_POWER_13465", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Void Shard Attack (Augment 0)"] = new RulesElement({
    name: "Void Shard Attack (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VOID_SHARD_ATTACK_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VOID_SHARD_ATTACK_(AUGMENT_0)",
    categories: ["Void Shard Attack (Augment 0)", "ID_INTERNAL_POWER_VOID_SHARD_ATTACK_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Void Shard Attack (Augment 4)"] = new RulesElement({
    name: "Void Shard Attack (Augment 4)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VOID_SHARD_ATTACK_(AUGMENT_4)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_VOID_SHARD_ATTACK_(AUGMENT_4)",
    categories: ["Void Shard Attack (Augment 4)", "ID_INTERNAL_POWER_VOID_SHARD_ATTACK_(AUGMENT_4)"]
  });
  byID[te.id] = te;
  
  te = Power["Vulnerability Revealed"] = new RulesElement({
    name: "Vulnerability Revealed",
    type: "Power",
    id: "ID_FMP_POWER_13004",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13004",
    categories: ["Vulnerability Revealed", "ID_FMP_POWER_13004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Warded Summons"] = new RulesElement({
    name: "Warded Summons",
    type: "Power",
    id: "ID_FMP_POWER_13406",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13406",
    categories: ["Warded Summons", "ID_FMP_POWER_13406", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_758", "Master Summoner", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warning Premonition"] = new RulesElement({
    name: "Warning Premonition",
    type: "Power",
    id: "ID_FMP_POWER_13050",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13050",
    categories: ["Warning Premonition", "ID_FMP_POWER_13050", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Warping Landscape"] = new RulesElement({
    name: "Warping Landscape",
    type: "Power",
    id: "ID_FMP_POWER_13010",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13010",
    categories: ["Warping Landscape", "ID_FMP_POWER_13010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_735", "Awakened Visionary", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Fatigue"] = new RulesElement({
    name: "Wave of Fatigue",
    type: "Power",
    id: "ID_FMP_POWER_12935",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12935",
    categories: ["Wave of Fatigue", "ID_FMP_POWER_12935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Fatigue (Augment 0)"] = new RulesElement({
    name: "Wave of Fatigue (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WAVE_OF_FATIGUE_(AUGMENT_0)",
    categories: ["Wave of Fatigue (Augment 0)", "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Fatigue (Augment 1)"] = new RulesElement({
    name: "Wave of Fatigue (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WAVE_OF_FATIGUE_(AUGMENT_1)",
    categories: ["Wave of Fatigue (Augment 1)", "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Fatigue (Augment 2)"] = new RulesElement({
    name: "Wave of Fatigue (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WAVE_OF_FATIGUE_(AUGMENT_2)",
    categories: ["Wave of Fatigue (Augment 2)", "ID_INTERNAL_POWER_WAVE_OF_FATIGUE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Weight of the Anchor"] = new RulesElement({
    name: "Weight of the Anchor",
    type: "Power",
    id: "ID_FMP_POWER_13269",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13269",
    categories: ["Weight of the Anchor", "ID_FMP_POWER_13269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13270"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Weight of the Anchor [Movement Technique]"] = new RulesElement({
    name: "Weight of the Anchor [Movement Technique]",
    type: "Power",
    id: "ID_FMP_POWER_13270",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13270",
    categories: ["Weight of the Anchor [Movement Technique]", "ID_FMP_POWER_13270", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CATEGORY_60", "Full Discipline", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Savagery"] = new RulesElement({
    name: "Wild Savagery",
    type: "Power",
    id: "ID_FMP_POWER_13037",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13037",
    categories: ["Wild Savagery", "ID_FMP_POWER_13037", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13038"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wild Savagery Attack"] = new RulesElement({
    name: "Wild Savagery Attack",
    type: "Power",
    id: "ID_FMP_POWER_13038",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13038",
    categories: ["Wild Savagery Attack", "ID_FMP_POWER_13038", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Elevated Thought"] = new RulesElement({
    name: "Wings of Elevated Thought",
    type: "Power",
    id: "ID_FMP_POWER_13088",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13088",
    categories: ["Wings of Elevated Thought", "ID_FMP_POWER_13088", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Withered Technique"] = new RulesElement({
    name: "Withered Technique",
    type: "Power",
    id: "ID_FMP_POWER_12947",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12947",
    categories: ["Withered Technique", "ID_FMP_POWER_12947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Withered Technique (Augment 0)"] = new RulesElement({
    name: "Withered Technique (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WITHERED_TECHNIQUE_(AUGMENT_0)",
    categories: ["Withered Technique (Augment 0)", "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Withered Technique (Augment 1)"] = new RulesElement({
    name: "Withered Technique (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WITHERED_TECHNIQUE_(AUGMENT_1)",
    categories: ["Withered Technique (Augment 1)", "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["Withered Technique (Augment 2)"] = new RulesElement({
    name: "Withered Technique (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WITHERED_TECHNIQUE_(AUGMENT_2)",
    categories: ["Withered Technique (Augment 2)", "ID_INTERNAL_POWER_WITHERED_TECHNIQUE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["World-Slipping Advance"] = new RulesElement({
    name: "World-Slipping Advance",
    type: "Power",
    id: "ID_FMP_POWER_13028",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13028",
    categories: ["World-Slipping Advance", "ID_FMP_POWER_13028", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL", "Augmentable At-Will", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["World-Slipping Advance (Augment 0)"] = new RulesElement({
    name: "World-Slipping Advance (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_0)",
    categories: ["World-Slipping Advance (Augment 0)", "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["World-Slipping Advance (Augment 1)"] = new RulesElement({
    name: "World-Slipping Advance (Augment 1)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_1)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_1)",
    categories: ["World-Slipping Advance (Augment 1)", "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_1)"]
  });
  byID[te.id] = te;
  
  te = Power["World-Slipping Advance (Augment 2)"] = new RulesElement({
    name: "World-Slipping Advance (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_2)",
    categories: ["World-Slipping Advance (Augment 2)", "ID_INTERNAL_POWER_WORLD-SLIPPING_ADVANCE_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Yawning Portals"] = new RulesElement({
    name: "Yawning Portals",
    type: "Power",
    id: "ID_FMP_POWER_13009",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13009",
    categories: ["Yawning Portals", "ID_FMP_POWER_13009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_735", "Awakened Visionary", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Yawning Portals (Augment 0)"] = new RulesElement({
    name: "Yawning Portals (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_YAWNING_PORTALS_(AUGMENT_0)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_YAWNING_PORTALS_(AUGMENT_0)",
    categories: ["Yawning Portals (Augment 0)", "ID_INTERNAL_POWER_YAWNING_PORTALS_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Yawning Portals (Augment 2)"] = new RulesElement({
    name: "Yawning Portals (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_YAWNING_PORTALS_(AUGMENT_2)",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=OWER_YAWNING_PORTALS_(AUGMENT_2)",
    categories: ["Yawning Portals (Augment 2)", "ID_INTERNAL_POWER_YAWNING_PORTALS_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  
})(this);
