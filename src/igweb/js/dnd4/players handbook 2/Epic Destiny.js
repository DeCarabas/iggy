define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Fatesinger"] = new engine.RulesElement({
    name: "Fatesinger",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_286",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=286",
    categories: ["Fatesinger", "ID_FMP_EPIC_DESTINY_286"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1292"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1293"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1294"]);
      model.grant(model.elements.id["ID_FMP_POWER_5462"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Glorious Spirit"] = new engine.RulesElement({
    name: "Glorious Spirit",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_287",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=287",
    categories: ["Glorious Spirit", "ID_FMP_EPIC_DESTINY_287"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1295"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1296"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1297"]);
      model.grant(model.elements.id["ID_FMP_POWER_5463"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Harbinger of Doom"] = new engine.RulesElement({
    name: "Harbinger of Doom",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_288",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=288",
    categories: ["Harbinger of Doom", "ID_FMP_EPIC_DESTINY_288"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1298"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1299"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1300"]);
      model.grant(model.elements.id["ID_FMP_POWER_5464"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Lorekeeper"] = new engine.RulesElement({
    name: "Lorekeeper",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_289",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=289",
    categories: ["Lorekeeper", "ID_FMP_EPIC_DESTINY_289"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1301"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1302"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1303"]);
      model.grant(model.elements.id["ID_FMP_POWER_5465"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Primal Avatar"] = new engine.RulesElement({
    name: "Primal Avatar",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_243",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=243",
    categories: ["Primal Avatar", "ID_FMP_EPIC_DESTINY_243"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1157"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1158"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1159"]);
      model.grant(model.elements.id["ID_FMP_POWER_5466"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Revered One"] = new engine.RulesElement({
    name: "Revered One",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_291",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=291",
    categories: ["Revered One", "ID_FMP_EPIC_DESTINY_291"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1304"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1305"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1306"]);
      model.grant(model.elements.id["ID_FMP_POWER_5467"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
