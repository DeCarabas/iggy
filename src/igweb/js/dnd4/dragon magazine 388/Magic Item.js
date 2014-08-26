define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Blood of Tyche (paragon tier)"] = new engine.RulesElement({
    name: "Blood of Tyche (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9179",
    source: "Dragon Magazine 388",
    categories: ["Blood of Tyche (paragon tier)", "ID_FMP_MAGIC_ITEM_9179"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +1"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9180",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +1", "ID_FMP_MAGIC_ITEM_9180"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +2"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9181",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +2", "ID_FMP_MAGIC_ITEM_9181"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +3"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9182",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +3", "ID_FMP_MAGIC_ITEM_9182"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +4"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9183",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +4", "ID_FMP_MAGIC_ITEM_9183"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +5"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9184",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +5", "ID_FMP_MAGIC_ITEM_9184"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Scorned Fate +6"] = new engine.RulesElement({
    name: "Symbol of Scorned Fate +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9185",
    source: "Dragon Magazine 388",
    categories: ["Symbol of Scorned Fate +6", "ID_FMP_MAGIC_ITEM_9185"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
