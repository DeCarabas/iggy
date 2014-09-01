define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Darklord"] = new engine.RulesElement({
    name: "Darklord",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_296",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=296",
    categories: ["Darklord", "ID_FMP_EPIC_DESTINY_296"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1326"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1327"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1328"]);
      model.grant(model.elements.id["ID_FMP_POWER_6599"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Keybearer"] = new engine.RulesElement({
    name: "Keybearer",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_297",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=297",
    categories: ["Keybearer", "ID_FMP_EPIC_DESTINY_297"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1329"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1330"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1331"]);
      model.grant(model.elements.id["ID_FMP_POWER_6600"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Planeshaper"] = new engine.RulesElement({
    name: "Planeshaper",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_298",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=298",
    categories: ["Planeshaper", "ID_FMP_EPIC_DESTINY_298"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1332"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1334"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1333"]);
      model.grant(model.elements.id["ID_FMP_POWER_6601"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Prince of Hell"] = new engine.RulesElement({
    name: "Prince of Hell",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_299",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=299",
    categories: ["Prince of Hell", "ID_FMP_EPIC_DESTINY_299"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1335"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1336"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1337"]);
      model.grant(model.elements.id["ID_FMP_POWER_6602"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Raven Consort"] = new engine.RulesElement({
    name: "Raven Consort",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_346",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=346",
    categories: ["Raven Consort", "ID_FMP_EPIC_DESTINY_346"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1489"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1490"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1491"]);
      model.grant(model.elements.id["ID_FMP_POWER_6971"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Storm Sovereign"] = new engine.RulesElement({
    name: "Storm Sovereign",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_301",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=301",
    categories: ["Storm Sovereign", "ID_FMP_EPIC_DESTINY_301"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1341"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1342"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1343"]);
      model.grant(model.elements.id["ID_FMP_POWER_6606"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Winter Sovereign"] = new engine.RulesElement({
    name: "Winter Sovereign",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_302",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=302",
    categories: ["Winter Sovereign", "ID_FMP_EPIC_DESTINY_302"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1344"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1345"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1346"]);
      model.grant(model.elements.id["ID_FMP_POWER_6607"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
