define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Boar Tusk"] = new engine.RulesElement({
    name: "Boar Tusk",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_BOAR_TUSK",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk", "ID_INTERNAL_WEAPON_BOAR_TUSK"]
  });
  byID[te.id] = te;
  
  te = Weapon["Boar Tusk (Large)"] = new engine.RulesElement({
    name: "Boar Tusk (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BOAR_TUSK",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk (Large)", "ID_INTERNAL_WEAPON_LARGE_BOAR_TUSK"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
