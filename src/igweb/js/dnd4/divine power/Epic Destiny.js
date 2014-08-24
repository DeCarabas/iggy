(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Avatar of Death"] = new RulesElement({
    name: "Avatar of Death",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_430",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=430",
    categories: ["Avatar of Death", "ID_FMP_EPIC_DESTINY_430"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1781"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1782"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1783"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1784"]);
      model.grant(elements.id["ID_FMP_POWER_8205"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of Freedom"] = new RulesElement({
    name: "Avatar of Freedom",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_431",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=431",
    categories: ["Avatar of Freedom", "ID_FMP_EPIC_DESTINY_431"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1785"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1786"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1787"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1788"]);
      model.grant(elements.id["ID_FMP_POWER_8206"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of Hope"] = new RulesElement({
    name: "Avatar of Hope",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_432",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=432",
    categories: ["Avatar of Hope", "ID_FMP_EPIC_DESTINY_432"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1789"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1790"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1791"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1792"]);
      model.grant(elements.id["ID_FMP_POWER_8207"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of Justice"] = new RulesElement({
    name: "Avatar of Justice",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_433",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=433",
    categories: ["Avatar of Justice", "ID_FMP_EPIC_DESTINY_433"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1793"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1794"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1795"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1796"]);
      model.grant(elements.id["ID_FMP_POWER_8208"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of Life"] = new RulesElement({
    name: "Avatar of Life",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_434",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=434",
    categories: ["Avatar of Life", "ID_FMP_EPIC_DESTINY_434"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1797"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1798"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1799"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1800"]);
      model.grant(elements.id["ID_FMP_POWER_8209"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of Storm"] = new RulesElement({
    name: "Avatar of Storm",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_435",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=435",
    categories: ["Avatar of Storm", "ID_FMP_EPIC_DESTINY_435"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1801"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1802"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1803"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1804"]);
      model.grant(elements.id["ID_FMP_POWER_8210"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Avatar of War"] = new RulesElement({
    name: "Avatar of War",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_436",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=436",
    categories: ["Avatar of War", "ID_FMP_EPIC_DESTINY_436"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1805"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1806"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1807"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1808"]);
      model.grant(elements.id["ID_FMP_POWER_8211"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Exalted Angel"] = new RulesElement({
    name: "Exalted Angel",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_448",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=448",
    categories: ["Exalted Angel", "ID_FMP_EPIC_DESTINY_448"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1855"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1856"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1857"]);
      model.grant(elements.id["ID_FMP_POWER_8271"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Saint"] = new RulesElement({
    name: "Saint",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_449",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=449",
    categories: ["Saint", "ID_FMP_EPIC_DESTINY_449"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1858"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1859"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1860"]);
      model.grant(elements.id["ID_FMP_POWER_8272"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);