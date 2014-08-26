define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Acolyte of Divine Secrets"] = new engine.RulesElement({
    name: "Acolyte of Divine Secrets",
    type: "Feat",
    id: "ID_FMP_FEAT_667",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=667",
    categories: ["Acolyte of Divine Secrets", "ID_FMP_FEAT_667", "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER", "Multiclass Invoker", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_127") && element.hasCategory("1") && element.hasCategory("at-will")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_INVOKER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_INVOKER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Advantage of Cunning"] = new engine.RulesElement({
    name: "Advantage of Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_469",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=469",
    categories: ["Advantage of Cunning", "ID_FMP_FEAT_469"]
  });
  byID[te.id] = te;
  
  te = Feat["Agile Opportunist"] = new engine.RulesElement({
    name: "Agile Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_536",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=536",
    categories: ["Agile Opportunist", "ID_FMP_FEAT_536"]
  });
  byID[te.id] = te;
  
  te = Feat["Ancient Stone"] = new engine.RulesElement({
    name: "Ancient Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_1051",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1051",
    categories: ["Ancient Stone", "ID_FMP_FEAT_1051"]
  });
  byID[te.id] = te;
  
  te = Feat["Anger Unleashed"] = new engine.RulesElement({
    name: "Anger Unleashed",
    type: "Feat",
    id: "ID_FMP_FEAT_997",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=997",
    categories: ["Anger Unleashed", "ID_FMP_FEAT_997"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Flexibility"] = new engine.RulesElement({
    name: "Arcane Flexibility",
    type: "Feat",
    id: "ID_FMP_FEAT_1034",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1034",
    categories: ["Arcane Flexibility", "ID_FMP_FEAT_1034"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Prodigy"] = new engine.RulesElement({
    name: "Arcane Prodigy",
    type: "Feat",
    id: "ID_FMP_FEAT_669",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=669",
    categories: ["Arcane Prodigy", "ID_FMP_FEAT_669", "ID_INTERNAL_CATEGORY_MULTICLASS_SORCERER", "Multiclass Sorcerer", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.statadd("Arcane Prodigy", 1);
      model.statadd("Arcane Prodigy", 1);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SORCERER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SORCERER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Spellfury"] = new engine.RulesElement({
    name: "Arcane Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_998",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=998",
    categories: ["Arcane Spellfury", "ID_FMP_FEAT_998"]
  });
  byID[te.id] = te;
  
  te = Feat["Ascendant Lineage"] = new engine.RulesElement({
    name: "Ascendant Lineage",
    type: "Feat",
    id: "ID_FMP_FEAT_1035",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1035",
    categories: ["Ascendant Lineage", "ID_FMP_FEAT_1035"]
  });
  byID[te.id] = te;
  
  te = Feat["Astral Renewal"] = new engine.RulesElement({
    name: "Astral Renewal",
    type: "Feat",
    id: "ID_FMP_FEAT_1036",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1036",
    categories: ["Astral Renewal", "ID_FMP_FEAT_1036"]
  });
  byID[te.id] = te;
  
  te = Feat["Auspicious Lineage"] = new engine.RulesElement({
    name: "Auspicious Lineage",
    type: "Feat",
    id: "ID_FMP_FEAT_999",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=999",
    categories: ["Auspicious Lineage", "ID_FMP_FEAT_999"]
  });
  byID[te.id] = te;
  
  te = Feat["Bardic Dilettante"] = new engine.RulesElement({
    name: "Bardic Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_665",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=665",
    categories: ["Bardic Dilettante", "ID_FMP_FEAT_665", "ID_INTERNAL_CATEGORY_MULTICLASS_BARD", "Multiclass Bard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Bard Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_2339"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BARD_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bardic Knowledge"] = new engine.RulesElement({
    name: "Bardic Knowledge",
    type: "Feat",
    id: "ID_FMP_FEAT_441",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=441",
    categories: ["Bardic Knowledge", "ID_FMP_FEAT_441"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
      model.statadd("Dungeoneering Misc", 2, "Feat");
      model.statadd("History Misc", 2, "Feat");
      model.statadd("Nature Misc", 2, "Feat");
      model.statadd("Religion Misc", 2, "Feat");
      model.statadd("Streetwise Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beasthide Shifting"] = new engine.RulesElement({
    name: "Beasthide Shifting",
    type: "Feat",
    id: "ID_FMP_FEAT_1037",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1037",
    categories: ["Beasthide Shifting", "ID_FMP_FEAT_1037"]
  });
  byID[te.id] = te;
  
  te = Feat["Berserker's Fury"] = new engine.RulesElement({
    name: "Berserker's Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_664",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=664",
    categories: ["Berserker's Fury", "ID_FMP_FEAT_664", "ID_INTERNAL_CATEGORY_MULTICLASS_BARBARIAN", "Multiclass Barbarian", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Barbarian Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARBARIAN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blurring Claws"] = new engine.RulesElement({
    name: "Blurring Claws",
    type: "Feat",
    id: "ID_FMP_FEAT_1000",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1000",
    categories: ["Blurring Claws", "ID_FMP_FEAT_1000"]
  });
  byID[te.id] = te;
  
  te = Feat["Bow Mastery"] = new engine.RulesElement({
    name: "Bow Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_350",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=350",
    categories: ["Bow Mastery", "ID_FMP_FEAT_350"]
  });
  byID[te.id] = te;
  
  te = Feat["Burst of Savagery"] = new engine.RulesElement({
    name: "Burst of Savagery",
    type: "Feat",
    id: "ID_FMP_FEAT_1052",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1052",
    categories: ["Burst of Savagery", "ID_FMP_FEAT_1052"]
  });
  byID[te.id] = te;
  
  te = Feat["Charging Rampage"] = new engine.RulesElement({
    name: "Charging Rampage",
    type: "Feat",
    id: "ID_FMP_FEAT_467",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=467",
    categories: ["Charging Rampage", "ID_FMP_FEAT_467"]
  });
  byID[te.id] = te;
  
  te = Feat["Cliffwalk Shiffting"] = new engine.RulesElement({
    name: "Cliffwalk Shiffting",
    type: "Feat",
    id: "ID_FMP_FEAT_1038",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1038",
    categories: ["Cliffwalk Shiffting", "ID_FMP_FEAT_1038"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Medic"] = new engine.RulesElement({
    name: "Combat Medic",
    type: "Feat",
    id: "ID_FMP_FEAT_511",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=511",
    categories: ["Combat Medic", "ID_FMP_FEAT_511"],
    rules: function(model) {
      model.statadd("Heal Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Coordinated Explosion"] = new engine.RulesElement({
    name: "Coordinated Explosion",
    type: "Feat",
    id: "ID_FMP_FEAT_509",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=509",
    categories: ["Coordinated Explosion", "ID_FMP_FEAT_509"]
  });
  byID[te.id] = te;
  
  te = Feat["Crushing Earthstrength"] = new engine.RulesElement({
    name: "Crushing Earthstrength",
    type: "Feat",
    id: "ID_FMP_FEAT_583",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=583",
    categories: ["Crushing Earthstrength", "ID_FMP_FEAT_583"]
  });
  byID[te.id] = te;
  
  te = Feat["Deadly Rage"] = new engine.RulesElement({
    name: "Deadly Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_593",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=593",
    categories: ["Deadly Rage", "ID_FMP_FEAT_593"],
    rules: function(model) {
      model.statadd("Deadly Rage Bonus", 1);
      model.statadd("Deadly Rage Bonus", 1);
      model.statadd("Deadly Rage Bonus", 1);
      model.statadd("damage rolls", function() { /* while raging */ return model.stat("Deadly Rage bonus"); });
      model.statadd("Deadly Rage", 1);
      model.statadd("Deadly Rage", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Defender of the Wild"] = new engine.RulesElement({
    name: "Defender of the Wild",
    type: "Feat",
    id: "ID_FMP_FEAT_671",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=671",
    categories: ["Defender of the Wild", "ID_FMP_FEAT_671", "ID_INTERNAL_CATEGORY_MULTICLASS_WARDEN", "Multiclass Warden", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Warden Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARDEN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Disciple of Divine Wrath"] = new engine.RulesElement({
    name: "Disciple of Divine Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_670",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=670",
    categories: ["Disciple of Divine Wrath", "ID_FMP_FEAT_670", "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER", "Multiclass Avenger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(model.elements.id["ID_FMP_POWER_3069"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_AVENGER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_AVENGER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Disciplined Wild Soul"] = new engine.RulesElement({
    name: "Disciplined Wild Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1001",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1001",
    categories: ["Disciplined Wild Soul", "ID_FMP_FEAT_1001"]
  });
  byID[te.id] = te;
  
  te = Feat["Distant Advantage"] = new engine.RulesElement({
    name: "Distant Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_1002",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1002",
    categories: ["Distant Advantage", "ID_FMP_FEAT_1002"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Spellfury"] = new engine.RulesElement({
    name: "Draconic Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_576",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=576",
    categories: ["Draconic Spellfury", "ID_FMP_FEAT_576"]
  });
  byID[te.id] = te;
  
  te = Feat["Earthstrength Resolve"] = new engine.RulesElement({
    name: "Earthstrength Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_1039",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1039",
    categories: ["Earthstrength Resolve", "ID_FMP_FEAT_1039"]
  });
  byID[te.id] = te;
  
  te = Feat["Echoes of Thunder"] = new engine.RulesElement({
    name: "Echoes of Thunder",
    type: "Feat",
    id: "ID_FMP_FEAT_521",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=521",
    categories: ["Echoes of Thunder", "ID_FMP_FEAT_521"],
    rules: function(model) {
      model.statadd("Echoes of Thunder", 1);
      model.statadd("Echoes of Thunder", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Enduring Font"] = new engine.RulesElement({
    name: "Enduring Font",
    type: "Feat",
    id: "ID_FMP_FEAT_592",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=592",
    categories: ["Enduring Font", "ID_FMP_FEAT_592"]
  });
  byID[te.id] = te;
  
  te = Feat["Enduring Rage"] = new engine.RulesElement({
    name: "Enduring Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_468",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=468",
    categories: ["Enduring Rage", "ID_FMP_FEAT_468"]
  });
  byID[te.id] = te;
  
  te = Feat["Enhanced Font of Life"] = new engine.RulesElement({
    name: "Enhanced Font of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_582",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=582",
    categories: ["Enhanced Font of Life", "ID_FMP_FEAT_582"]
  });
  byID[te.id] = te;
  
  te = Feat["Enraged Boar Form"] = new engine.RulesElement({
    name: "Enraged Boar Form",
    type: "Feat",
    id: "ID_FMP_FEAT_552",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=552",
    categories: ["Enraged Boar Form", "ID_FMP_FEAT_552"]
  });
  byID[te.id] = te;
  
  te = Feat["Epic Fortitude"] = new engine.RulesElement({
    name: "Epic Fortitude",
    type: "Feat",
    id: "ID_FMP_FEAT_537",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=537",
    categories: ["Epic Fortitude", "ID_FMP_FEAT_537"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Epic Reflexes"] = new engine.RulesElement({
    name: "Epic Reflexes",
    type: "Feat",
    id: "ID_FMP_FEAT_538",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=538",
    categories: ["Epic Reflexes", "ID_FMP_FEAT_538"],
    rules: function(model) {
      model.statadd("Reflex Defense", 4);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Epic Will"] = new engine.RulesElement({
    name: "Epic Will",
    type: "Feat",
    id: "ID_FMP_FEAT_539",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=539",
    categories: ["Epic Will", "ID_FMP_FEAT_539"],
    rules: function(model) {
      model.statadd("Will Defense", 4);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Expert Ritualist"] = new engine.RulesElement({
    name: "Expert Ritualist",
    type: "Feat",
    id: "ID_FMP_FEAT_534",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=534",
    categories: ["Expert Ritualist", "ID_FMP_FEAT_534"]
  });
  byID[te.id] = te;
  
  te = Feat["Fade Ally"] = new engine.RulesElement({
    name: "Fade Ally",
    type: "Feat",
    id: "ID_FMP_FEAT_1040",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1040",
    categories: ["Fade Ally", "ID_FMP_FEAT_1040"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ferocious Critical"] = new engine.RulesElement({
    name: "Ferocious Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_1053",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1053",
    categories: ["Ferocious Critical", "ID_FMP_FEAT_1053"]
  });
  byID[te.id] = te;
  
  te = Feat["Ferocious Tiger Form"] = new engine.RulesElement({
    name: "Ferocious Tiger Form",
    type: "Feat",
    id: "ID_FMP_FEAT_555",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=555",
    categories: ["Ferocious Tiger Form", "ID_FMP_FEAT_555"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Trickster"] = new engine.RulesElement({
    name: "Fey Trickster",
    type: "Feat",
    id: "ID_FMP_FEAT_1003",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1003",
    categories: ["Fey Trickster", "ID_FMP_FEAT_1003"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1227"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_1930"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Goliath Greatweapon Prowess"] = new engine.RulesElement({
    name: "Goliath Greatweapon Prowess",
    type: "Feat",
    id: "ID_FMP_FEAT_1004",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1004",
    categories: ["Goliath Greatweapon Prowess", "ID_FMP_FEAT_1004"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_GOLIATH_GREATWEAPON_PROWESS"]);
      model.statadd("Goliath Greatweapon Prowess", 1);
      model.statadd("Goliath Greatweapon Prowess", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gorebrute Charge"] = new engine.RulesElement({
    name: "Gorebrute Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_1005",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1005",
    categories: ["Gorebrute Charge", "ID_FMP_FEAT_1005"]
  });
  byID[te.id] = te;
  
  te = Feat["Group Stealth"] = new engine.RulesElement({
    name: "Group Stealth",
    type: "Feat",
    id: "ID_FMP_FEAT_1006",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1006",
    categories: ["Group Stealth", "ID_FMP_FEAT_1006"]
  });
  byID[te.id] = te;
  
  te = Feat["Guaranteed Retribution"] = new engine.RulesElement({
    name: "Guaranteed Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_1007",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1007",
    categories: ["Guaranteed Retribution", "ID_FMP_FEAT_1007"]
  });
  byID[te.id] = te;
  
  te = Feat["Guardian Spirit"] = new engine.RulesElement({
    name: "Guardian Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1041",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1041",
    categories: ["Guardian Spirit", "ID_FMP_FEAT_1041"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Wolf Form"] = new engine.RulesElement({
    name: "Hunting Wolf Form",
    type: "Feat",
    id: "ID_FMP_FEAT_554",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=554",
    categories: ["Hunting Wolf Form", "ID_FMP_FEAT_554"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* while you are in beast form */ return 5; }, "Feat");
      model.statadd("Speed", function() { /* while you are in beast form */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise"] = new engine.RulesElement({
    name: "Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_734",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=734",
    categories: ["Implement Expertise", "ID_FMP_FEAT_734"]
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Axe)"] = new engine.RulesElement({
    name: "Implement Expertise (Axe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(AXE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(AXE)",
    categories: ["Implement Expertise (Axe)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(AXE)"],
    rules: function(model) {
      model.statadd("Axe implement group:attack", 1, "Feat");
      model.statadd("Axe implement group:attack", 2, "Feat");
      model.statadd("Axe implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Blowgun)"] = new engine.RulesElement({
    name: "Implement Expertise (Blowgun)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(BLOWGUN)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(BLOWGUN)",
    categories: ["Implement Expertise (Blowgun)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(BLOWGUN)"],
    rules: function(model) {
      model.statadd("Blowgun implement group:attack", 1, "Feat");
      model.statadd("Blowgun implement group:attack", 2, "Feat");
      model.statadd("Blowgun implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Bow)"] = new engine.RulesElement({
    name: "Implement Expertise (Bow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(BOW)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(BOW)",
    categories: ["Implement Expertise (Bow)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(BOW)"],
    rules: function(model) {
      model.statadd("Bow implement group:attack", 1, "Feat");
      model.statadd("Bow implement group:attack", 2, "Feat");
      model.statadd("Bow implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Crossbow)"] = new engine.RulesElement({
    name: "Implement Expertise (Crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(CROSSBOW)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(CROSSBOW)",
    categories: ["Implement Expertise (Crossbow)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(CROSSBOW)"],
    rules: function(model) {
      model.statadd("Crossbow implement group:attack", 1, "Feat");
      model.statadd("Crossbow implement group:attack", 2, "Feat");
      model.statadd("Crossbow implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Flail)"] = new engine.RulesElement({
    name: "Implement Expertise (Flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(FLAIL)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(FLAIL)",
    categories: ["Implement Expertise (Flail)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(FLAIL)"],
    rules: function(model) {
      model.statadd("Flail implement group:attack", 1, "Feat");
      model.statadd("Flail implement group:attack", 2, "Feat");
      model.statadd("Flail implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Garrote)"] = new engine.RulesElement({
    name: "Implement Expertise (Garrote)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(GARROTE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(GARROTE)",
    categories: ["Implement Expertise (Garrote)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(GARROTE)"],
    rules: function(model) {
      model.statadd("Garrote implement group:attack", 1, "Feat");
      model.statadd("Garrote implement group:attack", 2, "Feat");
      model.statadd("Garrote implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Hammer)"] = new engine.RulesElement({
    name: "Implement Expertise (Hammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HAMMER)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(HAMMER)",
    categories: ["Implement Expertise (Hammer)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HAMMER)"],
    rules: function(model) {
      model.statadd("Hammer implement group:attack", 1, "Feat");
      model.statadd("Hammer implement group:attack", 2, "Feat");
      model.statadd("Hammer implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Heavy Blade)"] = new engine.RulesElement({
    name: "Implement Expertise (Heavy Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HEAVY_BLADE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(HEAVY_BLADE)",
    categories: ["Implement Expertise (Heavy Blade)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HEAVY_BLADE)"],
    rules: function(model) {
      model.statadd("Heavy Blade implement group:attack", 1, "Feat");
      model.statadd("Heavy Blade implement group:attack", 2, "Feat");
      model.statadd("Heavy Blade implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Holy Symbol)"] = new engine.RulesElement({
    name: "Implement Expertise (Holy Symbol)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HOLY_SYMBOL)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(HOLY_SYMBOL)",
    categories: ["Implement Expertise (Holy Symbol)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(HOLY_SYMBOL)"],
    rules: function(model) {
      model.statadd("holy symbol implement,implement:attack", 1, "Feat");
      model.statadd("holy symbol implement,implement:attack", 2, "Feat");
      model.statadd("holy symbol implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Instrument)"] = new engine.RulesElement({
    name: "Implement Expertise (Instrument)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(INSTRUMENT)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(INSTRUMENT)",
    categories: ["Implement Expertise (Instrument)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(INSTRUMENT)"],
    rules: function(model) {
      model.statadd("instrument implement,implement:attack", 1, "Feat");
      model.statadd("instrument implement,implement:attack", 2, "Feat");
      model.statadd("instrument implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Ki Focuses)"] = new engine.RulesElement({
    name: "Implement Expertise (Ki Focuses)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(KI_FOCUSES)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(KI_FOCUSES)",
    categories: ["Implement Expertise (Ki Focuses)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(KI_FOCUSES)"],
    rules: function(model) {
      model.statadd("ki focuses implement,implement:attack", 1, "Feat");
      model.statadd("ki focuses implement,implement:attack", 2, "Feat");
      model.statadd("ki focuses implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Light Blade)"] = new engine.RulesElement({
    name: "Implement Expertise (Light Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(LIGHT_BLADE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(LIGHT_BLADE)",
    categories: ["Implement Expertise (Light Blade)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(LIGHT_BLADE)"],
    rules: function(model) {
      model.statadd("Light Blade implement group:attack", 1, "Feat");
      model.statadd("Light Blade implement group:attack", 2, "Feat");
      model.statadd("Light Blade implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Mace)"] = new engine.RulesElement({
    name: "Implement Expertise (Mace)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(MACE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(MACE)",
    categories: ["Implement Expertise (Mace)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(MACE)"],
    rules: function(model) {
      model.statadd("Mace implement group:attack", 1, "Feat");
      model.statadd("Mace implement group:attack", 2, "Feat");
      model.statadd("Mace implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Orb)"] = new engine.RulesElement({
    name: "Implement Expertise (Orb)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(ORB)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(ORB)",
    categories: ["Implement Expertise (Orb)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(ORB)"],
    rules: function(model) {
      model.statadd("orb implement,implement:attack", 1, "Feat");
      model.statadd("orb implement,implement:attack", 2, "Feat");
      model.statadd("orb implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Pick)"] = new engine.RulesElement({
    name: "Implement Expertise (Pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(PICK)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(PICK)",
    categories: ["Implement Expertise (Pick)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(PICK)"],
    rules: function(model) {
      model.statadd("Pick implement group:attack", 1, "Feat");
      model.statadd("Pick implement group:attack", 2, "Feat");
      model.statadd("Pick implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Polearm)"] = new engine.RulesElement({
    name: "Implement Expertise (Polearm)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(POLEARM)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(POLEARM)",
    categories: ["Implement Expertise (Polearm)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(POLEARM)"],
    rules: function(model) {
      model.statadd("Polearm implement group:attack", 1, "Feat");
      model.statadd("Polearm implement group:attack", 2, "Feat");
      model.statadd("Polearm implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Rod)"] = new engine.RulesElement({
    name: "Implement Expertise (Rod)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(ROD)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(ROD)",
    categories: ["Implement Expertise (Rod)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(ROD)"],
    rules: function(model) {
      model.statadd("rod implement,implement:attack", 1, "Feat");
      model.statadd("rod implement,implement:attack", 2, "Feat");
      model.statadd("rod implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Sling)"] = new engine.RulesElement({
    name: "Implement Expertise (Sling)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(SLING)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(SLING)",
    categories: ["Implement Expertise (Sling)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(SLING)"],
    rules: function(model) {
      model.statadd("Sling implement group:attack", 1, "Feat");
      model.statadd("Sling implement group:attack", 2, "Feat");
      model.statadd("Sling implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Spear)"] = new engine.RulesElement({
    name: "Implement Expertise (Spear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(SPEAR)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(SPEAR)",
    categories: ["Implement Expertise (Spear)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(SPEAR)"],
    rules: function(model) {
      model.statadd("Spear implement group:attack", 1, "Feat");
      model.statadd("Spear implement group:attack", 2, "Feat");
      model.statadd("Spear implement group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Staff)"] = new engine.RulesElement({
    name: "Implement Expertise (Staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(STAFF)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(STAFF)",
    categories: ["Implement Expertise (Staff)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(STAFF)"],
    rules: function(model) {
      model.statadd("staff implement,implement:attack", 1, "Feat");
      model.statadd("staff implement,implement:attack", 2, "Feat");
      model.statadd("staff implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Tome)"] = new engine.RulesElement({
    name: "Implement Expertise (Tome)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(TOME)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(TOME)",
    categories: ["Implement Expertise (Tome)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(TOME)"],
    rules: function(model) {
      model.statadd("tome implement,implement:attack", 1, "Feat");
      model.statadd("tome implement,implement:attack", 2, "Feat");
      model.statadd("tome implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Totem)"] = new engine.RulesElement({
    name: "Implement Expertise (Totem)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(TOTEM)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(TOTEM)",
    categories: ["Implement Expertise (Totem)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(TOTEM)"],
    rules: function(model) {
      model.statadd("totem implement,implement:attack", 1, "Feat");
      model.statadd("totem implement,implement:attack", 2, "Feat");
      model.statadd("totem implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Expertise (Wand)"] = new engine.RulesElement({
    name: "Implement Expertise (Wand)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(WAND)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_IMPLEMENT_EXPERTISE_(WAND)",
    categories: ["Implement Expertise (Wand)", "ID_INTERNAL_FEAT_IMPLEMENT_EXPERTISE_(WAND)"],
    rules: function(model) {
      model.statadd("wand implement,implement:attack", 1, "Feat");
      model.statadd("wand implement,implement:attack", 2, "Feat");
      model.statadd("wand implement,implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Armor of Faith"] = new engine.RulesElement({
    name: "Improved Armor of Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_1078",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1078",
    categories: ["Improved Armor of Faith", "ID_FMP_FEAT_1078"],
    rules: function(model) {
      model.statadd("Improved Armor of Faith", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          return model.stat("Improved Armor of Faith");
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor'))) {
          return model.stat("Improved Armor of Faith");
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Bull Rush"] = new engine.RulesElement({
    name: "Improved Bull Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_419",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=419",
    categories: ["Improved Bull Rush", "ID_FMP_FEAT_419"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Cunning"] = new engine.RulesElement({
    name: "Improved Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_475",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=475",
    categories: ["Improved Cunning", "ID_FMP_FEAT_475"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Dragon Soul"] = new engine.RulesElement({
    name: "Improved Dragon Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1008",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1008",
    categories: ["Improved Dragon Soul", "ID_FMP_FEAT_1008"],
    rules: function(model) {
      model.statadd("Dragon Soul Acid Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Cold Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Fire Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Lightning Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Poison Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Thunder Resist", 2, "Improved Dragon Soul");
      model.statadd("Dragon Soul Acid Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Cold Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Fire Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Lightning Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Poison Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Thunder Resist", 5, "Improved Dragon Soul");
      model.statadd("Dragon Soul Acid Resist", 10, "Improved Dragon Soul");
      model.statadd("Dragon Soul Cold Resist", 10, "Improved Dragon Soul");
      model.statadd("Dragon Soul Fire Resist", 10, "Improved Dragon Soul");
      model.statadd("Dragon Soul Lightning Resist", 10, "Improved Dragon Soul");
      model.statadd("Dragon Soul Poison Resist", 10, "Improved Dragon Soul");
      model.statadd("Dragon Soul Thunder Resist", 10, "Improved Dragon Soul");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Grab"] = new engine.RulesElement({
    name: "Improved Grab",
    type: "Feat",
    id: "ID_FMP_FEAT_658",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=658",
    categories: ["Improved Grab", "ID_FMP_FEAT_658"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Majestic Word"] = new engine.RulesElement({
    name: "Improved Majestic Word",
    type: "Feat",
    id: "ID_FMP_FEAT_471",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=471",
    categories: ["Improved Majestic Word", "ID_FMP_FEAT_471"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Rageblood Vigor"] = new engine.RulesElement({
    name: "Improved Rageblood Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_1009",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1009",
    categories: ["Improved Rageblood Vigor", "ID_FMP_FEAT_1009"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Roar of Triumph"] = new engine.RulesElement({
    name: "Improved Roar of Triumph",
    type: "Feat",
    id: "ID_FMP_FEAT_1010",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1010",
    categories: ["Improved Roar of Triumph", "ID_FMP_FEAT_1010"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Valor"] = new engine.RulesElement({
    name: "Improved Valor",
    type: "Feat",
    id: "ID_FMP_FEAT_476",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=476",
    categories: ["Improved Valor", "ID_FMP_FEAT_476"]
  });
  byID[te.id] = te;
  
  te = Feat["Indomitable Will"] = new engine.RulesElement({
    name: "Indomitable Will",
    type: "Feat",
    id: "ID_FMP_FEAT_544",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=544",
    categories: ["Indomitable Will", "ID_FMP_FEAT_544"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Feat");
      model.statadd("Saving Throws", function() { /* against effects that make you dazed, dominated, or stunned */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Inexorable Pursuit"] = new engine.RulesElement({
    name: "Inexorable Pursuit",
    type: "Feat",
    id: "ID_FMP_FEAT_487",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=487",
    categories: ["Inexorable Pursuit", "ID_FMP_FEAT_487"]
  });
  byID[te.id] = te;
  
  te = Feat["Initiate of the Old Faith"] = new engine.RulesElement({
    name: "Initiate of the Old Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_666",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=666",
    categories: ["Initiate of the Old Faith", "ID_FMP_FEAT_666", "ID_INTERNAL_CATEGORY_MULTICLASS_DRUID", "Multiclass Druid", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(model.elements.id["ID_FMP_POWER_5032"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_126") && element.hasCategory("1") && element.hasCategory("at-will") && element.hasCategory("beast form")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DRUID_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_DRUID"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Insightful Preservation"] = new engine.RulesElement({
    name: "Insightful Preservation",
    type: "Feat",
    id: "ID_FMP_FEAT_1012",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1012",
    categories: ["Insightful Preservation", "ID_FMP_FEAT_1012"]
  });
  byID[te.id] = te;
  
  te = Feat["Invigorating Pursuit"] = new engine.RulesElement({
    name: "Invigorating Pursuit",
    type: "Feat",
    id: "ID_FMP_FEAT_1013",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1013",
    categories: ["Invigorating Pursuit", "ID_FMP_FEAT_1013"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoked Devastation"] = new engine.RulesElement({
    name: "Invoked Devastation",
    type: "Feat",
    id: "ID_FMP_FEAT_1054",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1054",
    categories: ["Invoked Devastation", "ID_FMP_FEAT_1054"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoker Defense"] = new engine.RulesElement({
    name: "Invoker Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_483",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=483",
    categories: ["Invoker Defense", "ID_FMP_FEAT_483"]
  });
  byID[te.id] = te;
  
  te = Feat["Long Arm of Virtue"] = new engine.RulesElement({
    name: "Long Arm of Virtue",
    type: "Feat",
    id: "ID_FMP_FEAT_478",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=478",
    categories: ["Long Arm of Virtue", "ID_FMP_FEAT_478"]
  });
  byID[te.id] = te;
  
  te = Feat["Lyric of Rejuvenation"] = new engine.RulesElement({
    name: "Lyric of Rejuvenation",
    type: "Feat",
    id: "ID_FMP_FEAT_1042",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1042",
    categories: ["Lyric of Rejuvenation", "ID_FMP_FEAT_1042"]
  });
  byID[te.id] = te;
  
  te = Feat["Markings of the Blessed"] = new engine.RulesElement({
    name: "Markings of the Blessed",
    type: "Feat",
    id: "ID_FMP_FEAT_1014",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1014",
    categories: ["Markings of the Blessed", "ID_FMP_FEAT_1014"]
  });
  byID[te.id] = te;
  
  te = Feat["Markings of the Victor"] = new engine.RulesElement({
    name: "Markings of the Victor",
    type: "Feat",
    id: "ID_FMP_FEAT_1015",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1015",
    categories: ["Markings of the Victor", "ID_FMP_FEAT_1015"]
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training"] = new engine.RulesElement({
    name: "Melee Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1016",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1016",
    categories: ["Melee Training", "ID_FMP_FEAT_1016"]
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training (Charisma)"] = new engine.RulesElement({
    name: "Melee Training (Charisma)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_MELEE_TRAINING_(CHARISMA)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_MELEE_TRAINING_(CHARISMA)",
    categories: ["Melee Training (Charisma)", "ID_INTERNAL_FEAT_MELEE_TRAINING_(CHARISMA)"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "HALF-DMG:Charisma*");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training (Constitution)"] = new engine.RulesElement({
    name: "Melee Training (Constitution)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_MELEE_TRAINING_(CONSTITUTION)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_MELEE_TRAINING_(CONSTITUTION)",
    categories: ["Melee Training (Constitution)", "ID_INTERNAL_FEAT_MELEE_TRAINING_(CONSTITUTION)"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "HALF-DMG:Constitution*");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training (Dexterity)"] = new engine.RulesElement({
    name: "Melee Training (Dexterity)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_MELEE_TRAINING_(DEXTERITY)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_MELEE_TRAINING_(DEXTERITY)",
    categories: ["Melee Training (Dexterity)", "ID_INTERNAL_FEAT_MELEE_TRAINING_(DEXTERITY)"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "HALF-DMG:Dexterity*");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training (Intelligence)"] = new engine.RulesElement({
    name: "Melee Training (Intelligence)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_MELEE_TRAINING_(INTELLIGENCE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_MELEE_TRAINING_(INTELLIGENCE)",
    categories: ["Melee Training (Intelligence)", "ID_INTERNAL_FEAT_MELEE_TRAINING_(INTELLIGENCE)"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "HALF-DMG:Intelligence*");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Melee Training (Wisdom)"] = new engine.RulesElement({
    name: "Melee Training (Wisdom)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_MELEE_TRAINING_(WISDOM)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_MELEE_TRAINING_(WISDOM)",
    categories: ["Melee Training (Wisdom)", "ID_INTERNAL_FEAT_MELEE_TRAINING_(WISDOM)"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "HALF-DMG:Wisdom*");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mighty Enmity"] = new engine.RulesElement({
    name: "Mighty Enmity",
    type: "Feat",
    id: "ID_FMP_FEAT_1055",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1055",
    categories: ["Mighty Enmity", "ID_FMP_FEAT_1055"]
  });
  byID[te.id] = te;
  
  te = Feat["Mighty Spirit"] = new engine.RulesElement({
    name: "Mighty Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_566",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=566",
    categories: ["Mighty Spirit", "ID_FMP_FEAT_566"]
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Spirit"] = new engine.RulesElement({
    name: "Nimble Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_565",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=565",
    categories: ["Nimble Spirit", "ID_FMP_FEAT_565"]
  });
  byID[te.id] = te;
  
  te = Feat["Oncoming Storm"] = new engine.RulesElement({
    name: "Oncoming Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_519",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=519",
    categories: ["Oncoming Storm", "ID_FMP_FEAT_519"]
  });
  byID[te.id] = te;
  
  te = Feat["Onslaught of Enmity"] = new engine.RulesElement({
    name: "Onslaught of Enmity",
    type: "Feat",
    id: "ID_FMP_FEAT_496",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=496",
    categories: ["Onslaught of Enmity", "ID_FMP_FEAT_496"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportune Reflexes"] = new engine.RulesElement({
    name: "Opportune Reflexes",
    type: "Feat",
    id: "ID_FMP_FEAT_543",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=543",
    categories: ["Opportune Reflexes", "ID_FMP_FEAT_543"],
    rules: function(model) {
      model.statadd("Reflex Defense", 2, "Feat");
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Overbearing Retribution"] = new engine.RulesElement({
    name: "Overbearing Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_485",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=485",
    categories: ["Overbearing Retribution", "ID_FMP_FEAT_485"]
  });
  byID[te.id] = te;
  
  te = Feat["Paragon Defenses"] = new engine.RulesElement({
    name: "Paragon Defenses",
    type: "Feat",
    id: "ID_FMP_FEAT_530",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=530",
    categories: ["Paragon Defenses", "ID_FMP_FEAT_530"],
    rules: function(model) {
      model.statadd("Paragon Defenses", 1);
      model.statadd("Fortitude Defense", function() { return model.stat("Paragon Defenses"); }, "Feat");
      model.statadd("Reflex Defense", function() { return model.stat("Paragon Defenses"); }, "Feat");
      model.statadd("Will Defense", function() { return model.stat("Paragon Defenses"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Potent Rebirth"] = new engine.RulesElement({
    name: "Potent Rebirth",
    type: "Feat",
    id: "ID_FMP_FEAT_1017",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1017",
    categories: ["Potent Rebirth", "ID_FMP_FEAT_1017"]
  });
  byID[te.id] = te;
  
  te = Feat["Preserver's Vengeance"] = new engine.RulesElement({
    name: "Preserver's Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1043",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1043",
    categories: ["Preserver's Vengeance", "ID_FMP_FEAT_1043"],
    rules: function(model) {
      model.statadd("divine:damage", function() { /* while a bloodied ally is within 5 squares of you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Primal Aspect Form"] = new engine.RulesElement({
    name: "Primal Aspect Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1056",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1056",
    categories: ["Primal Aspect Form", "ID_FMP_FEAT_1056"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Fury"] = new engine.RulesElement({
    name: "Primal Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1018",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1018",
    categories: ["Primal Fury", "ID_FMP_FEAT_1018"],
    rules: function(model) {
      model.statadd("primal:attack", function() { /* against bloodied enemies */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Primal Instinct"] = new engine.RulesElement({
    name: "Primal Instinct",
    type: "Feat",
    id: "ID_FMP_FEAT_1019",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1019",
    categories: ["Primal Instinct", "ID_FMP_FEAT_1019"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Resurgence"] = new engine.RulesElement({
    name: "Primal Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_547",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=547",
    categories: ["Primal Resurgence", "ID_FMP_FEAT_547"]
  });
  byID[te.id] = te;
  
  te = Feat["Protected Isolation"] = new engine.RulesElement({
    name: "Protected Isolation",
    type: "Feat",
    id: "ID_FMP_FEAT_1044",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1044",
    categories: ["Protected Isolation", "ID_FMP_FEAT_1044"]
  });
  byID[te.id] = te;
  
  te = Feat["Protector Spirit Adept"] = new engine.RulesElement({
    name: "Protector Spirit Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1020",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1020",
    categories: ["Protector Spirit Adept", "ID_FMP_FEAT_1020"]
  });
  byID[te.id] = te;
  
  te = Feat["Quick Recovery"] = new engine.RulesElement({
    name: "Quick Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_532",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=532",
    categories: ["Quick Recovery", "ID_FMP_FEAT_532"]
  });
  byID[te.id] = te;
  
  te = Feat["Quick Wild Shape"] = new engine.RulesElement({
    name: "Quick Wild Shape",
    type: "Feat",
    id: "ID_FMP_FEAT_1045",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1045",
    categories: ["Quick Wild Shape", "ID_FMP_FEAT_1045"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Power"] = new engine.RulesElement({
    name: "Radiant Power",
    type: "Feat",
    id: "ID_FMP_FEAT_1021",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1021",
    categories: ["Radiant Power", "ID_FMP_FEAT_1021"]
  });
  byID[te.id] = te;
  
  te = Feat["Rageblood Recovery"] = new engine.RulesElement({
    name: "Rageblood Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_453",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=453",
    categories: ["Rageblood Recovery", "ID_FMP_FEAT_453"]
  });
  byID[te.id] = te;
  
  te = Feat["Reserve Maneuver"] = new engine.RulesElement({
    name: "Reserve Maneuver",
    type: "Feat",
    id: "ID_FMP_FEAT_512",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=512",
    categories: ["Reserve Maneuver", "ID_FMP_FEAT_512"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && true /* NYI: Filter: $$LEVEL */ && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resonating Covenant"] = new engine.RulesElement({
    name: "Resonating Covenant",
    type: "Feat",
    id: "ID_FMP_FEAT_1022",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1022",
    categories: ["Resonating Covenant", "ID_FMP_FEAT_1022"]
  });
  byID[te.id] = te;
  
  te = Feat["Restful Healing"] = new engine.RulesElement({
    name: "Restful Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1023",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1023",
    categories: ["Restful Healing", "ID_FMP_FEAT_1023"]
  });
  byID[te.id] = te;
  
  te = Feat["Revitalizing Font of Life"] = new engine.RulesElement({
    name: "Revitalizing Font of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1024",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1024",
    categories: ["Revitalizing Font of Life", "ID_FMP_FEAT_1024"]
  });
  byID[te.id] = te;
  
  te = Feat["Rising Fury"] = new engine.RulesElement({
    name: "Rising Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_454",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=454",
    categories: ["Rising Fury", "ID_FMP_FEAT_454"],
    rules: function(model) {
      model.statadd("Rising Fury", 1);
      model.statadd("Rising Fury", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Robust Defenses"] = new engine.RulesElement({
    name: "Robust Defenses",
    type: "Feat",
    id: "ID_FMP_FEAT_540",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=540",
    categories: ["Robust Defenses", "ID_FMP_FEAT_540"],
    rules: function(model) {
      model.statadd("Robust Defenses", 2);
      model.statadd("Fortitude Defense", function() { return model.stat("Robust Defenses"); }, "Feat");
      model.statadd("Reflex Defense", function() { return model.stat("Robust Defenses"); }, "Feat");
      model.statadd("Will Defense", function() { return model.stat("Robust Defenses"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Savage Assault"] = new engine.RulesElement({
    name: "Savage Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_1025",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1025",
    categories: ["Savage Assault", "ID_FMP_FEAT_1025"]
  });
  byID[te.id] = te;
  
  te = Feat["Scouring Wrath"] = new engine.RulesElement({
    name: "Scouring Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1079",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1079",
    categories: ["Scouring Wrath", "ID_FMP_FEAT_1079"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Skulk"] = new engine.RulesElement({
    name: "Shadow Skulk",
    type: "Feat",
    id: "ID_FMP_FEAT_1026",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1026",
    categories: ["Shadow Skulk", "ID_FMP_FEAT_1026"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Healing Spirit"] = new engine.RulesElement({
    name: "Shared Healing Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1027",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1027",
    categories: ["Shared Healing Spirit", "ID_FMP_FEAT_1027"]
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Blade Channeling"] = new engine.RulesElement({
    name: "Sorcerous Blade Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_1028",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1028",
    categories: ["Sorcerous Blade Channeling", "ID_FMP_FEAT_1028"]
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Flux"] = new engine.RulesElement({
    name: "Sorcerous Flux",
    type: "Feat",
    id: "ID_FMP_FEAT_663",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=663",
    categories: ["Sorcerous Flux", "ID_FMP_FEAT_663"]
  });
  byID[te.id] = te;
  
  te = Feat["Speaker of the Gods"] = new engine.RulesElement({
    name: "Speaker of the Gods",
    type: "Feat",
    id: "ID_FMP_FEAT_486",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=486",
    categories: ["Speaker of the Gods", "ID_FMP_FEAT_486"]
  });
  byID[te.id] = te;
  
  te = Feat["Speed Loader"] = new engine.RulesElement({
    name: "Speed Loader",
    type: "Feat",
    id: "ID_FMP_FEAT_396",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=396",
    categories: ["Speed Loader", "ID_FMP_FEAT_396"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Speaker"] = new engine.RulesElement({
    name: "Spirit Speaker",
    type: "Feat",
    id: "ID_FMP_FEAT_1029",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1029",
    categories: ["Spirit Speaker", "ID_FMP_FEAT_1029"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Talker"] = new engine.RulesElement({
    name: "Spirit Talker",
    type: "Feat",
    id: "ID_FMP_FEAT_668",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=668",
    categories: ["Spirit Talker", "ID_FMP_FEAT_668", "ID_INTERNAL_CATEGORY_MULTICLASS_SHAMAN", "Multiclass Shaman", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(model.elements.id["ID_FMP_POWER_6515"]);
      model.select('Power', 1, {
        filter: function(model, element) { return element.hasCategory("Spirit Talker"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_3775"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ImplementsAsClass", "Shaman");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SHAMAN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stalker Spirit Adept"] = new engine.RulesElement({
    name: "Stalker Spirit Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1030",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1030",
    categories: ["Stalker Spirit Adept", "ID_FMP_FEAT_1030"]
  });
  byID[te.id] = te;
  
  te = Feat["Stalking Panther Form"] = new engine.RulesElement({
    name: "Stalking Panther Form",
    type: "Feat",
    id: "ID_FMP_FEAT_553",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=553",
    categories: ["Stalking Panther Form", "ID_FMP_FEAT_553"],
    rules: function(model) {
      model.statadd("Stealth checks", function() { /* while you are in beast form */ return 5; }, "Feat");
      model.statadd("a +4 feat bonus to initiative checks", function() { /* while you are in beast form */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Strength From Pain"] = new engine.RulesElement({
    name: "Strength From Pain",
    type: "Feat",
    id: "ID_FMP_FEAT_1046",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1046",
    categories: ["Strength From Pain", "ID_FMP_FEAT_1046"]
  });
  byID[te.id] = te;
  
  te = Feat["Strength of Valor"] = new engine.RulesElement({
    name: "Strength of Valor",
    type: "Feat",
    id: "ID_FMP_FEAT_470",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=470",
    categories: ["Strength of Valor", "ID_FMP_FEAT_470"]
  });
  byID[te.id] = te;
  
  te = Feat["Sudden Roots"] = new engine.RulesElement({
    name: "Sudden Roots",
    type: "Feat",
    id: "ID_FMP_FEAT_585",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=585",
    categories: ["Sudden Roots", "ID_FMP_FEAT_585"]
  });
  byID[te.id] = te;
  
  te = Feat["Surging Flame"] = new engine.RulesElement({
    name: "Surging Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_517",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=517",
    categories: ["Surging Flame", "ID_FMP_FEAT_517"]
  });
  byID[te.id] = te;
  
  te = Feat["Surprising Disappearance"] = new engine.RulesElement({
    name: "Surprising Disappearance",
    type: "Feat",
    id: "ID_FMP_FEAT_1047",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1047",
    categories: ["Surprising Disappearance", "ID_FMP_FEAT_1047"]
  });
  byID[te.id] = te;
  
  te = Feat["Thaneborn Advance"] = new engine.RulesElement({
    name: "Thaneborn Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_452",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=452",
    categories: ["Thaneborn Advance", "ID_FMP_FEAT_452"]
  });
  byID[te.id] = te;
  
  te = Feat["Thaneborn Conqueror"] = new engine.RulesElement({
    name: "Thaneborn Conqueror",
    type: "Feat",
    id: "ID_FMP_FEAT_465",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=465",
    categories: ["Thaneborn Conqueror", "ID_FMP_FEAT_465"]
  });
  byID[te.id] = te;
  
  te = Feat["Thirst for Battle"] = new engine.RulesElement({
    name: "Thirst for Battle",
    type: "Feat",
    id: "ID_FMP_FEAT_1031",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1031",
    categories: ["Thirst for Battle", "ID_FMP_FEAT_1031"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "Feat");
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Timely Respite"] = new engine.RulesElement({
    name: "Timely Respite",
    type: "Feat",
    id: "ID_FMP_FEAT_507",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=507",
    categories: ["Timely Respite", "ID_FMP_FEAT_507"]
  });
  byID[te.id] = te;
  
  te = Feat["Transcendent Lineage"] = new engine.RulesElement({
    name: "Transcendent Lineage",
    type: "Feat",
    id: "ID_FMP_FEAT_1057",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1057",
    categories: ["Transcendent Lineage", "ID_FMP_FEAT_1057"]
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Opening"] = new engine.RulesElement({
    name: "Two-Weapon Opening",
    type: "Feat",
    id: "ID_FMP_FEAT_349",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=349",
    categories: ["Two-Weapon Opening", "ID_FMP_FEAT_349"]
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Threat"] = new engine.RulesElement({
    name: "Two-Weapon Threat",
    type: "Feat",
    id: "ID_FMP_FEAT_363",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=363",
    categories: ["Two-Weapon Threat", "ID_FMP_FEAT_363"],
    rules: function(model) {
      model.statadd("two-melee:weapon:damage", function() { /* with opportunity attacks */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unrelenting Assault"] = new engine.RulesElement({
    name: "Unrelenting Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_1048",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1048",
    categories: ["Unrelenting Assault", "ID_FMP_FEAT_1048"]
  });
  byID[te.id] = te;
  
  te = Feat["Unyielding Fortitude"] = new engine.RulesElement({
    name: "Unyielding Fortitude",
    type: "Feat",
    id: "ID_FMP_FEAT_542",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=542",
    categories: ["Unyielding Fortitude", "ID_FMP_FEAT_542"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Feat");
      model.statadd("Death Saving Throws", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unyielding Stone"] = new engine.RulesElement({
    name: "Unyielding Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_1049",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1049",
    categories: ["Unyielding Stone", "ID_FMP_FEAT_1049"]
  });
  byID[te.id] = te;
  
  te = Feat["Vanishing Act"] = new engine.RulesElement({
    name: "Vanishing Act",
    type: "Feat",
    id: "ID_FMP_FEAT_1058",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1058",
    categories: ["Vanishing Act", "ID_FMP_FEAT_1058"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Master"] = new engine.RulesElement({
    name: "Versatile Master",
    type: "Feat",
    id: "ID_FMP_FEAT_1082",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1082",
    categories: ["Versatile Master", "ID_FMP_FEAT_1082"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("_PARAGON_MULTICLASSNAME", "*");
      model.statadd("Action Point", "Versatile Master:You can spend an action point to regain the user of an encounter attack power that you have already used during this encounter, instead of taking an extra action");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vexing Flanker"] = new engine.RulesElement({
    name: "Vexing Flanker",
    type: "Feat",
    id: "ID_FMP_FEAT_535",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=535",
    categories: ["Vexing Flanker", "ID_FMP_FEAT_535"]
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise"] = new engine.RulesElement({
    name: "Weapon Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1032",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1032",
    categories: ["Weapon Expertise", "ID_FMP_FEAT_1032"]
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Axe)"] = new engine.RulesElement({
    name: "Weapon Expertise (Axe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(AXE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(AXE)",
    categories: ["Weapon Expertise (Axe)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(AXE)"],
    rules: function(model) {
      model.statadd("weapon,axe group:attack", 1, "Feat");
      model.statadd("weapon,axe group:attack", 2, "Feat");
      model.statadd("weapon,axe group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Blowgun)"] = new engine.RulesElement({
    name: "Weapon Expertise (Blowgun)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(BLOWGUN)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(BLOWGUN)",
    categories: ["Weapon Expertise (Blowgun)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(BLOWGUN)"],
    rules: function(model) {
      model.statadd("weapon,blowgun group:attack", 1, "Feat");
      model.statadd("weapon,blowgun group:attack", 2, "Feat");
      model.statadd("weapon,blowgun group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Bow)"] = new engine.RulesElement({
    name: "Weapon Expertise (Bow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(BOW)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(BOW)",
    categories: ["Weapon Expertise (Bow)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(BOW)"],
    rules: function(model) {
      model.statadd("weapon,bow group:attack", 1, "Feat");
      model.statadd("weapon,bow group:attack", 2, "Feat");
      model.statadd("weapon,bow group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Crossbow)"] = new engine.RulesElement({
    name: "Weapon Expertise (Crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(CROSSBOW)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(CROSSBOW)",
    categories: ["Weapon Expertise (Crossbow)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(CROSSBOW)"],
    rules: function(model) {
      model.statadd("weapon,crossbow group:attack", 1, "Feat");
      model.statadd("weapon,crossbow group:attack", 2, "Feat");
      model.statadd("weapon,crossbow group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Flail)"] = new engine.RulesElement({
    name: "Weapon Expertise (Flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(FLAIL)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(FLAIL)",
    categories: ["Weapon Expertise (Flail)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(FLAIL)"],
    rules: function(model) {
      model.statadd("weapon,flail group:attack", 1, "Feat");
      model.statadd("weapon,flail group:attack", 2, "Feat");
      model.statadd("weapon,flail group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Garrote)"] = new engine.RulesElement({
    name: "Weapon Expertise (Garrote)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(GARROTE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(GARROTE)",
    categories: ["Weapon Expertise (Garrote)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(GARROTE)"],
    rules: function(model) {
      model.statadd("weapon,garrote group:attack", 1, "Feat");
      model.statadd("weapon,garrote group:attack", 2, "Feat");
      model.statadd("weapon,garrote group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Hammer)"] = new engine.RulesElement({
    name: "Weapon Expertise (Hammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(HAMMER)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(HAMMER)",
    categories: ["Weapon Expertise (Hammer)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(HAMMER)"],
    rules: function(model) {
      model.statadd("weapon,hammer group:attack", 1, "Feat");
      model.statadd("weapon,hammer group:attack", 2, "Feat");
      model.statadd("weapon,hammer group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Heavy Blade)"] = new engine.RulesElement({
    name: "Weapon Expertise (Heavy Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(HEAVY_BLADE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(HEAVY_BLADE)",
    categories: ["Weapon Expertise (Heavy Blade)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(HEAVY_BLADE)"],
    rules: function(model) {
      model.statadd("weapon,heavy blade group:attack", 1, "Feat");
      model.statadd("weapon,heavy blade group:attack", 2, "Feat");
      model.statadd("weapon,heavy blade group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Light Blade)"] = new engine.RulesElement({
    name: "Weapon Expertise (Light Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(LIGHT_BLADE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(LIGHT_BLADE)",
    categories: ["Weapon Expertise (Light Blade)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(LIGHT_BLADE)"],
    rules: function(model) {
      model.statadd("weapon,light blade group:attack", 1, "Feat");
      model.statadd("weapon,light blade group:attack", 2, "Feat");
      model.statadd("weapon,light blade group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Mace)"] = new engine.RulesElement({
    name: "Weapon Expertise (Mace)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(MACE)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(MACE)",
    categories: ["Weapon Expertise (Mace)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(MACE)"],
    rules: function(model) {
      model.statadd("weapon,mace group:attack", 1, "Feat");
      model.statadd("weapon,mace group:attack", 2, "Feat");
      model.statadd("weapon,mace group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Pick)"] = new engine.RulesElement({
    name: "Weapon Expertise (Pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(PICK)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(PICK)",
    categories: ["Weapon Expertise (Pick)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(PICK)"],
    rules: function(model) {
      model.statadd("weapon,pick group:attack", 1, "Feat");
      model.statadd("weapon,pick group:attack", 2, "Feat");
      model.statadd("weapon,pick group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Polearm)"] = new engine.RulesElement({
    name: "Weapon Expertise (Polearm)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(POLEARM)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(POLEARM)",
    categories: ["Weapon Expertise (Polearm)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(POLEARM)"],
    rules: function(model) {
      model.statadd("weapon,polearm group:attack", 1, "Feat");
      model.statadd("weapon,polearm group:attack", 2, "Feat");
      model.statadd("weapon,polearm group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Sling)"] = new engine.RulesElement({
    name: "Weapon Expertise (Sling)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(SLING)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(SLING)",
    categories: ["Weapon Expertise (Sling)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(SLING)"],
    rules: function(model) {
      model.statadd("weapon,sling group:attack", 1, "Feat");
      model.statadd("weapon,sling group:attack", 2, "Feat");
      model.statadd("weapon,sling group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Spear)"] = new engine.RulesElement({
    name: "Weapon Expertise (Spear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(SPEAR)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(SPEAR)",
    categories: ["Weapon Expertise (Spear)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(SPEAR)"],
    rules: function(model) {
      model.statadd("weapon,spear group:attack", 1, "Feat");
      model.statadd("weapon,spear group:attack", 2, "Feat");
      model.statadd("weapon,spear group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Staff)"] = new engine.RulesElement({
    name: "Weapon Expertise (Staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(STAFF)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(STAFF)",
    categories: ["Weapon Expertise (Staff)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(STAFF)"],
    rules: function(model) {
      model.statadd("weapon,staff group:attack", 1, "Feat");
      model.statadd("weapon,staff group:attack", 2, "Feat");
      model.statadd("weapon,staff group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Expertise (Unarmed)"] = new engine.RulesElement({
    name: "Weapon Expertise (Unarmed)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(UNARMED)",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_EXPERTISE_(UNARMED)",
    categories: ["Weapon Expertise (Unarmed)", "ID_INTERNAL_FEAT_WEAPON_EXPERTISE_(UNARMED)"],
    rules: function(model) {
      model.statadd("weapon,unarmed group:attack", 1, "Feat");
      model.statadd("weapon,unarmed group:attack", 2, "Feat");
      model.statadd("weapon,unarmed group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Senses"] = new engine.RulesElement({
    name: "Wild Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_1033",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1033",
    categories: ["Wild Senses", "ID_FMP_FEAT_1033"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Spellfury"] = new engine.RulesElement({
    name: "Wild Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1050",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1050",
    categories: ["Wild Spellfury", "ID_FMP_FEAT_1050"]
  });
  byID[te.id] = te;
  
  te = Feat["Wildblood Cunning"] = new engine.RulesElement({
    name: "Wildblood Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_584",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=584",
    categories: ["Wildblood Cunning", "ID_FMP_FEAT_584"]
  });
  byID[te.id] = te;
  
  te = Feat["Wildblood Speed"] = new engine.RulesElement({
    name: "Wildblood Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_591",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=591",
    categories: ["Wildblood Speed", "ID_FMP_FEAT_591"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
