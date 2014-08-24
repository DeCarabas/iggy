(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Claw Fighter Claw"] = new RulesElement({
    name: "Claw Fighter Claw",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW",
    source: "Dragon Magazine 367",
    categories: ["Claw Fighter Claw", "ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Claw Fighter Claw - Secondary End"] = new RulesElement({
    name: "Claw Fighter Claw - Secondary End",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW_SECONDARY_END",
    source: "Dragon Magazine 367",
    categories: ["Claw Fighter Claw - Secondary End", "ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  
})(this);
