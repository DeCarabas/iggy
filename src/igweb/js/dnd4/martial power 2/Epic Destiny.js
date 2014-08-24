(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Dragonheart"] = new RulesElement({
    name: "Dragonheart",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_582",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=582",
    categories: ["Dragonheart", "ID_FMP_EPIC_DESTINY_582"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2317"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2318"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2320"]);
      model.grant(elements.id["ID_FMP_POWER_11026"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Invincible Vanguard"] = new RulesElement({
    name: "Invincible Vanguard",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_583",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=583",
    categories: ["Invincible Vanguard", "ID_FMP_EPIC_DESTINY_583"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2321"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2322"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2323"]);
      model.grant(elements.id["ID_FMP_POWER_11027"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Legendary Sovereign"] = new RulesElement({
    name: "Legendary Sovereign",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_211",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=211",
    categories: ["Legendary Sovereign", "ID_FMP_EPIC_DESTINY_211"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1041"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1042"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1043"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1044"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2443"]);
      model.grant(elements.id["ID_FMP_POWER_4787"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Star-Favored Champion"] = new RulesElement({
    name: "Star-Favored Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_585",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=585",
    categories: ["Star-Favored Champion", "ID_FMP_EPIC_DESTINY_585"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2452"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2453"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2454"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2455"]);
      model.grant(elements.id["ID_FMP_POWER_11028"]);
      model.grant(elements.id["ID_FMP_POWER_11029"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
