(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Domain = types['Domain'] || (types['Domain'] = {});
  te = Domain["Arcana"] = new RulesElement({
    name: "Arcana",
    type: "Domain",
    id: "ID_FMP_DOMAIN_1",
    source: "Core",
    categories: ["Arcana", "ID_FMP_DOMAIN_1"]
  });
  byID[te.id] = te;
  
  te = Domain["Change"] = new RulesElement({
    name: "Change",
    type: "Domain",
    id: "ID_FMP_DOMAIN_2",
    source: "Core",
    categories: ["Change", "ID_FMP_DOMAIN_2"]
  });
  byID[te.id] = te;
  
  te = Domain["Civilization"] = new RulesElement({
    name: "Civilization",
    type: "Domain",
    id: "ID_FMP_DOMAIN_3",
    source: "Core",
    categories: ["Civilization", "ID_FMP_DOMAIN_3"]
  });
  byID[te.id] = te;
  
  te = Domain["Creation"] = new RulesElement({
    name: "Creation",
    type: "Domain",
    id: "ID_FMP_DOMAIN_4",
    source: "Core",
    categories: ["Creation", "ID_FMP_DOMAIN_4"]
  });
  byID[te.id] = te;
  
  te = Domain["Darkness"] = new RulesElement({
    name: "Darkness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_5",
    source: "Core",
    categories: ["Darkness", "ID_FMP_DOMAIN_5"]
  });
  byID[te.id] = te;
  
  te = Domain["Death"] = new RulesElement({
    name: "Death",
    type: "Domain",
    id: "ID_FMP_DOMAIN_6",
    source: "Core",
    categories: ["Death", "ID_FMP_DOMAIN_6"]
  });
  byID[te.id] = te;
  
  te = Domain["Destruction"] = new RulesElement({
    name: "Destruction",
    type: "Domain",
    id: "ID_FMP_DOMAIN_7",
    source: "Core",
    categories: ["Destruction", "ID_FMP_DOMAIN_7"]
  });
  byID[te.id] = te;
  
  te = Domain["Earth"] = new RulesElement({
    name: "Earth",
    type: "Domain",
    id: "ID_FMP_DOMAIN_8",
    source: "Core",
    categories: ["Earth", "ID_FMP_DOMAIN_8"]
  });
  byID[te.id] = te;
  
  te = Domain["Fate"] = new RulesElement({
    name: "Fate",
    type: "Domain",
    id: "ID_FMP_DOMAIN_9",
    source: "Core",
    categories: ["Fate", "ID_FMP_DOMAIN_9"]
  });
  byID[te.id] = te;
  
  te = Domain["Freedom"] = new RulesElement({
    name: "Freedom",
    type: "Domain",
    id: "ID_FMP_DOMAIN_10",
    source: "Core",
    categories: ["Freedom", "ID_FMP_DOMAIN_10"]
  });
  byID[te.id] = te;
  
  te = Domain["Hope"] = new RulesElement({
    name: "Hope",
    type: "Domain",
    id: "ID_FMP_DOMAIN_11",
    source: "Core",
    categories: ["Hope", "ID_FMP_DOMAIN_11"]
  });
  byID[te.id] = te;
  
  te = Domain["Justice"] = new RulesElement({
    name: "Justice",
    type: "Domain",
    id: "ID_FMP_DOMAIN_12",
    source: "Core",
    categories: ["Justice", "ID_FMP_DOMAIN_12"]
  });
  byID[te.id] = te;
  
  te = Domain["Knowledge"] = new RulesElement({
    name: "Knowledge",
    type: "Domain",
    id: "ID_FMP_DOMAIN_13",
    source: "Core",
    categories: ["Knowledge", "ID_FMP_DOMAIN_13"]
  });
  byID[te.id] = te;
  
  te = Domain["Life"] = new RulesElement({
    name: "Life",
    type: "Domain",
    id: "ID_FMP_DOMAIN_14",
    source: "Core",
    categories: ["Life", "ID_FMP_DOMAIN_14"]
  });
  byID[te.id] = te;
  
  te = Domain["Love"] = new RulesElement({
    name: "Love",
    type: "Domain",
    id: "ID_FMP_DOMAIN_15",
    source: "Core",
    categories: ["Love", "ID_FMP_DOMAIN_15"]
  });
  byID[te.id] = te;
  
  te = Domain["Luck"] = new RulesElement({
    name: "Luck",
    type: "Domain",
    id: "ID_FMP_DOMAIN_16",
    source: "Core",
    categories: ["Luck", "ID_FMP_DOMAIN_16"]
  });
  byID[te.id] = te;
  
  te = Domain["Madness"] = new RulesElement({
    name: "Madness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_17",
    source: "Core",
    categories: ["Madness", "ID_FMP_DOMAIN_17"]
  });
  byID[te.id] = te;
  
  te = Domain["Moon"] = new RulesElement({
    name: "Moon",
    type: "Domain",
    id: "ID_FMP_DOMAIN_18",
    source: "Core",
    categories: ["Moon", "ID_FMP_DOMAIN_18"]
  });
  byID[te.id] = te;
  
  te = Domain["Poison"] = new RulesElement({
    name: "Poison",
    type: "Domain",
    id: "ID_FMP_DOMAIN_19",
    source: "Core",
    categories: ["Poison", "ID_FMP_DOMAIN_19"]
  });
  byID[te.id] = te;
  
  te = Domain["Protection"] = new RulesElement({
    name: "Protection",
    type: "Domain",
    id: "ID_FMP_DOMAIN_20",
    source: "Core",
    categories: ["Protection", "ID_FMP_DOMAIN_20"]
  });
  byID[te.id] = te;
  
  te = Domain["Sea"] = new RulesElement({
    name: "Sea",
    type: "Domain",
    id: "ID_FMP_DOMAIN_21",
    source: "Core",
    categories: ["Sea", "ID_FMP_DOMAIN_21"]
  });
  byID[te.id] = te;
  
  te = Domain["Skill"] = new RulesElement({
    name: "Skill",
    type: "Domain",
    id: "ID_FMP_DOMAIN_22",
    source: "Core",
    categories: ["Skill", "ID_FMP_DOMAIN_22"]
  });
  byID[te.id] = te;
  
  te = Domain["Storm"] = new RulesElement({
    name: "Storm",
    type: "Domain",
    id: "ID_FMP_DOMAIN_23",
    source: "Core",
    categories: ["Storm", "ID_FMP_DOMAIN_23"]
  });
  byID[te.id] = te;
  
  te = Domain["Strength"] = new RulesElement({
    name: "Strength",
    type: "Domain",
    id: "ID_FMP_DOMAIN_24",
    source: "Core",
    categories: ["Strength", "ID_FMP_DOMAIN_24"]
  });
  byID[te.id] = te;
  
  te = Domain["Strife"] = new RulesElement({
    name: "Strife",
    type: "Domain",
    id: "ID_FMP_DOMAIN_25",
    source: "Core",
    categories: ["Strife", "ID_FMP_DOMAIN_25"]
  });
  byID[te.id] = te;
  
  te = Domain["Sun"] = new RulesElement({
    name: "Sun",
    type: "Domain",
    id: "ID_FMP_DOMAIN_26",
    source: "Core",
    categories: ["Sun", "ID_FMP_DOMAIN_26"]
  });
  byID[te.id] = te;
  
  te = Domain["Torment"] = new RulesElement({
    name: "Torment",
    type: "Domain",
    id: "ID_FMP_DOMAIN_27",
    source: "Core",
    categories: ["Torment", "ID_FMP_DOMAIN_27"]
  });
  byID[te.id] = te;
  
  te = Domain["Trickery"] = new RulesElement({
    name: "Trickery",
    type: "Domain",
    id: "ID_FMP_DOMAIN_28",
    source: "Core",
    categories: ["Trickery", "ID_FMP_DOMAIN_28"]
  });
  byID[te.id] = te;
  
  te = Domain["Tyranny"] = new RulesElement({
    name: "Tyranny",
    type: "Domain",
    id: "ID_FMP_DOMAIN_29",
    source: "Core",
    categories: ["Tyranny", "ID_FMP_DOMAIN_29"]
  });
  byID[te.id] = te;
  
  te = Domain["Undeath"] = new RulesElement({
    name: "Undeath",
    type: "Domain",
    id: "ID_FMP_DOMAIN_30",
    source: "Core",
    categories: ["Undeath", "ID_FMP_DOMAIN_30"]
  });
  byID[te.id] = te;
  
  te = Domain["Vengeance"] = new RulesElement({
    name: "Vengeance",
    type: "Domain",
    id: "ID_FMP_DOMAIN_31",
    source: "Core",
    categories: ["Vengeance", "ID_FMP_DOMAIN_31"]
  });
  byID[te.id] = te;
  
  te = Domain["War"] = new RulesElement({
    name: "War",
    type: "Domain",
    id: "ID_FMP_DOMAIN_32",
    source: "Core",
    categories: ["War", "ID_FMP_DOMAIN_32"]
  });
  byID[te.id] = te;
  
  te = Domain["Wilderness"] = new RulesElement({
    name: "Wilderness",
    type: "Domain",
    id: "ID_FMP_DOMAIN_33",
    source: "Core",
    categories: ["Wilderness", "ID_FMP_DOMAIN_33"]
  });
  byID[te.id] = te;
  
  te = Domain["Winter"] = new RulesElement({
    name: "Winter",
    type: "Domain",
    id: "ID_FMP_DOMAIN_34",
    source: "Core",
    categories: ["Winter", "ID_FMP_DOMAIN_34"]
  });
  byID[te.id] = te;
  
  
})(this);
