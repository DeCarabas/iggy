(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Dragontooth Shield (heroic tier)"] = new RulesElement({
    name: "Dragontooth Shield (heroic tier)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_DRAGONTOOTH_SHIELD_(HEROIC_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Dragontooth Shield (heroic tier)", "ID_INTERNAL_WEAPON_DRAGONTOOTH_SHIELD_(HEROIC_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Dragontooth Shield (heroic tier) (Large)"] = new RulesElement({
    name: "Dragontooth Shield (heroic tier) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DRAGONTOOTH_SHIELD_(HEROIC_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Dragontooth Shield (heroic tier) (Large)", "ID_INTERNAL_WEAPON_LARGE_DRAGONTOOTH_SHIELD_(HEROIC_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Fighting Shield (heroic tier)"] = new RulesElement({
    name: "Fighting Shield (heroic tier)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_FIGHTING_SHIELD_(HEROIC_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Fighting Shield (heroic tier)", "ID_INTERNAL_WEAPON_FIGHTING_SHIELD_(HEROIC_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Fighting Shield (heroic tier) (Large)"] = new RulesElement({
    name: "Fighting Shield (heroic tier) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FIGHTING_SHIELD_(HEROIC_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Fighting Shield (heroic tier) (Large)", "ID_INTERNAL_WEAPON_LARGE_FIGHTING_SHIELD_(HEROIC_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Soul Shield (paragon tier)"] = new RulesElement({
    name: "Soul Shield (paragon tier)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_SOUL_SHIELD_(PARAGON_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Soul Shield (paragon tier)", "ID_INTERNAL_WEAPON_SOUL_SHIELD_(PARAGON_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Soul Shield (paragon tier) (Large)"] = new RulesElement({
    name: "Soul Shield (paragon tier) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SOUL_SHIELD_(PARAGON_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Soul Shield (paragon tier) (Large)", "ID_INTERNAL_WEAPON_LARGE_SOUL_SHIELD_(PARAGON_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sun Shield (paragon tier)"] = new RulesElement({
    name: "Sun Shield (paragon tier)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_SUN_SHIELD_(PARAGON_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Sun Shield (paragon tier)", "ID_INTERNAL_WEAPON_SUN_SHIELD_(PARAGON_TIER)"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sun Shield (paragon tier) (Large)"] = new RulesElement({
    name: "Sun Shield (paragon tier) (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SUN_SHIELD_(PARAGON_TIER)",
    source: "Dragon Magazine 385",
    categories: ["Sun Shield (paragon tier) (Large)", "ID_INTERNAL_WEAPON_LARGE_SUN_SHIELD_(PARAGON_TIER)"]
  });
  byID[te.id] = te;
  
  
})(this);
