define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Aggressive Familiar"] = new engine.RulesElement({
    name: "Aggressive Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1334",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1334",
    categories: ["Aggressive Familiar", "ID_FMP_FEAT_1334", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Alert Familiar"] = new engine.RulesElement({
    name: "Alert Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1335",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1335",
    categories: ["Alert Familiar", "ID_FMP_FEAT_1335", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Anthem of Civilization"] = new engine.RulesElement({
    name: "Anthem of Civilization",
    type: "Feat",
    id: "ID_FMP_FEAT_1360",
    source: "Dragon Magazine 374,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1360",
    categories: ["Anthem of Civilization", "ID_FMP_FEAT_1360", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7444"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle Intuition"] = new engine.RulesElement({
    name: "Battle Intuition",
    type: "Feat",
    id: "ID_FMP_FEAT_1346",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1346",
    categories: ["Battle Intuition", "ID_FMP_FEAT_1346"],
    rules: function(model) {
      model.statadd("Initiative", function() { return model.stat("Wisdom modifier"); }, "Ability");
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Creation Secret"] = new engine.RulesElement({
    name: "Creation Secret",
    type: "Feat",
    id: "ID_FMP_FEAT_1362",
    source: "Dragon Magazine 374,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1362",
    categories: ["Creation Secret", "ID_FMP_FEAT_1362", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7445"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Deva Heritage"] = new engine.RulesElement({
    name: "Deva Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_1347",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1347",
    categories: ["Deva Heritage", "ID_FMP_FEAT_1347", "ID_INTERNAL_INTERNAL_DEVA_BLOODLINE", "Deva Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7433"]);
      model.statadd("Perception Misc", function() { /* against angels, devas, devils, and rakshasas */ return 2; });
      model.statadd("Insight Misc", function() { /* against angels, devas, devils, and rakshasas */ return 2; });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DEVA_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Frost Step"] = new engine.RulesElement({
    name: "Frost Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1358",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1358",
    categories: ["Frost Step", "ID_FMP_FEAT_1358"]
  });
  byID[te.id] = te;
  
  te = Feat["Heavenly Heritage"] = new engine.RulesElement({
    name: "Heavenly Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_1348",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1348",
    categories: ["Heavenly Heritage", "ID_FMP_FEAT_1348", "ID_INTERNAL_INTERNAL_DEVA_BLOODLINE", "Deva Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DEVA_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Immediate Justice"] = new engine.RulesElement({
    name: "Immediate Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_1364",
    source: "Dragon Magazine 374,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1364",
    categories: ["Immediate Justice", "ID_FMP_FEAT_1364", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7446"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Immortal Prowess"] = new engine.RulesElement({
    name: "Immortal Prowess",
    type: "Feat",
    id: "ID_FMP_FEAT_1356",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1356",
    categories: ["Immortal Prowess", "ID_FMP_FEAT_1356"]
  });
  byID[te.id] = te;
  
  te = Feat["Immortal Resilience"] = new engine.RulesElement({
    name: "Immortal Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_1353",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1353",
    categories: ["Immortal Resilience", "ID_FMP_FEAT_1353"]
  });
  byID[te.id] = te;
  
  te = Feat["Immortal Skill"] = new engine.RulesElement({
    name: "Immortal Skill",
    type: "Feat",
    id: "ID_FMP_FEAT_1349",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1349",
    categories: ["Immortal Skill", "ID_FMP_FEAT_1349"]
  });
  byID[te.id] = te;
  
  te = Feat["Power of Civilization"] = new engine.RulesElement({
    name: "Power of Civilization",
    type: "Feat",
    id: "ID_FMP_FEAT_1359",
    source: "Dragon Magazine 374,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1359",
    categories: ["Power of Civilization", "ID_FMP_FEAT_1359", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Justice"] = new engine.RulesElement({
    name: "Power of Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_1363",
    source: "Dragon Magazine 374,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1363",
    categories: ["Power of Justice", "ID_FMP_FEAT_1363", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Quick Familiar"] = new engine.RulesElement({
    name: "Quick Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1336",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1336",
    categories: ["Quick Familiar", "ID_FMP_FEAT_1336", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Recovery"] = new engine.RulesElement({
    name: "Radiant Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_1350",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1350",
    categories: ["Radiant Recovery", "ID_FMP_FEAT_1350", "ID_INTERNAL_INTERNAL_DEVA_BLOODLINE", "Deva Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DEVA_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Remembered Mother Tongue"] = new engine.RulesElement({
    name: "Remembered Mother Tongue",
    type: "Feat",
    id: "ID_FMP_FEAT_1354",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1354",
    categories: ["Remembered Mother Tongue", "ID_FMP_FEAT_1354"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Scourge of the Fallen"] = new engine.RulesElement({
    name: "Scourge of the Fallen",
    type: "Feat",
    id: "ID_FMP_FEAT_1351",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1351",
    categories: ["Scourge of the Fallen", "ID_FMP_FEAT_1351"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Channeling"] = new engine.RulesElement({
    name: "Shared Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_1355",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1355",
    categories: ["Shared Channeling", "ID_FMP_FEAT_1355"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Speed"] = new engine.RulesElement({
    name: "Shared Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_1337",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1337",
    categories: ["Shared Speed", "ID_FMP_FEAT_1337", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      model.statadd("Speed", 1, "Feat");
      model.statadd("FAMILIAR.Speed", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Upright Revival"] = new engine.RulesElement({
    name: "Upright Revival",
    type: "Feat",
    id: "ID_FMP_FEAT_1352",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1352",
    categories: ["Upright Revival", "ID_FMP_FEAT_1352"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Defense"] = new engine.RulesElement({
    name: "White Lotus Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1338",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1338",
    categories: ["White Lotus Defense", "ID_FMP_FEAT_1338"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Enervation"] = new engine.RulesElement({
    name: "White Lotus Enervation",
    type: "Feat",
    id: "ID_FMP_FEAT_1339",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1339",
    categories: ["White Lotus Enervation", "ID_FMP_FEAT_1339"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Evasion"] = new engine.RulesElement({
    name: "White Lotus Evasion",
    type: "Feat",
    id: "ID_FMP_FEAT_1340",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1340",
    categories: ["White Lotus Evasion", "ID_FMP_FEAT_1340"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Hindrance"] = new engine.RulesElement({
    name: "White Lotus Hindrance",
    type: "Feat",
    id: "ID_FMP_FEAT_1341",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1341",
    categories: ["White Lotus Hindrance", "ID_FMP_FEAT_1341"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Master Evasion"] = new engine.RulesElement({
    name: "White Lotus Master Evasion",
    type: "Feat",
    id: "ID_FMP_FEAT_1343",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1343",
    categories: ["White Lotus Master Evasion", "ID_FMP_FEAT_1343"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Master Hindrance"] = new engine.RulesElement({
    name: "White Lotus Master Hindrance",
    type: "Feat",
    id: "ID_FMP_FEAT_1344",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1344",
    categories: ["White Lotus Master Hindrance", "ID_FMP_FEAT_1344"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Master Riposte"] = new engine.RulesElement({
    name: "White Lotus Master Riposte",
    type: "Feat",
    id: "ID_FMP_FEAT_1345",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1345",
    categories: ["White Lotus Master Riposte", "ID_FMP_FEAT_1345"]
  });
  byID[te.id] = te;
  
  te = Feat["White Lotus Riposte"] = new engine.RulesElement({
    name: "White Lotus Riposte",
    type: "Feat",
    id: "ID_FMP_FEAT_1342",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1342",
    categories: ["White Lotus Riposte", "ID_FMP_FEAT_1342"]
  });
  byID[te.id] = te;
  
  te = Feat["Winged Revival"] = new engine.RulesElement({
    name: "Winged Revival",
    type: "Feat",
    id: "ID_FMP_FEAT_1357",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1357",
    categories: ["Winged Revival", "ID_FMP_FEAT_1357"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
