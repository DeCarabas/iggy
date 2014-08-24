(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Boar Tusk"] = new RulesElement({
    name: "Boar Tusk",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_BOAR_TUSK",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk", "ID_INTERNAL_WEAPON_BOAR_TUSK"]
  });
  byID[te.id] = te;
  
  te = Weapon["Boar Tusk (Large)"] = new RulesElement({
    name: "Boar Tusk (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BOAR_TUSK",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk (Large)", "ID_INTERNAL_WEAPON_LARGE_BOAR_TUSK"]
  });
  byID[te.id] = te;
  
  
})(this);
