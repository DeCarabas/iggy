define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Slaying Stone of Kiris Dahn (paragon tier)"] = new engine.RulesElement({
    name: "Slaying Stone of Kiris Dahn (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9155",
    source: "HS1 The Slaying Stone",
    categories: ["Slaying Stone of Kiris Dahn (paragon tier)", "ID_FMP_MAGIC_ITEM_9155"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +1"] = new engine.RulesElement({
    name: "Triflik's Blade +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9156",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +1", "ID_FMP_MAGIC_ITEM_9156"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +2"] = new engine.RulesElement({
    name: "Triflik's Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9157",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +2", "ID_FMP_MAGIC_ITEM_9157"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +3"] = new engine.RulesElement({
    name: "Triflik's Blade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9158",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +3", "ID_FMP_MAGIC_ITEM_9158"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +4"] = new engine.RulesElement({
    name: "Triflik's Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9159",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +4", "ID_FMP_MAGIC_ITEM_9159"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +5"] = new engine.RulesElement({
    name: "Triflik's Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9160",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +5", "ID_FMP_MAGIC_ITEM_9160"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Triflik's Blade +6"] = new engine.RulesElement({
    name: "Triflik's Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9161",
    source: "HS1 The Slaying Stone",
    categories: ["Triflik's Blade +6", "ID_FMP_MAGIC_ITEM_9161"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
