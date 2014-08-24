(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Fear Walker"] = new RulesElement({
    name: "Fear Walker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_695",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=695",
    categories: ["Fear Walker", "ID_FMP_PARAGON_PATH_695"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2712"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2713"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2714"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2715"]);
      model.grant(elements.id["ID_FMP_POWER_12578"]);
      model.grant(elements.id["ID_FMP_POWER_12579"]);
      model.grant(elements.id["ID_FMP_POWER_12580"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gloaming Dancer"] = new RulesElement({
    name: "Gloaming Dancer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_694",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=694",
    categories: ["Gloaming Dancer", "ID_FMP_PARAGON_PATH_694"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2708"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2709"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2710"]);
      model.grant(elements.id["ID_FMP_POWER_12574"]);
      model.grant(elements.id["ID_FMP_POWER_12575"]);
      model.grant(elements.id["ID_FMP_POWER_12576"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master of Flame"] = new RulesElement({
    name: "Master of Flame",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_692",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=692",
    categories: ["Master of Flame", "ID_FMP_PARAGON_PATH_692"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2702"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2703"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2704"]);
      model.grant(elements.id["ID_FMP_POWER_12557"]);
      model.grant(elements.id["ID_FMP_POWER_12558"]);
      model.grant(elements.id["ID_FMP_POWER_12559"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Treeborn"] = new RulesElement({
    name: "Treeborn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_693",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=693",
    categories: ["Treeborn", "ID_FMP_PARAGON_PATH_693"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2705"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2706"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2707"]);
      model.grant(elements.id["ID_FMP_POWER_12560"]);
      model.grant(elements.id["ID_FMP_POWER_12561"]);
      model.grant(elements.id["ID_FMP_POWER_12562"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
