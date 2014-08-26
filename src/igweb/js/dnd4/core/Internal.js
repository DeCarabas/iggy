define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Alchemical Items"] = new engine.RulesElement({
    name: "Alchemical Items",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ALCHEMICAL_ITEMS",
    source: "Core",
    categories: ["Alchemical Items", "ID_INTERNAL_INTERNAL_ALCHEMICAL_ITEMS"]
  });
  byID[te.id] = te;
  
  te = Internal["All Domains"] = new engine.RulesElement({
    name: "All Domains",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ALL_DOMAINS",
    source: "Core",
    categories: ["All Domains", "ID_INTERNAL_INTERNAL_ALL_DOMAINS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_6"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_15"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_16"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_17"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_18"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_19"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_20"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_21"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_24"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_25"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_26"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_27"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_28"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_29"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_30"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_31"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_33"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_34"]);
    }
  });
  byID[te.id] = te;
  
  te = Internal["Ambidextrous"] = new engine.RulesElement({
    name: "Ambidextrous",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_AMBIDEXTROUS",
    source: "Core",
    categories: ["Ambidextrous", "ID_INTERNAL_INTERNAL_AMBIDEXTROUS"]
  });
  byID[te.id] = te;
  
  te = Internal["Augment Powers"] = new engine.RulesElement({
    name: "Augment Powers",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_AUGMENT_POWERS",
    source: "Core",
    categories: ["Augment Powers", "ID_INTERNAL_INTERNAL_AUGMENT_POWERS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_NO_ENCOUNTER_POWERS"]);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 1);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 2);
      model.statadd("Power Points", 2);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("3")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Internal["Background Benefit"] = new engine.RulesElement({
    name: "Background Benefit",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT",
    source: "Core",
    categories: ["Background Benefit", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT"],
    rules: function(model) {
      model.select('Background Choice', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory("Background Benefit"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Internal["Bloodline"] = new engine.RulesElement({
    name: "Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_BLOODLINE",
    source: "Core",
    categories: ["Bloodline", "ID_INTERNAL_INTERNAL_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Bogtangle Human Bloodline"] = new engine.RulesElement({
    name: "Bogtangle Human Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE",
    source: "Core",
    categories: ["Bogtangle Human Bloodline", "ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Can Use Components"] = new engine.RulesElement({
    name: "Can Use Components",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_CAN_USE_COMPONENTS",
    source: "Core",
    categories: ["Can Use Components", "ID_INTERNAL_INTERNAL_CAN_USE_COMPONENTS"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Arcana domain"] = new engine.RulesElement({
    name: "Deity of the Arcana domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_ARCANA_DOMAIN",
    source: "Core",
    categories: ["Deity of the Arcana domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_ARCANA_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Change domain"] = new engine.RulesElement({
    name: "Deity of the Change domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CHANGE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Change domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CHANGE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Civilization domain"] = new engine.RulesElement({
    name: "Deity of the Civilization domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CIVILIZATION_DOMAIN",
    source: "Core",
    categories: ["Deity of the Civilization domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CIVILIZATION_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Creation domain"] = new engine.RulesElement({
    name: "Deity of the Creation domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CREATION_DOMAIN",
    source: "Core",
    categories: ["Deity of the Creation domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_CREATION_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Darkness domain"] = new engine.RulesElement({
    name: "Deity of the Darkness domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DARKNESS_DOMAIN",
    source: "Core",
    categories: ["Deity of the Darkness domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DARKNESS_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Death domain"] = new engine.RulesElement({
    name: "Deity of the Death domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DEATH_DOMAIN",
    source: "Core",
    categories: ["Deity of the Death domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DEATH_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Destruction domain"] = new engine.RulesElement({
    name: "Deity of the Destruction domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DESTRUCTION_DOMAIN",
    source: "Core",
    categories: ["Deity of the Destruction domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_DESTRUCTION_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Earth domain"] = new engine.RulesElement({
    name: "Deity of the Earth domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_EARTH_DOMAIN",
    source: "Core",
    categories: ["Deity of the Earth domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_EARTH_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Fate domain"] = new engine.RulesElement({
    name: "Deity of the Fate domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_FATE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Fate domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_FATE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Freedom domain"] = new engine.RulesElement({
    name: "Deity of the Freedom domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_FREEDOM_DOMAIN",
    source: "Core",
    categories: ["Deity of the Freedom domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_FREEDOM_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Hope domain"] = new engine.RulesElement({
    name: "Deity of the Hope domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_HOPE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Hope domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_HOPE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Justice domain"] = new engine.RulesElement({
    name: "Deity of the Justice domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_JUSTICE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Justice domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_JUSTICE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Knowledge domain"] = new engine.RulesElement({
    name: "Deity of the Knowledge domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_KNOWLEDGE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Knowledge domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_KNOWLEDGE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Life domain"] = new engine.RulesElement({
    name: "Deity of the Life domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LIFE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Life domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LIFE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Love domain"] = new engine.RulesElement({
    name: "Deity of the Love domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LOVE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Love domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LOVE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Luck domain"] = new engine.RulesElement({
    name: "Deity of the Luck domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LUCK_DOMAIN",
    source: "Core",
    categories: ["Deity of the Luck domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_LUCK_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Madness domain"] = new engine.RulesElement({
    name: "Deity of the Madness domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_MADNESS_DOMAIN",
    source: "Core",
    categories: ["Deity of the Madness domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_MADNESS_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Moon domain"] = new engine.RulesElement({
    name: "Deity of the Moon domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_MOON_DOMAIN",
    source: "Core",
    categories: ["Deity of the Moon domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_MOON_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Poison domain"] = new engine.RulesElement({
    name: "Deity of the Poison domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_POISON_DOMAIN",
    source: "Core",
    categories: ["Deity of the Poison domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_POISON_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Protection domain"] = new engine.RulesElement({
    name: "Deity of the Protection domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_PROTECTION_DOMAIN",
    source: "Core",
    categories: ["Deity of the Protection domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_PROTECTION_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Sea domain"] = new engine.RulesElement({
    name: "Deity of the Sea domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SEA_DOMAIN",
    source: "Core",
    categories: ["Deity of the Sea domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SEA_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Skill domain"] = new engine.RulesElement({
    name: "Deity of the Skill domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SKILL_DOMAIN",
    source: "Core",
    categories: ["Deity of the Skill domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SKILL_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Storm domain"] = new engine.RulesElement({
    name: "Deity of the Storm domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STORM_DOMAIN",
    source: "Core",
    categories: ["Deity of the Storm domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STORM_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Strength domain"] = new engine.RulesElement({
    name: "Deity of the Strength domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STRENGTH_DOMAIN",
    source: "Core",
    categories: ["Deity of the Strength domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STRENGTH_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Strife domain"] = new engine.RulesElement({
    name: "Deity of the Strife domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STRIFE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Strife domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_STRIFE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Sun domain"] = new engine.RulesElement({
    name: "Deity of the Sun domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SUN_DOMAIN",
    source: "Core",
    categories: ["Deity of the Sun domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_SUN_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Torment domain"] = new engine.RulesElement({
    name: "Deity of the Torment domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TORMENT_DOMAIN",
    source: "Core",
    categories: ["Deity of the Torment domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TORMENT_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Trickery domain"] = new engine.RulesElement({
    name: "Deity of the Trickery domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TRICKERY_DOMAIN",
    source: "Core",
    categories: ["Deity of the Trickery domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TRICKERY_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Tyranny domain"] = new engine.RulesElement({
    name: "Deity of the Tyranny domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TYRANNY_DOMAIN",
    source: "Core",
    categories: ["Deity of the Tyranny domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_TYRANNY_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Undeath domain"] = new engine.RulesElement({
    name: "Deity of the Undeath domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_UNDEATH_DOMAIN",
    source: "Core",
    categories: ["Deity of the Undeath domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_UNDEATH_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Vengeance domain"] = new engine.RulesElement({
    name: "Deity of the Vengeance domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_VENGEANCE_DOMAIN",
    source: "Core",
    categories: ["Deity of the Vengeance domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_VENGEANCE_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the War domain"] = new engine.RulesElement({
    name: "Deity of the War domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WAR_DOMAIN",
    source: "Core",
    categories: ["Deity of the War domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WAR_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Wilderness domain"] = new engine.RulesElement({
    name: "Deity of the Wilderness domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WILDERNESS_DOMAIN",
    source: "Core",
    categories: ["Deity of the Wilderness domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WILDERNESS_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deity of the Winter domain"] = new engine.RulesElement({
    name: "Deity of the Winter domain",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WINTER_DOMAIN",
    source: "Core",
    categories: ["Deity of the Winter domain", "ID_INTERNAL_INTERNAL_DEITY_OF_THE_WINTER_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Internal["Deva Bloodline"] = new engine.RulesElement({
    name: "Deva Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DEVA_BLOODLINE",
    source: "Core",
    categories: ["Deva Bloodline", "ID_INTERNAL_INTERNAL_DEVA_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Dwarven Bloodline"] = new engine.RulesElement({
    name: "Dwarven Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE",
    source: "Core",
    categories: ["Dwarven Bloodline", "ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Eladrin Bloodline"] = new engine.RulesElement({
    name: "Eladrin Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ELADRIN_BLOODLINE",
    source: "Core",
    categories: ["Eladrin Bloodline", "ID_INTERNAL_INTERNAL_ELADRIN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Elan Bloodline"] = new engine.RulesElement({
    name: "Elan Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE",
    source: "Core",
    categories: ["Elan Bloodline", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Elf Bloodline"] = new engine.RulesElement({
    name: "Elf Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ELF_BLOODLINE",
    source: "Core",
    categories: ["Elf Bloodline", "ID_INTERNAL_INTERNAL_ELF_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Essentials Class"] = new engine.RulesElement({
    name: "Essentials Class",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ESSENTIALS_CLASS",
    source: "Core",
    categories: ["Essentials Class", "ID_INTERNAL_INTERNAL_ESSENTIALS_CLASS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_NO_ENCOUNTER_POWERS"]);
    }
  });
  byID[te.id] = te;
  
  te = Internal["Flurry of Blows"] = new engine.RulesElement({
    name: "Flurry of Blows",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_FLURRY_OF_BLOWS",
    source: "Core",
    categories: ["Flurry of Blows", "ID_INTERNAL_INTERNAL_FLURRY_OF_BLOWS"]
  });
  byID[te.id] = te;
  
  te = Internal["Foamgather Human Bloodline"] = new engine.RulesElement({
    name: "Foamgather Human Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE",
    source: "Core",
    categories: ["Foamgather Human Bloodline", "ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Forgeborn Bloodline"] = new engine.RulesElement({
    name: "Forgeborn Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_FORGEBORN_BLOODLINE",
    source: "Core",
    categories: ["Forgeborn Bloodline", "ID_INTERNAL_INTERNAL_FORGEBORN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Foulborn Bloodline"] = new engine.RulesElement({
    name: "Foulborn Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE",
    source: "Core",
    categories: ["Foulborn Bloodline", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Inherent Bonuses"] = new engine.RulesElement({
    name: "Inherent Bonuses",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_INHERENT_BONUSES",
    source: "Core",
    categories: ["Inherent Bonuses", "ID_INTERNAL_INTERNAL_INHERENT_BONUSES"],
    rules: function(model) {
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("Inherent Power Bonus", 1);
      model.statadd("attack rolls", function() { return model.stat("Inherent Power Bonus"); }, "Enhancement");
      model.statadd("damage rolls", function() { return model.stat("Inherent Power Bonus"); }, "Enhancement");
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("Inherent Defense Bonus", 1);
      model.statadd("AC", function() { return model.stat("Inherent Defense Bonus"); }, "Enhancement");
      model.statadd("Fortitude Defense", function() { return model.stat("Inherent Defense Bonus"); }, "Enhancement");
      model.statadd("Reflex Defense", function() { return model.stat("Inherent Defense Bonus"); }, "Enhancement");
      model.statadd("Will Defense", function() { return model.stat("Inherent Defense Bonus"); }, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Internal["Ki Focus User"] = new engine.RulesElement({
    name: "Ki Focus User",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_KI_FOCUS_USER",
    source: "Core",
    categories: ["Ki Focus User", "ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]
  });
  byID[te.id] = te;
  
  te = Internal["Matched Warlock Pact"] = new engine.RulesElement({
    name: "Matched Warlock Pact",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT",
    source: "Core",
    categories: ["Matched Warlock Pact", "ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]
  });
  byID[te.id] = te;
  
  te = Internal["No Encounter Powers"] = new engine.RulesElement({
    name: "No Encounter Powers",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_NO_ENCOUNTER_POWERS",
    source: "Core",
    categories: ["No Encounter Powers", "ID_INTERNAL_INTERNAL_NO_ENCOUNTER_POWERS"]
  });
  byID[te.id] = te;
  
  te = Internal["One Size Larger"] = new engine.RulesElement({
    name: "One Size Larger",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ONE_SIZE_LARGER",
    source: "Core",
    categories: ["One Size Larger", "ID_INTERNAL_INTERNAL_ONE_SIZE_LARGER"]
  });
  byID[te.id] = te;
  
  te = Internal["Oversized"] = new engine.RulesElement({
    name: "Oversized",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_OVERSIZED",
    source: "Core",
    categories: ["Oversized", "ID_INTERNAL_INTERNAL_OVERSIZED"]
  });
  byID[te.id] = te;
  
  te = Internal["Polytheist"] = new engine.RulesElement({
    name: "Polytheist",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_POLYTHEIST",
    source: "Core",
    categories: ["Polytheist", "ID_INTERNAL_INTERNAL_POLYTHEIST"]
  });
  byID[te.id] = te;
  
  te = Internal["Psionic Augmentation (Hybrid)"] = new engine.RulesElement({
    name: "Psionic Augmentation (Hybrid)",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_(HYBRID)",
    source: "Core",
    categories: ["Psionic Augmentation (Hybrid)", "ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_(HYBRID)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_NO_ENCOUNTER_POWERS"]);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2340"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS"]);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("3")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && (element.hasCategory("encounter") || element.hasCategory("Augmentable At-Will")) && element.hasCategory("7")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Internal["Psionic Augmentation Decider"] = new engine.RulesElement({
    name: "Psionic Augmentation Decider",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_DECIDER",
    source: "Core",
    categories: ["Psionic Augmentation Decider", "ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_DECIDER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1812"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_(HYBRID)"]);
    }
  });
  byID[te.id] = te;
  
  te = Internal["Psionic First Class"] = new engine.RulesElement({
    name: "Psionic First Class",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS",
    source: "Core",
    categories: ["Psionic First Class", "ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]
  });
  byID[te.id] = te;
  
  te = Internal["Psionic Second Class"] = new engine.RulesElement({
    name: "Psionic Second Class",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS",
    source: "Core",
    categories: ["Psionic Second Class", "ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]
  });
  byID[te.id] = te;
  
  te = Internal["Regional Benefit"] = new engine.RulesElement({
    name: "Regional Benefit",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_REGIONAL_BENEFIT",
    source: "Core",
    categories: ["Regional Benefit", "ID_INTERNAL_INTERNAL_REGIONAL_BENEFIT"]
  });
  byID[te.id] = te;
  
  te = Internal["Shadar-Kai Bloodline"] = new engine.RulesElement({
    name: "Shadar-Kai Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_SHADAR-KAI_BLOODLINE",
    source: "Core",
    categories: ["Shadar-Kai Bloodline", "ID_INTERNAL_INTERNAL_SHADAR-KAI_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Sunspray Human Bloodline"] = new engine.RulesElement({
    name: "Sunspray Human Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE",
    source: "Core",
    categories: ["Sunspray Human Bloodline", "ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Tiefling Bloodline"] = new engine.RulesElement({
    name: "Tiefling Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE",
    source: "Core",
    categories: ["Tiefling Bloodline", "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Unlimited Multiclass"] = new engine.RulesElement({
    name: "Unlimited Multiclass",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_UNLIMITED_MULTICLASS",
    source: "Core",
    categories: ["Unlimited Multiclass", "ID_INTERNAL_INTERNAL_UNLIMITED_MULTICLASS"]
  });
  byID[te.id] = te;
  
  te = Internal["Vampire Bloodline"] = new engine.RulesElement({
    name: "Vampire Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE",
    source: "Core",
    categories: ["Vampire Bloodline", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Vistani Bloodline"] = new engine.RulesElement({
    name: "Vistani Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE",
    source: "Core",
    categories: ["Vistani Bloodline", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Winterkin Bloodline"] = new engine.RulesElement({
    name: "Winterkin Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_WINTERKIN_BLOODLINE",
    source: "Core",
    categories: ["Winterkin Bloodline", "ID_INTERNAL_INTERNAL_WINTERKIN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  te = Internal["Wolfstone Human Bloodline"] = new engine.RulesElement({
    name: "Wolfstone Human Bloodline",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE",
    source: "Core",
    categories: ["Wolfstone Human Bloodline", "ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
