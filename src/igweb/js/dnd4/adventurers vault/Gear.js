define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Blade Spider"] = new engine.RulesElement({
    name: "Blade Spider",
    type: "Gear",
    id: "ID_FMP_GEAR_63",
    source: "Adventurer's Vault",
    categories: ["Blade Spider", "ID_FMP_GEAR_63"]
  });
  byID[te.id] = te;
  
  te = Gear["Camel"] = new engine.RulesElement({
    name: "Camel",
    type: "Gear",
    id: "ID_FMP_GEAR_64",
    source: "Adventurer's Vault",
    categories: ["Camel", "ID_FMP_GEAR_64"]
  });
  byID[te.id] = te;
  
  te = Gear["Celestial Charger"] = new engine.RulesElement({
    name: "Celestial Charger",
    type: "Gear",
    id: "ID_FMP_GEAR_74",
    source: "Adventurer's Vault",
    categories: ["Celestial Charger", "ID_FMP_GEAR_74"]
  });
  byID[te.id] = te;
  
  te = Gear["Dire Boar"] = new engine.RulesElement({
    name: "Dire Boar",
    type: "Gear",
    id: "ID_FMP_GEAR_65",
    source: "Adventurer's Vault",
    categories: ["Dire Boar", "ID_FMP_GEAR_65"]
  });
  byID[te.id] = te;
  
  te = Gear["Dire Shark"] = new engine.RulesElement({
    name: "Dire Shark",
    type: "Gear",
    id: "ID_FMP_GEAR_82",
    source: "Adventurer's Vault",
    categories: ["Dire Shark", "ID_FMP_GEAR_82"]
  });
  byID[te.id] = te;
  
  te = Gear["Dire Wolf"] = new engine.RulesElement({
    name: "Dire Wolf",
    type: "Gear",
    id: "ID_FMP_GEAR_85",
    source: "Adventurer's Vault",
    categories: ["Dire Wolf", "ID_FMP_GEAR_85"]
  });
  byID[te.id] = te;
  
  te = Gear["Elephant"] = new engine.RulesElement({
    name: "Elephant",
    type: "Gear",
    id: "ID_FMP_GEAR_66",
    source: "Adventurer's Vault",
    categories: ["Elephant", "ID_FMP_GEAR_66"]
  });
  byID[te.id] = te;
  
  te = Gear["Giant Ant"] = new engine.RulesElement({
    name: "Giant Ant",
    type: "Gear",
    id: "ID_FMP_GEAR_67",
    source: "Adventurer's Vault",
    categories: ["Giant Ant", "ID_FMP_GEAR_67"]
  });
  byID[te.id] = te;
  
  te = Gear["Giant Lizard (Draft)"] = new engine.RulesElement({
    name: "Giant Lizard (Draft)",
    type: "Gear",
    id: "ID_FMP_GEAR_68",
    source: "Adventurer's Vault",
    categories: ["Giant Lizard (Draft)", "ID_FMP_GEAR_68"]
  });
  byID[te.id] = te;
  
  te = Gear["Giant Lizard (Riding)"] = new engine.RulesElement({
    name: "Giant Lizard (Riding)",
    type: "Gear",
    id: "ID_FMP_GEAR_69",
    source: "Adventurer's Vault",
    categories: ["Giant Lizard (Riding)", "ID_FMP_GEAR_69"]
  });
  byID[te.id] = te;
  
  te = Gear["Griffon"] = new engine.RulesElement({
    name: "Griffon",
    type: "Gear",
    id: "ID_FMP_GEAR_70",
    source: "Adventurer's Vault",
    categories: ["Griffon", "ID_FMP_GEAR_70"]
  });
  byID[te.id] = te;
  
  te = Gear["Hippogriff"] = new engine.RulesElement({
    name: "Hippogriff",
    type: "Gear",
    id: "ID_FMP_GEAR_45",
    source: "Adventurer's Vault",
    categories: ["Hippogriff", "ID_FMP_GEAR_45"]
  });
  byID[te.id] = te;
  
  te = Gear["Hippogriff Dreadmount"] = new engine.RulesElement({
    name: "Hippogriff Dreadmount",
    type: "Gear",
    id: "ID_FMP_GEAR_73",
    source: "Adventurer's Vault",
    categories: ["Hippogriff Dreadmount", "ID_FMP_GEAR_73"]
  });
  byID[te.id] = te;
  
  te = Gear["Magazine"] = new engine.RulesElement({
    name: "Magazine",
    type: "Gear",
    id: "ID_FMP_GEAR_60",
    source: "Adventurer's Vault",
    categories: ["Magazine", "ID_FMP_GEAR_60"]
  });
  byID[te.id] = te;
  
  te = Gear["Manticore"] = new engine.RulesElement({
    name: "Manticore",
    type: "Gear",
    id: "ID_FMP_GEAR_78",
    source: "Adventurer's Vault",
    categories: ["Manticore", "ID_FMP_GEAR_78"]
  });
  byID[te.id] = te;
  
  te = Gear["Nightmare"] = new engine.RulesElement({
    name: "Nightmare",
    type: "Gear",
    id: "ID_FMP_GEAR_79",
    source: "Adventurer's Vault",
    categories: ["Nightmare", "ID_FMP_GEAR_79"]
  });
  byID[te.id] = te;
  
  te = Gear["Rage Drake"] = new engine.RulesElement({
    name: "Rage Drake",
    type: "Gear",
    id: "ID_FMP_GEAR_80",
    source: "Adventurer's Vault",
    categories: ["Rage Drake", "ID_FMP_GEAR_80"]
  });
  byID[te.id] = te;
  
  te = Gear["Rhinoceros"] = new engine.RulesElement({
    name: "Rhinoceros",
    type: "Gear",
    id: "ID_FMP_GEAR_81",
    source: "Adventurer's Vault",
    categories: ["Rhinoceros", "ID_FMP_GEAR_81"]
  });
  byID[te.id] = te;
  
  te = Gear["Riding Shark"] = new engine.RulesElement({
    name: "Riding Shark",
    type: "Gear",
    id: "ID_FMP_GEAR_83",
    source: "Adventurer's Vault",
    categories: ["Riding Shark", "ID_FMP_GEAR_83"]
  });
  byID[te.id] = te;
  
  te = Gear["Rimefire Griffon"] = new engine.RulesElement({
    name: "Rimefire Griffon",
    type: "Gear",
    id: "ID_FMP_GEAR_71",
    source: "Adventurer's Vault",
    categories: ["Rimefire Griffon", "ID_FMP_GEAR_71"]
  });
  byID[te.id] = te;
  
  te = Gear["Sea Horse"] = new engine.RulesElement({
    name: "Sea Horse",
    type: "Gear",
    id: "ID_FMP_GEAR_75",
    source: "Adventurer's Vault",
    categories: ["Sea Horse", "ID_FMP_GEAR_75"]
  });
  byID[te.id] = te;
  
  te = Gear["Skeletal Horse"] = new engine.RulesElement({
    name: "Skeletal Horse",
    type: "Gear",
    id: "ID_FMP_GEAR_76",
    source: "Adventurer's Vault",
    categories: ["Skeletal Horse", "ID_FMP_GEAR_76"]
  });
  byID[te.id] = te;
  
  te = Gear["Trihorn Behemoth"] = new engine.RulesElement({
    name: "Trihorn Behemoth",
    type: "Gear",
    id: "ID_FMP_GEAR_84",
    source: "Adventurer's Vault",
    categories: ["Trihorn Behemoth", "ID_FMP_GEAR_84"]
  });
  byID[te.id] = te;
  
  te = Gear["Warhorse"] = new engine.RulesElement({
    name: "Warhorse",
    type: "Gear",
    id: "ID_FMP_GEAR_77",
    source: "Adventurer's Vault",
    categories: ["Warhorse", "ID_FMP_GEAR_77"]
  });
  byID[te.id] = te;
  
  te = Gear["Wyvern"] = new engine.RulesElement({
    name: "Wyvern",
    type: "Gear",
    id: "ID_FMP_GEAR_86",
    source: "Adventurer's Vault",
    categories: ["Wyvern", "ID_FMP_GEAR_86"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
