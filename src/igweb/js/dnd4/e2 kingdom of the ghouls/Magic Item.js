define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Audaviator"] = new engine.RulesElement({
    name: "Audaviator",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5383",
    source: "E2 Kingdom of the Ghouls",
    categories: ["Audaviator", "ID_FMP_MAGIC_ITEM_5383"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* when performing travel rituals */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sorrowsong Blade +6"] = new engine.RulesElement({
    name: "Sorrowsong Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5382",
    source: "E2 Kingdom of the Ghouls",
    categories: ["Sorrowsong Blade +6", "ID_FMP_MAGIC_ITEM_5382"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["White Kingdom Boneclaw +6"] = new engine.RulesElement({
    name: "White Kingdom Boneclaw +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5381",
    source: "E2 Kingdom of the Ghouls",
    categories: ["White Kingdom Boneclaw +6", "ID_FMP_MAGIC_ITEM_5381"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
