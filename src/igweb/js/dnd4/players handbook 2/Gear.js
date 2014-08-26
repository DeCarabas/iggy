define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Drum"] = new engine.RulesElement({
    name: "Drum",
    type: "Gear",
    id: "ID_FMP_GEAR_88",
    source: "Player's Handbook 2",
    categories: ["Drum", "ID_FMP_GEAR_88"]
  });
  byID[te.id] = te;
  
  te = Gear["Flute"] = new engine.RulesElement({
    name: "Flute",
    type: "Gear",
    id: "ID_FMP_GEAR_89",
    source: "Player's Handbook 2",
    categories: ["Flute", "ID_FMP_GEAR_89"]
  });
  byID[te.id] = te;
  
  te = Gear["Harp"] = new engine.RulesElement({
    name: "Harp",
    type: "Gear",
    id: "ID_FMP_GEAR_90",
    source: "Player's Handbook 2",
    categories: ["Harp", "ID_FMP_GEAR_90"]
  });
  byID[te.id] = te;
  
  te = Gear["Horn"] = new engine.RulesElement({
    name: "Horn",
    type: "Gear",
    id: "ID_FMP_GEAR_91",
    source: "Player's Handbook 2",
    categories: ["Horn", "ID_FMP_GEAR_91"]
  });
  byID[te.id] = te;
  
  te = Gear["Lute"] = new engine.RulesElement({
    name: "Lute",
    type: "Gear",
    id: "ID_FMP_GEAR_92",
    source: "Player's Handbook 2",
    categories: ["Lute", "ID_FMP_GEAR_92"]
  });
  byID[te.id] = te;
  
  te = Gear["Lyre"] = new engine.RulesElement({
    name: "Lyre",
    type: "Gear",
    id: "ID_FMP_GEAR_93",
    source: "Player's Handbook 2",
    categories: ["Lyre", "ID_FMP_GEAR_93"]
  });
  byID[te.id] = te;
  
  te = Gear["Totem"] = new engine.RulesElement({
    name: "Totem",
    type: "Gear",
    id: "ID_FMP_GEAR_87",
    source: "Player's Handbook 2",
    categories: ["Totem", "ID_FMP_GEAR_87"]
  });
  byID[te.id] = te;
  
  te = Gear["Woodwind"] = new engine.RulesElement({
    name: "Woodwind",
    type: "Gear",
    id: "ID_FMP_GEAR_94",
    source: "Player's Handbook 2",
    categories: ["Woodwind", "ID_FMP_GEAR_94"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
