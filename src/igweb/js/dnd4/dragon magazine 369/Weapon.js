(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Feral Armor Claw"] = new RulesElement({
    name: "Feral Armor Claw",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor Claw", "ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Feral Armor Claw (Large)"] = new RulesElement({
    name: "Feral Armor Claw (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor Claw (Large)", "ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW"]
  });
  byID[te.id] = te;
  
  
})(this);
