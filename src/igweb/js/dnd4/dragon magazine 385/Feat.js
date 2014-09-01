define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Adept Dilettante"] = new engine.RulesElement({
    name: "Adept Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_2871",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2871",
    categories: ["Adept Dilettante", "ID_FMP_FEAT_2871", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      // NYI: [Dilettante]
      model.statadd("dilettante:key ability", "Con,Wis,Cha");
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Alchemical Affinity"] = new engine.RulesElement({
    name: "Alchemical Affinity",
    type: "Feat",
    id: "ID_FMP_FEAT_2864",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2864",
    categories: ["Alchemical Affinity", "ID_FMP_FEAT_2864"]
  });
  byID[te.id] = te;
  
  te = Feat["Alchemical Blood"] = new engine.RulesElement({
    name: "Alchemical Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_2865",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2865",
    categories: ["Alchemical Blood", "ID_FMP_FEAT_2865"],
    rules: function(model) {
      model.select('class feature', 1, "Alchemical Blood", {
        filter: function(model, element) { return element.hasCategory("Alchemical Blood"); }
      });
      model.statadd("Alchemical Blood", 1);
      model.statadd("Alchemical Blood", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ancestral Battle Accuracy"] = new engine.RulesElement({
    name: "Ancestral Battle Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_2798",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2798",
    categories: ["Ancestral Battle Accuracy", "ID_FMP_FEAT_2798"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Malice"] = new engine.RulesElement({
    name: "Arcane Malice",
    type: "Feat",
    id: "ID_FMP_FEAT_2838",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2838",
    categories: ["Arcane Malice", "ID_FMP_FEAT_2838"]
  });
  byID[te.id] = te;
  
  te = Feat["Ardent Tsucora Initiation"] = new engine.RulesElement({
    name: "Ardent Tsucora Initiation",
    type: "Feat",
    id: "ID_FMP_FEAT_2786",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2786",
    categories: ["Ardent Tsucora Initiation", "ID_FMP_FEAT_2786"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Assassin's Challenge"] = new engine.RulesElement({
    name: "Assassin's Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2812",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2812",
    categories: ["Assassin's Challenge", "ID_FMP_FEAT_2812"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battlemind Duulora Initiation"] = new engine.RulesElement({
    name: "Battlemind Duulora Initiation",
    type: "Feat",
    id: "ID_FMP_FEAT_2787",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2787",
    categories: ["Battlemind Duulora Initiation", "ID_FMP_FEAT_2787"]
  });
  byID[te.id] = te;
  
  te = Feat["Beginner's Luck"] = new engine.RulesElement({
    name: "Beginner's Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_2804",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2804",
    categories: ["Beginner's Luck", "ID_FMP_FEAT_2804"]
  });
  byID[te.id] = te;
  
  te = Feat["Betrayal of Zerthimon"] = new engine.RulesElement({
    name: "Betrayal of Zerthimon",
    type: "Feat",
    id: "ID_FMP_FEAT_2813",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2813",
    categories: ["Betrayal of Zerthimon", "ID_FMP_FEAT_2813"]
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Touch"] = new engine.RulesElement({
    name: "Bolstering Touch",
    type: "Feat",
    id: "ID_FMP_FEAT_2872",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2872",
    categories: ["Bolstering Touch", "ID_FMP_FEAT_2872"]
  });
  byID[te.id] = te;
  
  te = Feat["Coincidental Success"] = new engine.RulesElement({
    name: "Coincidental Success",
    type: "Feat",
    id: "ID_FMP_FEAT_2809",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2809",
    categories: ["Coincidental Success", "ID_FMP_FEAT_2809"]
  });
  byID[te.id] = te;
  
  te = Feat["Corrupting Attacks"] = new engine.RulesElement({
    name: "Corrupting Attacks",
    type: "Feat",
    id: "ID_FMP_FEAT_2839",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2839",
    categories: ["Corrupting Attacks", "ID_FMP_FEAT_2839"]
  });
  byID[te.id] = te;
  
  te = Feat["Cursed Shadow"] = new engine.RulesElement({
    name: "Cursed Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2814",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2814",
    categories: ["Cursed Shadow", "ID_FMP_FEAT_2814"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_604"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkened Soul"] = new engine.RulesElement({
    name: "Darkened Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_2834",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2834",
    categories: ["Darkened Soul", "ID_FMP_FEAT_2834", "ID_INTERNAL_CATEGORY_MULTICLASS_ASSASSIN", "Multiclass Assassin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9402"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkness's Wings"] = new engine.RulesElement({
    name: "Darkness's Wings",
    type: "Feat",
    id: "ID_FMP_FEAT_2815",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2815",
    categories: ["Darkness's Wings", "ID_FMP_FEAT_2815"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Defending Dabbler"] = new engine.RulesElement({
    name: "Defending Dabbler",
    type: "Feat",
    id: "ID_FMP_FEAT_2873",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2873",
    categories: ["Defending Dabbler", "ID_FMP_FEAT_2873"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Wrath"] = new engine.RulesElement({
    name: "Defensive Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2874",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2874",
    categories: ["Defensive Wrath", "ID_FMP_FEAT_2874"]
  });
  byID[te.id] = te;
  
  te = Feat["Disciplined Killer"] = new engine.RulesElement({
    name: "Disciplined Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_2816",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2816",
    categories: ["Disciplined Killer", "ID_FMP_FEAT_2816"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* for each of your assassin's shrouds on the target */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Distracting Coincidences"] = new engine.RulesElement({
    name: "Distracting Coincidences",
    type: "Feat",
    id: "ID_FMP_FEAT_2805",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2805",
    categories: ["Distracting Coincidences", "ID_FMP_FEAT_2805"]
  });
  byID[te.id] = te;
  
  te = Feat["Dual Mind Reserves"] = new engine.RulesElement({
    name: "Dual Mind Reserves",
    type: "Feat",
    id: "ID_FMP_FEAT_2790",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2790",
    categories: ["Dual Mind Reserves", "ID_FMP_FEAT_2790"]
  });
  byID[te.id] = te;
  
  te = Feat["Dual Mind Strength"] = new engine.RulesElement({
    name: "Dual Mind Strength",
    type: "Feat",
    id: "ID_FMP_FEAT_2788",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2788",
    categories: ["Dual Mind Strength", "ID_FMP_FEAT_2788"],
    rules: function(model) {
      model.statadd("Dual Mind Strength", 2);
      model.statadd("psychic:damage", function() { return model.stat("Dual Mind Strength"); }, "Feat");
      model.statadd("Dual Mind Strength", 1);
      model.statadd("Dual Mind Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dungeon Experience"] = new engine.RulesElement({
    name: "Dungeon Experience",
    type: "Feat",
    id: "ID_FMP_FEAT_2835",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2835",
    categories: ["Dungeon Experience", "ID_FMP_FEAT_2835"]
  });
  byID[te.id] = te;
  
  te = Feat["Earth Mote's Stability"] = new engine.RulesElement({
    name: "Earth Mote's Stability",
    type: "Feat",
    id: "ID_FMP_FEAT_2840",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2840",
    categories: ["Earth Mote's Stability", "ID_FMP_FEAT_2840"],
    rules: function(model) {
      model.statadd("Earth Mote's Stability", 4);
      model.statadd("Saving Throws", function() { /* to avoid falling */ return model.stat("Earth Mote's Stability"); }, "Feat");
      model.statadd("Earth Mote's Stability", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Effortless Dilettante"] = new engine.RulesElement({
    name: "Effortless Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_2875",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2875",
    categories: ["Effortless Dilettante", "ID_FMP_FEAT_2875"]
  });
  byID[te.id] = te;
  
  te = Feat["Eilserv's Treachery"] = new engine.RulesElement({
    name: "Eilserv's Treachery",
    type: "Feat",
    id: "ID_FMP_FEAT_2817",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2817",
    categories: ["Eilserv's Treachery", "ID_FMP_FEAT_2817"]
  });
  byID[te.id] = te;
  
  te = Feat["Elven Resilience"] = new engine.RulesElement({
    name: "Elven Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_2799",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2799",
    categories: ["Elven Resilience", "ID_FMP_FEAT_2799"]
  });
  byID[te.id] = te;
  
  te = Feat["Encouraging Shield"] = new engine.RulesElement({
    name: "Encouraging Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2860",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2860",
    categories: ["Encouraging Shield", "ID_FMP_FEAT_2860"],
    rules: function(model) {
      model.statadd("Will Defense", function() { return model.stat("Shield Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eye of Death and Despair"] = new engine.RulesElement({
    name: "Eye of Death and Despair",
    type: "Feat",
    id: "ID_FMP_FEAT_2818",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2818",
    categories: ["Eye of Death and Despair", "ID_FMP_FEAT_2818"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Far Shadow"] = new engine.RulesElement({
    name: "Far Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2819",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2819",
    categories: ["Far Shadow", "ID_FMP_FEAT_2819"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ferocious Frenzy"] = new engine.RulesElement({
    name: "Ferocious Frenzy",
    type: "Feat",
    id: "ID_FMP_FEAT_2781",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2781",
    categories: ["Ferocious Frenzy", "ID_FMP_FEAT_2781"]
  });
  byID[te.id] = te;
  
  te = Feat["Flamespeed Shifting"] = new engine.RulesElement({
    name: "Flamespeed Shifting",
    type: "Feat",
    id: "ID_FMP_FEAT_2841",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2841",
    categories: ["Flamespeed Shifting", "ID_FMP_FEAT_2841"]
  });
  byID[te.id] = te;
  
  te = Feat["Flickering Fortunes"] = new engine.RulesElement({
    name: "Flickering Fortunes",
    type: "Feat",
    id: "ID_FMP_FEAT_2820",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2820",
    categories: ["Flickering Fortunes", "ID_FMP_FEAT_2820"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fortifying Word"] = new engine.RulesElement({
    name: "Fortifying Word",
    type: "Feat",
    id: "ID_FMP_FEAT_2866",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2866",
    categories: ["Fortifying Word", "ID_FMP_FEAT_2866"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fortunate Resistance"] = new engine.RulesElement({
    name: "Fortunate Resistance",
    type: "Feat",
    id: "ID_FMP_FEAT_2806",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2806",
    categories: ["Fortunate Resistance", "ID_FMP_FEAT_2806"]
  });
  byID[te.id] = te;
  
  te = Feat["Gambler's Initiative"] = new engine.RulesElement({
    name: "Gambler's Initiative",
    type: "Feat",
    id: "ID_FMP_FEAT_2807",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2807",
    categories: ["Gambler's Initiative", "ID_FMP_FEAT_2807"]
  });
  byID[te.id] = te;
  
  te = Feat["Ghostly Voyage"] = new engine.RulesElement({
    name: "Ghostly Voyage",
    type: "Feat",
    id: "ID_FMP_FEAT_2821",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2821",
    categories: ["Ghostly Voyage", "ID_FMP_FEAT_2821"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Group Vigor"] = new engine.RulesElement({
    name: "Group Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_2876",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2876",
    categories: ["Group Vigor", "ID_FMP_FEAT_2876"]
  });
  byID[te.id] = te;
  
  te = Feat["Hindering Shield"] = new engine.RulesElement({
    name: "Hindering Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2862",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2862",
    categories: ["Hindering Shield", "ID_FMP_FEAT_2862"]
  });
  byID[te.id] = te;
  
  te = Feat["Holy Dilettante"] = new engine.RulesElement({
    name: "Holy Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_2877",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2877",
    categories: ["Holy Dilettante", "ID_FMP_FEAT_2877"]
  });
  byID[te.id] = te;
  
  te = Feat["Honor's Path"] = new engine.RulesElement({
    name: "Honor's Path",
    type: "Feat",
    id: "ID_FMP_FEAT_2782",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2782",
    categories: ["Honor's Path", "ID_FMP_FEAT_2782"]
  });
  byID[te.id] = te;
  
  te = Feat["Horned Nightmare"] = new engine.RulesElement({
    name: "Horned Nightmare",
    type: "Feat",
    id: "ID_FMP_FEAT_2822",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2822",
    categories: ["Horned Nightmare", "ID_FMP_FEAT_2822"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Shadow"] = new engine.RulesElement({
    name: "Hunting Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2823",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2823",
    categories: ["Hunting Shadow", "ID_FMP_FEAT_2823"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Insidious Shroud"] = new engine.RulesElement({
    name: "Insidious Shroud",
    type: "Feat",
    id: "ID_FMP_FEAT_2824",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2824",
    categories: ["Insidious Shroud", "ID_FMP_FEAT_2824"]
  });
  byID[te.id] = te;
  
  te = Feat["Light-Footed Warrior"] = new engine.RulesElement({
    name: "Light-Footed Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2791",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2791",
    categories: ["Light-Footed Warrior", "ID_FMP_FEAT_2791"]
  });
  byID[te.id] = te;
  
  te = Feat["Lingering Fade"] = new engine.RulesElement({
    name: "Lingering Fade",
    type: "Feat",
    id: "ID_FMP_FEAT_2842",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2842",
    categories: ["Lingering Fade", "ID_FMP_FEAT_2842"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lucky Shot"] = new engine.RulesElement({
    name: "Lucky Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_2808",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2808",
    categories: ["Lucky Shot", "ID_FMP_FEAT_2808"]
  });
  byID[te.id] = te;
  
  te = Feat["Master Communicator"] = new engine.RulesElement({
    name: "Master Communicator",
    type: "Feat",
    id: "ID_FMP_FEAT_2878",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2878",
    categories: ["Master Communicator", "ID_FMP_FEAT_2878"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_RITUAL_39", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Memories of Destruction"] = new engine.RulesElement({
    name: "Memories of Destruction",
    type: "Feat",
    id: "ID_FMP_FEAT_2843",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2843",
    categories: ["Memories of Destruction", "ID_FMP_FEAT_2843"]
  });
  byID[te.id] = te;
  
  te = Feat["Menacing Sorcery"] = new engine.RulesElement({
    name: "Menacing Sorcery",
    type: "Feat",
    id: "ID_FMP_FEAT_2837",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2837",
    categories: ["Menacing Sorcery", "ID_FMP_FEAT_2837"]
  });
  byID[te.id] = te;
  
  te = Feat["Merciless Nature"] = new engine.RulesElement({
    name: "Merciless Nature",
    type: "Feat",
    id: "ID_FMP_FEAT_2827",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2827",
    categories: ["Merciless Nature", "ID_FMP_FEAT_2827"]
  });
  byID[te.id] = te;
  
  te = Feat["Minotaur Weapon Talent"] = new engine.RulesElement({
    name: "Minotaur Weapon Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_2783",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2783",
    categories: ["Minotaur Weapon Talent", "ID_FMP_FEAT_2783"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Murderous Hunter"] = new engine.RulesElement({
    name: "Murderous Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2828",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2828",
    categories: ["Murderous Hunter", "ID_FMP_FEAT_2828"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportune Chaos Burst"] = new engine.RulesElement({
    name: "Opportune Chaos Burst",
    type: "Feat",
    id: "ID_FMP_FEAT_2810",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2810",
    categories: ["Opportune Chaos Burst", "ID_FMP_FEAT_2810"]
  });
  byID[te.id] = te;
  
  te = Feat["Path of the Scarred"] = new engine.RulesElement({
    name: "Path of the Scarred",
    type: "Feat",
    id: "ID_FMP_FEAT_2844",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2844",
    categories: ["Path of the Scarred", "ID_FMP_FEAT_2844"],
    rules: function(model) {
      model.statadd("Path of the Scarred", 1);
      model.statadd("encounter:damage", function() { return model.stat("Path of the Scarred"); });
      model.statadd("daily:damage", function() { return model.stat("Path of the Scarred"); });
      model.statadd("Path of the Scarred", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pernicious Onslaught"] = new engine.RulesElement({
    name: "Pernicious Onslaught",
    type: "Feat",
    id: "ID_FMP_FEAT_2845",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2845",
    categories: ["Pernicious Onslaught", "ID_FMP_FEAT_2845"]
  });
  byID[te.id] = te;
  
  te = Feat["Plague of Chance"] = new engine.RulesElement({
    name: "Plague of Chance",
    type: "Feat",
    id: "ID_FMP_FEAT_2846",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2846",
    categories: ["Plague of Chance", "ID_FMP_FEAT_2846"]
  });
  byID[te.id] = te;
  
  te = Feat["Plagued Breath"] = new engine.RulesElement({
    name: "Plagued Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_2847",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2847",
    categories: ["Plagued Breath", "ID_FMP_FEAT_2847"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_POWER_1448:damage", function() { /* while you are bloodied */ return 2; });
      model.statadd("ID_FMP_POWER_1448:damage", "+ongoing 5");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Plagued Regeneration"] = new engine.RulesElement({
    name: "Plagued Regeneration",
    type: "Feat",
    id: "ID_FMP_FEAT_2848",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2848",
    categories: ["Plagued Regeneration", "ID_FMP_FEAT_2848"]
  });
  byID[te.id] = te;
  
  te = Feat["Plagueforged Accuracy"] = new engine.RulesElement({
    name: "Plagueforged Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_2849",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2849",
    categories: ["Plagueforged Accuracy", "ID_FMP_FEAT_2849"]
  });
  byID[te.id] = te;
  
  te = Feat["Plaguing Bloodhunt"] = new engine.RulesElement({
    name: "Plaguing Bloodhunt",
    type: "Feat",
    id: "ID_FMP_FEAT_2850",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2850",
    categories: ["Plaguing Bloodhunt", "ID_FMP_FEAT_2850"],
    rules: function(model) {
      model.statadd("Plaguing Bloodhunt", 3);
      model.statadd("Damage", function() { /* against a bloodied enemy */ return model.stat("Plaguing Bloodhunt"); });
      model.statadd("Plaguing Bloodhunt", 3);
      model.statadd("Plaguing Bloodhunt", 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Planar Blurring"] = new engine.RulesElement({
    name: "Planar Blurring",
    type: "Feat",
    id: "ID_FMP_FEAT_2851",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2851",
    categories: ["Planar Blurring", "ID_FMP_FEAT_2851"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Poison Plague Feast"] = new engine.RulesElement({
    name: "Poison Plague Feast",
    type: "Feat",
    id: "ID_FMP_FEAT_2852",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2852",
    categories: ["Poison Plague Feast", "ID_FMP_FEAT_2852"]
  });
  byID[te.id] = te;
  
  te = Feat["Psion Hashalaq Initiation"] = new engine.RulesElement({
    name: "Psion Hashalaq Initiation",
    type: "Feat",
    id: "ID_FMP_FEAT_2789",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2789",
    categories: ["Psion Hashalaq Initiation", "ID_FMP_FEAT_2789"]
  });
  byID[te.id] = te;
  
  te = Feat["Pupil of the All-Father"] = new engine.RulesElement({
    name: "Pupil of the All-Father",
    type: "Feat",
    id: "ID_FMP_FEAT_2867",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2867",
    categories: ["Pupil of the All-Father", "ID_FMP_FEAT_2867"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_RITUAL_9", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_51", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ravenous Blessing"] = new engine.RulesElement({
    name: "Ravenous Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_2853",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2853",
    categories: ["Ravenous Blessing", "ID_FMP_FEAT_2853"]
  });
  byID[te.id] = te;
  
  te = Feat["Revitalizing Dabbler"] = new engine.RulesElement({
    name: "Revitalizing Dabbler",
    type: "Feat",
    id: "ID_FMP_FEAT_2879",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2879",
    categories: ["Revitalizing Dabbler", "ID_FMP_FEAT_2879"]
  });
  byID[te.id] = te;
  
  te = Feat["Roar of the Ancestors"] = new engine.RulesElement({
    name: "Roar of the Ancestors",
    type: "Feat",
    id: "ID_FMP_FEAT_2792",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2792",
    categories: ["Roar of the Ancestors", "ID_FMP_FEAT_2792"]
  });
  byID[te.id] = te;
  
  te = Feat["Roguish Killer"] = new engine.RulesElement({
    name: "Roguish Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_2829",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2829",
    categories: ["Roguish Killer", "ID_FMP_FEAT_2829"]
  });
  byID[te.id] = te;
  
  te = Feat["Scar and Fury"] = new engine.RulesElement({
    name: "Scar and Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_2854",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2854",
    categories: ["Scar and Fury", "ID_FMP_FEAT_2854"]
  });
  byID[te.id] = te;
  
  te = Feat["Scar of the Shadowweave"] = new engine.RulesElement({
    name: "Scar of the Shadowweave",
    type: "Feat",
    id: "ID_FMP_FEAT_2855",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2855",
    categories: ["Scar of the Shadowweave", "ID_FMP_FEAT_2855"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadowforged Killer"] = new engine.RulesElement({
    name: "Shadowforged Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_2830",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2830",
    categories: ["Shadowforged Killer", "ID_FMP_FEAT_2830"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Vitality"] = new engine.RulesElement({
    name: "Shared Vitality",
    type: "Feat",
    id: "ID_FMP_FEAT_2868",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2868",
    categories: ["Shared Vitality", "ID_FMP_FEAT_2868"]
  });
  byID[te.id] = te;
  
  te = Feat["Spellcharged Channel"] = new engine.RulesElement({
    name: "Spellcharged Channel",
    type: "Feat",
    id: "ID_FMP_FEAT_2856",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2856",
    categories: ["Spellcharged Channel", "ID_FMP_FEAT_2856"]
  });
  byID[te.id] = te;
  
  te = Feat["Spellscarred Invigoration"] = new engine.RulesElement({
    name: "Spellscarred Invigoration",
    type: "Feat",
    id: "ID_FMP_FEAT_2881",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2881",
    categories: ["Spellscarred Invigoration", "ID_FMP_FEAT_2881"]
  });
  byID[te.id] = te;
  
  te = Feat["Spellscarred Subterfuge"] = new engine.RulesElement({
    name: "Spellscarred Subterfuge",
    type: "Feat",
    id: "ID_FMP_FEAT_2882",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2882",
    categories: ["Spellscarred Subterfuge", "ID_FMP_FEAT_2882"],
    rules: function(model) {
      model.statadd("Spellscarred Subterfuge", 2);
      model.statadd("Diplomacy Misc", function() { return model.stat("Spellscarred Subterfuge"); }, "Feat");
      model.statadd("Bluff Misc", function() { return model.stat("Spellscarred Subterfuge"); }, "Feat");
      model.statadd("Spellscarred Subterfuge", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirited Shadows"] = new engine.RulesElement({
    name: "Spirited Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_2831",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2831",
    categories: ["Spirited Shadows", "ID_FMP_FEAT_2831"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stone Cunning"] = new engine.RulesElement({
    name: "Stone Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_2869",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2869",
    categories: ["Stone Cunning", "ID_FMP_FEAT_2869"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swift Rider"] = new engine.RulesElement({
    name: "Swift Rider",
    type: "Feat",
    id: "ID_FMP_FEAT_2800",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2800",
    categories: ["Swift Rider", "ID_FMP_FEAT_2800"],
    rules: function(model) {
      model.statadd("Speed", 1, "Feat");
      model.statadd("MOUNT.Speed", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Symbol of the Sonnlinor"] = new engine.RulesElement({
    name: "Symbol of the Sonnlinor",
    type: "Feat",
    id: "ID_FMP_FEAT_2870",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2870",
    categories: ["Symbol of the Sonnlinor", "ID_FMP_FEAT_2870"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HAMMER"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_AXE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_PICK"]);
      model.statadd("implement hammer group:divine", 1);
      model.statadd("implement axe group:divine", 1);
      model.statadd("implement pick group:divine", 1);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAMMER_GROUP)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(AXE_GROUP)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PICK_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tainted Darkness"] = new engine.RulesElement({
    name: "Tainted Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_2857",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2857",
    categories: ["Tainted Darkness", "ID_FMP_FEAT_2857"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1831:damage", function() { /* each time another attack hits the enemy before the end of your next turn */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tenacity for Living"] = new engine.RulesElement({
    name: "Tenacity for Living",
    type: "Feat",
    id: "ID_FMP_FEAT_2858",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2858",
    categories: ["Tenacity for Living", "ID_FMP_FEAT_2858"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing fire damage and ongoing necrotic damage */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Traveler's Insight"] = new engine.RulesElement({
    name: "Traveler's Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_2836",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2836",
    categories: ["Traveler's Insight", "ID_FMP_FEAT_2836"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { return model.stat("Language Count"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ubiquitous Shield"] = new engine.RulesElement({
    name: "Ubiquitous Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2863",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2863",
    categories: ["Ubiquitous Shield", "ID_FMP_FEAT_2863"]
  });
  byID[te.id] = te;
  
  te = Feat["Unbalancing Shield Shove"] = new engine.RulesElement({
    name: "Unbalancing Shield Shove",
    type: "Feat",
    id: "ID_FMP_FEAT_2861",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2861",
    categories: ["Unbalancing Shield Shove", "ID_FMP_FEAT_2861"]
  });
  byID[te.id] = te;
  
  te = Feat["Uncovered Hatred"] = new engine.RulesElement({
    name: "Uncovered Hatred",
    type: "Feat",
    id: "ID_FMP_FEAT_2832",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2832",
    categories: ["Uncovered Hatred", "ID_FMP_FEAT_2832"]
  });
  byID[te.id] = te;
  
  te = Feat["Unexpected Flourish"] = new engine.RulesElement({
    name: "Unexpected Flourish",
    type: "Feat",
    id: "ID_FMP_FEAT_2859",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2859",
    categories: ["Unexpected Flourish", "ID_FMP_FEAT_2859"],
    rules: function(model) {
      model.select('Power', 1, "Unexpected Flourish", {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane") && element.hasCategory("1")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unlucky Teleport"] = new engine.RulesElement({
    name: "Unlucky Teleport",
    type: "Feat",
    id: "ID_FMP_FEAT_2811",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2811",
    categories: ["Unlucky Teleport", "ID_FMP_FEAT_2811"],
    rules: function(model) {
      model.statadd("teleportation,ID_FMP_CLASS_128:damage", "+1d10");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Dervish Stalwart"] = new engine.RulesElement({
    name: "Valenar Dervish Stalwart",
    type: "Feat",
    id: "ID_FMP_FEAT_2802",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2802",
    categories: ["Valenar Dervish Stalwart", "ID_FMP_FEAT_2802"]
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Dervish Student"] = new engine.RulesElement({
    name: "Valenar Dervish Student",
    type: "Feat",
    id: "ID_FMP_FEAT_2801",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2801",
    categories: ["Valenar Dervish Student", "ID_FMP_FEAT_2801"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Dervish Whirlwind"] = new engine.RulesElement({
    name: "Valenar Dervish Whirlwind",
    type: "Feat",
    id: "ID_FMP_FEAT_2803",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2803",
    categories: ["Valenar Dervish Whirlwind", "ID_FMP_FEAT_2803"]
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Rider Training"] = new engine.RulesElement({
    name: "Valenar Rider Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2793",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2793",
    categories: ["Valenar Rider Training", "ID_FMP_FEAT_2793"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_SPEAR"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_SPEAR"]);
      model.statadd("Shortbow:damage", function() { /* while you are riding a mount */ return 2; }, "Feat");
      model.statadd("spear group:damage", function() { /* while you are riding a mount */ return 2; }, "Feat");
      model.statadd("Valenar Rider Training", 1);
      model.statadd("Valenar Rider Training", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Weapon Training"] = new engine.RulesElement({
    name: "Valenar Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2794",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2794",
    categories: ["Valenar Weapon Training", "ID_FMP_FEAT_2794"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.statadd("Valenar Weapon Training", 2);
      model.statadd("Scimitar:damage", function() { return model.stat("Valenar Weapon Training"); }, "Feat");
      model.statadd("Double Scimitar:damage", function() { return model.stat("Valenar Weapon Training"); }, "Feat");
      model.statadd("Falchion:damage", function() { return model.stat("Valenar Weapon Training"); }, "Feat");
      model.statadd("Valenar Weapon Training", 1);
      model.statadd("Valenar Weapon Training", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Valenar Weapon Warding"] = new engine.RulesElement({
    name: "Valenar Weapon Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_2795",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2795",
    categories: ["Valenar Weapon Warding", "ID_FMP_FEAT_2795"],
    rules: function(model) {
      model.statadd("Swordmage Warding", function() { 
        if (model.wearing('Weapon', ['double scimitar'])) {
          return 1;
        } else return 0;
       }, "Valenar Weapon Warding");
      model.statadd("Swordmage Warding", function() { 
        if (model.wearing('Weapon', ['falchion'])) {
          return 1;
        } else return 0;
       }, "Valenar Weapon Warding");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vigilant Recovery"] = new engine.RulesElement({
    name: "Vigilant Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2784",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2784",
    categories: ["Vigilant Recovery", "ID_FMP_FEAT_2784"]
  });
  byID[te.id] = te;
  
  te = Feat["Wild Dilettante"] = new engine.RulesElement({
    name: "Wild Dilettante",
    type: "Feat",
    id: "ID_FMP_FEAT_2880",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2880",
    categories: ["Wild Dilettante", "ID_FMP_FEAT_2880"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Grasp"] = new engine.RulesElement({
    name: "Wild Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_2796",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2796",
    categories: ["Wild Grasp", "ID_FMP_FEAT_2796"]
  });
  byID[te.id] = te;
  
  te = Feat["Word of Shadow"] = new engine.RulesElement({
    name: "Word of Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2833",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2833",
    categories: ["Word of Shadow", "ID_FMP_FEAT_2833"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Word of the Ancestors"] = new engine.RulesElement({
    name: "Word of the Ancestors",
    type: "Feat",
    id: "ID_FMP_FEAT_2797",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2797",
    categories: ["Word of the Ancestors", "ID_FMP_FEAT_2797"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1590:healing", function() { return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
