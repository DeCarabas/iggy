define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background_Association = types['Background Association'] || (types['Background Association'] = {});
  te = Background_Association["Abyssal"] = new engine.RulesElement({
    name: "Abyssal",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL",
    source: "Core",
    categories: ["Abyssal", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Acrobatics"] = new engine.RulesElement({
    name: "Acrobatics",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS",
    source: "Core",
    categories: ["Acrobatics", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]
  });
  byID[te.id] = te;
  
  te = Background_Association["All"] = new engine.RulesElement({
    name: "All",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL",
    source: "Core",
    categories: ["All", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Arcana"] = new engine.RulesElement({
    name: "Arcana",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA",
    source: "Core",
    categories: ["Arcana", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Argon"] = new engine.RulesElement({
    name: "Argon",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON",
    source: "Core",
    categories: ["Argon", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Athletics"] = new engine.RulesElement({
    name: "Athletics",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS",
    source: "Core",
    categories: ["Athletics", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Bluff"] = new engine.RulesElement({
    name: "Bluff",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF",
    source: "Core",
    categories: ["Bluff", "ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Chondathan"] = new engine.RulesElement({
    name: "Chondathan",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN",
    source: "Core",
    categories: ["Chondathan", "ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Common"] = new engine.RulesElement({
    name: "Common",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON",
    source: "Core",
    categories: ["Common", "ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Damaran"] = new engine.RulesElement({
    name: "Damaran",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN",
    source: "Core",
    categories: ["Damaran", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Deep Speech"] = new engine.RulesElement({
    name: "Deep Speech",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH",
    source: "Core",
    categories: ["Deep Speech", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Diplomacy"] = new engine.RulesElement({
    name: "Diplomacy",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY",
    source: "Core",
    categories: ["Diplomacy", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Draconic"] = new engine.RulesElement({
    name: "Draconic",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC",
    source: "Core",
    categories: ["Draconic", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Dungeoneering"] = new engine.RulesElement({
    name: "Dungeoneering",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING",
    source: "Core",
    categories: ["Dungeoneering", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Dwarven"] = new engine.RulesElement({
    name: "Dwarven",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN",
    source: "Core",
    categories: ["Dwarven", "ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Elven"] = new engine.RulesElement({
    name: "Elven",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN",
    source: "Core",
    categories: ["Elven", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Endurance"] = new engine.RulesElement({
    name: "Endurance",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE",
    source: "Core",
    categories: ["Endurance", "ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Giant"] = new engine.RulesElement({
    name: "Giant",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT",
    source: "Core",
    categories: ["Giant", "ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Goblin"] = new engine.RulesElement({
    name: "Goblin",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN",
    source: "Core",
    categories: ["Goblin", "ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Heal"] = new engine.RulesElement({
    name: "Heal",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL",
    source: "Core",
    categories: ["Heal", "ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]
  });
  byID[te.id] = te;
  
  te = Background_Association["History"] = new engine.RulesElement({
    name: "History",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY",
    source: "Core",
    categories: ["History", "ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Insight"] = new engine.RulesElement({
    name: "Insight",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT",
    source: "Core",
    categories: ["Insight", "ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Intimidate"] = new engine.RulesElement({
    name: "Intimidate",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE",
    source: "Core",
    categories: ["Intimidate", "ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Nature"] = new engine.RulesElement({
    name: "Nature",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE",
    source: "Core",
    categories: ["Nature", "ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Netherese"] = new engine.RulesElement({
    name: "Netherese",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE",
    source: "Core",
    categories: ["Netherese", "ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Perception"] = new engine.RulesElement({
    name: "Perception",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION",
    source: "Core",
    categories: ["Perception", "ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Primordial"] = new engine.RulesElement({
    name: "Primordial",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL",
    source: "Core",
    categories: ["Primordial", "ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Quori"] = new engine.RulesElement({
    name: "Quori",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI",
    source: "Core",
    categories: ["Quori", "ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Religion"] = new engine.RulesElement({
    name: "Religion",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION",
    source: "Core",
    categories: ["Religion", "ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Riedran"] = new engine.RulesElement({
    name: "Riedran",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN",
    source: "Core",
    categories: ["Riedran", "ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Secret Language"] = new engine.RulesElement({
    name: "Secret Language",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE",
    source: "Core",
    categories: ["Secret Language", "ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Shou"] = new engine.RulesElement({
    name: "Shou",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU",
    source: "Core",
    categories: ["Shou", "ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Stealth"] = new engine.RulesElement({
    name: "Stealth",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH",
    source: "Core",
    categories: ["Stealth", "ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Streetwise"] = new engine.RulesElement({
    name: "Streetwise",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE",
    source: "Core",
    categories: ["Streetwise", "ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Supernal"] = new engine.RulesElement({
    name: "Supernal",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL",
    source: "Core",
    categories: ["Supernal", "ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Thayan"] = new engine.RulesElement({
    name: "Thayan",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN",
    source: "Core",
    categories: ["Thayan", "ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["The language of the mind"] = new engine.RulesElement({
    name: "The language of the mind",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND",
    source: "Core",
    categories: ["The language of the mind", "ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Thievery"] = new engine.RulesElement({
    name: "Thievery",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY",
    source: "Core",
    categories: ["Thievery", "ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Tulgan"] = new engine.RulesElement({
    name: "Tulgan",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN",
    source: "Core",
    categories: ["Tulgan", "ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN"]
  });
  byID[te.id] = te;
  
  te = Background_Association["Untheric"] = new engine.RulesElement({
    name: "Untheric",
    type: "Background Association",
    id: "ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC",
    source: "Core",
    categories: ["Untheric", "ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
