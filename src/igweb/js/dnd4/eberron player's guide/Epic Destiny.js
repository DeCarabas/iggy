(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Champion of Prophecy"] = new RulesElement({
    name: "Champion of Prophecy",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_387",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=387",
    categories: ["Champion of Prophecy", "ID_FMP_EPIC_DESTINY_387"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1644"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1645"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1646"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1647"]);
      model.grant(elements.id["ID_FMP_POWER_7617"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Dispossesed Champion"] = new RulesElement({
    name: "Dispossesed Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_388",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=388",
    categories: ["Dispossesed Champion", "ID_FMP_EPIC_DESTINY_388"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1648"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1649"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1650"]);
      model.grant(elements.id["ID_FMP_POWER_7618"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Mourning Savior"] = new RulesElement({
    name: "Mourning Savior",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_389",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=389",
    categories: ["Mourning Savior", "ID_FMP_EPIC_DESTINY_389"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1651"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1652"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1653"]);
      model.grant(elements.id["ID_FMP_POWER_7619"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Sublime Flame"] = new RulesElement({
    name: "Sublime Flame",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_390",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=390",
    categories: ["Sublime Flame", "ID_FMP_EPIC_DESTINY_390"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1654"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1655"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1656"]);
      model.grant(elements.id["ID_FMP_POWER_7620"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
