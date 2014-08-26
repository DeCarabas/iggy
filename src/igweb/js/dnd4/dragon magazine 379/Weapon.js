define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Shadowblade"] = new engine.RulesElement({
    name: "Shadowblade",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_SHADOWBLADE",
    source: "Dragon Magazine 379",
    categories: ["Shadowblade", "ID_INTERNAL_WEAPON_SHADOWBLADE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shadowblade (Large)"] = new engine.RulesElement({
    name: "Shadowblade (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE",
    source: "Dragon Magazine 379",
    categories: ["Shadowblade (Large)", "ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
