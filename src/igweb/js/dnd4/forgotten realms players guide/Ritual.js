define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Amanuensis"] = new engine.RulesElement({
    name: "Amanuensis",
    type: "Ritual",
    id: "ID_FMP_RITUAL_75",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=75",
    categories: ["Amanuensis", "ID_FMP_RITUAL_75"]
  });
  byID[te.id] = te;
  
  te = Ritual["Analyze Portal"] = new engine.RulesElement({
    name: "Analyze Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_76",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=76",
    categories: ["Analyze Portal", "ID_FMP_RITUAL_76"]
  });
  byID[te.id] = te;
  
  te = Ritual["Arcane Mark"] = new engine.RulesElement({
    name: "Arcane Mark",
    type: "Ritual",
    id: "ID_FMP_RITUAL_77",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=77",
    categories: ["Arcane Mark", "ID_FMP_RITUAL_77"]
  });
  byID[te.id] = te;
  
  te = Ritual["Clear the Path"] = new engine.RulesElement({
    name: "Clear the Path",
    type: "Ritual",
    id: "ID_FMP_RITUAL_78",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=78",
    categories: ["Clear the Path", "ID_FMP_RITUAL_78"]
  });
  byID[te.id] = te;
  
  te = Ritual["Dark Light"] = new engine.RulesElement({
    name: "Dark Light",
    type: "Ritual",
    id: "ID_FMP_RITUAL_79",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=79",
    categories: ["Dark Light", "ID_FMP_RITUAL_79"]
  });
  byID[te.id] = te;
  
  te = Ritual["Deathly Shroud"] = new engine.RulesElement({
    name: "Deathly Shroud",
    type: "Ritual",
    id: "ID_FMP_RITUAL_80",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=80",
    categories: ["Deathly Shroud", "ID_FMP_RITUAL_80"]
  });
  byID[te.id] = te;
  
  te = Ritual["Divine Sight"] = new engine.RulesElement({
    name: "Divine Sight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_81",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=81",
    categories: ["Divine Sight", "ID_FMP_RITUAL_81"]
  });
  byID[te.id] = te;
  
  te = Ritual["Duplicate"] = new engine.RulesElement({
    name: "Duplicate",
    type: "Ritual",
    id: "ID_FMP_RITUAL_82",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=82",
    categories: ["Duplicate", "ID_FMP_RITUAL_82"]
  });
  byID[te.id] = te;
  
  te = Ritual["Feat of Strength"] = new engine.RulesElement({
    name: "Feat of Strength",
    type: "Ritual",
    id: "ID_FMP_RITUAL_83",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=83",
    categories: ["Feat of Strength", "ID_FMP_RITUAL_83"]
  });
  byID[te.id] = te;
  
  te = Ritual["Purge Spellplague"] = new engine.RulesElement({
    name: "Purge Spellplague",
    type: "Ritual",
    id: "ID_FMP_RITUAL_84",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=84",
    categories: ["Purge Spellplague", "ID_FMP_RITUAL_84"]
  });
  byID[te.id] = te;
  
  te = Ritual["Purify Spellscarred"] = new engine.RulesElement({
    name: "Purify Spellscarred",
    type: "Ritual",
    id: "ID_FMP_RITUAL_85",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=85",
    categories: ["Purify Spellscarred", "ID_FMP_RITUAL_85"]
  });
  byID[te.id] = te;
  
  te = Ritual["Raise Land"] = new engine.RulesElement({
    name: "Raise Land",
    type: "Ritual",
    id: "ID_FMP_RITUAL_86",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=86",
    categories: ["Raise Land", "ID_FMP_RITUAL_86"]
  });
  byID[te.id] = te;
  
  te = Ritual["Seek Rumor"] = new engine.RulesElement({
    name: "Seek Rumor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_87",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=87",
    categories: ["Seek Rumor", "ID_FMP_RITUAL_87"]
  });
  byID[te.id] = te;
  
  te = Ritual["Shadow Bridge"] = new engine.RulesElement({
    name: "Shadow Bridge",
    type: "Ritual",
    id: "ID_FMP_RITUAL_88",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=88",
    categories: ["Shadow Bridge", "ID_FMP_RITUAL_88"]
  });
  byID[te.id] = te;
  
  te = Ritual["Share Husk"] = new engine.RulesElement({
    name: "Share Husk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_89",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=89",
    categories: ["Share Husk", "ID_FMP_RITUAL_89"]
  });
  byID[te.id] = te;
  
  te = Ritual["Shift Mote"] = new engine.RulesElement({
    name: "Shift Mote",
    type: "Ritual",
    id: "ID_FMP_RITUAL_90",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=90",
    categories: ["Shift Mote", "ID_FMP_RITUAL_90"]
  });
  byID[te.id] = te;
  
  te = Ritual["Simbul's Conversion"] = new engine.RulesElement({
    name: "Simbul's Conversion",
    type: "Ritual",
    id: "ID_FMP_RITUAL_91",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=91",
    categories: ["Simbul's Conversion", "ID_FMP_RITUAL_91"]
  });
  byID[te.id] = te;
  
  te = Ritual["Soulguard"] = new engine.RulesElement({
    name: "Soulguard",
    type: "Ritual",
    id: "ID_FMP_RITUAL_92",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=92",
    categories: ["Soulguard", "ID_FMP_RITUAL_92"]
  });
  byID[te.id] = te;
  
  te = Ritual["Status"] = new engine.RulesElement({
    name: "Status",
    type: "Ritual",
    id: "ID_FMP_RITUAL_93",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=93",
    categories: ["Status", "ID_FMP_RITUAL_93"]
  });
  byID[te.id] = te;
  
  te = Ritual["Time Ravager"] = new engine.RulesElement({
    name: "Time Ravager",
    type: "Ritual",
    id: "ID_FMP_RITUAL_94",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=94",
    categories: ["Time Ravager", "ID_FMP_RITUAL_94"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tiny Lanterns"] = new engine.RulesElement({
    name: "Tiny Lanterns",
    type: "Ritual",
    id: "ID_FMP_RITUAL_95",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=95",
    categories: ["Tiny Lanterns", "ID_FMP_RITUAL_95"]
  });
  byID[te.id] = te;
  
  te = Ritual["Trailblaze"] = new engine.RulesElement({
    name: "Trailblaze",
    type: "Ritual",
    id: "ID_FMP_RITUAL_96",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=96",
    categories: ["Trailblaze", "ID_FMP_RITUAL_96"]
  });
  byID[te.id] = te;
  
  te = Ritual["Walk Crossroads"] = new engine.RulesElement({
    name: "Walk Crossroads",
    type: "Ritual",
    id: "ID_FMP_RITUAL_97",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=97",
    categories: ["Walk Crossroads", "ID_FMP_RITUAL_97"]
  });
  byID[te.id] = te;
  
  te = Ritual["Waterborn"] = new engine.RulesElement({
    name: "Waterborn",
    type: "Ritual",
    id: "ID_FMP_RITUAL_98",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=98",
    categories: ["Waterborn", "ID_FMP_RITUAL_98"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
