define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bell of Fury's Calling"] = new engine.RulesElement({
    name: "Bell of Fury's Calling",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8100",
    source: "H2 Thunderspire Labyrinth",
    categories: ["Bell of Fury's Calling", "ID_FMP_MAGIC_ITEM_8100"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodhorn Blade"] = new engine.RulesElement({
    name: "Bloodhorn Blade",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8098",
    source: "H2 Thunderspire Labyrinth",
    categories: ["Bloodhorn Blade", "ID_FMP_MAGIC_ITEM_8098"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Face of Baphomet"] = new engine.RulesElement({
    name: "Face of Baphomet",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8099",
    source: "H2 Thunderspire Labyrinth",
    categories: ["Face of Baphomet", "ID_FMP_MAGIC_ITEM_8099"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
