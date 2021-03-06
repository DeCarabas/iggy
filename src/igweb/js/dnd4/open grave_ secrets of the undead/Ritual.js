define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Corpse Gate"] = new engine.RulesElement({
    name: "Corpse Gate",
    type: "Ritual",
    id: "ID_FMP_RITUAL_180",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=180",
    categories: ["Corpse Gate", "ID_FMP_RITUAL_180"]
  });
  byID[te.id] = te;
  
  te = Ritual["Corpse Light"] = new engine.RulesElement({
    name: "Corpse Light",
    type: "Ritual",
    id: "ID_FMP_RITUAL_182",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=182",
    categories: ["Corpse Light", "ID_FMP_RITUAL_182"]
  });
  byID[te.id] = te;
  
  te = Ritual["Gravesight"] = new engine.RulesElement({
    name: "Gravesight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_181",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=181",
    categories: ["Gravesight", "ID_FMP_RITUAL_181"]
  });
  byID[te.id] = te;
  
  te = Ritual["Last Sight Vision"] = new engine.RulesElement({
    name: "Last Sight Vision",
    type: "Ritual",
    id: "ID_FMP_RITUAL_183",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=183",
    categories: ["Last Sight Vision", "ID_FMP_RITUAL_183"]
  });
  byID[te.id] = te;
  
  te = Ritual["Skull Watch"] = new engine.RulesElement({
    name: "Skull Watch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_184",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=184",
    categories: ["Skull Watch", "ID_FMP_RITUAL_184"]
  });
  byID[te.id] = te;
  
  te = Ritual["Undead Servitor"] = new engine.RulesElement({
    name: "Undead Servitor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_185",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=185",
    categories: ["Undead Servitor", "ID_FMP_RITUAL_185"]
  });
  byID[te.id] = te;
  
  te = Ritual["Undead Ward"] = new engine.RulesElement({
    name: "Undead Ward",
    type: "Ritual",
    id: "ID_FMP_RITUAL_186",
    source: "Open Grave: Secrets of the Undead",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=186",
    categories: ["Undead Ward", "ID_FMP_RITUAL_186"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
