define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Domain = types['Domain'] || (types['Domain'] = {});
  te = Domain["Arcana"] = new engine.RulesElement({
    name: "Arcana",
    type: "Domain",
    id: "ID_FMP_DOMAIN_1",
    source: "Core",
    categories: ["Arcana", "ID_FMP_DOMAIN_1"]
  });
  byID[te.id] = te;
  
  te = Domain["Change"] = new engine.RulesElement({
    name: "Change",
    type: "Domain",
    id: "ID_FMP_DOMAIN_2",
    source: "Core",
    categories: ["Change", "ID_FMP_DOMAIN_2"]
  });
  byID[te.id] = te;
  
  te = Domain["Civilization"] = new engine.RulesElement({
    name: "Civilization",
    type: "Domain",
    id: "ID_FMP_DOMAIN_3",
    source: "Core",
    categories: ["Civilization", "ID_FMP_DOMAIN_3"]
  });
  byID[te.id] = te;
  
  te = Domain["Creation"] = new engine.RulesElement({
    name: "Creation",
    type: "Domain",
    id: "ID_FMP_DOMAIN_4",
    source: "Core",
    categories: ["Creation", "ID_FMP_DOMAIN_4"]
  });
  byID[te.id] = te;
  
  te = Domain["Darkness"] = new engine.RulesElement({
    name: "Darkness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_5",
    source: "Core",
    categories: ["Darkness", "ID_FMP_DOMAIN_5"]
  });
  byID[te.id] = te;
  
  te = Domain["Death"] = new engine.RulesElement({
    name: "Death",
    type: "Domain",
    id: "ID_FMP_DOMAIN_6",
    source: "Core",
    categories: ["Death", "ID_FMP_DOMAIN_6"]
  });
  byID[te.id] = te;
  
  te = Domain["Destruction"] = new engine.RulesElement({
    name: "Destruction",
    type: "Domain",
    id: "ID_FMP_DOMAIN_7",
    source: "Core",
    categories: ["Destruction", "ID_FMP_DOMAIN_7"]
  });
  byID[te.id] = te;
  
  te = Domain["Earth"] = new engine.RulesElement({
    name: "Earth",
    type: "Domain",
    id: "ID_FMP_DOMAIN_8",
    source: "Core",
    categories: ["Earth", "ID_FMP_DOMAIN_8"]
  });
  byID[te.id] = te;
  
  te = Domain["Fate"] = new engine.RulesElement({
    name: "Fate",
    type: "Domain",
    id: "ID_FMP_DOMAIN_9",
    source: "Core",
    categories: ["Fate", "ID_FMP_DOMAIN_9"]
  });
  byID[te.id] = te;
  
  te = Domain["Freedom"] = new engine.RulesElement({
    name: "Freedom",
    type: "Domain",
    id: "ID_FMP_DOMAIN_10",
    source: "Core",
    categories: ["Freedom", "ID_FMP_DOMAIN_10"]
  });
  byID[te.id] = te;
  
  te = Domain["Hope"] = new engine.RulesElement({
    name: "Hope",
    type: "Domain",
    id: "ID_FMP_DOMAIN_11",
    source: "Core",
    categories: ["Hope", "ID_FMP_DOMAIN_11"]
  });
  byID[te.id] = te;
  
  te = Domain["Justice"] = new engine.RulesElement({
    name: "Justice",
    type: "Domain",
    id: "ID_FMP_DOMAIN_12",
    source: "Core",
    categories: ["Justice", "ID_FMP_DOMAIN_12"]
  });
  byID[te.id] = te;
  
  te = Domain["Knowledge"] = new engine.RulesElement({
    name: "Knowledge",
    type: "Domain",
    id: "ID_FMP_DOMAIN_13",
    source: "Core",
    categories: ["Knowledge", "ID_FMP_DOMAIN_13"]
  });
  byID[te.id] = te;
  
  te = Domain["Life"] = new engine.RulesElement({
    name: "Life",
    type: "Domain",
    id: "ID_FMP_DOMAIN_14",
    source: "Core",
    categories: ["Life", "ID_FMP_DOMAIN_14"]
  });
  byID[te.id] = te;
  
  te = Domain["Love"] = new engine.RulesElement({
    name: "Love",
    type: "Domain",
    id: "ID_FMP_DOMAIN_15",
    source: "Core",
    categories: ["Love", "ID_FMP_DOMAIN_15"]
  });
  byID[te.id] = te;
  
  te = Domain["Luck"] = new engine.RulesElement({
    name: "Luck",
    type: "Domain",
    id: "ID_FMP_DOMAIN_16",
    source: "Core",
    categories: ["Luck", "ID_FMP_DOMAIN_16"]
  });
  byID[te.id] = te;
  
  te = Domain["Madness"] = new engine.RulesElement({
    name: "Madness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_17",
    source: "Core",
    categories: ["Madness", "ID_FMP_DOMAIN_17"]
  });
  byID[te.id] = te;
  
  te = Domain["Moon"] = new engine.RulesElement({
    name: "Moon",
    type: "Domain",
    id: "ID_FMP_DOMAIN_18",
    source: "Core",
    categories: ["Moon", "ID_FMP_DOMAIN_18"]
  });
  byID[te.id] = te;
  
  te = Domain["Poison"] = new engine.RulesElement({
    name: "Poison",
    type: "Domain",
    id: "ID_FMP_DOMAIN_19",
    source: "Core",
    categories: ["Poison", "ID_FMP_DOMAIN_19"]
  });
  byID[te.id] = te;
  
  te = Domain["Protection"] = new engine.RulesElement({
    name: "Protection",
    type: "Domain",
    id: "ID_FMP_DOMAIN_20",
    source: "Core",
    categories: ["Protection", "ID_FMP_DOMAIN_20"]
  });
  byID[te.id] = te;
  
  te = Domain["Sea"] = new engine.RulesElement({
    name: "Sea",
    type: "Domain",
    id: "ID_FMP_DOMAIN_21",
    source: "Core",
    categories: ["Sea", "ID_FMP_DOMAIN_21"]
  });
  byID[te.id] = te;
  
  te = Domain["Skill"] = new engine.RulesElement({
    name: "Skill",
    type: "Domain",
    id: "ID_FMP_DOMAIN_22",
    source: "Core",
    categories: ["Skill", "ID_FMP_DOMAIN_22"]
  });
  byID[te.id] = te;
  
  te = Domain["Storm"] = new engine.RulesElement({
    name: "Storm",
    type: "Domain",
    id: "ID_FMP_DOMAIN_23",
    source: "Core",
    categories: ["Storm", "ID_FMP_DOMAIN_23"]
  });
  byID[te.id] = te;
  
  te = Domain["Strength"] = new engine.RulesElement({
    name: "Strength",
    type: "Domain",
    id: "ID_FMP_DOMAIN_24",
    source: "Core",
    categories: ["Strength", "ID_FMP_DOMAIN_24"]
  });
  byID[te.id] = te;
  
  te = Domain["Strife"] = new engine.RulesElement({
    name: "Strife",
    type: "Domain",
    id: "ID_FMP_DOMAIN_25",
    source: "Core",
    categories: ["Strife", "ID_FMP_DOMAIN_25"]
  });
  byID[te.id] = te;
  
  te = Domain["Sun"] = new engine.RulesElement({
    name: "Sun",
    type: "Domain",
    id: "ID_FMP_DOMAIN_26",
    source: "Core",
    categories: ["Sun", "ID_FMP_DOMAIN_26"]
  });
  byID[te.id] = te;
  
  te = Domain["Torment"] = new engine.RulesElement({
    name: "Torment",
    type: "Domain",
    id: "ID_FMP_DOMAIN_27",
    source: "Core",
    categories: ["Torment", "ID_FMP_DOMAIN_27"]
  });
  byID[te.id] = te;
  
  te = Domain["Trickery"] = new engine.RulesElement({
    name: "Trickery",
    type: "Domain",
    id: "ID_FMP_DOMAIN_28",
    source: "Core",
    categories: ["Trickery", "ID_FMP_DOMAIN_28"]
  });
  byID[te.id] = te;
  
  te = Domain["Tyranny"] = new engine.RulesElement({
    name: "Tyranny",
    type: "Domain",
    id: "ID_FMP_DOMAIN_29",
    source: "Core",
    categories: ["Tyranny", "ID_FMP_DOMAIN_29"]
  });
  byID[te.id] = te;
  
  te = Domain["Undeath"] = new engine.RulesElement({
    name: "Undeath",
    type: "Domain",
    id: "ID_FMP_DOMAIN_30",
    source: "Core",
    categories: ["Undeath", "ID_FMP_DOMAIN_30"]
  });
  byID[te.id] = te;
  
  te = Domain["Vengeance"] = new engine.RulesElement({
    name: "Vengeance",
    type: "Domain",
    id: "ID_FMP_DOMAIN_31",
    source: "Core",
    categories: ["Vengeance", "ID_FMP_DOMAIN_31"]
  });
  byID[te.id] = te;
  
  te = Domain["War"] = new engine.RulesElement({
    name: "War",
    type: "Domain",
    id: "ID_FMP_DOMAIN_32",
    source: "Core",
    categories: ["War", "ID_FMP_DOMAIN_32"]
  });
  byID[te.id] = te;
  
  te = Domain["Wilderness"] = new engine.RulesElement({
    name: "Wilderness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_33",
    source: "Core",
    categories: ["Wilderness", "ID_FMP_DOMAIN_33"]
  });
  byID[te.id] = te;
  
  te = Domain["Winter"] = new engine.RulesElement({
    name: "Winter",
    type: "Domain",
    id: "ID_FMP_DOMAIN_34",
    source: "Core",
    categories: ["Winter", "ID_FMP_DOMAIN_34"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
