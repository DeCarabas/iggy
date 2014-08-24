(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Rod of Seven Parts (Weapon)"] = new RulesElement({
    name: "Rod of Seven Parts (Weapon)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON)",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Weapon)", "ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Rod of Seven Parts (Weapon) (Large)"] = new RulesElement({
    name: "Rod of Seven Parts (Weapon) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON)",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Weapon) (Large)", "ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON)"]
  });
  byID[te.id] = te;
  
  
})(this);
