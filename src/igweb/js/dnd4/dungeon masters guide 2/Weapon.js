define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Rod of Seven Parts (Weapon)"] = new engine.RulesElement({
    name: "Rod of Seven Parts (Weapon)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON)",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Weapon)", "ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Rod of Seven Parts (Weapon) (Large)"] = new engine.RulesElement({
    name: "Rod of Seven Parts (Weapon) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON)",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Weapon) (Large)", "ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON)"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
