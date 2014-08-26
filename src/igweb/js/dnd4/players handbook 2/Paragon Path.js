define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Adroit Explorer"] = new engine.RulesElement({
    name: "Adroit Explorer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_241",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=241",
    categories: ["Adroit Explorer", "ID_FMP_PARAGON_PATH_241"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1149"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1150"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1151"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1152"]);
      model.grant(model.elements.id["ID_FMP_POWER_5474"]);
      model.grant(model.elements.id["ID_FMP_POWER_5475"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ancestral Incarnate"] = new engine.RulesElement({
    name: "Ancestral Incarnate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_242",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=242",
    categories: ["Ancestral Incarnate", "ID_FMP_PARAGON_PATH_242"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1153"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1154"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1155"]);
      model.grant(model.elements.id["ID_FMP_POWER_5468"]);
      model.grant(model.elements.id["ID_FMP_POWER_5469"]);
      model.grant(model.elements.id["ID_FMP_POWER_5470"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Angelic Aspect"] = new engine.RulesElement({
    name: "Angelic Aspect",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_270",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=270",
    categories: ["Angelic Aspect", "ID_FMP_PARAGON_PATH_270"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1239"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1240"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1241"]);
      model.grant(model.elements.id["ID_FMP_POWER_5196"]);
      model.grant(model.elements.id["ID_FMP_POWER_5197"]);
      model.grant(model.elements.id["ID_FMP_POWER_5509"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arcane Wellspring"] = new engine.RulesElement({
    name: "Arcane Wellspring",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_278",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=278",
    categories: ["Arcane Wellspring", "ID_FMP_PARAGON_PATH_278"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1267"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1268"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1269"]);
      model.grant(model.elements.id["ID_FMP_POWER_5319"]);
      model.grant(model.elements.id["ID_FMP_POWER_5320"]);
      model.grant(model.elements.id["ID_FMP_POWER_5321"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bear Warrior"] = new engine.RulesElement({
    name: "Bear Warrior",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_258",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=258",
    categories: ["Bear Warrior", "ID_FMP_PARAGON_PATH_258"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1206"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1207"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1208"]);
      model.grant(model.elements.id["ID_FMP_POWER_4978"]);
      model.grant(model.elements.id["ID_FMP_POWER_4979"]);
      model.grant(model.elements.id["ID_FMP_POWER_4980"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blightspeaker"] = new engine.RulesElement({
    name: "Blightspeaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_271",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=271",
    categories: ["Blightspeaker", "ID_FMP_PARAGON_PATH_271"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1242"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1243"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1244"]);
      model.grant(model.elements.id["ID_FMP_POWER_5198"]);
      model.grant(model.elements.id["ID_FMP_POWER_5199"]);
      model.grant(model.elements.id["ID_FMP_POWER_5200"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blood Moon Stalker"] = new engine.RulesElement({
    name: "Blood Moon Stalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_266",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=266",
    categories: ["Blood Moon Stalker", "ID_FMP_PARAGON_PATH_266"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1227"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1228"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1229"]);
      model.grant(model.elements.id["ID_FMP_POWER_5081"]);
      model.grant(model.elements.id["ID_FMP_POWER_5082"]);
      model.grant(model.elements.id["ID_FMP_POWER_5083"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bloodfury Savage"] = new engine.RulesElement({
    name: "Bloodfury Savage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_244",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=244",
    categories: ["Bloodfury Savage", "ID_FMP_PARAGON_PATH_244"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1160"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1161"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1162"]);
      model.grant(model.elements.id["ID_FMP_POWER_5471"]);
      model.grant(model.elements.id["ID_FMP_POWER_5472"]);
      model.grant(model.elements.id["ID_FMP_POWER_5473"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bloodwrath Guardian"] = new engine.RulesElement({
    name: "Bloodwrath Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_282",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=282",
    categories: ["Bloodwrath Guardian", "ID_FMP_PARAGON_PATH_282"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1283"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1284"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1285"]);
      model.grant(model.elements.id["ID_FMP_POWER_5172"]);
      model.grant(model.elements.id["ID_FMP_POWER_5173"]);
      model.grant(model.elements.id["ID_FMP_POWER_5174"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Demonskin Adept"] = new engine.RulesElement({
    name: "Demonskin Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_279",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=279",
    categories: ["Demonskin Adept", "ID_FMP_PARAGON_PATH_279"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1270"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1271"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1272"]);
      model.grant(model.elements.id["ID_FMP_POWER_5322"]);
      model.grant(model.elements.id["ID_FMP_POWER_5323"]);
      model.grant(model.elements.id["ID_FMP_POWER_5324"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Disciple of the World Serpent"] = new engine.RulesElement({
    name: "Disciple of the World Serpent",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_274",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=274",
    categories: ["Disciple of the World Serpent", "ID_FMP_PARAGON_PATH_274"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1253"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1254"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1255"]);
      model.grant(model.elements.id["ID_FMP_POWER_5420"]);
      model.grant(model.elements.id["ID_FMP_POWER_5421"]);
      model.grant(model.elements.id["ID_FMP_POWER_5422"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragonsoul Heir"] = new engine.RulesElement({
    name: "Dragonsoul Heir",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_280",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=280",
    categories: ["Dragonsoul Heir", "ID_FMP_PARAGON_PATH_280"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1273"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1274"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1275"]);
      model.grant(model.elements.id["ID_FMP_POWER_5325"]);
      model.grant(model.elements.id["ID_FMP_POWER_5326"]);
      model.grant(model.elements.id["ID_FMP_POWER_5327"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Fearbringer Thane"] = new engine.RulesElement({
    name: "Fearbringer Thane",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_259",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=259",
    categories: ["Fearbringer Thane", "ID_FMP_PARAGON_PATH_259"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1209"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1211"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1210"]);
      model.grant(model.elements.id["ID_FMP_POWER_4981"]);
      model.grant(model.elements.id["ID_FMP_POWER_4982"]);
      model.grant(model.elements.id["ID_FMP_POWER_4983"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Fey Beguiler"] = new engine.RulesElement({
    name: "Fey Beguiler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_245",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=245",
    categories: ["Fey Beguiler", "ID_FMP_PARAGON_PATH_245"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1163"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1164"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1165"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1166"]);
      model.grant(model.elements.id["ID_FMP_POWER_5476"]);
      model.grant(model.elements.id["ID_FMP_POWER_5477"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Firstborn of Moradin"] = new engine.RulesElement({
    name: "Firstborn of Moradin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_246",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=246",
    categories: ["Firstborn of Moradin", "ID_FMP_PARAGON_PATH_246"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1167"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1168"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1169"]);
      model.grant(model.elements.id["ID_FMP_POWER_5478"]);
      model.grant(model.elements.id["ID_FMP_POWER_5479"]);
      model.grant(model.elements.id["ID_FMP_POWER_5480"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Flame of Hope"] = new engine.RulesElement({
    name: "Flame of Hope",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_272",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=272",
    categories: ["Flame of Hope", "ID_FMP_PARAGON_PATH_272"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1245"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1246"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1247"]);
      model.grant(model.elements.id["ID_FMP_POWER_5201"]);
      model.grant(model.elements.id["ID_FMP_POWER_5202"]);
      model.grant(model.elements.id["ID_FMP_POWER_5203"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Frenzied Berserker"] = new engine.RulesElement({
    name: "Frenzied Berserker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_214",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=214",
    categories: ["Frenzied Berserker", "ID_FMP_PARAGON_PATH_214"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1054"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1055"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1056"]);
      model.grant(model.elements.id["ID_FMP_POWER_4861"]);
      model.grant(model.elements.id["ID_FMP_POWER_4862"]);
      model.grant(model.elements.id["ID_FMP_POWER_4863"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ghost Panther"] = new engine.RulesElement({
    name: "Ghost Panther",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_275",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=275",
    categories: ["Ghost Panther", "ID_FMP_PARAGON_PATH_275"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1257"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1256"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1258"]);
      model.grant(model.elements.id["ID_FMP_POWER_5423"]);
      model.grant(model.elements.id["ID_FMP_POWER_5424"]);
      model.grant(model.elements.id["ID_FMP_POWER_5425"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Great Bear Shaman"] = new engine.RulesElement({
    name: "Great Bear Shaman",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_276",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=276",
    categories: ["Great Bear Shaman", "ID_FMP_PARAGON_PATH_276"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1259"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1260"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1261"]);
      model.grant(model.elements.id["ID_FMP_POWER_5426"]);
      model.grant(model.elements.id["ID_FMP_POWER_5427"]);
      model.grant(model.elements.id["ID_FMP_POWER_5428"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Guardian of the Living Gate"] = new engine.RulesElement({
    name: "Guardian of the Living Gate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_267",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=267",
    categories: ["Guardian of the Living Gate", "ID_FMP_PARAGON_PATH_267"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1230"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1231"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1232"]);
      model.grant(model.elements.id["ID_FMP_POWER_5084"]);
      model.grant(model.elements.id["ID_FMP_POWER_5085"]);
      model.grant(model.elements.id["ID_FMP_POWER_5086"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Halfling Scoundrel"] = new engine.RulesElement({
    name: "Halfling Scoundrel",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_247",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=247",
    categories: ["Halfling Scoundrel", "ID_FMP_PARAGON_PATH_247"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1170"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1171"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1172"]);
      model.grant(model.elements.id["ID_FMP_POWER_5481"]);
      model.grant(model.elements.id["ID_FMP_POWER_5482"]);
      model.grant(model.elements.id["ID_FMP_POWER_5483"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hammer of Judgment"] = new engine.RulesElement({
    name: "Hammer of Judgment",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_254",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=254",
    categories: ["Hammer of Judgment", "ID_FMP_PARAGON_PATH_254"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1194"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1195"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1196"]);
      model.grant(model.elements.id["ID_FMP_POWER_5354"]);
      model.grant(model.elements.id["ID_FMP_POWER_5355"]);
      model.grant(model.elements.id["ID_FMP_POWER_5356"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hammer of Vengeance (PH2)"] = new engine.RulesElement({
    name: "Hammer of Vengeance (PH2)",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_273",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=273",
    categories: ["Hammer of Vengeance (PH2)", "ID_FMP_PARAGON_PATH_273"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1248"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1249"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1250"]);
      model.grant(model.elements.id["ID_FMP_POWER_5204"]);
      model.grant(model.elements.id["ID_FMP_POWER_5205"]);
      model.grant(model.elements.id["ID_FMP_POWER_5206"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Horned Champion"] = new engine.RulesElement({
    name: "Horned Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_227",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=227",
    categories: ["Horned Champion", "ID_FMP_PARAGON_PATH_227"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1501"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1494"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1495"]);
      model.grant(model.elements.id["ID_FMP_POWER_5175"]);
      model.grant(model.elements.id["ID_FMP_POWER_5176"]);
      model.grant(model.elements.id["ID_FMP_POWER_5177"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Keeper of the Hidden Flame"] = new engine.RulesElement({
    name: "Keeper of the Hidden Flame",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_268",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=268",
    categories: ["Keeper of the Hidden Flame", "ID_FMP_PARAGON_PATH_268"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1233"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1234"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1235"]);
      model.grant(model.elements.id["ID_FMP_POWER_5087"]);
      model.grant(model.elements.id["ID_FMP_POWER_5088"]);
      model.grant(model.elements.id["ID_FMP_POWER_5089"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Moonstalker"] = new engine.RulesElement({
    name: "Moonstalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_248",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=248",
    categories: ["Moonstalker", "ID_FMP_PARAGON_PATH_248"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1173"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1174"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1175"]);
      model.grant(model.elements.id["ID_FMP_POWER_5484"]);
      model.grant(model.elements.id["ID_FMP_POWER_5485"]);
      model.grant(model.elements.id["ID_FMP_POWER_5486"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Oathsworn"] = new engine.RulesElement({
    name: "Oathsworn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_255",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=255",
    categories: ["Oathsworn", "ID_FMP_PARAGON_PATH_255"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1197"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1198"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1199"]);
      model.grant(model.elements.id["ID_FMP_POWER_5357"]);
      model.grant(model.elements.id["ID_FMP_POWER_5358"]);
      model.grant(model.elements.id["ID_FMP_POWER_5359"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of Arkhosia"] = new engine.RulesElement({
    name: "Scion of Arkhosia",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_249",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=249",
    categories: ["Scion of Arkhosia", "ID_FMP_PARAGON_PATH_249"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1176"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1177"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1178"]);
      model.grant(model.elements.id["ID_FMP_POWER_5487"]);
      model.grant(model.elements.id["ID_FMP_POWER_5488"]);
      model.grant(model.elements.id["ID_FMP_POWER_5489"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shiere Knight"] = new engine.RulesElement({
    name: "Shiere Knight",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_250",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=250",
    categories: ["Shiere Knight", "ID_FMP_PARAGON_PATH_250"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1179"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1180"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1181"]);
      model.grant(model.elements.id["ID_FMP_POWER_5490"]);
      model.grant(model.elements.id["ID_FMP_POWER_5491"]);
      model.grant(model.elements.id["ID_FMP_POWER_6221"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sky Hunter"] = new engine.RulesElement({
    name: "Sky Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_269",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=269",
    categories: ["Sky Hunter", "ID_FMP_PARAGON_PATH_269"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1236"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1237"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1238"]);
      model.grant(model.elements.id["ID_FMP_POWER_5090"]);
      model.grant(model.elements.id["ID_FMP_POWER_5091"]);
      model.grant(model.elements.id["ID_FMP_POWER_5092"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spirit Tempest"] = new engine.RulesElement({
    name: "Spirit Tempest",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_277",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=277",
    categories: ["Spirit Tempest", "ID_FMP_PARAGON_PATH_277"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1262"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1263"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1264"]);
      model.grant(model.elements.id["ID_FMP_POWER_5429"]);
      model.grant(model.elements.id["ID_FMP_POWER_5430"]);
      model.grant(model.elements.id["ID_FMP_POWER_5431"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stoneblessed"] = new engine.RulesElement({
    name: "Stoneblessed",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_251",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=251",
    categories: ["Stoneblessed", "ID_FMP_PARAGON_PATH_251"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1182"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1183"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1184"]);
      model.grant(model.elements.id["ID_FMP_POWER_5492"]);
      model.grant(model.elements.id["ID_FMP_POWER_5493"]);
      model.grant(model.elements.id["ID_FMP_POWER_5494"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storm Sentinel"] = new engine.RulesElement({
    name: "Storm Sentinel",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_284",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=284",
    categories: ["Storm Sentinel", "ID_FMP_PARAGON_PATH_284"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1286"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1287"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1288"]);
      model.grant(model.elements.id["ID_FMP_POWER_5178"]);
      model.grant(model.elements.id["ID_FMP_POWER_5179"]);
      model.grant(model.elements.id["ID_FMP_POWER_5180"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Student of the Seven"] = new engine.RulesElement({
    name: "Student of the Seven",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_262",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=262",
    categories: ["Student of the Seven", "ID_FMP_PARAGON_PATH_262"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1215"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1216"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1217"]);
      model.grant(model.elements.id["ID_FMP_POWER_5020"]);
      model.grant(model.elements.id["ID_FMP_POWER_5021"]);
      model.grant(model.elements.id["ID_FMP_POWER_5022"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Summer Rhymer"] = new engine.RulesElement({
    name: "Summer Rhymer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_263",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=263",
    categories: ["Summer Rhymer", "ID_FMP_PARAGON_PATH_263"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1218"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1219"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1220"]);
      model.grant(model.elements.id["ID_FMP_POWER_5023"]);
      model.grant(model.elements.id["ID_FMP_POWER_5024"]);
      model.grant(model.elements.id["ID_FMP_POWER_5025"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Turathi Highborn"] = new engine.RulesElement({
    name: "Turathi Highborn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_252",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=252",
    categories: ["Turathi Highborn", "ID_FMP_PARAGON_PATH_252"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1185"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1186"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1187"]);
      model.grant(model.elements.id["ID_FMP_POWER_5495"]);
      model.grant(model.elements.id["ID_FMP_POWER_5496"]);
      model.grant(model.elements.id["ID_FMP_POWER_5497"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Twilight Guardian"] = new engine.RulesElement({
    name: "Twilight Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_253",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=253",
    categories: ["Twilight Guardian", "ID_FMP_PARAGON_PATH_253"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1188"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1189"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1190"]);
      model.grant(model.elements.id["ID_FMP_POWER_5498"]);
      model.grant(model.elements.id["ID_FMP_POWER_5499"]);
      model.grant(model.elements.id["ID_FMP_POWER_5500"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Unveiled Visage"] = new engine.RulesElement({
    name: "Unveiled Visage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_256",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=256",
    categories: ["Unveiled Visage", "ID_FMP_PARAGON_PATH_256"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1200"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1201"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1202"]);
      model.grant(model.elements.id["ID_FMP_POWER_5360"]);
      model.grant(model.elements.id["ID_FMP_POWER_5361"]);
      model.grant(model.elements.id["ID_FMP_POWER_5362"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Verdant Lord"] = new engine.RulesElement({
    name: "Verdant Lord",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_285",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=285",
    categories: ["Verdant Lord", "ID_FMP_PARAGON_PATH_285"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1289"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1290"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1291"]);
      model.grant(model.elements.id["ID_FMP_POWER_5181"]);
      model.grant(model.elements.id["ID_FMP_POWER_5182"]);
      model.grant(model.elements.id["ID_FMP_POWER_5183"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Voice of Thunder"] = new engine.RulesElement({
    name: "Voice of Thunder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_264",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=264",
    categories: ["Voice of Thunder", "ID_FMP_PARAGON_PATH_264"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1221"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1222"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1223"]);
      model.grant(model.elements.id["ID_FMP_POWER_5026"]);
      model.grant(model.elements.id["ID_FMP_POWER_5027"]);
      model.grant(model.elements.id["ID_FMP_POWER_5028"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["War Chanter"] = new engine.RulesElement({
    name: "War Chanter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_265",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=265",
    categories: ["War Chanter", "ID_FMP_PARAGON_PATH_265"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1224"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1225"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1226"]);
      model.grant(model.elements.id["ID_FMP_POWER_5029"]);
      model.grant(model.elements.id["ID_FMP_POWER_5030"]);
      model.grant(model.elements.id["ID_FMP_POWER_5031"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wild Mage"] = new engine.RulesElement({
    name: "Wild Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_281",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=281",
    categories: ["Wild Mage", "ID_FMP_PARAGON_PATH_281"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1277"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1278"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1279"]);
      model.grant(model.elements.id["ID_FMP_POWER_5328"]);
      model.grant(model.elements.id["ID_FMP_POWER_5329"]);
      model.grant(model.elements.id["ID_FMP_POWER_5514"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wildrunner"] = new engine.RulesElement({
    name: "Wildrunner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_261",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=261",
    categories: ["Wildrunner", "ID_FMP_PARAGON_PATH_261"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1212"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1213"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1214"]);
      model.grant(model.elements.id["ID_FMP_POWER_4984"]);
      model.grant(model.elements.id["ID_FMP_POWER_4985"]);
      model.grant(model.elements.id["ID_FMP_POWER_4986"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Zealous Assassin"] = new engine.RulesElement({
    name: "Zealous Assassin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_257",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=257",
    categories: ["Zealous Assassin", "ID_FMP_PARAGON_PATH_257"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1203"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1204"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1205"]);
      model.grant(model.elements.id["ID_FMP_POWER_5363"]);
      model.grant(model.elements.id["ID_FMP_POWER_5364"]);
      model.grant(model.elements.id["ID_FMP_POWER_5365"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
