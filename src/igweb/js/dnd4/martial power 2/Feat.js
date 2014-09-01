define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Action Rush"] = new engine.RulesElement({
    name: "Action Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_2389",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2389",
    categories: ["Action Rush", "ID_FMP_FEAT_2389"],
    rules: function(model) {
      model.statadd("Action Point", "Action Rush:When you spend an action point to take an extra action, you can shift 2 squares as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Adamant Arrow Commander"] = new engine.RulesElement({
    name: "Adamant Arrow Commander",
    type: "Feat",
    id: "ID_FMP_FEAT_2070",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2070",
    categories: ["Adamant Arrow Commander", "ID_FMP_FEAT_2070", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Adamant Arrow Hunter"] = new engine.RulesElement({
    name: "Adamant Arrow Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2325",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2325",
    categories: ["Adamant Arrow Hunter", "ID_FMP_FEAT_2325", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Adamant Arrow Student"] = new engine.RulesElement({
    name: "Adamant Arrow Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2069",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2069",
    categories: ["Adamant Arrow Student", "ID_FMP_FEAT_2069", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Agile Brawler"] = new engine.RulesElement({
    name: "Agile Brawler",
    type: "Feat",
    id: "ID_FMP_FEAT_2542",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2542",
    categories: ["Agile Brawler", "ID_FMP_FEAT_2542", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2183"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Agile Command"] = new engine.RulesElement({
    name: "Agile Command",
    type: "Feat",
    id: "ID_FMP_FEAT_2480",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2480",
    categories: ["Agile Command", "ID_FMP_FEAT_2480"]
  });
  byID[te.id] = te;
  
  te = Feat["Agile Running Attack"] = new engine.RulesElement({
    name: "Agile Running Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_2390",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2390",
    categories: ["Agile Running Attack", "ID_FMP_FEAT_2390"]
  });
  byID[te.id] = te;
  
  te = Feat["Agile Stand"] = new engine.RulesElement({
    name: "Agile Stand",
    type: "Feat",
    id: "ID_FMP_FEAT_2391",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2391",
    categories: ["Agile Stand", "ID_FMP_FEAT_2391"]
  });
  byID[te.id] = te;
  
  te = Feat["Allied Opportunity"] = new engine.RulesElement({
    name: "Allied Opportunity",
    type: "Feat",
    id: "ID_FMP_FEAT_2522",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2522",
    categories: ["Allied Opportunity", "ID_FMP_FEAT_2522"]
  });
  byID[te.id] = te;
  
  te = Feat["Ambush Tactics"] = new engine.RulesElement({
    name: "Ambush Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_2392",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2392",
    categories: ["Ambush Tactics", "ID_FMP_FEAT_2392"]
  });
  byID[te.id] = te;
  
  te = Feat["Archer Captain"] = new engine.RulesElement({
    name: "Archer Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2393",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2393",
    categories: ["Archer Captain", "ID_FMP_FEAT_2393"]
  });
  byID[te.id] = te;
  
  te = Feat["Arkhosian Fang Commander"] = new engine.RulesElement({
    name: "Arkhosian Fang Commander",
    type: "Feat",
    id: "ID_FMP_FEAT_2327",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2327",
    categories: ["Arkhosian Fang Commander", "ID_FMP_FEAT_2327", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Arkhosian Fang Duelist"] = new engine.RulesElement({
    name: "Arkhosian Fang Duelist",
    type: "Feat",
    id: "ID_FMP_FEAT_2328",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2328",
    categories: ["Arkhosian Fang Duelist", "ID_FMP_FEAT_2328", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Arkhosian Fang Mauler"] = new engine.RulesElement({
    name: "Arkhosian Fang Mauler",
    type: "Feat",
    id: "ID_FMP_FEAT_2329",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2329",
    categories: ["Arkhosian Fang Mauler", "ID_FMP_FEAT_2329", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Arkhosian Fang Student"] = new engine.RulesElement({
    name: "Arkhosian Fang Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2326",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2326",
    categories: ["Arkhosian Fang Student", "ID_FMP_FEAT_2326", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_2326 association,bastard sword:attack", function() { /* against a bloodied enemy */ return 2; });
      model.statadd("ID_FMP_FEAT_2326 association,broadsword:attack", function() { /* against a bloodied enemy */ return 2; });
      model.statadd("ID_FMP_FEAT_2326 association,greatsword:attack", function() { /* against a bloodied enemy */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armored Endurance Training"] = new engine.RulesElement({
    name: "Armored Endurance Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2394",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2394",
    categories: ["Armored Endurance Training", "ID_FMP_FEAT_2394"],
    rules: function(model) {
      model.statadd("Athletics", 0, "Armor Penalty");
      model.statadd("Endurance", 0, "Armor Penalty");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armored Swiftness Training"] = new engine.RulesElement({
    name: "Armored Swiftness Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2395",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2395",
    categories: ["Armored Swiftness Training", "ID_FMP_FEAT_2395"],
    rules: function(model) {
      model.statadd("Acrobatics", 0, "Armor Penalty");
      model.statadd("Stealth", 0, "Armor Penalty");
      model.statadd("Thievery", 0, "Armor Penalty");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armored Warlord"] = new engine.RulesElement({
    name: "Armored Warlord",
    type: "Feat",
    id: "ID_FMP_FEAT_2396",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2396",
    categories: ["Armored Warlord", "ID_FMP_FEAT_2396"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avalanche Reaver"] = new engine.RulesElement({
    name: "Avalanche Reaver",
    type: "Feat",
    id: "ID_FMP_FEAT_2481",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2481",
    categories: ["Avalanche Reaver", "ID_FMP_FEAT_2481"]
  });
  byID[te.id] = te;
  
  te = Feat["Barreling Charge"] = new engine.RulesElement({
    name: "Barreling Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2397",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2397",
    categories: ["Barreling Charge", "ID_FMP_FEAT_2397"]
  });
  byID[te.id] = te;
  
  te = Feat["Bestial Death Strike"] = new engine.RulesElement({
    name: "Bestial Death Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2482",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2482",
    categories: ["Bestial Death Strike", "ID_FMP_FEAT_2482"],
    rules: function(model) {
      model.statadd("BEAST.attack rolls", function() { /* while bloodied */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Black Hood Butcher"] = new engine.RulesElement({
    name: "Black Hood Butcher",
    type: "Feat",
    id: "ID_FMP_FEAT_1310",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1310",
    categories: ["Black Hood Butcher", "ID_FMP_FEAT_1310", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Black Hood Executioner"] = new engine.RulesElement({
    name: "Black Hood Executioner",
    type: "Feat",
    id: "ID_FMP_FEAT_2072",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2072",
    categories: ["Black Hood Executioner", "ID_FMP_FEAT_2072", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Black Hood Slayer"] = new engine.RulesElement({
    name: "Black Hood Slayer",
    type: "Feat",
    id: "ID_FMP_FEAT_1309",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1309",
    categories: ["Black Hood Slayer", "ID_FMP_FEAT_1309", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_1309 association:key ability", "dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Black Hood Student"] = new engine.RulesElement({
    name: "Black Hood Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2071",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2071",
    categories: ["Black Hood Student", "ID_FMP_FEAT_2071", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("two-hands,axe,ID_FMP_FEAT_2071 association:attack", function() { /* if the enemy is slowed */ return 2; });
      model.statadd("two-hands,axe,ID_FMP_FEAT_2071 association:attack", function() { /* if that enemy is helpless or immobilized */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blood Quarry"] = new engine.RulesElement({
    name: "Blood Quarry",
    type: "Feat",
    id: "ID_FMP_FEAT_2398",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2398",
    categories: ["Blood Quarry", "ID_FMP_FEAT_2398"],
    rules: function(model) {
      model.statadd("Bloodhint", function() { /* against a creature designated as your quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bravura Leader"] = new engine.RulesElement({
    name: "Bravura Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2543",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2543",
    categories: ["Bravura Leader", "ID_FMP_FEAT_2543", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Bravura Leader", {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("ALLY.Action Point", "Bravura Leader:When an ally you can see spends an action point to attack, that ally can choose to gain a +4 bonus to the attack's damage roll; if the ally chooses to use the bonus, he or she grants combat advantage to the target of the attack until the end of his or her next turn");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brawler Guard"] = new engine.RulesElement({
    name: "Brawler Guard",
    type: "Feat",
    id: "ID_FMP_FEAT_2399",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2399",
    categories: ["Brawler Guard", "ID_FMP_FEAT_2399"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.inventory['off-hand'])) {
            
            if (model.wearing('Weapon')) {
              return 1;
            } else return 0;
          
        } else return 0;
       }, "Shield");
      model.statadd("Reflex Defense", function() { 
        if (!(model.inventory['off-hand'])) {
            
            if (model.wearing('Weapon')) {
              return 1;
            } else return 0;
          
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brawling Warrior"] = new engine.RulesElement({
    name: "Brawling Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2544",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2544",
    categories: ["Brawling Warrior", "ID_FMP_FEAT_2544", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Brawling Warrior", {
        filter: function(model, element) { return element.hasCategory("Fighter Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Bludgeon"] = new engine.RulesElement({
    name: "Brutal Bludgeon",
    type: "Feat",
    id: "ID_FMP_FEAT_2483",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2483",
    categories: ["Brutal Bludgeon", "ID_FMP_FEAT_2483"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Brawler"] = new engine.RulesElement({
    name: "Brutal Brawler",
    type: "Feat",
    id: "ID_FMP_FEAT_2400",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2400",
    categories: ["Brutal Brawler", "ID_FMP_FEAT_2400"],
    rules: function(model) {
      model.statadd("Unarmed Damage Die", "1d6");
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Changeling's Mark"] = new engine.RulesElement({
    name: "Changeling's Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2401",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2401",
    categories: ["Changeling's Mark", "ID_FMP_FEAT_2401"]
  });
  byID[te.id] = te;
  
  te = Feat["Clobbering Brawler"] = new engine.RulesElement({
    name: "Clobbering Brawler",
    type: "Feat",
    id: "ID_FMP_FEAT_2484",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2484",
    categories: ["Clobbering Brawler", "ID_FMP_FEAT_2484"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Opportunist"] = new engine.RulesElement({
    name: "Combat Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_2485",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2485",
    categories: ["Combat Opportunist", "ID_FMP_FEAT_2485"]
  });
  byID[te.id] = te;
  
  te = Feat["Commander's Memory"] = new engine.RulesElement({
    name: "Commander's Memory",
    type: "Feat",
    id: "ID_FMP_FEAT_2486",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2486",
    categories: ["Commander's Memory", "ID_FMP_FEAT_2486"]
  });
  byID[te.id] = te;
  
  te = Feat["Constricting Serpent"] = new engine.RulesElement({
    name: "Constricting Serpent",
    type: "Feat",
    id: "ID_FMP_FEAT_2402",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2402",
    categories: ["Constricting Serpent", "ID_FMP_FEAT_2402"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cragborn Courage"] = new engine.RulesElement({
    name: "Cragborn Courage",
    type: "Feat",
    id: "ID_FMP_FEAT_2487",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2487",
    categories: ["Cragborn Courage", "ID_FMP_FEAT_2487"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1590:healing", function() { return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Crushing Mace"] = new engine.RulesElement({
    name: "Crushing Mace",
    type: "Feat",
    id: "ID_FMP_FEAT_2403",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2403",
    categories: ["Crushing Mace", "ID_FMP_FEAT_2403"],
    rules: function(model) {
      model.statadd("melee basic,mace group:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Crushing Pin"] = new engine.RulesElement({
    name: "Crushing Pin",
    type: "Feat",
    id: "ID_FMP_FEAT_2488",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2488",
    categories: ["Crushing Pin", "ID_FMP_FEAT_2488"]
  });
  byID[te.id] = te;
  
  te = Feat["Cyclone Warrior"] = new engine.RulesElement({
    name: "Cyclone Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2545",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2545",
    categories: ["Cyclone Warrior", "ID_FMP_FEAT_2545", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Cyclone Warrior", {
        filter: function(model, element) { return element.hasCategory("Fighter Class"); }
      });
      model.statadd("Cyclone Warrior", 1);
      model.statadd("Cyclone Warrior", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Strike"] = new engine.RulesElement({
    name: "Darkfire Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2404",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2404",
    categories: ["Darkfire Strike", "ID_FMP_FEAT_2404"]
  });
  byID[te.id] = te;
  
  te = Feat["Deadeye Slinger"] = new engine.RulesElement({
    name: "Deadeye Slinger",
    type: "Feat",
    id: "ID_FMP_FEAT_2405",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2405",
    categories: ["Deadeye Slinger", "ID_FMP_FEAT_2405"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Deceptive Staff"] = new engine.RulesElement({
    name: "Deceptive Staff",
    type: "Feat",
    id: "ID_FMP_FEAT_2489",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2489",
    categories: ["Deceptive Staff", "ID_FMP_FEAT_2489"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Throw"] = new engine.RulesElement({
    name: "Defensive Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_2406",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2406",
    categories: ["Defensive Throw", "ID_FMP_FEAT_2406"]
  });
  byID[te.id] = te;
  
  te = Feat["Deft Blade"] = new engine.RulesElement({
    name: "Deft Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_2490",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2490",
    categories: ["Deft Blade", "ID_FMP_FEAT_2490"]
  });
  byID[te.id] = te;
  
  te = Feat["Desert Moon Skirmisher"] = new engine.RulesElement({
    name: "Desert Moon Skirmisher",
    type: "Feat",
    id: "ID_FMP_FEAT_2708",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2708",
    categories: ["Desert Moon Skirmisher", "ID_FMP_FEAT_2708", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Desert Moon Student"] = new engine.RulesElement({
    name: "Desert Moon Student",
    type: "Feat",
    id: "ID_FMP_FEAT_1311",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1311",
    categories: ["Desert Moon Student", "ID_FMP_FEAT_1311", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Desert Moon Swordmaster"] = new engine.RulesElement({
    name: "Desert Moon Swordmaster",
    type: "Feat",
    id: "ID_FMP_FEAT_2709",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2709",
    categories: ["Desert Moon Swordmaster", "ID_FMP_FEAT_2709", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Desert Moon Zephyr"] = new engine.RulesElement({
    name: "Desert Moon Zephyr",
    type: "Feat",
    id: "ID_FMP_FEAT_1312",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1312",
    categories: ["Desert Moon Zephyr", "ID_FMP_FEAT_1312", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Directing Inspiration"] = new engine.RulesElement({
    name: "Directing Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_2407",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2407",
    categories: ["Directing Inspiration", "ID_FMP_FEAT_2407"]
  });
  byID[te.id] = te;
  
  te = Feat["Disheartening Ambush"] = new engine.RulesElement({
    name: "Disheartening Ambush",
    type: "Feat",
    id: "ID_FMP_FEAT_2491",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2491",
    categories: ["Disheartening Ambush", "ID_FMP_FEAT_2491"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon Breath Scoundrel"] = new engine.RulesElement({
    name: "Dragon Breath Scoundrel",
    type: "Feat",
    id: "ID_FMP_FEAT_2492",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2492",
    categories: ["Dragon Breath Scoundrel", "ID_FMP_FEAT_2492"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon Breath Tactician"] = new engine.RulesElement({
    name: "Dragon Breath Tactician",
    type: "Feat",
    id: "ID_FMP_FEAT_2493",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2493",
    categories: ["Dragon Breath Tactician", "ID_FMP_FEAT_2493"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Channeling"] = new engine.RulesElement({
    name: "Dragonborn Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_2408",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2408",
    categories: ["Dragonborn Channeling", "ID_FMP_FEAT_2408"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonclaw Mark"] = new engine.RulesElement({
    name: "Dragonclaw Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2409",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2409",
    categories: ["Dragonclaw Mark", "ID_FMP_FEAT_2409"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", function() { /* to creatures marked by you */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Draw First Blood"] = new engine.RulesElement({
    name: "Draw First Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_2410",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2410",
    categories: ["Draw First Blood", "ID_FMP_FEAT_2410"],
    rules: function(model) {
      model.statadd("melee basic:damage", function() { /* against undamaged enemies */ return model.stat("Wisdom modifier"); });
      model.statadd("ranged basic:damage", function() { /* against undamaged enemies */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Driven Leadership"] = new engine.RulesElement({
    name: "Driven Leadership",
    type: "Feat",
    id: "ID_FMP_FEAT_2523",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2523",
    categories: ["Driven Leadership", "ID_FMP_FEAT_2523"]
  });
  byID[te.id] = te;
  
  te = Feat["Dual Challenge"] = new engine.RulesElement({
    name: "Dual Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2524",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2524",
    categories: ["Dual Challenge", "ID_FMP_FEAT_2524"]
  });
  byID[te.id] = te;
  
  te = Feat["Dwarven Recovery"] = new engine.RulesElement({
    name: "Dwarven Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2494",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2494",
    categories: ["Dwarven Recovery", "ID_FMP_FEAT_2494"]
  });
  byID[te.id] = te;
  
  te = Feat["Eladrin's Challenge"] = new engine.RulesElement({
    name: "Eladrin's Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2411",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2411",
    categories: ["Eladrin's Challenge", "ID_FMP_FEAT_2411"]
  });
  byID[te.id] = te;
  
  te = Feat["Elsir Hammer Champion"] = new engine.RulesElement({
    name: "Elsir Hammer Champion",
    type: "Feat",
    id: "ID_FMP_FEAT_2332",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2332",
    categories: ["Elsir Hammer Champion", "ID_FMP_FEAT_2332", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Elsir Hammer General"] = new engine.RulesElement({
    name: "Elsir Hammer General",
    type: "Feat",
    id: "ID_FMP_FEAT_2333",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2333",
    categories: ["Elsir Hammer General", "ID_FMP_FEAT_2333", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Elsir Hammer Stalker"] = new engine.RulesElement({
    name: "Elsir Hammer Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_2334",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2334",
    categories: ["Elsir Hammer Stalker", "ID_FMP_FEAT_2334", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Elsir Hammer Student"] = new engine.RulesElement({
    name: "Elsir Hammer Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2331",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2331",
    categories: ["Elsir Hammer Student", "ID_FMP_FEAT_2331", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elusive Movement"] = new engine.RulesElement({
    name: "Elusive Movement",
    type: "Feat",
    id: "ID_FMP_FEAT_2495",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2495",
    categories: ["Elusive Movement", "ID_FMP_FEAT_2495"]
  });
  byID[te.id] = te;
  
  te = Feat["Elven Sidestep"] = new engine.RulesElement({
    name: "Elven Sidestep",
    type: "Feat",
    id: "ID_FMP_FEAT_2412",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2412",
    categories: ["Elven Sidestep", "ID_FMP_FEAT_2412"]
  });
  byID[te.id] = te;
  
  te = Feat["Enabling Shot"] = new engine.RulesElement({
    name: "Enabling Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2525",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2525",
    categories: ["Enabling Shot", "ID_FMP_FEAT_2525"]
  });
  byID[te.id] = te;
  
  te = Feat["Expert Combat Leader"] = new engine.RulesElement({
    name: "Expert Combat Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2413",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2413",
    categories: ["Expert Combat Leader", "ID_FMP_FEAT_2413"],
    rules: function(model) {
      model.statadd("Combat Leader", 3, "Combat Leader");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Expert Skirmisher"] = new engine.RulesElement({
    name: "Expert Skirmisher",
    type: "Feat",
    id: "ID_FMP_FEAT_2526",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2526",
    categories: ["Expert Skirmisher", "ID_FMP_FEAT_2526"]
  });
  byID[te.id] = te;
  
  te = Feat["Expert Sneak"] = new engine.RulesElement({
    name: "Expert Sneak",
    type: "Feat",
    id: "ID_FMP_FEAT_2496",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2496",
    categories: ["Expert Sneak", "ID_FMP_FEAT_2496"]
  });
  byID[te.id] = te;
  
  te = Feat["Explosive Leader"] = new engine.RulesElement({
    name: "Explosive Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2414",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2414",
    categories: ["Explosive Leader", "ID_FMP_FEAT_2414"]
  });
  byID[te.id] = te;
  
  te = Feat["Fading Forces"] = new engine.RulesElement({
    name: "Fading Forces",
    type: "Feat",
    id: "ID_FMP_FEAT_2497",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2497",
    categories: ["Fading Forces", "ID_FMP_FEAT_2497"]
  });
  byID[te.id] = te;
  
  te = Feat["Fate Favors the Bold"] = new engine.RulesElement({
    name: "Fate Favors the Bold",
    type: "Feat",
    id: "ID_FMP_FEAT_2527",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2527",
    categories: ["Fate Favors the Bold", "ID_FMP_FEAT_2527"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearless Seeker"] = new engine.RulesElement({
    name: "Fearless Seeker",
    type: "Feat",
    id: "ID_FMP_FEAT_2415",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2415",
    categories: ["Fearless Seeker", "ID_FMP_FEAT_2415"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Assault"] = new engine.RulesElement({
    name: "Fearsome Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_2498",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2498",
    categories: ["Fearsome Assault", "ID_FMP_FEAT_2498"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Shroud"] = new engine.RulesElement({
    name: "Feyborn Shroud",
    type: "Feat",
    id: "ID_FMP_FEAT_2416",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2416",
    categories: ["Feyborn Shroud", "ID_FMP_FEAT_2416"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Stratagem"] = new engine.RulesElement({
    name: "Feyborn Stratagem",
    type: "Feat",
    id: "ID_FMP_FEAT_2499",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2499",
    categories: ["Feyborn Stratagem", "ID_FMP_FEAT_2499"]
  });
  byID[te.id] = te;
  
  te = Feat["Feywild Flanker"] = new engine.RulesElement({
    name: "Feywild Flanker",
    type: "Feat",
    id: "ID_FMP_FEAT_2500",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2500",
    categories: ["Feywild Flanker", "ID_FMP_FEAT_2500"]
  });
  byID[te.id] = te;
  
  te = Feat["Fight On"] = new engine.RulesElement({
    name: "Fight On",
    type: "Feat",
    id: "ID_FMP_FEAT_2501",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2501",
    categories: ["Fight On", "ID_FMP_FEAT_2501"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Flank on the Run"] = new engine.RulesElement({
    name: "Flank on the Run",
    type: "Feat",
    id: "ID_FMP_FEAT_2417",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2417",
    categories: ["Flank on the Run", "ID_FMP_FEAT_2417"]
  });
  byID[te.id] = te;
  
  te = Feat["Formation Fighting"] = new engine.RulesElement({
    name: "Formation Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_2418",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2418",
    categories: ["Formation Fighting", "ID_FMP_FEAT_2418"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* for each ally adjacent to the enemy, on opportunity attacks */ return 1; });
      model.statadd("damage rolls", function() { /* for each ally adjacent to the enemy, on opportunity attacks */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Furious Charge"] = new engine.RulesElement({
    name: "Furious Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2419",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2419",
    categories: ["Furious Charge", "ID_FMP_FEAT_2419"]
  });
  byID[te.id] = te;
  
  te = Feat["Gliding Beast"] = new engine.RulesElement({
    name: "Gliding Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_2502",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2502",
    categories: ["Gliding Beast", "ID_FMP_FEAT_2502"]
  });
  byID[te.id] = te;
  
  te = Feat["Gnome Weapon Training"] = new engine.RulesElement({
    name: "Gnome Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2420",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2420",
    categories: ["Gnome Weapon Training", "ID_FMP_FEAT_2420"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_GNOME_WEAPON_TRAINING"]);
      model.statadd("Gnome Weapon Training", 1);
      model.statadd("Gnome Weapon Training", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Goliath Crusher"] = new engine.RulesElement({
    name: "Goliath Crusher",
    type: "Feat",
    id: "ID_FMP_FEAT_2421",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2421",
    categories: ["Goliath Crusher", "ID_FMP_FEAT_2421"]
  });
  byID[te.id] = te;
  
  te = Feat["Goring Boar"] = new engine.RulesElement({
    name: "Goring Boar",
    type: "Feat",
    id: "ID_FMP_FEAT_2422",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2422",
    categories: ["Goring Boar", "ID_FMP_FEAT_2422"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Guide the Shot"] = new engine.RulesElement({
    name: "Guide the Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2423",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2423",
    categories: ["Guide the Shot", "ID_FMP_FEAT_2423"]
  });
  byID[te.id] = te;
  
  te = Feat["Guiding Step"] = new engine.RulesElement({
    name: "Guiding Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2424",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2424",
    categories: ["Guiding Step", "ID_FMP_FEAT_2424"]
  });
  byID[te.id] = te;
  
  te = Feat["Hammer Shock"] = new engine.RulesElement({
    name: "Hammer Shock",
    type: "Feat",
    id: "ID_FMP_FEAT_2503",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2503",
    categories: ["Hammer Shock", "ID_FMP_FEAT_2503"]
  });
  byID[te.id] = te;
  
  te = Feat["Harrowing Swarm Captain"] = new engine.RulesElement({
    name: "Harrowing Swarm Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2336",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2336",
    categories: ["Harrowing Swarm Captain", "ID_FMP_FEAT_2336", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Harrowing Swarm Scout"] = new engine.RulesElement({
    name: "Harrowing Swarm Scout",
    type: "Feat",
    id: "ID_FMP_FEAT_2337",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2337",
    categories: ["Harrowing Swarm Scout", "ID_FMP_FEAT_2337", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2337 association-thrown", "crossbow group+bow group");
      model.statadd("ID_FMP_FEAT_2337 association:key ability", "DMG:Dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harrowing Swarm Stalker"] = new engine.RulesElement({
    name: "Harrowing Swarm Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_2338",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2338",
    categories: ["Harrowing Swarm Stalker", "ID_FMP_FEAT_2338", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2338 association-Light Blade", "crossbow group");
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harrowing Swarm Student"] = new engine.RulesElement({
    name: "Harrowing Swarm Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2335",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2335",
    categories: ["Harrowing Swarm Student", "ID_FMP_FEAT_2335", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harrying Raptor"] = new engine.RulesElement({
    name: "Harrying Raptor",
    type: "Feat",
    id: "ID_FMP_FEAT_2425",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2425",
    categories: ["Harrying Raptor", "ID_FMP_FEAT_2425"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Heartening Exploit"] = new engine.RulesElement({
    name: "Heartening Exploit",
    type: "Feat",
    id: "ID_FMP_FEAT_2528",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2528",
    categories: ["Heartening Exploit", "ID_FMP_FEAT_2528"],
    rules: function(model) {
      model.select('Power', 1, "Heartening Exploit", {
        filter: function(model, element) { return (element.hasCategory("encounter") && element.hasCategory("ID_FMP_CLASS_8")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hidden Pulse"] = new engine.RulesElement({
    name: "Hidden Pulse",
    type: "Feat",
    id: "ID_FMP_FEAT_2426",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2426",
    categories: ["Hidden Pulse", "ID_FMP_FEAT_2426"]
  });
  byID[te.id] = te;
  
  te = Feat["Hip Throw"] = new engine.RulesElement({
    name: "Hip Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_2427",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2427",
    categories: ["Hip Throw", "ID_FMP_FEAT_2427"]
  });
  byID[te.id] = te;
  
  te = Feat["Hobbling Strike"] = new engine.RulesElement({
    name: "Hobbling Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2428",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2428",
    categories: ["Hobbling Strike", "ID_FMP_FEAT_2428"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Spear Chieftain"] = new engine.RulesElement({
    name: "Hunting Spear Chieftain",
    type: "Feat",
    id: "ID_FMP_FEAT_2342",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2342",
    categories: ["Hunting Spear Chieftain", "ID_FMP_FEAT_2342", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures that are larger than you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Spear Skirmisher"] = new engine.RulesElement({
    name: "Hunting Spear Skirmisher",
    type: "Feat",
    id: "ID_FMP_FEAT_2341",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2341",
    categories: ["Hunting Spear Skirmisher", "ID_FMP_FEAT_2341", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures that are larger than you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Spear Student"] = new engine.RulesElement({
    name: "Hunting Spear Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2339",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2339",
    categories: ["Hunting Spear Student", "ID_FMP_FEAT_2339", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Spear Warder"] = new engine.RulesElement({
    name: "Hunting Spear Warder",
    type: "Feat",
    id: "ID_FMP_FEAT_2340",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2340",
    categories: ["Hunting Spear Warder", "ID_FMP_FEAT_2340", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures that are larger than you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Impaling Spear"] = new engine.RulesElement({
    name: "Impaling Spear",
    type: "Feat",
    id: "ID_FMP_FEAT_2504",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2504",
    categories: ["Impaling Spear", "ID_FMP_FEAT_2504"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Battlefront Shift"] = new engine.RulesElement({
    name: "Improved Battlefront Shift",
    type: "Feat",
    id: "ID_FMP_FEAT_2505",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2505",
    categories: ["Improved Battlefront Shift", "ID_FMP_FEAT_2505"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Cunning Sneak"] = new engine.RulesElement({
    name: "Improved Cunning Sneak",
    type: "Feat",
    id: "ID_FMP_FEAT_2429",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2429",
    categories: ["Improved Cunning Sneak", "ID_FMP_FEAT_2429"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Insight"] = new engine.RulesElement({
    name: "Improved Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_2430",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2430",
    categories: ["Improved Insight", "ID_FMP_FEAT_2430"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Skirmishing"] = new engine.RulesElement({
    name: "Improved Skirmishing",
    type: "Feat",
    id: "ID_FMP_FEAT_2431",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2431",
    categories: ["Improved Skirmishing", "ID_FMP_FEAT_2431"]
  });
  byID[te.id] = te;
  
  te = Feat["Inescapable Hold"] = new engine.RulesElement({
    name: "Inescapable Hold",
    type: "Feat",
    id: "ID_FMP_FEAT_2432",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2432",
    categories: ["Inescapable Hold", "ID_FMP_FEAT_2432"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Might"] = new engine.RulesElement({
    name: "Infernal Might",
    type: "Feat",
    id: "ID_FMP_FEAT_2433",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2433",
    categories: ["Infernal Might", "ID_FMP_FEAT_2433"]
  });
  byID[te.id] = te;
  
  te = Feat["Insightful Leader"] = new engine.RulesElement({
    name: "Insightful Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2546",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2546",
    categories: ["Insightful Leader", "ID_FMP_FEAT_2546", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Insightful Leader", {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("Action Point", "Insightful Leader:You gain training in one skill from the warlord's class skills list. When an ally you can see spends an action point to take an extra action, that ally gains a +1 bonus to all defenses until the end of his or her next turn.");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Insightful Preparation"] = new engine.RulesElement({
    name: "Insightful Preparation",
    type: "Feat",
    id: "ID_FMP_FEAT_2506",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2506",
    categories: ["Insightful Preparation", "ID_FMP_FEAT_2506"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspirational Attacker"] = new engine.RulesElement({
    name: "Inspirational Attacker",
    type: "Feat",
    id: "ID_FMP_FEAT_2434",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2434",
    categories: ["Inspirational Attacker", "ID_FMP_FEAT_2434"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspiring Breath"] = new engine.RulesElement({
    name: "Inspiring Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2435",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2435",
    categories: ["Inspiring Breath", "ID_FMP_FEAT_2435"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironstar Bravo"] = new engine.RulesElement({
    name: "Ironstar Bravo",
    type: "Feat",
    id: "ID_FMP_FEAT_2344",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2344",
    categories: ["Ironstar Bravo", "ID_FMP_FEAT_2344", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironstar Crusher"] = new engine.RulesElement({
    name: "Ironstar Crusher",
    type: "Feat",
    id: "ID_FMP_FEAT_2345",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2345",
    categories: ["Ironstar Crusher", "ID_FMP_FEAT_2345", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironstar Marauder"] = new engine.RulesElement({
    name: "Ironstar Marauder",
    type: "Feat",
    id: "ID_FMP_FEAT_2346",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2346",
    categories: ["Ironstar Marauder", "ID_FMP_FEAT_2346", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironstar Student"] = new engine.RulesElement({
    name: "Ironstar Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2343",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2343",
    categories: ["Ironstar Student", "ID_FMP_FEAT_2343", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Kulkor Battlearm Captain"] = new engine.RulesElement({
    name: "Kulkor Battlearm Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2348",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2348",
    categories: ["Kulkor Battlearm Captain", "ID_FMP_FEAT_2348", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Kulkor Battlearm Hunter"] = new engine.RulesElement({
    name: "Kulkor Battlearm Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2349",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2349",
    categories: ["Kulkor Battlearm Hunter", "ID_FMP_FEAT_2349", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Kulkor Battlearm Rattler"] = new engine.RulesElement({
    name: "Kulkor Battlearm Rattler",
    type: "Feat",
    id: "ID_FMP_FEAT_2350",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2350",
    categories: ["Kulkor Battlearm Rattler", "ID_FMP_FEAT_2350", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Kulkor Battlearm Student"] = new engine.RulesElement({
    name: "Kulkor Battlearm Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2347",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2347",
    categories: ["Kulkor Battlearm Student", "ID_FMP_FEAT_2347", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_2347 association:damage", function() { /* against an enemy granting combat advantage to you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Kulkor Battlearm Warrior"] = new engine.RulesElement({
    name: "Kulkor Battlearm Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2351",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2351",
    categories: ["Kulkor Battlearm Warrior", "ID_FMP_FEAT_2351", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Lashing Flail"] = new engine.RulesElement({
    name: "Lashing Flail",
    type: "Feat",
    id: "ID_FMP_FEAT_2507",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2507",
    categories: ["Lashing Flail", "ID_FMP_FEAT_2507"]
  });
  byID[te.id] = te;
  
  te = Feat["Leaf Runner Pathfinder"] = new engine.RulesElement({
    name: "Leaf Runner Pathfinder",
    type: "Feat",
    id: "ID_FMP_FEAT_2353",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2353",
    categories: ["Leaf Runner Pathfinder", "ID_FMP_FEAT_2353", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Leaf Runner Sneak"] = new engine.RulesElement({
    name: "Leaf Runner Sneak",
    type: "Feat",
    id: "ID_FMP_FEAT_2354",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2354",
    categories: ["Leaf Runner Sneak", "ID_FMP_FEAT_2354", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Leaf Runner Sniper"] = new engine.RulesElement({
    name: "Leaf Runner Sniper",
    type: "Feat",
    id: "ID_FMP_FEAT_2355",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2355",
    categories: ["Leaf Runner Sniper", "ID_FMP_FEAT_2355", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Leaf Runner Student"] = new engine.RulesElement({
    name: "Leaf Runner Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2352",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2352",
    categories: ["Leaf Runner Student", "ID_FMP_FEAT_2352", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Learn by Doing"] = new engine.RulesElement({
    name: "Learn by Doing",
    type: "Feat",
    id: "ID_FMP_FEAT_2529",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2529",
    categories: ["Learn by Doing", "ID_FMP_FEAT_2529"]
  });
  byID[te.id] = te;
  
  te = Feat["Lend Strength"] = new engine.RulesElement({
    name: "Lend Strength",
    type: "Feat",
    id: "ID_FMP_FEAT_2436",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2436",
    categories: ["Lend Strength", "ID_FMP_FEAT_2436"]
  });
  byID[te.id] = te;
  
  te = Feat["Lethal Hammer Training"] = new engine.RulesElement({
    name: "Lethal Hammer Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2437",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2437",
    categories: ["Lethal Hammer Training", "ID_FMP_FEAT_2437"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Warhammer");
      model.statadd("Sneak Attack Weapons", "Warhammer");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Throwing hammer");
      model.statadd("Sneak Attack Weapons", "Throwing hammer");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lingering Illusion"] = new engine.RulesElement({
    name: "Lingering Illusion",
    type: "Feat",
    id: "ID_FMP_FEAT_2530",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2530",
    categories: ["Lingering Illusion", "ID_FMP_FEAT_2530"]
  });
  byID[te.id] = te;
  
  te = Feat["Longhand Bravo"] = new engine.RulesElement({
    name: "Longhand Bravo",
    type: "Feat",
    id: "ID_FMP_FEAT_2357",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2357",
    categories: ["Longhand Bravo", "ID_FMP_FEAT_2357", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Longhand Guardian"] = new engine.RulesElement({
    name: "Longhand Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_2358",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2358",
    categories: ["Longhand Guardian", "ID_FMP_FEAT_2358", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Longhand Student"] = new engine.RulesElement({
    name: "Longhand Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2356",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2356",
    categories: ["Longhand Student", "ID_FMP_FEAT_2356", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Longtooth Fury"] = new engine.RulesElement({
    name: "Longtooth Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_2438",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2438",
    categories: ["Longtooth Fury", "ID_FMP_FEAT_2438"]
  });
  byID[te.id] = te;
  
  te = Feat["Manticore's Fury"] = new engine.RulesElement({
    name: "Manticore's Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_2439",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2439",
    categories: ["Manticore's Fury", "ID_FMP_FEAT_2439"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked Fury"] = new engine.RulesElement({
    name: "Marked Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_2440",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2440",
    categories: ["Marked Fury", "ID_FMP_FEAT_2440"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked Takedown"] = new engine.RulesElement({
    name: "Marked Takedown",
    type: "Feat",
    id: "ID_FMP_FEAT_2531",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2531",
    categories: ["Marked Takedown", "ID_FMP_FEAT_2531"]
  });
  byID[te.id] = te;
  
  te = Feat["Martial Accuracy"] = new engine.RulesElement({
    name: "Martial Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_2508",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2508",
    categories: ["Martial Accuracy", "ID_FMP_FEAT_2508"]
  });
  byID[te.id] = te;
  
  te = Feat["Martial Adaptation"] = new engine.RulesElement({
    name: "Martial Adaptation",
    type: "Feat",
    id: "ID_FMP_FEAT_2441",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2441",
    categories: ["Martial Adaptation", "ID_FMP_FEAT_2441"],
    rules: function(model) {
      model.select('Power', 1, "Martial Adaptation", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && true /* NYI: Filter: $$LEVEL */ && element.hasCategory("martial") && element.hasCategory("daily")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Dilettante"] = new engine.RulesElement({
    name: "Martial Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_2442",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2442",
    categories: ["Martial Dilettante", "ID_FMP_FEAT_2442"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Flexibility"] = new engine.RulesElement({
    name: "Martial Flexibility",
    type: "Feat",
    id: "ID_FMP_FEAT_2443",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2443",
    categories: ["Martial Flexibility", "ID_FMP_FEAT_2443"],
    rules: function(model) {
      model.select('Power', 1, "Martial Flexibility", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && true /* NYI: Filter: $$LEVEL */ && element.hasCategory("martial") && element.hasCategory("utility")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Ploy"] = new engine.RulesElement({
    name: "Martial Ploy",
    type: "Feat",
    id: "ID_FMP_FEAT_2444",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2444",
    categories: ["Martial Ploy", "ID_FMP_FEAT_2444"]
  });
  byID[te.id] = te;
  
  te = Feat["Martial Readiness"] = new engine.RulesElement({
    name: "Martial Readiness",
    type: "Feat",
    id: "ID_FMP_FEAT_2445",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2445",
    categories: ["Martial Readiness", "ID_FMP_FEAT_2445"],
    rules: function(model) {
      model.select('Power', 1, "Martial Readiness", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && true /* NYI: Filter: $$LEVEL */ && element.hasCategory("martial") && element.hasCategory("at-will")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Versatility"] = new engine.RulesElement({
    name: "Martial Versatility",
    type: "Feat",
    id: "ID_FMP_FEAT_2446",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2446",
    categories: ["Martial Versatility", "ID_FMP_FEAT_2446"],
    rules: function(model) {
      model.select('Power', 1, "Martial Versatility", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && true /* NYI: Filter: $$LEVEL */ && element.hasCategory("martial") && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mauling Bear"] = new engine.RulesElement({
    name: "Mauling Bear",
    type: "Feat",
    id: "ID_FMP_FEAT_2447",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2447",
    categories: ["Mauling Bear", "ID_FMP_FEAT_2447"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Memory of a Thousand Battles"] = new engine.RulesElement({
    name: "Memory of a Thousand Battles",
    type: "Feat",
    id: "ID_FMP_FEAT_2448",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2448",
    categories: ["Memory of a Thousand Battles", "ID_FMP_FEAT_2448"]
  });
  byID[te.id] = te;
  
  te = Feat["Menacing Thug"] = new engine.RulesElement({
    name: "Menacing Thug",
    type: "Feat",
    id: "ID_FMP_FEAT_2449",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2449",
    categories: ["Menacing Thug", "ID_FMP_FEAT_2449"]
  });
  byID[te.id] = te;
  
  te = Feat["Midnight Blade Brawler"] = new engine.RulesElement({
    name: "Midnight Blade Brawler",
    type: "Feat",
    id: "ID_FMP_FEAT_2360",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2360",
    categories: ["Midnight Blade Brawler", "ID_FMP_FEAT_2360", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2360 association", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Midnight Blade Marauder"] = new engine.RulesElement({
    name: "Midnight Blade Marauder",
    type: "Feat",
    id: "ID_FMP_FEAT_2361",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2361",
    categories: ["Midnight Blade Marauder", "ID_FMP_FEAT_2361", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2361 association:key ability", "dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Midnight Blade Student"] = new engine.RulesElement({
    name: "Midnight Blade Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2359",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2359",
    categories: ["Midnight Blade Student", "ID_FMP_FEAT_2359", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Midnight Blade Whisperer"] = new engine.RulesElement({
    name: "Midnight Blade Whisperer",
    type: "Feat",
    id: "ID_FMP_FEAT_2362",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2362",
    categories: ["Midnight Blade Whisperer", "ID_FMP_FEAT_2362", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Moradin's Forge Champion"] = new engine.RulesElement({
    name: "Moradin's Forge Champion",
    type: "Feat",
    id: "ID_FMP_FEAT_2364",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2364",
    categories: ["Moradin's Forge Champion", "ID_FMP_FEAT_2364", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Moradin's Forge Marshal"] = new engine.RulesElement({
    name: "Moradin's Forge Marshal",
    type: "Feat",
    id: "ID_FMP_FEAT_2365",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2365",
    categories: ["Moradin's Forge Marshal", "ID_FMP_FEAT_2365", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Moradin's Forge Student"] = new engine.RulesElement({
    name: "Moradin's Forge Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2363",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2363",
    categories: ["Moradin's Forge Student", "ID_FMP_FEAT_2363", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Thunder Avalanche"] = new engine.RulesElement({
    name: "Mountain Thunder Avalanche",
    type: "Feat",
    id: "ID_FMP_FEAT_2367",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2367",
    categories: ["Mountain Thunder Avalanche", "ID_FMP_FEAT_2367", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Thunder Conqueror"] = new engine.RulesElement({
    name: "Mountain Thunder Conqueror",
    type: "Feat",
    id: "ID_FMP_FEAT_2368",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2368",
    categories: ["Mountain Thunder Conqueror", "ID_FMP_FEAT_2368", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Thunder Crasher"] = new engine.RulesElement({
    name: "Mountain Thunder Crasher",
    type: "Feat",
    id: "ID_FMP_FEAT_2369",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2369",
    categories: ["Mountain Thunder Crasher", "ID_FMP_FEAT_2369", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Thunder Rampart"] = new engine.RulesElement({
    name: "Mountain Thunder Rampart",
    type: "Feat",
    id: "ID_FMP_FEAT_2370",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2370",
    categories: ["Mountain Thunder Rampart", "ID_FMP_FEAT_2370", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Thunder Student"] = new engine.RulesElement({
    name: "Mountain Thunder Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2366",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2366",
    categories: ["Mountain Thunder Student", "ID_FMP_FEAT_2366", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nerathan High Blade Captain"] = new engine.RulesElement({
    name: "Nerathan High Blade Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2372",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2372",
    categories: ["Nerathan High Blade Captain", "ID_FMP_FEAT_2372", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Nerathan High Blade Duelist"] = new engine.RulesElement({
    name: "Nerathan High Blade Duelist",
    type: "Feat",
    id: "ID_FMP_FEAT_2373",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2373",
    categories: ["Nerathan High Blade Duelist", "ID_FMP_FEAT_2373", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2373 association:key ability", "dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nerathan High Blade Soldier"] = new engine.RulesElement({
    name: "Nerathan High Blade Soldier",
    type: "Feat",
    id: "ID_FMP_FEAT_2374",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2374",
    categories: ["Nerathan High Blade Soldier", "ID_FMP_FEAT_2374", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Nerathan High Blade Student"] = new engine.RulesElement({
    name: "Nerathan High Blade Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2371",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2371",
    categories: ["Nerathan High Blade Student", "ID_FMP_FEAT_2371", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_2371 association:damage", function() { /* for each enemy adjacent to you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Dodge"] = new engine.RulesElement({
    name: "Nimble Dodge",
    type: "Feat",
    id: "ID_FMP_FEAT_2450",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2450",
    categories: ["Nimble Dodge", "ID_FMP_FEAT_2450"]
  });
  byID[te.id] = te;
  
  te = Feat["Ninth Legion Commander"] = new engine.RulesElement({
    name: "Ninth Legion Commander",
    type: "Feat",
    id: "ID_FMP_FEAT_2710",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2710",
    categories: ["Ninth Legion Commander", "ID_FMP_FEAT_2710", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ninth Legion Shield"] = new engine.RulesElement({
    name: "Ninth Legion Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_1318",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1318",
    categories: ["Ninth Legion Shield", "ID_FMP_FEAT_1318", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ninth Legion Student"] = new engine.RulesElement({
    name: "Ninth Legion Student",
    type: "Feat",
    id: "ID_FMP_FEAT_1317",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1317",
    categories: ["Ninth Legion Student", "ID_FMP_FEAT_1317", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ogremight Bruiser"] = new engine.RulesElement({
    name: "Ogremight Bruiser",
    type: "Feat",
    id: "ID_FMP_FEAT_2376",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2376",
    categories: ["Ogremight Bruiser", "ID_FMP_FEAT_2376", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ogremight Ravager"] = new engine.RulesElement({
    name: "Ogremight Ravager",
    type: "Feat",
    id: "ID_FMP_FEAT_2377",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2377",
    categories: ["Ogremight Ravager", "ID_FMP_FEAT_2377", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Ogremight Student"] = new engine.RulesElement({
    name: "Ogremight Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2375",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2375",
    categories: ["Ogremight Student", "ID_FMP_FEAT_2375", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Opportunity Knocks"] = new engine.RulesElement({
    name: "Opportunity Knocks",
    type: "Feat",
    id: "ID_FMP_FEAT_2451",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2451",
    categories: ["Opportunity Knocks", "ID_FMP_FEAT_2451"]
  });
  byID[te.id] = te;
  
  te = Feat["Overrun Critical"] = new engine.RulesElement({
    name: "Overrun Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_2452",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2452",
    categories: ["Overrun Critical", "ID_FMP_FEAT_2452"]
  });
  byID[te.id] = te;
  
  te = Feat["Overwhelming Impact"] = new engine.RulesElement({
    name: "Overwhelming Impact",
    type: "Feat",
    id: "ID_FMP_FEAT_2532",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2532",
    categories: ["Overwhelming Impact", "ID_FMP_FEAT_2532"]
  });
  byID[te.id] = te;
  
  te = Feat["Partisan Polearm Captain"] = new engine.RulesElement({
    name: "Partisan Polearm Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2711",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2711",
    categories: ["Partisan Polearm Captain", "ID_FMP_FEAT_2711", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Partisan Polearm Infantry"] = new engine.RulesElement({
    name: "Partisan Polearm Infantry",
    type: "Feat",
    id: "ID_FMP_FEAT_1320",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1320",
    categories: ["Partisan Polearm Infantry", "ID_FMP_FEAT_1320", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Partisan Polearm Student"] = new engine.RulesElement({
    name: "Partisan Polearm Student",
    type: "Feat",
    id: "ID_FMP_FEAT_1319",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1319",
    categories: ["Partisan Polearm Student", "ID_FMP_FEAT_1319", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Perceptive Leadership"] = new engine.RulesElement({
    name: "Perceptive Leadership",
    type: "Feat",
    id: "ID_FMP_FEAT_2533",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2533",
    categories: ["Perceptive Leadership", "ID_FMP_FEAT_2533"]
  });
  byID[te.id] = te;
  
  te = Feat["Piercing Pick"] = new engine.RulesElement({
    name: "Piercing Pick",
    type: "Feat",
    id: "ID_FMP_FEAT_2509",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2509",
    categories: ["Piercing Pick", "ID_FMP_FEAT_2509"]
  });
  byID[te.id] = te;
  
  te = Feat["Poisonous Beast"] = new engine.RulesElement({
    name: "Poisonous Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_2510",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2510",
    categories: ["Poisonous Beast", "ID_FMP_FEAT_2510"]
  });
  byID[te.id] = te;
  
  te = Feat["Pouncing Cat"] = new engine.RulesElement({
    name: "Pouncing Cat",
    type: "Feat",
    id: "ID_FMP_FEAT_2453",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2453",
    categories: ["Pouncing Cat", "ID_FMP_FEAT_2453"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Practiced Prodigy"] = new engine.RulesElement({
    name: "Practiced Prodigy",
    type: "Feat",
    id: "ID_FMP_FEAT_2454",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2454",
    categories: ["Practiced Prodigy", "ID_FMP_FEAT_2454"],
    rules: function(model) {
      model.statadd("Free Rituals", "The Practiced Prodigy feat grants you two free martial practices of your level or lower (three at 5th level, four at 11th level, five at 15th level, six at 21st level, and seven at 25th level).");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Practiced Study"] = new engine.RulesElement({
    name: "Practiced Study",
    type: "Feat",
    id: "ID_FMP_FEAT_2050",
    source: "Martial Power 2,Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2050",
    categories: ["Practiced Study", "ID_FMP_FEAT_2050"]
  });
  byID[te.id] = te;
  
  te = Feat["Precision Throw"] = new engine.RulesElement({
    name: "Precision Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_2455",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2455",
    categories: ["Precision Throw", "ID_FMP_FEAT_2455"],
    rules: function(model) {
      model.statadd("ranged basic,thrown:key ability", "dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Punishing Axe"] = new engine.RulesElement({
    name: "Punishing Axe",
    type: "Feat",
    id: "ID_FMP_FEAT_2511",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2511",
    categories: ["Punishing Axe", "ID_FMP_FEAT_2511"]
  });
  byID[te.id] = te;
  
  te = Feat["Rampaging Beast"] = new engine.RulesElement({
    name: "Rampaging Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_2512",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2512",
    categories: ["Rampaging Beast", "ID_FMP_FEAT_2512"]
  });
  byID[te.id] = te;
  
  te = Feat["Rapid Practice"] = new engine.RulesElement({
    name: "Rapid Practice",
    type: "Feat",
    id: "ID_FMP_FEAT_2513",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2513",
    categories: ["Rapid Practice", "ID_FMP_FEAT_2513"]
  });
  byID[te.id] = te;
  
  te = Feat["Razorclaw Mark"] = new engine.RulesElement({
    name: "Razorclaw Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2456",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2456",
    categories: ["Razorclaw Mark", "ID_FMP_FEAT_2456"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaving Axe Brute"] = new engine.RulesElement({
    name: "Reaving Axe Brute",
    type: "Feat",
    id: "ID_FMP_FEAT_1322",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1322",
    categories: ["Reaving Axe Brute", "ID_FMP_FEAT_1322", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaving Axe Slayer"] = new engine.RulesElement({
    name: "Reaving Axe Slayer",
    type: "Feat",
    id: "ID_FMP_FEAT_2712",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2712",
    categories: ["Reaving Axe Slayer", "ID_FMP_FEAT_2712", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2712 association:key ability", "str");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaving Axe Student"] = new engine.RulesElement({
    name: "Reaving Axe Student",
    type: "Feat",
    id: "ID_FMP_FEAT_1321",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1321",
    categories: ["Reaving Axe Student", "ID_FMP_FEAT_1321", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaving Axe Tyrant"] = new engine.RulesElement({
    name: "Reaving Axe Tyrant",
    type: "Feat",
    id: "ID_FMP_FEAT_2713",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2713",
    categories: ["Reaving Axe Tyrant", "ID_FMP_FEAT_2713", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Red Cloak Rake"] = new engine.RulesElement({
    name: "Red Cloak Rake",
    type: "Feat",
    id: "ID_FMP_FEAT_2380",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2380",
    categories: ["Red Cloak Rake", "ID_FMP_FEAT_2380", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Red Cloak Student"] = new engine.RulesElement({
    name: "Red Cloak Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2379",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2379",
    categories: ["Red Cloak Student", "ID_FMP_FEAT_2379", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Red Cloak Tough"] = new engine.RulesElement({
    name: "Red Cloak Tough",
    type: "Feat",
    id: "ID_FMP_FEAT_2381",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2381",
    categories: ["Red Cloak Tough", "ID_FMP_FEAT_2381"]
  });
  byID[te.id] = te;
  
  te = Feat["Redoubled Efforts"] = new engine.RulesElement({
    name: "Redoubled Efforts",
    type: "Feat",
    id: "ID_FMP_FEAT_2457",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2457",
    categories: ["Redoubled Efforts", "ID_FMP_FEAT_2457"]
  });
  byID[te.id] = te;
  
  te = Feat["Reliable Action"] = new engine.RulesElement({
    name: "Reliable Action",
    type: "Feat",
    id: "ID_FMP_FEAT_2534",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2534",
    categories: ["Reliable Action", "ID_FMP_FEAT_2534"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Reliable Action:When an ally you can see spends an action point to use an encounter attack power that misses every target, that power is not expended");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reliable Persistence"] = new engine.RulesElement({
    name: "Reliable Persistence",
    type: "Feat",
    id: "ID_FMP_FEAT_2514",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2514",
    categories: ["Reliable Persistence", "ID_FMP_FEAT_2514"]
  });
  byID[te.id] = te;
  
  te = Feat["Rending Chains Flayer"] = new engine.RulesElement({
    name: "Rending Chains Flayer",
    type: "Feat",
    id: "ID_FMP_FEAT_2384",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2384",
    categories: ["Rending Chains Flayer", "ID_FMP_FEAT_2384", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_2384 association:key ability", "dex");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rending Chains Grappler"] = new engine.RulesElement({
    name: "Rending Chains Grappler",
    type: "Feat",
    id: "ID_FMP_FEAT_2383",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2383",
    categories: ["Rending Chains Grappler", "ID_FMP_FEAT_2383", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Rending Chains Student"] = new engine.RulesElement({
    name: "Rending Chains Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2382",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2382",
    categories: ["Rending Chains Student", "ID_FMP_FEAT_2382", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rending Chains Warmaster"] = new engine.RulesElement({
    name: "Rending Chains Warmaster",
    type: "Feat",
    id: "ID_FMP_FEAT_2385",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2385",
    categories: ["Rending Chains Warmaster", "ID_FMP_FEAT_2385", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Resilience of Stone"] = new engine.RulesElement({
    name: "Resilience of Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_2458",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2458",
    categories: ["Resilience of Stone", "ID_FMP_FEAT_2458"]
  });
  byID[te.id] = te;
  
  te = Feat["Resilient Beast"] = new engine.RulesElement({
    name: "Resilient Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_2535",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2535",
    categories: ["Resilient Beast", "ID_FMP_FEAT_2535"],
    rules: function(model) {
      model.statadd("BEAST.AC", 2, "Feat");
      model.statadd("BEAST.Fortitude Defense", 2, "Feat");
      model.statadd("BEAST.Will Defense", 2, "Feat");
      model.statadd("BEAST.Reflex Defense", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resourceful Leader"] = new engine.RulesElement({
    name: "Resourceful Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2547",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2547",
    categories: ["Resourceful Leader", "ID_FMP_FEAT_2547", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Resourceful Leader", {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("ALLY.Action Point", "Resourceful Leader:You gain training in one skill from the warlord's class skills list. When an ally you can see spends an action point to make an attack, the ally gains a +3 bonus to damage rolls on a hit or gains 3 temporary hit points on a miss. This bonus increases to +5 at 11th level and +7 at 21st level. These temporary hit points increase to 5 at 11th level and 7 at 21st level.");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Retreat Technique"] = new engine.RulesElement({
    name: "Retreat Technique",
    type: "Feat",
    id: "ID_FMP_FEAT_2515",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2515",
    categories: ["Retreat Technique", "ID_FMP_FEAT_2515"]
  });
  byID[te.id] = te;
  
  te = Feat["Risky Shift"] = new engine.RulesElement({
    name: "Risky Shift",
    type: "Feat",
    id: "ID_FMP_FEAT_2459",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2459",
    categories: ["Risky Shift", "ID_FMP_FEAT_2459"]
  });
  byID[te.id] = te;
  
  te = Feat["Rumbling Earthshock"] = new engine.RulesElement({
    name: "Rumbling Earthshock",
    type: "Feat",
    id: "ID_FMP_FEAT_2460",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2460",
    categories: ["Rumbling Earthshock", "ID_FMP_FEAT_2460"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1767:damage", function() { return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Savage Wolf"] = new engine.RulesElement({
    name: "Savage Wolf",
    type: "Feat",
    id: "ID_FMP_FEAT_2461",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2461",
    categories: ["Savage Wolf", "ID_FMP_FEAT_2461"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Second Shot"] = new engine.RulesElement({
    name: "Second Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2462",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2462",
    categories: ["Second Shot", "ID_FMP_FEAT_2462"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Eyes"] = new engine.RulesElement({
    name: "Shadow Eyes",
    type: "Feat",
    id: "ID_FMP_FEAT_2536",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2536",
    categories: ["Shadow Eyes", "ID_FMP_FEAT_2536"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Memories"] = new engine.RulesElement({
    name: "Shared Memories",
    type: "Feat",
    id: "ID_FMP_FEAT_2463",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2463",
    categories: ["Shared Memories", "ID_FMP_FEAT_2463"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Resources"] = new engine.RulesElement({
    name: "Shared Resources",
    type: "Feat",
    id: "ID_FMP_FEAT_2537",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2537",
    categories: ["Shared Resources", "ID_FMP_FEAT_2537"]
  });
  byID[te.id] = te;
  
  te = Feat["Shift the Field"] = new engine.RulesElement({
    name: "Shift the Field",
    type: "Feat",
    id: "ID_FMP_FEAT_2538",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2538",
    categories: ["Shift the Field", "ID_FMP_FEAT_2538"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shifting Companion"] = new engine.RulesElement({
    name: "Shifting Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_2464",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2464",
    categories: ["Shifting Companion", "ID_FMP_FEAT_2464"]
  });
  byID[te.id] = te;
  
  te = Feat["Silent Shot Hunter"] = new engine.RulesElement({
    name: "Silent Shot Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2387",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2387",
    categories: ["Silent Shot Hunter", "ID_FMP_FEAT_2387", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Silent Shot Phantom"] = new engine.RulesElement({
    name: "Silent Shot Phantom",
    type: "Feat",
    id: "ID_FMP_FEAT_2388",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2388",
    categories: ["Silent Shot Phantom", "ID_FMP_FEAT_2388", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Silent Shot Student"] = new engine.RulesElement({
    name: "Silent Shot Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2386",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2386",
    categories: ["Silent Shot Student", "ID_FMP_FEAT_2386", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_2386 association:damage", function() { /* against a creature you are hidden from */ return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skirmishing Leader"] = new engine.RulesElement({
    name: "Skirmishing Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2548",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2548",
    categories: ["Skirmishing Leader", "ID_FMP_FEAT_2548", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Skirmishing Leader", {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("ALLY.Action Point", "Skirmishing Leader:When an ally you can see spends an action point to take an extra action, that ally can shift 1 square as a free action before or after the extra action");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slashing Storm"] = new engine.RulesElement({
    name: "Slashing Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_2539",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2539",
    categories: ["Slashing Storm", "ID_FMP_FEAT_2539"]
  });
  byID[te.id] = te;
  
  te = Feat["Snapping Lizard"] = new engine.RulesElement({
    name: "Snapping Lizard",
    type: "Feat",
    id: "ID_FMP_FEAT_2465",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2465",
    categories: ["Snapping Lizard", "ID_FMP_FEAT_2465"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sneaky Gnome"] = new engine.RulesElement({
    name: "Sneaky Gnome",
    type: "Feat",
    id: "ID_FMP_FEAT_2516",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2516",
    categories: ["Sneaky Gnome", "ID_FMP_FEAT_2516"]
  });
  byID[te.id] = te;
  
  te = Feat["Sneaky Opportunity"] = new engine.RulesElement({
    name: "Sneaky Opportunity",
    type: "Feat",
    id: "ID_FMP_FEAT_2517",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2517",
    categories: ["Sneaky Opportunity", "ID_FMP_FEAT_2517"],
    rules: function(model) {
      model.statadd("light blade group:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Speed of Sea and Sky"] = new engine.RulesElement({
    name: "Speed of Sea and Sky",
    type: "Feat",
    id: "ID_FMP_FEAT_2466",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2466",
    categories: ["Speed of Sea and Sky", "ID_FMP_FEAT_2466"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Breaker"] = new engine.RulesElement({
    name: "Spirit Breaker",
    type: "Feat",
    id: "ID_FMP_FEAT_2540",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2540",
    categories: ["Spirit Breaker", "ID_FMP_FEAT_2540"]
  });
  byID[te.id] = te;
  
  te = Feat["Staggering Strike"] = new engine.RulesElement({
    name: "Staggering Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2467",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2467",
    categories: ["Staggering Strike", "ID_FMP_FEAT_2467"]
  });
  byID[te.id] = te;
  
  te = Feat["Startling Distraction"] = new engine.RulesElement({
    name: "Startling Distraction",
    type: "Feat",
    id: "ID_FMP_FEAT_2468",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2468",
    categories: ["Startling Distraction", "ID_FMP_FEAT_2468"]
  });
  byID[te.id] = te;
  
  te = Feat["Steel Vanguard Captain"] = new engine.RulesElement({
    name: "Steel Vanguard Captain",
    type: "Feat",
    id: "ID_FMP_FEAT_2716",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2716",
    categories: ["Steel Vanguard Captain", "ID_FMP_FEAT_2716", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Steel Vanguard Soldier"] = new engine.RulesElement({
    name: "Steel Vanguard Soldier",
    type: "Feat",
    id: "ID_FMP_FEAT_2715",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2715",
    categories: ["Steel Vanguard Soldier", "ID_FMP_FEAT_2715", "ID_INTERNAL_CATEGORY_GREATER_STYLE", "Greater Style"]
  });
  byID[te.id] = te;
  
  te = Feat["Steel Vanguard Student"] = new engine.RulesElement({
    name: "Steel Vanguard Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2714",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2714",
    categories: ["Steel Vanguard Student", "ID_FMP_FEAT_2714", "ID_INTERNAL_CATEGORY_LESSER_STYLE", "Lesser Style"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Striking Resurgence"] = new engine.RulesElement({
    name: "Striking Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_2518",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2518",
    categories: ["Striking Resurgence", "ID_FMP_FEAT_2518"]
  });
  byID[te.id] = te;
  
  te = Feat["Swift Footwork"] = new engine.RulesElement({
    name: "Swift Footwork",
    type: "Feat",
    id: "ID_FMP_FEAT_2469",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2469",
    categories: ["Swift Footwork", "ID_FMP_FEAT_2469"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Superiority"] = new engine.RulesElement({
    name: "Tactical Superiority",
    type: "Feat",
    id: "ID_FMP_FEAT_2519",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2519",
    categories: ["Tactical Superiority", "ID_FMP_FEAT_2519"]
  });
  byID[te.id] = te;
  
  te = Feat["Telepathic Mark"] = new engine.RulesElement({
    name: "Telepathic Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2470",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2470",
    categories: ["Telepathic Mark", "ID_FMP_FEAT_2470"]
  });
  byID[te.id] = te;
  
  te = Feat["Treetop Sniper"] = new engine.RulesElement({
    name: "Treetop Sniper",
    type: "Feat",
    id: "ID_FMP_FEAT_2471",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2471",
    categories: ["Treetop Sniper", "ID_FMP_FEAT_2471"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Crossbow", "Bow group");
      model.statadd("Sneak Attack Weapons", "Bow group");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Trickster's Mark"] = new engine.RulesElement({
    name: "Trickster's Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_2472",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2472",
    categories: ["Trickster's Mark", "ID_FMP_FEAT_2472"]
  });
  byID[te.id] = te;
  
  te = Feat["Twilight Adept"] = new engine.RulesElement({
    name: "Twilight Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_2549",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2549",
    categories: ["Twilight Adept", "ID_FMP_FEAT_2549", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE", "Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ROGUE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Twilight Training"] = new engine.RulesElement({
    name: "Twilight Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2473",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2473",
    categories: ["Twilight Training", "ID_FMP_FEAT_2473"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unerring Ambush"] = new engine.RulesElement({
    name: "Unerring Ambush",
    type: "Feat",
    id: "ID_FMP_FEAT_2520",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2520",
    categories: ["Unerring Ambush", "ID_FMP_FEAT_2520"]
  });
  byID[te.id] = te;
  
  te = Feat["Venomous Spider"] = new engine.RulesElement({
    name: "Venomous Spider",
    type: "Feat",
    id: "ID_FMP_FEAT_2474",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2474",
    categories: ["Venomous Spider", "ID_FMP_FEAT_2474"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Rogue"] = new engine.RulesElement({
    name: "Versatile Rogue",
    type: "Feat",
    id: "ID_FMP_FEAT_2541",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2541",
    categories: ["Versatile Rogue", "ID_FMP_FEAT_2541"],
    rules: function(model) {
      model.select('class feature', 1, "Versatile Rogue", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_547"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Talent"] = new engine.RulesElement({
    name: "Versatile Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_2475",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2475",
    categories: ["Versatile Talent", "ID_FMP_FEAT_2475"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1062"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1063"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Superiority"] = new engine.RulesElement({
    name: "Warforged Superiority",
    type: "Feat",
    id: "ID_FMP_FEAT_2476",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2476",
    categories: ["Warforged Superiority", "ID_FMP_FEAT_2476"]
  });
  byID[te.id] = te;
  
  te = Feat["Warpath Leader"] = new engine.RulesElement({
    name: "Warpath Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_2477",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2477",
    categories: ["Warpath Leader", "ID_FMP_FEAT_2477"]
  });
  byID[te.id] = te;
  
  te = Feat["Wicked Blade"] = new engine.RulesElement({
    name: "Wicked Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_2521",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2521",
    categories: ["Wicked Blade", "ID_FMP_FEAT_2521"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Warrior"] = new engine.RulesElement({
    name: "Wrathful Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2550",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2550",
    categories: ["Wrathful Warrior", "ID_FMP_FEAT_2550", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Wrathful Warrior", {
        filter: function(model, element) { return element.hasCategory("Fighter Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrenching Grasp"] = new engine.RulesElement({
    name: "Wrenching Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_2478",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2478",
    categories: ["Wrenching Grasp", "ID_FMP_FEAT_2478"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
