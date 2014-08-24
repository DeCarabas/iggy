(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Honorable Blade"] = new RulesElement({
    name: "Honorable Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_534",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=534",
    categories: ["Honorable Blade", "ID_FMP_PARAGON_PATH_534"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2152"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2153"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2125"]);
      model.grant(elements.id["ID_FMP_POWER_10364"]);
      model.grant(elements.id["ID_FMP_POWER_10365"]);
      model.grant(elements.id["ID_FMP_POWER_10366"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ninefold Master"] = new RulesElement({
    name: "Ninefold Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_525",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=525",
    categories: ["Ninefold Master", "ID_FMP_PARAGON_PATH_525"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2122"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2124"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2125"]);
      model.grant(elements.id["ID_FMP_POWER_10115"]);
      model.grant(elements.id["ID_FMP_POWER_10116"]);
      model.grant(elements.id["ID_FMP_POWER_10117"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Platinum Templar"] = new RulesElement({
    name: "Platinum Templar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_533",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=533",
    categories: ["Platinum Templar", "ID_FMP_PARAGON_PATH_533"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2149"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2150"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2151"]);
      model.grant(elements.id["ID_FMP_POWER_10360"]);
      model.grant(elements.id["ID_FMP_POWER_10361"]);
      model.grant(elements.id["ID_FMP_POWER_10363"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storm Dragon"] = new RulesElement({
    name: "Storm Dragon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_535",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=535",
    categories: ["Storm Dragon", "ID_FMP_PARAGON_PATH_535"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2155"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2156"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2157"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2158"]);
      model.grant(elements.id["ID_FMP_POWER_10367"]);
      model.grant(elements.id["ID_FMP_POWER_10368"]);
      model.grant(elements.id["ID_FMP_POWER_10369"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
