(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Dragonborn"] = new RulesElement({
    name: "Dragonborn",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DRAGONBORN",
    source: "Player's Handbook",
    categories: ["Dragonborn", "ID_INTERNAL_COUNTSASRACE_DRAGONBORN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Dwarf"] = new RulesElement({
    name: "Dwarf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DWARF",
    source: "Player's Handbook",
    categories: ["Dwarf", "ID_INTERNAL_COUNTSASRACE_DWARF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Eladrin"] = new RulesElement({
    name: "Eladrin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ELADRIN",
    source: "Player's Handbook",
    categories: ["Eladrin", "ID_INTERNAL_COUNTSASRACE_ELADRIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Elf"] = new RulesElement({
    name: "Elf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ELF",
    source: "Player's Handbook",
    categories: ["Elf", "ID_INTERNAL_COUNTSASRACE_ELF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Half-Elf"] = new RulesElement({
    name: "Half-Elf",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HALF-ELF",
    source: "Player's Handbook",
    categories: ["Half-Elf", "ID_INTERNAL_COUNTSASRACE_HALF-ELF"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Halfling"] = new RulesElement({
    name: "Halfling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HALFLING",
    source: "Player's Handbook",
    categories: ["Halfling", "ID_INTERNAL_COUNTSASRACE_HALFLING"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Human"] = new RulesElement({
    name: "Human",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HUMAN",
    source: "Player's Handbook",
    categories: ["Human", "ID_INTERNAL_COUNTSASRACE_HUMAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Tiefling"] = new RulesElement({
    name: "Tiefling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_TIEFLING",
    source: "Player's Handbook",
    categories: ["Tiefling", "ID_INTERNAL_COUNTSASRACE_TIEFLING"]
  });
  byID[te.id] = te;
  
  
})(this);
