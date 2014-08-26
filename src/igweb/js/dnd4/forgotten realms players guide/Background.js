define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Aglarond"] = new engine.RulesElement({
    name: "Aglarond",
    type: "Background",
    id: "ID_FMP_BACKGROUND_2",
    source: "Forgotten Realms Player's Guide",
    categories: ["Aglarond", "ID_FMP_BACKGROUND_2"]
  });
  byID[te.id] = te;
  
  te = Background["Akanûl"] = new engine.RulesElement({
    name: "Akanûl",
    type: "Background",
    id: "ID_FMP_BACKGROUND_3",
    source: "Forgotten Realms Player's Guide",
    categories: ["Akanûl", "ID_FMP_BACKGROUND_3"]
  });
  byID[te.id] = te;
  
  te = Background["Amn"] = new engine.RulesElement({
    name: "Amn",
    type: "Background",
    id: "ID_FMP_BACKGROUND_4",
    source: "Forgotten Realms Player's Guide",
    categories: ["Amn", "ID_FMP_BACKGROUND_4"]
  });
  byID[te.id] = te;
  
  te = Background["Baldur's Gate"] = new engine.RulesElement({
    name: "Baldur's Gate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_5",
    source: "Forgotten Realms Player's Guide",
    categories: ["Baldur's Gate", "ID_FMP_BACKGROUND_5"]
  });
  byID[te.id] = te;
  
  te = Background["Calimshan"] = new engine.RulesElement({
    name: "Calimshan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_6",
    source: "Forgotten Realms Player's Guide",
    categories: ["Calimshan", "ID_FMP_BACKGROUND_6"]
  });
  byID[te.id] = te;
  
  te = Background["Chessenta"] = new engine.RulesElement({
    name: "Chessenta",
    type: "Background",
    id: "ID_FMP_BACKGROUND_7",
    source: "Forgotten Realms Player's Guide",
    categories: ["Chessenta", "ID_FMP_BACKGROUND_7"]
  });
  byID[te.id] = te;
  
  te = Background["Cormyr (General)"] = new engine.RulesElement({
    name: "Cormyr (General)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_28",
    source: "Forgotten Realms Player's Guide",
    categories: ["Cormyr (General)", "ID_FMP_BACKGROUND_28"]
  });
  byID[te.id] = te;
  
  te = Background["Cormyr (Wheloon)"] = new engine.RulesElement({
    name: "Cormyr (Wheloon)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_8",
    source: "Forgotten Realms Player's Guide",
    categories: ["Cormyr (Wheloon)", "ID_FMP_BACKGROUND_8"]
  });
  byID[te.id] = te;
  
  te = Background["Dalelands"] = new engine.RulesElement({
    name: "Dalelands",
    type: "Background",
    id: "ID_FMP_BACKGROUND_9",
    source: "Forgotten Realms Player's Guide",
    categories: ["Dalelands", "ID_FMP_BACKGROUND_9"]
  });
  byID[te.id] = te;
  
  te = Background["Dragon Coast"] = new engine.RulesElement({
    name: "Dragon Coast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_10",
    source: "Forgotten Realms Player's Guide",
    categories: ["Dragon Coast", "ID_FMP_BACKGROUND_10"]
  });
  byID[te.id] = te;
  
  te = Background["Durpar"] = new engine.RulesElement({
    name: "Durpar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_11",
    source: "Forgotten Realms Player's Guide",
    categories: ["Durpar", "ID_FMP_BACKGROUND_11"]
  });
  byID[te.id] = te;
  
  te = Background["East Rift"] = new engine.RulesElement({
    name: "East Rift",
    type: "Background",
    id: "ID_FMP_BACKGROUND_12",
    source: "Forgotten Realms Player's Guide",
    categories: ["East Rift", "ID_FMP_BACKGROUND_12"]
  });
  byID[te.id] = te;
  
  te = Background["Elfharrow"] = new engine.RulesElement({
    name: "Elfharrow",
    type: "Background",
    id: "ID_FMP_BACKGROUND_13",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elfharrow", "ID_FMP_BACKGROUND_13"]
  });
  byID[te.id] = te;
  
  te = Background["Gray Vale"] = new engine.RulesElement({
    name: "Gray Vale",
    type: "Background",
    id: "ID_FMP_BACKGROUND_14",
    source: "Forgotten Realms Player's Guide",
    categories: ["Gray Vale", "ID_FMP_BACKGROUND_14"]
  });
  byID[te.id] = te;
  
  te = Background["Great Dale"] = new engine.RulesElement({
    name: "Great Dale",
    type: "Background",
    id: "ID_FMP_BACKGROUND_15",
    source: "Forgotten Realms Player's Guide",
    categories: ["Great Dale", "ID_FMP_BACKGROUND_15"]
  });
  byID[te.id] = te;
  
  te = Background["High Imaskar"] = new engine.RulesElement({
    name: "High Imaskar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_16",
    source: "Forgotten Realms Player's Guide",
    categories: ["High Imaskar", "ID_FMP_BACKGROUND_16"]
  });
  byID[te.id] = te;
  
  te = Background["Impiltur"] = new engine.RulesElement({
    name: "Impiltur",
    type: "Background",
    id: "ID_FMP_BACKGROUND_17",
    source: "Forgotten Realms Player's Guide",
    categories: ["Impiltur", "ID_FMP_BACKGROUND_17"]
  });
  byID[te.id] = te;
  
  te = Background["Luruar"] = new engine.RulesElement({
    name: "Luruar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_18",
    source: "Forgotten Realms Player's Guide",
    categories: ["Luruar", "ID_FMP_BACKGROUND_18"]
  });
  byID[te.id] = te;
  
  te = Background["Luskan"] = new engine.RulesElement({
    name: "Luskan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_19",
    source: "Forgotten Realms Player's Guide",
    categories: ["Luskan", "ID_FMP_BACKGROUND_19"]
  });
  byID[te.id] = te;
  
  te = Background["Moonshae Isles"] = new engine.RulesElement({
    name: "Moonshae Isles",
    type: "Background",
    id: "ID_FMP_BACKGROUND_20",
    source: "Forgotten Realms Player's Guide",
    categories: ["Moonshae Isles", "ID_FMP_BACKGROUND_20"]
  });
  byID[te.id] = te;
  
  te = Background["Myth Drannor"] = new engine.RulesElement({
    name: "Myth Drannor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_21",
    source: "Forgotten Realms Player's Guide",
    categories: ["Myth Drannor", "ID_FMP_BACKGROUND_21"]
  });
  byID[te.id] = te;
  
  te = Background["Narfell"] = new engine.RulesElement({
    name: "Narfell",
    type: "Background",
    id: "ID_FMP_BACKGROUND_22",
    source: "Forgotten Realms Player's Guide",
    categories: ["Narfell", "ID_FMP_BACKGROUND_22"]
  });
  byID[te.id] = te;
  
  te = Background["Nelanther Isles"] = new engine.RulesElement({
    name: "Nelanther Isles",
    type: "Background",
    id: "ID_FMP_BACKGROUND_23",
    source: "Forgotten Realms Player's Guide",
    categories: ["Nelanther Isles", "ID_FMP_BACKGROUND_23"]
  });
  byID[te.id] = te;
  
  te = Background["Netheril"] = new engine.RulesElement({
    name: "Netheril",
    type: "Background",
    id: "ID_FMP_BACKGROUND_24",
    source: "Forgotten Realms Player's Guide",
    categories: ["Netheril", "ID_FMP_BACKGROUND_24"]
  });
  byID[te.id] = te;
  
  te = Background["Thay"] = new engine.RulesElement({
    name: "Thay",
    type: "Background",
    id: "ID_FMP_BACKGROUND_25",
    source: "Forgotten Realms Player's Guide",
    categories: ["Thay", "ID_FMP_BACKGROUND_25"]
  });
  byID[te.id] = te;
  
  te = Background["Tymanther"] = new engine.RulesElement({
    name: "Tymanther",
    type: "Background",
    id: "ID_FMP_BACKGROUND_26",
    source: "Forgotten Realms Player's Guide",
    categories: ["Tymanther", "ID_FMP_BACKGROUND_26"]
  });
  byID[te.id] = te;
  
  te = Background["Vilhon Wilds"] = new engine.RulesElement({
    name: "Vilhon Wilds",
    type: "Background",
    id: "ID_FMP_BACKGROUND_27",
    source: "Forgotten Realms Player's Guide",
    categories: ["Vilhon Wilds", "ID_FMP_BACKGROUND_27"]
  });
  byID[te.id] = te;
  
  te = Background["Waterdeep"] = new engine.RulesElement({
    name: "Waterdeep",
    type: "Background",
    id: "ID_FMP_BACKGROUND_1",
    source: "Forgotten Realms Player's Guide",
    categories: ["Waterdeep", "ID_FMP_BACKGROUND_1"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
