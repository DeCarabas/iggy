define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Aura of True Vision"] = new engine.RulesElement({
    name: "Scroll of Aura of True Vision",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_AURA_OF_TRUE_VISION",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Aura of True Vision", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_AURA_OF_TRUE_VISION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Corpselike Visage"] = new engine.RulesElement({
    name: "Scroll of Corpselike Visage",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSELIKE_VISAGE",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Corpselike Visage", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSELIKE_VISAGE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Donning Trollflesh"] = new engine.RulesElement({
    name: "Scroll of Donning Trollflesh",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DONNING_TROLLFLESH",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Donning Trollflesh", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DONNING_TROLLFLESH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Dragonward"] = new engine.RulesElement({
    name: "Scroll of Dragonward",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DRAGONWARD",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Dragonward", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DRAGONWARD"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Evard's Extensible Rope"] = new engine.RulesElement({
    name: "Scroll of Evard's Extensible Rope",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EVARD'S_EXTENSIBLE_ROPE",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Evard's Extensible Rope", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EVARD'S_EXTENSIBLE_ROPE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Follow the Voice"] = new engine.RulesElement({
    name: "Scroll of Follow the Voice",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FOLLOW_THE_VOICE",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Follow the Voice", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FOLLOW_THE_VOICE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Memory of a Thousand Deaths"] = new engine.RulesElement({
    name: "Scroll of Memory of a Thousand Deaths",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_OF_A_THOUSAND_DEATHS",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Memory of a Thousand Deaths", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_OF_A_THOUSAND_DEATHS"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Memory of the Dragon"] = new engine.RulesElement({
    name: "Scroll of Memory of the Dragon",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_OF_THE_DRAGON",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Memory of the Dragon", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_OF_THE_DRAGON"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Quench the Flame"] = new engine.RulesElement({
    name: "Scroll of Quench the Flame",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_QUENCH_THE_FLAME",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Quench the Flame", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_QUENCH_THE_FLAME"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Self-Holding Bag"] = new engine.RulesElement({
    name: "Scroll of Self-Holding Bag",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SELF-HOLDING_BAG",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Self-Holding Bag", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SELF-HOLDING_BAG"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Snowstorm Summons"] = new engine.RulesElement({
    name: "Scroll of Snowstorm Summons",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SNOWSTORM_SUMMONS",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Snowstorm Summons", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SNOWSTORM_SUMMONS"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Wavestrider Enchantment"] = new engine.RulesElement({
    name: "Scroll of Wavestrider Enchantment",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WAVESTRIDER_ENCHANTMENT",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Wavestrider Enchantment", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WAVESTRIDER_ENCHANTMENT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Windmaster's Mantle"] = new engine.RulesElement({
    name: "Scroll of Windmaster's Mantle",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WINDMASTER'S_MANTLE",
    source: "Dragon Magazine 385",
    categories: ["Scroll of Windmaster's Mantle", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WINDMASTER'S_MANTLE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
