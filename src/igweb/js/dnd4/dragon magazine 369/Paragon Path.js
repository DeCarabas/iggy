(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Beastblooded Minotaur"] = new RulesElement({
    name: "Beastblooded Minotaur",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_226",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=226",
    categories: ["Beastblooded Minotaur", "ID_FMP_PARAGON_PATH_226"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1094"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1095"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1096"]);
      model.grant(elements.id["ID_FMP_POWER_5667"]);
      model.grant(elements.id["ID_FMP_POWER_5668"]);
      model.grant(elements.id["ID_FMP_POWER_5669"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Draconic Antithesis"] = new RulesElement({
    name: "Draconic Antithesis",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_236",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=236",
    categories: ["Draconic Antithesis", "ID_FMP_PARAGON_PATH_236"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1118"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1119"]);
      model.grant(elements.id["ID_FMP_POWER_6003"]);
      model.grant(elements.id["ID_FMP_POWER_6004"]);
      model.grant(elements.id["ID_FMP_POWER_6005"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragon Marshal"] = new RulesElement({
    name: "Dragon Marshal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_235",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=235",
    categories: ["Dragon Marshal", "ID_FMP_PARAGON_PATH_235"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1116"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1117"]);
      model.grant(elements.id["ID_FMP_POWER_6000"]);
      model.grant(elements.id["ID_FMP_POWER_6001"]);
      model.grant(elements.id["ID_FMP_POWER_6002"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragonbane Pactmaker"] = new RulesElement({
    name: "Dragonbane Pactmaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_234",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=234",
    categories: ["Dragonbane Pactmaker", "ID_FMP_PARAGON_PATH_234"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1114"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1115"]);
      model.grant(elements.id["ID_FMP_POWER_5997"]);
      model.grant(elements.id["ID_FMP_POWER_5998"]);
      model.grant(elements.id["ID_FMP_POWER_5999"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hoard Raider"] = new RulesElement({
    name: "Hoard Raider",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_233",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=233",
    categories: ["Hoard Raider", "ID_FMP_PARAGON_PATH_233"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1112"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1113"]);
      model.grant(elements.id["ID_FMP_POWER_5994"]);
      model.grant(elements.id["ID_FMP_POWER_5995"]);
      model.grant(elements.id["ID_FMP_POWER_5996"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight of Unyielding Bastion"] = new RulesElement({
    name: "Knight of Unyielding Bastion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_231",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=231",
    categories: ["Knight of Unyielding Bastion", "ID_FMP_PARAGON_PATH_231"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1108"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1109"]);
      model.grant(elements.id["ID_FMP_POWER_5988"]);
      model.grant(elements.id["ID_FMP_POWER_5989"]);
      model.grant(elements.id["ID_FMP_POWER_5990"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Minotaur Kinspeaker"] = new RulesElement({
    name: "Minotaur Kinspeaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_228",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=228",
    categories: ["Minotaur Kinspeaker", "ID_FMP_PARAGON_PATH_228"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1100"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1101"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1102"]);
      model.grant(elements.id["ID_FMP_POWER_5673"]);
      model.grant(elements.id["ID_FMP_POWER_5674"]);
      model.grant(elements.id["ID_FMP_POWER_5675"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scale-Breaker"] = new RulesElement({
    name: "Scale-Breaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_230",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=230",
    categories: ["Scale-Breaker", "ID_FMP_PARAGON_PATH_230"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1106"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1107"]);
      model.grant(elements.id["ID_FMP_POWER_5985"]);
      model.grant(elements.id["ID_FMP_POWER_5986"]);
      model.grant(elements.id["ID_FMP_POWER_5987"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scourge of Io"] = new RulesElement({
    name: "Scourge of Io",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_229",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=229",
    categories: ["Scourge of Io", "ID_FMP_PARAGON_PATH_229"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1104"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1105"]);
      model.grant(elements.id["ID_FMP_POWER_5982"]);
      model.grant(elements.id["ID_FMP_POWER_5983"]);
      model.grant(elements.id["ID_FMP_POWER_5984"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wyrm-Hunter"] = new RulesElement({
    name: "Wyrm-Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_232",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=232",
    categories: ["Wyrm-Hunter", "ID_FMP_PARAGON_PATH_232"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1110"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1103"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1111"]);
      model.grant(elements.id["ID_FMP_POWER_5991"]);
      model.grant(elements.id["ID_FMP_POWER_5992"]);
      model.grant(elements.id["ID_FMP_POWER_5993"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
