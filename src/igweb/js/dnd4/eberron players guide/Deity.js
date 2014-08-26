define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Arawai"] = new engine.RulesElement({
    name: "Arawai",
    type: "Deity",
    id: "ID_FMP_DEITY_107",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=107",
    categories: ["Arawai", "ID_FMP_DEITY_107"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Aureon"] = new engine.RulesElement({
    name: "Aureon",
    type: "Deity",
    id: "ID_FMP_DEITY_108",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=108",
    categories: ["Aureon", "ID_FMP_DEITY_108"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_13"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Balinor"] = new engine.RulesElement({
    name: "Balinor",
    type: "Deity",
    id: "ID_FMP_DEITY_109",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=109",
    categories: ["Balinor", "ID_FMP_DEITY_109"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_24"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Boldrei"] = new engine.RulesElement({
    name: "Boldrei",
    type: "Deity",
    id: "ID_FMP_DEITY_110",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=110",
    categories: ["Boldrei", "ID_FMP_DEITY_110"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Cults of the Dragon Below"] = new engine.RulesElement({
    name: "Cults of the Dragon Below",
    type: "Deity",
    id: "ID_FMP_DEITY_134",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=134",
    categories: ["Cults of the Dragon Below", "ID_FMP_DEITY_134"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_17"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Dol Arrah"] = new engine.RulesElement({
    name: "Dol Arrah",
    type: "Deity",
    id: "ID_FMP_DEITY_111",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=111",
    categories: ["Dol Arrah", "ID_FMP_DEITY_111"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_26"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Dol Dorn"] = new engine.RulesElement({
    name: "Dol Dorn",
    type: "Deity",
    id: "ID_FMP_DEITY_112",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=112",
    categories: ["Dol Dorn", "ID_FMP_DEITY_112"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_24"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Elf Religion"] = new engine.RulesElement({
    name: "Elf Religion",
    type: "Deity",
    id: "ID_FMP_DEITY_132",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=132",
    categories: ["Elf Religion", "ID_FMP_DEITY_132"]
  });
  byID[te.id] = te;
  
  te = Deity["Kol Korran"] = new engine.RulesElement({
    name: "Kol Korran",
    type: "Deity",
    id: "ID_FMP_DEITY_113",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=113",
    categories: ["Kol Korran", "ID_FMP_DEITY_113"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Olladra"] = new engine.RulesElement({
    name: "Olladra",
    type: "Deity",
    id: "ID_FMP_DEITY_114",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=114",
    categories: ["Olladra", "ID_FMP_DEITY_114"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_16"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Onatar"] = new engine.RulesElement({
    name: "Onatar",
    type: "Deity",
    id: "ID_FMP_DEITY_115",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=115",
    categories: ["Onatar", "ID_FMP_DEITY_115"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_24"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Blood of Vol"] = new engine.RulesElement({
    name: "The Blood of Vol",
    type: "Deity",
    id: "ID_FMP_DEITY_128",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=128",
    categories: ["The Blood of Vol", "ID_FMP_DEITY_128"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_6"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_30"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Dark Six"] = new engine.RulesElement({
    name: "The Dark Six",
    type: "Deity",
    id: "ID_FMP_DEITY_124",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=124",
    categories: ["The Dark Six", "ID_FMP_DEITY_124"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Devourer"] = new engine.RulesElement({
    name: "The Devourer",
    type: "Deity",
    id: "ID_FMP_DEITY_118",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=118",
    categories: ["The Devourer", "ID_FMP_DEITY_118"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_21"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_23"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Fury"] = new engine.RulesElement({
    name: "The Fury",
    type: "Deity",
    id: "ID_FMP_DEITY_119",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=119",
    categories: ["The Fury", "ID_FMP_DEITY_119"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_17"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_31"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Keeper"] = new engine.RulesElement({
    name: "The Keeper",
    type: "Deity",
    id: "ID_FMP_DEITY_120",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=120",
    categories: ["The Keeper", "ID_FMP_DEITY_120"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_6"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_27"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Mockery"] = new engine.RulesElement({
    name: "The Mockery",
    type: "Deity",
    id: "ID_FMP_DEITY_121",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=121",
    categories: ["The Mockery", "ID_FMP_DEITY_121"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_28"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Path of Light"] = new engine.RulesElement({
    name: "The Path of Light",
    type: "Deity",
    id: "ID_FMP_DEITY_129",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=129",
    categories: ["The Path of Light", "ID_FMP_DEITY_129"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_26"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Shadow"] = new engine.RulesElement({
    name: "The Shadow",
    type: "Deity",
    id: "ID_FMP_DEITY_122",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=122",
    categories: ["The Shadow", "ID_FMP_DEITY_122"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_5"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Silver Flame"] = new engine.RulesElement({
    name: "The Silver Flame",
    type: "Deity",
    id: "ID_FMP_DEITY_127",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=127",
    categories: ["The Silver Flame", "ID_FMP_DEITY_127"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Sovereign Host"] = new engine.RulesElement({
    name: "The Sovereign Host",
    type: "Deity",
    id: "ID_FMP_DEITY_125",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=125",
    categories: ["The Sovereign Host", "ID_FMP_DEITY_125"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_13"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Spirits of the Past"] = new engine.RulesElement({
    name: "The Spirits of the Past",
    type: "Deity",
    id: "ID_FMP_DEITY_130",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=130",
    categories: ["The Spirits of the Past", "ID_FMP_DEITY_130"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_20"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_31"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Traveler"] = new engine.RulesElement({
    name: "The Traveler",
    type: "Deity",
    id: "ID_FMP_DEITY_116",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=116",
    categories: ["The Traveler", "ID_FMP_DEITY_116"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Undying Court"] = new engine.RulesElement({
    name: "The Undying Court",
    type: "Deity",
    id: "ID_FMP_DEITY_131",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=131",
    categories: ["The Undying Court", "ID_FMP_DEITY_131"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_30"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
