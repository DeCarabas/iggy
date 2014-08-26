define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Blowgun"] = new engine.RulesElement({
    name: "Blowgun",
    type: "Weapon",
    id: "ID_FMP_WEAPON_77",
    source: "Dragon Magazine 373",
    categories: ["Blowgun", "ID_FMP_WEAPON_77", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_48", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Blowgun (Large)"] = new engine.RulesElement({
    name: "Blowgun (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BLOWGUN",
    source: "Dragon Magazine 373",
    categories: ["Blowgun (Large)", "ID_INTERNAL_WEAPON_LARGE_BLOWGUN"]
  });
  byID[te.id] = te;
  
  te = Weapon["Garrote"] = new engine.RulesElement({
    name: "Garrote",
    type: "Weapon",
    id: "ID_FMP_WEAPON_78",
    source: "Dragon Magazine 373",
    categories: ["Garrote", "ID_FMP_WEAPON_78", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_47", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Garrote (Large)"] = new engine.RulesElement({
    name: "Garrote (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GARROTE",
    source: "Dragon Magazine 373",
    categories: ["Garrote (Large)", "ID_INTERNAL_WEAPON_LARGE_GARROTE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
