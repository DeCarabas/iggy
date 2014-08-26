define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Head of Vyrellis"] = new engine.RulesElement({
    name: "Head of Vyrellis",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4339",
    source: "H3 Pyramid of Shadows",
    categories: ["Head of Vyrellis", "ID_FMP_MAGIC_ITEM_4339"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("History Misc", 2);
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
