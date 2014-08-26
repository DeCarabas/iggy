define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Ancient Covenant of Nessus"] = new engine.RulesElement({
    name: "Ancient Covenant of Nessus",
    type: "Feat",
    id: "ID_FMP_FEAT_2285",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2285",
    categories: ["Ancient Covenant of Nessus", "ID_FMP_FEAT_2285"]
  });
  byID[te.id] = te;
  
  te = Feat["Baalzebul's Desperate Gambit"] = new engine.RulesElement({
    name: "Baalzebul's Desperate Gambit",
    type: "Feat",
    id: "ID_FMP_FEAT_2304",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2304",
    categories: ["Baalzebul's Desperate Gambit", "ID_FMP_FEAT_2304"]
  });
  byID[te.id] = te;
  
  te = Feat["Bel's Impending Victory"] = new engine.RulesElement({
    name: "Bel's Impending Victory",
    type: "Feat",
    id: "ID_FMP_FEAT_2305",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2305",
    categories: ["Bel's Impending Victory", "ID_FMP_FEAT_2305"]
  });
  byID[te.id] = te;
  
  te = Feat["Blood of Levistus"] = new engine.RulesElement({
    name: "Blood of Levistus",
    type: "Feat",
    id: "ID_FMP_FEAT_2306",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2306",
    categories: ["Blood of Levistus", "ID_FMP_FEAT_2306"],
    rules: function(model) {
      model.statadd("Blood of Levistus", 5);
      model.statadd("Blood of Levistus", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:cold", function() { return model.stat("Blood of Levistus"); }, "resist");
      model.statadd("cold:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blood Pact of Cania"] = new engine.RulesElement({
    name: "Blood Pact of Cania",
    type: "Feat",
    id: "ID_FMP_FEAT_2286",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2286",
    categories: ["Blood Pact of Cania", "ID_FMP_FEAT_2286"],
    rules: function(model) {
      model.statadd("Blood Pact of Cania", 2);
      model.statadd("Constitution,ID_FMP_CLASS_7:damage", function() { return model.stat("Blood Pact of Cania"); });
      model.statadd("Blood Pact of Cania", 1);
      model.statadd("Blood Pact of Cania", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bloodhunter's Dread"] = new engine.RulesElement({
    name: "Bloodhunter's Dread",
    type: "Feat",
    id: "ID_FMP_FEAT_2287",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2287",
    categories: ["Bloodhunter's Dread", "ID_FMP_FEAT_2287"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodhunter's Flank"] = new engine.RulesElement({
    name: "Bloodhunter's Flank",
    type: "Feat",
    id: "ID_FMP_FEAT_2288",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2288",
    categories: ["Bloodhunter's Flank", "ID_FMP_FEAT_2288"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a bloodied foe you flank */ return 2; });
      model.statadd("Bloodhunter's Flank", 1);
      model.statadd("Bloodhunter's Flank", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Burning Wrath of Phlegethos"] = new engine.RulesElement({
    name: "Burning Wrath of Phlegethos",
    type: "Feat",
    id: "ID_FMP_FEAT_2289",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2289",
    categories: ["Burning Wrath of Phlegethos", "ID_FMP_FEAT_2289"]
  });
  byID[te.id] = te;
  
  te = Feat["Clever Tail"] = new engine.RulesElement({
    name: "Clever Tail",
    type: "Feat",
    id: "ID_FMP_FEAT_2290",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2290",
    categories: ["Clever Tail", "ID_FMP_FEAT_2290"]
  });
  byID[te.id] = te;
  
  te = Feat["Cloying Shadow of Maladomini"] = new engine.RulesElement({
    name: "Cloying Shadow of Maladomini",
    type: "Feat",
    id: "ID_FMP_FEAT_2291",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2291",
    categories: ["Cloying Shadow of Maladomini", "ID_FMP_FEAT_2291"]
  });
  byID[te.id] = te;
  
  te = Feat["Dispater's Iron Discipline"] = new engine.RulesElement({
    name: "Dispater's Iron Discipline",
    type: "Feat",
    id: "ID_FMP_FEAT_2307",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2307",
    categories: ["Dispater's Iron Discipline", "ID_FMP_FEAT_2307"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Feat");
      model.statadd("Dispater's Iron Discipline", function() { return model.stat("Charisma modifier"); }, "Dispater's Iron Discipline");
      model.statadd("Dispater's Iron Discipline", function() { return model.stat("Intelligence modifier"); }, "Dispater's Iron Discipline");
      model.statadd("Saving Throws", function() { /* to end an effect that stuns, dominates, or dazes you */ return model.stat("Dispater's Iron Discipline"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Glasya's Charming Words"] = new engine.RulesElement({
    name: "Glasya's Charming Words",
    type: "Feat",
    id: "ID_FMP_FEAT_2308",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2308",
    categories: ["Glasya's Charming Words", "ID_FMP_FEAT_2308"],
    rules: function(model) {
      model.statadd("charm:attack", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hellbook"] = new engine.RulesElement({
    name: "Hellbook",
    type: "Feat",
    id: "ID_FMP_FEAT_2292",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2292",
    categories: ["Hellbook", "ID_FMP_FEAT_2292"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire of Mephistopheles"] = new engine.RulesElement({
    name: "Hellfire of Mephistopheles",
    type: "Feat",
    id: "ID_FMP_FEAT_2309",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2309",
    categories: ["Hellfire of Mephistopheles", "ID_FMP_FEAT_2309"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Teleport"] = new engine.RulesElement({
    name: "Hellfire Teleport",
    type: "Feat",
    id: "ID_FMP_FEAT_2313",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2313",
    categories: ["Hellfire Teleport", "ID_FMP_FEAT_2313"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellish Blast"] = new engine.RulesElement({
    name: "Hellish Blast",
    type: "Feat",
    id: "ID_FMP_FEAT_2293",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2293",
    categories: ["Hellish Blast", "ID_FMP_FEAT_2293"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Hellish Blast", 1);
      model.statadd("Hellish Blast", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hell's Burning Mark"] = new engine.RulesElement({
    name: "Hell's Burning Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2314",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2314",
    categories: ["Hell's Burning Mark", "ID_FMP_FEAT_2314"]
  });
  byID[te.id] = te;
  
  te = Feat["Icy Clutch of Stygia"] = new engine.RulesElement({
    name: "Icy Clutch of Stygia",
    type: "Feat",
    id: "ID_FMP_FEAT_2294",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2294",
    categories: ["Icy Clutch of Stygia", "ID_FMP_FEAT_2294"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Touch of Warding"] = new engine.RulesElement({
    name: "Infernal Touch of Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_2295",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2295",
    categories: ["Infernal Touch of Warding", "ID_FMP_FEAT_2295"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Insatiable Rage of Minauros"] = new engine.RulesElement({
    name: "Insatiable Rage of Minauros",
    type: "Feat",
    id: "ID_FMP_FEAT_2296",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2296",
    categories: ["Insatiable Rage of Minauros", "ID_FMP_FEAT_2296"],
    rules: function(model) {
      model.statadd("Insatiable Rage of Minauros", 2);
      model.statadd("Insatiable Rage of Minauros", 1);
      model.statadd("Insatiable Rage of Minauros", 2);
      model.statadd("melee:damage", function() { /* while you are raging */ return model.stat("Insatiable Rage of Minauros"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mammon's Theft of Health"] = new engine.RulesElement({
    name: "Mammon's Theft of Health",
    type: "Feat",
    id: "ID_FMP_FEAT_2310",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2310",
    categories: ["Mammon's Theft of Health", "ID_FMP_FEAT_2310"]
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Corruption of Malbolge"] = new engine.RulesElement({
    name: "Psychic Corruption of Malbolge",
    type: "Feat",
    id: "ID_FMP_FEAT_2297",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2297",
    categories: ["Psychic Corruption of Malbolge", "ID_FMP_FEAT_2297"]
  });
  byID[te.id] = te;
  
  te = Feat["Renewed Wrath"] = new engine.RulesElement({
    name: "Renewed Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2315",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2315",
    categories: ["Renewed Wrath", "ID_FMP_FEAT_2315"]
  });
  byID[te.id] = te;
  
  te = Feat["Royal Command of Asmodeus"] = new engine.RulesElement({
    name: "Royal Command of Asmodeus",
    type: "Feat",
    id: "ID_FMP_FEAT_2316",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2316",
    categories: ["Royal Command of Asmodeus", "ID_FMP_FEAT_2316"]
  });
  byID[te.id] = te;
  
  te = Feat["Secrets of Belial"] = new engine.RulesElement({
    name: "Secrets of Belial",
    type: "Feat",
    id: "ID_FMP_FEAT_2311",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2311",
    categories: ["Secrets of Belial", "ID_FMP_FEAT_2311"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stirring Song of Baator"] = new engine.RulesElement({
    name: "Stirring Song of Baator",
    type: "Feat",
    id: "ID_FMP_FEAT_2298",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2298",
    categories: ["Stirring Song of Baator", "ID_FMP_FEAT_2298"]
  });
  byID[te.id] = te;
  
  te = Feat["Tail Slide"] = new engine.RulesElement({
    name: "Tail Slide",
    type: "Feat",
    id: "ID_FMP_FEAT_2299",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2299",
    categories: ["Tail Slide", "ID_FMP_FEAT_2299"]
  });
  byID[te.id] = te;
  
  te = Feat["Tail Trip"] = new engine.RulesElement({
    name: "Tail Trip",
    type: "Feat",
    id: "ID_FMP_FEAT_2312",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2312",
    categories: ["Tail Trip", "ID_FMP_FEAT_2312"]
  });
  byID[te.id] = te;
  
  te = Feat["Turathi Spirit Companion"] = new engine.RulesElement({
    name: "Turathi Spirit Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_2300",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2300",
    categories: ["Turathi Spirit Companion", "ID_FMP_FEAT_2300"]
  });
  byID[te.id] = te;
  
  te = Feat["Turathi Weapon Training"] = new engine.RulesElement({
    name: "Turathi Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2301",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2301",
    categories: ["Turathi Weapon Training", "ID_FMP_FEAT_2301"],
    rules: function(model) {
      model.statadd("Turathi Weapon Training", 2);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
      model.statadd("Khopesh:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)"]);
      model.statadd("Scourge:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
      model.statadd("Sickle:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
      model.statadd("Scythe:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.statadd("Scimitar:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.statadd("Falchion:damage", function() { return model.stat("Turathi Weapon Training"); }, "Feat");
      model.statadd("Turathi Weapon Training", 1);
      model.statadd("Turathi Weapon Training", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["War Captain of Avernus"] = new engine.RulesElement({
    name: "War Captain of Avernus",
    type: "Feat",
    id: "ID_FMP_FEAT_2302",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2302",
    categories: ["War Captain of Avernus", "ID_FMP_FEAT_2302"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
