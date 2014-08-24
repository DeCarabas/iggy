(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Arcane Sword"] = new RulesElement({
    name: "Arcane Sword",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_335",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=335",
    categories: ["Arcane Sword", "ID_FMP_EPIC_DESTINY_335"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1453"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1451"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1452"]);
      model.grant(elements.id["ID_FMP_POWER_6924"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Archlich"] = new RulesElement({
    name: "Archlich",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_336",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=336",
    categories: ["Archlich", "ID_FMP_EPIC_DESTINY_336"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1456"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1454"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1455"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1457"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1458"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1459"]);
      model.grant(elements.id["ID_FMP_POWER_6925"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Archspell"] = new RulesElement({
    name: "Archspell",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_337",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=337",
    categories: ["Archspell", "ID_FMP_EPIC_DESTINY_337"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1460"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1461"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1462"]);
      model.grant(elements.id["ID_FMP_POWER_6926"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Feyliege"] = new RulesElement({
    name: "Feyliege",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_338",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=338",
    categories: ["Feyliege", "ID_FMP_EPIC_DESTINY_338"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1463"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1464"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1465"]);
      model.grant(elements.id["ID_FMP_POWER_6927"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Immanence"] = new RulesElement({
    name: "Immanence",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_339",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=339",
    categories: ["Immanence", "ID_FMP_EPIC_DESTINY_339"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1467"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1468"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1469"]);
      model.grant(elements.id["ID_FMP_POWER_6928"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Lord of Fate"] = new RulesElement({
    name: "Lord of Fate",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_340",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=340",
    categories: ["Lord of Fate", "ID_FMP_EPIC_DESTINY_340"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1470"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1471"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1472"]);
      model.grant(elements.id["ID_FMP_POWER_6929"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Magister"] = new RulesElement({
    name: "Magister",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_341",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=341",
    categories: ["Magister", "ID_FMP_EPIC_DESTINY_341"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1473"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1474"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1475"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1476"]);
      model.grant(elements.id["ID_FMP_POWER_6930"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Parable"] = new RulesElement({
    name: "Parable",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_342",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=342",
    categories: ["Parable", "ID_FMP_EPIC_DESTINY_342"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1477"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1478"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1479"]);
      model.grant(elements.id["ID_FMP_POWER_6931"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Sage of Ages"] = new RulesElement({
    name: "Sage of Ages",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_343",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=343",
    categories: ["Sage of Ages", "ID_FMP_EPIC_DESTINY_343"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1480"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1481"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1482"]);
      model.grant(elements.id["ID_FMP_POWER_6932"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
