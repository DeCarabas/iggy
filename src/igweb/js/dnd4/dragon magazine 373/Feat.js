define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Alchemical Opportunist"] = new engine.RulesElement({
    name: "Alchemical Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_1256",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1256",
    categories: ["Alchemical Opportunist", "ID_FMP_FEAT_1256"]
  });
  byID[te.id] = te;
  
  te = Feat["Black Arrow Style"] = new engine.RulesElement({
    name: "Black Arrow Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1296",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1296",
    categories: ["Black Arrow Style", "ID_FMP_FEAT_1296"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodhound Style"] = new engine.RulesElement({
    name: "Bloodhound Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1297",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1297",
    categories: ["Bloodhound Style", "ID_FMP_FEAT_1297"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Fleetness"] = new engine.RulesElement({
    name: "Bloodied Fleetness",
    type: "Feat",
    id: "ID_FMP_FEAT_1257",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1257",
    categories: ["Bloodied Fleetness", "ID_FMP_FEAT_1257"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while bloodied */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blowgun Expert"] = new engine.RulesElement({
    name: "Blowgun Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1278",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1278",
    categories: ["Blowgun Expert", "ID_FMP_FEAT_1278", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blowgun Novice"] = new engine.RulesElement({
    name: "Blowgun Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1276",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1276",
    categories: ["Blowgun Novice", "ID_FMP_FEAT_1276", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blowgun Specialist"] = new engine.RulesElement({
    name: "Blowgun Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1279",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1279",
    categories: ["Blowgun Specialist", "ID_FMP_FEAT_1279", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blowgun Training"] = new engine.RulesElement({
    name: "Blowgun Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1277",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1277",
    categories: ["Blowgun Training", "ID_FMP_FEAT_1277", "ID_INTERNAL_CATEGORY_MULTICLASS_BLOWGUN", "Multiclass Blowgun", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_CLASS_6-Crossbow", "Blowgun");
      model.statadd("ID_FMP_CLASS_6-Sling", "Blowgun");
      model.statadd("Sneak Attack Weapons", "Blowgun");
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bravo"] = new engine.RulesElement({
    name: "Bravo",
    type: "Feat",
    id: "ID_FMP_FEAT_1280",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1280",
    categories: ["Bravo", "ID_FMP_FEAT_1280", "ID_INTERNAL_CATEGORY_MULTICLASS_BRAVO", "Multiclass Bravo", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bravo Expert"] = new engine.RulesElement({
    name: "Bravo Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1282",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1282",
    categories: ["Bravo Expert", "ID_FMP_FEAT_1282", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bravo Novice"] = new engine.RulesElement({
    name: "Bravo Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1281",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1281",
    categories: ["Bravo Novice", "ID_FMP_FEAT_1281", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bravo Specialist"] = new engine.RulesElement({
    name: "Bravo Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1283",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1283",
    categories: ["Bravo Specialist", "ID_FMP_FEAT_1283", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Connected"] = new engine.RulesElement({
    name: "Connected",
    type: "Feat",
    id: "ID_FMP_FEAT_1258",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1258",
    categories: ["Connected", "ID_FMP_FEAT_1258"]
  });
  byID[te.id] = te;
  
  te = Feat["Corellon's Wrath Style"] = new engine.RulesElement({
    name: "Corellon's Wrath Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1298",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1298",
    categories: ["Corellon's Wrath Style", "ID_FMP_FEAT_1298"]
  });
  byID[te.id] = te;
  
  te = Feat["Critical Ambush"] = new engine.RulesElement({
    name: "Critical Ambush",
    type: "Feat",
    id: "ID_FMP_FEAT_1267",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1267",
    categories: ["Critical Ambush", "ID_FMP_FEAT_1267"]
  });
  byID[te.id] = te;
  
  te = Feat["Cruel Cut Style"] = new engine.RulesElement({
    name: "Cruel Cut Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1299",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1299",
    categories: ["Cruel Cut Style", "ID_FMP_FEAT_1299"]
  });
  byID[te.id] = te;
  
  te = Feat["Cutthroat"] = new engine.RulesElement({
    name: "Cutthroat",
    type: "Feat",
    id: "ID_FMP_FEAT_1284",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1284",
    categories: ["Cutthroat", "ID_FMP_FEAT_1284", "ID_INTERNAL_CATEGORY_MULTICLASS_CUTTHROAT", "Multiclass Cutthroat", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cutthroat Expert"] = new engine.RulesElement({
    name: "Cutthroat Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1286",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1286",
    categories: ["Cutthroat Expert", "ID_FMP_FEAT_1286", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cutthroat Novice"] = new engine.RulesElement({
    name: "Cutthroat Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1285",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1285",
    categories: ["Cutthroat Novice", "ID_FMP_FEAT_1285", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cutthroat Specialist"] = new engine.RulesElement({
    name: "Cutthroat Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1287",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1287",
    categories: ["Cutthroat Specialist", "ID_FMP_FEAT_1287", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Executioner's Style"] = new engine.RulesElement({
    name: "Executioner's Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1300",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1300",
    categories: ["Executioner's Style", "ID_FMP_FEAT_1300"]
  });
  byID[te.id] = te;
  
  te = Feat["Eyedark Strike"] = new engine.RulesElement({
    name: "Eyedark Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1262",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1262",
    categories: ["Eyedark Strike", "ID_FMP_FEAT_1262"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Death"] = new engine.RulesElement({
    name: "Fey Death",
    type: "Feat",
    id: "ID_FMP_FEAT_1263",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1263",
    categories: ["Fey Death", "ID_FMP_FEAT_1263"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Escape"] = new engine.RulesElement({
    name: "Fey Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_1259",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1259",
    categories: ["Fey Escape", "ID_FMP_FEAT_1259"]
  });
  byID[te.id] = te;
  
  te = Feat["Furtive Signals"] = new engine.RulesElement({
    name: "Furtive Signals",
    type: "Feat",
    id: "ID_FMP_FEAT_1270",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1270",
    categories: ["Furtive Signals", "ID_FMP_FEAT_1270", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Garrote Expert"] = new engine.RulesElement({
    name: "Garrote Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1290",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1290",
    categories: ["Garrote Expert", "ID_FMP_FEAT_1290", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Garrote Novice"] = new engine.RulesElement({
    name: "Garrote Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1289",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1289",
    categories: ["Garrote Novice", "ID_FMP_FEAT_1289", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Garrote Specialist"] = new engine.RulesElement({
    name: "Garrote Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1291",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1291",
    categories: ["Garrote Specialist", "ID_FMP_FEAT_1291", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Garrote Training"] = new engine.RulesElement({
    name: "Garrote Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1288",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1288",
    categories: ["Garrote Training", "ID_FMP_FEAT_1288", "ID_INTERNAL_CATEGORY_MULTICLASS_GARROTE", "Multiclass Garrote", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GARROTE)"]);
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Garrote");
      model.statadd("Sneak Attack Weapons", "Garrote");
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ghostwalker Style"] = new engine.RulesElement({
    name: "Ghostwalker Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1301",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1301",
    categories: ["Ghostwalker Style", "ID_FMP_FEAT_1301"]
  });
  byID[te.id] = te;
  
  te = Feat["Grasping Magpies"] = new engine.RulesElement({
    name: "Grasping Magpies",
    type: "Feat",
    id: "ID_FMP_FEAT_1271",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1271",
    categories: ["Grasping Magpies", "ID_FMP_FEAT_1271", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harlequin Style"] = new engine.RulesElement({
    name: "Harlequin Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1302",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1302",
    categories: ["Harlequin Style", "ID_FMP_FEAT_1302"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Wolf Style"] = new engine.RulesElement({
    name: "Hunting Wolf Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1303",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1303",
    categories: ["Hunting Wolf Style", "ID_FMP_FEAT_1303"]
  });
  byID[te.id] = te;
  
  te = Feat["Impending Doom Style"] = new engine.RulesElement({
    name: "Impending Doom Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1304",
    source: "Dragon Magazine 373,Dragon Magazine Annual 2009",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1304",
    categories: ["Impending Doom Style", "ID_FMP_FEAT_1304"]
  });
  byID[te.id] = te;
  
  te = Feat["Lolthdark Style"] = new engine.RulesElement({
    name: "Lolthdark Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1305",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1305",
    categories: ["Lolthdark Style", "ID_FMP_FEAT_1305"]
  });
  byID[te.id] = te;
  
  te = Feat["Persistent Poison"] = new engine.RulesElement({
    name: "Persistent Poison",
    type: "Feat",
    id: "ID_FMP_FEAT_1264",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1264",
    categories: ["Persistent Poison", "ID_FMP_FEAT_1264"]
  });
  byID[te.id] = te;
  
  te = Feat["Poison Inured"] = new engine.RulesElement({
    name: "Poison Inured",
    type: "Feat",
    id: "ID_FMP_FEAT_1260",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1260",
    categories: ["Poison Inured", "ID_FMP_FEAT_1260"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison effects */ return model.stat("Constitution modifier"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poisoner"] = new engine.RulesElement({
    name: "Poisoner",
    type: "Feat",
    id: "ID_FMP_FEAT_1292",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1292",
    categories: ["Poisoner", "ID_FMP_FEAT_1292", "ID_INTERNAL_CATEGORY_MULTICLASS_POISONER", "Multiclass Poisoner", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_THIEVERY"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poisoner Expert"] = new engine.RulesElement({
    name: "Poisoner Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1294",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1294",
    categories: ["Poisoner Expert", "ID_FMP_FEAT_1294", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poisoner Novice"] = new engine.RulesElement({
    name: "Poisoner Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1293",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1293",
    categories: ["Poisoner Novice", "ID_FMP_FEAT_1293", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poisoner Specialist"] = new engine.RulesElement({
    name: "Poisoner Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1295",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1295",
    categories: ["Poisoner Specialist", "ID_FMP_FEAT_1295", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poison's Partner"] = new engine.RulesElement({
    name: "Poison's Partner",
    type: "Feat",
    id: "ID_FMP_FEAT_1268",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1268",
    categories: ["Poison's Partner", "ID_FMP_FEAT_1268"]
  });
  byID[te.id] = te;
  
  te = Feat["Precision Ambush Style"] = new engine.RulesElement({
    name: "Precision Ambush Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1306",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1306",
    categories: ["Precision Ambush Style", "ID_FMP_FEAT_1306"]
  });
  byID[te.id] = te;
  
  te = Feat["Prime Punisher"] = new engine.RulesElement({
    name: "Prime Punisher",
    type: "Feat",
    id: "ID_FMP_FEAT_1265",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1265",
    categories: ["Prime Punisher", "ID_FMP_FEAT_1265"]
  });
  byID[te.id] = te;
  
  te = Feat["Roof Runners"] = new engine.RulesElement({
    name: "Roof Runners",
    type: "Feat",
    id: "ID_FMP_FEAT_1272",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1272",
    categories: ["Roof Runners", "ID_FMP_FEAT_1272", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Serpent Fang Style"] = new engine.RulesElement({
    name: "Serpent Fang Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1307",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1307",
    categories: ["Serpent Fang Style", "ID_FMP_FEAT_1307"]
  });
  byID[te.id] = te;
  
  te = Feat["Silent Shadows"] = new engine.RulesElement({
    name: "Silent Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_1273",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1273",
    categories: ["Silent Shadows", "ID_FMP_FEAT_1273", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slow Fall"] = new engine.RulesElement({
    name: "Slow Fall",
    type: "Feat",
    id: "ID_FMP_FEAT_1261",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1261",
    categories: ["Slow Fall", "ID_FMP_FEAT_1261"]
  });
  byID[te.id] = te;
  
  te = Feat["Street Eyes"] = new engine.RulesElement({
    name: "Street Eyes",
    type: "Feat",
    id: "ID_FMP_FEAT_1274",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1274",
    categories: ["Street Eyes", "ID_FMP_FEAT_1274", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unexpected Escape"] = new engine.RulesElement({
    name: "Unexpected Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_1266",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1266",
    categories: ["Unexpected Escape", "ID_FMP_FEAT_1266"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* to escape a grab */ return 4; });
      model.statadd("Athletics Misc", function() { /* to escape a grab */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Untraceable"] = new engine.RulesElement({
    name: "Untraceable",
    type: "Feat",
    id: "ID_FMP_FEAT_1269",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1269",
    categories: ["Untraceable", "ID_FMP_FEAT_1269"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* against creatures that cannot see you */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vigilante Justice Style"] = new engine.RulesElement({
    name: "Vigilante Justice Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1308",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1308",
    categories: ["Vigilante Justice Style", "ID_FMP_FEAT_1308"]
  });
  byID[te.id] = te;
  
  te = Feat["Wall Crawlers"] = new engine.RulesElement({
    name: "Wall Crawlers",
    type: "Feat",
    id: "ID_FMP_FEAT_1275",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1275",
    categories: ["Wall Crawlers", "ID_FMP_FEAT_1275", "ID_INTERNAL_CATEGORY_GUILD", "Guild"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
