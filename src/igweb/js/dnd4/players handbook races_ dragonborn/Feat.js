define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Adaptable Breath"] = new engine.RulesElement({
    name: "Adaptable Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_387",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=387",
    categories: ["Adaptable Breath", "ID_FMP_FEAT_387"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Element Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Adaptable Breath II"] = new engine.RulesElement({
    name: "Adaptable Breath II",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_II",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ADAPTABLE_BREATH_II",
    categories: ["Adaptable Breath II", "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_II"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Element Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Adaptable Breath III"] = new engine.RulesElement({
    name: "Adaptable Breath III",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_III",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ADAPTABLE_BREATH_III",
    categories: ["Adaptable Breath III", "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_III"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Element Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Adaptable Breath IV"] = new engine.RulesElement({
    name: "Adaptable Breath IV",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_IV",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ADAPTABLE_BREATH_IV",
    categories: ["Adaptable Breath IV", "ID_INTERNAL_FEAT_ADAPTABLE_BREATH_IV"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Element Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Admixture Breath"] = new engine.RulesElement({
    name: "Admixture Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_726",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=726",
    categories: ["Admixture Breath", "ID_FMP_FEAT_726"]
  });
  byID[te.id] = te;
  
  te = Feat["Ancient Soul"] = new engine.RulesElement({
    name: "Ancient Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_2175",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2175",
    categories: ["Ancient Soul", "ID_FMP_FEAT_2175"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Breath"] = new engine.RulesElement({
    name: "Bolstering Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2176",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2176",
    categories: ["Bolstering Breath", "ID_FMP_FEAT_2176"]
  });
  byID[te.id] = te;
  
  te = Feat["Burning Breath"] = new engine.RulesElement({
    name: "Burning Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2211",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2211",
    categories: ["Burning Breath", "ID_FMP_FEAT_2211"]
  });
  byID[te.id] = te;
  
  te = Feat["Concussive Breath"] = new engine.RulesElement({
    name: "Concussive Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2219",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2219",
    categories: ["Concussive Breath", "ID_FMP_FEAT_2219"]
  });
  byID[te.id] = te;
  
  te = Feat["Conflagration Breath"] = new engine.RulesElement({
    name: "Conflagration Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2220",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2220",
    categories: ["Conflagration Breath", "ID_FMP_FEAT_2220"]
  });
  byID[te.id] = te;
  
  te = Feat["Corrosive Breath"] = new engine.RulesElement({
    name: "Corrosive Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2213",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2213",
    categories: ["Corrosive Breath", "ID_FMP_FEAT_2213"]
  });
  byID[te.id] = te;
  
  te = Feat["Covenant of Io"] = new engine.RulesElement({
    name: "Covenant of Io",
    type: "Feat",
    id: "ID_FMP_FEAT_2177",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2177",
    categories: ["Covenant of Io", "ID_FMP_FEAT_2177"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Critical Breath"] = new engine.RulesElement({
    name: "Critical Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2212",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2212",
    categories: ["Critical Breath", "ID_FMP_FEAT_2212"]
  });
  byID[te.id] = te;
  
  te = Feat["Daunting Breath"] = new engine.RulesElement({
    name: "Daunting Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2178",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2178",
    categories: ["Daunting Breath", "ID_FMP_FEAT_2178"]
  });
  byID[te.id] = te;
  
  te = Feat["Debilitating Breath"] = new engine.RulesElement({
    name: "Debilitating Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2221",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2221",
    categories: ["Debilitating Breath", "ID_FMP_FEAT_2221"]
  });
  byID[te.id] = te;
  
  te = Feat["Dissolving Breath"] = new engine.RulesElement({
    name: "Dissolving Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2222",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2222",
    categories: ["Dissolving Breath", "ID_FMP_FEAT_2222"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Blast"] = new engine.RulesElement({
    name: "Draconic Blast",
    type: "Feat",
    id: "ID_FMP_FEAT_2179",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2179",
    categories: ["Draconic Blast", "ID_FMP_FEAT_2179"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Combat Challenge"] = new engine.RulesElement({
    name: "Draconic Combat Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2180",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2180",
    categories: ["Draconic Combat Challenge", "ID_FMP_FEAT_2180"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Enmity"] = new engine.RulesElement({
    name: "Draconic Enmity",
    type: "Feat",
    id: "ID_FMP_FEAT_2181",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2181",
    categories: ["Draconic Enmity", "ID_FMP_FEAT_2181"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Healing"] = new engine.RulesElement({
    name: "Draconic Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_2182",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2182",
    categories: ["Draconic Healing", "ID_FMP_FEAT_2182"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1455:healing", function() { /* while you are bloodied */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Hunter"] = new engine.RulesElement({
    name: "Draconic Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2183",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2183",
    categories: ["Draconic Hunter", "ID_FMP_FEAT_2183"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Majesty"] = new engine.RulesElement({
    name: "Draconic Majesty",
    type: "Feat",
    id: "ID_FMP_FEAT_2201",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2201",
    categories: ["Draconic Majesty", "ID_FMP_FEAT_2201"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Restoration"] = new engine.RulesElement({
    name: "Draconic Restoration",
    type: "Feat",
    id: "ID_FMP_FEAT_2223",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2223",
    categories: ["Draconic Restoration", "ID_FMP_FEAT_2223"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Triumph"] = new engine.RulesElement({
    name: "Draconic Triumph",
    type: "Feat",
    id: "ID_FMP_FEAT_2224",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2224",
    categories: ["Draconic Triumph", "ID_FMP_FEAT_2224"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Zeal"] = new engine.RulesElement({
    name: "Dragonborn Zeal",
    type: "Feat",
    id: "ID_FMP_FEAT_727",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=727",
    categories: ["Dragonborn Zeal", "ID_FMP_FEAT_727"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Focused Breath"] = new engine.RulesElement({
    name: "Focused Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2202",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2202",
    categories: ["Focused Breath", "ID_FMP_FEAT_2202"]
  });
  byID[te.id] = te;
  
  te = Feat["Freezing Breath"] = new engine.RulesElement({
    name: "Freezing Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2225",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2225",
    categories: ["Freezing Breath", "ID_FMP_FEAT_2225"]
  });
  byID[te.id] = te;
  
  te = Feat["Frost Breath"] = new engine.RulesElement({
    name: "Frost Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2214",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2214",
    categories: ["Frost Breath", "ID_FMP_FEAT_2214"]
  });
  byID[te.id] = te;
  
  te = Feat["Glorious Victory"] = new engine.RulesElement({
    name: "Glorious Victory",
    type: "Feat",
    id: "ID_FMP_FEAT_2203",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2203",
    categories: ["Glorious Victory", "ID_FMP_FEAT_2203"]
  });
  byID[te.id] = te;
  
  te = Feat["Hurl Breath"] = new engine.RulesElement({
    name: "Hurl Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_725",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=725",
    categories: ["Hurl Breath", "ID_FMP_FEAT_725"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspiring Triumph"] = new engine.RulesElement({
    name: "Inspiring Triumph",
    type: "Feat",
    id: "ID_FMP_FEAT_2204",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2204",
    categories: ["Inspiring Triumph", "ID_FMP_FEAT_2204"]
  });
  byID[te.id] = te;
  
  te = Feat["Io's Challenge"] = new engine.RulesElement({
    name: "Io's Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2205",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2205",
    categories: ["Io's Challenge", "ID_FMP_FEAT_2205"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunity Breath"] = new engine.RulesElement({
    name: "Opportunity Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2215",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2215",
    categories: ["Opportunity Breath", "ID_FMP_FEAT_2215"]
  });
  byID[te.id] = te;
  
  te = Feat["Powerful Breath"] = new engine.RulesElement({
    name: "Powerful Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2206",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2206",
    categories: ["Powerful Breath", "ID_FMP_FEAT_2206"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Powerful Breath") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Raging Drake Form"] = new engine.RulesElement({
    name: "Raging Drake Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2207",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2207",
    categories: ["Raging Drake Form", "ID_FMP_FEAT_2207"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* while you are bloodied and in beast form */ return 1; });
      model.statadd("damage rolls", function() { /* while you are bloodied and in beast form */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Breath"] = new engine.RulesElement({
    name: "Spirit Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2216",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2216",
    categories: ["Spirit Breath", "ID_FMP_FEAT_2216"]
  });
  byID[te.id] = te;
  
  te = Feat["Surprising Breath"] = new engine.RulesElement({
    name: "Surprising Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2208",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2208",
    categories: ["Surprising Breath", "ID_FMP_FEAT_2208"]
  });
  byID[te.id] = te;
  
  te = Feat["Thundering Breath"] = new engine.RulesElement({
    name: "Thundering Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2217",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2217",
    categories: ["Thundering Breath", "ID_FMP_FEAT_2217"]
  });
  byID[te.id] = te;
  
  te = Feat["Toxic Breath"] = new engine.RulesElement({
    name: "Toxic Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2218",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2218",
    categories: ["Toxic Breath", "ID_FMP_FEAT_2218"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
