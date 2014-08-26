define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Anthem of Unity"] = new engine.RulesElement({
    name: "Anthem of Unity",
    type: "Ritual",
    id: "ID_FMP_RITUAL_214",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=214",
    categories: ["Anthem of Unity", "ID_FMP_RITUAL_214"]
  });
  byID[te.id] = te;
  
  te = Ritual["Beast Growth"] = new engine.RulesElement({
    name: "Beast Growth",
    type: "Ritual",
    id: "ID_FMP_RITUAL_216",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=216",
    categories: ["Beast Growth", "ID_FMP_RITUAL_216"]
  });
  byID[te.id] = te;
  
  te = Ritual["Call of Friendship"] = new engine.RulesElement({
    name: "Call of Friendship",
    type: "Ritual",
    id: "ID_FMP_RITUAL_217",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=217",
    categories: ["Call of Friendship", "ID_FMP_RITUAL_217"]
  });
  byID[te.id] = te;
  
  te = Ritual["Detect Treasure"] = new engine.RulesElement({
    name: "Detect Treasure",
    type: "Ritual",
    id: "ID_FMP_RITUAL_218",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=218",
    categories: ["Detect Treasure", "ID_FMP_RITUAL_218"]
  });
  byID[te.id] = te;
  
  te = Ritual["Farsight"] = new engine.RulesElement({
    name: "Farsight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_112",
    source: "Arcane Power,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=112",
    categories: ["Farsight", "ID_FMP_RITUAL_112"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fool's Gold"] = new engine.RulesElement({
    name: "Fool's Gold",
    type: "Ritual",
    id: "ID_FMP_RITUAL_219",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=219",
    categories: ["Fool's Gold", "ID_FMP_RITUAL_219"]
  });
  byID[te.id] = te;
  
  te = Ritual["Guards and Wards"] = new engine.RulesElement({
    name: "Guards and Wards",
    type: "Ritual",
    id: "ID_FMP_RITUAL_220",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=220",
    categories: ["Guards and Wards", "ID_FMP_RITUAL_220"]
  });
  byID[te.id] = te;
  
  te = Ritual["History Revealed"] = new engine.RulesElement({
    name: "History Revealed",
    type: "Ritual",
    id: "ID_FMP_RITUAL_221",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=221",
    categories: ["History Revealed", "ID_FMP_RITUAL_221"]
  });
  byID[te.id] = te;
  
  te = Ritual["Imprisonment"] = new engine.RulesElement({
    name: "Imprisonment",
    type: "Ritual",
    id: "ID_FMP_RITUAL_222",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=222",
    categories: ["Imprisonment", "ID_FMP_RITUAL_222"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lower Water"] = new engine.RulesElement({
    name: "Lower Water",
    type: "Ritual",
    id: "ID_FMP_RITUAL_223",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=223",
    categories: ["Lower Water", "ID_FMP_RITUAL_223"]
  });
  byID[te.id] = te;
  
  te = Ritual["Magic Map"] = new engine.RulesElement({
    name: "Magic Map",
    type: "Ritual",
    id: "ID_FMP_RITUAL_224",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=224",
    categories: ["Magic Map", "ID_FMP_RITUAL_224"]
  });
  byID[te.id] = te;
  
  te = Ritual["Object Reading"] = new engine.RulesElement({
    name: "Object Reading",
    type: "Ritual",
    id: "ID_FMP_RITUAL_225",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=225",
    categories: ["Object Reading", "ID_FMP_RITUAL_225"]
  });
  byID[te.id] = te;
  
  te = Ritual["Preserve Flame"] = new engine.RulesElement({
    name: "Preserve Flame",
    type: "Ritual",
    id: "ID_FMP_RITUAL_118",
    source: "Arcane Power,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=118",
    categories: ["Preserve Flame", "ID_FMP_RITUAL_118"]
  });
  byID[te.id] = te;
  
  te = Ritual["Purify Water"] = new engine.RulesElement({
    name: "Purify Water",
    type: "Ritual",
    id: "ID_FMP_RITUAL_227",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=227",
    categories: ["Purify Water", "ID_FMP_RITUAL_227"]
  });
  byID[te.id] = te;
  
  te = Ritual["Shrink"] = new engine.RulesElement({
    name: "Shrink",
    type: "Ritual",
    id: "ID_FMP_RITUAL_228",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=228",
    categories: ["Shrink", "ID_FMP_RITUAL_228"]
  });
  byID[te.id] = te;
  
  te = Ritual["Telepathic Bond"] = new engine.RulesElement({
    name: "Telepathic Bond",
    type: "Ritual",
    id: "ID_FMP_RITUAL_229",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=229",
    categories: ["Telepathic Bond", "ID_FMP_RITUAL_229"]
  });
  byID[te.id] = te;
  
  te = Ritual["Unseen Servant"] = new engine.RulesElement({
    name: "Unseen Servant",
    type: "Ritual",
    id: "ID_FMP_RITUAL_230",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=230",
    categories: ["Unseen Servant", "ID_FMP_RITUAL_230"]
  });
  byID[te.id] = te;
  
  te = Ritual["Whispers of the Edifice"] = new engine.RulesElement({
    name: "Whispers of the Edifice",
    type: "Ritual",
    id: "ID_FMP_RITUAL_231",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=231",
    categories: ["Whispers of the Edifice", "ID_FMP_RITUAL_231"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
