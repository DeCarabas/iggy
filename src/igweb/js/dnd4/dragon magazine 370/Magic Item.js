define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Deathcap Spores (paragon tier)"] = new engine.RulesElement({
    name: "Deathcap Spores (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4561",
    source: "Dragon Magazine 370",
    categories: ["Deathcap Spores (paragon tier)", "ID_FMP_MAGIC_ITEM_4561"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
