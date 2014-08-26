define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Adventurer's Kit"] = new engine.RulesElement({
    name: "Adventurer's Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_1",
    source: "Player's Handbook",
    categories: ["Adventurer's Kit", "ID_FMP_GEAR_1"]
  });
  byID[te.id] = te;
  
  te = Gear["Alchemical Reagents (Arcana)"] = new engine.RulesElement({
    name: "Alchemical Reagents (Arcana)",
    type: "Gear",
    id: "ID_FMP_GEAR_53",
    source: "Player's Handbook",
    categories: ["Alchemical Reagents (Arcana)", "ID_FMP_GEAR_53"]
  });
  byID[te.id] = te;
  
  te = Gear["Arrow"] = new engine.RulesElement({
    name: "Arrow",
    type: "Gear",
    id: "ID_FMP_GEAR_58",
    source: "Player's Handbook",
    categories: ["Arrow", "ID_FMP_GEAR_58"]
  });
  byID[te.id] = te;
  
  te = Gear["Arrows"] = new engine.RulesElement({
    name: "Arrows",
    type: "Gear",
    id: "ID_FMP_GEAR_11",
    source: "Player's Handbook",
    categories: ["Arrows", "ID_FMP_GEAR_11"]
  });
  byID[te.id] = te;
  
  te = Gear["Backpack (empty)"] = new engine.RulesElement({
    name: "Backpack (empty)",
    type: "Gear",
    id: "ID_FMP_GEAR_2",
    source: "Player's Handbook",
    categories: ["Backpack (empty)", "ID_FMP_GEAR_2"]
  });
  byID[te.id] = te;
  
  te = Gear["Bedroll"] = new engine.RulesElement({
    name: "Bedroll",
    type: "Gear",
    id: "ID_FMP_GEAR_4",
    source: "Player's Handbook",
    categories: ["Bedroll", "ID_FMP_GEAR_4"]
  });
  byID[te.id] = te;
  
  te = Gear["Belt Pouch (empty)"] = new engine.RulesElement({
    name: "Belt Pouch (empty)",
    type: "Gear",
    id: "ID_FMP_GEAR_6",
    source: "Player's Handbook",
    categories: ["Belt Pouch (empty)", "ID_FMP_GEAR_6"]
  });
  byID[te.id] = te;
  
  te = Gear["Bottle of Wine"] = new engine.RulesElement({
    name: "Bottle of Wine",
    type: "Gear",
    id: "ID_FMP_GEAR_40",
    source: "Player's Handbook",
    categories: ["Bottle of Wine", "ID_FMP_GEAR_40"]
  });
  byID[te.id] = te;
  
  te = Gear["Candle"] = new engine.RulesElement({
    name: "Candle",
    type: "Gear",
    id: "ID_FMP_GEAR_17",
    source: "Player's Handbook",
    categories: ["Candle", "ID_FMP_GEAR_17"]
  });
  byID[te.id] = te;
  
  te = Gear["Cart"] = new engine.RulesElement({
    name: "Cart",
    type: "Gear",
    id: "ID_FMP_GEAR_46",
    source: "Player's Handbook",
    categories: ["Cart", "ID_FMP_GEAR_46"]
  });
  byID[te.id] = te;
  
  te = Gear["Chain (10 ft.)"] = new engine.RulesElement({
    name: "Chain (10 ft.)",
    type: "Gear",
    id: "ID_FMP_GEAR_18",
    source: "Player's Handbook",
    categories: ["Chain (10 ft.)", "ID_FMP_GEAR_18"]
  });
  byID[te.id] = te;
  
  te = Gear["Chest (empty)"] = new engine.RulesElement({
    name: "Chest (empty)",
    type: "Gear",
    id: "ID_FMP_GEAR_19",
    source: "Player's Handbook",
    categories: ["Chest (empty)", "ID_FMP_GEAR_19"]
  });
  byID[te.id] = te;
  
  te = Gear["Climber's Kit"] = new engine.RulesElement({
    name: "Climber's Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_20",
    source: "Player's Handbook",
    categories: ["Climber's Kit", "ID_FMP_GEAR_20"]
  });
  byID[te.id] = te;
  
  te = Gear["Common Meal"] = new engine.RulesElement({
    name: "Common Meal",
    type: "Gear",
    id: "ID_FMP_GEAR_38",
    source: "Player's Handbook",
    categories: ["Common Meal", "ID_FMP_GEAR_38"]
  });
  byID[te.id] = te;
  
  te = Gear["Crossbow Bolt"] = new engine.RulesElement({
    name: "Crossbow Bolt",
    type: "Gear",
    id: "ID_FMP_GEAR_59",
    source: "Player's Handbook",
    categories: ["Crossbow Bolt", "ID_FMP_GEAR_59"]
  });
  byID[te.id] = te;
  
  te = Gear["Crossbow Bolts"] = new engine.RulesElement({
    name: "Crossbow Bolts",
    type: "Gear",
    id: "ID_FMP_GEAR_15",
    source: "Player's Handbook",
    categories: ["Crossbow Bolts", "ID_FMP_GEAR_15"]
  });
  byID[te.id] = te;
  
  te = Gear["Everburning Torch"] = new engine.RulesElement({
    name: "Everburning Torch",
    type: "Gear",
    id: "ID_FMP_GEAR_24",
    source: "Player's Handbook",
    categories: ["Everburning Torch", "ID_FMP_GEAR_24"]
  });
  byID[te.id] = te;
  
  te = Gear["Feast (one meal)"] = new engine.RulesElement({
    name: "Feast (one meal)",
    type: "Gear",
    id: "ID_FMP_GEAR_39",
    source: "Player's Handbook",
    categories: ["Feast (one meal)", "ID_FMP_GEAR_39"]
  });
  byID[te.id] = te;
  
  te = Gear["Fine Clothing"] = new engine.RulesElement({
    name: "Fine Clothing",
    type: "Gear",
    id: "ID_FMP_GEAR_25",
    source: "Player's Handbook",
    categories: ["Fine Clothing", "ID_FMP_GEAR_25"]
  });
  byID[te.id] = te;
  
  te = Gear["Flask (empty)"] = new engine.RulesElement({
    name: "Flask (empty)",
    type: "Gear",
    id: "ID_FMP_GEAR_26",
    source: "Player's Handbook",
    categories: ["Flask (empty)", "ID_FMP_GEAR_26"]
  });
  byID[te.id] = te;
  
  te = Gear["Flint and Steel"] = new engine.RulesElement({
    name: "Flint and Steel",
    type: "Gear",
    id: "ID_FMP_GEAR_5",
    source: "Player's Handbook",
    categories: ["Flint and Steel", "ID_FMP_GEAR_5"]
  });
  byID[te.id] = te;
  
  te = Gear["Grappling Hook"] = new engine.RulesElement({
    name: "Grappling Hook",
    type: "Gear",
    id: "ID_FMP_GEAR_21",
    source: "Player's Handbook",
    categories: ["Grappling Hook", "ID_FMP_GEAR_21"]
  });
  byID[te.id] = te;
  
  te = Gear["hammer"] = new engine.RulesElement({
    name: "hammer",
    type: "Gear",
    id: "ID_FMP_GEAR_22",
    source: "Player's Handbook",
    categories: ["hammer", "ID_FMP_GEAR_22"]
  });
  byID[te.id] = te;
  
  te = Gear["Hempen Rope (50 ft.)"] = new engine.RulesElement({
    name: "Hempen Rope (50 ft.)",
    type: "Gear",
    id: "ID_FMP_GEAR_9",
    source: "Player's Handbook",
    categories: ["Hempen Rope (50 ft.)", "ID_FMP_GEAR_9"]
  });
  byID[te.id] = te;
  
  te = Gear["Holy Symbol"] = new engine.RulesElement({
    name: "Holy Symbol",
    type: "Gear",
    id: "ID_FMP_GEAR_27",
    source: "Player's Handbook",
    categories: ["Holy Symbol", "ID_FMP_GEAR_27"]
  });
  byID[te.id] = te;
  
  te = Gear["Journeybread"] = new engine.RulesElement({
    name: "Journeybread",
    type: "Gear",
    id: "ID_FMP_GEAR_110",
    source: "Player's Handbook",
    categories: ["Journeybread", "ID_FMP_GEAR_110"]
  });
  byID[te.id] = te;
  
  te = Gear["Journeybreads"] = new engine.RulesElement({
    name: "Journeybreads",
    type: "Gear",
    id: "ID_FMP_GEAR_28",
    source: "Player's Handbook",
    categories: ["Journeybreads", "ID_FMP_GEAR_28"]
  });
  byID[te.id] = te;
  
  te = Gear["Lantern"] = new engine.RulesElement({
    name: "Lantern",
    type: "Gear",
    id: "ID_FMP_GEAR_29",
    source: "Player's Handbook",
    categories: ["Lantern", "ID_FMP_GEAR_29"]
  });
  byID[te.id] = te;
  
  te = Gear["Luxury Room (per day)"] = new engine.RulesElement({
    name: "Luxury Room (per day)",
    type: "Gear",
    id: "ID_FMP_GEAR_42",
    source: "Player's Handbook",
    categories: ["Luxury Room (per day)", "ID_FMP_GEAR_42"]
  });
  byID[te.id] = te;
  
  te = Gear["Mystic Salves (Heal)"] = new engine.RulesElement({
    name: "Mystic Salves (Heal)",
    type: "Gear",
    id: "ID_FMP_GEAR_54",
    source: "Player's Handbook",
    categories: ["Mystic Salves (Heal)", "ID_FMP_GEAR_54"]
  });
  byID[te.id] = te;
  
  te = Gear["Oil (1 pint)"] = new engine.RulesElement({
    name: "Oil (1 pint)",
    type: "Gear",
    id: "ID_FMP_GEAR_52",
    source: "Player's Handbook",
    categories: ["Oil (1 pint)", "ID_FMP_GEAR_52"]
  });
  byID[te.id] = te;
  
  te = Gear["Orb Implement"] = new engine.RulesElement({
    name: "Orb Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_3",
    source: "Player's Handbook",
    categories: ["Orb Implement", "ID_FMP_GEAR_3"]
  });
  byID[te.id] = te;
  
  te = Gear["Pitcher of Ale"] = new engine.RulesElement({
    name: "Pitcher of Ale",
    type: "Gear",
    id: "ID_FMP_GEAR_37",
    source: "Player's Handbook",
    categories: ["Pitcher of Ale", "ID_FMP_GEAR_37"]
  });
  byID[te.id] = te;
  
  te = Gear["Pitons"] = new engine.RulesElement({
    name: "Pitons",
    type: "Gear",
    id: "ID_FMP_GEAR_23",
    source: "Player's Handbook",
    categories: ["Pitons", "ID_FMP_GEAR_23"]
  });
  byID[te.id] = te;
  
  te = Gear["Rare Herbs (Nature)"] = new engine.RulesElement({
    name: "Rare Herbs (Nature)",
    type: "Gear",
    id: "ID_FMP_GEAR_55",
    source: "Player's Handbook",
    categories: ["Rare Herbs (Nature)", "ID_FMP_GEAR_55"]
  });
  byID[te.id] = te;
  
  te = Gear["Residuum (Any)"] = new engine.RulesElement({
    name: "Residuum (Any)",
    type: "Gear",
    id: "ID_FMP_GEAR_57",
    source: "Player's Handbook",
    categories: ["Residuum (Any)", "ID_FMP_GEAR_57"]
  });
  byID[te.id] = te;
  
  te = Gear["Riding Horse"] = new engine.RulesElement({
    name: "Riding Horse",
    type: "Gear",
    id: "ID_FMP_GEAR_43",
    source: "Player's Handbook",
    categories: ["Riding Horse", "ID_FMP_GEAR_43"]
  });
  byID[te.id] = te;
  
  te = Gear["Ritual Book"] = new engine.RulesElement({
    name: "Ritual Book",
    type: "Gear",
    id: "ID_FMP_GEAR_31",
    source: "Player's Handbook",
    categories: ["Ritual Book", "ID_FMP_GEAR_31"]
  });
  byID[te.id] = te;
  
  te = Gear["Rod Implement"] = new engine.RulesElement({
    name: "Rod Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_12",
    source: "Player's Handbook",
    categories: ["Rod Implement", "ID_FMP_GEAR_12"]
  });
  byID[te.id] = te;
  
  te = Gear["Rowboat"] = new engine.RulesElement({
    name: "Rowboat",
    type: "Gear",
    id: "ID_FMP_GEAR_48",
    source: "Player's Handbook",
    categories: ["Rowboat", "ID_FMP_GEAR_48"]
  });
  byID[te.id] = te;
  
  te = Gear["Sailing Ship"] = new engine.RulesElement({
    name: "Sailing Ship",
    type: "Gear",
    id: "ID_FMP_GEAR_49",
    source: "Player's Handbook",
    categories: ["Sailing Ship", "ID_FMP_GEAR_49"]
  });
  byID[te.id] = te;
  
  te = Gear["Sanctified Incense (Religion)"] = new engine.RulesElement({
    name: "Sanctified Incense (Religion)",
    type: "Gear",
    id: "ID_FMP_GEAR_56",
    source: "Player's Handbook",
    categories: ["Sanctified Incense (Religion)", "ID_FMP_GEAR_56"]
  });
  byID[te.id] = te;
  
  te = Gear["Silk Rope (50 ft.)"] = new engine.RulesElement({
    name: "Silk Rope (50 ft.)",
    type: "Gear",
    id: "ID_FMP_GEAR_30",
    source: "Player's Handbook",
    categories: ["Silk Rope (50 ft.)", "ID_FMP_GEAR_30"]
  });
  byID[te.id] = te;
  
  te = Gear["Sling Bullet"] = new engine.RulesElement({
    name: "Sling Bullet",
    type: "Gear",
    id: "ID_FMP_GEAR_61",
    source: "Player's Handbook",
    categories: ["Sling Bullet", "ID_FMP_GEAR_61"]
  });
  byID[te.id] = te;
  
  te = Gear["Sling Bullets"] = new engine.RulesElement({
    name: "Sling Bullets",
    type: "Gear",
    id: "ID_FMP_GEAR_16",
    source: "Player's Handbook",
    categories: ["Sling Bullets", "ID_FMP_GEAR_16"]
  });
  byID[te.id] = te;
  
  te = Gear["Spellbook"] = new engine.RulesElement({
    name: "Spellbook",
    type: "Gear",
    id: "ID_FMP_GEAR_33",
    source: "Player's Handbook",
    categories: ["Spellbook", "ID_FMP_GEAR_33"]
  });
  byID[te.id] = te;
  
  te = Gear["Staff Implement"] = new engine.RulesElement({
    name: "Staff Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_13",
    source: "Player's Handbook",
    categories: ["Staff Implement", "ID_FMP_GEAR_13"]
  });
  byID[te.id] = te;
  
  te = Gear["Sunrod"] = new engine.RulesElement({
    name: "Sunrod",
    type: "Gear",
    id: "ID_FMP_GEAR_7",
    source: "Player's Handbook",
    categories: ["Sunrod", "ID_FMP_GEAR_7"]
  });
  byID[te.id] = te;
  
  te = Gear["Tent"] = new engine.RulesElement({
    name: "Tent",
    type: "Gear",
    id: "ID_FMP_GEAR_34",
    source: "Player's Handbook",
    categories: ["Tent", "ID_FMP_GEAR_34"]
  });
  byID[te.id] = te;
  
  te = Gear["Thieves' Tools"] = new engine.RulesElement({
    name: "Thieves' Tools",
    type: "Gear",
    id: "ID_FMP_GEAR_35",
    source: "Player's Handbook",
    categories: ["Thieves' Tools", "ID_FMP_GEAR_35"]
  });
  byID[te.id] = te;
  
  te = Gear["Torch"] = new engine.RulesElement({
    name: "Torch",
    type: "Gear",
    id: "ID_FMP_GEAR_36",
    source: "Player's Handbook",
    categories: ["Torch", "ID_FMP_GEAR_36"]
  });
  byID[te.id] = te;
  
  te = Gear["Trail Rations"] = new engine.RulesElement({
    name: "Trail Rations",
    type: "Gear",
    id: "ID_FMP_GEAR_8",
    source: "Player's Handbook",
    categories: ["Trail Rations", "ID_FMP_GEAR_8"]
  });
  byID[te.id] = te;
  
  te = Gear["Typical Room (per day)"] = new engine.RulesElement({
    name: "Typical Room (per day)",
    type: "Gear",
    id: "ID_FMP_GEAR_41",
    source: "Player's Handbook",
    categories: ["Typical Room (per day)", "ID_FMP_GEAR_41"]
  });
  byID[te.id] = te;
  
  te = Gear["Wagon"] = new engine.RulesElement({
    name: "Wagon",
    type: "Gear",
    id: "ID_FMP_GEAR_47",
    source: "Player's Handbook",
    categories: ["Wagon", "ID_FMP_GEAR_47"]
  });
  byID[te.id] = te;
  
  te = Gear["Wand Implement"] = new engine.RulesElement({
    name: "Wand Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_14",
    source: "Player's Handbook",
    categories: ["Wand Implement", "ID_FMP_GEAR_14"]
  });
  byID[te.id] = te;
  
  te = Gear["Waterskin"] = new engine.RulesElement({
    name: "Waterskin",
    type: "Gear",
    id: "ID_FMP_GEAR_10",
    source: "Player's Handbook",
    categories: ["Waterskin", "ID_FMP_GEAR_10"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
