define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Blade of Cendriane"] = new engine.RulesElement({
    name: "Blade of Cendriane",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_218",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=218",
    categories: ["Blade of Cendriane", "ID_FMP_PARAGON_PATH_218"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1067"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1068"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1069"]);
      model.grant(model.elements.id["ID_FMP_POWER_5601"]);
      model.grant(model.elements.id["ID_FMP_POWER_5602"]);
      model.grant(model.elements.id["ID_FMP_POWER_5603"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Doomguard Marauder"] = new engine.RulesElement({
    name: "Doomguard Marauder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_219",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=219",
    categories: ["Doomguard Marauder", "ID_FMP_PARAGON_PATH_219"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1070"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1071"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1072"]);
      model.grant(model.elements.id["ID_FMP_POWER_5604"]);
      model.grant(model.elements.id["ID_FMP_POWER_5605"]);
      model.grant(model.elements.id["ID_FMP_POWER_5606"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gatecrasher"] = new engine.RulesElement({
    name: "Gatecrasher",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_220",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=220",
    categories: ["Gatecrasher", "ID_FMP_PARAGON_PATH_220"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1073"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1074"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1075"]);
      model.grant(model.elements.id["ID_FMP_POWER_5607"]);
      model.grant(model.elements.id["ID_FMP_POWER_5608"]);
      model.grant(model.elements.id["ID_FMP_POWER_5644"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight of Celestia"] = new engine.RulesElement({
    name: "Knight of Celestia",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_221",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=221",
    categories: ["Knight of Celestia", "ID_FMP_PARAGON_PATH_221"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1076"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1077"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1078"]);
      model.grant(model.elements.id["ID_FMP_POWER_5650"]);
      model.grant(model.elements.id["ID_FMP_POWER_5651"]);
      model.grant(model.elements.id["ID_FMP_POWER_5652"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Malec-Keth Janissary"] = new engine.RulesElement({
    name: "Malec-Keth Janissary",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_222",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=222",
    categories: ["Malec-Keth Janissary", "ID_FMP_PARAGON_PATH_222"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1079"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1080"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1081"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1082"]);
      model.grant(model.elements.id["ID_FMP_POWER_5653"]);
      model.grant(model.elements.id["ID_FMP_POWER_5654"]);
      model.grant(model.elements.id["ID_FMP_POWER_5655"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Planeshifter"] = new engine.RulesElement({
    name: "Planeshifter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_223",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=223",
    categories: ["Planeshifter", "ID_FMP_PARAGON_PATH_223"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1083"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1084"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1085"]);
      model.grant(model.elements.id["ID_FMP_POWER_5656"]);
      model.grant(model.elements.id["ID_FMP_POWER_5657"]);
      model.grant(model.elements.id["ID_FMP_POWER_5658"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shadow Captain"] = new engine.RulesElement({
    name: "Shadow Captain",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_224",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=224",
    categories: ["Shadow Captain", "ID_FMP_PARAGON_PATH_224"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1086"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1087"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1088"]);
      model.grant(model.elements.id["ID_FMP_POWER_5659"]);
      model.grant(model.elements.id["ID_FMP_POWER_5660"]);
      model.grant(model.elements.id["ID_FMP_POWER_5661"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soul Guide"] = new engine.RulesElement({
    name: "Soul Guide",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_225",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=225",
    categories: ["Soul Guide", "ID_FMP_PARAGON_PATH_225"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1089"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1090"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1091"]);
      model.grant(model.elements.id["ID_FMP_POWER_5662"]);
      model.grant(model.elements.id["ID_FMP_POWER_5664"]);
      model.grant(model.elements.id["ID_FMP_POWER_5665"]);
      model.grant(model.elements.id["ID_FMP_POWER_5666"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
