define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Feral Armor Claw"] = new engine.RulesElement({
    name: "Feral Armor Claw",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor Claw", "ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Feral Armor Claw (Large)"] = new engine.RulesElement({
    name: "Feral Armor Claw (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor Claw (Large)", "ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
