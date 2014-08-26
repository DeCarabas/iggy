define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Aberrant Mark of Contagion"] = new engine.RulesElement({
    name: "Aberrant Mark of Contagion",
    type: "Feat",
    id: "ID_FMP_FEAT_1367",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1367",
    categories: ["Aberrant Mark of Contagion", "ID_FMP_FEAT_1367", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Aberrant Mark of Madness"] = new engine.RulesElement({
    name: "Aberrant Mark of Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_1368",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1368",
    categories: ["Aberrant Mark of Madness", "ID_FMP_FEAT_1368", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Aberrant Mark of Terror"] = new engine.RulesElement({
    name: "Aberrant Mark of Terror",
    type: "Feat",
    id: "ID_FMP_FEAT_1369",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1369",
    categories: ["Aberrant Mark of Terror", "ID_FMP_FEAT_1369", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Accurate Magic Weapon"] = new engine.RulesElement({
    name: "Accurate Magic Weapon",
    type: "Feat",
    id: "ID_FMP_FEAT_1370",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1370",
    categories: ["Accurate Magic Weapon", "ID_FMP_FEAT_1370"]
  });
  byID[te.id] = te;
  
  te = Feat["Aerenal Arcanist"] = new engine.RulesElement({
    name: "Aerenal Arcanist",
    type: "Feat",
    id: "ID_FMP_FEAT_1371",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1371",
    categories: ["Aerenal Arcanist", "ID_FMP_FEAT_1371"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("utility") && element.hasCategory("2")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("utility") && element.hasCategory("6")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("utility") && element.hasCategory("16")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("utility") && element.hasCategory("22")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Aerenal Half-Life"] = new engine.RulesElement({
    name: "Aerenal Half-Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1372",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1372",
    categories: ["Aerenal Half-Life", "ID_FMP_FEAT_1372"],
    rules: function(model) {
      model.statadd("necrotic:damage", 1, "Feat");
      model.statadd("Aerenal Half-Life", 1);
      model.statadd("Aerenal Half-Life", 1);
      model.statadd("Action Point", "Aerenal Half-Life:When you spend an action point to take an extra action, you gain a +Heroic feat bonus to attack rolls with necrotic powers until the end of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Alchemist"] = new engine.RulesElement({
    name: "Alchemist",
    type: "Feat",
    id: "ID_FMP_FEAT_652",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=652",
    categories: ["Alchemist", "ID_FMP_FEAT_652", "ID_FMP_CLASS_FEATURE_683", "Ritual Casting"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ALCHEMICAL_ITEMS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ancestral Guidance"] = new engine.RulesElement({
    name: "Ancestral Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_1374",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1374",
    categories: ["Ancestral Guidance", "ID_FMP_FEAT_1374", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7621"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arawai's Abundance"] = new engine.RulesElement({
    name: "Arawai's Abundance",
    type: "Feat",
    id: "ID_FMP_FEAT_1375",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1375",
    categories: ["Arawai's Abundance", "ID_FMP_FEAT_1375", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7622"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Aureon's Instruction"] = new engine.RulesElement({
    name: "Aureon's Instruction",
    type: "Feat",
    id: "ID_FMP_FEAT_1376",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1376",
    categories: ["Aureon's Instruction", "ID_FMP_FEAT_1376", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7623"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Balinor's Prey"] = new engine.RulesElement({
    name: "Balinor's Prey",
    type: "Feat",
    id: "ID_FMP_FEAT_1377",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1377",
    categories: ["Balinor's Prey", "ID_FMP_FEAT_1377", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7624"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beacon of Dol Arrah"] = new engine.RulesElement({
    name: "Beacon of Dol Arrah",
    type: "Feat",
    id: "ID_FMP_FEAT_1378",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1378",
    categories: ["Beacon of Dol Arrah", "ID_FMP_FEAT_1378", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7625"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Boldrei's Shelter"] = new engine.RulesElement({
    name: "Boldrei's Shelter",
    type: "Feat",
    id: "ID_FMP_FEAT_1379",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1379",
    categories: ["Boldrei's Shelter", "ID_FMP_FEAT_1379", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7626"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Component Modification"] = new engine.RulesElement({
    name: "Component Modification",
    type: "Feat",
    id: "ID_FMP_FEAT_443",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=443",
    categories: ["Component Modification", "ID_FMP_FEAT_443"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Minions"] = new engine.RulesElement({
    name: "Defensive Minions",
    type: "Feat",
    id: "ID_FMP_FEAT_1380",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1380",
    categories: ["Defensive Minions", "ID_FMP_FEAT_1380"]
  });
  byID[te.id] = te;
  
  te = Feat["Eldeen Companion"] = new engine.RulesElement({
    name: "Eldeen Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_1381",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1381",
    categories: ["Eldeen Companion", "ID_FMP_FEAT_1381"]
  });
  byID[te.id] = te;
  
  te = Feat["Enhanced Resistive Formula"] = new engine.RulesElement({
    name: "Enhanced Resistive Formula",
    type: "Feat",
    id: "ID_FMP_FEAT_1416",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1416",
    categories: ["Enhanced Resistive Formula", "ID_FMP_FEAT_1416"]
  });
  byID[te.id] = te;
  
  te = Feat["Extended Telepathy"] = new engine.RulesElement({
    name: "Extended Telepathy",
    type: "Feat",
    id: "ID_FMP_FEAT_1417",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1417",
    categories: ["Extended Telepathy", "ID_FMP_FEAT_1417"],
    rules: function(model) {
      model.statadd("Telepathy", 10, "Telepathy");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fluid Anatomy"] = new engine.RulesElement({
    name: "Fluid Anatomy",
    type: "Feat",
    id: "ID_FMP_FEAT_1420",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1420",
    categories: ["Fluid Anatomy", "ID_FMP_FEAT_1420"]
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Defense"] = new engine.RulesElement({
    name: "Forceful Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1382",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1382",
    categories: ["Forceful Defense", "ID_FMP_FEAT_1382"]
  });
  byID[te.id] = te;
  
  te = Feat["Group Mindlink"] = new engine.RulesElement({
    name: "Group Mindlink",
    type: "Feat",
    id: "ID_FMP_FEAT_1383",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1383",
    categories: ["Group Mindlink", "ID_FMP_FEAT_1383"]
  });
  byID[te.id] = te;
  
  te = Feat["Immutability"] = new engine.RulesElement({
    name: "Immutability",
    type: "Feat",
    id: "ID_FMP_FEAT_444",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=444",
    categories: ["Immutability", "ID_FMP_FEAT_444"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Immutability"] = new engine.RulesElement({
    name: "Improved Immutability",
    type: "Feat",
    id: "ID_FMP_FEAT_447",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=447",
    categories: ["Improved Immutability", "ID_FMP_FEAT_447"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Warforged Resolve"] = new engine.RulesElement({
    name: "Improved Warforged Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_445",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=445",
    categories: ["Improved Warforged Resolve", "ID_FMP_FEAT_445"]
  });
  byID[te.id] = te;
  
  te = Feat["Kol Korran's Boon"] = new engine.RulesElement({
    name: "Kol Korran's Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_1385",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1385",
    categories: ["Kol Korran's Boon", "ID_FMP_FEAT_1385", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7627"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Light Within"] = new engine.RulesElement({
    name: "Light Within",
    type: "Feat",
    id: "ID_FMP_FEAT_1386",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1386",
    categories: ["Light Within", "ID_FMP_FEAT_1386", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7628"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Detection"] = new engine.RulesElement({
    name: "Mark of Detection",
    type: "Feat",
    id: "ID_FMP_FEAT_1387",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1387",
    categories: ["Mark of Detection", "ID_FMP_FEAT_1387", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Finding"] = new engine.RulesElement({
    name: "Mark of Finding",
    type: "Feat",
    id: "ID_FMP_FEAT_1388",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1388",
    categories: ["Mark of Finding", "ID_FMP_FEAT_1388", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Handling"] = new engine.RulesElement({
    name: "Mark of Handling",
    type: "Feat",
    id: "ID_FMP_FEAT_1389",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1389",
    categories: ["Mark of Handling", "ID_FMP_FEAT_1389", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"],
    rules: function(model) {
      model.statadd("BEAST.Speed", 2, "Feat");
      model.statadd("BEAST.AC", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Healing"] = new engine.RulesElement({
    name: "Mark of Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1390",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1390",
    categories: ["Mark of Healing", "ID_FMP_FEAT_1390", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Hospitality"] = new engine.RulesElement({
    name: "Mark of Hospitality",
    type: "Feat",
    id: "ID_FMP_FEAT_1391",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1391",
    categories: ["Mark of Hospitality", "ID_FMP_FEAT_1391", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Making"] = new engine.RulesElement({
    name: "Mark of Making",
    type: "Feat",
    id: "ID_FMP_FEAT_1392",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1392",
    categories: ["Mark of Making", "ID_FMP_FEAT_1392", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ALCHEMICAL_ITEMS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Passage"] = new engine.RulesElement({
    name: "Mark of Passage",
    type: "Feat",
    id: "ID_FMP_FEAT_1393",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1393",
    categories: ["Mark of Passage", "ID_FMP_FEAT_1393", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Scribing"] = new engine.RulesElement({
    name: "Mark of Scribing",
    type: "Feat",
    id: "ID_FMP_FEAT_1394",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1394",
    categories: ["Mark of Scribing", "ID_FMP_FEAT_1394", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"],
    rules: function(model) {
      model.select('Language', 4);
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Sentinel"] = new engine.RulesElement({
    name: "Mark of Sentinel",
    type: "Feat",
    id: "ID_FMP_FEAT_1395",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1395",
    categories: ["Mark of Sentinel", "ID_FMP_FEAT_1395", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Shadow"] = new engine.RulesElement({
    name: "Mark of Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_1396",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1396",
    categories: ["Mark of Shadow", "ID_FMP_FEAT_1396", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Storm"] = new engine.RulesElement({
    name: "Mark of Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_1397",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1397",
    categories: ["Mark of Storm", "ID_FMP_FEAT_1397", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of Warding"] = new engine.RulesElement({
    name: "Mark of Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_1398",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1398",
    categories: ["Mark of Warding", "ID_FMP_FEAT_1398", "ID_INTERNAL_CATEGORY_DRAGONMARK", "Dragonmark"]
  });
  byID[te.id] = te;
  
  te = Feat["Master Crafter"] = new engine.RulesElement({
    name: "Master Crafter",
    type: "Feat",
    id: "ID_FMP_FEAT_1399",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1399",
    categories: ["Master Crafter", "ID_FMP_FEAT_1399"]
  });
  byID[te.id] = te;
  
  te = Feat["Master Mixer"] = new engine.RulesElement({
    name: "Master Mixer",
    type: "Feat",
    id: "ID_FMP_FEAT_1400",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1400",
    categories: ["Master Mixer", "ID_FMP_FEAT_1400", "ID_FMP_CLASS_FEATURE_683", "Ritual Casting"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ALCHEMICAL_ITEMS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Might of Dol Dorn"] = new engine.RulesElement({
    name: "Might of Dol Dorn",
    type: "Feat",
    id: "ID_FMP_FEAT_1401",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1401",
    categories: ["Might of Dol Dorn", "ID_FMP_FEAT_1401", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7629"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mror Stalwart"] = new engine.RulesElement({
    name: "Mror Stalwart",
    type: "Feat",
    id: "ID_FMP_FEAT_1402",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1402",
    categories: ["Mror Stalwart", "ID_FMP_FEAT_1402"],
    rules: function(model) {
      model.statadd("axe:attack", function() { /* if you haven't moved since the start of your turn */ return 1; }, "Feat");
      model.statadd("hammer:attack", function() { /* if you haven't moved since the start of your turn */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Onatar's Gift"] = new engine.RulesElement({
    name: "Onatar's Gift",
    type: "Feat",
    id: "ID_FMP_FEAT_1403",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1403",
    categories: ["Onatar's Gift", "ID_FMP_FEAT_1403", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7630"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Potent Restorables"] = new engine.RulesElement({
    name: "Potent Restorables",
    type: "Feat",
    id: "ID_FMP_FEAT_1404",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1404",
    categories: ["Potent Restorables", "ID_FMP_FEAT_1404"],
    rules: function(model) {
      model.statadd("Potent Restorables", 2);
      model.statadd("Potent Restorables", 1);
      model.statadd("Potent Restorables", 1);
      model.statadd("Potent Restorables", 1);
      model.statadd("Potent Restorables", 1);
      model.statadd("Potent Restorables", 1);
      model.statadd("ID_FMP_CLASS_125:healing", function() { return model.stat("Potent Restorables"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Quori Backlash"] = new engine.RulesElement({
    name: "Quori Backlash",
    type: "Feat",
    id: "ID_FMP_FEAT_1419",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1419",
    categories: ["Quori Backlash", "ID_FMP_FEAT_1419"]
  });
  byID[te.id] = te;
  
  te = Feat["Quori Desperation"] = new engine.RulesElement({
    name: "Quori Desperation",
    type: "Feat",
    id: "ID_FMP_FEAT_1421",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1421",
    categories: ["Quori Desperation", "ID_FMP_FEAT_1421"]
  });
  byID[te.id] = te;
  
  te = Feat["Quori Shield"] = new engine.RulesElement({
    name: "Quori Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_1405",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1405",
    categories: ["Quori Shield", "ID_FMP_FEAT_1405"],
    rules: function(model) {
      model.statadd("Quori Shield", 5);
      model.statadd("Quori Shield", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:psychic damage", function() { return model.stat("Quori Shield"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reinforcing Healing"] = new engine.RulesElement({
    name: "Reinforcing Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1422",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1422",
    categories: ["Reinforcing Healing", "ID_FMP_FEAT_1422"]
  });
  byID[te.id] = te;
  
  te = Feat["Shapeshifting Contortionist"] = new engine.RulesElement({
    name: "Shapeshifting Contortionist",
    type: "Feat",
    id: "ID_FMP_FEAT_1406",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1406",
    categories: ["Shapeshifting Contortionist", "ID_FMP_FEAT_1406"]
  });
  byID[te.id] = te;
  
  te = Feat["Shield of the Silver Flame"] = new engine.RulesElement({
    name: "Shield of the Silver Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_1407",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1407",
    categories: ["Shield of the Silver Flame", "ID_FMP_FEAT_1407", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7631"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shifter's Agility"] = new engine.RulesElement({
    name: "Shifter's Agility",
    type: "Feat",
    id: "ID_FMP_FEAT_1408",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1408",
    categories: ["Shifter's Agility", "ID_FMP_FEAT_1408"]
  });
  byID[te.id] = te;
  
  te = Feat["Sovereign Justice"] = new engine.RulesElement({
    name: "Sovereign Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_1409",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1409",
    categories: ["Sovereign Justice", "ID_FMP_FEAT_1409", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7632"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of Artifice"] = new engine.RulesElement({
    name: "Student of Artifice",
    type: "Feat",
    id: "ID_FMP_FEAT_1423",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1423",
    categories: ["Student of Artifice", "ID_FMP_FEAT_1423", "ID_INTERNAL_CATEGORY_MULTICLASS_ARTIFICER", "Multiclass Artificer", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(model.elements.id["ID_FMP_POWER_7635"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_4128"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ARTIFICER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ARTIFICER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sturdy Shifter"] = new engine.RulesElement({
    name: "Sturdy Shifter",
    type: "Feat",
    id: "ID_FMP_FEAT_1410",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1410",
    categories: ["Sturdy Shifter", "ID_FMP_FEAT_1410"]
  });
  byID[te.id] = te;
  
  te = Feat["Talenta Weapon Training"] = new engine.RulesElement({
    name: "Talenta Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1411",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1411",
    categories: ["Talenta Weapon Training", "ID_FMP_FEAT_1411"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_TANGAT)"]);
      model.statadd("Talenta Boomerang:damage", 2, "Feat");
      model.statadd("Talenta Sharrash:damage", 2, "Feat");
      model.statadd("Talenta Tangat:damage", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Telepathic Sensitivity"] = new engine.RulesElement({
    name: "Telepathic Sensitivity",
    type: "Feat",
    id: "ID_FMP_FEAT_1412",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1412",
    categories: ["Telepathic Sensitivity", "ID_FMP_FEAT_1412"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* for checks opposed by a creature's Stealth check */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Traveler's Gift"] = new engine.RulesElement({
    name: "Traveler's Gift",
    type: "Feat",
    id: "ID_FMP_FEAT_1413",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1413",
    categories: ["Traveler's Gift", "ID_FMP_FEAT_1413", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7633"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Undying's Command"] = new engine.RulesElement({
    name: "Undying's Command",
    type: "Feat",
    id: "ID_FMP_FEAT_1414",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1414",
    categories: ["Undying's Command", "ID_FMP_FEAT_1414", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7634"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Fortification"] = new engine.RulesElement({
    name: "Warforged Fortification",
    type: "Feat",
    id: "ID_FMP_FEAT_448",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=448",
    categories: ["Warforged Fortification", "ID_FMP_FEAT_448"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Tactics"] = new engine.RulesElement({
    name: "Warforged Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_446",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=446",
    categories: ["Warforged Tactics", "ID_FMP_FEAT_446"],
    rules: function(model) {
      model.statadd("melee attack rolls", function() { /* against an enemy that is adjacent to an ally */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Xen'drik Weapon Training"] = new engine.RulesElement({
    name: "Xen'drik Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1415",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1415",
    categories: ["Xen'drik Weapon Training", "ID_FMP_FEAT_1415"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)"]);
      model.statadd("Drow Long Knife:damage", 2, "Feat");
      model.statadd("Xen'drik Boomerang:damage", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
