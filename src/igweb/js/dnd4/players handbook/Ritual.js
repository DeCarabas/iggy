define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Animal Messenger"] = new engine.RulesElement({
    name: "Animal Messenger",
    type: "Ritual",
    id: "ID_FMP_RITUAL_40",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=40",
    categories: ["Animal Messenger", "ID_FMP_RITUAL_40"]
  });
  byID[te.id] = te;
  
  te = Ritual["Arcane Lock"] = new engine.RulesElement({
    name: "Arcane Lock",
    type: "Ritual",
    id: "ID_FMP_RITUAL_23",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=23",
    categories: ["Arcane Lock", "ID_FMP_RITUAL_23"]
  });
  byID[te.id] = te;
  
  te = Ritual["Brew Potion"] = new engine.RulesElement({
    name: "Brew Potion",
    type: "Ritual",
    id: "ID_FMP_RITUAL_1",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1",
    categories: ["Brew Potion", "ID_FMP_RITUAL_1"]
  });
  byID[te.id] = te;
  
  te = Ritual["Commune With Nature"] = new engine.RulesElement({
    name: "Commune With Nature",
    type: "Ritual",
    id: "ID_FMP_RITUAL_41",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=41",
    categories: ["Commune With Nature", "ID_FMP_RITUAL_41"]
  });
  byID[te.id] = te;
  
  te = Ritual["Comprehend Language"] = new engine.RulesElement({
    name: "Comprehend Language",
    type: "Ritual",
    id: "ID_FMP_RITUAL_39",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=39",
    categories: ["Comprehend Language", "ID_FMP_RITUAL_39"]
  });
  byID[te.id] = te;
  
  te = Ritual["Consult Mystic Sages"] = new engine.RulesElement({
    name: "Consult Mystic Sages",
    type: "Ritual",
    id: "ID_FMP_RITUAL_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4",
    categories: ["Consult Mystic Sages", "ID_FMP_RITUAL_4"]
  });
  byID[te.id] = te;
  
  te = Ritual["Consult Oracle"] = new engine.RulesElement({
    name: "Consult Oracle",
    type: "Ritual",
    id: "ID_FMP_RITUAL_5",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5",
    categories: ["Consult Oracle", "ID_FMP_RITUAL_5"]
  });
  byID[te.id] = te;
  
  te = Ritual["Cure Disease"] = new engine.RulesElement({
    name: "Cure Disease",
    type: "Ritual",
    id: "ID_FMP_RITUAL_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6",
    categories: ["Cure Disease", "ID_FMP_RITUAL_6"]
  });
  byID[te.id] = te;
  
  te = Ritual["Detect Object"] = new engine.RulesElement({
    name: "Detect Object",
    type: "Ritual",
    id: "ID_FMP_RITUAL_43",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=43",
    categories: ["Detect Object", "ID_FMP_RITUAL_43"]
  });
  byID[te.id] = te;
  
  te = Ritual["Detect Secret Doors"] = new engine.RulesElement({
    name: "Detect Secret Doors",
    type: "Ritual",
    id: "ID_FMP_RITUAL_42",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=42",
    categories: ["Detect Secret Doors", "ID_FMP_RITUAL_42"]
  });
  byID[te.id] = te;
  
  te = Ritual["Discern Lies"] = new engine.RulesElement({
    name: "Discern Lies",
    type: "Ritual",
    id: "ID_FMP_RITUAL_44",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=44",
    categories: ["Discern Lies", "ID_FMP_RITUAL_44"]
  });
  byID[te.id] = te;
  
  te = Ritual["Disenchant Magic Item"] = new engine.RulesElement({
    name: "Disenchant Magic Item",
    type: "Ritual",
    id: "ID_FMP_RITUAL_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7",
    categories: ["Disenchant Magic Item", "ID_FMP_RITUAL_7"]
  });
  byID[te.id] = te;
  
  te = Ritual["Drawmij's Instant Summons"] = new engine.RulesElement({
    name: "Drawmij's Instant Summons",
    type: "Ritual",
    id: "ID_FMP_RITUAL_46",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=46",
    categories: ["Drawmij's Instant Summons", "ID_FMP_RITUAL_46"]
  });
  byID[te.id] = te;
  
  te = Ritual["Enchant Magic Item"] = new engine.RulesElement({
    name: "Enchant Magic Item",
    type: "Ritual",
    id: "ID_FMP_RITUAL_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9",
    categories: ["Enchant Magic Item", "ID_FMP_RITUAL_9"]
  });
  byID[te.id] = te;
  
  te = Ritual["Endure Elements"] = new engine.RulesElement({
    name: "Endure Elements",
    type: "Ritual",
    id: "ID_FMP_RITUAL_10",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10",
    categories: ["Endure Elements", "ID_FMP_RITUAL_10"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eye of Alarm"] = new engine.RulesElement({
    name: "Eye of Alarm",
    type: "Ritual",
    id: "ID_FMP_RITUAL_11",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11",
    categories: ["Eye of Alarm", "ID_FMP_RITUAL_11"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eye of Warning"] = new engine.RulesElement({
    name: "Eye of Warning",
    type: "Ritual",
    id: "ID_FMP_RITUAL_63",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=63",
    categories: ["Eye of Warning", "ID_FMP_RITUAL_63"]
  });
  byID[te.id] = te;
  
  te = Ritual["Forbiddance"] = new engine.RulesElement({
    name: "Forbiddance",
    type: "Ritual",
    id: "ID_FMP_RITUAL_12",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12",
    categories: ["Forbiddance", "ID_FMP_RITUAL_12"]
  });
  byID[te.id] = te;
  
  te = Ritual["Gentle Repose"] = new engine.RulesElement({
    name: "Gentle Repose",
    type: "Ritual",
    id: "ID_FMP_RITUAL_47",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=47",
    categories: ["Gentle Repose", "ID_FMP_RITUAL_47"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hallucinatory Creature"] = new engine.RulesElement({
    name: "Hallucinatory Creature",
    type: "Ritual",
    id: "ID_FMP_RITUAL_64",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=64",
    categories: ["Hallucinatory Creature", "ID_FMP_RITUAL_64"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hallucinatory Item"] = new engine.RulesElement({
    name: "Hallucinatory Item",
    type: "Ritual",
    id: "ID_FMP_RITUAL_65",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=65",
    categories: ["Hallucinatory Item", "ID_FMP_RITUAL_65"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hand of Fate"] = new engine.RulesElement({
    name: "Hand of Fate",
    type: "Ritual",
    id: "ID_FMP_RITUAL_16",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=16",
    categories: ["Hand of Fate", "ID_FMP_RITUAL_16"]
  });
  byID[te.id] = te;
  
  te = Ritual["Knock"] = new engine.RulesElement({
    name: "Knock",
    type: "Ritual",
    id: "ID_FMP_RITUAL_22",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=22",
    categories: ["Knock", "ID_FMP_RITUAL_22"]
  });
  byID[te.id] = te;
  
  te = Ritual["Leomund's Secret Chest"] = new engine.RulesElement({
    name: "Leomund's Secret Chest",
    type: "Ritual",
    id: "ID_FMP_RITUAL_48",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=48",
    categories: ["Leomund's Secret Chest", "ID_FMP_RITUAL_48"]
  });
  byID[te.id] = te;
  
  te = Ritual["Linked Portal"] = new engine.RulesElement({
    name: "Linked Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2",
    categories: ["Linked Portal", "ID_FMP_RITUAL_2"]
  });
  byID[te.id] = te;
  
  te = Ritual["Loremaster's Bargain"] = new engine.RulesElement({
    name: "Loremaster's Bargain",
    type: "Ritual",
    id: "ID_FMP_RITUAL_21",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=21",
    categories: ["Loremaster's Bargain", "ID_FMP_RITUAL_21"]
  });
  byID[te.id] = te;
  
  te = Ritual["Magic Circle"] = new engine.RulesElement({
    name: "Magic Circle",
    type: "Ritual",
    id: "ID_FMP_RITUAL_49",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=49",
    categories: ["Magic Circle", "ID_FMP_RITUAL_49"]
  });
  byID[te.id] = te;
  
  te = Ritual["Magic Mouth"] = new engine.RulesElement({
    name: "Magic Mouth",
    type: "Ritual",
    id: "ID_FMP_RITUAL_50",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=50",
    categories: ["Magic Mouth", "ID_FMP_RITUAL_50"]
  });
  byID[te.id] = te;
  
  te = Ritual["Make Whole"] = new engine.RulesElement({
    name: "Make Whole",
    type: "Ritual",
    id: "ID_FMP_RITUAL_51",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=51",
    categories: ["Make Whole", "ID_FMP_RITUAL_51"]
  });
  byID[te.id] = te;
  
  te = Ritual["Observe Creature"] = new engine.RulesElement({
    name: "Observe Creature",
    type: "Ritual",
    id: "ID_FMP_RITUAL_24",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=24",
    categories: ["Observe Creature", "ID_FMP_RITUAL_24"]
  });
  byID[te.id] = te;
  
  te = Ritual["Passwall"] = new engine.RulesElement({
    name: "Passwall",
    type: "Ritual",
    id: "ID_FMP_RITUAL_53",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=53",
    categories: ["Passwall", "ID_FMP_RITUAL_53"]
  });
  byID[te.id] = te;
  
  te = Ritual["Phantom Steed"] = new engine.RulesElement({
    name: "Phantom Steed",
    type: "Ritual",
    id: "ID_FMP_RITUAL_26",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=26",
    categories: ["Phantom Steed", "ID_FMP_RITUAL_26"]
  });
  byID[te.id] = te;
  
  te = Ritual["Planar Portal"] = new engine.RulesElement({
    name: "Planar Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_14",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=14",
    categories: ["Planar Portal", "ID_FMP_RITUAL_14"]
  });
  byID[te.id] = te;
  
  te = Ritual["Raise Dead"] = new engine.RulesElement({
    name: "Raise Dead",
    type: "Ritual",
    id: "ID_FMP_RITUAL_27",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=27",
    categories: ["Raise Dead", "ID_FMP_RITUAL_27"]
  });
  byID[te.id] = te;
  
  te = Ritual["Remove Affliction"] = new engine.RulesElement({
    name: "Remove Affliction",
    type: "Ritual",
    id: "ID_FMP_RITUAL_28",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=28",
    categories: ["Remove Affliction", "ID_FMP_RITUAL_28"]
  });
  byID[te.id] = te;
  
  te = Ritual["Secret Page"] = new engine.RulesElement({
    name: "Secret Page",
    type: "Ritual",
    id: "ID_FMP_RITUAL_54",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=54",
    categories: ["Secret Page", "ID_FMP_RITUAL_54"]
  });
  byID[te.id] = te;
  
  te = Ritual["Sending"] = new engine.RulesElement({
    name: "Sending",
    type: "Ritual",
    id: "ID_FMP_RITUAL_55",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=55",
    categories: ["Sending", "ID_FMP_RITUAL_55"]
  });
  byID[te.id] = te;
  
  te = Ritual["Shadow Walk"] = new engine.RulesElement({
    name: "Shadow Walk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_56",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=56",
    categories: ["Shadow Walk", "ID_FMP_RITUAL_56"]
  });
  byID[te.id] = te;
  
  te = Ritual["Silence"] = new engine.RulesElement({
    name: "Silence",
    type: "Ritual",
    id: "ID_FMP_RITUAL_58",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=58",
    categories: ["Silence", "ID_FMP_RITUAL_58"]
  });
  byID[te.id] = te;
  
  te = Ritual["Speak with Dead"] = new engine.RulesElement({
    name: "Speak with Dead",
    type: "Ritual",
    id: "ID_FMP_RITUAL_59",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=59",
    categories: ["Speak with Dead", "ID_FMP_RITUAL_59"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tenser's Floating Disk"] = new engine.RulesElement({
    name: "Tenser's Floating Disk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_60",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=60",
    categories: ["Tenser's Floating Disk", "ID_FMP_RITUAL_60"]
  });
  byID[te.id] = te;
  
  te = Ritual["Travelers' Feast"] = new engine.RulesElement({
    name: "Travelers' Feast",
    type: "Ritual",
    id: "ID_FMP_RITUAL_32",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=32",
    categories: ["Travelers' Feast", "ID_FMP_RITUAL_32"]
  });
  byID[te.id] = te;
  
  te = Ritual["True Portal"] = new engine.RulesElement({
    name: "True Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_15",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=15",
    categories: ["True Portal", "ID_FMP_RITUAL_15"]
  });
  byID[te.id] = te;
  
  te = Ritual["View Location"] = new engine.RulesElement({
    name: "View Location",
    type: "Ritual",
    id: "ID_FMP_RITUAL_34",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=34",
    categories: ["View Location", "ID_FMP_RITUAL_34"]
  });
  byID[te.id] = te;
  
  te = Ritual["View Object"] = new engine.RulesElement({
    name: "View Object",
    type: "Ritual",
    id: "ID_FMP_RITUAL_35",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=35",
    categories: ["View Object", "ID_FMP_RITUAL_35"]
  });
  byID[te.id] = te;
  
  te = Ritual["Voice of Fate"] = new engine.RulesElement({
    name: "Voice of Fate",
    type: "Ritual",
    id: "ID_FMP_RITUAL_36",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=36",
    categories: ["Voice of Fate", "ID_FMP_RITUAL_36"]
  });
  byID[te.id] = te;
  
  te = Ritual["Water Breathing"] = new engine.RulesElement({
    name: "Water Breathing",
    type: "Ritual",
    id: "ID_FMP_RITUAL_37",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=37",
    categories: ["Water Breathing", "ID_FMP_RITUAL_37"]
  });
  byID[te.id] = te;
  
  te = Ritual["Water Walk"] = new engine.RulesElement({
    name: "Water Walk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_61",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=61",
    categories: ["Water Walk", "ID_FMP_RITUAL_61"]
  });
  byID[te.id] = te;
  
  te = Ritual["Wizard's Sight"] = new engine.RulesElement({
    name: "Wizard's Sight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_3",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3",
    categories: ["Wizard's Sight", "ID_FMP_RITUAL_3"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
