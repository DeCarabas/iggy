define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Beastblooded Minotaur"] = new engine.RulesElement({
    name: "Beastblooded Minotaur",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_226",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=226",
    categories: ["Beastblooded Minotaur", "ID_FMP_PARAGON_PATH_226"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1094"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1095"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1096"]);
      model.grant(model.elements.id["ID_FMP_POWER_5667"]);
      model.grant(model.elements.id["ID_FMP_POWER_5668"]);
      model.grant(model.elements.id["ID_FMP_POWER_5669"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Draconic Antithesis"] = new engine.RulesElement({
    name: "Draconic Antithesis",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_236",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=236",
    categories: ["Draconic Antithesis", "ID_FMP_PARAGON_PATH_236"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1118"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1119"]);
      model.grant(model.elements.id["ID_FMP_POWER_6003"]);
      model.grant(model.elements.id["ID_FMP_POWER_6004"]);
      model.grant(model.elements.id["ID_FMP_POWER_6005"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragon Marshal"] = new engine.RulesElement({
    name: "Dragon Marshal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_235",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=235",
    categories: ["Dragon Marshal", "ID_FMP_PARAGON_PATH_235"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1116"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1117"]);
      model.grant(model.elements.id["ID_FMP_POWER_6000"]);
      model.grant(model.elements.id["ID_FMP_POWER_6001"]);
      model.grant(model.elements.id["ID_FMP_POWER_6002"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragonbane Pactmaker"] = new engine.RulesElement({
    name: "Dragonbane Pactmaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_234",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=234",
    categories: ["Dragonbane Pactmaker", "ID_FMP_PARAGON_PATH_234"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1114"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1115"]);
      model.grant(model.elements.id["ID_FMP_POWER_5997"]);
      model.grant(model.elements.id["ID_FMP_POWER_5998"]);
      model.grant(model.elements.id["ID_FMP_POWER_5999"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hoard Raider"] = new engine.RulesElement({
    name: "Hoard Raider",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_233",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=233",
    categories: ["Hoard Raider", "ID_FMP_PARAGON_PATH_233"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1112"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1113"]);
      model.grant(model.elements.id["ID_FMP_POWER_5994"]);
      model.grant(model.elements.id["ID_FMP_POWER_5995"]);
      model.grant(model.elements.id["ID_FMP_POWER_5996"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight of Unyielding Bastion"] = new engine.RulesElement({
    name: "Knight of Unyielding Bastion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_231",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=231",
    categories: ["Knight of Unyielding Bastion", "ID_FMP_PARAGON_PATH_231"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1108"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1109"]);
      model.grant(model.elements.id["ID_FMP_POWER_5988"]);
      model.grant(model.elements.id["ID_FMP_POWER_5989"]);
      model.grant(model.elements.id["ID_FMP_POWER_5990"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Minotaur Kinspeaker"] = new engine.RulesElement({
    name: "Minotaur Kinspeaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_228",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=228",
    categories: ["Minotaur Kinspeaker", "ID_FMP_PARAGON_PATH_228"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1100"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1101"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1102"]);
      model.grant(model.elements.id["ID_FMP_POWER_5673"]);
      model.grant(model.elements.id["ID_FMP_POWER_5674"]);
      model.grant(model.elements.id["ID_FMP_POWER_5675"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scale-Breaker"] = new engine.RulesElement({
    name: "Scale-Breaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_230",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=230",
    categories: ["Scale-Breaker", "ID_FMP_PARAGON_PATH_230"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1106"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1107"]);
      model.grant(model.elements.id["ID_FMP_POWER_5985"]);
      model.grant(model.elements.id["ID_FMP_POWER_5986"]);
      model.grant(model.elements.id["ID_FMP_POWER_5987"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scourge of Io"] = new engine.RulesElement({
    name: "Scourge of Io",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_229",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=229",
    categories: ["Scourge of Io", "ID_FMP_PARAGON_PATH_229"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1104"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1105"]);
      model.grant(model.elements.id["ID_FMP_POWER_5982"]);
      model.grant(model.elements.id["ID_FMP_POWER_5983"]);
      model.grant(model.elements.id["ID_FMP_POWER_5984"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wyrm-Hunter"] = new engine.RulesElement({
    name: "Wyrm-Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_232",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=232",
    categories: ["Wyrm-Hunter", "ID_FMP_PARAGON_PATH_232"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1110"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1111"]);
      model.grant(model.elements.id["ID_FMP_POWER_5991"]);
      model.grant(model.elements.id["ID_FMP_POWER_5992"]);
      model.grant(model.elements.id["ID_FMP_POWER_5993"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
