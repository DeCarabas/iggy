define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Shield of Speed and Evasion (heroic tier)"] = new engine.RulesElement({
    name: "Shield of Speed and Evasion (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4243",
    source: "Dungeon Magazine 156",
    categories: ["Shield of Speed and Evasion (heroic tier)", "ID_FMP_MAGIC_ITEM_4243"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
