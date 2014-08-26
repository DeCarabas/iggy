define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Githzerai - Cenobite Initiate"] = new engine.RulesElement({
    name: "Githzerai - Cenobite Initiate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_269",
    source: "Player's Handbook 3",
    categories: ["Githzerai - Cenobite Initiate", "ID_FMP_BACKGROUND_269"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Githzerai - War Band Survivor"] = new engine.RulesElement({
    name: "Githzerai - War Band Survivor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_270",
    source: "Player's Handbook 3",
    categories: ["Githzerai - War Band Survivor", "ID_FMP_BACKGROUND_270"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Minotaur - Baphomet Clan Exile"] = new engine.RulesElement({
    name: "Minotaur - Baphomet Clan Exile",
    type: "Background",
    id: "ID_FMP_BACKGROUND_475",
    source: "Player's Handbook 3",
    categories: ["Minotaur - Baphomet Clan Exile", "ID_FMP_BACKGROUND_475"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Minotaur - Silenced Beast"] = new engine.RulesElement({
    name: "Minotaur - Silenced Beast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_476",
    source: "Player's Handbook 3",
    categories: ["Minotaur - Silenced Beast", "ID_FMP_BACKGROUND_476"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shardmind - God Shard"] = new engine.RulesElement({
    name: "Shardmind - God Shard",
    type: "Background",
    id: "ID_FMP_BACKGROUND_473",
    source: "Player's Handbook 3",
    categories: ["Shardmind - God Shard", "ID_FMP_BACKGROUND_473"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shardmind - Shard Slayer"] = new engine.RulesElement({
    name: "Shardmind - Shard Slayer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_474",
    source: "Player's Handbook 3",
    categories: ["Shardmind - Shard Slayer", "ID_FMP_BACKGROUND_474"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shardmind - Thought Builder"] = new engine.RulesElement({
    name: "Shardmind - Thought Builder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_472",
    source: "Player's Handbook 3",
    categories: ["Shardmind - Thought Builder", "ID_FMP_BACKGROUND_472"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Born of Ruin"] = new engine.RulesElement({
    name: "Wilden - Born of Ruin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_179",
    source: "Player's Handbook 3",
    categories: ["Wilden - Born of Ruin", "ID_FMP_BACKGROUND_179"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Hunted"] = new engine.RulesElement({
    name: "Wilden - Hunted",
    type: "Background",
    id: "ID_FMP_BACKGROUND_181",
    source: "Player's Handbook 3",
    categories: ["Wilden - Hunted", "ID_FMP_BACKGROUND_181"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
