(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Monk Unarmed Strike"] = new RulesElement({
    name: "Monk Unarmed Strike",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_MONK_UNARMED_STRIKE",
    source: "Player's Handbook 3",
    categories: ["Monk Unarmed Strike", "ID_INTERNAL_WEAPON_MONK_UNARMED_STRIKE"]
  });
  byID[te.id] = te;
  
  
})(this);
