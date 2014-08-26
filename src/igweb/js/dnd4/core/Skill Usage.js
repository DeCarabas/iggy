define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Skill_Usage = types['Skill Usage'] || (types['Skill Usage'] = {});
  te = Skill_Usage["Acrobatic Stunt 60"] = new engine.RulesElement({
    name: "Acrobatic Stunt 60",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_60",
    source: "Core",
    categories: ["Acrobatic Stunt 60", "ID_FMP_SKILL_USAGE_60"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Arcana Knowledge 5"] = new engine.RulesElement({
    name: "Arcana Knowledge 5",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_5",
    source: "Core",
    categories: ["Arcana Knowledge 5", "ID_FMP_SKILL_USAGE_5"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Balance 1"] = new engine.RulesElement({
    name: "Balance 1",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_1",
    source: "Core",
    categories: ["Balance 1", "ID_FMP_SKILL_USAGE_1"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Bluff 7"] = new engine.RulesElement({
    name: "Bluff 7",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_7",
    source: "Core",
    categories: ["Bluff 7", "ID_FMP_SKILL_USAGE_7"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Climb 54"] = new engine.RulesElement({
    name: "Climb 54",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_54",
    source: "Core",
    categories: ["Climb 54", "ID_FMP_SKILL_USAGE_54"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Detect Magic 62"] = new engine.RulesElement({
    name: "Detect Magic 62",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_62",
    source: "Core",
    categories: ["Detect Magic 62", "ID_FMP_SKILL_USAGE_62"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Disable Trap 51"] = new engine.RulesElement({
    name: "Disable Trap 51",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_51",
    source: "Core",
    categories: ["Disable Trap 51", "ID_FMP_SKILL_USAGE_51"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Dungeoneering Knowledge 12"] = new engine.RulesElement({
    name: "Dungeoneering Knowledge 12",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_12",
    source: "Core",
    categories: ["Dungeoneering Knowledge 12", "ID_FMP_SKILL_USAGE_12"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Endurance 14"] = new engine.RulesElement({
    name: "Endurance 14",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_14",
    source: "Core",
    categories: ["Endurance 14", "ID_FMP_SKILL_USAGE_14"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Escape from a Grab 55"] = new engine.RulesElement({
    name: "Escape from a Grab 55",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_55",
    source: "Core",
    categories: ["Escape from a Grab 55", "ID_FMP_SKILL_USAGE_55"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Escape from a Grab 61"] = new engine.RulesElement({
    name: "Escape from a Grab 61",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_61",
    source: "Core",
    categories: ["Escape from a Grab 61", "ID_FMP_SKILL_USAGE_61"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Escape from Restraints 3"] = new engine.RulesElement({
    name: "Escape from Restraints 3",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_3",
    source: "Core",
    categories: ["Escape from Restraints 3", "ID_FMP_SKILL_USAGE_3"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["First Aid 63"] = new engine.RulesElement({
    name: "First Aid 63",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_63",
    source: "Core",
    categories: ["First Aid 63", "ID_FMP_SKILL_USAGE_63"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Forage 11"] = new engine.RulesElement({
    name: "Forage 11",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_11",
    source: "Core",
    categories: ["Forage 11", "ID_FMP_SKILL_USAGE_11"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Forage 30"] = new engine.RulesElement({
    name: "Forage 30",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_30",
    source: "Core",
    categories: ["Forage 30", "ID_FMP_SKILL_USAGE_30"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Handle Animal 33"] = new engine.RulesElement({
    name: "Handle Animal 33",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_33",
    source: "Core",
    categories: ["Handle Animal 33", "ID_FMP_SKILL_USAGE_33"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["History Knowledge 65"] = new engine.RulesElement({
    name: "History Knowledge 65",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_65",
    source: "Core",
    categories: ["History Knowledge 65", "ID_FMP_SKILL_USAGE_65"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Hop Down 66"] = new engine.RulesElement({
    name: "Hop Down 66",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_66",
    source: "Core",
    categories: ["Hop Down 66", "ID_FMP_SKILL_USAGE_66"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Insight 23"] = new engine.RulesElement({
    name: "Insight 23",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_23",
    source: "Core",
    categories: ["Insight 23", "ID_FMP_SKILL_USAGE_23"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Intimidate 24"] = new engine.RulesElement({
    name: "Intimidate 24",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_24",
    source: "Core",
    categories: ["Intimidate 24", "ID_FMP_SKILL_USAGE_24"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Jump 56"] = new engine.RulesElement({
    name: "Jump 56",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_56",
    source: "Core",
    categories: ["Jump 56", "ID_FMP_SKILL_USAGE_56"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Monster Knowledge 13"] = new engine.RulesElement({
    name: "Monster Knowledge 13",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_13",
    source: "Core",
    categories: ["Monster Knowledge 13", "ID_FMP_SKILL_USAGE_13"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Monster Knowledge 32"] = new engine.RulesElement({
    name: "Monster Knowledge 32",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_32",
    source: "Core",
    categories: ["Monster Knowledge 32", "ID_FMP_SKILL_USAGE_32"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Monster Knowledge 39"] = new engine.RulesElement({
    name: "Monster Knowledge 39",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_39",
    source: "Core",
    categories: ["Monster Knowledge 39", "ID_FMP_SKILL_USAGE_39"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Monster Knowledge 6"] = new engine.RulesElement({
    name: "Monster Knowledge 6",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_6",
    source: "Core",
    categories: ["Monster Knowledge 6", "ID_FMP_SKILL_USAGE_6"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Nature Knowledge 31"] = new engine.RulesElement({
    name: "Nature Knowledge 31",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_31",
    source: "Core",
    categories: ["Nature Knowledge 31", "ID_FMP_SKILL_USAGE_31"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Open Lock 43"] = new engine.RulesElement({
    name: "Open Lock 43",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_43",
    source: "Core",
    categories: ["Open Lock 43", "ID_FMP_SKILL_USAGE_43"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Perception 36"] = new engine.RulesElement({
    name: "Perception 36",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_36",
    source: "Core",
    categories: ["Perception 36", "ID_FMP_SKILL_USAGE_36"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Pick Pocket 45"] = new engine.RulesElement({
    name: "Pick Pocket 45",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_45",
    source: "Core",
    categories: ["Pick Pocket 45", "ID_FMP_SKILL_USAGE_45"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Reduce Falling Damage 4"] = new engine.RulesElement({
    name: "Reduce Falling Damage 4",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_4",
    source: "Core",
    categories: ["Reduce Falling Damage 4", "ID_FMP_SKILL_USAGE_4"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Religion Knowledge 38"] = new engine.RulesElement({
    name: "Religion Knowledge 38",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_38",
    source: "Core",
    categories: ["Religion Knowledge 38", "ID_FMP_SKILL_USAGE_38"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Sleight of Hand 44"] = new engine.RulesElement({
    name: "Sleight of Hand 44",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_44",
    source: "Core",
    categories: ["Sleight of Hand 44", "ID_FMP_SKILL_USAGE_44"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Stealth 40"] = new engine.RulesElement({
    name: "Stealth 40",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_40",
    source: "Core",
    categories: ["Stealth 40", "ID_FMP_SKILL_USAGE_40"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Streetwise 41"] = new engine.RulesElement({
    name: "Streetwise 41",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_41",
    source: "Core",
    categories: ["Streetwise 41", "ID_FMP_SKILL_USAGE_41"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Swim 59"] = new engine.RulesElement({
    name: "Swim 59",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_59",
    source: "Core",
    categories: ["Swim 59", "ID_FMP_SKILL_USAGE_59"]
  });
  byID[te.id] = te;
  
  te = Skill_Usage["Treat Disease 64"] = new engine.RulesElement({
    name: "Treat Disease 64",
    type: "Skill Usage",
    id: "ID_FMP_SKILL_USAGE_64",
    source: "Core",
    categories: ["Treat Disease 64", "ID_FMP_SKILL_USAGE_64"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
