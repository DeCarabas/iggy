define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["Ability Scores"] = new engine.RulesElement({
    name: "Ability Scores",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_ABILITY_SCORES",
    source: "Core",
    categories: ["Ability Scores", "ID_INTERNAL_INFORMATION_ABILITY_SCORES"]
  });
  byID[te.id] = te;
  
  te = Information["Alchemy"] = new engine.RulesElement({
    name: "Alchemy",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_ALCHEMY",
    source: "Core",
    categories: ["Alchemy", "ID_INTERNAL_INFORMATION_ALCHEMY"]
  });
  byID[te.id] = te;
  
  te = Information["Background"] = new engine.RulesElement({
    name: "Background",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_BACKGROUND",
    source: "Core",
    categories: ["Background", "ID_INTERNAL_INFORMATION_BACKGROUND"]
  });
  byID[te.id] = te;
  
  te = Information["Bonuses"] = new engine.RulesElement({
    name: "Bonuses",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_BONUSES",
    source: "Core",
    categories: ["Bonuses", "ID_INTERNAL_INFORMATION_BONUSES"]
  });
  byID[te.id] = te;
  
  te = Information["Build"] = new engine.RulesElement({
    name: "Build",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_BUILD",
    source: "Core",
    categories: ["Build", "ID_INTERNAL_INFORMATION_BUILD"]
  });
  byID[te.id] = te;
  
  te = Information["Campaign"] = new engine.RulesElement({
    name: "Campaign",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_CAMPAIGN",
    source: "Core",
    categories: ["Campaign", "ID_INTERNAL_INFORMATION_CAMPAIGN"]
  });
  byID[te.id] = te;
  
  te = Information["Character Sheet"] = new engine.RulesElement({
    name: "Character Sheet",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_CHARACTER_SHEET",
    source: "Core",
    categories: ["Character Sheet", "ID_INTERNAL_INFORMATION_CHARACTER_SHEET"]
  });
  byID[te.id] = te;
  
  te = Information["Class"] = new engine.RulesElement({
    name: "Class",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_CLASS",
    source: "Core",
    categories: ["Class", "ID_INTERNAL_INFORMATION_CLASS"]
  });
  byID[te.id] = te;
  
  te = Information["Companion"] = new engine.RulesElement({
    name: "Companion",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_COMPANION",
    source: "Core",
    categories: ["Companion", "ID_INTERNAL_INFORMATION_COMPANION"]
  });
  byID[te.id] = te;
  
  te = Information["Deity"] = new engine.RulesElement({
    name: "Deity",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_DEITY",
    source: "Core",
    categories: ["Deity", "ID_INTERNAL_INFORMATION_DEITY"]
  });
  byID[te.id] = te;
  
  te = Information["Details"] = new engine.RulesElement({
    name: "Details",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_DETAILS",
    source: "Core",
    categories: ["Details", "ID_INTERNAL_INFORMATION_DETAILS"]
  });
  byID[te.id] = te;
  
  te = Information["Epic Destiny"] = new engine.RulesElement({
    name: "Epic Destiny",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_EPIC_DESTINY",
    source: "Core",
    categories: ["Epic Destiny", "ID_INTERNAL_INFORMATION_EPIC_DESTINY"]
  });
  byID[te.id] = te;
  
  te = Information["Equipment"] = new engine.RulesElement({
    name: "Equipment",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_EQUIPMENT",
    source: "Core",
    categories: ["Equipment", "ID_INTERNAL_INFORMATION_EQUIPMENT"]
  });
  byID[te.id] = te;
  
  te = Information["Feats"] = new engine.RulesElement({
    name: "Feats",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_FEATS",
    source: "Core",
    categories: ["Feats", "ID_INTERNAL_INFORMATION_FEATS"]
  });
  byID[te.id] = te;
  
  te = Information["Inherent Bonuses"] = new engine.RulesElement({
    name: "Inherent Bonuses",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_INHERENT_BONUSES",
    source: "Core",
    categories: ["Inherent Bonuses", "ID_INTERNAL_INFORMATION_INHERENT_BONUSES"]
  });
  byID[te.id] = te;
  
  te = Information["Journal"] = new engine.RulesElement({
    name: "Journal",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_JOURNAL",
    source: "Core",
    categories: ["Journal", "ID_INTERNAL_INFORMATION_JOURNAL"]
  });
  byID[te.id] = te;
  
  te = Information["Leveling"] = new engine.RulesElement({
    name: "Leveling",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_LEVELING",
    source: "Core",
    categories: ["Leveling", "ID_INTERNAL_INFORMATION_LEVELING"]
  });
  byID[te.id] = te;
  
  te = Information["Martial Practices"] = new engine.RulesElement({
    name: "Martial Practices",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_MARTIAL_PRACTICES",
    source: "Core",
    categories: ["Martial Practices", "ID_INTERNAL_INFORMATION_MARTIAL_PRACTICES"]
  });
  byID[te.id] = te;
  
  te = Information["Money"] = new engine.RulesElement({
    name: "Money",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_MONEY",
    source: "Core",
    categories: ["Money", "ID_INTERNAL_INFORMATION_MONEY"]
  });
  byID[te.id] = te;
  
  te = Information["Paragon Path"] = new engine.RulesElement({
    name: "Paragon Path",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_PARAGON_PATH",
    source: "Core",
    categories: ["Paragon Path", "ID_INTERNAL_INFORMATION_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Information["Portrait"] = new engine.RulesElement({
    name: "Portrait",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_PORTRAIT",
    source: "Core",
    categories: ["Portrait", "ID_INTERNAL_INFORMATION_PORTRAIT"]
  });
  byID[te.id] = te;
  
  te = Information["Powers"] = new engine.RulesElement({
    name: "Powers",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_POWERS",
    source: "Core",
    categories: ["Powers", "ID_INTERNAL_INFORMATION_POWERS"]
  });
  byID[te.id] = te;
  
  te = Information["Race"] = new engine.RulesElement({
    name: "Race",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_RACE",
    source: "Core",
    categories: ["Race", "ID_INTERNAL_INFORMATION_RACE"]
  });
  byID[te.id] = te;
  
  te = Information["Retraining"] = new engine.RulesElement({
    name: "Retraining",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_RETRAINING",
    source: "Core",
    categories: ["Retraining", "ID_INTERNAL_INFORMATION_RETRAINING"]
  });
  byID[te.id] = te;
  
  te = Information["Rituals"] = new engine.RulesElement({
    name: "Rituals",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_RITUALS",
    source: "Core",
    categories: ["Rituals", "ID_INTERNAL_INFORMATION_RITUALS"]
  });
  byID[te.id] = te;
  
  te = Information["Skills"] = new engine.RulesElement({
    name: "Skills",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_SKILLS",
    source: "Core",
    categories: ["Skills", "ID_INTERNAL_INFORMATION_SKILLS"]
  });
  byID[te.id] = te;
  
  te = Information["Spellbook"] = new engine.RulesElement({
    name: "Spellbook",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_SPELLBOOK",
    source: "Core",
    categories: ["Spellbook", "ID_INTERNAL_INFORMATION_SPELLBOOK"]
  });
  byID[te.id] = te;
  
  te = Information["Spellscarred"] = new engine.RulesElement({
    name: "Spellscarred",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_SPELLSCARRED",
    source: "Core",
    categories: ["Spellscarred", "ID_INTERNAL_INFORMATION_SPELLSCARRED"]
  });
  byID[te.id] = te;
  
  te = Information["Summary"] = new engine.RulesElement({
    name: "Summary",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_SUMMARY",
    source: "Core",
    categories: ["Summary", "ID_INTERNAL_INFORMATION_SUMMARY"]
  });
  byID[te.id] = te;
  
  te = Information["Toggling a Source"] = new engine.RulesElement({
    name: "Toggling a Source",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_TOGGLING_A_SOURCE",
    source: "Core",
    categories: ["Toggling a Source", "ID_INTERNAL_INFORMATION_TOGGLING_A_SOURCE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
