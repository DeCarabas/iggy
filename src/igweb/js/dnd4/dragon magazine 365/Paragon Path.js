(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Draeven Marauder"] = new RulesElement({
    name: "Draeven Marauder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_152",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=152",
    categories: ["Draeven Marauder", "ID_FMP_PARAGON_PATH_152"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_864"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_865"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_866"]);
      model.grant(elements.id["ID_FMP_POWER_4178"]);
      model.grant(elements.id["ID_FMP_POWER_4179"]);
      model.grant(elements.id["ID_FMP_POWER_4180"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Luckbringer of Tymora"] = new RulesElement({
    name: "Luckbringer of Tymora",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_153",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=153",
    categories: ["Luckbringer of Tymora", "ID_FMP_PARAGON_PATH_153"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_867"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_868"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_869"]);
      model.grant(elements.id["ID_FMP_POWER_4181"]);
      model.grant(elements.id["ID_FMP_POWER_4182"]);
      model.grant(elements.id["ID_FMP_POWER_4183"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
