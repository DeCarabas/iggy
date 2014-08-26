define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Bola"] = new engine.RulesElement({
    name: "Bola",
    type: "Weapon",
    id: "ID_FMP_WEAPON_76",
    source: "Dragon Magazine 368",
    categories: ["Bola", "ID_FMP_WEAPON_76", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Bola (Large)"] = new engine.RulesElement({
    name: "Bola (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BOLA",
    source: "Dragon Magazine 368",
    categories: ["Bola (Large)", "ID_INTERNAL_WEAPON_LARGE_BOLA"]
  });
  byID[te.id] = te;
  
  te = Weapon["Net"] = new engine.RulesElement({
    name: "Net",
    type: "Weapon",
    id: "ID_FMP_WEAPON_74",
    source: "Dragon Magazine 368",
    categories: ["Net", "ID_FMP_WEAPON_74", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Net (Large)"] = new engine.RulesElement({
    name: "Net (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_NET",
    source: "Dragon Magazine 368",
    categories: ["Net (Large)", "ID_INTERNAL_WEAPON_LARGE_NET"]
  });
  byID[te.id] = te;
  
  te = Weapon["Whip"] = new engine.RulesElement({
    name: "Whip",
    type: "Weapon",
    id: "ID_FMP_WEAPON_31",
    source: "Dragon Magazine 368",
    categories: ["Whip", "ID_FMP_WEAPON_31", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Whip (Large)"] = new engine.RulesElement({
    name: "Whip (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_WHIP",
    source: "Dragon Magazine 368",
    categories: ["Whip (Large)", "ID_INTERNAL_WEAPON_LARGE_WHIP"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
