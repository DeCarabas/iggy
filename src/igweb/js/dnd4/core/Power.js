define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Beast Melee Basic Attack"] = new engine.RulesElement({
    name: "Beast Melee Basic Attack",
    type: "Power",
    id: "ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_BEAST_MELEE_BASIC_ATTACK",
    categories: ["Beast Melee Basic Attack", "ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]
  });
  byID[te.id] = te;
  
  te = Power["Dwarven Resilience"] = new engine.RulesElement({
    name: "Dwarven Resilience",
    type: "Power",
    id: "ID_FMP_POWER_13211",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=13211",
    categories: ["Dwarven Resilience", "ID_FMP_POWER_13211", "ID_FMP_RACIAL_TRAIT_12", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Melee Basic Attack"] = new engine.RulesElement({
    name: "Melee Basic Attack",
    type: "Power",
    id: "ID_INTERNAL_POWER_MELEE_BASIC_ATTACK",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_MELEE_BASIC_ATTACK",
    categories: ["Melee Basic Attack", "ID_INTERNAL_POWER_MELEE_BASIC_ATTACK"]
  });
  byID[te.id] = te;
  
  te = Power["Ranged Basic Attack"] = new engine.RulesElement({
    name: "Ranged Basic Attack",
    type: "Power",
    id: "ID_INTERNAL_POWER_RANGED_BASIC_ATTACK",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_RANGED_BASIC_ATTACK",
    categories: ["Ranged Basic Attack", "ID_INTERNAL_POWER_RANGED_BASIC_ATTACK"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
