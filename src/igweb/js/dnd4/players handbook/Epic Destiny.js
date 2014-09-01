define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Archmage"] = new engine.RulesElement({
    name: "Archmage",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_13",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=13",
    categories: ["Archmage", "ID_FMP_EPIC_DESTINY_13"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_284"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_525"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_286"]);
      model.grant(model.elements.id["ID_FMP_POWER_1752"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Deadly Trickster"] = new engine.RulesElement({
    name: "Deadly Trickster",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_58",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=58",
    categories: ["Deadly Trickster", "ID_FMP_EPIC_DESTINY_58"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_299"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_687"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_688"]);
      model.grant(model.elements.id["ID_FMP_POWER_1753"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Demigod"] = new engine.RulesElement({
    name: "Demigod",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_54",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=54",
    categories: ["Demigod", "ID_FMP_EPIC_DESTINY_54"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_527"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_529"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_690"]);
      model.grant(model.elements.id["ID_FMP_POWER_2283"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Eternal Seeker"] = new engine.RulesElement({
    name: "Eternal Seeker",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_56",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=56",
    categories: ["Eternal Seeker", "ID_FMP_EPIC_DESTINY_56"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_536"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_691"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_692"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_693"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
