define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Anarch of Shyr"] = new engine.RulesElement({
    name: "Anarch of Shyr",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_74",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=74",
    categories: ["Anarch of Shyr", "ID_FMP_PARAGON_PATH_74"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_576"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_809"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_807"]);
      model.grant(model.elements.id["ID_FMP_POWER_3566"]);
      model.grant(model.elements.id["ID_FMP_POWER_3567"]);
      model.grant(model.elements.id["ID_FMP_POWER_3568"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Coronal Guard"] = new engine.RulesElement({
    name: "Coronal Guard",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_73",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=73",
    categories: ["Coronal Guard", "ID_FMP_PARAGON_PATH_73"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_578"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_579"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_810"]);
      model.grant(model.elements.id["ID_FMP_POWER_1854"]);
      model.grant(model.elements.id["ID_FMP_POWER_1855"]);
      model.grant(model.elements.id["ID_FMP_POWER_3569"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Darkwalker"] = new engine.RulesElement({
    name: "Darkwalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_138",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=138",
    categories: ["Darkwalker", "ID_FMP_PARAGON_PATH_138"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_633"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_812"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_634"]);
      model.grant(model.elements.id["ID_FMP_POWER_1962"]);
      model.grant(model.elements.id["ID_FMP_POWER_1967"]);
      model.grant(model.elements.id["ID_FMP_POWER_3531"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Doomguide"] = new engine.RulesElement({
    name: "Doomguide",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_81",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=81",
    categories: ["Doomguide", "ID_FMP_PARAGON_PATH_81"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_587"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_588"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_635"]);
      model.grant(model.elements.id["ID_FMP_POWER_1898"]);
      model.grant(model.elements.id["ID_FMP_POWER_3535"]);
      model.grant(model.elements.id["ID_FMP_POWER_3536"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Drow Wanderer"] = new engine.RulesElement({
    name: "Drow Wanderer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_82",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=82",
    categories: ["Drow Wanderer", "ID_FMP_PARAGON_PATH_82"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_589"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_590"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_814"]);
      model.grant(model.elements.id["ID_FMP_POWER_1899"]);
      model.grant(model.elements.id["ID_FMP_POWER_1900"]);
      model.grant(model.elements.id["ID_FMP_POWER_1901"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Earthheart Defender"] = new engine.RulesElement({
    name: "Earthheart Defender",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_83",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=83",
    categories: ["Earthheart Defender", "ID_FMP_PARAGON_PATH_83"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_591"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_592"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_638"]);
      model.grant(model.elements.id["ID_FMP_POWER_1902"]);
      model.grant(model.elements.id["ID_FMP_POWER_1903"]);
      model.grant(model.elements.id["ID_FMP_POWER_1904"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Elemental Tempest"] = new engine.RulesElement({
    name: "Elemental Tempest",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_84",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=84",
    categories: ["Elemental Tempest", "ID_FMP_PARAGON_PATH_84"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_593"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_594"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_815"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_816"]);
      model.grant(model.elements.id["ID_FMP_POWER_1905"]);
      model.grant(model.elements.id["ID_FMP_POWER_1906"]);
      model.grant(model.elements.id["ID_FMP_POWER_1907"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Evermeet Warlock"] = new engine.RulesElement({
    name: "Evermeet Warlock",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_88",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=88",
    categories: ["Evermeet Warlock", "ID_FMP_PARAGON_PATH_88"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_817"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_819"]);
      model.grant(model.elements.id["ID_FMP_POWER_1964"]);
      model.grant(model.elements.id["ID_FMP_POWER_3543"]);
      model.grant(model.elements.id["ID_FMP_POWER_3544"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ghost of Eventide"] = new engine.RulesElement({
    name: "Ghost of Eventide",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_67",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=67",
    categories: ["Ghost of Eventide", "ID_FMP_PARAGON_PATH_67"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_566"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_567"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_820"]);
      model.grant(model.elements.id["ID_FMP_POWER_1835"]);
      model.grant(model.elements.id["ID_FMP_POWER_1836"]);
      model.grant(model.elements.id["ID_FMP_POWER_1837"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Heartwarder"] = new engine.RulesElement({
    name: "Heartwarder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_141",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=141",
    categories: ["Heartwarder", "ID_FMP_PARAGON_PATH_141"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_821"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_822"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_823"]);
      model.grant(model.elements.id["ID_FMP_POWER_3546"]);
      model.grant(model.elements.id["ID_FMP_POWER_3547"]);
      model.grant(model.elements.id["ID_FMP_POWER_3548"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["High Forest Scout"] = new engine.RulesElement({
    name: "High Forest Scout",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_63",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=63",
    categories: ["High Forest Scout", "ID_FMP_PARAGON_PATH_63"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_560"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_561"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_824"]);
      model.grant(model.elements.id["ID_FMP_POWER_1822"]);
      model.grant(model.elements.id["ID_FMP_POWER_1823"]);
      model.grant(model.elements.id["ID_FMP_POWER_1824"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Impilturan Demonslayer"] = new engine.RulesElement({
    name: "Impilturan Demonslayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_77",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=77",
    categories: ["Impilturan Demonslayer", "ID_FMP_PARAGON_PATH_77"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_582"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_583"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_639"]);
      model.grant(model.elements.id["ID_FMP_POWER_1859"]);
      model.grant(model.elements.id["ID_FMP_POWER_1860"]);
      model.grant(model.elements.id["ID_FMP_POWER_1861"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Morninglord"] = new engine.RulesElement({
    name: "Morninglord",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_89",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=89",
    categories: ["Morninglord", "ID_FMP_PARAGON_PATH_89"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_825"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_826"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_827"]);
      model.grant(model.elements.id["ID_FMP_POWER_3549"]);
      model.grant(model.elements.id["ID_FMP_POWER_3550"]);
      model.grant(model.elements.id["ID_FMP_POWER_3551"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Purple Dragon Knight"] = new engine.RulesElement({
    name: "Purple Dragon Knight",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_85",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=85",
    categories: ["Purple Dragon Knight", "ID_FMP_PARAGON_PATH_85"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_595"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_596"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_636"]);
      model.grant(model.elements.id["ID_FMP_POWER_1909"]);
      model.grant(model.elements.id["ID_FMP_POWER_1910"]);
      model.grant(model.elements.id["ID_FMP_POWER_1968"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Silverstar"] = new engine.RulesElement({
    name: "Silverstar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_143",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=143",
    categories: ["Silverstar", "ID_FMP_PARAGON_PATH_143"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_829"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_828"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_830"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_831"]);
      model.grant(model.elements.id["ID_FMP_POWER_3552"]);
      model.grant(model.elements.id["ID_FMP_POWER_3553"]);
      model.grant(model.elements.id["ID_FMP_POWER_3554"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Simbarch of Aglarond"] = new engine.RulesElement({
    name: "Simbarch of Aglarond",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_87",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=87",
    categories: ["Simbarch of Aglarond", "ID_FMP_PARAGON_PATH_87"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_832"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_833"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_834"]);
      model.grant(model.elements.id["ID_FMP_POWER_1914"]);
      model.grant(model.elements.id["ID_FMP_POWER_3556"]);
      model.grant(model.elements.id["ID_FMP_POWER_3558"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spellguard Wizard"] = new engine.RulesElement({
    name: "Spellguard Wizard",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_86",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=86",
    categories: ["Spellguard Wizard", "ID_FMP_PARAGON_PATH_86"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_597"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_598"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_835"]);
      model.grant(model.elements.id["ID_FMP_POWER_1911"]);
      model.grant(model.elements.id["ID_FMP_POWER_1912"]);
      model.grant(model.elements.id["ID_FMP_POWER_1913"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spellscarred Savant"] = new engine.RulesElement({
    name: "Spellscarred Savant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_62",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=62",
    categories: ["Spellscarred Savant", "ID_FMP_PARAGON_PATH_62"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_558"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_559"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_836"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_837"]);
      model.grant(model.elements.id["ID_FMP_POWER_3559"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Steelsky Liberator"] = new engine.RulesElement({
    name: "Steelsky Liberator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_145",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=145",
    categories: ["Steelsky Liberator", "ID_FMP_PARAGON_PATH_145"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_838"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_839"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_840"]);
      model.grant(model.elements.id["ID_FMP_POWER_3562"]);
      model.grant(model.elements.id["ID_FMP_POWER_3563"]);
      model.grant(model.elements.id["ID_FMP_POWER_3564"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sword Coast Corsair"] = new engine.RulesElement({
    name: "Sword Coast Corsair",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_61",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=61",
    categories: ["Sword Coast Corsair", "ID_FMP_PARAGON_PATH_61"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_562"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_563"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_841"]);
      model.grant(model.elements.id["ID_FMP_POWER_1825"]);
      model.grant(model.elements.id["ID_FMP_POWER_1826"]);
      model.grant(model.elements.id["ID_FMP_POWER_1827"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Umbriri"] = new engine.RulesElement({
    name: "Umbriri",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_71",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=71",
    categories: ["Umbriri", "ID_FMP_PARAGON_PATH_71"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_574"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_575"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_842"]);
      model.grant(model.elements.id["ID_FMP_POWER_1847"]);
      model.grant(model.elements.id["ID_FMP_POWER_1848"]);
      model.grant(model.elements.id["ID_FMP_POWER_1849"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wandering Swordmage"] = new engine.RulesElement({
    name: "Wandering Swordmage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_76",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=76",
    categories: ["Wandering Swordmage", "ID_FMP_PARAGON_PATH_76"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_580"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_581"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_843"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_844"]);
      model.grant(model.elements.id["ID_FMP_POWER_1856"]);
      model.grant(model.elements.id["ID_FMP_POWER_1857"]);
      model.grant(model.elements.id["ID_FMP_POWER_1858"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["War Wizard of Cormyr"] = new engine.RulesElement({
    name: "War Wizard of Cormyr",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_66",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=66",
    categories: ["War Wizard of Cormyr", "ID_FMP_PARAGON_PATH_66"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_568"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_569"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_845"]);
      model.grant(model.elements.id["ID_FMP_POWER_1838"]);
      model.grant(model.elements.id["ID_FMP_POWER_1839"]);
      model.grant(model.elements.id["ID_FMP_POWER_1840"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Whirlwind Genasi"] = new engine.RulesElement({
    name: "Whirlwind Genasi",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_69",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=69",
    categories: ["Whirlwind Genasi", "ID_FMP_PARAGON_PATH_69"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_572"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_573"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_846"]);
      model.grant(model.elements.id["ID_FMP_POWER_1844"]);
      model.grant(model.elements.id["ID_FMP_POWER_1845"]);
      model.grant(model.elements.id["ID_FMP_POWER_1846"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wildfire Genasi"] = new engine.RulesElement({
    name: "Wildfire Genasi",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_68",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=68",
    categories: ["Wildfire Genasi", "ID_FMP_PARAGON_PATH_68"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_570"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_571"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_637"]);
      model.grant(model.elements.id["ID_FMP_POWER_1841"]);
      model.grant(model.elements.id["ID_FMP_POWER_1842"]);
      model.grant(model.elements.id["ID_FMP_POWER_1843"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
