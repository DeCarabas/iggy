define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Accidental Tells"] = new engine.RulesElement({
    name: "Accidental Tells",
    type: "Feat",
    id: "ID_FMP_FEAT_2577",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2577",
    categories: ["Accidental Tells", "ID_FMP_FEAT_2577", "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE", "Tiefling Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ancestral Wrath"] = new engine.RulesElement({
    name: "Ancestral Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2318",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2318",
    categories: ["Ancestral Wrath", "ID_FMP_FEAT_2318", "ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE", "Dwarven Bloodline"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you are bloodied */ return 1; });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ape's Reach"] = new engine.RulesElement({
    name: "Ape's Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_2276",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2276",
    categories: ["Ape's Reach", "ID_FMP_FEAT_2276"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bane's Tyrannical Transference"] = new engine.RulesElement({
    name: "Bane's Tyrannical Transference",
    type: "Feat",
    id: "ID_FMP_FEAT_2574",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2574",
    categories: ["Bane's Tyrannical Transference", "ID_FMP_FEAT_2574", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11278"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bard of All Trades"] = new engine.RulesElement({
    name: "Bard of All Trades",
    type: "Feat",
    id: "ID_FMP_FEAT_2562",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2562",
    categories: ["Bard of All Trades", "ID_FMP_FEAT_2562"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 3, "Feat");
      model.statadd("Arcana Misc", 3, "Feat");
      model.statadd("Athletics Misc", 3, "Feat");
      model.statadd("Bluff Misc", 3, "Feat");
      model.statadd("Diplomacy Misc", 3, "Feat");
      model.statadd("Dungeoneering Misc", 3, "Feat");
      model.statadd("Endurance Misc", 3, "Feat");
      model.statadd("Heal Misc", 3, "Feat");
      model.statadd("History Misc", 3, "Feat");
      model.statadd("Insight Misc", 3, "Feat");
      model.statadd("Intimidate Misc", 3, "Feat");
      model.statadd("Nature Misc", 3, "Feat");
      model.statadd("Perception Misc", 3, "Feat");
      model.statadd("Religion Misc", 3, "Feat");
      model.statadd("Stealth Misc", 3, "Feat");
      model.statadd("Streetwise Misc", 3, "Feat");
      model.statadd("Thievery Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beast Form Eyes"] = new engine.RulesElement({
    name: "Beast Form Eyes",
    type: "Feat",
    id: "ID_FMP_FEAT_2277",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2277",
    categories: ["Beast Form Eyes", "ID_FMP_FEAT_2277"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Buffeting Winds"] = new engine.RulesElement({
    name: "Buffeting Winds",
    type: "Feat",
    id: "ID_FMP_FEAT_2551",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2551",
    categories: ["Buffeting Winds", "ID_FMP_FEAT_2551"]
  });
  byID[te.id] = te;
  
  te = Feat["Cheetah's Speed"] = new engine.RulesElement({
    name: "Cheetah's Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_2278",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2278",
    categories: ["Cheetah's Speed", "ID_FMP_FEAT_2278"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when you charge or run in beast form and you are bloodied */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Constrictor's Grasp"] = new engine.RulesElement({
    name: "Constrictor's Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_2279",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2279",
    categories: ["Constrictor's Grasp", "ID_FMP_FEAT_2279"]
  });
  byID[te.id] = te;
  
  te = Feat["Die Hard"] = new engine.RulesElement({
    name: "Die Hard",
    type: "Feat",
    id: "ID_FMP_FEAT_2568",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2568",
    categories: ["Die Hard", "ID_FMP_FEAT_2568"]
  });
  byID[te.id] = te;
  
  te = Feat["Don't Count Me Out"] = new engine.RulesElement({
    name: "Don't Count Me Out",
    type: "Feat",
    id: "ID_FMP_FEAT_2569",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2569",
    categories: ["Don't Count Me Out", "ID_FMP_FEAT_2569"],
    rules: function(model) {
      model.statadd("Don't Count Me Out", 2);
      model.statadd("Saving Throws", function() { /* while you are bloodied against effects that immobilize, daze, stun, or weaken you */ return model.stat("Don't Count Me Out"); }, "Feat");
      model.statadd("Don't Count Me Out", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Earth Cage"] = new engine.RulesElement({
    name: "Earth Cage",
    type: "Feat",
    id: "ID_FMP_FEAT_2552",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2552",
    categories: ["Earth Cage", "ID_FMP_FEAT_2552"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Boon"] = new engine.RulesElement({
    name: "Elemental Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_2553",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2553",
    categories: ["Elemental Boon", "ID_FMP_FEAT_2553"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* made at the start of your turn against ongoing effects and conditions with the acid, cold, fire, lightning, or thunder keywords */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Font of Chaos"] = new engine.RulesElement({
    name: "Font of Chaos",
    type: "Feat",
    id: "ID_FMP_FEAT_2554",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2554",
    categories: ["Font of Chaos", "ID_FMP_FEAT_2554"]
  });
  byID[te.id] = te;
  
  te = Feat["Forgeborn Heritage"] = new engine.RulesElement({
    name: "Forgeborn Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2319",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2319",
    categories: ["Forgeborn Heritage", "ID_FMP_FEAT_2319", "ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE", "Dwarven Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10940"]);
      model.statadd("Forgeborn Heritage", 2);
      model.statadd("Forgeborn Heritage", 1);
      model.statadd("Forgeborn Heritage", 2);
      model.statadd("resist:acid", function() { return model.stat("Forgeborn Heritage"); }, "resist");
      model.statadd("resist:cold", function() { return model.stat("Forgeborn Heritage"); }, "resist");
      model.statadd("resist:fire", function() { return model.stat("Forgeborn Heritage"); }, "resist");
      model.statadd("resist:lighting", function() { return model.stat("Forgeborn Heritage"); }, "resist");
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DWARVEN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Frantic Recovery"] = new engine.RulesElement({
    name: "Frantic Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2570",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2570",
    categories: ["Frantic Recovery", "ID_FMP_FEAT_2570"],
    rules: function(model) {
      model.statadd("Action Point", "Frantic Recovery:When you spend an action point to gain an extra action, until the end of your turn, you can use your second wind as a minor action.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Go with the Flow"] = new engine.RulesElement({
    name: "Go with the Flow",
    type: "Feat",
    id: "ID_FMP_FEAT_2555",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2555",
    categories: ["Go with the Flow", "ID_FMP_FEAT_2555"]
  });
  byID[te.id] = te;
  
  te = Feat["Guardian's Mishaps"] = new engine.RulesElement({
    name: "Guardian's Mishaps",
    type: "Feat",
    id: "ID_FMP_FEAT_2578",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2578",
    categories: ["Guardian's Mishaps", "ID_FMP_FEAT_2578", "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE", "Tiefling Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gusting Rebuke"] = new engine.RulesElement({
    name: "Gusting Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_2560",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2560",
    categories: ["Gusting Rebuke", "ID_FMP_FEAT_2560"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Legacy"] = new engine.RulesElement({
    name: "Improved Legacy",
    type: "Feat",
    id: "ID_FMP_FEAT_2323",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2323",
    categories: ["Improved Legacy", "ID_FMP_FEAT_2323"]
  });
  byID[te.id] = te;
  
  te = Feat["Iron Hide Resilience"] = new engine.RulesElement({
    name: "Iron Hide Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_2320",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2320",
    categories: ["Iron Hide Resilience", "ID_FMP_FEAT_2320"],
    rules: function(model) {
      model.statadd("Forgeborn Heritage", 3);
      model.statadd("Forgeborn Heritage", 4);
      model.statadd("Forgeborn Heritage", 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Keen Hatred"] = new engine.RulesElement({
    name: "Keen Hatred",
    type: "Feat",
    id: "ID_FMP_FEAT_2321",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2321",
    categories: ["Keen Hatred", "ID_FMP_FEAT_2321"]
  });
  byID[te.id] = te;
  
  te = Feat["Lucky Misfortune"] = new engine.RulesElement({
    name: "Lucky Misfortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2579",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2579",
    categories: ["Lucky Misfortune", "ID_FMP_FEAT_2579", "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE", "Tiefling Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mantle of Misfortune"] = new engine.RulesElement({
    name: "Mantle of Misfortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2576",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2576",
    categories: ["Mantle of Misfortune", "ID_FMP_FEAT_2576", "ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE", "Tiefling Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11299"]);
      model.statadd("Insight Misc", function() { /* against other tieflings */ return 2; });
      model.statadd("Perception Misc", function() { /* against other tieflings */ return 2; });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_TIEFLING_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Monkey's Rush"] = new engine.RulesElement({
    name: "Monkey's Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_2280",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2280",
    categories: ["Monkey's Rush", "ID_FMP_FEAT_2280"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mountain's Wrath"] = new engine.RulesElement({
    name: "Mountain's Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2561",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2561",
    categories: ["Mountain's Wrath", "ID_FMP_FEAT_2561"]
  });
  byID[te.id] = te;
  
  te = Feat["Pain Doesn't Hurt"] = new engine.RulesElement({
    name: "Pain Doesn't Hurt",
    type: "Feat",
    id: "ID_FMP_FEAT_2571",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2571",
    categories: ["Pain Doesn't Hurt", "ID_FMP_FEAT_2571"],
    rules: function(model) {
      model.statadd("Pain Doesn't Hurt", 2);
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return model.stat("Pain Doesn't Hurt"); }, "Feat");
      model.statadd("Pain Doesn't Hurt", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Perfect Recovery"] = new engine.RulesElement({
    name: "Perfect Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2573",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2573",
    categories: ["Perfect Recovery", "ID_FMP_FEAT_2573"],
    rules: function(model) {
      model.statadd("Action Point", "Perfect Recovery:When you spend an action point to take an extra action, end one effect on you that a save can end.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Persistent Threat"] = new engine.RulesElement({
    name: "Persistent Threat",
    type: "Feat",
    id: "ID_FMP_FEAT_2572",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2572",
    categories: ["Persistent Threat", "ID_FMP_FEAT_2572"]
  });
  byID[te.id] = te;
  
  te = Feat["Progress of Erathis"] = new engine.RulesElement({
    name: "Progress of Erathis",
    type: "Feat",
    id: "ID_FMP_FEAT_2575",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2575",
    categories: ["Progress of Erathis", "ID_FMP_FEAT_2575", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11279"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Roiling Storm"] = new engine.RulesElement({
    name: "Roiling Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_2556",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2556",
    categories: ["Roiling Storm", "ID_FMP_FEAT_2556"]
  });
  byID[te.id] = te;
  
  te = Feat["Saving Breath"] = new engine.RulesElement({
    name: "Saving Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2563",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2563",
    categories: ["Saving Breath", "ID_FMP_FEAT_2563"]
  });
  byID[te.id] = te;
  
  te = Feat["Shifting Wind"] = new engine.RulesElement({
    name: "Shifting Wind",
    type: "Feat",
    id: "ID_FMP_FEAT_2281",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2281",
    categories: ["Shifting Wind", "ID_FMP_FEAT_2281"]
  });
  byID[te.id] = te;
  
  te = Feat["Skill Swap"] = new engine.RulesElement({
    name: "Skill Swap",
    type: "Feat",
    id: "ID_FMP_FEAT_2580",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2580",
    categories: ["Skill Swap", "ID_FMP_FEAT_2580"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.DropRule
      model.select('Power', 1, "Skill Swap", {
        filter: function(model, element) { return (true /* NYI: Filter: $$LEVEL */ && element.hasCategory("Skill Power")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slithering Form"] = new engine.RulesElement({
    name: "Slithering Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2282",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2282",
    categories: ["Slithering Form", "ID_FMP_FEAT_2282"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stampede"] = new engine.RulesElement({
    name: "Stampede",
    type: "Feat",
    id: "ID_FMP_FEAT_2283",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2283",
    categories: ["Stampede", "ID_FMP_FEAT_2283"]
  });
  byID[te.id] = te;
  
  te = Feat["Storm Manifested"] = new engine.RulesElement({
    name: "Storm Manifested",
    type: "Feat",
    id: "ID_FMP_FEAT_2557",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2557",
    categories: ["Storm Manifested", "ID_FMP_FEAT_2557"]
  });
  byID[te.id] = te;
  
  te = Feat["Storm's Lightning"] = new engine.RulesElement({
    name: "Storm's Lightning",
    type: "Feat",
    id: "ID_FMP_FEAT_2558",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2558",
    categories: ["Storm's Lightning", "ID_FMP_FEAT_2558"]
  });
  byID[te.id] = te;
  
  te = Feat["Turtle's Shell"] = new engine.RulesElement({
    name: "Turtle's Shell",
    type: "Feat",
    id: "ID_FMP_FEAT_2284",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2284",
    categories: ["Turtle's Shell", "ID_FMP_FEAT_2284"]
  });
  byID[te.id] = te;
  
  te = Feat["Untamed Fire"] = new engine.RulesElement({
    name: "Untamed Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_2559",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2559",
    categories: ["Untamed Fire", "ID_FMP_FEAT_2559"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1766:damage", function() { /* to each enemy marked by you */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Legacy"] = new engine.RulesElement({
    name: "Wrathful Legacy",
    type: "Feat",
    id: "ID_FMP_FEAT_2322",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2322",
    categories: ["Wrathful Legacy", "ID_FMP_FEAT_2322"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Resurgence"] = new engine.RulesElement({
    name: "Wrathful Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_2324",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2324",
    categories: ["Wrathful Resurgence", "ID_FMP_FEAT_2324"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
