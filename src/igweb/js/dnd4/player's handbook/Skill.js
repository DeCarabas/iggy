(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Skill = types['Skill'] || (types['Skill'] = {});
  te = Skill["Acrobatics"] = new RulesElement({
    name: "Acrobatics",
    type: "Skill",
    id: "ID_FMP_SKILL_1",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1",
    categories: ["Acrobatics", "ID_FMP_SKILL_1"]
  });
  byID[te.id] = te;
  
  te = Skill["Arcana"] = new RulesElement({
    name: "Arcana",
    type: "Skill",
    id: "ID_FMP_SKILL_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2",
    categories: ["Arcana", "ID_FMP_SKILL_2"]
  });
  byID[te.id] = te;
  
  te = Skill["Athletics"] = new RulesElement({
    name: "Athletics",
    type: "Skill",
    id: "ID_FMP_SKILL_27",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=27",
    categories: ["Athletics", "ID_FMP_SKILL_27"]
  });
  byID[te.id] = te;
  
  te = Skill["Bluff"] = new RulesElement({
    name: "Bluff",
    type: "Skill",
    id: "ID_FMP_SKILL_3",
    source: "Player's Handbook,Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3",
    categories: ["Bluff", "ID_FMP_SKILL_3"]
  });
  byID[te.id] = te;
  
  te = Skill["Diplomacy"] = new RulesElement({
    name: "Diplomacy",
    type: "Skill",
    id: "ID_FMP_SKILL_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6",
    categories: ["Diplomacy", "ID_FMP_SKILL_6"]
  });
  byID[te.id] = te;
  
  te = Skill["Dungeoneering"] = new RulesElement({
    name: "Dungeoneering",
    type: "Skill",
    id: "ID_FMP_SKILL_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7",
    categories: ["Dungeoneering", "ID_FMP_SKILL_7"]
  });
  byID[te.id] = te;
  
  te = Skill["Endurance"] = new RulesElement({
    name: "Endurance",
    type: "Skill",
    id: "ID_FMP_SKILL_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8",
    categories: ["Endurance", "ID_FMP_SKILL_8"]
  });
  byID[te.id] = te;
  
  te = Skill["Heal"] = new RulesElement({
    name: "Heal",
    type: "Skill",
    id: "ID_FMP_SKILL_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9",
    categories: ["Heal", "ID_FMP_SKILL_9"]
  });
  byID[te.id] = te;
  
  te = Skill["History"] = new RulesElement({
    name: "History",
    type: "Skill",
    id: "ID_FMP_SKILL_11",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11",
    categories: ["History", "ID_FMP_SKILL_11"]
  });
  byID[te.id] = te;
  
  te = Skill["Insight"] = new RulesElement({
    name: "Insight",
    type: "Skill",
    id: "ID_FMP_SKILL_13",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=13",
    categories: ["Insight", "ID_FMP_SKILL_13"]
  });
  byID[te.id] = te;
  
  te = Skill["Intimidate"] = new RulesElement({
    name: "Intimidate",
    type: "Skill",
    id: "ID_FMP_SKILL_14",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=14",
    categories: ["Intimidate", "ID_FMP_SKILL_14"]
  });
  byID[te.id] = te;
  
  te = Skill["Nature"] = new RulesElement({
    name: "Nature",
    type: "Skill",
    id: "ID_FMP_SKILL_16",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=16",
    categories: ["Nature", "ID_FMP_SKILL_16"]
  });
  byID[te.id] = te;
  
  te = Skill["Perception"] = new RulesElement({
    name: "Perception",
    type: "Skill",
    id: "ID_FMP_SKILL_17",
    source: "Player's Handbook,Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=17",
    categories: ["Perception", "ID_FMP_SKILL_17"]
  });
  byID[te.id] = te;
  
  te = Skill["Religion"] = new RulesElement({
    name: "Religion",
    type: "Skill",
    id: "ID_FMP_SKILL_18",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=18",
    categories: ["Religion", "ID_FMP_SKILL_18"]
  });
  byID[te.id] = te;
  
  te = Skill["Stealth"] = new RulesElement({
    name: "Stealth",
    type: "Skill",
    id: "ID_FMP_SKILL_20",
    source: "Player's Handbook,Player's Handbook 2,Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=20",
    categories: ["Stealth", "ID_FMP_SKILL_20"]
  });
  byID[te.id] = te;
  
  te = Skill["Streetwise"] = new RulesElement({
    name: "Streetwise",
    type: "Skill",
    id: "ID_FMP_SKILL_21",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=21",
    categories: ["Streetwise", "ID_FMP_SKILL_21"]
  });
  byID[te.id] = te;
  
  te = Skill["Thievery"] = new RulesElement({
    name: "Thievery",
    type: "Skill",
    id: "ID_FMP_SKILL_23",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=23",
    categories: ["Thievery", "ID_FMP_SKILL_23"]
  });
  byID[te.id] = te;
  
  
})(this);