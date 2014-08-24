(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Astral Redoubt Totem +1"] = new RulesElement({
    name: "Astral Redoubt Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8397",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +1", "ID_FMP_MAGIC_ITEM_8397"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Redoubt Totem +2"] = new RulesElement({
    name: "Astral Redoubt Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8398",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +2", "ID_FMP_MAGIC_ITEM_8398"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Redoubt Totem +3"] = new RulesElement({
    name: "Astral Redoubt Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8399",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +3", "ID_FMP_MAGIC_ITEM_8399"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Redoubt Totem +4"] = new RulesElement({
    name: "Astral Redoubt Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8400",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +4", "ID_FMP_MAGIC_ITEM_8400"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Redoubt Totem +5"] = new RulesElement({
    name: "Astral Redoubt Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8401",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +5", "ID_FMP_MAGIC_ITEM_8401"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Redoubt Totem +6"] = new RulesElement({
    name: "Astral Redoubt Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8402",
    source: "Dragon Magazine 382",
    categories: ["Astral Redoubt Totem +6", "ID_FMP_MAGIC_ITEM_8402"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beryl of Catastrophe Avoidance (heroic tier)"] = new RulesElement({
    name: "Beryl of Catastrophe Avoidance (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8331",
    source: "Dragon Magazine 382",
    categories: ["Beryl of Catastrophe Avoidance (heroic tier)", "ID_FMP_MAGIC_ITEM_8331"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Diplomacy Misc", function() { /* against catastrophic dragons */ return 3; });
      model.statadd("Insight Misc", function() { /* against catastrophic dragons */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beryl of Catastrophe Avoidance (paragon tier)"] = new RulesElement({
    name: "Beryl of Catastrophe Avoidance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8332",
    source: "Dragon Magazine 382",
    categories: ["Beryl of Catastrophe Avoidance (paragon tier)", "ID_FMP_MAGIC_ITEM_8332"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "item");
      model.statadd("Insight Misc", 3, "item");
      model.statadd("Diplomacy Misc", function() { /* against catastrophic dragons */ return 5; });
      model.statadd("Insight Misc", function() { /* against catastrophic dragons */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +1"] = new RulesElement({
    name: "Cavern Explorer's Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8391",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +1", "ID_FMP_MAGIC_ITEM_8391"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +2"] = new RulesElement({
    name: "Cavern Explorer's Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8392",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +2", "ID_FMP_MAGIC_ITEM_8392"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +3"] = new RulesElement({
    name: "Cavern Explorer's Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8393",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +3", "ID_FMP_MAGIC_ITEM_8393"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +4"] = new RulesElement({
    name: "Cavern Explorer's Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8394",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +4", "ID_FMP_MAGIC_ITEM_8394"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +5"] = new RulesElement({
    name: "Cavern Explorer's Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8395",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +5", "ID_FMP_MAGIC_ITEM_8395"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cavern Explorer's Weapon +6"] = new RulesElement({
    name: "Cavern Explorer's Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8396",
    source: "Dragon Magazine 382",
    categories: ["Cavern Explorer's Weapon +6", "ID_FMP_MAGIC_ITEM_8396"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Charm of Protection (heroic tier)"] = new RulesElement({
    name: "Charm of Protection (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8444",
    source: "Dragon Magazine 382",
    categories: ["Charm of Protection (heroic tier)", "ID_FMP_MAGIC_ITEM_8444"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Impact Weapon +3"] = new RulesElement({
    name: "Deep Impact Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8333",
    source: "Dragon Magazine 382",
    categories: ["Deep Impact Weapon +3", "ID_FMP_MAGIC_ITEM_8333"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Impact Weapon +4"] = new RulesElement({
    name: "Deep Impact Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8334",
    source: "Dragon Magazine 382",
    categories: ["Deep Impact Weapon +4", "ID_FMP_MAGIC_ITEM_8334"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Impact Weapon +5"] = new RulesElement({
    name: "Deep Impact Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8335",
    source: "Dragon Magazine 382",
    categories: ["Deep Impact Weapon +5", "ID_FMP_MAGIC_ITEM_8335"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Impact Weapon +6"] = new RulesElement({
    name: "Deep Impact Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8336",
    source: "Dragon Magazine 382",
    categories: ["Deep Impact Weapon +6", "ID_FMP_MAGIC_ITEM_8336"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +1"] = new RulesElement({
    name: "Emerald Flame Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8408",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +1", "ID_FMP_MAGIC_ITEM_8408"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +2"] = new RulesElement({
    name: "Emerald Flame Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8409",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +2", "ID_FMP_MAGIC_ITEM_8409"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +3"] = new RulesElement({
    name: "Emerald Flame Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8410",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +3", "ID_FMP_MAGIC_ITEM_8410"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +4"] = new RulesElement({
    name: "Emerald Flame Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8411",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +4", "ID_FMP_MAGIC_ITEM_8411"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +5"] = new RulesElement({
    name: "Emerald Flame Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8412",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +5", "ID_FMP_MAGIC_ITEM_8412"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Flame Ki Focus +6"] = new RulesElement({
    name: "Emerald Flame Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8413",
    source: "Dragon Magazine 382",
    categories: ["Emerald Flame Ki Focus +6", "ID_FMP_MAGIC_ITEM_8413"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +1"] = new RulesElement({
    name: "Final Sleep Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8414",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +1", "ID_FMP_MAGIC_ITEM_8414"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +2"] = new RulesElement({
    name: "Final Sleep Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8415",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +2", "ID_FMP_MAGIC_ITEM_8415"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +3"] = new RulesElement({
    name: "Final Sleep Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8416",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +3", "ID_FMP_MAGIC_ITEM_8416"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +4"] = new RulesElement({
    name: "Final Sleep Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8417",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +4", "ID_FMP_MAGIC_ITEM_8417"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +5"] = new RulesElement({
    name: "Final Sleep Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8418",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +5", "ID_FMP_MAGIC_ITEM_8418"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Sleep Ki Focus +6"] = new RulesElement({
    name: "Final Sleep Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8419",
    source: "Dragon Magazine 382",
    categories: ["Final Sleep Ki Focus +6", "ID_FMP_MAGIC_ITEM_8419"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +1"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8420",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +1", "ID_FMP_MAGIC_ITEM_8420"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +2"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8421",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +2", "ID_FMP_MAGIC_ITEM_8421"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +3"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8422",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +3", "ID_FMP_MAGIC_ITEM_8422"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +4"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8423",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +4", "ID_FMP_MAGIC_ITEM_8423"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +5"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8424",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +5", "ID_FMP_MAGIC_ITEM_8424"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hawk's Talon Ki Focus +6"] = new RulesElement({
    name: "Hawk's Talon Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8425",
    source: "Dragon Magazine 382",
    categories: ["Hawk's Talon Ki Focus +6", "ID_FMP_MAGIC_ITEM_8425"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +1"] = new RulesElement({
    name: "Iron Body Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8426",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +1", "ID_FMP_MAGIC_ITEM_8426"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +2"] = new RulesElement({
    name: "Iron Body Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8427",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +2", "ID_FMP_MAGIC_ITEM_8427"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +3"] = new RulesElement({
    name: "Iron Body Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8428",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +3", "ID_FMP_MAGIC_ITEM_8428"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +4"] = new RulesElement({
    name: "Iron Body Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8429",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +4", "ID_FMP_MAGIC_ITEM_8429"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +5"] = new RulesElement({
    name: "Iron Body Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8430",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +5", "ID_FMP_MAGIC_ITEM_8430"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Body Ki Focus +6"] = new RulesElement({
    name: "Iron Body Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8431",
    source: "Dragon Magazine 382",
    categories: ["Iron Body Ki Focus +6", "ID_FMP_MAGIC_ITEM_8431"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Charm (Familiar) (paragon tier)"] = new RulesElement({
    name: "Lucky Charm (Familiar) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8443",
    source: "Dragon Magazine 382",
    categories: ["Lucky Charm (Familiar) (paragon tier)", "ID_FMP_MAGIC_ITEM_8443"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +1"] = new RulesElement({
    name: "Magic Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8071",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +1", "ID_FMP_MAGIC_ITEM_8071"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +2"] = new RulesElement({
    name: "Magic Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8072",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +2", "ID_FMP_MAGIC_ITEM_8072"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +3"] = new RulesElement({
    name: "Magic Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8073",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +3", "ID_FMP_MAGIC_ITEM_8073"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +4"] = new RulesElement({
    name: "Magic Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8074",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +4", "ID_FMP_MAGIC_ITEM_8074"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +5"] = new RulesElement({
    name: "Magic Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8075",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +5", "ID_FMP_MAGIC_ITEM_8075"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Ki Focus +6"] = new RulesElement({
    name: "Magic Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8076",
    source: "Dragon Magazine 382,Player's Handbook 3",
    categories: ["Magic Ki Focus +6", "ID_FMP_MAGIC_ITEM_8076"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +1"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8432",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +1", "ID_FMP_MAGIC_ITEM_8432"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +2"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8433",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +2", "ID_FMP_MAGIC_ITEM_8433"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +3"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8434",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +3", "ID_FMP_MAGIC_ITEM_8434"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +4"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8435",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +4", "ID_FMP_MAGIC_ITEM_8435"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +5"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8436",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +5", "ID_FMP_MAGIC_ITEM_8436"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rain of Hammers Ki Focus +6"] = new RulesElement({
    name: "Rain of Hammers Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8437",
    source: "Dragon Magazine 382",
    categories: ["Rain of Hammers Ki Focus +6", "ID_FMP_MAGIC_ITEM_8437"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["River of Life Gloves (epic tier)"] = new RulesElement({
    name: "River of Life Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8407",
    source: "Dragon Magazine 382",
    categories: ["River of Life Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_8407"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["River of Life Gloves (heroic tier)"] = new RulesElement({
    name: "River of Life Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8403",
    source: "Dragon Magazine 382",
    categories: ["River of Life Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_8403"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["River of Life Gloves (paragon tier)"] = new RulesElement({
    name: "River of Life Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8405",
    source: "Dragon Magazine 382",
    categories: ["River of Life Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_8405"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shard of Clear Sight (paragon tier)"] = new RulesElement({
    name: "Shard of Clear Sight (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8323",
    source: "Dragon Magazine 382",
    categories: ["Shard of Clear Sight (paragon tier)", "ID_FMP_MAGIC_ITEM_8323"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shard of Freedom (paragon tier)"] = new RulesElement({
    name: "Shard of Freedom (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8322",
    source: "Dragon Magazine 382",
    categories: ["Shard of Freedom (paragon tier)", "ID_FMP_MAGIC_ITEM_8322"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sliver of Knowledge (heroic tier)"] = new RulesElement({
    name: "Sliver of Knowledge (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8324",
    source: "Dragon Magazine 382",
    categories: ["Sliver of Knowledge (heroic tier)", "ID_FMP_MAGIC_ITEM_8324"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sliver of Salvation (epic tier)"] = new RulesElement({
    name: "Sliver of Salvation (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8329",
    source: "Dragon Magazine 382",
    categories: ["Sliver of Salvation (epic tier)", "ID_FMP_MAGIC_ITEM_8329"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sliver of Salvation (heroic tier)"] = new RulesElement({
    name: "Sliver of Salvation (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8325",
    source: "Dragon Magazine 382",
    categories: ["Sliver of Salvation (heroic tier)", "ID_FMP_MAGIC_ITEM_8325"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sliver of Salvation (paragon tier)"] = new RulesElement({
    name: "Sliver of Salvation (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8327",
    source: "Dragon Magazine 382",
    categories: ["Sliver of Salvation (paragon tier)", "ID_FMP_MAGIC_ITEM_8327"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sliver of Stability (paragon tier)"] = new RulesElement({
    name: "Sliver of Stability (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8330",
    source: "Dragon Magazine 382",
    categories: ["Sliver of Stability (paragon tier)", "ID_FMP_MAGIC_ITEM_8330"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Snake's Lair Armor +2"] = new RulesElement({
    name: "Snake's Lair Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8386",
    source: "Dragon Magazine 382",
    categories: ["Snake's Lair Armor +2", "ID_FMP_MAGIC_ITEM_8386"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Snake's Lair Armor +3"] = new RulesElement({
    name: "Snake's Lair Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8387",
    source: "Dragon Magazine 382",
    categories: ["Snake's Lair Armor +3", "ID_FMP_MAGIC_ITEM_8387"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Snake's Lair Armor +4"] = new RulesElement({
    name: "Snake's Lair Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8388",
    source: "Dragon Magazine 382",
    categories: ["Snake's Lair Armor +4", "ID_FMP_MAGIC_ITEM_8388"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Snake's Lair Armor +5"] = new RulesElement({
    name: "Snake's Lair Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8389",
    source: "Dragon Magazine 382",
    categories: ["Snake's Lair Armor +5", "ID_FMP_MAGIC_ITEM_8389"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Snake's Lair Armor +6"] = new RulesElement({
    name: "Snake's Lair Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8390",
    source: "Dragon Magazine 382",
    categories: ["Snake's Lair Armor +6", "ID_FMP_MAGIC_ITEM_8390"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  
})(this);
