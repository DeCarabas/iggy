define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Champion of Prophecy"] = new engine.RulesElement({
    name: "Champion of Prophecy",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_387",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=387",
    categories: ["Champion of Prophecy", "ID_FMP_EPIC_DESTINY_387"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1644"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1645"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1646"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1647"]);
      model.grant(model.elements.id["ID_FMP_POWER_7617"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Dispossesed Champion"] = new engine.RulesElement({
    name: "Dispossesed Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_388",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=388",
    categories: ["Dispossesed Champion", "ID_FMP_EPIC_DESTINY_388"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1648"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1649"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1650"]);
      model.grant(model.elements.id["ID_FMP_POWER_7618"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Mourning Savior"] = new engine.RulesElement({
    name: "Mourning Savior",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_389",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=389",
    categories: ["Mourning Savior", "ID_FMP_EPIC_DESTINY_389"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1651"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1652"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1653"]);
      model.grant(model.elements.id["ID_FMP_POWER_7619"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Sublime Flame"] = new engine.RulesElement({
    name: "Sublime Flame",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_390",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=390",
    categories: ["Sublime Flame", "ID_FMP_EPIC_DESTINY_390"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1654"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1655"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1656"]);
      model.grant(model.elements.id["ID_FMP_POWER_7620"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
