define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Accursed Challenge"] = new engine.RulesElement({
    name: "Accursed Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2749",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2749",
    categories: ["Accursed Challenge", "ID_FMP_FEAT_2749"]
  });
  byID[te.id] = te;
  
  te = Feat["Armored Warrenguard"] = new engine.RulesElement({
    name: "Armored Warrenguard",
    type: "Feat",
    id: "ID_FMP_FEAT_2733",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2733",
    categories: ["Armored Warrenguard", "ID_FMP_FEAT_2733"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['Scale'])) {
          return 0;
        } else return 0;
       }, "Armor");
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 0;
        } else return 0;
       }, "Armor");
      model.statadd("AC", function() { /* against attacks from Large or larger enemies */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avandra's Boon"] = new engine.RulesElement({
    name: "Avandra's Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_2750",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2750",
    categories: ["Avandra's Boon", "ID_FMP_FEAT_2750"]
  });
  byID[te.id] = te;
  
  te = Feat["Avandra's Covenant"] = new engine.RulesElement({
    name: "Avandra's Covenant",
    type: "Feat",
    id: "ID_FMP_FEAT_2751",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2751",
    categories: ["Avandra's Covenant", "ID_FMP_FEAT_2751"]
  });
  byID[te.id] = te;
  
  te = Feat["Beast Rider"] = new engine.RulesElement({
    name: "Beast Rider",
    type: "Feat",
    id: "ID_FMP_FEAT_2726",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2726",
    categories: ["Beast Rider", "ID_FMP_FEAT_2726"]
  });
  byID[te.id] = te;
  
  te = Feat["Bestial Mobility"] = new engine.RulesElement({
    name: "Bestial Mobility",
    type: "Feat",
    id: "ID_FMP_FEAT_2725",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2725",
    categories: ["Bestial Mobility", "ID_FMP_FEAT_2725"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Boon"] = new engine.RulesElement({
    name: "Bloodied Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_2759",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2759",
    categories: ["Bloodied Boon", "ID_FMP_FEAT_2759"]
  });
  byID[te.id] = te;
  
  te = Feat["Bountiful Fortune"] = new engine.RulesElement({
    name: "Bountiful Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2752",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2752",
    categories: ["Bountiful Fortune", "ID_FMP_FEAT_2752"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Curse"] = new engine.RulesElement({
    name: "Brutal Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2760",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2760",
    categories: ["Brutal Curse", "ID_FMP_FEAT_2760"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Reach"] = new engine.RulesElement({
    name: "Brutal Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_2705",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2705",
    categories: ["Brutal Reach", "ID_FMP_FEAT_2705"]
  });
  byID[te.id] = te;
  
  te = Feat["Chilling Presence"] = new engine.RulesElement({
    name: "Chilling Presence",
    type: "Feat",
    id: "ID_FMP_FEAT_2699",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2699",
    categories: ["Chilling Presence", "ID_FMP_FEAT_2699"]
  });
  byID[te.id] = te;
  
  te = Feat["Confounding Luck"] = new engine.RulesElement({
    name: "Confounding Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_2753",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2753",
    categories: ["Confounding Luck", "ID_FMP_FEAT_2753"]
  });
  byID[te.id] = te;
  
  te = Feat["Contagious Curse"] = new engine.RulesElement({
    name: "Contagious Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2777",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2777",
    categories: ["Contagious Curse", "ID_FMP_FEAT_2777"]
  });
  byID[te.id] = te;
  
  te = Feat["Critical Curse"] = new engine.RulesElement({
    name: "Critical Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2776",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2776",
    categories: ["Critical Curse", "ID_FMP_FEAT_2776"]
  });
  byID[te.id] = te;
  
  te = Feat["Curse of Displacement"] = new engine.RulesElement({
    name: "Curse of Displacement",
    type: "Feat",
    id: "ID_FMP_FEAT_2761",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2761",
    categories: ["Curse of Displacement", "ID_FMP_FEAT_2761"]
  });
  byID[te.id] = te;
  
  te = Feat["Curse of the Blind Stars"] = new engine.RulesElement({
    name: "Curse of the Blind Stars",
    type: "Feat",
    id: "ID_FMP_FEAT_2768",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2768",
    categories: ["Curse of the Blind Stars", "ID_FMP_FEAT_2768"]
  });
  byID[te.id] = te;
  
  te = Feat["Cursed Shot"] = new engine.RulesElement({
    name: "Cursed Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2762",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2762",
    categories: ["Cursed Shot", "ID_FMP_FEAT_2762"]
  });
  byID[te.id] = te;
  
  te = Feat["Cursed Spells"] = new engine.RulesElement({
    name: "Cursed Spells",
    type: "Feat",
    id: "ID_FMP_FEAT_2778",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2778",
    categories: ["Cursed Spells", "ID_FMP_FEAT_2778"],
    rules: function(model) {
      model.statadd("Warlock's Curse", function() { return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Distracting Challenge"] = new engine.RulesElement({
    name: "Distracting Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2734",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2734",
    categories: ["Distracting Challenge", "ID_FMP_FEAT_2734"]
  });
  byID[te.id] = te;
  
  te = Feat["Enshrouding Touch"] = new engine.RulesElement({
    name: "Enshrouding Touch",
    type: "Feat",
    id: "ID_FMP_FEAT_2735",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2735",
    categories: ["Enshrouding Touch", "ID_FMP_FEAT_2735"]
  });
  byID[te.id] = te;
  
  te = Feat["Exultant Shadow Step"] = new engine.RulesElement({
    name: "Exultant Shadow Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2763",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2763",
    categories: ["Exultant Shadow Step", "ID_FMP_FEAT_2763"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Revel Glamor"] = new engine.RulesElement({
    name: "Fey Revel Glamor",
    type: "Feat",
    id: "ID_FMP_FEAT_2770",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2770",
    categories: ["Fey Revel Glamor", "ID_FMP_FEAT_2770"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Senses"] = new engine.RulesElement({
    name: "Fey Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_2727",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2727",
    categories: ["Fey Senses", "ID_FMP_FEAT_2727"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fey-Minded"] = new engine.RulesElement({
    name: "Fey-Minded",
    type: "Feat",
    id: "ID_FMP_FEAT_2728",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2728",
    categories: ["Fey-Minded", "ID_FMP_FEAT_2728"],
    rules: function(model) {
      model.select('Language', 1, "Fey-Minded", {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_LANGUAGE_4") || element.hasCategory("ID_FMP_LANGUAGE_19")) || element.hasCategory("ID_FMP_LANGUAGE_20")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Forest Walk"] = new engine.RulesElement({
    name: "Forest Walk",
    type: "Feat",
    id: "ID_FMP_FEAT_2719",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2719",
    categories: ["Forest Walk", "ID_FMP_FEAT_2719"]
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Alacrity"] = new engine.RulesElement({
    name: "Godsworn Alacrity",
    type: "Feat",
    id: "ID_FMP_FEAT_2739",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2739",
    categories: ["Godsworn Alacrity", "ID_FMP_FEAT_2739"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Assault"] = new engine.RulesElement({
    name: "Godsworn Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_2738",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2738",
    categories: ["Godsworn Assault", "ID_FMP_FEAT_2738"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Avalanche"] = new engine.RulesElement({
    name: "Godsworn Avalanche",
    type: "Feat",
    id: "ID_FMP_FEAT_2740",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2740",
    categories: ["Godsworn Avalanche", "ID_FMP_FEAT_2740"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Bulwark"] = new engine.RulesElement({
    name: "Godsworn Bulwark",
    type: "Feat",
    id: "ID_FMP_FEAT_2741",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2741",
    categories: ["Godsworn Bulwark", "ID_FMP_FEAT_2741"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Defender"] = new engine.RulesElement({
    name: "Godsworn Defender",
    type: "Feat",
    id: "ID_FMP_FEAT_2742",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2742",
    categories: ["Godsworn Defender", "ID_FMP_FEAT_2742"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Fatalist"] = new engine.RulesElement({
    name: "Godsworn Fatalist",
    type: "Feat",
    id: "ID_FMP_FEAT_2743",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2743",
    categories: ["Godsworn Fatalist", "ID_FMP_FEAT_2743"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Mentalist"] = new engine.RulesElement({
    name: "Godsworn Mentalist",
    type: "Feat",
    id: "ID_FMP_FEAT_2745",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2745",
    categories: ["Godsworn Mentalist", "ID_FMP_FEAT_2745"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Mystic"] = new engine.RulesElement({
    name: "Godsworn Mystic",
    type: "Feat",
    id: "ID_FMP_FEAT_2744",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2744",
    categories: ["Godsworn Mystic", "ID_FMP_FEAT_2744"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Radiant"] = new engine.RulesElement({
    name: "Godsworn Radiant",
    type: "Feat",
    id: "ID_FMP_FEAT_2746",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2746",
    categories: ["Godsworn Radiant", "ID_FMP_FEAT_2746"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Sidestep"] = new engine.RulesElement({
    name: "Godsworn Sidestep",
    type: "Feat",
    id: "ID_FMP_FEAT_2747",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2747",
    categories: ["Godsworn Sidestep", "ID_FMP_FEAT_2747"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Godsworn Tidedancer"] = new engine.RulesElement({
    name: "Godsworn Tidedancer",
    type: "Feat",
    id: "ID_FMP_FEAT_2748",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2748",
    categories: ["Godsworn Tidedancer", "ID_FMP_FEAT_2748"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Guileful Shift"] = new engine.RulesElement({
    name: "Guileful Shift",
    type: "Feat",
    id: "ID_FMP_FEAT_2754",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2754",
    categories: ["Guileful Shift", "ID_FMP_FEAT_2754"]
  });
  byID[te.id] = te;
  
  te = Feat["Halfling's Strength"] = new engine.RulesElement({
    name: "Halfling's Strength",
    type: "Feat",
    id: "ID_FMP_FEAT_2756",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2756",
    categories: ["Halfling's Strength", "ID_FMP_FEAT_2756"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Hex"] = new engine.RulesElement({
    name: "Hellfire Hex",
    type: "Feat",
    id: "ID_FMP_FEAT_2772",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2772",
    categories: ["Hellfire Hex", "ID_FMP_FEAT_2772"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_7,daily:damage", "ongoing 5 fire (or increase existing ongoing fire by 5)");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hell's Chosen"] = new engine.RulesElement({
    name: "Hell's Chosen",
    type: "Feat",
    id: "ID_FMP_FEAT_2771",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2771",
    categories: ["Hell's Chosen", "ID_FMP_FEAT_2771"]
  });
  byID[te.id] = te;
  
  te = Feat["Ice Walk"] = new engine.RulesElement({
    name: "Ice Walk",
    type: "Feat",
    id: "ID_FMP_FEAT_2700",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2700",
    categories: ["Ice Walk", "ID_FMP_FEAT_2700"]
  });
  byID[te.id] = te;
  
  te = Feat["Inevitable Doom"] = new engine.RulesElement({
    name: "Inevitable Doom",
    type: "Feat",
    id: "ID_FMP_FEAT_2779",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2779",
    categories: ["Inevitable Doom", "ID_FMP_FEAT_2779"]
  });
  byID[te.id] = te;
  
  te = Feat["Killing Curse"] = new engine.RulesElement({
    name: "Killing Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2764",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2764",
    categories: ["Killing Curse", "ID_FMP_FEAT_2764"],
    rules: function(model) {
      model.statadd("Warlock's Curse Die", "d8");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lucky Retribution"] = new engine.RulesElement({
    name: "Lucky Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_2757",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2757",
    categories: ["Lucky Retribution", "ID_FMP_FEAT_2757"]
  });
  byID[te.id] = te;
  
  te = Feat["Mind-Numbing Curse"] = new engine.RulesElement({
    name: "Mind-Numbing Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2780",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2780",
    categories: ["Mind-Numbing Curse", "ID_FMP_FEAT_2780"]
  });
  byID[te.id] = te;
  
  te = Feat["Primed Curse"] = new engine.RulesElement({
    name: "Primed Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2765",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2765",
    categories: ["Primed Curse", "ID_FMP_FEAT_2765"],
    rules: function(model) {
      model.statadd("Prime Shot Bonus", function() { /* if the target is cursed by you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prolonged Curse"] = new engine.RulesElement({
    name: "Prolonged Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2766",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2766",
    categories: ["Prolonged Curse", "ID_FMP_FEAT_2766"]
  });
  byID[te.id] = te;
  
  te = Feat["Protective Hex"] = new engine.RulesElement({
    name: "Protective Hex",
    type: "Feat",
    id: "ID_FMP_FEAT_2773",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2773",
    categories: ["Protective Hex", "ID_FMP_FEAT_2773"]
  });
  byID[te.id] = te;
  
  te = Feat["Raging Reach"] = new engine.RulesElement({
    name: "Raging Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_2706",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2706",
    categories: ["Raging Reach", "ID_FMP_FEAT_2706"],
    rules: function(model) {
      model.statadd("two-hands,reach,ID_FMP_POWER_4807:damage", function() { /* against targets that are 2 squares away from you */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Rampage"] = new engine.RulesElement({
    name: "Ruthless Rampage",
    type: "Feat",
    id: "ID_FMP_FEAT_2707",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2707",
    categories: ["Ruthless Rampage", "ID_FMP_FEAT_2707"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow of the Wild"] = new engine.RulesElement({
    name: "Shadow of the Wild",
    type: "Feat",
    id: "ID_FMP_FEAT_2717",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2717",
    categories: ["Shadow of the Wild", "ID_FMP_FEAT_2717"]
  });
  byID[te.id] = te;
  
  te = Feat["Sibling to the Stars"] = new engine.RulesElement({
    name: "Sibling to the Stars",
    type: "Feat",
    id: "ID_FMP_FEAT_2774",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2774",
    categories: ["Sibling to the Stars", "ID_FMP_FEAT_2774"]
  });
  byID[te.id] = te;
  
  te = Feat["Swirling Snow"] = new engine.RulesElement({
    name: "Swirling Snow",
    type: "Feat",
    id: "ID_FMP_FEAT_2701",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2701",
    categories: ["Swirling Snow", "ID_FMP_FEAT_2701"]
  });
  byID[te.id] = te;
  
  te = Feat["Veil of Waking Dreams"] = new engine.RulesElement({
    name: "Veil of Waking Dreams",
    type: "Feat",
    id: "ID_FMP_FEAT_2775",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2775",
    categories: ["Veil of Waking Dreams", "ID_FMP_FEAT_2775"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeance's Reward"] = new engine.RulesElement({
    name: "Vengeance's Reward",
    type: "Feat",
    id: "ID_FMP_FEAT_2758",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2758",
    categories: ["Vengeance's Reward", "ID_FMP_FEAT_2758"]
  });
  byID[te.id] = te;
  
  te = Feat["Warlock's Sight"] = new engine.RulesElement({
    name: "Warlock's Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_2767",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2767",
    categories: ["Warlock's Sight", "ID_FMP_FEAT_2767"]
  });
  byID[te.id] = te;
  
  te = Feat["Wilderness Wariness"] = new engine.RulesElement({
    name: "Wilderness Wariness",
    type: "Feat",
    id: "ID_FMP_FEAT_2718",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2718",
    categories: ["Wilderness Wariness", "ID_FMP_FEAT_2718"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Winterkin Heritage"] = new engine.RulesElement({
    name: "Winterkin Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2702",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2702",
    categories: ["Winterkin Heritage", "ID_FMP_FEAT_2702", "ID_INTERNAL_INTERNAL_ELADRIN_BLOODLINE", "Eladrin Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11559"]);
      model.statadd("Winterkin Heritage", 5);
      model.statadd("Winterkin Heritage", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:cold", function() { return model.stat("Winterkin Heritage"); }, "resist");
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ELADRIN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Winter's Heart"] = new engine.RulesElement({
    name: "Winter's Heart",
    type: "Feat",
    id: "ID_FMP_FEAT_2704",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2704",
    categories: ["Winter's Heart", "ID_FMP_FEAT_2704"]
  });
  byID[te.id] = te;
  
  te = Feat["Winter's Reach"] = new engine.RulesElement({
    name: "Winter's Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_2703",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2703",
    categories: ["Winter's Reach", "ID_FMP_FEAT_2703"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
