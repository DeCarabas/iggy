define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Apprentice of Sinister Cabal"] = new engine.RulesElement({
    name: "Apprentice of Sinister Cabal",
    type: "Background",
    id: "ID_FMP_BACKGROUND_70",
    source: "Dragon Magazine 366",
    categories: ["Apprentice of Sinister Cabal", "ID_FMP_BACKGROUND_70"]
  });
  byID[te.id] = te;
  
  te = Background["Arcane Student Who Saw Too Much"] = new engine.RulesElement({
    name: "Arcane Student Who Saw Too Much",
    type: "Background",
    id: "ID_FMP_BACKGROUND_75",
    source: "Dragon Magazine 366",
    categories: ["Arcane Student Who Saw Too Much", "ID_FMP_BACKGROUND_75"]
  });
  byID[te.id] = te;
  
  te = Background["Assassin"] = new engine.RulesElement({
    name: "Assassin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_66",
    source: "Dragon Magazine 366",
    categories: ["Assassin", "ID_FMP_BACKGROUND_66"]
  });
  byID[te.id] = te;
  
  te = Background["Auspicious Birth"] = new engine.RulesElement({
    name: "Auspicious Birth",
    type: "Background",
    id: "ID_FMP_BACKGROUND_54",
    source: "Dragon Magazine 366",
    categories: ["Auspicious Birth", "ID_FMP_BACKGROUND_54"]
  });
  byID[te.id] = te;
  
  te = Background["Born Under a Bad Sign"] = new engine.RulesElement({
    name: "Born Under a Bad Sign",
    type: "Background",
    id: "ID_FMP_BACKGROUND_71",
    source: "Dragon Magazine 366",
    categories: ["Born Under a Bad Sign", "ID_FMP_BACKGROUND_71"]
  });
  byID[te.id] = te;
  
  te = Background["Brother in Battle"] = new engine.RulesElement({
    name: "Brother in Battle",
    type: "Background",
    id: "ID_FMP_BACKGROUND_35",
    source: "Dragon Magazine 366",
    categories: ["Brother in Battle", "ID_FMP_BACKGROUND_35"]
  });
  byID[te.id] = te;
  
  te = Background["Cat Burglar"] = new engine.RulesElement({
    name: "Cat Burglar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_67",
    source: "Dragon Magazine 366",
    categories: ["Cat Burglar", "ID_FMP_BACKGROUND_67"]
  });
  byID[te.id] = te;
  
  te = Background["Cloistered Priest"] = new engine.RulesElement({
    name: "Cloistered Priest",
    type: "Background",
    id: "ID_FMP_BACKGROUND_48",
    source: "Dragon Magazine 366",
    categories: ["Cloistered Priest", "ID_FMP_BACKGROUND_48"]
  });
  byID[te.id] = te;
  
  te = Background["Con Artist"] = new engine.RulesElement({
    name: "Con Artist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_45",
    source: "Dragon Magazine 366",
    categories: ["Con Artist", "ID_FMP_BACKGROUND_45"]
  });
  byID[te.id] = te;
  
  te = Background["Crusading Zealot"] = new engine.RulesElement({
    name: "Crusading Zealot",
    type: "Background",
    id: "ID_FMP_BACKGROUND_61",
    source: "Dragon Magazine 366",
    categories: ["Crusading Zealot", "ID_FMP_BACKGROUND_61"]
  });
  byID[te.id] = te;
  
  te = Background["Cult Escapee"] = new engine.RulesElement({
    name: "Cult Escapee",
    type: "Background",
    id: "ID_FMP_BACKGROUND_52",
    source: "Dragon Magazine 366",
    categories: ["Cult Escapee", "ID_FMP_BACKGROUND_52"]
  });
  byID[te.id] = te;
  
  te = Background["Detective"] = new engine.RulesElement({
    name: "Detective",
    type: "Background",
    id: "ID_FMP_BACKGROUND_43",
    source: "Dragon Magazine 366",
    categories: ["Detective", "ID_FMP_BACKGROUND_43"]
  });
  byID[te.id] = te;
  
  te = Background["Eldritch Harlequin"] = new engine.RulesElement({
    name: "Eldritch Harlequin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_38",
    source: "Dragon Magazine 366",
    categories: ["Eldritch Harlequin", "ID_FMP_BACKGROUND_38"]
  });
  byID[te.id] = te;
  
  te = Background["Explorer/Guide"] = new engine.RulesElement({
    name: "Explorer/Guide",
    type: "Background",
    id: "ID_FMP_BACKGROUND_41",
    source: "Dragon Magazine 366",
    categories: ["Explorer/Guide", "ID_FMP_BACKGROUND_41"]
  });
  byID[te.id] = te;
  
  te = Background["Forest Warden"] = new engine.RulesElement({
    name: "Forest Warden",
    type: "Background",
    id: "ID_FMP_BACKGROUND_40",
    source: "Dragon Magazine 366",
    categories: ["Forest Warden", "ID_FMP_BACKGROUND_40"]
  });
  byID[te.id] = te;
  
  te = Background["Former Barbarian"] = new engine.RulesElement({
    name: "Former Barbarian",
    type: "Background",
    id: "ID_FMP_BACKGROUND_59",
    source: "Dragon Magazine 366",
    categories: ["Former Barbarian", "ID_FMP_BACKGROUND_59"]
  });
  byID[te.id] = te;
  
  te = Background["Former Gladiator"] = new engine.RulesElement({
    name: "Former Gladiator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_57",
    source: "Dragon Magazine 366",
    categories: ["Former Gladiator", "ID_FMP_BACKGROUND_57"]
  });
  byID[te.id] = te;
  
  te = Background["Fugitive from a Vengeful Rival"] = new engine.RulesElement({
    name: "Fugitive from a Vengeful Rival",
    type: "Background",
    id: "ID_FMP_BACKGROUND_65",
    source: "Dragon Magazine 366",
    categories: ["Fugitive from a Vengeful Rival", "ID_FMP_BACKGROUND_65"]
  });
  byID[te.id] = te;
  
  te = Background["Gritty Sergeant"] = new engine.RulesElement({
    name: "Gritty Sergeant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_49",
    source: "Dragon Magazine 366",
    categories: ["Gritty Sergeant", "ID_FMP_BACKGROUND_49"]
  });
  byID[te.id] = te;
  
  te = Background["Haunted Veteran"] = new engine.RulesElement({
    name: "Haunted Veteran",
    type: "Background",
    id: "ID_FMP_BACKGROUND_58",
    source: "Dragon Magazine 366",
    categories: ["Haunted Veteran", "ID_FMP_BACKGROUND_58"]
  });
  byID[te.id] = te;
  
  te = Background["Imbuer"] = new engine.RulesElement({
    name: "Imbuer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_77",
    source: "Dragon Magazine 366",
    categories: ["Imbuer", "ID_FMP_BACKGROUND_77"]
  });
  byID[te.id] = te;
  
  te = Background["Last of the Breed"] = new engine.RulesElement({
    name: "Last of the Breed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_63",
    source: "Dragon Magazine 366",
    categories: ["Last of the Breed", "ID_FMP_BACKGROUND_63"]
  });
  byID[te.id] = te;
  
  te = Background["Magic Scholar"] = new engine.RulesElement({
    name: "Magic Scholar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_37",
    source: "Dragon Magazine 366",
    categories: ["Magic Scholar", "ID_FMP_BACKGROUND_37"]
  });
  byID[te.id] = te;
  
  te = Background["Merchant Prince"] = new engine.RulesElement({
    name: "Merchant Prince",
    type: "Background",
    id: "ID_FMP_BACKGROUND_42",
    source: "Dragon Magazine 366",
    categories: ["Merchant Prince", "ID_FMP_BACKGROUND_42"]
  });
  byID[te.id] = te;
  
  te = Background["Missing Master"] = new engine.RulesElement({
    name: "Missing Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_76",
    source: "Dragon Magazine 366",
    categories: ["Missing Master", "ID_FMP_BACKGROUND_76"]
  });
  byID[te.id] = te;
  
  te = Background["Monster Hunter"] = new engine.RulesElement({
    name: "Monster Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_64",
    source: "Dragon Magazine 366",
    categories: ["Monster Hunter", "ID_FMP_BACKGROUND_64"]
  });
  byID[te.id] = te;
  
  te = Background["Noble Bred for War"] = new engine.RulesElement({
    name: "Noble Bred for War",
    type: "Background",
    id: "ID_FMP_BACKGROUND_73",
    source: "Dragon Magazine 366",
    categories: ["Noble Bred for War", "ID_FMP_BACKGROUND_73"]
  });
  byID[te.id] = te;
  
  te = Background["Noble Scion"] = new engine.RulesElement({
    name: "Noble Scion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_50",
    source: "Dragon Magazine 366",
    categories: ["Noble Scion", "ID_FMP_BACKGROUND_50"]
  });
  byID[te.id] = te;
  
  te = Background["Officer Who Came Out of Retirement"] = new engine.RulesElement({
    name: "Officer Who Came Out of Retirement",
    type: "Background",
    id: "ID_FMP_BACKGROUND_74",
    source: "Dragon Magazine 366",
    categories: ["Officer Who Came Out of Retirement", "ID_FMP_BACKGROUND_74"]
  });
  byID[te.id] = te;
  
  te = Background["On the Run from the Devil"] = new engine.RulesElement({
    name: "On the Run from the Devil",
    type: "Background",
    id: "ID_FMP_BACKGROUND_69",
    source: "Dragon Magazine 366",
    categories: ["On the Run from the Devil", "ID_FMP_BACKGROUND_69"]
  });
  byID[te.id] = te;
  
  te = Background["Political Rebel"] = new engine.RulesElement({
    name: "Political Rebel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_68",
    source: "Dragon Magazine 366",
    categories: ["Political Rebel", "ID_FMP_BACKGROUND_68"]
  });
  byID[te.id] = te;
  
  te = Background["Prison Conversion"] = new engine.RulesElement({
    name: "Prison Conversion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_60",
    source: "Dragon Magazine 366",
    categories: ["Prison Conversion", "ID_FMP_BACKGROUND_60"]
  });
  byID[te.id] = te;
  
  te = Background["Recent Convert"] = new engine.RulesElement({
    name: "Recent Convert",
    type: "Background",
    id: "ID_FMP_BACKGROUND_56",
    source: "Dragon Magazine 366",
    categories: ["Recent Convert", "ID_FMP_BACKGROUND_56"]
  });
  byID[te.id] = te;
  
  te = Background["Redemption Seeker"] = new engine.RulesElement({
    name: "Redemption Seeker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_31",
    source: "Dragon Magazine 366",
    categories: ["Redemption Seeker", "ID_FMP_BACKGROUND_31"]
  });
  byID[te.id] = te;
  
  te = Background["River Smuggler"] = new engine.RulesElement({
    name: "River Smuggler",
    type: "Background",
    id: "ID_FMP_BACKGROUND_47",
    source: "Dragon Magazine 366",
    categories: ["River Smuggler", "ID_FMP_BACKGROUND_47"]
  });
  byID[te.id] = te;
  
  te = Background["Scion of an Ancient Bloodline"] = new engine.RulesElement({
    name: "Scion of an Ancient Bloodline",
    type: "Background",
    id: "ID_FMP_BACKGROUND_51",
    source: "Dragon Magazine 366",
    categories: ["Scion of an Ancient Bloodline", "ID_FMP_BACKGROUND_51"]
  });
  byID[te.id] = te;
  
  te = Background["Scorned Noble"] = new engine.RulesElement({
    name: "Scorned Noble",
    type: "Background",
    id: "ID_FMP_BACKGROUND_30",
    source: "Dragon Magazine 366",
    categories: ["Scorned Noble", "ID_FMP_BACKGROUND_30"]
  });
  byID[te.id] = te;
  
  te = Background["Seducer"] = new engine.RulesElement({
    name: "Seducer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_36",
    source: "Dragon Magazine 366",
    categories: ["Seducer", "ID_FMP_BACKGROUND_36"]
  });
  byID[te.id] = te;
  
  te = Background["Seeker for the Lost Clan"] = new engine.RulesElement({
    name: "Seeker for the Lost Clan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_33",
    source: "Dragon Magazine 366",
    categories: ["Seeker for the Lost Clan", "ID_FMP_BACKGROUND_33"]
  });
  byID[te.id] = te;
  
  te = Background["Silent Hunter"] = new engine.RulesElement({
    name: "Silent Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_39",
    source: "Dragon Magazine 366",
    categories: ["Silent Hunter", "ID_FMP_BACKGROUND_39"]
  });
  byID[te.id] = te;
  
  te = Background["Street Urchin"] = new engine.RulesElement({
    name: "Street Urchin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_46",
    source: "Dragon Magazine 366",
    categories: ["Street Urchin", "ID_FMP_BACKGROUND_46"]
  });
  byID[te.id] = te;
  
  te = Background["Trained from Birth for a Specific Prophecy"] = new engine.RulesElement({
    name: "Trained from Birth for a Specific Prophecy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_62",
    source: "Dragon Magazine 366",
    categories: ["Trained from Birth for a Specific Prophecy", "ID_FMP_BACKGROUND_62"]
  });
  byID[te.id] = te;
  
  te = Background["Traveling Missionary"] = new engine.RulesElement({
    name: "Traveling Missionary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_55",
    source: "Dragon Magazine 366",
    categories: ["Traveling Missionary", "ID_FMP_BACKGROUND_55"]
  });
  byID[te.id] = te;
  
  te = Background["Vet Who Can't Let Go"] = new engine.RulesElement({
    name: "Vet Who Can't Let Go",
    type: "Background",
    id: "ID_FMP_BACKGROUND_72",
    source: "Dragon Magazine 366",
    categories: ["Vet Who Can't Let Go", "ID_FMP_BACKGROUND_72"]
  });
  byID[te.id] = te;
  
  te = Background["Wandering Duelist"] = new engine.RulesElement({
    name: "Wandering Duelist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_29",
    source: "Dragon Magazine 366",
    categories: ["Wandering Duelist", "ID_FMP_BACKGROUND_29"]
  });
  byID[te.id] = te;
  
  te = Background["Wandering Mercenary"] = new engine.RulesElement({
    name: "Wandering Mercenary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_44",
    source: "Dragon Magazine 366",
    categories: ["Wandering Mercenary", "ID_FMP_BACKGROUND_44"]
  });
  byID[te.id] = te;
  
  te = Background["Warsmith"] = new engine.RulesElement({
    name: "Warsmith",
    type: "Background",
    id: "ID_FMP_BACKGROUND_34",
    source: "Dragon Magazine 366",
    categories: ["Warsmith", "ID_FMP_BACKGROUND_34"]
  });
  byID[te.id] = te;
  
  te = Background["Young Cutthroat"] = new engine.RulesElement({
    name: "Young Cutthroat",
    type: "Background",
    id: "ID_FMP_BACKGROUND_53",
    source: "Dragon Magazine 366",
    categories: ["Young Cutthroat", "ID_FMP_BACKGROUND_53"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
