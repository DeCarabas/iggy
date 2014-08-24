(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Shadowblade"] = new RulesElement({
    name: "Shadowblade",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_SHADOWBLADE",
    source: "Dragon Magazine 379",
    categories: ["Shadowblade", "ID_INTERNAL_WEAPON_SHADOWBLADE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shadowblade (Large)"] = new RulesElement({
    name: "Shadowblade (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE",
    source: "Dragon Magazine 379",
    categories: ["Shadowblade (Large)", "ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE"]
  });
  byID[te.id] = te;
  
  
})(this);
