define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Dragonborn"] = new engine.RulesElement({
    name: "Dragonborn",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DRAGONBORN",
    source: "Player's Handbook",
    categories: ["Dragonborn", "ID_INTERNAL_COUNTSASRACE_DRAGONBORN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Dwarf"] = new engine.RulesElement({
    name: "Dwarf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DWARF",
    source: "Player's Handbook",
    categories: ["Dwarf", "ID_INTERNAL_COUNTSASRACE_DWARF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Eladrin"] = new engine.RulesElement({
    name: "Eladrin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ELADRIN",
    source: "Player's Handbook",
    categories: ["Eladrin", "ID_INTERNAL_COUNTSASRACE_ELADRIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Elf"] = new engine.RulesElement({
    name: "Elf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ELF",
    source: "Player's Handbook",
    categories: ["Elf", "ID_INTERNAL_COUNTSASRACE_ELF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Half-Elf"] = new engine.RulesElement({
    name: "Half-Elf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HALF-ELF",
    source: "Player's Handbook",
    categories: ["Half-Elf", "ID_INTERNAL_COUNTSASRACE_HALF-ELF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Halfling"] = new engine.RulesElement({
    name: "Halfling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HALFLING",
    source: "Player's Handbook",
    categories: ["Halfling", "ID_INTERNAL_COUNTSASRACE_HALFLING"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Human"] = new engine.RulesElement({
    name: "Human",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HUMAN",
    source: "Player's Handbook",
    categories: ["Human", "ID_INTERNAL_COUNTSASRACE_HUMAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Tiefling"] = new engine.RulesElement({
    name: "Tiefling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_TIEFLING",
    source: "Player's Handbook",
    categories: ["Tiefling", "ID_INTERNAL_COUNTSASRACE_TIEFLING"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
