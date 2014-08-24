(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Darklord"] = new RulesElement({
    name: "Darklord",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_296",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=296",
    categories: ["Darklord", "ID_FMP_EPIC_DESTINY_296"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1326"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1327"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1328"]);
      model.grant(elements.id["ID_FMP_POWER_6599"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Keybearer"] = new RulesElement({
    name: "Keybearer",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_297",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=297",
    categories: ["Keybearer", "ID_FMP_EPIC_DESTINY_297"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1329"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1330"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1331"]);
      model.grant(elements.id["ID_FMP_POWER_6600"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Planeshaper"] = new RulesElement({
    name: "Planeshaper",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_298",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=298",
    categories: ["Planeshaper", "ID_FMP_EPIC_DESTINY_298"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1332"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1334"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1333"]);
      model.grant(elements.id["ID_FMP_POWER_6601"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Prince of Hell"] = new RulesElement({
    name: "Prince of Hell",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_299",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=299",
    categories: ["Prince of Hell", "ID_FMP_EPIC_DESTINY_299"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1335"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1336"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1337"]);
      model.grant(elements.id["ID_FMP_POWER_6602"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Raven Consort"] = new RulesElement({
    name: "Raven Consort",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_346",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=346",
    categories: ["Raven Consort", "ID_FMP_EPIC_DESTINY_346"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1489"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1490"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1491"]);
      model.grant(elements.id["ID_FMP_POWER_6971"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Storm Sovereign"] = new RulesElement({
    name: "Storm Sovereign",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_301",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=301",
    categories: ["Storm Sovereign", "ID_FMP_EPIC_DESTINY_301"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1341"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1342"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1343"]);
      model.grant(elements.id["ID_FMP_POWER_6606"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Winter Sovereign"] = new RulesElement({
    name: "Winter Sovereign",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_302",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=302",
    categories: ["Winter Sovereign", "ID_FMP_EPIC_DESTINY_302"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1344"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1345"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1346"]);
      model.grant(elements.id["ID_FMP_POWER_6607"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
