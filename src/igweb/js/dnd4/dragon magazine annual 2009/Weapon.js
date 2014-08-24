(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Quarterstaff - Secondary End"] = new RulesElement({
    name: "Quarterstaff - Secondary End",
    type: "Weapon",
    id: "ID_INTERNAL_QUARTERSTAFF_SECONDARY_END",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Quarterstaff - Secondary End", "ID_INTERNAL_QUARTERSTAFF_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Quarterstaff - Secondary End (Large)"] = new RulesElement({
    name: "Quarterstaff - Secondary End (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF_-_SECONDARY_END",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Quarterstaff - Secondary End (Large)", "ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked Chain - Secondary End"] = new RulesElement({
    name: "Spiked Chain - Secondary End",
    type: "Weapon",
    id: "ID_INTERNAL_SPIKED_CHAIN_SECONDARY_END",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    categories: ["Spiked Chain - Secondary End", "ID_INTERNAL_SPIKED_CHAIN_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked Chain - Secondary End (Large)"] = new RulesElement({
    name: "Spiked Chain - Secondary End (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SPIKED_CHAIN_-_SECONDARY_END",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    categories: ["Spiked Chain - Secondary End (Large)", "ID_INTERNAL_WEAPON_LARGE_SPIKED_CHAIN_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  
})(this);
