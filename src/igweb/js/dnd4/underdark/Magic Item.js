define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Icegloom Chart (heroic tier)"] = new engine.RulesElement({
    name: "Icegloom Chart (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8385",
    source: "Underdark",
    categories: ["Icegloom Chart (heroic tier)", "ID_FMP_MAGIC_ITEM_8385"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
