define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Monk Unarmed Strike"] = new engine.RulesElement({
    name: "Monk Unarmed Strike",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_MONK_UNARMED_STRIKE",
    source: "Player's Handbook 3",
    categories: ["Monk Unarmed Strike", "ID_INTERNAL_WEAPON_MONK_UNARMED_STRIKE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
