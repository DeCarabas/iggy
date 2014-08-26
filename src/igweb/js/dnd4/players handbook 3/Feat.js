define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Adamantine Mind"] = new engine.RulesElement({
    name: "Adamantine Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_1683",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1683",
    categories: ["Adamantine Mind", "ID_FMP_FEAT_1683"]
  });
  byID[te.id] = te;
  
  te = Feat["Alacrity of Fortune"] = new engine.RulesElement({
    name: "Alacrity of Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2145",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2145",
    categories: ["Alacrity of Fortune", "ID_FMP_FEAT_2145"]
  });
  byID[te.id] = te;
  
  te = Feat["Alhahn's Mindful Relocation"] = new engine.RulesElement({
    name: "Alhahn's Mindful Relocation",
    type: "Feat",
    id: "ID_FMP_FEAT_1674",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1674",
    categories: ["Alhahn's Mindful Relocation", "ID_FMP_FEAT_1674"]
  });
  byID[te.id] = te;
  
  te = Feat["Aspect of the Cultivator"] = new engine.RulesElement({
    name: "Aspect of the Cultivator",
    type: "Feat",
    id: "ID_FMP_FEAT_2633",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2633",
    categories: ["Aspect of the Cultivator", "ID_FMP_FEAT_2633"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_RACIAL_TRAIT_1539"); }
      });
      // unsupported rule: cbimporter.Rules.DropRule
      model.grant(model.elements.id["ID_FMP_POWER_11572"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Awaken Aspect"] = new engine.RulesElement({
    name: "Awaken Aspect",
    type: "Feat",
    id: "ID_FMP_FEAT_2634",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2634",
    categories: ["Awaken Aspect", "ID_FMP_FEAT_2634"]
  });
  byID[te.id] = te;
  
  te = Feat["Battering Shield"] = new engine.RulesElement({
    name: "Battering Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2566",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2566",
    categories: ["Battering Shield", "ID_FMP_FEAT_2566"]
  });
  byID[te.id] = te;
  
  te = Feat["Battle Caster Defense"] = new engine.RulesElement({
    name: "Battle Caster Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2565",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2565",
    categories: ["Battle Caster Defense", "ID_FMP_FEAT_2565"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks that you provoke when using a ranged or an area power */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle Hardened"] = new engine.RulesElement({
    name: "Battle Hardened",
    type: "Feat",
    id: "ID_FMP_FEAT_2564",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2564",
    categories: ["Battle Hardened", "ID_FMP_FEAT_2564"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; }, "Feat");
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beast Within"] = new engine.RulesElement({
    name: "Beast Within",
    type: "Feat",
    id: "ID_FMP_FEAT_1064",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1064",
    categories: ["Beast Within", "ID_FMP_FEAT_1064"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* while bloodied */ return 1; });
      model.statadd("damage rolls", function() { /* while bloodied */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beguiling Enchantment"] = new engine.RulesElement({
    name: "Beguiling Enchantment",
    type: "Feat",
    id: "ID_FMP_FEAT_2690",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2690",
    categories: ["Beguiling Enchantment", "ID_FMP_FEAT_2690"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodbond Wrath"] = new engine.RulesElement({
    name: "Bloodbond Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1819",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1819",
    categories: ["Bloodbond Wrath", "ID_FMP_FEAT_1819"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodborn Recovery"] = new engine.RulesElement({
    name: "Bloodborn Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2635",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2635",
    categories: ["Bloodborn Recovery", "ID_FMP_FEAT_2635"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Elusion"] = new engine.RulesElement({
    name: "Bloodied Elusion",
    type: "Feat",
    id: "ID_FMP_FEAT_1816",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1816",
    categories: ["Bloodied Elusion", "ID_FMP_FEAT_1816"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Ferocity"] = new engine.RulesElement({
    name: "Bloodied Ferocity",
    type: "Feat",
    id: "ID_FMP_FEAT_2567",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2567",
    categories: ["Bloodied Ferocity", "ID_FMP_FEAT_2567"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Gore"] = new engine.RulesElement({
    name: "Bloody Gore",
    type: "Feat",
    id: "ID_FMP_FEAT_1065",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1065",
    categories: ["Bloody Gore", "ID_FMP_FEAT_1065"]
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Mantle"] = new engine.RulesElement({
    name: "Bolstering Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_2141",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2141",
    categories: ["Bolstering Mantle", "ID_FMP_FEAT_2141"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Ferocity"] = new engine.RulesElement({
    name: "Brutal Ferocity",
    type: "Feat",
    id: "ID_FMP_FEAT_1066",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1066",
    categories: ["Brutal Ferocity", "ID_FMP_FEAT_1066"],
    rules: function(model) {
      model.statadd("melee basic:attack", function() { /* to the attack granted by your Ferocity */ return 2; });
      model.statadd("melee basic:damage", function() { /* to the attack granted by your Ferocity */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Flurry"] = new engine.RulesElement({
    name: "Brutal Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_2636",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2636",
    categories: ["Brutal Flurry", "ID_FMP_FEAT_2636"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Brutal Flurry", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Burden of Guardianship"] = new engine.RulesElement({
    name: "Burden of Guardianship",
    type: "Feat",
    id: "ID_FMP_FEAT_2583",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2583",
    categories: ["Burden of Guardianship", "ID_FMP_FEAT_2583"]
  });
  byID[te.id] = te;
  
  te = Feat["Burden of Liberty"] = new engine.RulesElement({
    name: "Burden of Liberty",
    type: "Feat",
    id: "ID_FMP_FEAT_2637",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2637",
    categories: ["Burden of Liberty", "ID_FMP_FEAT_2637"]
  });
  byID[te.id] = te;
  
  te = Feat["Burden of Rejuvenation"] = new engine.RulesElement({
    name: "Burden of Rejuvenation",
    type: "Feat",
    id: "ID_FMP_FEAT_2584",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2584",
    categories: ["Burden of Rejuvenation", "ID_FMP_FEAT_2584"]
  });
  byID[te.id] = te;
  
  te = Feat["Burden of Vision"] = new engine.RulesElement({
    name: "Burden of Vision",
    type: "Feat",
    id: "ID_FMP_FEAT_2670",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2670",
    categories: ["Burden of Vision", "ID_FMP_FEAT_2670"]
  });
  byID[te.id] = te;
  
  te = Feat["Cascading Rush"] = new engine.RulesElement({
    name: "Cascading Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_2585",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2585",
    categories: ["Cascading Rush", "ID_FMP_FEAT_2585"]
  });
  byID[te.id] = te;
  
  te = Feat["Centered Master"] = new engine.RulesElement({
    name: "Centered Master",
    type: "Feat",
    id: "ID_FMP_FEAT_2671",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2671",
    categories: ["Centered Master", "ID_FMP_FEAT_2671"]
  });
  byID[te.id] = te;
  
  te = Feat["Champion of Nature"] = new engine.RulesElement({
    name: "Champion of Nature",
    type: "Feat",
    id: "ID_FMP_FEAT_2672",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2672",
    categories: ["Champion of Nature", "ID_FMP_FEAT_2672"]
  });
  byID[te.id] = te;
  
  te = Feat["Clarified Instincts"] = new engine.RulesElement({
    name: "Clarified Instincts",
    type: "Feat",
    id: "ID_FMP_FEAT_2142",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2142",
    categories: ["Clarified Instincts", "ID_FMP_FEAT_2142"]
  });
  byID[te.id] = te;
  
  te = Feat["Clarifying Presence"] = new engine.RulesElement({
    name: "Clarifying Presence",
    type: "Feat",
    id: "ID_FMP_FEAT_2673",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2673",
    categories: ["Clarifying Presence", "ID_FMP_FEAT_2673"]
  });
  byID[te.id] = te;
  
  te = Feat["Cleanse the Madness"] = new engine.RulesElement({
    name: "Cleanse the Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_2586",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2586",
    categories: ["Cleanse the Madness", "ID_FMP_FEAT_2586"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against aberrant creatures */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cleaving Axe"] = new engine.RulesElement({
    name: "Cleaving Axe",
    type: "Feat",
    id: "ID_FMP_FEAT_2674",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2674",
    categories: ["Cleaving Axe", "ID_FMP_FEAT_2674"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Intuition"] = new engine.RulesElement({
    name: "Combat Intuition",
    type: "Feat",
    id: "ID_FMP_FEAT_2587",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2587",
    categories: ["Combat Intuition", "ID_FMP_FEAT_2587"]
  });
  byID[te.id] = te;
  
  te = Feat["Controlling Advantage"] = new engine.RulesElement({
    name: "Controlling Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_2588",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2588",
    categories: ["Controlling Advantage", "ID_FMP_FEAT_2588"]
  });
  byID[te.id] = te;
  
  te = Feat["Crashing Tempest Style"] = new engine.RulesElement({
    name: "Crashing Tempest Style",
    type: "Feat",
    id: "ID_FMP_FEAT_2589",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2589",
    categories: ["Crashing Tempest Style", "ID_FMP_FEAT_2589"],
    rules: function(model) {
      model.statadd("Flurry of Blows,club:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Critical Reserve"] = new engine.RulesElement({
    name: "Critical Reserve",
    type: "Feat",
    id: "ID_FMP_FEAT_2638",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2638",
    categories: ["Critical Reserve", "ID_FMP_FEAT_2638"]
  });
  byID[te.id] = te;
  
  te = Feat["Dakshai's Body-Mind Union"] = new engine.RulesElement({
    name: "Dakshai's Body-Mind Union",
    type: "Feat",
    id: "ID_FMP_FEAT_1675",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1675",
    categories: ["Dakshai's Body-Mind Union", "ID_FMP_FEAT_1675"]
  });
  byID[te.id] = te;
  
  te = Feat["Deadly Draw"] = new engine.RulesElement({
    name: "Deadly Draw",
    type: "Feat",
    id: "ID_FMP_FEAT_2590",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2590",
    categories: ["Deadly Draw", "ID_FMP_FEAT_2590"]
  });
  byID[te.id] = te;
  
  te = Feat["Deceptive Mind"] = new engine.RulesElement({
    name: "Deceptive Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_2591",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2591",
    categories: ["Deceptive Mind", "ID_FMP_FEAT_2591"],
    rules: function(model) {
      model.statadd("AC", function() { /* while your battle resilience is in effect */ return 2; });
      model.statadd("Fortitude Defense", function() { /* while your battle resilience is in effect */ return 2; });
      model.statadd("Will Defense", function() { /* while your battle resilience is in effect */ return 2; });
      model.statadd("Reflex Defense", function() { /* while your battle resilience is in effect */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Defiant Fire"] = new engine.RulesElement({
    name: "Defiant Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_2639",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2639",
    categories: ["Defiant Fire", "ID_FMP_FEAT_2639"]
  });
  byID[te.id] = te;
  
  te = Feat["Defiant Light"] = new engine.RulesElement({
    name: "Defiant Light",
    type: "Feat",
    id: "ID_FMP_FEAT_2640",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2640",
    categories: ["Defiant Light", "ID_FMP_FEAT_2640"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:radiant", 5, "resist");
      model.statadd("ID_FMP_CLASS_602:attack", function() { /* against targets that are vulnerable to radiant damage */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Deft Aim"] = new engine.RulesElement({
    name: "Deft Aim",
    type: "Feat",
    id: "ID_FMP_FEAT_2675",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2675",
    categories: ["Deft Aim", "ID_FMP_FEAT_2675"]
  });
  byID[te.id] = te;
  
  te = Feat["Demanding Talent"] = new engine.RulesElement({
    name: "Demanding Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_2628",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2628",
    categories: ["Demanding Talent", "ID_FMP_FEAT_2628", "ID_INTERNAL_CATEGORY_MULTICLASS_BATTLEMIND", "Multiclass Battlemind", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Battlemind Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_10438"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BATTLEMIND"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Demand's Reach"] = new engine.RulesElement({
    name: "Demand's Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_2272",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2272",
    categories: ["Demand's Reach", "ID_FMP_FEAT_2272"]
  });
  byID[te.id] = te;
  
  te = Feat["Desperate Renewal"] = new engine.RulesElement({
    name: "Desperate Renewal",
    type: "Feat",
    id: "ID_FMP_FEAT_2641",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2641",
    categories: ["Desperate Renewal", "ID_FMP_FEAT_2641"]
  });
  byID[te.id] = te;
  
  te = Feat["Devouring Demand"] = new engine.RulesElement({
    name: "Devouring Demand",
    type: "Feat",
    id: "ID_FMP_FEAT_2676",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2676",
    categories: ["Devouring Demand", "ID_FMP_FEAT_2676"]
  });
  byID[te.id] = te;
  
  te = Feat["Directed Bull Rush"] = new engine.RulesElement({
    name: "Directed Bull Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_2592",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2592",
    categories: ["Directed Bull Rush", "ID_FMP_FEAT_2592"]
  });
  byID[te.id] = te;
  
  te = Feat["Discipline Adept"] = new engine.RulesElement({
    name: "Discipline Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1632",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1632",
    categories: ["Discipline Adept", "ID_FMP_FEAT_1632"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Disciplined Talent"] = new engine.RulesElement({
    name: "Disciplined Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_2731",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2731",
    categories: ["Disciplined Talent", "ID_FMP_FEAT_2731", "ID_INTERNAL_CATEGORY_MULTICLASS_PSION", "Multiclass Psion", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Psion Class"); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_437") && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_PSION_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PSION"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dominating Mind"] = new engine.RulesElement({
    name: "Dominating Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_1635",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1635",
    categories: ["Dominating Mind", "ID_FMP_FEAT_1635"]
  });
  byID[te.id] = te;
  
  te = Feat["Effortless Motion"] = new engine.RulesElement({
    name: "Effortless Motion",
    type: "Feat",
    id: "ID_FMP_FEAT_2642",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2642",
    categories: ["Effortless Motion", "ID_FMP_FEAT_2642"]
  });
  byID[te.id] = te;
  
  te = Feat["Elated Emotions"] = new engine.RulesElement({
    name: "Elated Emotions",
    type: "Feat",
    id: "ID_FMP_FEAT_2593",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2593",
    categories: ["Elated Emotions", "ID_FMP_FEAT_2593"]
  });
  byID[te.id] = te;
  
  te = Feat["Elation of Fortune"] = new engine.RulesElement({
    name: "Elation of Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2643",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2643",
    categories: ["Elation of Fortune", "ID_FMP_FEAT_2643"]
  });
  byID[te.id] = te;
  
  te = Feat["Endangering Outrage"] = new engine.RulesElement({
    name: "Endangering Outrage",
    type: "Feat",
    id: "ID_FMP_FEAT_2677",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2677",
    categories: ["Endangering Outrage", "ID_FMP_FEAT_2677"]
  });
  byID[te.id] = te;
  
  te = Feat["Epic Alacrity"] = new engine.RulesElement({
    name: "Epic Alacrity",
    type: "Feat",
    id: "ID_FMP_FEAT_2148",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2148",
    categories: ["Epic Alacrity", "ID_FMP_FEAT_2148"]
  });
  byID[te.id] = te;
  
  te = Feat["Exchange Power"] = new engine.RulesElement({
    name: "Exchange Power",
    type: "Feat",
    id: "ID_FMP_FEAT_1633",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1633",
    categories: ["Exchange Power", "ID_FMP_FEAT_1633"]
  });
  byID[te.id] = te;
  
  te = Feat["Expanded Fragments"] = new engine.RulesElement({
    name: "Expanded Fragments",
    type: "Feat",
    id: "ID_FMP_FEAT_2644",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2644",
    categories: ["Expanded Fragments", "ID_FMP_FEAT_2644"]
  });
  byID[te.id] = te;
  
  te = Feat["Expansive Burst"] = new engine.RulesElement({
    name: "Expansive Burst",
    type: "Feat",
    id: "ID_FMP_FEAT_2645",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2645",
    categories: ["Expansive Burst", "ID_FMP_FEAT_2645"]
  });
  byID[te.id] = te;
  
  te = Feat["Eyes in the Back of Your Head"] = new engine.RulesElement({
    name: "Eyes in the Back of Your Head",
    type: "Feat",
    id: "ID_FMP_FEAT_2646",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2646",
    categories: ["Eyes in the Back of Your Head", "ID_FMP_FEAT_2646"]
  });
  byID[te.id] = te;
  
  te = Feat["Fervent Talent"] = new engine.RulesElement({
    name: "Fervent Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_2693",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2693",
    categories: ["Fervent Talent", "ID_FMP_FEAT_2693", "ID_INTERNAL_CATEGORY_MULTICLASS_ARDENT", "Multiclass Ardent", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Ardent Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_10273"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ARDENT"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Focused Mind"] = new engine.RulesElement({
    name: "Focused Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_2594",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2594",
    categories: ["Focused Mind", "ID_FMP_FEAT_2594"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against dazing effects and stunning effects */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Githzerai Planewalker"] = new engine.RulesElement({
    name: "Githzerai Planewalker",
    type: "Feat",
    id: "ID_FMP_FEAT_1679",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1679",
    categories: ["Githzerai Planewalker", "ID_FMP_FEAT_1679"]
  });
  byID[te.id] = te;
  
  te = Feat["Goring Shove"] = new engine.RulesElement({
    name: "Goring Shove",
    type: "Feat",
    id: "ID_FMP_FEAT_1060",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1060",
    categories: ["Goring Shove", "ID_FMP_FEAT_1060"]
  });
  byID[te.id] = te;
  
  te = Feat["Grazing Shot"] = new engine.RulesElement({
    name: "Grazing Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2647",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2647",
    categories: ["Grazing Shot", "ID_FMP_FEAT_2647"]
  });
  byID[te.id] = te;
  
  te = Feat["Gritty Determination"] = new engine.RulesElement({
    name: "Gritty Determination",
    type: "Feat",
    id: "ID_FMP_FEAT_2648",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2648",
    categories: ["Gritty Determination", "ID_FMP_FEAT_2648"]
  });
  byID[te.id] = te;
  
  te = Feat["Grounding Shot"] = new engine.RulesElement({
    name: "Grounding Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2595",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2595",
    categories: ["Grounding Shot", "ID_FMP_FEAT_2595"],
    rules: function(model) {
      model.statadd("ranged:damage", function() { /* against prone targets */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Guarded Mind"] = new engine.RulesElement({
    name: "Guarded Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_2649",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2649",
    categories: ["Guarded Mind", "ID_FMP_FEAT_2649"],
    rules: function(model) {
      model.statadd("Crystalline Mind", function() { return model.stat("Intelligence modifier"); }, "Ability");
      model.statadd("Crystalline Mind", function() { return model.stat("Wisdom modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hafted Defense"] = new engine.RulesElement({
    name: "Hafted Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2596",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2596",
    categories: ["Hafted Defense", "ID_FMP_FEAT_2596"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.onlyWeaponIs('polearm')) {
          return 1;
        } else return 0;
       }, "Shield");
      model.statadd("AC", function() { 
        if (model.onlyWeaponIs('staff')) {
          return 1;
        } else return 0;
       }, "Shield");
      model.statadd("Reflex Defense", function() { 
        if (model.onlyWeaponIs('polearm')) {
          return 1;
        } else return 0;
       }, "Shield");
      model.statadd("Reflex Defense", function() { 
        if (model.onlyWeaponIs('staff')) {
          return 1;
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hammering Iron"] = new engine.RulesElement({
    name: "Hammering Iron",
    type: "Feat",
    id: "ID_FMP_FEAT_2597",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2597",
    categories: ["Hammering Iron", "ID_FMP_FEAT_2597"]
  });
  byID[te.id] = te;
  
  te = Feat["Headsman's Chop"] = new engine.RulesElement({
    name: "Headsman's Chop",
    type: "Feat",
    id: "ID_FMP_FEAT_2598",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2598",
    categories: ["Headsman's Chop", "ID_FMP_FEAT_2598"],
    rules: function(model) {
      model.statadd("axe group:damage", function() { /* against a prone target */ return 5; });
      model.statadd("heavy blade group:damage", function() { /* against a prone target */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Healing Fragments"] = new engine.RulesElement({
    name: "Healing Fragments",
    type: "Feat",
    id: "ID_FMP_FEAT_2650",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2650",
    categories: ["Healing Fragments", "ID_FMP_FEAT_2650"]
  });
  byID[te.id] = te;
  
  te = Feat["Heartening Surge"] = new engine.RulesElement({
    name: "Heartening Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_2143",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2143",
    categories: ["Heartening Surge", "ID_FMP_FEAT_2143"]
  });
  byID[te.id] = te;
  
  te = Feat["Hybrid Talent"] = new engine.RulesElement({
    name: "Hybrid Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_1366",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1366",
    categories: ["Hybrid Talent", "ID_FMP_FEAT_1366"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return true /* NYI: Filter: $$HYBRID */; }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Impending Victory"] = new engine.RulesElement({
    name: "Impending Victory",
    type: "Feat",
    id: "ID_FMP_FEAT_2599",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2599",
    categories: ["Impending Victory", "ID_FMP_FEAT_2599"],
    rules: function(model) {
      model.statadd("at-will:attack", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Ardent Surge"] = new engine.RulesElement({
    name: "Improved Ardent Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_2146",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2146",
    categories: ["Improved Ardent Surge", "ID_FMP_FEAT_2146"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_10273:healing", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Aspect of Nature"] = new engine.RulesElement({
    name: "Improved Aspect of Nature",
    type: "Feat",
    id: "ID_FMP_FEAT_2600",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2600",
    categories: ["Improved Aspect of Nature", "ID_FMP_FEAT_2600"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Inevitable Shot"] = new engine.RulesElement({
    name: "Improved Inevitable Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2601",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2601",
    categories: ["Improved Inevitable Shot", "ID_FMP_FEAT_2601"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Monk Unarmed Strike"] = new engine.RulesElement({
    name: "Improved Monk Unarmed Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2602",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2602",
    categories: ["Improved Monk Unarmed Strike", "ID_FMP_FEAT_2602"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Speed of Thought"] = new engine.RulesElement({
    name: "Improved Speed of Thought",
    type: "Feat",
    id: "ID_FMP_FEAT_2270",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2270",
    categories: ["Improved Speed of Thought", "ID_FMP_FEAT_2270"]
  });
  byID[te.id] = te;
  
  te = Feat["Inescapable Shot"] = new engine.RulesElement({
    name: "Inescapable Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_1817",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1817",
    categories: ["Inescapable Shot", "ID_FMP_FEAT_1817"]
  });
  byID[te.id] = te;
  
  te = Feat["Inevitable Accuracy"] = new engine.RulesElement({
    name: "Inevitable Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_1821",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1821",
    categories: ["Inevitable Accuracy", "ID_FMP_FEAT_1821"]
  });
  byID[te.id] = te;
  
  te = Feat["Inevitable Volley"] = new engine.RulesElement({
    name: "Inevitable Volley",
    type: "Feat",
    id: "ID_FMP_FEAT_1820",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1820",
    categories: ["Inevitable Volley", "ID_FMP_FEAT_1820"]
  });
  byID[te.id] = te;
  
  te = Feat["Iron Body"] = new engine.RulesElement({
    name: "Iron Body",
    type: "Feat",
    id: "ID_FMP_FEAT_1684",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1684",
    categories: ["Iron Body", "ID_FMP_FEAT_1684"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* while your iron mind racial power is in effect */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Hands"] = new engine.RulesElement({
    name: "Iron Hands",
    type: "Feat",
    id: "ID_FMP_FEAT_1680",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1680",
    categories: ["Iron Hands", "ID_FMP_FEAT_1680"],
    rules: function(model) {
      model.statadd("melee damage rolls", function() { /* while your iron mind racial power is in effect */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Resolve of Zerthadlun"] = new engine.RulesElement({
    name: "Iron Resolve of Zerthadlun",
    type: "Feat",
    id: "ID_FMP_FEAT_1676",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1676",
    categories: ["Iron Resolve of Zerthadlun", "ID_FMP_FEAT_1676"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* while you have at least 1 power point */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Liberating Shard Swarm"] = new engine.RulesElement({
    name: "Liberating Shard Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_2603",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2603",
    categories: ["Liberating Shard Swarm", "ID_FMP_FEAT_2603"]
  });
  byID[te.id] = te;
  
  te = Feat["Liberating Teleport"] = new engine.RulesElement({
    name: "Liberating Teleport",
    type: "Feat",
    id: "ID_FMP_FEAT_2651",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2651",
    categories: ["Liberating Teleport", "ID_FMP_FEAT_2651"]
  });
  byID[te.id] = te;
  
  te = Feat["Linebreaker"] = new engine.RulesElement({
    name: "Linebreaker",
    type: "Feat",
    id: "ID_FMP_FEAT_2273",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2273",
    categories: ["Linebreaker", "ID_FMP_FEAT_2273"]
  });
  byID[te.id] = te;
  
  te = Feat["Long Step"] = new engine.RulesElement({
    name: "Long Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2678",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2678",
    categories: ["Long Step", "ID_FMP_FEAT_2678"]
  });
  byID[te.id] = te;
  
  te = Feat["Low Crawl"] = new engine.RulesElement({
    name: "Low Crawl",
    type: "Feat",
    id: "ID_FMP_FEAT_2604",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2604",
    categories: ["Low Crawl", "ID_FMP_FEAT_2604"]
  });
  byID[te.id] = te;
  
  te = Feat["Lucky Start"] = new engine.RulesElement({
    name: "Lucky Start",
    type: "Feat",
    id: "ID_FMP_FEAT_2720",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2720",
    categories: ["Lucky Start", "ID_FMP_FEAT_2720"]
  });
  byID[te.id] = te;
  
  te = Feat["Lure of Iron"] = new engine.RulesElement({
    name: "Lure of Iron",
    type: "Feat",
    id: "ID_FMP_FEAT_2605",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2605",
    categories: ["Lure of Iron", "ID_FMP_FEAT_2605"]
  });
  byID[te.id] = te;
  
  te = Feat["Mantle of Readiness"] = new engine.RulesElement({
    name: "Mantle of Readiness",
    type: "Feat",
    id: "ID_FMP_FEAT_2144",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2144",
    categories: ["Mantle of Readiness", "ID_FMP_FEAT_2144"]
  });
  byID[te.id] = te;
  
  te = Feat["Miryath's First Strike"] = new engine.RulesElement({
    name: "Miryath's First Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1677",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1677",
    categories: ["Miryath's First Strike", "ID_FMP_FEAT_1677"]
  });
  byID[te.id] = te;
  
  te = Feat["Monastic Disciple"] = new engine.RulesElement({
    name: "Monastic Disciple",
    type: "Feat",
    id: "ID_FMP_FEAT_2694",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2694",
    categories: ["Monastic Disciple", "ID_FMP_FEAT_2694", "ID_INTERNAL_CATEGORY_MULTICLASS_MONK", "Multiclass Monk", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Monk Class"); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_7448") || element.hasCategory("ID_FMP_POWER_11207")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_MONK_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_MONK"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mythic Senses"] = new engine.RulesElement({
    name: "Mythic Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_2679",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2679",
    categories: ["Mythic Senses", "ID_FMP_FEAT_2679"]
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Runner"] = new engine.RulesElement({
    name: "Nimble Runner",
    type: "Feat",
    id: "ID_FMP_FEAT_2606",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2606",
    categories: ["Nimble Runner", "ID_FMP_FEAT_2606"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunistic Shove"] = new engine.RulesElement({
    name: "Opportunistic Shove",
    type: "Feat",
    id: "ID_FMP_FEAT_2607",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2607",
    categories: ["Opportunistic Shove", "ID_FMP_FEAT_2607"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunistic Withdrawal"] = new engine.RulesElement({
    name: "Opportunistic Withdrawal",
    type: "Feat",
    id: "ID_FMP_FEAT_2652",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2652",
    categories: ["Opportunistic Withdrawal", "ID_FMP_FEAT_2652"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunity Sidestep"] = new engine.RulesElement({
    name: "Opportunity Sidestep",
    type: "Feat",
    id: "ID_FMP_FEAT_2653",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2653",
    categories: ["Opportunity Sidestep", "ID_FMP_FEAT_2653"]
  });
  byID[te.id] = te;
  
  te = Feat["Orbiting Object"] = new engine.RulesElement({
    name: "Orbiting Object",
    type: "Feat",
    id: "ID_FMP_FEAT_2608",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2608",
    categories: ["Orbiting Object", "ID_FMP_FEAT_2608"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Overwhelming Critical"] = new engine.RulesElement({
    name: "Overwhelming Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_2654",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2654",
    categories: ["Overwhelming Critical", "ID_FMP_FEAT_2654"]
  });
  byID[te.id] = te;
  
  te = Feat["Peerless Reaction"] = new engine.RulesElement({
    name: "Peerless Reaction",
    type: "Feat",
    id: "ID_FMP_FEAT_1685",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1685",
    categories: ["Peerless Reaction", "ID_FMP_FEAT_1685"]
  });
  byID[te.id] = te;
  
  te = Feat["Pointed Step Style"] = new engine.RulesElement({
    name: "Pointed Step Style",
    type: "Feat",
    id: "ID_FMP_FEAT_1985",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1985",
    categories: ["Pointed Step Style", "ID_FMP_FEAT_1985"]
  });
  byID[te.id] = te;
  
  te = Feat["Polearm Flanker"] = new engine.RulesElement({
    name: "Polearm Flanker",
    type: "Feat",
    id: "ID_FMP_FEAT_2609",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2609",
    categories: ["Polearm Flanker", "ID_FMP_FEAT_2609"]
  });
  byID[te.id] = te;
  
  te = Feat["Power Throw"] = new engine.RulesElement({
    name: "Power Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_2610",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2610",
    categories: ["Power Throw", "ID_FMP_FEAT_2610"]
  });
  byID[te.id] = te;
  
  te = Feat["Precise Mind"] = new engine.RulesElement({
    name: "Precise Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_1634",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1634",
    categories: ["Precise Mind", "ID_FMP_FEAT_1634"]
  });
  byID[te.id] = te;
  
  te = Feat["Predictive Defense"] = new engine.RulesElement({
    name: "Predictive Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1636",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1636",
    categories: ["Predictive Defense", "ID_FMP_FEAT_1636"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Eye"] = new engine.RulesElement({
    name: "Primal Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2655",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2655",
    categories: ["Primal Eye", "ID_FMP_FEAT_2655"],
    rules: function(model) {
      model.statadd("ranged basic:damage", function() { return model.stat("Strength modifier"); }, "Ability");
      model.statadd("ranged basic:damage", function() { return model.stat("Dexterity modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Primal Sharpshooter"] = new engine.RulesElement({
    name: "Primal Sharpshooter",
    type: "Feat",
    id: "ID_FMP_FEAT_2695",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2695",
    categories: ["Primal Sharpshooter", "ID_FMP_FEAT_2695", "ID_INTERNAL_CATEGORY_MULTICLASS_SEEKER", "Multiclass Seeker", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(model.elements.id["ID_FMP_POWER_9501"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_472") && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SEEKER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prime Burst"] = new engine.RulesElement({
    name: "Prime Burst",
    type: "Feat",
    id: "ID_FMP_FEAT_2611",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2611",
    categories: ["Prime Burst", "ID_FMP_FEAT_2611"]
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Complement"] = new engine.RulesElement({
    name: "Psionic Complement",
    type: "Feat",
    id: "ID_FMP_FEAT_2697",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2697",
    categories: ["Psionic Complement", "ID_FMP_FEAT_2697", "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER", "Multiclass Encounter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Conventionalist"] = new engine.RulesElement({
    name: "Psionic Conventionalist",
    type: "Feat",
    id: "ID_FMP_FEAT_2732",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2732",
    categories: ["Psionic Conventionalist", "ID_FMP_FEAT_2732", "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER", "Multiclass Encounter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Dabbler"] = new engine.RulesElement({
    name: "Psionic Dabbler",
    type: "Feat",
    id: "ID_FMP_FEAT_2698",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2698",
    categories: ["Psionic Dabbler", "ID_FMP_FEAT_2698", "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER", "Multiclass Encounter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Power Points", function() { return model.stat("Hybrid Power Points"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Rejuvenation"] = new engine.RulesElement({
    name: "Psionic Rejuvenation",
    type: "Feat",
    id: "ID_FMP_FEAT_2656",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2656",
    categories: ["Psionic Rejuvenation", "ID_FMP_FEAT_2656"]
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Bastion"] = new engine.RulesElement({
    name: "Psychic Bastion",
    type: "Feat",
    id: "ID_FMP_FEAT_2680",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2680",
    categories: ["Psychic Bastion", "ID_FMP_FEAT_2680"]
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Focus"] = new engine.RulesElement({
    name: "Psychic Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_2721",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2721",
    categories: ["Psychic Focus", "ID_FMP_FEAT_2721"],
    rules: function(model) {
      model.statadd("Psychic Focus", 2);
      model.statadd("psychic:damage", function() { return model.stat("Psychic Focus"); }, "Feat");
      model.statadd("Psychic Focus", 1);
      model.statadd("Psychic Focus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Punishing Rebuke"] = new engine.RulesElement({
    name: "Punishing Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_2657",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2657",
    categories: ["Punishing Rebuke", "ID_FMP_FEAT_2657"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_11462:damage", "+1[W]");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Punishing Spike"] = new engine.RulesElement({
    name: "Punishing Spike",
    type: "Feat",
    id: "ID_FMP_FEAT_2722",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2722",
    categories: ["Punishing Spike", "ID_FMP_FEAT_2722"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pursuing Step"] = new engine.RulesElement({
    name: "Pursuing Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2271",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2271",
    categories: ["Pursuing Step", "ID_FMP_FEAT_2271"]
  });
  byID[te.id] = te;
  
  te = Feat["Rapid Assault"] = new engine.RulesElement({
    name: "Rapid Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_2612",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2612",
    categories: ["Rapid Assault", "ID_FMP_FEAT_2612"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* on your first turn during an encounter */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rapid Regeneration"] = new engine.RulesElement({
    name: "Rapid Regeneration",
    type: "Feat",
    id: "ID_FMP_FEAT_2681",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2681",
    categories: ["Rapid Regeneration", "ID_FMP_FEAT_2681"]
  });
  byID[te.id] = te;
  
  te = Feat["Rejuvenating Shard Swarm"] = new engine.RulesElement({
    name: "Rejuvenating Shard Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_2682",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2682",
    categories: ["Rejuvenating Shard Swarm", "ID_FMP_FEAT_2682"]
  });
  byID[te.id] = te;
  
  te = Feat["Repel Charge"] = new engine.RulesElement({
    name: "Repel Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2658",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2658",
    categories: ["Repel Charge", "ID_FMP_FEAT_2658"]
  });
  byID[te.id] = te;
  
  te = Feat["Resilient Shield"] = new engine.RulesElement({
    name: "Resilient Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2683",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2683",
    categories: ["Resilient Shield", "ID_FMP_FEAT_2683"]
  });
  byID[te.id] = te;
  
  te = Feat["Roll with It"] = new engine.RulesElement({
    name: "Roll with It",
    type: "Feat",
    id: "ID_FMP_FEAT_2659",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2659",
    categories: ["Roll with It", "ID_FMP_FEAT_2659"]
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Battle"] = new engine.RulesElement({
    name: "Rune of Battle",
    type: "Feat",
    id: "ID_FMP_FEAT_2684",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2684",
    categories: ["Rune of Battle", "ID_FMP_FEAT_2684", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Eloquence"] = new engine.RulesElement({
    name: "Rune of Eloquence",
    type: "Feat",
    id: "ID_FMP_FEAT_2613",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2613",
    categories: ["Rune of Eloquence", "ID_FMP_FEAT_2613", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { return model.stat("Rune Feat Count"); }, "Feat");
      model.statadd("Diplomacy Misc", function() { return model.stat("Rune Feat Count"); }, "Feat");
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Escape"] = new engine.RulesElement({
    name: "Rune of Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_2660",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2660",
    categories: ["Rune of Escape", "ID_FMP_FEAT_2660", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Health"] = new engine.RulesElement({
    name: "Rune of Health",
    type: "Feat",
    id: "ID_FMP_FEAT_2685",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2685",
    categories: ["Rune of Health", "ID_FMP_FEAT_2685", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Hope"] = new engine.RulesElement({
    name: "Rune of Hope",
    type: "Feat",
    id: "ID_FMP_FEAT_2614",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2614",
    categories: ["Rune of Hope", "ID_FMP_FEAT_2614", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Torment"] = new engine.RulesElement({
    name: "Rune of Torment",
    type: "Feat",
    id: "ID_FMP_FEAT_2661",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2661",
    categories: ["Rune of Torment", "ID_FMP_FEAT_2661", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Vengeance"] = new engine.RulesElement({
    name: "Rune of Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_2615",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2615",
    categories: ["Rune of Vengeance", "ID_FMP_FEAT_2615", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rune of Zeal"] = new engine.RulesElement({
    name: "Rune of Zeal",
    type: "Feat",
    id: "ID_FMP_FEAT_2616",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2616",
    categories: ["Rune of Zeal", "ID_FMP_FEAT_2616", "ID_INTERNAL_CATEGORY_RUNE", "Rune"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { return model.stat("Rune Feat Count"); }, "Feat");
      model.statadd("Endurance Misc", function() { return model.stat("Rune Feat Count"); }, "Feat");
      model.statadd("Rune Feat Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Price"] = new engine.RulesElement({
    name: "Ruthless Price",
    type: "Feat",
    id: "ID_FMP_FEAT_2686",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2686",
    categories: ["Ruthless Price", "ID_FMP_FEAT_2686"]
  });
  byID[te.id] = te;
  
  te = Feat["Secret of Enduring Vigor"] = new engine.RulesElement({
    name: "Secret of Enduring Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_2687",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2687",
    categories: ["Secret of Enduring Vigor", "ID_FMP_FEAT_2687"]
  });
  byID[te.id] = te;
  
  te = Feat["Secret of Escape"] = new engine.RulesElement({
    name: "Secret of Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_2662",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2662",
    categories: ["Secret of Escape", "ID_FMP_FEAT_2662"]
  });
  byID[te.id] = te;
  
  te = Feat["Secret of Reawakening"] = new engine.RulesElement({
    name: "Secret of Reawakening",
    type: "Feat",
    id: "ID_FMP_FEAT_2617",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2617",
    categories: ["Secret of Reawakening", "ID_FMP_FEAT_2617"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Danger Sense"] = new engine.RulesElement({
    name: "Shared Danger Sense",
    type: "Feat",
    id: "ID_FMP_FEAT_1681",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1681",
    categories: ["Shared Danger Sense", "ID_FMP_FEAT_1681"]
  });
  byID[te.id] = te;
  
  te = Feat["Shield Mastery"] = new engine.RulesElement({
    name: "Shield Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_2663",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2663",
    categories: ["Shield Mastery", "ID_FMP_FEAT_2663"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { return model.stat("Shield Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shifting Defense"] = new engine.RulesElement({
    name: "Shifting Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2723",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2723",
    categories: ["Shifting Defense", "ID_FMP_FEAT_2723"]
  });
  byID[te.id] = te;
  
  te = Feat["Simple Precision"] = new engine.RulesElement({
    name: "Simple Precision",
    type: "Feat",
    id: "ID_FMP_FEAT_2664",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2664",
    categories: ["Simple Precision", "ID_FMP_FEAT_2664"]
  });
  byID[te.id] = te;
  
  te = Feat["Skill Power"] = new engine.RulesElement({
    name: "Skill Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2618",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2618",
    categories: ["Skill Power", "ID_FMP_FEAT_2618"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$LEVEL */ && element.hasCategory("Skill Power")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spiritbond Defense"] = new engine.RulesElement({
    name: "Spiritbond Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2619",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2619",
    categories: ["Spiritbond Defense", "ID_FMP_FEAT_2619"]
  });
  byID[te.id] = te;
  
  te = Feat["Spiritbond Outrage"] = new engine.RulesElement({
    name: "Spiritbond Outrage",
    type: "Feat",
    id: "ID_FMP_FEAT_2692",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2692",
    categories: ["Spiritbond Outrage", "ID_FMP_FEAT_2692"]
  });
  byID[te.id] = te;
  
  te = Feat["Spring Step"] = new engine.RulesElement({
    name: "Spring Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2620",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2620",
    categories: ["Spring Step", "ID_FMP_FEAT_2620"]
  });
  byID[te.id] = te;
  
  te = Feat["Springing Charge"] = new engine.RulesElement({
    name: "Springing Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2621",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2621",
    categories: ["Springing Charge", "ID_FMP_FEAT_2621"]
  });
  byID[te.id] = te;
  
  te = Feat["Starblade Flurry"] = new engine.RulesElement({
    name: "Starblade Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_2665",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2665",
    categories: ["Starblade Flurry", "ID_FMP_FEAT_2665"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Steady Feet"] = new engine.RulesElement({
    name: "Steady Feet",
    type: "Feat",
    id: "ID_FMP_FEAT_2622",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2622",
    categories: ["Steady Feet", "ID_FMP_FEAT_2622"]
  });
  byID[te.id] = te;
  
  te = Feat["Steel Rebuke"] = new engine.RulesElement({
    name: "Steel Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_2666",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2666",
    categories: ["Steel Rebuke", "ID_FMP_FEAT_2666"]
  });
  byID[te.id] = te;
  
  te = Feat["Stone Fist Master"] = new engine.RulesElement({
    name: "Stone Fist Master",
    type: "Feat",
    id: "ID_FMP_FEAT_2691",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2691",
    categories: ["Stone Fist Master", "ID_FMP_FEAT_2691"]
  });
  byID[te.id] = te;
  
  te = Feat["Strengthened Bond"] = new engine.RulesElement({
    name: "Strengthened Bond",
    type: "Feat",
    id: "ID_FMP_FEAT_1818",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1818",
    categories: ["Strengthened Bond", "ID_FMP_FEAT_1818"]
  });
  byID[te.id] = te;
  
  te = Feat["Strike and Shove"] = new engine.RulesElement({
    name: "Strike and Shove",
    type: "Feat",
    id: "ID_FMP_FEAT_2623",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2623",
    categories: ["Strike and Shove", "ID_FMP_FEAT_2623"]
  });
  byID[te.id] = te;
  
  te = Feat["Student of Divine Runes"] = new engine.RulesElement({
    name: "Student of Divine Runes",
    type: "Feat",
    id: "ID_FMP_FEAT_2696",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2696",
    categories: ["Student of Divine Runes", "ID_FMP_FEAT_2696", "ID_INTERNAL_CATEGORY_MULTICLASS_RUNEPRIEST", "Multiclass Runepriest", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(model.elements.id["ID_FMP_POWER_11353"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_RUNEPRIEST"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training"] = new engine.RulesElement({
    name: "Superior Implement Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2624",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2624",
    categories: ["Superior Implement Training", "ID_FMP_FEAT_2624"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate dagger)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_DAGGER)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_DAGGER)",
    categories: ["Superior Implement Training (Accurate dagger)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_DAGGER)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_KI_FOCUS)",
    categories: ["Superior Implement Training (Accurate Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate orb)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate orb)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ORB)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ORB)",
    categories: ["Superior Implement Training (Accurate orb)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ORB)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate rod)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate rod)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ROD)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ROD)",
    categories: ["Superior Implement Training (Accurate rod)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_ROD)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate staff)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_STAFF)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_STAFF)",
    categories: ["Superior Implement Training (Accurate staff)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_STAFF)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate symbol)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate symbol)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_SYMBOL)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_SYMBOL)",
    categories: ["Superior Implement Training (Accurate symbol)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_SYMBOL)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate totem)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate totem)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_TOTEM)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_TOTEM)",
    categories: ["Superior Implement Training (Accurate totem)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_TOTEM)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Accurate wand)"] = new engine.RulesElement({
    name: "Superior Implement Training (Accurate wand)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_WAND)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_WAND)",
    categories: ["Superior Implement Training (Accurate wand)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ACCURATE_WAND)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Ashen rod)"] = new engine.RulesElement({
    name: "Superior Implement Training (Ashen rod)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASHEN_ROD)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASHEN_ROD)",
    categories: ["Superior Implement Training (Ashen rod)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASHEN_ROD)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Astral symbol)"] = new engine.RulesElement({
    name: "Superior Implement Training (Astral symbol)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASTRAL_SYMBOL)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASTRAL_SYMBOL)",
    categories: ["Superior Implement Training (Astral symbol)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ASTRAL_SYMBOL)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Cinder wand)"] = new engine.RulesElement({
    name: "Superior Implement Training (Cinder wand)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CINDER_WAND)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CINDER_WAND)",
    categories: ["Superior Implement Training (Cinder wand)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CINDER_WAND)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Crystal orb)"] = new engine.RulesElement({
    name: "Superior Implement Training (Crystal orb)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CRYSTAL_ORB)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CRYSTAL_ORB)",
    categories: ["Superior Implement Training (Crystal orb)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(CRYSTAL_ORB)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Deathbone rod)"] = new engine.RulesElement({
    name: "Superior Implement Training (Deathbone rod)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEATHBONE_ROD)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEATHBONE_ROD)",
    categories: ["Superior Implement Training (Deathbone rod)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEATHBONE_ROD)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Defiant rod)"] = new engine.RulesElement({
    name: "Superior Implement Training (Defiant rod)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEFIANT_ROD)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEFIANT_ROD)",
    categories: ["Superior Implement Training (Defiant rod)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DEFIANT_ROD)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Dragontooth wand)"] = new engine.RulesElement({
    name: "Superior Implement Training (Dragontooth wand)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DRAGONTOOTH_WAND)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DRAGONTOOTH_WAND)",
    categories: ["Superior Implement Training (Dragontooth wand)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(DRAGONTOOTH_WAND)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Echo tome)"] = new engine.RulesElement({
    name: "Superior Implement Training (Echo tome)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ECHO_TOME)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ECHO_TOME)",
    categories: ["Superior Implement Training (Echo tome)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ECHO_TOME)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Farseeing totem)"] = new engine.RulesElement({
    name: "Superior Implement Training (Farseeing totem)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FARSEEING_TOTEM)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FARSEEING_TOTEM)",
    categories: ["Superior Implement Training (Farseeing totem)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FARSEEING_TOTEM)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Fluid Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Fluid Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FLUID_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FLUID_KI_FOCUS)",
    categories: ["Superior Implement Training (Fluid Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FLUID_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Forbidden tome)"] = new engine.RulesElement({
    name: "Superior Implement Training (Forbidden tome)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FORBIDDEN_TOME)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FORBIDDEN_TOME)",
    categories: ["Superior Implement Training (Forbidden tome)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(FORBIDDEN_TOME)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Greenstone orb)"] = new engine.RulesElement({
    name: "Superior Implement Training (Greenstone orb)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GREENSTONE_ORB)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GREENSTONE_ORB)",
    categories: ["Superior Implement Training (Greenstone orb)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GREENSTONE_ORB)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Guardian staff)"] = new engine.RulesElement({
    name: "Superior Implement Training (Guardian staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GUARDIAN_STAFF)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GUARDIAN_STAFF)",
    categories: ["Superior Implement Training (Guardian staff)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(GUARDIAN_STAFF)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Icicle totem)"] = new engine.RulesElement({
    name: "Superior Implement Training (Icicle totem)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ICICLE_TOTEM)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ICICLE_TOTEM)",
    categories: ["Superior Implement Training (Icicle totem)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ICICLE_TOTEM)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Incendiary dagger)"] = new engine.RulesElement({
    name: "Superior Implement Training (Incendiary dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INCENDIARY_DAGGER)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INCENDIARY_DAGGER)",
    categories: ["Superior Implement Training (Incendiary dagger)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INCENDIARY_DAGGER)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Inexorable Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Inexorable Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INEXORABLE_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INEXORABLE_KI_FOCUS)",
    categories: ["Superior Implement Training (Inexorable Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(INEXORABLE_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Iron Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Iron Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(IRON_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(IRON_KI_FOCUS)",
    categories: ["Superior Implement Training (Iron Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(IRON_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Lancing dagger)"] = new engine.RulesElement({
    name: "Superior Implement Training (Lancing dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(LANCING_DAGGER)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(LANCING_DAGGER)",
    categories: ["Superior Implement Training (Lancing dagger)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(LANCING_DAGGER)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Mighty Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Mighty Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MIGHTY_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MIGHTY_KI_FOCUS)",
    categories: ["Superior Implement Training (Mighty Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MIGHTY_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Mindwarp staff)"] = new engine.RulesElement({
    name: "Superior Implement Training (Mindwarp staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MINDWARP_STAFF)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MINDWARP_STAFF)",
    categories: ["Superior Implement Training (Mindwarp staff)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MINDWARP_STAFF)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Mountain Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Mountain Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MOUNTAIN_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MOUNTAIN_KI_FOCUS)",
    categories: ["Superior Implement Training (Mountain Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(MOUNTAIN_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Petrified orb)"] = new engine.RulesElement({
    name: "Superior Implement Training (Petrified orb)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(PETRIFIED_ORB)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(PETRIFIED_ORB)",
    categories: ["Superior Implement Training (Petrified orb)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(PETRIFIED_ORB)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Quickbeam staff)"] = new engine.RulesElement({
    name: "Superior Implement Training (Quickbeam staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(QUICKBEAM_STAFF)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(QUICKBEAM_STAFF)",
    categories: ["Superior Implement Training (Quickbeam staff)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(QUICKBEAM_STAFF)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Resonating dagger)"] = new engine.RulesElement({
    name: "Superior Implement Training (Resonating dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(RESONATING_DAGGER)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(RESONATING_DAGGER)",
    categories: ["Superior Implement Training (Resonating dagger)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(RESONATING_DAGGER)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Rowan wand)"] = new engine.RulesElement({
    name: "Superior Implement Training (Rowan wand)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ROWAN_WAND)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ROWAN_WAND)",
    categories: ["Superior Implement Training (Rowan wand)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(ROWAN_WAND)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Serene Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Serene Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(SERENE_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(SERENE_KI_FOCUS)",
    categories: ["Superior Implement Training (Serene Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(SERENE_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Storm totem)"] = new engine.RulesElement({
    name: "Superior Implement Training (Storm totem)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(STORM_TOTEM)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(STORM_TOTEM)",
    categories: ["Superior Implement Training (Storm totem)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(STORM_TOTEM)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Transcendent Ki Focus)"] = new engine.RulesElement({
    name: "Superior Implement Training (Transcendent Ki Focus)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(TRANSCENDENT_KI_FOCUS)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(TRANSCENDENT_KI_FOCUS)",
    categories: ["Superior Implement Training (Transcendent Ki Focus)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(TRANSCENDENT_KI_FOCUS)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Unspeakable tome)"] = new engine.RulesElement({
    name: "Superior Implement Training (Unspeakable tome)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(UNSPEAKABLE_TOME)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(UNSPEAKABLE_TOME)",
    categories: ["Superior Implement Training (Unspeakable tome)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(UNSPEAKABLE_TOME)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Warding symbol)"] = new engine.RulesElement({
    name: "Superior Implement Training (Warding symbol)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WARDING_SYMBOL)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WARDING_SYMBOL)",
    categories: ["Superior Implement Training (Warding symbol)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WARDING_SYMBOL)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Implement Training (Wrathful symbol)"] = new engine.RulesElement({
    name: "Superior Implement Training (Wrathful symbol)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WRATHFUL_SYMBOL)",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WRATHFUL_SYMBOL)",
    categories: ["Superior Implement Training (Wrathful symbol)", "ID_INTERNAL_FEAT_SUPERIOR_IMPLEMENT_TRAINING_(WRATHFUL_SYMBOL)"]
  });
  byID[te.id] = te;
  
  te = Feat["Superior Initiative"] = new engine.RulesElement({
    name: "Superior Initiative",
    type: "Feat",
    id: "ID_FMP_FEAT_2688",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2688",
    categories: ["Superior Initiative", "ID_FMP_FEAT_2688"],
    rules: function(model) {
      model.statadd("Initiative Misc", 8, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Targeting Force"] = new engine.RulesElement({
    name: "Targeting Force",
    type: "Feat",
    id: "ID_FMP_FEAT_2667",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2667",
    categories: ["Targeting Force", "ID_FMP_FEAT_2667"]
  });
  byID[te.id] = te;
  
  te = Feat["Teamwork Defense"] = new engine.RulesElement({
    name: "Teamwork Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2625",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2625",
    categories: ["Teamwork Defense", "ID_FMP_FEAT_2625"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are adjacent to one or more allies who also have the Teamwork Defense feat */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Telepathic Sustenance"] = new engine.RulesElement({
    name: "Telepathic Sustenance",
    type: "Feat",
    id: "ID_FMP_FEAT_2729",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2729",
    categories: ["Telepathic Sustenance", "ID_FMP_FEAT_2729"]
  });
  byID[te.id] = te;
  
  te = Feat["Unarmed Mastery"] = new engine.RulesElement({
    name: "Unarmed Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_2689",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2689",
    categories: ["Unarmed Mastery", "ID_FMP_FEAT_2689"]
  });
  byID[te.id] = te;
  
  te = Feat["Unarmored Agility"] = new engine.RulesElement({
    name: "Unarmored Agility",
    type: "Feat",
    id: "ID_FMP_FEAT_2626",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2626",
    categories: ["Unarmored Agility", "ID_FMP_FEAT_2626"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          return 2;
        } else return 0;
       }, "Feat");
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor'))) {
          return 2;
        } else return 0;
       }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Uncanny Scent"] = new engine.RulesElement({
    name: "Uncanny Scent",
    type: "Feat",
    id: "ID_FMP_FEAT_1067",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1067",
    categories: ["Uncanny Scent", "ID_FMP_FEAT_1067"]
  });
  byID[te.id] = te;
  
  te = Feat["Unfailing Vigor"] = new engine.RulesElement({
    name: "Unfailing Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_2627",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2627",
    categories: ["Unfailing Vigor", "ID_FMP_FEAT_2627"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeance Spike"] = new engine.RulesElement({
    name: "Vengeance Spike",
    type: "Feat",
    id: "ID_FMP_FEAT_2274",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2274",
    categories: ["Vengeance Spike", "ID_FMP_FEAT_2274"]
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise"] = new engine.RulesElement({
    name: "Versatile Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_2785",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2785",
    categories: ["Versatile Expertise", "ID_FMP_FEAT_2785"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise II"] = new engine.RulesElement({
    name: "Versatile Expertise II",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_II",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_VERSATILE_EXPERTISE_II",
    categories: ["Versatile Expertise II", "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_II"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise III"] = new engine.RulesElement({
    name: "Versatile Expertise III",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_III",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_VERSATILE_EXPERTISE_III",
    categories: ["Versatile Expertise III", "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_III"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise IV"] = new engine.RulesElement({
    name: "Versatile Expertise IV",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_IV",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_VERSATILE_EXPERTISE_IV",
    categories: ["Versatile Expertise IV", "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_IV"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise V"] = new engine.RulesElement({
    name: "Versatile Expertise V",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_V",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_VERSATILE_EXPERTISE_V",
    categories: ["Versatile Expertise V", "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_V"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Expertise VI"] = new engine.RulesElement({
    name: "Versatile Expertise VI",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_VI",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_VERSATILE_EXPERTISE_VI",
    categories: ["Versatile Expertise VI", "ID_INTERNAL_FEAT_VERSATILE_EXPERTISE_VI"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Weapon Group"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Versatile Expertise Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Advantage"] = new engine.RulesElement({
    name: "Vicious Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_2629",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2629",
    categories: ["Vicious Advantage", "ID_FMP_FEAT_2629"]
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Ferocity"] = new engine.RulesElement({
    name: "Vicious Ferocity",
    type: "Feat",
    id: "ID_FMP_FEAT_2668",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2668",
    categories: ["Vicious Ferocity", "ID_FMP_FEAT_2668"]
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Stomp"] = new engine.RulesElement({
    name: "Vicious Stomp",
    type: "Feat",
    id: "ID_FMP_FEAT_2730",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2730",
    categories: ["Vicious Stomp", "ID_FMP_FEAT_2730"]
  });
  byID[te.id] = te;
  
  te = Feat["Warding Defense"] = new engine.RulesElement({
    name: "Warding Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_2630",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2630",
    categories: ["Warding Defense", "ID_FMP_FEAT_2630"]
  });
  byID[te.id] = te;
  
  te = Feat["Warding Shard Swarm"] = new engine.RulesElement({
    name: "Warding Shard Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_2631",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2631",
    categories: ["Warding Shard Swarm", "ID_FMP_FEAT_2631"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Watchful Redoubt"] = new engine.RulesElement({
    name: "Watchful Redoubt",
    type: "Feat",
    id: "ID_FMP_FEAT_2632",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2632",
    categories: ["Watchful Redoubt", "ID_FMP_FEAT_2632"]
  });
  byID[te.id] = te;
  
  te = Feat["Widened Mantle"] = new engine.RulesElement({
    name: "Widened Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_2147",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2147",
    categories: ["Widened Mantle", "ID_FMP_FEAT_2147"]
  });
  byID[te.id] = te;
  
  te = Feat["Wind's Fortunes"] = new engine.RulesElement({
    name: "Wind's Fortunes",
    type: "Feat",
    id: "ID_FMP_FEAT_1682",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1682",
    categories: ["Wind's Fortunes", "ID_FMP_FEAT_1682"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrath of Defeat"] = new engine.RulesElement({
    name: "Wrath of Defeat",
    type: "Feat",
    id: "ID_FMP_FEAT_2669",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2669",
    categories: ["Wrath of Defeat", "ID_FMP_FEAT_2669"]
  });
  byID[te.id] = te;
  
  te = Feat["Zuwoth's Enlightened Step"] = new engine.RulesElement({
    name: "Zuwoth's Enlightened Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1678",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1678",
    categories: ["Zuwoth's Enlightened Step", "ID_FMP_FEAT_1678"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
