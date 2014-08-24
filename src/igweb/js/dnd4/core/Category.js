(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Category = types['Category'] || (types['Category'] = {});
  te = Category["Ability Choice"] = new RulesElement({
    name: "Ability Choice",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ABILITY_CHOICE",
    source: "Core",
    categories: ["Ability Choice", "ID_INTERNAL_CATEGORY_ABILITY_CHOICE"]
  });
  byID[te.id] = te;
  
  te = Category["Acid"] = new RulesElement({
    name: "Acid",
    type: "Category",
    id: "ID_FMP_CATEGORY_5",
    source: "Core",
    categories: ["Acid", "ID_FMP_CATEGORY_5"]
  });
  byID[te.id] = te;
  
  te = Category["Adulthood"] = new RulesElement({
    name: "Adulthood",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ADULTHOOD",
    source: "Core",
    categories: ["Adulthood", "ID_INTERNAL_CATEGORY_ADULTHOOD"]
  });
  byID[te.id] = te;
  
  te = Category["Arcane"] = new RulesElement({
    name: "Arcane",
    type: "Category",
    id: "ID_FMP_CATEGORY_31",
    source: "Core",
    categories: ["Arcane", "ID_FMP_CATEGORY_31"]
  });
  byID[te.id] = te;
  
  te = Category["Ardent Paragon Path"] = new RulesElement({
    name: "Ardent Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ARDENT_PARAGON_PATH",
    source: "Core",
    categories: ["Ardent Paragon Path", "ID_INTERNAL_CATEGORY_ARDENT_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Arena Fighting"] = new RulesElement({
    name: "Arena Fighting",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ARENA_FIGHTING",
    source: "Core",
    categories: ["Arena Fighting", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING"]
  });
  byID[te.id] = te;
  
  te = Category["Artifice"] = new RulesElement({
    name: "Artifice",
    type: "Category",
    id: "ID_FMP_CATEGORY_52",
    source: "Core",
    categories: ["Artifice", "ID_FMP_CATEGORY_52"]
  });
  byID[te.id] = te;
  
  te = Category["Artificer Paragon Path"] = new RulesElement({
    name: "Artificer Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ARTIFICER_PARAGON_PATH",
    source: "Core",
    categories: ["Artificer Paragon Path", "ID_INTERNAL_CATEGORY_ARTIFICER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Assassin Paragon Path"] = new RulesElement({
    name: "Assassin Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ASSASSIN_PARAGON_PATH",
    source: "Core",
    categories: ["Assassin Paragon Path", "ID_INTERNAL_CATEGORY_ASSASSIN_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Assassin Poison"] = new RulesElement({
    name: "Assassin Poison",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ASSASSIN_POISON",
    source: "Core",
    categories: ["Assassin Poison", "ID_INTERNAL_CATEGORY_ASSASSIN_POISON"]
  });
  byID[te.id] = te;
  
  te = Category["attack"] = new RulesElement({
    name: "attack",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ATTACK",
    source: "Core",
    categories: ["attack", "ID_INTERNAL_CATEGORY_ATTACK"]
  });
  byID[te.id] = te;
  
  te = Category["at-will"] = new RulesElement({
    name: "at-will",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_AT-WILL",
    source: "Core",
    categories: ["at-will", "ID_INTERNAL_CATEGORY_AT-WILL"]
  });
  byID[te.id] = te;
  
  te = Category["At-Will Usage"] = new RulesElement({
    name: "At-Will Usage",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_AT-WILL_USAGE",
    source: "Core",
    categories: ["At-Will Usage", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE"]
  });
  byID[te.id] = te;
  
  te = Category["Augment"] = new RulesElement({
    name: "Augment",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_AUGMENT",
    source: "Core",
    categories: ["Augment", "ID_INTERNAL_CATEGORY_AUGMENT"]
  });
  byID[te.id] = te;
  
  te = Category["Augmentable"] = new RulesElement({
    name: "Augmentable",
    type: "Category",
    id: "ID_FMP_CATEGORY_61",
    source: "Core",
    categories: ["Augmentable", "ID_FMP_CATEGORY_61"]
  });
  byID[te.id] = te;
  
  te = Category["Augmentable At-Will"] = new RulesElement({
    name: "Augmentable At-Will",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL",
    source: "Core",
    categories: ["Augmentable At-Will", "ID_INTERNAL_CATEGORY_AUGMENTABLE_AT-WILL"]
  });
  byID[te.id] = te;
  
  te = Category["Aura"] = new RulesElement({
    name: "Aura",
    type: "Category",
    id: "ID_FMP_CATEGORY_68",
    source: "Core",
    categories: ["Aura", "ID_FMP_CATEGORY_68"]
  });
  byID[te.id] = te;
  
  te = Category["Avenger Paragon Path"] = new RulesElement({
    name: "Avenger Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_AVENGER_PARAGON_PATH",
    source: "Core",
    categories: ["Avenger Paragon Path", "ID_INTERNAL_CATEGORY_AVENGER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Barbarian Paragon Path"] = new RulesElement({
    name: "Barbarian Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_BARBARIAN_PARAGON_PATH",
    source: "Core",
    categories: ["Barbarian Paragon Path", "ID_INTERNAL_CATEGORY_BARBARIAN_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Bard Paragon Path"] = new RulesElement({
    name: "Bard Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_BARD_PARAGON_PATH",
    source: "Core",
    categories: ["Bard Paragon Path", "ID_INTERNAL_CATEGORY_BARD_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Battlemind Paragon Path"] = new RulesElement({
    name: "Battlemind Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_BATTLEMIND_PARAGON_PATH",
    source: "Core",
    categories: ["Battlemind Paragon Path", "ID_INTERNAL_CATEGORY_BATTLEMIND_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Beast"] = new RulesElement({
    name: "Beast",
    type: "Category",
    id: "ID_FMP_CATEGORY_54",
    source: "Core",
    categories: ["Beast", "ID_FMP_CATEGORY_54"]
  });
  byID[te.id] = te;
  
  te = Category["beast form"] = new RulesElement({
    name: "beast form",
    type: "Category",
    id: "ID_FMP_CATEGORY_50",
    source: "Core",
    categories: ["beast form", "ID_FMP_CATEGORY_50"]
  });
  byID[te.id] = te;
  
  te = Category["Birth"] = new RulesElement({
    name: "Birth",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_BIRTH",
    source: "Core",
    categories: ["Birth", "ID_INTERNAL_CATEGORY_BIRTH"]
  });
  byID[te.id] = te;
  
  te = Category["chain"] = new RulesElement({
    name: "chain",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_CHAIN",
    source: "Core",
    categories: ["chain", "ID_INTERNAL_CATEGORY_CHAIN"]
  });
  byID[te.id] = te;
  
  te = Category["Channel Divinity"] = new RulesElement({
    name: "Channel Divinity",
    type: "Category",
    id: "ID_FMP_CATEGORY_67",
    source: "Core",
    categories: ["Channel Divinity", "ID_FMP_CATEGORY_67"]
  });
  byID[te.id] = te;
  
  te = Category["Charm"] = new RulesElement({
    name: "Charm",
    type: "Category",
    id: "ID_FMP_CATEGORY_6",
    source: "Core",
    categories: ["Charm", "ID_FMP_CATEGORY_6"]
  });
  byID[te.id] = te;
  
  te = Category["Class-Specific Multiclass"] = new RulesElement({
    name: "Class-Specific Multiclass",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS",
    source: "Core",
    categories: ["Class-Specific Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS"]
  });
  byID[te.id] = te;
  
  te = Category["Cleric Paragon Path"] = new RulesElement({
    name: "Cleric Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_CLERIC_PARAGON_PATH",
    source: "Core",
    categories: ["Cleric Paragon Path", "ID_INTERNAL_CATEGORY_CLERIC_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["cloth"] = new RulesElement({
    name: "cloth",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_CLOTH",
    source: "Core",
    categories: ["cloth", "ID_INTERNAL_CATEGORY_CLOTH"]
  });
  byID[te.id] = te;
  
  te = Category["cold"] = new RulesElement({
    name: "cold",
    type: "Category",
    id: "ID_FMP_CATEGORY_1",
    source: "Core",
    categories: ["cold", "ID_FMP_CATEGORY_1"]
  });
  byID[te.id] = te;
  
  te = Category["Conjuration"] = new RulesElement({
    name: "Conjuration",
    type: "Category",
    id: "ID_FMP_CATEGORY_26",
    source: "Core",
    categories: ["Conjuration", "ID_FMP_CATEGORY_26"]
  });
  byID[te.id] = te;
  
  te = Category["Consumable"] = new RulesElement({
    name: "Consumable",
    type: "Category",
    id: "ID_FMP_CATEGORY_62",
    source: "Core",
    categories: ["Consumable", "ID_FMP_CATEGORY_62"]
  });
  byID[te.id] = te;
  
  te = Category["daily"] = new RulesElement({
    name: "daily",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DAILY",
    source: "Core",
    categories: ["daily", "ID_INTERNAL_CATEGORY_DAILY"]
  });
  byID[te.id] = te;
  
  te = Category["Daily Usage"] = new RulesElement({
    name: "Daily Usage",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DAILY_USAGE",
    source: "Core",
    categories: ["Daily Usage", "ID_INTERNAL_CATEGORY_DAILY_USAGE"]
  });
  byID[te.id] = te;
  
  te = Category["Disease"] = new RulesElement({
    name: "Disease",
    type: "Category",
    id: "ID_FMP_CATEGORY_64",
    source: "Core",
    categories: ["Disease", "ID_FMP_CATEGORY_64"]
  });
  byID[te.id] = te;
  
  te = Category["Divine"] = new RulesElement({
    name: "Divine",
    type: "Category",
    id: "ID_FMP_CATEGORY_32",
    source: "Core",
    categories: ["Divine", "ID_FMP_CATEGORY_32"]
  });
  byID[te.id] = te;
  
  te = Category["Divinity"] = new RulesElement({
    name: "Divinity",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DIVINITY",
    source: "Core",
    categories: ["Divinity", "ID_INTERNAL_CATEGORY_DIVINITY"]
  });
  byID[te.id] = te;
  
  te = Category["Domain"] = new RulesElement({
    name: "Domain",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DOMAIN",
    source: "Core",
    categories: ["Domain", "ID_INTERNAL_CATEGORY_DOMAIN"]
  });
  byID[te.id] = te;
  
  te = Category["Dragon Soul Resist Choice"] = new RulesElement({
    name: "Dragon Soul Resist Choice",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DRAGON_SOUL_RESIST_CHOICE",
    source: "Core",
    categories: ["Dragon Soul Resist Choice", "ID_INTERNAL_CATEGORY_DRAGON_SOUL_RESIST_CHOICE"]
  });
  byID[te.id] = te;
  
  te = Category["Dragonmark"] = new RulesElement({
    name: "Dragonmark",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DRAGONMARK",
    source: "Core",
    categories: ["Dragonmark", "ID_INTERNAL_CATEGORY_DRAGONMARK"]
  });
  byID[te.id] = te;
  
  te = Category["Druid Paragon Path"] = new RulesElement({
    name: "Druid Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_DRUID_PARAGON_PATH",
    source: "Core",
    categories: ["Druid Paragon Path", "ID_INTERNAL_CATEGORY_DRUID_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Element Choice"] = new RulesElement({
    name: "Element Choice",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ELEMENT_CHOICE",
    source: "Core",
    categories: ["Element Choice", "ID_INTERNAL_CATEGORY_ELEMENT_CHOICE"]
  });
  byID[te.id] = te;
  
  te = Category["Enchantment"] = new RulesElement({
    name: "Enchantment",
    type: "Category",
    id: "ID_FMP_CATEGORY_70",
    source: "Core",
    categories: ["Enchantment", "ID_FMP_CATEGORY_70"]
  });
  byID[te.id] = te;
  
  te = Category["encounter"] = new RulesElement({
    name: "encounter",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ENCOUNTER",
    source: "Core",
    categories: ["encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER"]
  });
  byID[te.id] = te;
  
  te = Category["Encounter usage"] = new RulesElement({
    name: "Encounter usage",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE",
    source: "Core",
    categories: ["Encounter usage", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE"]
  });
  byID[te.id] = te;
  
  te = Category["Evocation"] = new RulesElement({
    name: "Evocation",
    type: "Category",
    id: "ID_FMP_CATEGORY_69",
    source: "Core",
    categories: ["Evocation", "ID_FMP_CATEGORY_69"]
  });
  byID[te.id] = te;
  
  te = Category["Familiar"] = new RulesElement({
    name: "Familiar",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_FAMILIAR",
    source: "Core",
    categories: ["Familiar", "ID_INTERNAL_CATEGORY_FAMILIAR"]
  });
  byID[te.id] = te;
  
  te = Category["Fear"] = new RulesElement({
    name: "Fear",
    type: "Category",
    id: "ID_FMP_CATEGORY_7",
    source: "Core",
    categories: ["Fear", "ID_FMP_CATEGORY_7"]
  });
  byID[te.id] = te;
  
  te = Category["Fighter Paragon Path"] = new RulesElement({
    name: "Fighter Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_FIGHTER_PARAGON_PATH",
    source: "Core",
    categories: ["Fighter Paragon Path", "ID_INTERNAL_CATEGORY_FIGHTER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["fire"] = new RulesElement({
    name: "fire",
    type: "Category",
    id: "ID_FMP_CATEGORY_3",
    source: "Core",
    categories: ["fire", "ID_FMP_CATEGORY_3"]
  });
  byID[te.id] = te;
  
  te = Category["Flavor"] = new RulesElement({
    name: "Flavor",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_FLAVOR",
    source: "Core",
    categories: ["Flavor", "ID_INTERNAL_CATEGORY_FLAVOR"]
  });
  byID[te.id] = te;
  
  te = Category["force"] = new RulesElement({
    name: "force",
    type: "Category",
    id: "ID_FMP_CATEGORY_8",
    source: "Core",
    categories: ["force", "ID_FMP_CATEGORY_8"]
  });
  byID[te.id] = te;
  
  te = Category["Free Action"] = new RulesElement({
    name: "Free Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_FREE_ACTION",
    source: "Core",
    categories: ["Free Action", "ID_INTERNAL_CATEGORY_FREE_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Full Discipline"] = new RulesElement({
    name: "Full Discipline",
    type: "Category",
    id: "ID_FMP_CATEGORY_60",
    source: "Core",
    categories: ["Full Discipline", "ID_FMP_CATEGORY_60"]
  });
  byID[te.id] = te;
  
  te = Category["Gaze"] = new RulesElement({
    name: "Gaze",
    type: "Category",
    id: "ID_FMP_CATEGORY_63",
    source: "Core",
    categories: ["Gaze", "ID_FMP_CATEGORY_63"]
  });
  byID[te.id] = te;
  
  te = Category["Geography"] = new RulesElement({
    name: "Geography",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_GEOGRAPHY",
    source: "Core",
    categories: ["Geography", "ID_INTERNAL_CATEGORY_GEOGRAPHY"]
  });
  byID[te.id] = te;
  
  te = Category["Greater Pact"] = new RulesElement({
    name: "Greater Pact",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_GREATER_PACT",
    source: "Core",
    categories: ["Greater Pact", "ID_INTERNAL_CATEGORY_GREATER_PACT"]
  });
  byID[te.id] = te;
  
  te = Category["Greater Style"] = new RulesElement({
    name: "Greater Style",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_GREATER_STYLE",
    source: "Core",
    categories: ["Greater Style", "ID_INTERNAL_CATEGORY_GREATER_STYLE"]
  });
  byID[te.id] = te;
  
  te = Category["Guild"] = new RulesElement({
    name: "Guild",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_GUILD",
    source: "Core",
    categories: ["Guild", "ID_INTERNAL_CATEGORY_GUILD"]
  });
  byID[te.id] = te;
  
  te = Category["Healing"] = new RulesElement({
    name: "Healing",
    type: "Category",
    id: "ID_FMP_CATEGORY_9",
    source: "Core",
    categories: ["Healing", "ID_FMP_CATEGORY_9"]
  });
  byID[te.id] = te;
  
  te = Category["heavy"] = new RulesElement({
    name: "heavy",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HEAVY",
    source: "Core",
    categories: ["heavy", "ID_INTERNAL_CATEGORY_HEAVY"]
  });
  byID[te.id] = te;
  
  te = Category["Heavy Shields"] = new RulesElement({
    name: "Heavy Shields",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HEAVY_SHIELDS",
    source: "Core",
    categories: ["Heavy Shields", "ID_INTERNAL_CATEGORY_HEAVY_SHIELDS"]
  });
  byID[te.id] = te;
  
  te = Category["Heritage"] = new RulesElement({
    name: "Heritage",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HERITAGE",
    source: "Core",
    categories: ["Heritage", "ID_INTERNAL_CATEGORY_HERITAGE"]
  });
  byID[te.id] = te;
  
  te = Category["hide"] = new RulesElement({
    name: "hide",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HIDE",
    source: "Core",
    categories: ["hide", "ID_INTERNAL_CATEGORY_HIDE"]
  });
  byID[te.id] = te;
  
  te = Category["House Cannith"] = new RulesElement({
    name: "House Cannith",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_CANNITH",
    source: "Core",
    categories: ["House Cannith", "ID_INTERNAL_CATEGORY_HOUSE_CANNITH"]
  });
  byID[te.id] = te;
  
  te = Category["House Deneith"] = new RulesElement({
    name: "House Deneith",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_DENEITH",
    source: "Core",
    categories: ["House Deneith", "ID_INTERNAL_CATEGORY_HOUSE_DENEITH"]
  });
  byID[te.id] = te;
  
  te = Category["House Ghallanda"] = new RulesElement({
    name: "House Ghallanda",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_GHALLANDA",
    source: "Core",
    categories: ["House Ghallanda", "ID_INTERNAL_CATEGORY_HOUSE_GHALLANDA"]
  });
  byID[te.id] = te;
  
  te = Category["House Jorasco"] = new RulesElement({
    name: "House Jorasco",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_JORASCO",
    source: "Core",
    categories: ["House Jorasco", "ID_INTERNAL_CATEGORY_HOUSE_JORASCO"]
  });
  byID[te.id] = te;
  
  te = Category["House Kundarak"] = new RulesElement({
    name: "House Kundarak",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_KUNDARAK",
    source: "Core",
    categories: ["House Kundarak", "ID_INTERNAL_CATEGORY_HOUSE_KUNDARAK"]
  });
  byID[te.id] = te;
  
  te = Category["House Lyrandar"] = new RulesElement({
    name: "House Lyrandar",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_LYRANDAR",
    source: "Core",
    categories: ["House Lyrandar", "ID_INTERNAL_CATEGORY_HOUSE_LYRANDAR"]
  });
  byID[te.id] = te;
  
  te = Category["House Medani"] = new RulesElement({
    name: "House Medani",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_MEDANI",
    source: "Core",
    categories: ["House Medani", "ID_INTERNAL_CATEGORY_HOUSE_MEDANI"]
  });
  byID[te.id] = te;
  
  te = Category["House Orien"] = new RulesElement({
    name: "House Orien",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_ORIEN",
    source: "Core",
    categories: ["House Orien", "ID_INTERNAL_CATEGORY_HOUSE_ORIEN"]
  });
  byID[te.id] = te;
  
  te = Category["House Phiarlan"] = new RulesElement({
    name: "House Phiarlan",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_PHIARLAN",
    source: "Core",
    categories: ["House Phiarlan", "ID_INTERNAL_CATEGORY_HOUSE_PHIARLAN"]
  });
  byID[te.id] = te;
  
  te = Category["House Sivis"] = new RulesElement({
    name: "House Sivis",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_SIVIS",
    source: "Core",
    categories: ["House Sivis", "ID_INTERNAL_CATEGORY_HOUSE_SIVIS"]
  });
  byID[te.id] = te;
  
  te = Category["House Tharashk"] = new RulesElement({
    name: "House Tharashk",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_THARASHK",
    source: "Core",
    categories: ["House Tharashk", "ID_INTERNAL_CATEGORY_HOUSE_THARASHK"]
  });
  byID[te.id] = te;
  
  te = Category["House Thuranni"] = new RulesElement({
    name: "House Thuranni",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_THURANNI",
    source: "Core",
    categories: ["House Thuranni", "ID_INTERNAL_CATEGORY_HOUSE_THURANNI"]
  });
  byID[te.id] = te;
  
  te = Category["House Vadalis"] = new RulesElement({
    name: "House Vadalis",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HOUSE_VADALIS",
    source: "Core",
    categories: ["House Vadalis", "ID_INTERNAL_CATEGORY_HOUSE_VADALIS"]
  });
  byID[te.id] = te;
  
  te = Category["Hybrid Pact"] = new RulesElement({
    name: "Hybrid Pact",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HYBRID_PACT",
    source: "Core",
    categories: ["Hybrid Pact", "ID_INTERNAL_CATEGORY_HYBRID_PACT"]
  });
  byID[te.id] = te;
  
  te = Category["Hybrid Paragon Path"] = new RulesElement({
    name: "Hybrid Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_HYBRID_PARAGON_PATH",
    source: "Core",
    categories: ["Hybrid Paragon Path", "ID_INTERNAL_CATEGORY_HYBRID_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_CLASS_5 Choice"] = new RulesElement({
    name: "ID_FMP_CLASS_5 Choice",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_CLASS_5_CHOICE",
    source: "Core",
    categories: ["ID_FMP_CLASS_5 Choice", "ID_INTERNAL_CATEGORY_ID_FMP_CLASS_5_CHOICE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_354 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_354 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_354_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_354 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_354_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_355 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_355 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_355_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_355 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_355_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_358 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_358 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_358_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_358 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_358_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_359 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_359 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_359_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_359 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_359_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_439 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_439 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_439_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_439 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_439_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_441 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_441 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_441_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_441 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_441_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_442 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_442 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_442_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_442 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_442_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_443 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_443 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_443_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_443 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_443_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_444 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_444 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_444_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_444 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_444_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_446 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_446 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_446_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_446 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_446_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_536 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_536 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_536_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_536 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_536_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_588 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_588 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_588_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_588 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_588_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_609 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_609 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_609_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_609 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_609_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_612 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_612 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_612_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_612 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_612_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["ID_FMP_HYBRID_CLASS_641 Defense"] = new RulesElement({
    name: "ID_FMP_HYBRID_CLASS_641 Defense",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_641_DEFENSE",
    source: "Core",
    categories: ["ID_FMP_HYBRID_CLASS_641 Defense", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_641_DEFENSE"]
  });
  byID[te.id] = te;
  
  te = Category["illusion"] = new RulesElement({
    name: "illusion",
    type: "Category",
    id: "ID_FMP_CATEGORY_10",
    source: "Core",
    categories: ["illusion", "ID_FMP_CATEGORY_10"]
  });
  byID[te.id] = te;
  
  te = Category["Immediate Interrupt"] = new RulesElement({
    name: "Immediate Interrupt",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT",
    source: "Core",
    categories: ["Immediate Interrupt", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT"]
  });
  byID[te.id] = te;
  
  te = Category["Immediate Reaction"] = new RulesElement({
    name: "Immediate Reaction",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION",
    source: "Core",
    categories: ["Immediate Reaction", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION"]
  });
  byID[te.id] = te;
  
  te = Category["implement"] = new RulesElement({
    name: "implement",
    type: "Category",
    id: "ID_FMP_CATEGORY_25",
    source: "Core",
    categories: ["implement", "ID_FMP_CATEGORY_25"]
  });
  byID[te.id] = te;
  
  te = Category["Improvised"] = new RulesElement({
    name: "Improvised",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_IMPROVISED",
    source: "Core",
    categories: ["Improvised", "ID_INTERNAL_CATEGORY_IMPROVISED"]
  });
  byID[te.id] = te;
  
  te = Category["Invigorating"] = new RulesElement({
    name: "Invigorating",
    type: "Category",
    id: "ID_FMP_CATEGORY_47",
    source: "Core",
    categories: ["Invigorating", "ID_FMP_CATEGORY_47"]
  });
  byID[te.id] = te;
  
  te = Category["Invoker Paragon Path"] = new RulesElement({
    name: "Invoker Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_INVOKER_PARAGON_PATH",
    source: "Core",
    categories: ["Invoker Paragon Path", "ID_INTERNAL_CATEGORY_INVOKER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Ki"] = new RulesElement({
    name: "Ki",
    type: "Category",
    id: "ID_FMP_CATEGORY_34",
    source: "Core",
    categories: ["Ki", "ID_FMP_CATEGORY_34"]
  });
  byID[te.id] = te;
  
  te = Category["Knowledge"] = new RulesElement({
    name: "Knowledge",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_KNOWLEDGE",
    source: "Core",
    categories: ["Knowledge", "ID_INTERNAL_CATEGORY_KNOWLEDGE"]
  });
  byID[te.id] = te;
  
  te = Category["leather"] = new RulesElement({
    name: "leather",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_LEATHER",
    source: "Core",
    categories: ["leather", "ID_INTERNAL_CATEGORY_LEATHER"]
  });
  byID[te.id] = te;
  
  te = Category["Lesser Pact"] = new RulesElement({
    name: "Lesser Pact",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_LESSER_PACT",
    source: "Core",
    categories: ["Lesser Pact", "ID_INTERNAL_CATEGORY_LESSER_PACT"]
  });
  byID[te.id] = te;
  
  te = Category["Lesser Style"] = new RulesElement({
    name: "Lesser Style",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_LESSER_STYLE",
    source: "Core",
    categories: ["Lesser Style", "ID_INTERNAL_CATEGORY_LESSER_STYLE"]
  });
  byID[te.id] = te;
  
  te = Category["Light Shields"] = new RulesElement({
    name: "Light Shields",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_LIGHT_SHIELDS",
    source: "Core",
    categories: ["Light Shields", "ID_INTERNAL_CATEGORY_LIGHT_SHIELDS"]
  });
  byID[te.id] = te;
  
  te = Category["Lightning"] = new RulesElement({
    name: "Lightning",
    type: "Category",
    id: "ID_FMP_CATEGORY_11",
    source: "Core",
    categories: ["Lightning", "ID_FMP_CATEGORY_11"]
  });
  byID[te.id] = te;
  
  te = Category["Main-Hand"] = new RulesElement({
    name: "Main-Hand",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MAIN-HAND",
    source: "Core",
    categories: ["Main-Hand", "ID_INTERNAL_CATEGORY_MAIN-HAND"]
  });
  byID[te.id] = te;
  
  te = Category["martial"] = new RulesElement({
    name: "martial",
    type: "Category",
    id: "ID_FMP_CATEGORY_36",
    source: "Core",
    categories: ["martial", "ID_FMP_CATEGORY_36"]
  });
  byID[te.id] = te;
  
  te = Category["Melee"] = new RulesElement({
    name: "Melee",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MELEE",
    source: "Core",
    categories: ["Melee", "ID_INTERNAL_CATEGORY_MELEE"]
  });
  byID[te.id] = te;
  
  te = Category["Military"] = new RulesElement({
    name: "Military",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MILITARY",
    source: "Core",
    categories: ["Military", "ID_INTERNAL_CATEGORY_MILITARY"]
  });
  byID[te.id] = te;
  
  te = Category["Minor Action"] = new RulesElement({
    name: "Minor Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MINOR_ACTION",
    source: "Core",
    categories: ["Minor Action", "ID_INTERNAL_CATEGORY_MINOR_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["miss"] = new RulesElement({
    name: "miss",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MISS",
    source: "Core",
    categories: ["miss", "ID_INTERNAL_CATEGORY_MISS"]
  });
  byID[te.id] = te;
  
  te = Category["Monk Paragon Path"] = new RulesElement({
    name: "Monk Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MONK_PARAGON_PATH",
    source: "Core",
    categories: ["Monk Paragon Path", "ID_INTERNAL_CATEGORY_MONK_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Mount"] = new RulesElement({
    name: "Mount",
    type: "Category",
    id: "ID_FMP_CATEGORY_66",
    source: "Core",
    categories: ["Mount", "ID_FMP_CATEGORY_66"]
  });
  byID[te.id] = te;
  
  te = Category["Move Action"] = new RulesElement({
    name: "Move Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MOVE_ACTION",
    source: "Core",
    categories: ["Move Action", "ID_INTERNAL_CATEGORY_MOVE_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass"] = new RulesElement({
    name: "Multiclass",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS",
    source: "Core",
    categories: ["Multiclass", "ID_INTERNAL_CATEGORY_MULTICLASS"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Ardent"] = new RulesElement({
    name: "Multiclass Ardent",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_ARDENT",
    source: "Core",
    categories: ["Multiclass Ardent", "ID_INTERNAL_CATEGORY_MULTICLASS_ARDENT"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Artificer"] = new RulesElement({
    name: "Multiclass Artificer",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_ARTIFICER",
    source: "Core",
    categories: ["Multiclass Artificer", "ID_INTERNAL_CATEGORY_MULTICLASS_ARTIFICER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Assassin"] = new RulesElement({
    name: "Multiclass Assassin",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_ASSASSIN",
    source: "Core",
    categories: ["Multiclass Assassin", "ID_INTERNAL_CATEGORY_MULTICLASS_ASSASSIN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Avenger"] = new RulesElement({
    name: "Multiclass Avenger",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER",
    source: "Core",
    categories: ["Multiclass Avenger", "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Bahamut"] = new RulesElement({
    name: "Multiclass Bahamut",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BAHAMUT",
    source: "Core",
    categories: ["Multiclass Bahamut", "ID_INTERNAL_CATEGORY_MULTICLASS_BAHAMUT"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Barbarian"] = new RulesElement({
    name: "Multiclass Barbarian",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BARBARIAN",
    source: "Core",
    categories: ["Multiclass Barbarian", "ID_INTERNAL_CATEGORY_MULTICLASS_BARBARIAN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Bard"] = new RulesElement({
    name: "Multiclass Bard",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BARD",
    source: "Core",
    categories: ["Multiclass Bard", "ID_INTERNAL_CATEGORY_MULTICLASS_BARD"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Battlemind"] = new RulesElement({
    name: "Multiclass Battlemind",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BATTLEMIND",
    source: "Core",
    categories: ["Multiclass Battlemind", "ID_INTERNAL_CATEGORY_MULTICLASS_BATTLEMIND"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Blowgun"] = new RulesElement({
    name: "Multiclass Blowgun",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BLOWGUN",
    source: "Core",
    categories: ["Multiclass Blowgun", "ID_INTERNAL_CATEGORY_MULTICLASS_BLOWGUN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Bola"] = new RulesElement({
    name: "Multiclass Bola",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BOLA",
    source: "Core",
    categories: ["Multiclass Bola", "ID_INTERNAL_CATEGORY_MULTICLASS_BOLA"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Bravo"] = new RulesElement({
    name: "Multiclass Bravo",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_BRAVO",
    source: "Core",
    categories: ["Multiclass Bravo", "ID_INTERNAL_CATEGORY_MULTICLASS_BRAVO"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Cleric"] = new RulesElement({
    name: "Multiclass Cleric",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC",
    source: "Core",
    categories: ["Multiclass Cleric", "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Cutthroat"] = new RulesElement({
    name: "Multiclass Cutthroat",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_CUTTHROAT",
    source: "Core",
    categories: ["Multiclass Cutthroat", "ID_INTERNAL_CATEGORY_MULTICLASS_CUTTHROAT"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Daily"] = new RulesElement({
    name: "Multiclass Daily",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_DAILY",
    source: "Core",
    categories: ["Multiclass Daily", "ID_INTERNAL_CATEGORY_MULTICLASS_DAILY"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Druid"] = new RulesElement({
    name: "Multiclass Druid",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_DRUID",
    source: "Core",
    categories: ["Multiclass Druid", "ID_INTERNAL_CATEGORY_MULTICLASS_DRUID"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Encounter"] = new RulesElement({
    name: "Multiclass Encounter",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER",
    source: "Core",
    categories: ["Multiclass Encounter", "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Fighter"] = new RulesElement({
    name: "Multiclass Fighter",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER",
    source: "Core",
    categories: ["Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Garrote"] = new RulesElement({
    name: "Multiclass Garrote",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_GARROTE",
    source: "Core",
    categories: ["Multiclass Garrote", "ID_INTERNAL_CATEGORY_MULTICLASS_GARROTE"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Invoker"] = new RulesElement({
    name: "Multiclass Invoker",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER",
    source: "Core",
    categories: ["Multiclass Invoker", "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Monk"] = new RulesElement({
    name: "Multiclass Monk",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_MONK",
    source: "Core",
    categories: ["Multiclass Monk", "ID_INTERNAL_CATEGORY_MULTICLASS_MONK"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Net"] = new RulesElement({
    name: "Multiclass Net",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_NET",
    source: "Core",
    categories: ["Multiclass Net", "ID_INTERNAL_CATEGORY_MULTICLASS_NET"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Paladin"] = new RulesElement({
    name: "Multiclass Paladin",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN",
    source: "Core",
    categories: ["Multiclass Paladin", "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Poisoner"] = new RulesElement({
    name: "Multiclass Poisoner",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_POISONER",
    source: "Core",
    categories: ["Multiclass Poisoner", "ID_INTERNAL_CATEGORY_MULTICLASS_POISONER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Psion"] = new RulesElement({
    name: "Multiclass Psion",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_PSION",
    source: "Core",
    categories: ["Multiclass Psion", "ID_INTERNAL_CATEGORY_MULTICLASS_PSION"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Ranger"] = new RulesElement({
    name: "Multiclass Ranger",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_RANGER",
    source: "Core",
    categories: ["Multiclass Ranger", "ID_INTERNAL_CATEGORY_MULTICLASS_RANGER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Rogue"] = new RulesElement({
    name: "Multiclass Rogue",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE",
    source: "Core",
    categories: ["Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Runepriest"] = new RulesElement({
    name: "Multiclass Runepriest",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_RUNEPRIEST",
    source: "Core",
    categories: ["Multiclass Runepriest", "ID_INTERNAL_CATEGORY_MULTICLASS_RUNEPRIEST"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Seeker"] = new RulesElement({
    name: "Multiclass Seeker",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SEEKER",
    source: "Core",
    categories: ["Multiclass Seeker", "ID_INTERNAL_CATEGORY_MULTICLASS_SEEKER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Shade"] = new RulesElement({
    name: "Multiclass Shade",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SHADE",
    source: "Core",
    categories: ["Multiclass Shade", "ID_INTERNAL_CATEGORY_MULTICLASS_SHADE"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Shaman"] = new RulesElement({
    name: "Multiclass Shaman",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SHAMAN",
    source: "Core",
    categories: ["Multiclass Shaman", "ID_INTERNAL_CATEGORY_MULTICLASS_SHAMAN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Sorcerer"] = new RulesElement({
    name: "Multiclass Sorcerer",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SORCERER",
    source: "Core",
    categories: ["Multiclass Sorcerer", "ID_INTERNAL_CATEGORY_MULTICLASS_SORCERER"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Spellscarred"] = new RulesElement({
    name: "Multiclass Spellscarred",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SPELLSCARRED",
    source: "Core",
    categories: ["Multiclass Spellscarred", "ID_INTERNAL_CATEGORY_MULTICLASS_SPELLSCARRED"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Spiked Chain"] = new RulesElement({
    name: "Multiclass Spiked Chain",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SPIKED_CHAIN",
    source: "Core",
    categories: ["Multiclass Spiked Chain", "ID_INTERNAL_CATEGORY_MULTICLASS_SPIKED_CHAIN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Swordmage"] = new RulesElement({
    name: "Multiclass Swordmage",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_SWORDMAGE",
    source: "Core",
    categories: ["Multiclass Swordmage", "ID_INTERNAL_CATEGORY_MULTICLASS_SWORDMAGE"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Utility"] = new RulesElement({
    name: "Multiclass Utility",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_UTILITY",
    source: "Core",
    categories: ["Multiclass Utility", "ID_INTERNAL_CATEGORY_MULTICLASS_UTILITY"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Warden"] = new RulesElement({
    name: "Multiclass Warden",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_WARDEN",
    source: "Core",
    categories: ["Multiclass Warden", "ID_INTERNAL_CATEGORY_MULTICLASS_WARDEN"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Warlock"] = new RulesElement({
    name: "Multiclass Warlock",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_WARLOCK",
    source: "Core",
    categories: ["Multiclass Warlock", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLOCK"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Warlord"] = new RulesElement({
    name: "Multiclass Warlord",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD",
    source: "Core",
    categories: ["Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Whip"] = new RulesElement({
    name: "Multiclass Whip",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_WHIP",
    source: "Core",
    categories: ["Multiclass Whip", "ID_INTERNAL_CATEGORY_MULTICLASS_WHIP"]
  });
  byID[te.id] = te;
  
  te = Category["Multiclass Wizard"] = new RulesElement({
    name: "Multiclass Wizard",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_MULTICLASS_WIZARD",
    source: "Core",
    categories: ["Multiclass Wizard", "ID_INTERNAL_CATEGORY_MULTICLASS_WIZARD"]
  });
  byID[te.id] = te;
  
  te = Category["Necrotic"] = new RulesElement({
    name: "Necrotic",
    type: "Category",
    id: "ID_FMP_CATEGORY_12",
    source: "Core",
    categories: ["Necrotic", "ID_FMP_CATEGORY_12"]
  });
  byID[te.id] = te;
  
  te = Category["No Action"] = new RulesElement({
    name: "No Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_NO_ACTION",
    source: "Core",
    categories: ["No Action", "ID_INTERNAL_CATEGORY_NO_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Occupation"] = new RulesElement({
    name: "Occupation",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_OCCUPATION",
    source: "Core",
    categories: ["Occupation", "ID_INTERNAL_CATEGORY_OCCUPATION"]
  });
  byID[te.id] = te;
  
  te = Category["One-hand"] = new RulesElement({
    name: "One-hand",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ONE-HAND",
    source: "Core",
    categories: ["One-hand", "ID_INTERNAL_CATEGORY_ONE-HAND"]
  });
  byID[te.id] = te;
  
  te = Category["One-Handed"] = new RulesElement({
    name: "One-Handed",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ONE-HANDED",
    source: "Core",
    categories: ["One-Handed", "ID_INTERNAL_CATEGORY_ONE-HANDED"]
  });
  byID[te.id] = te;
  
  te = Category["Opportunity Action"] = new RulesElement({
    name: "Opportunity Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION",
    source: "Core",
    categories: ["Opportunity Action", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Pact Boon"] = new RulesElement({
    name: "Pact Boon",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PACT_BOON",
    source: "Core",
    categories: ["Pact Boon", "ID_INTERNAL_CATEGORY_PACT_BOON"]
  });
  byID[te.id] = te;
  
  te = Category["Paladin Paragon Path"] = new RulesElement({
    name: "Paladin Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PALADIN_PARAGON_PATH",
    source: "Core",
    categories: ["Paladin Paragon Path", "ID_INTERNAL_CATEGORY_PALADIN_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Paralysis"] = new RulesElement({
    name: "Paralysis",
    type: "Category",
    id: "ID_FMP_CATEGORY_13",
    source: "Core",
    categories: ["Paralysis", "ID_FMP_CATEGORY_13"]
  });
  byID[te.id] = te;
  
  te = Category["plate"] = new RulesElement({
    name: "plate",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PLATE",
    source: "Core",
    categories: ["plate", "ID_INTERNAL_CATEGORY_PLATE"]
  });
  byID[te.id] = te;
  
  te = Category["Poison"] = new RulesElement({
    name: "Poison",
    type: "Category",
    id: "ID_FMP_CATEGORY_14",
    source: "Core",
    categories: ["Poison", "ID_FMP_CATEGORY_14"]
  });
  byID[te.id] = te;
  
  te = Category["Polymorph"] = new RulesElement({
    name: "Polymorph",
    type: "Category",
    id: "ID_FMP_CATEGORY_15",
    source: "Core",
    categories: ["Polymorph", "ID_FMP_CATEGORY_15"]
  });
  byID[te.id] = te;
  
  te = Category["Primal"] = new RulesElement({
    name: "Primal",
    type: "Category",
    id: "ID_FMP_CATEGORY_33",
    source: "Core",
    categories: ["Primal", "ID_FMP_CATEGORY_33"]
  });
  byID[te.id] = te;
  
  te = Category["Prophetic Blessing Mental"] = new RulesElement({
    name: "Prophetic Blessing Mental",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PROPHETIC_BLESSING_MENTAL",
    source: "Core",
    categories: ["Prophetic Blessing Mental", "ID_INTERNAL_CATEGORY_PROPHETIC_BLESSING_MENTAL"]
  });
  byID[te.id] = te;
  
  te = Category["Prophetic Blessing Physical"] = new RulesElement({
    name: "Prophetic Blessing Physical",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PROPHETIC_BLESSING_PHYSICAL",
    source: "Core",
    categories: ["Prophetic Blessing Physical", "ID_INTERNAL_CATEGORY_PROPHETIC_BLESSING_PHYSICAL"]
  });
  byID[te.id] = te;
  
  te = Category["Psion Paragon Path"] = new RulesElement({
    name: "Psion Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_PSION_PARAGON_PATH",
    source: "Core",
    categories: ["Psion Paragon Path", "ID_INTERNAL_CATEGORY_PSION_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Psionic"] = new RulesElement({
    name: "Psionic",
    type: "Category",
    id: "ID_FMP_CATEGORY_35",
    source: "Core",
    categories: ["Psionic", "ID_FMP_CATEGORY_35"]
  });
  byID[te.id] = te;
  
  te = Category["psychic"] = new RulesElement({
    name: "psychic",
    type: "Category",
    id: "ID_FMP_CATEGORY_16",
    source: "Core",
    categories: ["psychic", "ID_FMP_CATEGORY_16"]
  });
  byID[te.id] = te;
  
  te = Category["Racial"] = new RulesElement({
    name: "Racial",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_RACIAL",
    source: "Core",
    categories: ["Racial", "ID_INTERNAL_CATEGORY_RACIAL"]
  });
  byID[te.id] = te;
  
  te = Category["Radiant"] = new RulesElement({
    name: "Radiant",
    type: "Category",
    id: "ID_FMP_CATEGORY_2",
    source: "Core",
    categories: ["Radiant", "ID_FMP_CATEGORY_2"]
  });
  byID[te.id] = te;
  
  te = Category["Rage"] = new RulesElement({
    name: "Rage",
    type: "Category",
    id: "ID_FMP_CATEGORY_53",
    source: "Core",
    categories: ["Rage", "ID_FMP_CATEGORY_53"]
  });
  byID[te.id] = te;
  
  te = Category["Ranged"] = new RulesElement({
    name: "Ranged",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_RANGED",
    source: "Core",
    categories: ["Ranged", "ID_INTERNAL_CATEGORY_RANGED"]
  });
  byID[te.id] = te;
  
  te = Category["Ranger Paragon Path"] = new RulesElement({
    name: "Ranger Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_RANGER_PARAGON_PATH",
    source: "Core",
    categories: ["Ranger Paragon Path", "ID_INTERNAL_CATEGORY_RANGER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Rattling"] = new RulesElement({
    name: "Rattling",
    type: "Category",
    id: "ID_FMP_CATEGORY_48",
    source: "Core",
    categories: ["Rattling", "ID_FMP_CATEGORY_48"]
  });
  byID[te.id] = te;
  
  te = Category["Reliable"] = new RulesElement({
    name: "Reliable",
    type: "Category",
    id: "ID_FMP_CATEGORY_22",
    source: "Core",
    categories: ["Reliable", "ID_FMP_CATEGORY_22"]
  });
  byID[te.id] = te;
  
  te = Category["Rogue Paragon Path"] = new RulesElement({
    name: "Rogue Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_ROGUE_PARAGON_PATH",
    source: "Core",
    categories: ["Rogue Paragon Path", "ID_INTERNAL_CATEGORY_ROGUE_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Rune"] = new RulesElement({
    name: "Rune",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_RUNE",
    source: "Core",
    categories: ["Rune", "ID_INTERNAL_CATEGORY_RUNE"]
  });
  byID[te.id] = te;
  
  te = Category["Runepriest Paragon Path"] = new RulesElement({
    name: "Runepriest Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_RUNEPRIEST_PARAGON_PATH",
    source: "Core",
    categories: ["Runepriest Paragon Path", "ID_INTERNAL_CATEGORY_RUNEPRIEST_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Runic"] = new RulesElement({
    name: "Runic",
    type: "Category",
    id: "ID_FMP_CATEGORY_65",
    source: "Core",
    categories: ["Runic", "ID_FMP_CATEGORY_65"]
  });
  byID[te.id] = te;
  
  te = Category["Scale"] = new RulesElement({
    name: "Scale",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SCALE",
    source: "Core",
    categories: ["Scale", "ID_INTERNAL_CATEGORY_SCALE"]
  });
  byID[te.id] = te;
  
  te = Category["Seeker Paragon Path"] = new RulesElement({
    name: "Seeker Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SEEKER_PARAGON_PATH",
    source: "Core",
    categories: ["Seeker Paragon Path", "ID_INTERNAL_CATEGORY_SEEKER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Selectable"] = new RulesElement({
    name: "Selectable",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SELECTABLE",
    source: "Core",
    categories: ["Selectable", "ID_INTERNAL_CATEGORY_SELECTABLE"]
  });
  byID[te.id] = te;
  
  te = Category["Shadow"] = new RulesElement({
    name: "Shadow",
    type: "Category",
    id: "ID_FMP_CATEGORY_38",
    source: "Core",
    categories: ["Shadow", "ID_FMP_CATEGORY_38"]
  });
  byID[te.id] = te;
  
  te = Category["Shaman Paragon Path"] = new RulesElement({
    name: "Shaman Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SHAMAN_PARAGON_PATH",
    source: "Core",
    categories: ["Shaman Paragon Path", "ID_INTERNAL_CATEGORY_SHAMAN_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Short Rest Action"] = new RulesElement({
    name: "Short Rest Action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SHORT_REST_ACTION",
    source: "Core",
    categories: ["Short Rest Action", "ID_INTERNAL_CATEGORY_SHORT_REST_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Simple"] = new RulesElement({
    name: "Simple",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SIMPLE",
    source: "Core",
    categories: ["Simple", "ID_INTERNAL_CATEGORY_SIMPLE"]
  });
  byID[te.id] = te;
  
  te = Category["Skill Bonus"] = new RulesElement({
    name: "Skill Bonus",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SKILL_BONUS",
    source: "Core",
    categories: ["Skill Bonus", "ID_INTERNAL_CATEGORY_SKILL_BONUS"]
  });
  byID[te.id] = te;
  
  te = Category["Skill Power"] = new RulesElement({
    name: "Skill Power",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SKILL_POWER",
    source: "Core",
    categories: ["Skill Power", "ID_INTERNAL_CATEGORY_SKILL_POWER"]
  });
  byID[te.id] = te;
  
  te = Category["Sleep"] = new RulesElement({
    name: "Sleep",
    type: "Category",
    id: "ID_FMP_CATEGORY_17",
    source: "Core",
    categories: ["Sleep", "ID_FMP_CATEGORY_17"]
  });
  byID[te.id] = te;
  
  te = Category["Society"] = new RulesElement({
    name: "Society",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SOCIETY",
    source: "Core",
    categories: ["Society", "ID_INTERNAL_CATEGORY_SOCIETY"]
  });
  byID[te.id] = te;
  
  te = Category["Sorcerer Paragon Path"] = new RulesElement({
    name: "Sorcerer Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SORCERER_PARAGON_PATH",
    source: "Core",
    categories: ["Sorcerer Paragon Path", "ID_INTERNAL_CATEGORY_SORCERER_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Special"] = new RulesElement({
    name: "Special",
    type: "Category",
    id: "ID_FMP_CATEGORY_55",
    source: "Core",
    categories: ["Special", "ID_FMP_CATEGORY_55"]
  });
  byID[te.id] = te;
  
  te = Category["Spirit"] = new RulesElement({
    name: "Spirit",
    type: "Category",
    id: "ID_FMP_CATEGORY_57",
    source: "Core",
    categories: ["Spirit", "ID_FMP_CATEGORY_57"]
  });
  byID[te.id] = te;
  
  te = Category["staff"] = new RulesElement({
    name: "staff",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_STAFF",
    source: "Core",
    categories: ["staff", "ID_INTERNAL_CATEGORY_STAFF"]
  });
  byID[te.id] = te;
  
  te = Category["Stance"] = new RulesElement({
    name: "Stance",
    type: "Category",
    id: "ID_FMP_CATEGORY_28",
    source: "Core",
    categories: ["Stance", "ID_FMP_CATEGORY_28"]
  });
  byID[te.id] = te;
  
  te = Category["standard action"] = new RulesElement({
    name: "standard action",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_STANDARD_ACTION",
    source: "Core",
    categories: ["standard action", "ID_INTERNAL_CATEGORY_STANDARD_ACTION"]
  });
  byID[te.id] = te;
  
  te = Category["Starting"] = new RulesElement({
    name: "Starting",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_STARTING",
    source: "Core",
    categories: ["Starting", "ID_INTERNAL_CATEGORY_STARTING"]
  });
  byID[te.id] = te;
  
  te = Category["summoning"] = new RulesElement({
    name: "summoning",
    type: "Category",
    id: "ID_FMP_CATEGORY_51",
    source: "Core",
    categories: ["summoning", "ID_FMP_CATEGORY_51"]
  });
  byID[te.id] = te;
  
  te = Category["Superior"] = new RulesElement({
    name: "Superior",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SUPERIOR",
    source: "Core",
    categories: ["Superior", "ID_INTERNAL_CATEGORY_SUPERIOR"]
  });
  byID[te.id] = te;
  
  te = Category["Swordmage Paragon Path"] = new RulesElement({
    name: "Swordmage Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_SWORDMAGE_PARAGON_PATH",
    source: "Core",
    categories: ["Swordmage Paragon Path", "ID_INTERNAL_CATEGORY_SWORDMAGE_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["teleportation"] = new RulesElement({
    name: "teleportation",
    type: "Category",
    id: "ID_FMP_CATEGORY_19",
    source: "Core",
    categories: ["teleportation", "ID_FMP_CATEGORY_19"]
  });
  byID[te.id] = te;
  
  te = Category["Theme Power"] = new RulesElement({
    name: "Theme Power",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_THEME_POWER",
    source: "Core",
    categories: ["Theme Power", "ID_INTERNAL_CATEGORY_THEME_POWER"]
  });
  byID[te.id] = te;
  
  te = Category["Thunder"] = new RulesElement({
    name: "Thunder",
    type: "Category",
    id: "ID_FMP_CATEGORY_20",
    source: "Core",
    categories: ["Thunder", "ID_FMP_CATEGORY_20"]
  });
  byID[te.id] = te;
  
  te = Category["Tribal"] = new RulesElement({
    name: "Tribal",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_TRIBAL",
    source: "Core",
    categories: ["Tribal", "ID_INTERNAL_CATEGORY_TRIBAL"]
  });
  byID[te.id] = te;
  
  te = Category["two-handed"] = new RulesElement({
    name: "two-handed",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_TWO-HANDED",
    source: "Core",
    categories: ["two-handed", "ID_INTERNAL_CATEGORY_TWO-HANDED"]
  });
  byID[te.id] = te;
  
  te = Category["Two-Hands"] = new RulesElement({
    name: "Two-Hands",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_TWO-HANDS",
    source: "Core",
    categories: ["Two-Hands", "ID_INTERNAL_CATEGORY_TWO-HANDS"]
  });
  byID[te.id] = te;
  
  te = Category["Unknown"] = new RulesElement({
    name: "Unknown",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_UNKNOWN",
    source: "Core",
    categories: ["Unknown", "ID_INTERNAL_CATEGORY_UNKNOWN"]
  });
  byID[te.id] = te;
  
  te = Category["utility"] = new RulesElement({
    name: "utility",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_UTILITY",
    source: "Core",
    categories: ["utility", "ID_INTERNAL_CATEGORY_UTILITY"]
  });
  byID[te.id] = te;
  
  te = Category["Varies"] = new RulesElement({
    name: "Varies",
    type: "Category",
    id: "ID_FMP_CATEGORY_56",
    source: "Core",
    categories: ["Varies", "ID_FMP_CATEGORY_56"]
  });
  byID[te.id] = te;
  
  te = Category["Versatile Expertise Implement"] = new RulesElement({
    name: "Versatile Expertise Implement",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT",
    source: "Core",
    categories: ["Versatile Expertise Implement", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT"]
  });
  byID[te.id] = te;
  
  te = Category["Versatile Expertise Weapon Group"] = new RulesElement({
    name: "Versatile Expertise Weapon Group",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP",
    source: "Core",
    categories: ["Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP"]
  });
  byID[te.id] = te;
  
  te = Category["Warden Paragon Path"] = new RulesElement({
    name: "Warden Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_WARDEN_PARAGON_PATH",
    source: "Core",
    categories: ["Warden Paragon Path", "ID_INTERNAL_CATEGORY_WARDEN_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Warlock Paragon Path"] = new RulesElement({
    name: "Warlock Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_WARLOCK_PARAGON_PATH",
    source: "Core",
    categories: ["Warlock Paragon Path", "ID_INTERNAL_CATEGORY_WARLOCK_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Warlord Paragon Path"] = new RulesElement({
    name: "Warlord Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_WARLORD_PARAGON_PATH",
    source: "Core",
    categories: ["Warlord Paragon Path", "ID_INTERNAL_CATEGORY_WARLORD_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Weapon"] = new RulesElement({
    name: "Weapon",
    type: "Category",
    id: "ID_FMP_CATEGORY_24",
    source: "Core",
    categories: ["Weapon", "ID_FMP_CATEGORY_24"]
  });
  byID[te.id] = te;
  
  te = Category["Wild Talent Cantrip"] = new RulesElement({
    name: "Wild Talent Cantrip",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_WILD_TALENT_CANTRIP",
    source: "Core",
    categories: ["Wild Talent Cantrip", "ID_INTERNAL_CATEGORY_WILD_TALENT_CANTRIP"]
  });
  byID[te.id] = te;
  
  te = Category["Wizard Paragon Path"] = new RulesElement({
    name: "Wizard Paragon Path",
    type: "Category",
    id: "ID_INTERNAL_CATEGORY_WIZARD_PARAGON_PATH",
    source: "Core",
    categories: ["Wizard Paragon Path", "ID_INTERNAL_CATEGORY_WIZARD_PARAGON_PATH"]
  });
  byID[te.id] = te;
  
  te = Category["Zone"] = new RulesElement({
    name: "Zone",
    type: "Category",
    id: "ID_FMP_CATEGORY_39",
    source: "Core",
    categories: ["Zone", "ID_FMP_CATEGORY_39"]
  });
  byID[te.id] = te;
  
  
})(this);
