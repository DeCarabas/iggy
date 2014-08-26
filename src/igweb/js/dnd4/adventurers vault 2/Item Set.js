define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Aleheart Companions' Gear"] = new engine.RulesElement({
    name: "Aleheart Companions' Gear",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_1",
    source: "Adventurer's Vault 2",
    categories: ["Aleheart Companions' Gear", "ID_FMP_ITEM_SET_1"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Armory of the Unvanquished"] = new engine.RulesElement({
    name: "Armory of the Unvanquished",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_32",
    source: "Adventurer's Vault 2",
    categories: ["Armory of the Unvanquished", "ID_FMP_ITEM_SET_32"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Arms of Unbreakable Honor"] = new engine.RulesElement({
    name: "Arms of Unbreakable Honor",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_14",
    source: "Adventurer's Vault 2",
    categories: ["Arms of Unbreakable Honor", "ID_FMP_ITEM_SET_14"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Arms of War"] = new engine.RulesElement({
    name: "Arms of War",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_2",
    source: "Adventurer's Vault 2",
    categories: ["Arms of War", "ID_FMP_ITEM_SET_2"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Aspect of the Ram"] = new engine.RulesElement({
    name: "Aspect of the Ram",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_15",
    source: "Adventurer's Vault 2",
    categories: ["Aspect of the Ram", "ID_FMP_ITEM_SET_15"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Ayrkashna Armor"] = new engine.RulesElement({
    name: "Ayrkashna Armor",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_16",
    source: "Adventurer's Vault 2",
    categories: ["Ayrkashna Armor", "ID_FMP_ITEM_SET_16"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Blade Dancer's Regalia"] = new engine.RulesElement({
    name: "Blade Dancer's Regalia",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_3",
    source: "Adventurer's Vault 2",
    categories: ["Blade Dancer's Regalia", "ID_FMP_ITEM_SET_3"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Caelynnvala's Boons"] = new engine.RulesElement({
    name: "Caelynnvala's Boons",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_33",
    source: "Adventurer's Vault 2",
    categories: ["Caelynnvala's Boons", "ID_FMP_ITEM_SET_33"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Champion's Flame"] = new engine.RulesElement({
    name: "Champion's Flame",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_17",
    source: "Adventurer's Vault 2",
    categories: ["Champion's Flame", "ID_FMP_ITEM_SET_17"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Eldritch Panoply"] = new engine.RulesElement({
    name: "Eldritch Panoply",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_18",
    source: "Adventurer's Vault 2",
    categories: ["Eldritch Panoply", "ID_FMP_ITEM_SET_18"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Fortune Stones"] = new engine.RulesElement({
    name: "Fortune Stones",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_34",
    source: "Adventurer's Vault 2",
    categories: ["Fortune Stones", "ID_FMP_ITEM_SET_34"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Gadgeteer's Garb"] = new engine.RulesElement({
    name: "Gadgeteer's Garb",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_4",
    source: "Adventurer's Vault 2",
    categories: ["Gadgeteer's Garb", "ID_FMP_ITEM_SET_4"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Gifts for the Queen"] = new engine.RulesElement({
    name: "Gifts for the Queen",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_19",
    source: "Adventurer's Vault 2",
    categories: ["Gifts for the Queen", "ID_FMP_ITEM_SET_19"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Golden Lion's Battle Regalia"] = new engine.RulesElement({
    name: "Golden Lion's Battle Regalia",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_5",
    source: "Adventurer's Vault 2",
    categories: ["Golden Lion's Battle Regalia", "ID_FMP_ITEM_SET_5"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Heirlooms of Mazgorax"] = new engine.RulesElement({
    name: "Heirlooms of Mazgorax",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_35",
    source: "Adventurer's Vault 2",
    categories: ["Heirlooms of Mazgorax", "ID_FMP_ITEM_SET_35"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Kamestiri Uniform"] = new engine.RulesElement({
    name: "Kamestiri Uniform",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_6",
    source: "Adventurer's Vault 2",
    categories: ["Kamestiri Uniform", "ID_FMP_ITEM_SET_6"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Marjam's Dream"] = new engine.RulesElement({
    name: "Marjam's Dream",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_7",
    source: "Adventurer's Vault 2",
    categories: ["Marjam's Dream", "ID_FMP_ITEM_SET_7"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Mirror of Nessecar"] = new engine.RulesElement({
    name: "Mirror of Nessecar",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_27",
    source: "Adventurer's Vault 2",
    categories: ["Mirror of Nessecar", "ID_FMP_ITEM_SET_27"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Offerings of Celestian"] = new engine.RulesElement({
    name: "Offerings of Celestian",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_20",
    source: "Adventurer's Vault 2",
    categories: ["Offerings of Celestian", "ID_FMP_ITEM_SET_20"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Panoply of the Shepherds of Ghest"] = new engine.RulesElement({
    name: "Panoply of the Shepherds of Ghest",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_21",
    source: "Adventurer's Vault 2",
    categories: ["Panoply of the Shepherds of Ghest", "ID_FMP_ITEM_SET_21"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Points of the Constellation"] = new engine.RulesElement({
    name: "Points of the Constellation",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_28",
    source: "Adventurer's Vault 2",
    categories: ["Points of the Constellation", "ID_FMP_ITEM_SET_28"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Radiant Temple Treasures"] = new engine.RulesElement({
    name: "Radiant Temple Treasures",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_8",
    source: "Adventurer's Vault 2",
    categories: ["Radiant Temple Treasures", "ID_FMP_ITEM_SET_8"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Raiment of Shadows"] = new engine.RulesElement({
    name: "Raiment of Shadows",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_22",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of Shadows", "ID_FMP_ITEM_SET_22"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Raiment of the World Spirit"] = new engine.RulesElement({
    name: "Raiment of the World Spirit",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_23",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of the World Spirit", "ID_FMP_ITEM_SET_23"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Reaper's Array"] = new engine.RulesElement({
    name: "Reaper's Array",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_24",
    source: "Adventurer's Vault 2",
    categories: ["Reaper's Array", "ID_FMP_ITEM_SET_24"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Regalia of the Golden General"] = new engine.RulesElement({
    name: "Regalia of the Golden General",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_25",
    source: "Adventurer's Vault 2",
    categories: ["Regalia of the Golden General", "ID_FMP_ITEM_SET_25"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Relics of Creation"] = new engine.RulesElement({
    name: "Relics of Creation",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_29",
    source: "Adventurer's Vault 2",
    categories: ["Relics of Creation", "ID_FMP_ITEM_SET_29"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Relics of the Forgotten One"] = new engine.RulesElement({
    name: "Relics of the Forgotten One",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_26",
    source: "Adventurer's Vault 2",
    categories: ["Relics of the Forgotten One", "ID_FMP_ITEM_SET_26"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Resplendent Finery"] = new engine.RulesElement({
    name: "Resplendent Finery",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_9",
    source: "Adventurer's Vault 2",
    categories: ["Resplendent Finery", "ID_FMP_ITEM_SET_9"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Rings of the Akarot"] = new engine.RulesElement({
    name: "Rings of the Akarot",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_36",
    source: "Adventurer's Vault 2",
    categories: ["Rings of the Akarot", "ID_FMP_ITEM_SET_36"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Shadowdancer's Garb"] = new engine.RulesElement({
    name: "Shadowdancer's Garb",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_10",
    source: "Adventurer's Vault 2",
    categories: ["Shadowdancer's Garb", "ID_FMP_ITEM_SET_10"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Skin of the Panther"] = new engine.RulesElement({
    name: "Skin of the Panther",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_11",
    source: "Adventurer's Vault 2",
    categories: ["Skin of the Panther", "ID_FMP_ITEM_SET_11"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Time Wizard's Tools"] = new engine.RulesElement({
    name: "Time Wizard's Tools",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_30",
    source: "Adventurer's Vault 2",
    categories: ["Time Wizard's Tools", "ID_FMP_ITEM_SET_30"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Tinkerer's Inventions"] = new engine.RulesElement({
    name: "Tinkerer's Inventions",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_31",
    source: "Adventurer's Vault 2",
    categories: ["Tinkerer's Inventions", "ID_FMP_ITEM_SET_31"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Tools of Zane's Vengeance"] = new engine.RulesElement({
    name: "Tools of Zane's Vengeance",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_12",
    source: "Adventurer's Vault 2",
    categories: ["Tools of Zane's Vengeance", "ID_FMP_ITEM_SET_12"]
  });
  byID[te.id] = te;
  
  te = Item_Set["Zy Tormtor's Trinkets"] = new engine.RulesElement({
    name: "Zy Tormtor's Trinkets",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_13",
    source: "Adventurer's Vault 2",
    categories: ["Zy Tormtor's Trinkets", "ID_FMP_ITEM_SET_13"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
