define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Cleansing Challenge"] = new engine.RulesElement({
    name: "Cleansing Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1086",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1086",
    categories: ["Cleansing Challenge", "ID_FMP_FEAT_1086"]
  });
  byID[te.id] = te;
  
  te = Feat["Dazing Rebuke"] = new engine.RulesElement({
    name: "Dazing Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1093",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1093",
    categories: ["Dazing Rebuke", "ID_FMP_FEAT_1093"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Boon"] = new engine.RulesElement({
    name: "Divine Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_1087",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1087",
    categories: ["Divine Boon", "ID_FMP_FEAT_1087"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Purity"] = new engine.RulesElement({
    name: "Divine Purity",
    type: "Feat",
    id: "ID_FMP_FEAT_1088",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1088",
    categories: ["Divine Purity", "ID_FMP_FEAT_1088"]
  });
  byID[te.id] = te;
  
  te = Feat["Ghost Touched"] = new engine.RulesElement({
    name: "Ghost Touched",
    type: "Feat",
    id: "ID_FMP_FEAT_1097",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1097",
    categories: ["Ghost Touched", "ID_FMP_FEAT_1097", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Greater Turning"] = new engine.RulesElement({
    name: "Greater Turning",
    type: "Feat",
    id: "ID_FMP_FEAT_1089",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1089",
    categories: ["Greater Turning", "ID_FMP_FEAT_1089"]
  });
  byID[te.id] = te;
  
  te = Feat["Purifying Light"] = new engine.RulesElement({
    name: "Purifying Light",
    type: "Feat",
    id: "ID_FMP_FEAT_1090",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1090",
    categories: ["Purifying Light", "ID_FMP_FEAT_1090"],
    rules: function(model) {
      model.statadd("Purifying Light", 1);
      model.statadd("Purifying Light", 1);
      model.statadd("Purifying Light", 1);
      model.statadd("radiant:attack", function() { /* against undead targets */ return model.stat("Purifying Light"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Hunter"] = new engine.RulesElement({
    name: "Radiant Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_1094",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1094",
    categories: ["Radiant Hunter", "ID_FMP_FEAT_1094"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Soul"] = new engine.RulesElement({
    name: "Radiant Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1098",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1098",
    categories: ["Radiant Soul", "ID_FMP_FEAT_1098", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Touch"] = new engine.RulesElement({
    name: "Radiant Touch",
    type: "Feat",
    id: "ID_FMP_FEAT_1091",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1091",
    categories: ["Radiant Touch", "ID_FMP_FEAT_1091"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6578"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Raven Queen Devotee"] = new engine.RulesElement({
    name: "Raven Queen Devotee",
    type: "Feat",
    id: "ID_FMP_FEAT_1099",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1099",
    categories: ["Raven Queen Devotee", "ID_FMP_FEAT_1099", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Born Warlock"] = new engine.RulesElement({
    name: "Shadow Born Warlock",
    type: "Feat",
    id: "ID_FMP_FEAT_1095",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1095",
    categories: ["Shadow Born Warlock", "ID_FMP_FEAT_1095"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Soul"] = new engine.RulesElement({
    name: "Shadow Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1100",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1100",
    categories: ["Shadow Soul", "ID_FMP_FEAT_1100", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of Moil"] = new engine.RulesElement({
    name: "Student of Moil",
    type: "Feat",
    id: "ID_FMP_FEAT_1092",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1092",
    categories: ["Student of Moil", "ID_FMP_FEAT_1092"],
    rules: function(model) {
      model.statadd("cold:damage", 1, "Feat");
      model.statadd("cold:damage", 2, "Feat");
      model.statadd("cold:damage", 3, "Feat");
      model.statadd("necrotic:damage", 1, "Feat");
      model.statadd("necrotic:damage", 2, "Feat");
      model.statadd("necrotic:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Undead Hunter"] = new engine.RulesElement({
    name: "Undead Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_1101",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1101",
    categories: ["Undead Hunter", "ID_FMP_FEAT_1101", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Healing Surge Value", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Undead Ward"] = new engine.RulesElement({
    name: "Undead Ward",
    type: "Feat",
    id: "ID_FMP_FEAT_1096",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1096",
    categories: ["Undead Ward", "ID_FMP_FEAT_1096"]
  });
  byID[te.id] = te;
  
  te = Feat["Zombie Veteran"] = new engine.RulesElement({
    name: "Zombie Veteran",
    type: "Feat",
    id: "ID_FMP_FEAT_1102",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1102",
    categories: ["Zombie Veteran", "ID_FMP_FEAT_1102", "ID_INTERNAL_CATEGORY_HERITAGE", "Heritage"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* to escape a grab */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
