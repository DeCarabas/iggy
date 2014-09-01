define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Agile Form"] = new engine.RulesElement({
    name: "Agile Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1822",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1822",
    categories: ["Agile Form", "ID_FMP_FEAT_1822"]
  });
  byID[te.id] = te;
  
  te = Feat["Animal Empathy"] = new engine.RulesElement({
    name: "Animal Empathy",
    type: "Feat",
    id: "ID_FMP_FEAT_1824",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1824",
    categories: ["Animal Empathy", "ID_FMP_FEAT_1824"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcing Throw"] = new engine.RulesElement({
    name: "Arcing Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_1888",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1888",
    categories: ["Arcing Throw", "ID_FMP_FEAT_1888"]
  });
  byID[te.id] = te;
  
  te = Feat["Audacious Crow"] = new engine.RulesElement({
    name: "Audacious Crow",
    type: "Feat",
    id: "ID_FMP_FEAT_1326",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1326",
    categories: ["Audacious Crow", "ID_FMP_FEAT_1326", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Spear"] = new engine.RulesElement({
    name: "Bloodied Spear",
    type: "Feat",
    id: "ID_FMP_FEAT_1327",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1327",
    categories: ["Bloodied Spear", "ID_FMP_FEAT_1327", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* on opportunity attacks */ return 1; }, "Feat");
      model.statadd("damage rolls", function() { /* on opportunity attacks */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Triumph"] = new engine.RulesElement({
    name: "Bloody Triumph",
    type: "Feat",
    id: "ID_FMP_FEAT_1826",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1826",
    categories: ["Bloody Triumph", "ID_FMP_FEAT_1826"]
  });
  byID[te.id] = te;
  
  te = Feat["Bolstered Swarm"] = new engine.RulesElement({
    name: "Bolstered Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_1889",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1889",
    categories: ["Bolstered Swarm", "ID_FMP_FEAT_1889"]
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Guardian"] = new engine.RulesElement({
    name: "Bolstering Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1890",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1890",
    categories: ["Bolstering Guardian", "ID_FMP_FEAT_1890"]
  });
  byID[te.id] = te;
  
  te = Feat["Commanding Form"] = new engine.RulesElement({
    name: "Commanding Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1891",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1891",
    categories: ["Commanding Form", "ID_FMP_FEAT_1891"]
  });
  byID[te.id] = te;
  
  te = Feat["Courageous Heart"] = new engine.RulesElement({
    name: "Courageous Heart",
    type: "Feat",
    id: "ID_FMP_FEAT_1328",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1328",
    categories: ["Courageous Heart", "ID_FMP_FEAT_1328", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm effects or fear effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Crippling Crush"] = new engine.RulesElement({
    name: "Crippling Crush",
    type: "Feat",
    id: "ID_FMP_FEAT_1827",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1827",
    categories: ["Crippling Crush", "ID_FMP_FEAT_1827"],
    rules: function(model) {
      model.statadd("hammer group,weapon:damage", function() { /* when you immobilize or slow an enemy */ return model.stat("Constitution modifier"); });
      model.statadd("mace group,weapon:damage", function() { /* when you immobilize or slow an enemy */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cyclone Spirit"] = new engine.RulesElement({
    name: "Cyclone Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1892",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1892",
    categories: ["Cyclone Spirit", "ID_FMP_FEAT_1892"]
  });
  byID[te.id] = te;
  
  te = Feat["Deep Sage"] = new engine.RulesElement({
    name: "Deep Sage",
    type: "Feat",
    id: "ID_FMP_FEAT_1828",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1828",
    categories: ["Deep Sage", "ID_FMP_FEAT_1828"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Double Lunge"] = new engine.RulesElement({
    name: "Double Lunge",
    type: "Feat",
    id: "ID_FMP_FEAT_1893",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1893",
    categories: ["Double Lunge", "ID_FMP_FEAT_1893"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_5249:damage", function() { return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Druid of Darkness"] = new engine.RulesElement({
    name: "Druid of Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_1829",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1829",
    categories: ["Druid of Darkness", "ID_FMP_FEAT_1829"]
  });
  byID[te.id] = te;
  
  te = Feat["Earthstrength Defenses"] = new engine.RulesElement({
    name: "Earthstrength Defenses",
    type: "Feat",
    id: "ID_FMP_FEAT_1894",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1894",
    categories: ["Earthstrength Defenses", "ID_FMP_FEAT_1894"]
  });
  byID[te.id] = te;
  
  te = Feat["Earthstrength Might"] = new engine.RulesElement({
    name: "Earthstrength Might",
    type: "Feat",
    id: "ID_FMP_FEAT_1919",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1919",
    categories: ["Earthstrength Might", "ID_FMP_FEAT_1919"]
  });
  byID[te.id] = te;
  
  te = Feat["Earthstrength Resilience"] = new engine.RulesElement({
    name: "Earthstrength Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_1830",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1830",
    categories: ["Earthstrength Resilience", "ID_FMP_FEAT_1830"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Barbarian"] = new engine.RulesElement({
    name: "Elemental Barbarian",
    type: "Feat",
    id: "ID_FMP_FEAT_1831",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1831",
    categories: ["Elemental Barbarian", "ID_FMP_FEAT_1831"]
  });
  byID[te.id] = te;
  
  te = Feat["Enduring Mountain"] = new engine.RulesElement({
    name: "Enduring Mountain",
    type: "Feat",
    id: "ID_FMP_FEAT_1329",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1329",
    categories: ["Enduring Mountain", "ID_FMP_FEAT_1329", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"]
  });
  byID[te.id] = te;
  
  te = Feat["Ephemeral Spirit"] = new engine.RulesElement({
    name: "Ephemeral Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1895",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1895",
    categories: ["Ephemeral Spirit", "ID_FMP_FEAT_1895"]
  });
  byID[te.id] = te;
  
  te = Feat["Explosive Rage Strike"] = new engine.RulesElement({
    name: "Explosive Rage Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1896",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1896",
    categories: ["Explosive Rage Strike", "ID_FMP_FEAT_1896"]
  });
  byID[te.id] = te;
  
  te = Feat["Eyes of the Spirits"] = new engine.RulesElement({
    name: "Eyes of the Spirits",
    type: "Feat",
    id: "ID_FMP_FEAT_1832",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1832",
    categories: ["Eyes of the Spirits", "ID_FMP_FEAT_1832"]
  });
  byID[te.id] = te;
  
  te = Feat["Fading Spirit"] = new engine.RulesElement({
    name: "Fading Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1833",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1833",
    categories: ["Fading Spirit", "ID_FMP_FEAT_1833"]
  });
  byID[te.id] = te;
  
  te = Feat["Far-Reaching Grasp"] = new engine.RulesElement({
    name: "Far-Reaching Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_1920",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1920",
    categories: ["Far-Reaching Grasp", "ID_FMP_FEAT_1920"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Charge"] = new engine.RulesElement({
    name: "Fearsome Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_1834",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1834",
    categories: ["Fearsome Charge", "ID_FMP_FEAT_1834"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Host"] = new engine.RulesElement({
    name: "Fearsome Host",
    type: "Feat",
    id: "ID_FMP_FEAT_1330",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1330",
    categories: ["Fearsome Host", "ID_FMP_FEAT_1330", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feral Fey Step"] = new engine.RulesElement({
    name: "Feral Fey Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1835",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1835",
    categories: ["Feral Fey Step", "ID_FMP_FEAT_1835"]
  });
  byID[te.id] = te;
  
  te = Feat["Focus the Spirits' Lives"] = new engine.RulesElement({
    name: "Focus the Spirits' Lives",
    type: "Feat",
    id: "ID_FMP_FEAT_1836",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1836",
    categories: ["Focus the Spirits' Lives", "ID_FMP_FEAT_1836"]
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Smash"] = new engine.RulesElement({
    name: "Forceful Smash",
    type: "Feat",
    id: "ID_FMP_FEAT_1897",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1897",
    categories: ["Forceful Smash", "ID_FMP_FEAT_1897"]
  });
  byID[te.id] = te;
  
  te = Feat["Four Winds"] = new engine.RulesElement({
    name: "Four Winds",
    type: "Feat",
    id: "ID_FMP_FEAT_1331",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1331",
    categories: ["Four Winds", "ID_FMP_FEAT_1331", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Grave Spirit"] = new engine.RulesElement({
    name: "Grave Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1921",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1921",
    categories: ["Grave Spirit", "ID_FMP_FEAT_1921"]
  });
  byID[te.id] = te;
  
  te = Feat["Guardian Resurgence"] = new engine.RulesElement({
    name: "Guardian Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_1922",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1922",
    categories: ["Guardian Resurgence", "ID_FMP_FEAT_1922"]
  });
  byID[te.id] = te;
  
  te = Feat["Half-Elf Spirit Speaker"] = new engine.RulesElement({
    name: "Half-Elf Spirit Speaker",
    type: "Feat",
    id: "ID_FMP_FEAT_1837",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1837",
    categories: ["Half-Elf Spirit Speaker", "ID_FMP_FEAT_1837"]
  });
  byID[te.id] = te;
  
  te = Feat["Herbalist"] = new engine.RulesElement({
    name: "Herbalist",
    type: "Feat",
    id: "ID_FMP_FEAT_1838",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1838",
    categories: ["Herbalist", "ID_FMP_FEAT_1838"],
    rules: function(model) {
      model.statadd("Heal Misc", function() { /* to treat diseases */ return 5; });
      model.statadd("FREEBEE:ID_FMP_RITUAL_1", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hide Armor Expertise"] = new engine.RulesElement({
    name: "Hide Armor Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1839",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1839",
    categories: ["Hide Armor Expertise", "ID_FMP_FEAT_1839"],
    rules: function(model) {
      model.statadd("Armor Class", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return 2;
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Human Nature Lore"] = new engine.RulesElement({
    name: "Human Nature Lore",
    type: "Feat",
    id: "ID_FMP_FEAT_1840",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1840",
    categories: ["Human Nature Lore", "ID_FMP_FEAT_1840"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Predator"] = new engine.RulesElement({
    name: "Hunting Predator",
    type: "Feat",
    id: "ID_FMP_FEAT_1937",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1937",
    categories: ["Hunting Predator", "ID_FMP_FEAT_1937", "ID_INTERNAL_CATEGORY_MULTICLASS_DRUID", "Multiclass Druid", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you are in beast form */ return 1; });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_DRUID"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hurl Weapon"] = new engine.RulesElement({
    name: "Hurl Weapon",
    type: "Feat",
    id: "ID_FMP_FEAT_1841",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1841",
    categories: ["Hurl Weapon", "ID_FMP_FEAT_1841"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ALLASTHROWN"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Impaling Thrust"] = new engine.RulesElement({
    name: "Impaling Thrust",
    type: "Feat",
    id: "ID_FMP_FEAT_1842",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1842",
    categories: ["Impaling Thrust", "ID_FMP_FEAT_1842"]
  });
  byID[te.id] = te;
  
  te = Feat["Improvised Missile"] = new engine.RulesElement({
    name: "Improvised Missile",
    type: "Feat",
    id: "ID_FMP_FEAT_1843",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1843",
    categories: ["Improvised Missile", "ID_FMP_FEAT_1843"]
  });
  byID[te.id] = te;
  
  te = Feat["Inner Compass"] = new engine.RulesElement({
    name: "Inner Compass",
    type: "Feat",
    id: "ID_FMP_FEAT_1844",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1844",
    categories: ["Inner Compass", "ID_FMP_FEAT_1844"]
  });
  byID[te.id] = te;
  
  te = Feat["Invigorating Spirit"] = new engine.RulesElement({
    name: "Invigorating Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1845",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1845",
    categories: ["Invigorating Spirit", "ID_FMP_FEAT_1845"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironheart Spirit"] = new engine.RulesElement({
    name: "Ironheart Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1923",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1923",
    categories: ["Ironheart Spirit", "ID_FMP_FEAT_1923"]
  });
  byID[te.id] = te;
  
  te = Feat["Lifespirit Healing"] = new engine.RulesElement({
    name: "Lifespirit Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1898",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1898",
    categories: ["Lifespirit Healing", "ID_FMP_FEAT_1898"]
  });
  byID[te.id] = te;
  
  te = Feat["Lifespirit Vigor"] = new engine.RulesElement({
    name: "Lifespirit Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_1846",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1846",
    categories: ["Lifespirit Vigor", "ID_FMP_FEAT_1846"]
  });
  byID[te.id] = te;
  
  te = Feat["Longtooth Spirit Shifter"] = new engine.RulesElement({
    name: "Longtooth Spirit Shifter",
    type: "Feat",
    id: "ID_FMP_FEAT_1847",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1847",
    categories: ["Longtooth Spirit Shifter", "ID_FMP_FEAT_1847"]
  });
  byID[te.id] = te;
  
  te = Feat["Maneuvering Attack"] = new engine.RulesElement({
    name: "Maneuvering Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_1899",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1899",
    categories: ["Maneuvering Attack", "ID_FMP_FEAT_1899"]
  });
  byID[te.id] = te;
  
  te = Feat["Manifest Healing"] = new engine.RulesElement({
    name: "Manifest Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1848",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1848",
    categories: ["Manifest Healing", "ID_FMP_FEAT_1848"]
  });
  byID[te.id] = te;
  
  te = Feat["Markings of the Elements"] = new engine.RulesElement({
    name: "Markings of the Elements",
    type: "Feat",
    id: "ID_FMP_FEAT_1849",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1849",
    categories: ["Markings of the Elements", "ID_FMP_FEAT_1849"]
  });
  byID[te.id] = te;
  
  te = Feat["Markings of the Predator"] = new engine.RulesElement({
    name: "Markings of the Predator",
    type: "Feat",
    id: "ID_FMP_FEAT_1850",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1850",
    categories: ["Markings of the Predator", "ID_FMP_FEAT_1850"]
  });
  byID[te.id] = te;
  
  te = Feat["Mending Spirit"] = new engine.RulesElement({
    name: "Mending Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1938",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1938",
    categories: ["Mending Spirit", "ID_FMP_FEAT_1938", "ID_INTERNAL_CATEGORY_MULTICLASS_SHAMAN", "Multiclass Shaman", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3773"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SHAMAN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Midnight Stalker"] = new engine.RulesElement({
    name: "Midnight Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_1332",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1332",
    categories: ["Midnight Stalker", "ID_FMP_FEAT_1332", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Overpowering Charge"] = new engine.RulesElement({
    name: "Overpowering Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_1924",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1924",
    categories: ["Overpowering Charge", "ID_FMP_FEAT_1924"]
  });
  byID[te.id] = te;
  
  te = Feat["Pouncing Form"] = new engine.RulesElement({
    name: "Pouncing Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1900",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1900",
    categories: ["Pouncing Form", "ID_FMP_FEAT_1900"]
  });
  byID[te.id] = te;
  
  te = Feat["Precise Fangs"] = new engine.RulesElement({
    name: "Precise Fangs",
    type: "Feat",
    id: "ID_FMP_FEAT_1851",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1851",
    categories: ["Precise Fangs", "ID_FMP_FEAT_1851"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_5388:attack", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Predator's Burst"] = new engine.RulesElement({
    name: "Predator's Burst",
    type: "Feat",
    id: "ID_FMP_FEAT_1852",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1852",
    categories: ["Predator's Burst", "ID_FMP_FEAT_1852"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when you charge while you are in beast form */ return 2; });
      model.statadd("damage rolls", function() { /* on a charge attack while you are in beast form */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Primal Breath"] = new engine.RulesElement({
    name: "Primal Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_1853",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1853",
    categories: ["Primal Breath", "ID_FMP_FEAT_1853"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Halfling Counterattack"] = new engine.RulesElement({
    name: "Primal Halfling Counterattack",
    type: "Feat",
    id: "ID_FMP_FEAT_1854",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1854",
    categories: ["Primal Halfling Counterattack", "ID_FMP_FEAT_1854"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Resilience"] = new engine.RulesElement({
    name: "Primal Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_1855",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1855",
    categories: ["Primal Resilience", "ID_FMP_FEAT_1855"]
  });
  byID[te.id] = te;
  
  te = Feat["Primal Summoning Expertise"] = new engine.RulesElement({
    name: "Primal Summoning Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1925",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1925",
    categories: ["Primal Summoning Expertise", "ID_FMP_FEAT_1925"]
  });
  byID[te.id] = te;
  
  te = Feat["Protector's Shield"] = new engine.RulesElement({
    name: "Protector's Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_1856",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1856",
    categories: ["Protector's Shield", "ID_FMP_FEAT_1856"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_5388:attack", "+1d8");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Purging Spirit"] = new engine.RulesElement({
    name: "Purging Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1926",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1926",
    categories: ["Purging Spirit", "ID_FMP_FEAT_1926"]
  });
  byID[te.id] = te;
  
  te = Feat["Quick Stow"] = new engine.RulesElement({
    name: "Quick Stow",
    type: "Feat",
    id: "ID_FMP_FEAT_1857",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1857",
    categories: ["Quick Stow", "ID_FMP_FEAT_1857"]
  });
  byID[te.id] = te;
  
  te = Feat["Raging Bloodcut"] = new engine.RulesElement({
    name: "Raging Bloodcut",
    type: "Feat",
    id: "ID_FMP_FEAT_1858",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1858",
    categories: ["Raging Bloodcut", "ID_FMP_FEAT_1858"]
  });
  byID[te.id] = te;
  
  te = Feat["Rampant Fury"] = new engine.RulesElement({
    name: "Rampant Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1939",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1939",
    categories: ["Rampant Fury", "ID_FMP_FEAT_1939", "ID_INTERNAL_CATEGORY_MULTICLASS_BARBARIAN", "Multiclass Barbarian", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1053"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARBARIAN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Razorclaw Spirit Shifter"] = new engine.RulesElement({
    name: "Razorclaw Spirit Shifter",
    type: "Feat",
    id: "ID_FMP_FEAT_1859",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1859",
    categories: ["Razorclaw Spirit Shifter", "ID_FMP_FEAT_1859"]
  });
  byID[te.id] = te;
  
  te = Feat["Reckless Charge"] = new engine.RulesElement({
    name: "Reckless Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_1860",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1860",
    categories: ["Reckless Charge", "ID_FMP_FEAT_1860"]
  });
  byID[te.id] = te;
  
  te = Feat["Reckless Rage"] = new engine.RulesElement({
    name: "Reckless Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_1901",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1901",
    categories: ["Reckless Rage", "ID_FMP_FEAT_1901"]
  });
  byID[te.id] = te;
  
  te = Feat["Rejuvenating Spirit"] = new engine.RulesElement({
    name: "Rejuvenating Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1861",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1861",
    categories: ["Rejuvenating Spirit", "ID_FMP_FEAT_1861"]
  });
  byID[te.id] = te;
  
  te = Feat["Resilient Spirit"] = new engine.RulesElement({
    name: "Resilient Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1862",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1862",
    categories: ["Resilient Spirit", "ID_FMP_FEAT_1862"]
  });
  byID[te.id] = te;
  
  te = Feat["Retributive Spirit"] = new engine.RulesElement({
    name: "Retributive Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1902",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1902",
    categories: ["Retributive Spirit", "ID_FMP_FEAT_1902"]
  });
  byID[te.id] = te;
  
  te = Feat["Rites of Spirits' Blood"] = new engine.RulesElement({
    name: "Rites of Spirits' Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_1863",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1863",
    categories: ["Rites of Spirits' Blood", "ID_FMP_FEAT_1863"],
    rules: function(model) {
      model.statadd("Bloodhunt", 1);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Scattering Swarm"] = new engine.RulesElement({
    name: "Scattering Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_1903",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1903",
    categories: ["Scattering Swarm", "ID_FMP_FEAT_1903"]
  });
  byID[te.id] = te;
  
  te = Feat["Second Skin"] = new engine.RulesElement({
    name: "Second Skin",
    type: "Feat",
    id: "ID_FMP_FEAT_1927",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1927",
    categories: ["Second Skin", "ID_FMP_FEAT_1927"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return 2;
        } else return 0;
       }, "Feat");
      model.statadd("Armor Penalty", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return 1;
        } else return 0;
       });
      model.statadd("primal,fear:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sentinel Spirit"] = new engine.RulesElement({
    name: "Sentinel Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1904",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1904",
    categories: ["Sentinel Spirit", "ID_FMP_FEAT_1904"]
  });
  byID[te.id] = te;
  
  te = Feat["Shielding Spirit"] = new engine.RulesElement({
    name: "Shielding Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1905",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1905",
    categories: ["Shielding Spirit", "ID_FMP_FEAT_1905"]
  });
  byID[te.id] = te;
  
  te = Feat["Skins of the Slain"] = new engine.RulesElement({
    name: "Skins of the Slain",
    type: "Feat",
    id: "ID_FMP_FEAT_1864",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1864",
    categories: ["Skins of the Slain", "ID_FMP_FEAT_1864"],
    rules: function(model) {
      model.statadd("Skins of the Slain", 1);
      model.statadd("Skins of the Slain", function() { return model.stat("Armor Enhancement Bonus"); });
      model.statadd("Intimidate Misc", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return model.stat("Skins of the Slain");
        } else return 0;
       }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slayer's Shift"] = new engine.RulesElement({
    name: "Slayer's Shift",
    type: "Feat",
    id: "ID_FMP_FEAT_1928",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1928",
    categories: ["Slayer's Shift", "ID_FMP_FEAT_1928"]
  });
  byID[te.id] = te;
  
  te = Feat["Spider's Swiftness"] = new engine.RulesElement({
    name: "Spider's Swiftness",
    type: "Feat",
    id: "ID_FMP_FEAT_1865",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1865",
    categories: ["Spider's Swiftness", "ID_FMP_FEAT_1865"],
    rules: function(model) {
      model.statadd("Spider's Swiftness", 1);
      model.statadd("Speed", function() { return model.stat("Spider's Swiftness"); }, "Feat");
      model.statadd("Speed", function() { /* while you're under the effect of a primal polymorph or rage power */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirit of Health"] = new engine.RulesElement({
    name: "Spirit of Health",
    type: "Feat",
    id: "ID_FMP_FEAT_1929",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1929",
    categories: ["Spirit of Health", "ID_FMP_FEAT_1929"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Tribe"] = new engine.RulesElement({
    name: "Spirit Tribe",
    type: "Feat",
    id: "ID_FMP_FEAT_1866",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1866",
    categories: ["Spirit Tribe", "ID_FMP_FEAT_1866"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit's Eyes"] = new engine.RulesElement({
    name: "Spirit's Eyes",
    type: "Feat",
    id: "ID_FMP_FEAT_1906",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1906",
    categories: ["Spirit's Eyes", "ID_FMP_FEAT_1906"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit's Fey Step"] = new engine.RulesElement({
    name: "Spirit's Fey Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1867",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1867",
    categories: ["Spirit's Fey Step", "ID_FMP_FEAT_1867"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirits of Stealth"] = new engine.RulesElement({
    name: "Spirits of Stealth",
    type: "Feat",
    id: "ID_FMP_FEAT_1868",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1868",
    categories: ["Spirits of Stealth", "ID_FMP_FEAT_1868"],
    rules: function(model) {
      model.statadd("Spirits of Stealth", 3);
      model.statadd("Spirits of Stealth", 2);
      model.statadd("Spirits of Stealth", 2);
      model.statadd("damage rolls", function() { /* against bloodied creatures you are hidden from */ return model.stat("Spirits of Stealth"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirits of Stone"] = new engine.RulesElement({
    name: "Spirits of Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_1869",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1869",
    categories: ["Spirits of Stone", "ID_FMP_FEAT_1869"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirits of the Primal Dragons"] = new engine.RulesElement({
    name: "Spirits of the Primal Dragons",
    type: "Feat",
    id: "ID_FMP_FEAT_1870",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1870",
    categories: ["Spirits of the Primal Dragons", "ID_FMP_FEAT_1870"]
  });
  byID[te.id] = te;
  
  te = Feat["Staggering Smash"] = new engine.RulesElement({
    name: "Staggering Smash",
    type: "Feat",
    id: "ID_FMP_FEAT_1871",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1871",
    categories: ["Staggering Smash", "ID_FMP_FEAT_1871"]
  });
  byID[te.id] = te;
  
  te = Feat["Stinging Swarm"] = new engine.RulesElement({
    name: "Stinging Swarm",
    type: "Feat",
    id: "ID_FMP_FEAT_1872",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1872",
    categories: ["Stinging Swarm", "ID_FMP_FEAT_1872"]
  });
  byID[te.id] = te;
  
  te = Feat["Stone Heart Spirit"] = new engine.RulesElement({
    name: "Stone Heart Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1930",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1930",
    categories: ["Stone Heart Spirit", "ID_FMP_FEAT_1930"]
  });
  byID[te.id] = te;
  
  te = Feat["Stone Step Spirits"] = new engine.RulesElement({
    name: "Stone Step Spirits",
    type: "Feat",
    id: "ID_FMP_FEAT_1873",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1873",
    categories: ["Stone Step Spirits", "ID_FMP_FEAT_1873"]
  });
  byID[te.id] = te;
  
  te = Feat["Stormheart Push"] = new engine.RulesElement({
    name: "Stormheart Push",
    type: "Feat",
    id: "ID_FMP_FEAT_1874",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1874",
    categories: ["Stormheart Push", "ID_FMP_FEAT_1874"]
  });
  byID[te.id] = te;
  
  te = Feat["Stormheart Thunder"] = new engine.RulesElement({
    name: "Stormheart Thunder",
    type: "Feat",
    id: "ID_FMP_FEAT_1907",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1907",
    categories: ["Stormheart Thunder", "ID_FMP_FEAT_1907"]
  });
  byID[te.id] = te;
  
  te = Feat["Strengthening Spirit"] = new engine.RulesElement({
    name: "Strengthening Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1875",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1875",
    categories: ["Strengthening Spirit", "ID_FMP_FEAT_1875"]
  });
  byID[te.id] = te;
  
  te = Feat["Strong-Willed Summoning"] = new engine.RulesElement({
    name: "Strong-Willed Summoning",
    type: "Feat",
    id: "ID_FMP_FEAT_1876",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1876",
    categories: ["Strong-Willed Summoning", "ID_FMP_FEAT_1876"]
  });
  byID[te.id] = te;
  
  te = Feat["Sudden Call"] = new engine.RulesElement({
    name: "Sudden Call",
    type: "Feat",
    id: "ID_FMP_FEAT_1877",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1877",
    categories: ["Sudden Call", "ID_FMP_FEAT_1877"]
  });
  byID[te.id] = te;
  
  te = Feat["Sweeping Blade"] = new engine.RulesElement({
    name: "Sweeping Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_1931",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1931",
    categories: ["Sweeping Blade", "ID_FMP_FEAT_1931"]
  });
  byID[te.id] = te;
  
  te = Feat["Swift Jaguar"] = new engine.RulesElement({
    name: "Swift Jaguar",
    type: "Feat",
    id: "ID_FMP_FEAT_1325",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1325",
    categories: ["Swift Jaguar", "ID_FMP_FEAT_1325", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swift Predator"] = new engine.RulesElement({
    name: "Swift Predator",
    type: "Feat",
    id: "ID_FMP_FEAT_1932",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1932",
    categories: ["Swift Predator", "ID_FMP_FEAT_1932"],
    rules: function(model) {
      model.statadd("speed,", function() { /* while you are in beast form */ return 1; }, "Feat");
      model.statadd("whenever you shift, you can increase the distance by 1 square", function() { /* while you are in beast form */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swift Slayer"] = new engine.RulesElement({
    name: "Swift Slayer",
    type: "Feat",
    id: "ID_FMP_FEAT_1878",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1878",
    categories: ["Swift Slayer", "ID_FMP_FEAT_1878"]
  });
  byID[te.id] = te;
  
  te = Feat["Tangling Grasp"] = new engine.RulesElement({
    name: "Tangling Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_1933",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1933",
    categories: ["Tangling Grasp", "ID_FMP_FEAT_1933"]
  });
  byID[te.id] = te;
  
  te = Feat["Targeted Assault"] = new engine.RulesElement({
    name: "Targeted Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_1879",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1879",
    categories: ["Targeted Assault", "ID_FMP_FEAT_1879"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against any creature that has you marked */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thirsty Blade"] = new engine.RulesElement({
    name: "Thirsty Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_1908",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1908",
    categories: ["Thirsty Blade", "ID_FMP_FEAT_1908"]
  });
  byID[te.id] = te;
  
  te = Feat["Thunderborn Rage"] = new engine.RulesElement({
    name: "Thunderborn Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_1880",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1880",
    categories: ["Thunderborn Rage", "ID_FMP_FEAT_1880"]
  });
  byID[te.id] = te;
  
  te = Feat["Thundering Bull Rush"] = new engine.RulesElement({
    name: "Thundering Bull Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_1909",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1909",
    categories: ["Thundering Bull Rush", "ID_FMP_FEAT_1909"]
  });
  byID[te.id] = te;
  
  te = Feat["Thunderous Cry"] = new engine.RulesElement({
    name: "Thunderous Cry",
    type: "Feat",
    id: "ID_FMP_FEAT_1910",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1910",
    categories: ["Thunderous Cry", "ID_FMP_FEAT_1910"]
  });
  byID[te.id] = te;
  
  te = Feat["Triumphant Spirit"] = new engine.RulesElement({
    name: "Triumphant Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1934",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1934",
    categories: ["Triumphant Spirit", "ID_FMP_FEAT_1934"]
  });
  byID[te.id] = te;
  
  te = Feat["Two-Handed Grasp"] = new engine.RulesElement({
    name: "Two-Handed Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_1911",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1911",
    categories: ["Two-Handed Grasp", "ID_FMP_FEAT_1911"]
  });
  byID[te.id] = te;
  
  te = Feat["Vexing Spirit"] = new engine.RulesElement({
    name: "Vexing Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1935",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1935",
    categories: ["Vexing Spirit", "ID_FMP_FEAT_1935"]
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Spirit"] = new engine.RulesElement({
    name: "Vicious Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1912",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1912",
    categories: ["Vicious Spirit", "ID_FMP_FEAT_1912"]
  });
  byID[te.id] = te;
  
  te = Feat["Vigorous Spirit"] = new engine.RulesElement({
    name: "Vigorous Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1881",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1881",
    categories: ["Vigorous Spirit", "ID_FMP_FEAT_1881"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_3773:healing", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Violent Reminder"] = new engine.RulesElement({
    name: "Violent Reminder",
    type: "Feat",
    id: "ID_FMP_FEAT_1913",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1913",
    categories: ["Violent Reminder", "ID_FMP_FEAT_1913"]
  });
  byID[te.id] = te;
  
  te = Feat["Vital Form"] = new engine.RulesElement({
    name: "Vital Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1914",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1914",
    categories: ["Vital Form", "ID_FMP_FEAT_1914"]
  });
  byID[te.id] = te;
  
  te = Feat["Warden's Endurance"] = new engine.RulesElement({
    name: "Warden's Endurance",
    type: "Feat",
    id: "ID_FMP_FEAT_1940",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1940",
    categories: ["Warden's Endurance", "ID_FMP_FEAT_1940", "ID_INTERNAL_CATEGORY_MULTICLASS_WARDEN", "Multiclass Warden", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARDEN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warning Guardian"] = new engine.RulesElement({
    name: "Warning Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1915",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1915",
    categories: ["Warning Guardian", "ID_FMP_FEAT_1915"]
  });
  byID[te.id] = te;
  
  te = Feat["Watcher Spirit Adept"] = new engine.RulesElement({
    name: "Watcher Spirit Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1882",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1882",
    categories: ["Watcher Spirit Adept", "ID_FMP_FEAT_1882"]
  });
  byID[te.id] = te;
  
  te = Feat["Watchful Guardian"] = new engine.RulesElement({
    name: "Watchful Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_1883",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1883",
    categories: ["Watchful Guardian", "ID_FMP_FEAT_1883"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* when making opportunity attacks while you are in beast form */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Watchful Owl"] = new engine.RulesElement({
    name: "Watchful Owl",
    type: "Feat",
    id: "ID_FMP_FEAT_1333",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1333",
    categories: ["Watchful Owl", "ID_FMP_FEAT_1333", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wellspring of Life"] = new engine.RulesElement({
    name: "Wellspring of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1916",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1916",
    categories: ["Wellspring of Life", "ID_FMP_FEAT_1916"]
  });
  byID[te.id] = te;
  
  te = Feat["Wild Bull Rush"] = new engine.RulesElement({
    name: "Wild Bull Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_1884",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1884",
    categories: ["Wild Bull Rush", "ID_FMP_FEAT_1884"],
    rules: function(model) {
      model.statadd("bull rush attack rolls,", function() { /* while you are in beast form */ return 2; }, "Feat");
      model.statadd("you can bull rush targets of any size", function() { /* while you are in beast form */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Sage"] = new engine.RulesElement({
    name: "Wild Sage",
    type: "Feat",
    id: "ID_FMP_FEAT_1885",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1885",
    categories: ["Wild Sage", "ID_FMP_FEAT_1885"],
    rules: function(model) {
      model.statadd("Free Rituals", "In addition, choose one of the following rituals: Dowsing Rod, Portend Weather, or Traveler's Camouflage.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Surge"] = new engine.RulesElement({
    name: "Wild Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_1936",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1936",
    categories: ["Wild Surge", "ID_FMP_FEAT_1936"]
  });
  byID[te.id] = te;
  
  te = Feat["Wildblood Fury"] = new engine.RulesElement({
    name: "Wildblood Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1886",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1886",
    categories: ["Wildblood Fury", "ID_FMP_FEAT_1886"]
  });
  byID[te.id] = te;
  
  te = Feat["Wildblood Retribution"] = new engine.RulesElement({
    name: "Wildblood Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_1917",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1917",
    categories: ["Wildblood Retribution", "ID_FMP_FEAT_1917"]
  });
  byID[te.id] = te;
  
  te = Feat["Withering Roar"] = new engine.RulesElement({
    name: "Withering Roar",
    type: "Feat",
    id: "ID_FMP_FEAT_1918",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1918",
    categories: ["Withering Roar", "ID_FMP_FEAT_1918"]
  });
  byID[te.id] = te;
  
  te = Feat["World Speaker Spirit Adept"] = new engine.RulesElement({
    name: "World Speaker Spirit Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1887",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1887",
    categories: ["World Speaker Spirit Adept", "ID_FMP_FEAT_1887"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
