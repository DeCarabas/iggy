define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Airspur Windrider"] = new engine.RulesElement({
    name: "Airspur Windrider",
    type: "Feat",
    id: "ID_FMP_FEAT_1979",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1979",
    categories: ["Airspur Windrider", "ID_FMP_FEAT_1979"]
  });
  byID[te.id] = te;
  
  te = Feat["Assassin's Cloak"] = new engine.RulesElement({
    name: "Assassin's Cloak",
    type: "Feat",
    id: "ID_FMP_FEAT_1785",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1785",
    categories: ["Assassin's Cloak", "ID_FMP_FEAT_1785"]
  });
  byID[te.id] = te;
  
  te = Feat["Assassin's Escape"] = new engine.RulesElement({
    name: "Assassin's Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_1786",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1786",
    categories: ["Assassin's Escape", "ID_FMP_FEAT_1786"]
  });
  byID[te.id] = te;
  
  te = Feat["Assured Healing"] = new engine.RulesElement({
    name: "Assured Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1967",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1967",
    categories: ["Assured Healing", "ID_FMP_FEAT_1967"]
  });
  byID[te.id] = te;
  
  te = Feat["Avernian Emissary Wrath"] = new engine.RulesElement({
    name: "Avernian Emissary Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1787",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1787",
    categories: ["Avernian Emissary Wrath", "ID_FMP_FEAT_1787"]
  });
  byID[te.id] = te;
  
  te = Feat["Battle Cleric Armaments"] = new engine.RulesElement({
    name: "Battle Cleric Armaments",
    type: "Feat",
    id: "ID_FMP_FEAT_1960",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1960",
    categories: ["Battle Cleric Armaments", "ID_FMP_FEAT_1960"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.select('Proficiency', 1, "Battle Cleric Armaments", {
        filter: function(model, element) { return element.hasCategory("Military"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blood Devourer Shifting"] = new engine.RulesElement({
    name: "Blood Devourer Shifting",
    type: "Feat",
    id: "ID_FMP_FEAT_1788",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1788",
    categories: ["Blood Devourer Shifting", "ID_FMP_FEAT_1788"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Shroud"] = new engine.RulesElement({
    name: "Brutal Shroud",
    type: "Feat",
    id: "ID_FMP_FEAT_1789",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1789",
    categories: ["Brutal Shroud", "ID_FMP_FEAT_1789"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Tactics"] = new engine.RulesElement({
    name: "Brutal Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_1969",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1969",
    categories: ["Brutal Tactics", "ID_FMP_FEAT_1969"]
  });
  byID[te.id] = te;
  
  te = Feat["Cast Iron Font"] = new engine.RulesElement({
    name: "Cast Iron Font",
    type: "Feat",
    id: "ID_FMP_FEAT_1941",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1941",
    categories: ["Cast Iron Font", "ID_FMP_FEAT_1941"]
  });
  byID[te.id] = te;
  
  te = Feat["Chondalwood Mystic"] = new engine.RulesElement({
    name: "Chondalwood Mystic",
    type: "Feat",
    id: "ID_FMP_FEAT_1980",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1980",
    categories: ["Chondalwood Mystic", "ID_FMP_FEAT_1980"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_SPELLPLAGUE_SENSE"]);
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Courage of the Lone Stag"] = new engine.RulesElement({
    name: "Courage of the Lone Stag",
    type: "Feat",
    id: "ID_FMP_FEAT_1942",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1942",
    categories: ["Courage of the Lone Stag", "ID_FMP_FEAT_1942"]
  });
  byID[te.id] = te;
  
  te = Feat["Crimson Eye Action"] = new engine.RulesElement({
    name: "Crimson Eye Action",
    type: "Feat",
    id: "ID_FMP_FEAT_1790",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1790",
    categories: ["Crimson Eye Action", "ID_FMP_FEAT_1790"],
    rules: function(model) {
      model.statadd("Action Point", "Crimson Eye Action:When you spend an action point, you also subject your assassin's shroud target to an additional shroud.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Crushing Guardian"] = new engine.RulesElement({
    name: "Crushing Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1943",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1943",
    categories: ["Crushing Guardian", "ID_FMP_FEAT_1943"],
    rules: function(model) {
      model.statadd("Crushing Guardian", 2);
      model.statadd("Crushing Guardian", 1);
      model.statadd("Crushing Guardian", 1);
      model.statadd("hammer group:damage", function() { /* while in guardian form */ return model.stat("Crushing Guardian"); });
      model.statadd("mace group:damage", function() { /* while in guardian form */ return model.stat("Crushing Guardian"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dawn Hunter Training"] = new engine.RulesElement({
    name: "Dawn Hunter Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1791",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1791",
    categories: ["Dawn Hunter Training", "ID_FMP_FEAT_1791"]
  });
  byID[te.id] = te;
  
  te = Feat["Dazing Fury"] = new engine.RulesElement({
    name: "Dazing Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1958",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1958",
    categories: ["Dazing Fury", "ID_FMP_FEAT_1958"]
  });
  byID[te.id] = te;
  
  te = Feat["Deft Guardian"] = new engine.RulesElement({
    name: "Deft Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1944",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1944",
    categories: ["Deft Guardian", "ID_FMP_FEAT_1944"]
  });
  byID[te.id] = te;
  
  te = Feat["Dilettante's Mark"] = new engine.RulesElement({
    name: "Dilettante's Mark",
    type: "Feat",
    id: "ID_FMP_FEAT_1945",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1945",
    categories: ["Dilettante's Mark", "ID_FMP_FEAT_1945"]
  });
  byID[te.id] = te;
  
  te = Feat["Domain Synergy"] = new engine.RulesElement({
    name: "Domain Synergy",
    type: "Feat",
    id: "ID_FMP_FEAT_1962",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1962",
    categories: ["Domain Synergy", "ID_FMP_FEAT_1962"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Vengeance"] = new engine.RulesElement({
    name: "Dragonborn Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1946",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1946",
    categories: ["Dragonborn Vengeance", "ID_FMP_FEAT_1946"],
    rules: function(model) {
      model.statadd("dragon breath:attack", function() { /* against creatures marked by you */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Earth's Punishment"] = new engine.RulesElement({
    name: "Earth's Punishment",
    type: "Feat",
    id: "ID_FMP_FEAT_1954",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1954",
    categories: ["Earth's Punishment", "ID_FMP_FEAT_1954"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Might"] = new engine.RulesElement({
    name: "Elemental Might",
    type: "Feat",
    id: "ID_FMP_FEAT_1947",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1947",
    categories: ["Elemental Might", "ID_FMP_FEAT_1947"]
  });
  byID[te.id] = te;
  
  te = Feat["Elven Guardian"] = new engine.RulesElement({
    name: "Elven Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1948",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1948",
    categories: ["Elven Guardian", "ID_FMP_FEAT_1948"]
  });
  byID[te.id] = te;
  
  te = Feat["Emerald Scale Concealment"] = new engine.RulesElement({
    name: "Emerald Scale Concealment",
    type: "Feat",
    id: "ID_FMP_FEAT_1792",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1792",
    categories: ["Emerald Scale Concealment", "ID_FMP_FEAT_1792"]
  });
  byID[te.id] = te;
  
  te = Feat["Eternal Void Memories"] = new engine.RulesElement({
    name: "Eternal Void Memories",
    type: "Feat",
    id: "ID_FMP_FEAT_1793",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1793",
    categories: ["Eternal Void Memories", "ID_FMP_FEAT_1793"]
  });
  byID[te.id] = te;
  
  te = Feat["Fighter Weapon Specialization"] = new engine.RulesElement({
    name: "Fighter Weapon Specialization",
    type: "Feat",
    id: "ID_FMP_FEAT_1970",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1970",
    categories: ["Fighter Weapon Specialization", "ID_FMP_FEAT_1970"],
    rules: function(model) {
      model.statadd("one-hand:damage", 1);
      model.statadd("two-hands:damage", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Font of Vengeance"] = new engine.RulesElement({
    name: "Font of Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1955",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1955",
    categories: ["Font of Vengeance", "ID_FMP_FEAT_1955"]
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Opportunist"] = new engine.RulesElement({
    name: "Forceful Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_1971",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1971",
    categories: ["Forceful Opportunist", "ID_FMP_FEAT_1971"]
  });
  byID[te.id] = te;
  
  te = Feat["Gambler's Word"] = new engine.RulesElement({
    name: "Gambler's Word",
    type: "Feat",
    id: "ID_FMP_FEAT_1968",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1968",
    categories: ["Gambler's Word", "ID_FMP_FEAT_1968"]
  });
  byID[te.id] = te;
  
  te = Feat["Grave Dust Advantage"] = new engine.RulesElement({
    name: "Grave Dust Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_1794",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1794",
    categories: ["Grave Dust Advantage", "ID_FMP_FEAT_1794"]
  });
  byID[te.id] = te;
  
  te = Feat["Grave Dust Assassin"] = new engine.RulesElement({
    name: "Grave Dust Assassin",
    type: "Feat",
    id: "ID_FMP_FEAT_1795",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1795",
    categories: ["Grave Dust Assassin", "ID_FMP_FEAT_1795"]
  });
  byID[te.id] = te;
  
  te = Feat["Greater Divine Fortune"] = new engine.RulesElement({
    name: "Greater Divine Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_1963",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1963",
    categories: ["Greater Divine Fortune", "ID_FMP_FEAT_1963"]
  });
  byID[te.id] = te;
  
  te = Feat["Guard of Stone"] = new engine.RulesElement({
    name: "Guard of Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_1949",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1949",
    categories: ["Guard of Stone", "ID_FMP_FEAT_1949"]
  });
  byID[te.id] = te;
  
  te = Feat["Half-Orc Vengeance"] = new engine.RulesElement({
    name: "Half-Orc Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1950",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1950",
    categories: ["Half-Orc Vengeance", "ID_FMP_FEAT_1950"]
  });
  byID[te.id] = te;
  
  te = Feat["Hammergate Conniver"] = new engine.RulesElement({
    name: "Hammergate Conniver",
    type: "Feat",
    id: "ID_FMP_FEAT_1981",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1981",
    categories: ["Hammergate Conniver", "ID_FMP_FEAT_1981"]
  });
  byID[te.id] = te;
  
  te = Feat["Harbinger of Rebirth"] = new engine.RulesElement({
    name: "Harbinger of Rebirth",
    type: "Feat",
    id: "ID_FMP_FEAT_1964",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1964",
    categories: ["Harbinger of Rebirth", "ID_FMP_FEAT_1964"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hewing Charge"] = new engine.RulesElement({
    name: "Hewing Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_1972",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1972",
    categories: ["Hewing Charge", "ID_FMP_FEAT_1972"],
    rules: function(model) {
      model.statadd("two-handed:damage", function() { /* on charge attacks */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hidden Insight"] = new engine.RulesElement({
    name: "Hidden Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_1796",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1796",
    categories: ["Hidden Insight", "ID_FMP_FEAT_1796"]
  });
  byID[te.id] = te;
  
  te = Feat["Hungry Sky Shadows"] = new engine.RulesElement({
    name: "Hungry Sky Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_1797",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1797",
    categories: ["Hungry Sky Shadows", "ID_FMP_FEAT_1797"]
  });
  byID[te.id] = te;
  
  te = Feat["Inevitable Challenge"] = new engine.RulesElement({
    name: "Inevitable Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1977",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1977",
    categories: ["Inevitable Challenge", "ID_FMP_FEAT_1977"]
  });
  byID[te.id] = te;
  
  te = Feat["Killer's Insight"] = new engine.RulesElement({
    name: "Killer's Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_1798",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1798",
    categories: ["Killer's Insight", "ID_FMP_FEAT_1798"]
  });
  byID[te.id] = te;
  
  te = Feat["Limitless Wrath"] = new engine.RulesElement({
    name: "Limitless Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1959",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1959",
    categories: ["Limitless Wrath", "ID_FMP_FEAT_1959"]
  });
  byID[te.id] = te;
  
  te = Feat["Longtooth Vengeance"] = new engine.RulesElement({
    name: "Longtooth Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1951",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1951",
    categories: ["Longtooth Vengeance", "ID_FMP_FEAT_1951"]
  });
  byID[te.id] = te;
  
  te = Feat["Mastered Technique"] = new engine.RulesElement({
    name: "Mastered Technique",
    type: "Feat",
    id: "ID_FMP_FEAT_1974",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1974",
    categories: ["Mastered Technique", "ID_FMP_FEAT_1974"]
  });
  byID[te.id] = te;
  
  te = Feat["Minion of the Dark"] = new engine.RulesElement({
    name: "Minion of the Dark",
    type: "Feat",
    id: "ID_FMP_FEAT_1813",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1813",
    categories: ["Minion of the Dark", "ID_FMP_FEAT_1813"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mist Walker Illusion"] = new engine.RulesElement({
    name: "Mist Walker Illusion",
    type: "Feat",
    id: "ID_FMP_FEAT_1799",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1799",
    categories: ["Mist Walker Illusion", "ID_FMP_FEAT_1799"]
  });
  byID[te.id] = te;
  
  te = Feat["Nightmare Killer"] = new engine.RulesElement({
    name: "Nightmare Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_1800",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1800",
    categories: ["Nightmare Killer", "ID_FMP_FEAT_1800"],
    rules: function(model) {
      model.statadd("fear:damage", 2, "Feat");
      model.statadd("Nightmare Killer", 1);
      model.statadd("Nightmare Killer", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nightmare Master"] = new engine.RulesElement({
    name: "Nightmare Master",
    type: "Feat",
    id: "ID_FMP_FEAT_1814",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1814",
    categories: ["Nightmare Master", "ID_FMP_FEAT_1814"]
  });
  byID[te.id] = te;
  
  te = Feat["Nightmare Step"] = new engine.RulesElement({
    name: "Nightmare Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1801",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1801",
    categories: ["Nightmare Step", "ID_FMP_FEAT_1801"]
  });
  byID[te.id] = te;
  
  te = Feat["Obsidian Cave Recovery"] = new engine.RulesElement({
    name: "Obsidian Cave Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_1802",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1802",
    categories: ["Obsidian Cave Recovery", "ID_FMP_FEAT_1802"]
  });
  byID[te.id] = te;
  
  te = Feat["Pacifist's Reward"] = new engine.RulesElement({
    name: "Pacifist's Reward",
    type: "Feat",
    id: "ID_FMP_FEAT_1965",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1965",
    categories: ["Pacifist's Reward", "ID_FMP_FEAT_1965"]
  });
  byID[te.id] = te;
  
  te = Feat["Phantom Blade Evasion"] = new engine.RulesElement({
    name: "Phantom Blade Evasion",
    type: "Feat",
    id: "ID_FMP_FEAT_1803",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1803",
    categories: ["Phantom Blade Evasion", "ID_FMP_FEAT_1803"]
  });
  byID[te.id] = te;
  
  te = Feat["Pinning Challenge"] = new engine.RulesElement({
    name: "Pinning Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1975",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1975",
    categories: ["Pinning Challenge", "ID_FMP_FEAT_1975"]
  });
  byID[te.id] = te;
  
  te = Feat["Quickening Font"] = new engine.RulesElement({
    name: "Quickening Font",
    type: "Feat",
    id: "ID_FMP_FEAT_1956",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1956",
    categories: ["Quickening Font", "ID_FMP_FEAT_1956"]
  });
  byID[te.id] = te;
  
  te = Feat["Razorclaw Swiftness"] = new engine.RulesElement({
    name: "Razorclaw Swiftness",
    type: "Feat",
    id: "ID_FMP_FEAT_1952",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1952",
    categories: ["Razorclaw Swiftness", "ID_FMP_FEAT_1952"]
  });
  byID[te.id] = te;
  
  te = Feat["Ruinspoke Scrounger"] = new engine.RulesElement({
    name: "Ruinspoke Scrounger",
    type: "Feat",
    id: "ID_FMP_FEAT_1983",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1983",
    categories: ["Ruinspoke Scrounger", "ID_FMP_FEAT_1983"]
  });
  byID[te.id] = te;
  
  te = Feat["Scions of Zarak Initiate"] = new engine.RulesElement({
    name: "Scions of Zarak Initiate",
    type: "Feat",
    id: "ID_FMP_FEAT_1804",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1804",
    categories: ["Scions of Zarak Initiate", "ID_FMP_FEAT_1804"]
  });
  byID[te.id] = te;
  
  te = Feat["Scrappy"] = new engine.RulesElement({
    name: "Scrappy",
    type: "Feat",
    id: "ID_FMP_FEAT_1973",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1973",
    categories: ["Scrappy", "ID_FMP_FEAT_1973"],
    rules: function(model) {
      model.statadd("Scrappy", 1);
      model.statadd("versatile:damage", function() { return model.stat("Scrappy"); });
      model.statadd("Scrappy", 1);
      model.statadd("Scrappy", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Veil Assassin"] = new engine.RulesElement({
    name: "Shadow Veil Assassin",
    type: "Feat",
    id: "ID_FMP_FEAT_1805",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1805",
    categories: ["Shadow Veil Assassin", "ID_FMP_FEAT_1805"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Veil Disappearance"] = new engine.RulesElement({
    name: "Shadow Veil Disappearance",
    type: "Feat",
    id: "ID_FMP_FEAT_1806",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1806",
    categories: ["Shadow Veil Disappearance", "ID_FMP_FEAT_1806"]
  });
  byID[te.id] = te;
  
  te = Feat["Steely Defense"] = new engine.RulesElement({
    name: "Steely Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1976",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1976",
    categories: ["Steely Defense", "ID_FMP_FEAT_1976"]
  });
  byID[te.id] = te;
  
  te = Feat["Thymaran Engineer"] = new engine.RulesElement({
    name: "Thymaran Engineer",
    type: "Feat",
    id: "ID_FMP_FEAT_1984",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1984",
    categories: ["Thymaran Engineer", "ID_FMP_FEAT_1984"]
  });
  byID[te.id] = te;
  
  te = Feat["True Reliability"] = new engine.RulesElement({
    name: "True Reliability",
    type: "Feat",
    id: "ID_FMP_FEAT_1978",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1978",
    categories: ["True Reliability", "ID_FMP_FEAT_1978"]
  });
  byID[te.id] = te;
  
  te = Feat["Twilight Phantom Step"] = new engine.RulesElement({
    name: "Twilight Phantom Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1807",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1807",
    categories: ["Twilight Phantom Step", "ID_FMP_FEAT_1807"]
  });
  byID[te.id] = te;
  
  te = Feat["Underwatch Vigilant"] = new engine.RulesElement({
    name: "Underwatch Vigilant",
    type: "Feat",
    id: "ID_FMP_FEAT_1982",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1982",
    categories: ["Underwatch Vigilant", "ID_FMP_FEAT_1982"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Velvet Blade Trick"] = new engine.RulesElement({
    name: "Velvet Blade Trick",
    type: "Feat",
    id: "ID_FMP_FEAT_1808",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1808",
    categories: ["Velvet Blade Trick", "ID_FMP_FEAT_1808"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Grasp"] = new engine.RulesElement({
    name: "Vengeful Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_1957",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1957",
    categories: ["Vengeful Grasp", "ID_FMP_FEAT_1957"]
  });
  byID[te.id] = te;
  
  te = Feat["Venom Hand Assassin"] = new engine.RulesElement({
    name: "Venom Hand Assassin",
    type: "Feat",
    id: "ID_FMP_FEAT_1809",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1809",
    categories: ["Venom Hand Assassin", "ID_FMP_FEAT_1809"]
  });
  byID[te.id] = te;
  
  te = Feat["Venom Hand Killer"] = new engine.RulesElement({
    name: "Venom Hand Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_1810",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1810",
    categories: ["Venom Hand Killer", "ID_FMP_FEAT_1810"],
    rules: function(model) {
      model.statadd("poison:damage", 2, "Feat");
      model.statadd("Venom Hand Killer", 1);
      model.statadd("Venom Hand Killer", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Venom Hand Master"] = new engine.RulesElement({
    name: "Venom Hand Master",
    type: "Feat",
    id: "ID_FMP_FEAT_1811",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1811",
    categories: ["Venom Hand Master", "ID_FMP_FEAT_1811"]
  });
  byID[te.id] = te;
  
  te = Feat["Venom Handler"] = new engine.RulesElement({
    name: "Venom Handler",
    type: "Feat",
    id: "ID_FMP_FEAT_1812",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1812",
    categories: ["Venom Handler", "ID_FMP_FEAT_1812"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Word of Retaliation"] = new engine.RulesElement({
    name: "Word of Retaliation",
    type: "Feat",
    id: "ID_FMP_FEAT_1966",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1966",
    categories: ["Word of Retaliation", "ID_FMP_FEAT_1966"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrath of the Forester"] = new engine.RulesElement({
    name: "Wrath of the Forester",
    type: "Feat",
    id: "ID_FMP_FEAT_1953",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1953",
    categories: ["Wrath of the Forester", "ID_FMP_FEAT_1953"],
    rules: function(model) {
      model.statadd("Action Point", "Wrath of the Forester:When you spend an action point to take an extra action, if you have already used your Nature's Wrath class feature during this turn, you can use it a second time before the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
