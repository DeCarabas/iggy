define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["All-Seeing Eye of the Guardian"] = new engine.RulesElement({
    name: "All-Seeing Eye of the Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_2122",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2122",
    categories: ["All-Seeing Eye of the Guardian", "ID_FMP_FEAT_2122"]
  });
  byID[te.id] = te;
  
  te = Feat["Amoth's Grace"] = new engine.RulesElement({
    name: "Amoth's Grace",
    type: "Feat",
    id: "ID_FMP_FEAT_2140",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2140",
    categories: ["Amoth's Grace", "ID_FMP_FEAT_2140"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10264"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beseech Patron"] = new engine.RulesElement({
    name: "Beseech Patron",
    type: "Feat",
    id: "ID_FMP_FEAT_2086",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2086",
    categories: ["Beseech Patron", "ID_FMP_FEAT_2086"],
    rules: function(model) {
      model.statadd("Action Point", "Beseech Patron:When you spend an action point to take an extra action and use an arcane power, you gain the benefit of your pact boon as if an enemy under your Warlock's Curse had dropped to 0 hit points or fewer.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blade and Buckler Duelist"] = new engine.RulesElement({
    name: "Blade and Buckler Duelist",
    type: "Feat",
    id: "ID_FMP_FEAT_2073",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2073",
    categories: ["Blade and Buckler Duelist", "ID_FMP_FEAT_2073"],
    rules: function(model) {
      model.statadd("Light Shield Defense Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bleak Guide's Return"] = new engine.RulesElement({
    name: "Bleak Guide's Return",
    type: "Feat",
    id: "ID_FMP_FEAT_2087",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2087",
    categories: ["Bleak Guide's Return", "ID_FMP_FEAT_2087"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Balance"] = new engine.RulesElement({
    name: "Bloody Balance",
    type: "Feat",
    id: "ID_FMP_FEAT_2116",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2116",
    categories: ["Bloody Balance", "ID_FMP_FEAT_2116"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while you are adjacent to a bloodied ally */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bold Gamble"] = new engine.RulesElement({
    name: "Bold Gamble",
    type: "Feat",
    id: "ID_FMP_FEAT_2051",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2051",
    categories: ["Bold Gamble", "ID_FMP_FEAT_2051"],
    rules: function(model) {
      model.statadd("Action Point", "Bold Gamble:Whenever you spend an action point to make an extra attack, you can choose to use this feat. If the attack hits, the enemy grants combat advantage until the end of your next turn. If the attack misses, you grant combat advantage to the enemy until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Buckler Duelist"] = new engine.RulesElement({
    name: "Buckler Duelist",
    type: "Feat",
    id: "ID_FMP_FEAT_2074",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2074",
    categories: ["Buckler Duelist", "ID_FMP_FEAT_2074"]
  });
  byID[te.id] = te;
  
  te = Feat["Chosen Defender"] = new engine.RulesElement({
    name: "Chosen Defender",
    type: "Feat",
    id: "ID_FMP_FEAT_2118",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2118",
    categories: ["Chosen Defender", "ID_FMP_FEAT_2118"]
  });
  byID[te.id] = te;
  
  te = Feat["Cooperative Chance"] = new engine.RulesElement({
    name: "Cooperative Chance",
    type: "Feat",
    id: "ID_FMP_FEAT_2091",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2091",
    categories: ["Cooperative Chance", "ID_FMP_FEAT_2091"]
  });
  byID[te.id] = te;
  
  te = Feat["Courageous Word"] = new engine.RulesElement({
    name: "Courageous Word",
    type: "Feat",
    id: "ID_FMP_FEAT_2052",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2052",
    categories: ["Courageous Word", "ID_FMP_FEAT_2052"]
  });
  byID[te.id] = te;
  
  te = Feat["Covered Retreat"] = new engine.RulesElement({
    name: "Covered Retreat",
    type: "Feat",
    id: "ID_FMP_FEAT_2053",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2053",
    categories: ["Covered Retreat", "ID_FMP_FEAT_2053"]
  });
  byID[te.id] = te;
  
  te = Feat["Crimson Fire"] = new engine.RulesElement({
    name: "Crimson Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_2126",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2126",
    categories: ["Crimson Fire", "ID_FMP_FEAT_2126"]
  });
  byID[te.id] = te;
  
  te = Feat["Crimson Legionnaire"] = new engine.RulesElement({
    name: "Crimson Legionnaire",
    type: "Feat",
    id: "ID_FMP_FEAT_2125",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2125",
    categories: ["Crimson Legionnaire", "ID_FMP_FEAT_2125"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_4:damage", function() { /* against creatures under your Warlock's Curse */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Crossbow Caster"] = new engine.RulesElement({
    name: "Crossbow Caster",
    type: "Feat",
    id: "ID_FMP_FEAT_2109",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2109",
    categories: ["Crossbow Caster", "ID_FMP_FEAT_2109"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cruel Whimsy"] = new engine.RulesElement({
    name: "Cruel Whimsy",
    type: "Feat",
    id: "ID_FMP_FEAT_2079",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2079",
    categories: ["Cruel Whimsy", "ID_FMP_FEAT_2079"]
  });
  byID[te.id] = te;
  
  te = Feat["Defense of the Inspired"] = new engine.RulesElement({
    name: "Defense of the Inspired",
    type: "Feat",
    id: "ID_FMP_FEAT_2066",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2066",
    categories: ["Defense of the Inspired", "ID_FMP_FEAT_2066"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Bluff"] = new engine.RulesElement({
    name: "Defensive Bluff",
    type: "Feat",
    id: "ID_FMP_FEAT_2092",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2092",
    categories: ["Defensive Bluff", "ID_FMP_FEAT_2092"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Enchanting"] = new engine.RulesElement({
    name: "Defensive Enchanting",
    type: "Feat",
    id: "ID_FMP_FEAT_2115",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2115",
    categories: ["Defensive Enchanting", "ID_FMP_FEAT_2115"]
  });
  byID[te.id] = te;
  
  te = Feat["Diabolic Soul"] = new engine.RulesElement({
    name: "Diabolic Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_2129",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2129",
    categories: ["Diabolic Soul", "ID_FMP_FEAT_2129"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Diminishing Spirit Curse"] = new engine.RulesElement({
    name: "Diminishing Spirit Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_2080",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2080",
    categories: ["Diminishing Spirit Curse", "ID_FMP_FEAT_2080"]
  });
  byID[te.id] = te;
  
  te = Feat["Duelist's Panache"] = new engine.RulesElement({
    name: "Duelist's Panache",
    type: "Feat",
    id: "ID_FMP_FEAT_2075",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2075",
    categories: ["Duelist's Panache", "ID_FMP_FEAT_2075"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { return model.stat("Charisma modifier"); }, "Feat");
      model.statadd("Athletics Misc", function() { return model.stat("Charisma modifier"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dungeon Enchanter"] = new engine.RulesElement({
    name: "Dungeon Enchanter",
    type: "Feat",
    id: "ID_FMP_FEAT_2112",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2112",
    categories: ["Dungeon Enchanter", "ID_FMP_FEAT_2112"]
  });
  byID[te.id] = te;
  
  te = Feat["Emboldening Presence"] = new engine.RulesElement({
    name: "Emboldening Presence",
    type: "Feat",
    id: "ID_FMP_FEAT_2054",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2054",
    categories: ["Emboldening Presence", "ID_FMP_FEAT_2054"]
  });
  byID[te.id] = te;
  
  te = Feat["Eochaid's Lure"] = new engine.RulesElement({
    name: "Eochaid's Lure",
    type: "Feat",
    id: "ID_FMP_FEAT_2088",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2088",
    categories: ["Eochaid's Lure", "ID_FMP_FEAT_2088"]
  });
  byID[te.id] = te;
  
  te = Feat["Eye of Judgment"] = new engine.RulesElement({
    name: "Eye of Judgment",
    type: "Feat",
    id: "ID_FMP_FEAT_2119",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2119",
    categories: ["Eye of Judgment", "ID_FMP_FEAT_2119"]
  });
  byID[te.id] = te;
  
  te = Feat["Fated Survival"] = new engine.RulesElement({
    name: "Fated Survival",
    type: "Feat",
    id: "ID_FMP_FEAT_2139",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2139",
    categories: ["Fated Survival", "ID_FMP_FEAT_2139"]
  });
  byID[te.id] = te;
  
  te = Feat["Flash of the Blade"] = new engine.RulesElement({
    name: "Flash of the Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_2076",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2076",
    categories: ["Flash of the Blade", "ID_FMP_FEAT_2076"]
  });
  byID[te.id] = te;
  
  te = Feat["Furious Demand"] = new engine.RulesElement({
    name: "Furious Demand",
    type: "Feat",
    id: "ID_FMP_FEAT_2130",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2130",
    categories: ["Furious Demand", "ID_FMP_FEAT_2130"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Fast Talk"] = new engine.RulesElement({
    name: "Halfling Fast Talk",
    type: "Feat",
    id: "ID_FMP_FEAT_2093",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2093",
    categories: ["Halfling Fast Talk", "ID_FMP_FEAT_2093"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Short Bow Hunter"] = new engine.RulesElement({
    name: "Halfling Short Bow Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2099",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2099",
    categories: ["Halfling Short Bow Hunter", "ID_FMP_FEAT_2099"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Arcanist"] = new engine.RulesElement({
    name: "Hellfire Arcanist",
    type: "Feat",
    id: "ID_FMP_FEAT_2133",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2133",
    categories: ["Hellfire Arcanist", "ID_FMP_FEAT_2133"],
    rules: function(model) {
      model.statadd("Hellfire Arcanist", 2);
      model.statadd("Hellfire Arcanist", 1);
      model.statadd("Hellfire Arcanist", 1);
      model.statadd("fire:damage", function() { return model.stat("Hellfire Arcanist"); }, "Feat");
      model.statadd("Hellfire Arcanist", 1);
      model.statadd("Hellfire Arcanist", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Master"] = new engine.RulesElement({
    name: "Hellfire Master",
    type: "Feat",
    id: "ID_FMP_FEAT_2134",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2134",
    categories: ["Hellfire Master", "ID_FMP_FEAT_2134"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Terror Lord"] = new engine.RulesElement({
    name: "Hellfire Terror Lord",
    type: "Feat",
    id: "ID_FMP_FEAT_2135",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2135",
    categories: ["Hellfire Terror Lord", "ID_FMP_FEAT_2135"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellish Defiance"] = new engine.RulesElement({
    name: "Hellish Defiance",
    type: "Feat",
    id: "ID_FMP_FEAT_2131",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2131",
    categories: ["Hellish Defiance", "ID_FMP_FEAT_2131"]
  });
  byID[te.id] = te;
  
  te = Feat["Imaginative Reaction"] = new engine.RulesElement({
    name: "Imaginative Reaction",
    type: "Feat",
    id: "ID_FMP_FEAT_2055",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2055",
    categories: ["Imaginative Reaction", "ID_FMP_FEAT_2055"]
  });
  byID[te.id] = te;
  
  te = Feat["Imperious Majesty"] = new engine.RulesElement({
    name: "Imperious Majesty",
    type: "Feat",
    id: "ID_FMP_FEAT_2132",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2132",
    categories: ["Imperious Majesty", "ID_FMP_FEAT_2132"],
    rules: function(model) {
      model.statadd("Initiative", function() { return model.stat("Charisma modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Augment Energy"] = new engine.RulesElement({
    name: "Improved Augment Energy",
    type: "Feat",
    id: "ID_FMP_FEAT_2110",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2110",
    categories: ["Improved Augment Energy", "ID_FMP_FEAT_2110"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Shielding Elixir"] = new engine.RulesElement({
    name: "Improved Shielding Elixir",
    type: "Feat",
    id: "ID_FMP_FEAT_2111",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2111",
    categories: ["Improved Shielding Elixir", "ID_FMP_FEAT_2111"]
  });
  byID[te.id] = te;
  
  te = Feat["In Death, Life"] = new engine.RulesElement({
    name: "In Death, Life",
    type: "Feat",
    id: "ID_FMP_FEAT_2138",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2138",
    categories: ["In Death, Life", "ID_FMP_FEAT_2138"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10263"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Indomitable Halfling"] = new engine.RulesElement({
    name: "Indomitable Halfling",
    type: "Feat",
    id: "ID_FMP_FEAT_2095",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2095",
    categories: ["Indomitable Halfling", "ID_FMP_FEAT_2095"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; }, "Feat");
      model.statadd("Saving Throws", function() { /* against charm effects and ongoing psychic damage */ return 5; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Inspiring Aid"] = new engine.RulesElement({
    name: "Inspiring Aid",
    type: "Feat",
    id: "ID_FMP_FEAT_2056",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2056",
    categories: ["Inspiring Aid", "ID_FMP_FEAT_2056"]
  });
  byID[te.id] = te;
  
  te = Feat["Irrefutable Blade"] = new engine.RulesElement({
    name: "Irrefutable Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_2077",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2077",
    categories: ["Irrefutable Blade", "ID_FMP_FEAT_2077"]
  });
  byID[te.id] = te;
  
  te = Feat["Just Sacrifice"] = new engine.RulesElement({
    name: "Just Sacrifice",
    type: "Feat",
    id: "ID_FMP_FEAT_2123",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2123",
    categories: ["Just Sacrifice", "ID_FMP_FEAT_2123"]
  });
  byID[te.id] = te;
  
  te = Feat["Justice Hammer"] = new engine.RulesElement({
    name: "Justice Hammer",
    type: "Feat",
    id: "ID_FMP_FEAT_2120",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2120",
    categories: ["Justice Hammer", "ID_FMP_FEAT_2120"]
  });
  byID[te.id] = te;
  
  te = Feat["Know When to Fold"] = new engine.RulesElement({
    name: "Know When to Fold",
    type: "Feat",
    id: "ID_FMP_FEAT_2096",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2096",
    categories: ["Know When to Fold", "ID_FMP_FEAT_2096"]
  });
  byID[te.id] = te;
  
  te = Feat["Light of Order"] = new engine.RulesElement({
    name: "Light of Order",
    type: "Feat",
    id: "ID_FMP_FEAT_2117",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2117",
    categories: ["Light of Order", "ID_FMP_FEAT_2117"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Message of Doom Spurned"] = new engine.RulesElement({
    name: "Message of Doom Spurned",
    type: "Feat",
    id: "ID_FMP_FEAT_2089",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2089",
    categories: ["Message of Doom Spurned", "ID_FMP_FEAT_2089"]
  });
  byID[te.id] = te;
  
  te = Feat["Offering to the Prisoner"] = new engine.RulesElement({
    name: "Offering to the Prisoner",
    type: "Feat",
    id: "ID_FMP_FEAT_2081",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2081",
    categories: ["Offering to the Prisoner", "ID_FMP_FEAT_2081"]
  });
  byID[te.id] = te;
  
  te = Feat["Patron's Guidance"] = new engine.RulesElement({
    name: "Patron's Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_2082",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2082",
    categories: ["Patron's Guidance", "ID_FMP_FEAT_2082"],
    rules: function(model) {
      model.select('class feature', 2, {
        filter: function(model, element) { return element.hasCategory("Patron's Guidance"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prepared for Anything"] = new engine.RulesElement({
    name: "Prepared for Anything",
    type: "Feat",
    id: "ID_FMP_FEAT_2057",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2057",
    categories: ["Prepared for Anything", "ID_FMP_FEAT_2057"]
  });
  byID[te.id] = te;
  
  te = Feat["Prime Beast Strike"] = new engine.RulesElement({
    name: "Prime Beast Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2100",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2100",
    categories: ["Prime Beast Strike", "ID_FMP_FEAT_2100"],
    rules: function(model) {
      model.statadd("ranged:attack", function() { /* if none of your allies is nearer to your target than either you of your beast companion */ return 1; });
      model.statadd("melee:attack", function() { /* if none of your allies is nearer to your target than either you of your beast companion */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prisoner's Resolve"] = new engine.RulesElement({
    name: "Prisoner's Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_2090",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2090",
    categories: ["Prisoner's Resolve", "ID_FMP_FEAT_2090"]
  });
  byID[te.id] = te;
  
  te = Feat["Rapid Infusion"] = new engine.RulesElement({
    name: "Rapid Infusion",
    type: "Feat",
    id: "ID_FMP_FEAT_2113",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2113",
    categories: ["Rapid Infusion", "ID_FMP_FEAT_2113"]
  });
  byID[te.id] = te;
  
  te = Feat["Resourceful Donation"] = new engine.RulesElement({
    name: "Resourceful Donation",
    type: "Feat",
    id: "ID_FMP_FEAT_2058",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2058",
    categories: ["Resourceful Donation", "ID_FMP_FEAT_2058"]
  });
  byID[te.id] = te;
  
  te = Feat["Retribution Seeker"] = new engine.RulesElement({
    name: "Retribution Seeker",
    type: "Feat",
    id: "ID_FMP_FEAT_2114",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2114",
    categories: ["Retribution Seeker", "ID_FMP_FEAT_2114"],
    rules: function(model) {
      model.statadd("arcane:damage", function() { /* against enemies adjacent to at least on of your allies */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rigged Chance"] = new engine.RulesElement({
    name: "Rigged Chance",
    type: "Feat",
    id: "ID_FMP_FEAT_2097",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2097",
    categories: ["Rigged Chance", "ID_FMP_FEAT_2097"]
  });
  byID[te.id] = te;
  
  te = Feat["Risky Charge"] = new engine.RulesElement({
    name: "Risky Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2059",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2059",
    categories: ["Risky Charge", "ID_FMP_FEAT_2059"]
  });
  byID[te.id] = te;
  
  te = Feat["River-Born Ritualist"] = new engine.RulesElement({
    name: "River-Born Ritualist",
    type: "Feat",
    id: "ID_FMP_FEAT_2101",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2101",
    categories: ["River-Born Ritualist", "ID_FMP_FEAT_2101"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_RITUAL_40", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_61", 1);
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rousing Charge"] = new engine.RulesElement({
    name: "Rousing Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2060",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2060",
    categories: ["Rousing Charge", "ID_FMP_FEAT_2060"]
  });
  byID[te.id] = te;
  
  te = Feat["Rousing Resurgence"] = new engine.RulesElement({
    name: "Rousing Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_2061",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2061",
    categories: ["Rousing Resurgence", "ID_FMP_FEAT_2061"]
  });
  byID[te.id] = te;
  
  te = Feat["Second Step"] = new engine.RulesElement({
    name: "Second Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2102",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2102",
    categories: ["Second Step", "ID_FMP_FEAT_2102"]
  });
  byID[te.id] = te;
  
  te = Feat["Shrewd Positioning"] = new engine.RulesElement({
    name: "Shrewd Positioning",
    type: "Feat",
    id: "ID_FMP_FEAT_2062",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2062",
    categories: ["Shrewd Positioning", "ID_FMP_FEAT_2062"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Poison"] = new engine.RulesElement({
    name: "Spirit Poison",
    type: "Feat",
    id: "ID_FMP_FEAT_2083",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2083",
    categories: ["Spirit Poison", "ID_FMP_FEAT_2083"]
  });
  byID[te.id] = te;
  
  te = Feat["Stirring Word"] = new engine.RulesElement({
    name: "Stirring Word",
    type: "Feat",
    id: "ID_FMP_FEAT_2063",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2063",
    categories: ["Stirring Word", "ID_FMP_FEAT_2063"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Adjustment"] = new engine.RulesElement({
    name: "Tactical Adjustment",
    type: "Feat",
    id: "ID_FMP_FEAT_2064",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2064",
    categories: ["Tactical Adjustment", "ID_FMP_FEAT_2064"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Tactical Adjustment:Whenever an ally within your line of sight spends an action point to make an extra attack, you can slide that ally 1 square before or after the attack");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Feint"] = new engine.RulesElement({
    name: "Tactical Feint",
    type: "Feat",
    id: "ID_FMP_FEAT_2065",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2065",
    categories: ["Tactical Feint", "ID_FMP_FEAT_2065"],
    rules: function(model) {
      model.statadd("Action Point", "Tactical Feint:Whenever you spend an action point to make an extra attack, one ally within 3 squares of you gains a bonus equal to one-half your Intelligence modifier to his or her next attack roll against a target of your attack before the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tactician's Word"] = new engine.RulesElement({
    name: "Tactician's Word",
    type: "Feat",
    id: "ID_FMP_FEAT_2067",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2067",
    categories: ["Tactician's Word", "ID_FMP_FEAT_2067"]
  });
  byID[te.id] = te;
  
  te = Feat["Thief Expert"] = new engine.RulesElement({
    name: "Thief Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_2104",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2104",
    categories: ["Thief Expert", "ID_FMP_FEAT_2104"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thief Novice"] = new engine.RulesElement({
    name: "Thief Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_2103",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2103",
    categories: ["Thief Novice", "ID_FMP_FEAT_2103"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thief Specialist"] = new engine.RulesElement({
    name: "Thief Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_2105",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2105",
    categories: ["Thief Specialist", "ID_FMP_FEAT_2105"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thug Expert"] = new engine.RulesElement({
    name: "Thug Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_2107",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2107",
    categories: ["Thug Expert", "ID_FMP_FEAT_2107"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thug Novice"] = new engine.RulesElement({
    name: "Thug Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_2106",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2106",
    categories: ["Thug Novice", "ID_FMP_FEAT_2106"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thug Specialist"] = new engine.RulesElement({
    name: "Thug Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_2108",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2108",
    categories: ["Thug Specialist", "ID_FMP_FEAT_2108"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Torm's Radiance"] = new engine.RulesElement({
    name: "Torm's Radiance",
    type: "Feat",
    id: "ID_FMP_FEAT_2124",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2124",
    categories: ["Torm's Radiance", "ID_FMP_FEAT_2124"]
  });
  byID[te.id] = te;
  
  te = Feat["Ulban's Flare"] = new engine.RulesElement({
    name: "Ulban's Flare",
    type: "Feat",
    id: "ID_FMP_FEAT_2084",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2084",
    categories: ["Ulban's Flare", "ID_FMP_FEAT_2084"]
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Duelist"] = new engine.RulesElement({
    name: "Versatile Duelist",
    type: "Feat",
    id: "ID_FMP_FEAT_2078",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2078",
    categories: ["Versatile Duelist", "ID_FMP_FEAT_2078"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ONE-HANDED_MILITARY_HEAVY_BLADE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VERSATILE_DUELIST"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Word"] = new engine.RulesElement({
    name: "Versatile Word",
    type: "Feat",
    id: "ID_FMP_FEAT_2068",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2068",
    categories: ["Versatile Word", "ID_FMP_FEAT_2068"]
  });
  byID[te.id] = te;
  
  te = Feat["Warding Shield"] = new engine.RulesElement({
    name: "Warding Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2121",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2121",
    categories: ["Warding Shield", "ID_FMP_FEAT_2121"]
  });
  byID[te.id] = te;
  
  te = Feat["Warlock's Wrath"] = new engine.RulesElement({
    name: "Warlock's Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2127",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2127",
    categories: ["Warlock's Wrath", "ID_FMP_FEAT_2127"],
    rules: function(model) {
      model.statadd("Warlock's Curse Die", "d8");
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wizard's Wrath"] = new engine.RulesElement({
    name: "Wizard's Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_2136",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2136",
    categories: ["Wizard's Wrath", "ID_FMP_FEAT_2136"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrath of the Crimson Legion"] = new engine.RulesElement({
    name: "Wrath of the Crimson Legion",
    type: "Feat",
    id: "ID_FMP_FEAT_2128",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2128",
    categories: ["Wrath of the Crimson Legion", "ID_FMP_FEAT_2128"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "cha");
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Yorgrix's Brutality"] = new engine.RulesElement({
    name: "Yorgrix's Brutality",
    type: "Feat",
    id: "ID_FMP_FEAT_2085",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2085",
    categories: ["Yorgrix's Brutality", "ID_FMP_FEAT_2085"],
    rules: function(model) {
      model.statadd("Yorgrix's Brutality", 2);
      model.statadd("Yorgrix's Brutality", 2);
      model.statadd("Yorgrix's Brutality", 2);
      model.statadd("ID_FMP_CLASS_7:damage", function() { /* against a creature taking ongoing damage */ return model.stat("Yorgrix's Brutality"); });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
