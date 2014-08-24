(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Fang of the World Serpent"] = new RulesElement({
    name: "Fang of the World Serpent",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_503",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=503",
    categories: ["Fang of the World Serpent", "ID_FMP_EPIC_DESTINY_503"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2049"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2050"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2051"]);
      model.grant(elements.id["ID_FMP_POWER_9957"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Fury of the Wild"] = new RulesElement({
    name: "Fury of the Wild",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_504",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=504",
    categories: ["Fury of the Wild", "ID_FMP_EPIC_DESTINY_504"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2052"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2053"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2054"]);
      model.grant(elements.id["ID_FMP_POWER_9958"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Honored Ancestor"] = new RulesElement({
    name: "Honored Ancestor",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_505",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=505",
    categories: ["Honored Ancestor", "ID_FMP_EPIC_DESTINY_505"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2055"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2056"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2057"]);
      model.grant(elements.id["ID_FMP_POWER_9959"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Mythic Spirit"] = new RulesElement({
    name: "Mythic Spirit",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_506",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=506",
    categories: ["Mythic Spirit", "ID_FMP_EPIC_DESTINY_506"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2058"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2059"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2060"]);
      model.grant(elements.id["ID_FMP_POWER_9960"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Perfect Guardian"] = new RulesElement({
    name: "Perfect Guardian",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_507",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=507",
    categories: ["Perfect Guardian", "ID_FMP_EPIC_DESTINY_507"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2061"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2062"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2063"]);
      model.grant(elements.id["ID_FMP_POWER_9961"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Reincarnate Champion"] = new RulesElement({
    name: "Reincarnate Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_508",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=508",
    categories: ["Reincarnate Champion", "ID_FMP_EPIC_DESTINY_508"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2064"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2065"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2066"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2067"]);
      model.grant(elements.id["ID_FMP_POWER_9962"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Sovereign Beast"] = new RulesElement({
    name: "Sovereign Beast",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_509",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=509",
    categories: ["Sovereign Beast", "ID_FMP_EPIC_DESTINY_509"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2068"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2069"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2070"]);
      model.grant(elements.id["ID_FMP_POWER_9963"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["World Tree Guardian"] = new RulesElement({
    name: "World Tree Guardian",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_510",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=510",
    categories: ["World Tree Guardian", "ID_FMP_EPIC_DESTINY_510"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2071"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2072"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2073"]);
      model.grant(elements.id["ID_FMP_POWER_9964"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);