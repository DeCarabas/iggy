(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Falling Needle Itinerant"] = new RulesElement({
    name: "Falling Needle Itinerant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_747",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=747",
    categories: ["Falling Needle Itinerant", "ID_FMP_PARAGON_PATH_747"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2996"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2997"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2998"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2999"]);
      model.grant(elements.id["ID_FMP_POWER_13236"]);
      model.grant(elements.id["ID_FMP_POWER_13238"]);
      model.grant(elements.id["ID_FMP_POWER_13239"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of Leng"] = new RulesElement({
    name: "Scion of Leng",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_706",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=706",
    categories: ["Scion of Leng", "ID_FMP_PARAGON_PATH_706"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2819"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2820"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2821"]);
      model.grant(elements.id["ID_FMP_POWER_12783"]);
      model.grant(elements.id["ID_FMP_POWER_12784"]);
      model.grant(elements.id["ID_FMP_POWER_12785"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
