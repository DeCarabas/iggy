define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bloody Maul of Kord +4"] = new engine.RulesElement({
    name: "Bloody Maul of Kord +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4865",
    source: "Dungeon Delve",
    categories: ["Bloody Maul of Kord +4", "ID_FMP_MAGIC_ITEM_4865"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
