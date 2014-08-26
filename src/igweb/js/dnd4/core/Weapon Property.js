define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon_Property = types['Weapon Property'] || (types['Weapon Property'] = {});
  te = Weapon_Property["Accurate"] = new engine.RulesElement({
    name: "Accurate",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_14",
    source: "Core",
    categories: ["Accurate", "ID_FMP_WEAPON_PROPERTY_14"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Blinking"] = new engine.RulesElement({
    name: "Blinking",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_33",
    source: "Core",
    categories: ["Blinking", "ID_FMP_WEAPON_PROPERTY_33"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Brutal"] = new engine.RulesElement({
    name: "Brutal",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_10",
    source: "Core",
    categories: ["Brutal", "ID_FMP_WEAPON_PROPERTY_10"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Deadly"] = new engine.RulesElement({
    name: "Deadly",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_15",
    source: "Core",
    categories: ["Deadly", "ID_FMP_WEAPON_PROPERTY_15"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Defensive"] = new engine.RulesElement({
    name: "Defensive",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_11",
    source: "Core",
    categories: ["Defensive", "ID_FMP_WEAPON_PROPERTY_11"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Distant"] = new engine.RulesElement({
    name: "Distant",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_16",
    source: "Core",
    categories: ["Distant", "ID_FMP_WEAPON_PROPERTY_16"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Empowered Crit"] = new engine.RulesElement({
    name: "Empowered Crit",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_17",
    source: "Core",
    categories: ["Empowered Crit", "ID_FMP_WEAPON_PROPERTY_17"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (acid)"] = new engine.RulesElement({
    name: "Energized (acid)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_18",
    source: "Core",
    categories: ["Energized (acid)", "ID_FMP_WEAPON_PROPERTY_18"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (cold)"] = new engine.RulesElement({
    name: "Energized (cold)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_24",
    source: "Core",
    categories: ["Energized (cold)", "ID_FMP_WEAPON_PROPERTY_24"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (fire)"] = new engine.RulesElement({
    name: "Energized (fire)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_25",
    source: "Core",
    categories: ["Energized (fire)", "ID_FMP_WEAPON_PROPERTY_25"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (force)"] = new engine.RulesElement({
    name: "Energized (force)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_30",
    source: "Core",
    categories: ["Energized (force)", "ID_FMP_WEAPON_PROPERTY_30"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (lightning)"] = new engine.RulesElement({
    name: "Energized (lightning)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_27",
    source: "Core",
    categories: ["Energized (lightning)", "ID_FMP_WEAPON_PROPERTY_27"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (necrotic)"] = new engine.RulesElement({
    name: "Energized (necrotic)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_31",
    source: "Core",
    categories: ["Energized (necrotic)", "ID_FMP_WEAPON_PROPERTY_31"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (psychic)"] = new engine.RulesElement({
    name: "Energized (psychic)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_29",
    source: "Core",
    categories: ["Energized (psychic)", "ID_FMP_WEAPON_PROPERTY_29"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (radiant)"] = new engine.RulesElement({
    name: "Energized (radiant)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_28",
    source: "Core",
    categories: ["Energized (radiant)", "ID_FMP_WEAPON_PROPERTY_28"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Energized (thunder)"] = new engine.RulesElement({
    name: "Energized (thunder)",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_26",
    source: "Core",
    categories: ["Energized (thunder)", "ID_FMP_WEAPON_PROPERTY_26"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Forceful"] = new engine.RulesElement({
    name: "Forceful",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_19",
    source: "Core",
    categories: ["Forceful", "ID_FMP_WEAPON_PROPERTY_19"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Heavy Thrown"] = new engine.RulesElement({
    name: "Heavy Thrown",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_3",
    source: "Core",
    categories: ["Heavy Thrown", "ID_FMP_WEAPON_PROPERTY_3"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["High Crit"] = new engine.RulesElement({
    name: "High Crit",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_4",
    source: "Core",
    categories: ["High Crit", "ID_FMP_WEAPON_PROPERTY_4"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Light Thrown"] = new engine.RulesElement({
    name: "Light Thrown",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_5",
    source: "Core",
    categories: ["Light Thrown", "ID_FMP_WEAPON_PROPERTY_5"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Load Free"] = new engine.RulesElement({
    name: "Load Free",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_9",
    source: "Core",
    categories: ["Load Free", "ID_FMP_WEAPON_PROPERTY_9"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Load Minor"] = new engine.RulesElement({
    name: "Load Minor",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_6",
    source: "Core",
    categories: ["Load Minor", "ID_FMP_WEAPON_PROPERTY_6"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Mobile"] = new engine.RulesElement({
    name: "Mobile",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_32",
    source: "Core",
    categories: ["Mobile", "ID_FMP_WEAPON_PROPERTY_32"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["off-hand"] = new engine.RulesElement({
    name: "off-hand",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_1",
    source: "Core",
    categories: ["off-hand", "ID_FMP_WEAPON_PROPERTY_1"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Reach"] = new engine.RulesElement({
    name: "Reach",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_7",
    source: "Core",
    categories: ["Reach", "ID_FMP_WEAPON_PROPERTY_7"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Reaching"] = new engine.RulesElement({
    name: "Reaching",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_34",
    source: "Core",
    categories: ["Reaching", "ID_FMP_WEAPON_PROPERTY_34"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Shielding"] = new engine.RulesElement({
    name: "Shielding",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_20",
    source: "Core",
    categories: ["Shielding", "ID_FMP_WEAPON_PROPERTY_20"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Small"] = new engine.RulesElement({
    name: "Small",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_8",
    source: "Core",
    categories: ["Small", "ID_FMP_WEAPON_PROPERTY_8"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Stout"] = new engine.RulesElement({
    name: "Stout",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_13",
    source: "Core",
    categories: ["Stout", "ID_FMP_WEAPON_PROPERTY_13"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Undeniable"] = new engine.RulesElement({
    name: "Undeniable",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_21",
    source: "Core",
    categories: ["Undeniable", "ID_FMP_WEAPON_PROPERTY_21"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Unerring"] = new engine.RulesElement({
    name: "Unerring",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_22",
    source: "Core",
    categories: ["Unerring", "ID_FMP_WEAPON_PROPERTY_22"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Unstoppable"] = new engine.RulesElement({
    name: "Unstoppable",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_23",
    source: "Core",
    categories: ["Unstoppable", "ID_FMP_WEAPON_PROPERTY_23"]
  });
  byID[te.id] = te;
  
  te = Weapon_Property["Versatile"] = new engine.RulesElement({
    name: "Versatile",
    type: "Weapon Property",
    id: "ID_FMP_WEAPON_PROPERTY_2",
    source: "Core",
    categories: ["Versatile", "ID_FMP_WEAPON_PROPERTY_2"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
