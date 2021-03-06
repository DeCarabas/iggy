define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bahamut's Golden Canary (epic tier)"] = new engine.RulesElement({
    name: "Bahamut's Golden Canary (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8965",
    source: "Dungeon Magazine 175",
    categories: ["Bahamut's Golden Canary (epic tier)", "ID_FMP_MAGIC_ITEM_8965"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
