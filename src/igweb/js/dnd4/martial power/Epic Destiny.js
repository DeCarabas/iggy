(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Adamantine Soldier"] = new RulesElement({
    name: "Adamantine Soldier",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_199",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=199",
    categories: ["Adamantine Soldier", "ID_FMP_EPIC_DESTINY_199"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_997"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_998"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_999"]);
      model.grant(elements.id["ID_FMP_POWER_4772"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Beastlord"] = new RulesElement({
    name: "Beastlord",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_200",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=200",
    categories: ["Beastlord", "ID_FMP_EPIC_DESTINY_200"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1000"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1001"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1002"]);
      model.grant(elements.id["ID_FMP_POWER_4773"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Dark Wanderer"] = new RulesElement({
    name: "Dark Wanderer",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_201",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=201",
    categories: ["Dark Wanderer", "ID_FMP_EPIC_DESTINY_201"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1005"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1004"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1003"]);
      model.grant(elements.id["ID_FMP_POWER_4774"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Eternal Defender"] = new RulesElement({
    name: "Eternal Defender",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_202",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=202",
    categories: ["Eternal Defender", "ID_FMP_EPIC_DESTINY_202"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1006"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1007"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1008"]);
      model.grant(elements.id["ID_FMP_POWER_4775"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Godhunter"] = new RulesElement({
    name: "Godhunter",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_203",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=203",
    categories: ["Godhunter", "ID_FMP_EPIC_DESTINY_203"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1011"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1010"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1009"]);
      model.grant(elements.id["ID_FMP_POWER_4776"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Legendary General"] = new RulesElement({
    name: "Legendary General",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_204",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=204",
    categories: ["Legendary General", "ID_FMP_EPIC_DESTINY_204"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1012"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1013"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1014"]);
      model.grant(elements.id["ID_FMP_POWER_4777"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Martial Archetype"] = new RulesElement({
    name: "Martial Archetype",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_205",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=205",
    categories: ["Martial Archetype", "ID_FMP_EPIC_DESTINY_205"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1015"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1016"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1017"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1018"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Perfect Assassin"] = new RulesElement({
    name: "Perfect Assassin",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_206",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=206",
    categories: ["Perfect Assassin", "ID_FMP_EPIC_DESTINY_206"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1019"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1020"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1021"]);
      model.grant(elements.id["ID_FMP_POWER_4779"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Undying Warrior"] = new RulesElement({
    name: "Undying Warrior",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_207",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=207",
    categories: ["Undying Warrior", "ID_FMP_EPIC_DESTINY_207"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1022"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1023"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1024"]);
      model.grant(elements.id["ID_FMP_POWER_4780"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Warmaster"] = new RulesElement({
    name: "Warmaster",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_208",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=208",
    categories: ["Warmaster", "ID_FMP_EPIC_DESTINY_208"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1025"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1026"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1027"]);
      model.grant(elements.id["ID_FMP_POWER_4781"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
