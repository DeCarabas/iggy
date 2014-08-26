define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Aecris Weapon +1"] = new engine.RulesElement({
    name: "Aecris Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4598",
    source: "H1 Keep on the Shadowfell",
    categories: ["Aecris Weapon +1", "ID_FMP_MAGIC_ITEM_4598"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
