define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Wyrmspike +3"] = new engine.RulesElement({
    name: "Wyrmspike +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8487",
    source: "Hammerfast",
    categories: ["Wyrmspike +3", "ID_FMP_MAGIC_ITEM_8487"],
    rules: function(model) {
      model.statadd("resist:close attacks", 5, "resist");
      model.statadd("resist:area attacks", 5, "resist");
      model.statadd("attack rolls", function() { /* against the dragon Calastryx */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
