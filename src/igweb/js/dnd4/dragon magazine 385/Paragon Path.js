(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Adamant Instructor"] = new RulesElement({
    name: "Adamant Instructor",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_638",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=638",
    categories: ["Adamant Instructor", "ID_FMP_PARAGON_PATH_638"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2561"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2562"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2563"]);
      model.grant(elements.id["ID_FMP_POWER_11860"]);
      model.grant(elements.id["ID_FMP_POWER_11861"]);
      model.grant(elements.id["ID_FMP_POWER_11862"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Animus Predator"] = new RulesElement({
    name: "Animus Predator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_648",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=648",
    categories: ["Animus Predator", "ID_FMP_PARAGON_PATH_648"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2592"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2593"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2594"]);
      model.grant(elements.id["ID_FMP_POWER_12183"]);
      model.grant(elements.id["ID_FMP_POWER_12184"]);
      model.grant(elements.id["ID_FMP_POWER_12185"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Argentum Alliance"] = new RulesElement({
    name: "Argentum Alliance",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_636",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=636",
    categories: ["Argentum Alliance", "ID_FMP_PARAGON_PATH_636"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2555"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2556"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2557"]);
      model.grant(elements.id["ID_FMP_POWER_11854"]);
      model.grant(elements.id["ID_FMP_POWER_11855"]);
      model.grant(elements.id["ID_FMP_POWER_11856"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Champion of the Labyrinth"] = new RulesElement({
    name: "Champion of the Labyrinth",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_627",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=627",
    categories: ["Champion of the Labyrinth", "ID_FMP_PARAGON_PATH_627"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2504"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2505"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2506"]);
      model.grant(elements.id["ID_FMP_POWER_11755"]);
      model.grant(elements.id["ID_FMP_POWER_11756"]);
      model.grant(elements.id["ID_FMP_POWER_11757"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Glee-born"] = new RulesElement({
    name: "Glee-born",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_639",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=639",
    categories: ["Glee-born", "ID_FMP_PARAGON_PATH_639"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2564"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2565"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2566"]);
      model.grant(elements.id["ID_FMP_POWER_11863"]);
      model.grant(elements.id["ID_FMP_POWER_11864"]);
      model.grant(elements.id["ID_FMP_POWER_11865"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Half-Elf Polymath"] = new RulesElement({
    name: "Half-Elf Polymath",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_652",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=652",
    categories: ["Half-Elf Polymath", "ID_FMP_PARAGON_PATH_652"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2604"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2605"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2606"]);
      model.grant(elements.id["ID_FMP_POWER_12214"]);
      model.grant(elements.id["ID_FMP_POWER_12215"]);
      model.grant(elements.id["ID_FMP_POWER_12216"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Keeper of the Past"] = new RulesElement({
    name: "Keeper of the Past",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_634",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=634",
    categories: ["Keeper of the Past", "ID_FMP_PARAGON_PATH_634"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2548"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2549"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2550"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2551"]);
      model.grant(elements.id["ID_FMP_POWER_11828"]);
      model.grant(elements.id["ID_FMP_POWER_11829"]);
      model.grant(elements.id["ID_FMP_POWER_11830"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Luckbender"] = new RulesElement({
    name: "Luckbender",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_635",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=635",
    categories: ["Luckbender", "ID_FMP_PARAGON_PATH_635"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2552"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2553"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2554"]);
      model.grant(elements.id["ID_FMP_POWER_11837"]);
      model.grant(elements.id["ID_FMP_POWER_11838"]);
      model.grant(elements.id["ID_FMP_POWER_11839"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Mercurial Assassin"] = new RulesElement({
    name: "Mercurial Assassin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_637",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=637",
    categories: ["Mercurial Assassin", "ID_FMP_PARAGON_PATH_637"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2558"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2559"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2560"]);
      model.grant(elements.id["ID_FMP_POWER_11857"]);
      model.grant(elements.id["ID_FMP_POWER_11858"]);
      model.grant(elements.id["ID_FMP_POWER_11859"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Mithral Arm"] = new RulesElement({
    name: "Mithral Arm",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_640",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=640",
    categories: ["Mithral Arm", "ID_FMP_PARAGON_PATH_640"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2567"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2568"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2569"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2570"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2571"]);
      model.grant(elements.id["ID_FMP_POWER_11866"]);
      model.grant(elements.id["ID_FMP_POWER_11867"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of Renewal"] = new RulesElement({
    name: "Scion of Renewal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_649",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=649",
    categories: ["Scion of Renewal", "ID_FMP_PARAGON_PATH_649"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2595"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2596"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2597"]);
      model.grant(elements.id["ID_FMP_POWER_12186"]);
      model.grant(elements.id["ID_FMP_POWER_12187"]);
      model.grant(elements.id["ID_FMP_POWER_12188"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Snapping Testudo"] = new RulesElement({
    name: "Snapping Testudo",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_650",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=650",
    categories: ["Snapping Testudo", "ID_FMP_PARAGON_PATH_650"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2598"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2599"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2600"]);
      model.grant(elements.id["ID_FMP_POWER_12202"]);
      model.grant(elements.id["ID_FMP_POWER_12203"]);
      model.grant(elements.id["ID_FMP_POWER_12204"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soul Igniter"] = new RulesElement({
    name: "Soul Igniter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_646",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=646",
    categories: ["Soul Igniter", "ID_FMP_PARAGON_PATH_646"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2586"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2587"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2588"]);
      model.grant(elements.id["ID_FMP_POWER_12176"]);
      model.grant(elements.id["ID_FMP_POWER_12177"]);
      model.grant(elements.id["ID_FMP_POWER_12178"]);
      model.grant(elements.id["ID_FMP_POWER_12179"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soulforged"] = new RulesElement({
    name: "Soulforged",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_651",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=651",
    categories: ["Soulforged", "ID_FMP_PARAGON_PATH_651"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2601"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2602"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2603"]);
      model.grant(elements.id["ID_FMP_POWER_12209"]);
      model.grant(elements.id["ID_FMP_POWER_12211"]);
      model.grant(elements.id["ID_FMP_POWER_12212"]);
      model.grant(elements.id["ID_FMP_POWER_12213"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stormcaller"] = new RulesElement({
    name: "Stormcaller",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_647",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=647",
    categories: ["Stormcaller", "ID_FMP_PARAGON_PATH_647"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2589"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2590"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2591"]);
      model.grant(elements.id["ID_FMP_POWER_12180"]);
      model.grant(elements.id["ID_FMP_POWER_12181"]);
      model.grant(elements.id["ID_FMP_POWER_12182"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);