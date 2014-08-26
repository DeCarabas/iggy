define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Birth - Among Another Race"] = new engine.RulesElement({
    name: "Birth - Among Another Race",
    type: "Background",
    id: "ID_FMP_BACKGROUND_88",
    source: "Player's Handbook 2",
    categories: ["Birth - Among Another Race", "ID_FMP_BACKGROUND_88"],
    rules: function(model) {
      model.select('Background Choice', 1, {
        filter: function(model, element) { return element.hasCategory("Birth - Among Another Race"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Background["Birth - Blessed"] = new engine.RulesElement({
    name: "Birth - Blessed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_89",
    source: "Player's Handbook 2",
    categories: ["Birth - Blessed", "ID_FMP_BACKGROUND_89"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Birth - Cursed"] = new engine.RulesElement({
    name: "Birth - Cursed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_90",
    source: "Player's Handbook 2",
    categories: ["Birth - Cursed", "ID_FMP_BACKGROUND_90"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Birth - Omen"] = new engine.RulesElement({
    name: "Birth - Omen",
    type: "Background",
    id: "ID_FMP_BACKGROUND_91",
    source: "Player's Handbook 2",
    categories: ["Birth - Omen", "ID_FMP_BACKGROUND_91"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Birth - On Another Plane"] = new engine.RulesElement({
    name: "Birth - On Another Plane",
    type: "Background",
    id: "ID_FMP_BACKGROUND_92",
    source: "Player's Handbook 2",
    categories: ["Birth - On Another Plane", "ID_FMP_BACKGROUND_92"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Birth - Prophecy"] = new engine.RulesElement({
    name: "Birth - Prophecy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_93",
    source: "Player's Handbook 2",
    categories: ["Birth - Prophecy", "ID_FMP_BACKGROUND_93"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deva - Brink of Corruption"] = new engine.RulesElement({
    name: "Deva - Brink of Corruption",
    type: "Background",
    id: "ID_FMP_BACKGROUND_102",
    source: "Player's Handbook 2",
    categories: ["Deva - Brink of Corruption", "ID_FMP_BACKGROUND_102"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deva - Brink of Enlightenment"] = new engine.RulesElement({
    name: "Deva - Brink of Enlightenment",
    type: "Background",
    id: "ID_FMP_BACKGROUND_101",
    source: "Player's Handbook 2",
    categories: ["Deva - Brink of Enlightenment", "ID_FMP_BACKGROUND_101"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deva - Forgotten Lifetime"] = new engine.RulesElement({
    name: "Deva - Forgotten Lifetime",
    type: "Background",
    id: "ID_FMP_BACKGROUND_103",
    source: "Player's Handbook 2",
    categories: ["Deva - Forgotten Lifetime", "ID_FMP_BACKGROUND_103"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn - Brush with the Past"] = new engine.RulesElement({
    name: "Dragonborn - Brush with the Past",
    type: "Background",
    id: "ID_FMP_BACKGROUND_106",
    source: "Player's Handbook 2",
    categories: ["Dragonborn - Brush with the Past", "ID_FMP_BACKGROUND_106"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn - Dishonored"] = new engine.RulesElement({
    name: "Dragonborn - Dishonored",
    type: "Background",
    id: "ID_FMP_BACKGROUND_104",
    source: "Player's Handbook 2",
    categories: ["Dragonborn - Dishonored", "ID_FMP_BACKGROUND_104"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn - Rare Egg"] = new engine.RulesElement({
    name: "Dragonborn - Rare Egg",
    type: "Background",
    id: "ID_FMP_BACKGROUND_105",
    source: "Player's Handbook 2",
    categories: ["Dragonborn - Rare Egg", "ID_FMP_BACKGROUND_105"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Drow - Orphan"] = new engine.RulesElement({
    name: "Drow - Orphan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_108",
    source: "Player's Handbook 2",
    categories: ["Drow - Orphan", "ID_FMP_BACKGROUND_108"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Drow - Outcast"] = new engine.RulesElement({
    name: "Drow - Outcast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_107",
    source: "Player's Handbook 2",
    categories: ["Drow - Outcast", "ID_FMP_BACKGROUND_107"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dwarf - Ancestral Home Lost"] = new engine.RulesElement({
    name: "Dwarf - Ancestral Home Lost",
    type: "Background",
    id: "ID_FMP_BACKGROUND_111",
    source: "Player's Handbook 2",
    categories: ["Dwarf - Ancestral Home Lost", "ID_FMP_BACKGROUND_111"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dwarf - Dedicated to an Ancestor"] = new engine.RulesElement({
    name: "Dwarf - Dedicated to an Ancestor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_110",
    source: "Player's Handbook 2",
    categories: ["Dwarf - Dedicated to an Ancestor", "ID_FMP_BACKGROUND_110"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dwarf - Outcast"] = new engine.RulesElement({
    name: "Dwarf - Outcast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_140",
    source: "Player's Handbook 2",
    categories: ["Dwarf - Outcast", "ID_FMP_BACKGROUND_140"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eladrin - Drowscarred"] = new engine.RulesElement({
    name: "Eladrin - Drowscarred",
    type: "Background",
    id: "ID_FMP_BACKGROUND_114",
    source: "Player's Handbook 2",
    categories: ["Eladrin - Drowscarred", "ID_FMP_BACKGROUND_114"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eladrin - Estranged Fey"] = new engine.RulesElement({
    name: "Eladrin - Estranged Fey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_113",
    source: "Player's Handbook 2",
    categories: ["Eladrin - Estranged Fey", "ID_FMP_BACKGROUND_113"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eladrin - Noble Birth"] = new engine.RulesElement({
    name: "Eladrin - Noble Birth",
    type: "Background",
    id: "ID_FMP_BACKGROUND_112",
    source: "Player's Handbook 2",
    categories: ["Eladrin - Noble Birth", "ID_FMP_BACKGROUND_112"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Elf - Fey Ally"] = new engine.RulesElement({
    name: "Elf - Fey Ally",
    type: "Background",
    id: "ID_FMP_BACKGROUND_115",
    source: "Player's Handbook 2",
    categories: ["Elf - Fey Ally", "ID_FMP_BACKGROUND_115"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Elf - Urban Elf"] = new engine.RulesElement({
    name: "Elf - Urban Elf",
    type: "Background",
    id: "ID_FMP_BACKGROUND_117",
    source: "Player's Handbook 2",
    categories: ["Elf - Urban Elf", "ID_FMP_BACKGROUND_117"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Elf - Wild Elf"] = new engine.RulesElement({
    name: "Elf - Wild Elf",
    type: "Background",
    id: "ID_FMP_BACKGROUND_116",
    source: "Player's Handbook 2",
    categories: ["Elf - Wild Elf", "ID_FMP_BACKGROUND_116"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Genasi - Academic Exhibit"] = new engine.RulesElement({
    name: "Genasi - Academic Exhibit",
    type: "Background",
    id: "ID_FMP_BACKGROUND_119",
    source: "Player's Handbook 2",
    categories: ["Genasi - Academic Exhibit", "ID_FMP_BACKGROUND_119"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Genasi - Chaos Burn"] = new engine.RulesElement({
    name: "Genasi - Chaos Burn",
    type: "Background",
    id: "ID_FMP_BACKGROUND_118",
    source: "Player's Handbook 2",
    categories: ["Genasi - Chaos Burn", "ID_FMP_BACKGROUND_118"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Geography - Desert"] = new engine.RulesElement({
    name: "Geography - Desert",
    type: "Background",
    id: "ID_FMP_BACKGROUND_80",
    source: "Player's Handbook 2",
    categories: ["Geography - Desert", "ID_FMP_BACKGROUND_80"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Geography - Forest"] = new engine.RulesElement({
    name: "Geography - Forest",
    type: "Background",
    id: "ID_FMP_BACKGROUND_81",
    source: "Player's Handbook 2",
    categories: ["Geography - Forest", "ID_FMP_BACKGROUND_81"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Geography - Mountains"] = new engine.RulesElement({
    name: "Geography - Mountains",
    type: "Background",
    id: "ID_FMP_BACKGROUND_82",
    source: "Player's Handbook 2",
    categories: ["Geography - Mountains", "ID_FMP_BACKGROUND_82"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Geography - Urban"] = new engine.RulesElement({
    name: "Geography - Urban",
    type: "Background",
    id: "ID_FMP_BACKGROUND_83",
    source: "Player's Handbook 2",
    categories: ["Geography - Urban", "ID_FMP_BACKGROUND_83"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Geography - Wetlands"] = new engine.RulesElement({
    name: "Geography - Wetlands",
    type: "Background",
    id: "ID_FMP_BACKGROUND_84",
    source: "Player's Handbook 2",
    categories: ["Geography - Wetlands", "ID_FMP_BACKGROUND_84"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gnome - Estranged Fey"] = new engine.RulesElement({
    name: "Gnome - Estranged Fey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_142",
    source: "Player's Handbook 2",
    categories: ["Gnome - Estranged Fey", "ID_FMP_BACKGROUND_142"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gnome - Fomorian Captivity"] = new engine.RulesElement({
    name: "Gnome - Fomorian Captivity",
    type: "Background",
    id: "ID_FMP_BACKGROUND_120",
    source: "Player's Handbook 2",
    categories: ["Gnome - Fomorian Captivity", "ID_FMP_BACKGROUND_120"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Goliath - Lightlost"] = new engine.RulesElement({
    name: "Goliath - Lightlost",
    type: "Background",
    id: "ID_FMP_BACKGROUND_123",
    source: "Player's Handbook 2",
    categories: ["Goliath - Lightlost", "ID_FMP_BACKGROUND_123"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Goliath - Skywatcher"] = new engine.RulesElement({
    name: "Goliath - Skywatcher",
    type: "Background",
    id: "ID_FMP_BACKGROUND_122",
    source: "Player's Handbook 2",
    categories: ["Goliath - Skywatcher", "ID_FMP_BACKGROUND_122"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Elf - Cultural Half-Elf"] = new engine.RulesElement({
    name: "Half-Elf - Cultural Half-Elf",
    type: "Background",
    id: "ID_FMP_BACKGROUND_125",
    source: "Player's Handbook 2",
    categories: ["Half-Elf - Cultural Half-Elf", "ID_FMP_BACKGROUND_125"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Elf - Outcast"] = new engine.RulesElement({
    name: "Half-Elf - Outcast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_141",
    source: "Player's Handbook 2",
    categories: ["Half-Elf - Outcast", "ID_FMP_BACKGROUND_141"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Elf - Wanderer"] = new engine.RulesElement({
    name: "Half-Elf - Wanderer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_124",
    source: "Player's Handbook 2",
    categories: ["Half-Elf - Wanderer", "ID_FMP_BACKGROUND_124"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Halfling - Avandra's Kiss"] = new engine.RulesElement({
    name: "Halfling - Avandra's Kiss",
    type: "Background",
    id: "ID_FMP_BACKGROUND_130",
    source: "Player's Handbook 2",
    categories: ["Halfling - Avandra's Kiss", "ID_FMP_BACKGROUND_130"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Halfling - Banned"] = new engine.RulesElement({
    name: "Halfling - Banned",
    type: "Background",
    id: "ID_FMP_BACKGROUND_131",
    source: "Player's Handbook 2",
    categories: ["Halfling - Banned", "ID_FMP_BACKGROUND_131"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Halfling - Storyteller"] = new engine.RulesElement({
    name: "Halfling - Storyteller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_129",
    source: "Player's Handbook 2",
    categories: ["Halfling - Storyteller", "ID_FMP_BACKGROUND_129"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Orc - First Generation"] = new engine.RulesElement({
    name: "Half-Orc - First Generation",
    type: "Background",
    id: "ID_FMP_BACKGROUND_128",
    source: "Player's Handbook 2",
    categories: ["Half-Orc - First Generation", "ID_FMP_BACKGROUND_128"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Orc - Orc Birth"] = new engine.RulesElement({
    name: "Half-Orc - Orc Birth",
    type: "Background",
    id: "ID_FMP_BACKGROUND_126",
    source: "Player's Handbook 2",
    categories: ["Half-Orc - Orc Birth", "ID_FMP_BACKGROUND_126"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Half-Orc - Stormtouched"] = new engine.RulesElement({
    name: "Half-Orc - Stormtouched",
    type: "Background",
    id: "ID_FMP_BACKGROUND_127",
    source: "Player's Handbook 2",
    categories: ["Half-Orc - Stormtouched", "ID_FMP_BACKGROUND_127"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Human - Ancestral Holdings"] = new engine.RulesElement({
    name: "Human - Ancestral Holdings",
    type: "Background",
    id: "ID_FMP_BACKGROUND_132",
    source: "Player's Handbook 2",
    categories: ["Human - Ancestral Holdings", "ID_FMP_BACKGROUND_132"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Human - Heir of the Forgotten Gods"] = new engine.RulesElement({
    name: "Human - Heir of the Forgotten Gods",
    type: "Background",
    id: "ID_FMP_BACKGROUND_133",
    source: "Player's Handbook 2",
    categories: ["Human - Heir of the Forgotten Gods", "ID_FMP_BACKGROUND_133"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Artisan"] = new engine.RulesElement({
    name: "Occupation - Artisan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_94",
    source: "Player's Handbook 2",
    categories: ["Occupation - Artisan", "ID_FMP_BACKGROUND_94"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Criminal"] = new engine.RulesElement({
    name: "Occupation - Criminal",
    type: "Background",
    id: "ID_FMP_BACKGROUND_95",
    source: "Player's Handbook 2",
    categories: ["Occupation - Criminal", "ID_FMP_BACKGROUND_95"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Entertainer"] = new engine.RulesElement({
    name: "Occupation - Entertainer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_96",
    source: "Player's Handbook 2",
    categories: ["Occupation - Entertainer", "ID_FMP_BACKGROUND_96"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Farmer"] = new engine.RulesElement({
    name: "Occupation - Farmer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_97",
    source: "Player's Handbook 2",
    categories: ["Occupation - Farmer", "ID_FMP_BACKGROUND_97"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Mariner"] = new engine.RulesElement({
    name: "Occupation - Mariner",
    type: "Background",
    id: "ID_FMP_BACKGROUND_98",
    source: "Player's Handbook 2",
    categories: ["Occupation - Mariner", "ID_FMP_BACKGROUND_98"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Merchant"] = new engine.RulesElement({
    name: "Occupation - Merchant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_157",
    source: "Player's Handbook 2",
    categories: ["Occupation - Merchant", "ID_FMP_BACKGROUND_157"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Military"] = new engine.RulesElement({
    name: "Occupation - Military",
    type: "Background",
    id: "ID_FMP_BACKGROUND_99",
    source: "Player's Handbook 2",
    categories: ["Occupation - Military", "ID_FMP_BACKGROUND_99"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Scholar"] = new engine.RulesElement({
    name: "Occupation - Scholar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_100",
    source: "Player's Handbook 2",
    categories: ["Occupation - Scholar", "ID_FMP_BACKGROUND_100"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shifter - City Shifter"] = new engine.RulesElement({
    name: "Shifter - City Shifter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_135",
    source: "Player's Handbook 2",
    categories: ["Shifter - City Shifter", "ID_FMP_BACKGROUND_135"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shifter - Moonspeaker"] = new engine.RulesElement({
    name: "Shifter - Moonspeaker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_134",
    source: "Player's Handbook 2",
    categories: ["Shifter - Moonspeaker", "ID_FMP_BACKGROUND_134"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shifter - Persecution"] = new engine.RulesElement({
    name: "Shifter - Persecution",
    type: "Background",
    id: "ID_FMP_BACKGROUND_136",
    source: "Player's Handbook 2",
    categories: ["Shifter - Persecution", "ID_FMP_BACKGROUND_136"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Society - Noble"] = new engine.RulesElement({
    name: "Society - Noble",
    type: "Background",
    id: "ID_FMP_BACKGROUND_87",
    source: "Player's Handbook 2",
    categories: ["Society - Noble", "ID_FMP_BACKGROUND_87"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Society - Poor"] = new engine.RulesElement({
    name: "Society - Poor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_85",
    source: "Player's Handbook 2",
    categories: ["Society - Poor", "ID_FMP_BACKGROUND_85"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Society - Wealthy"] = new engine.RulesElement({
    name: "Society - Wealthy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_86",
    source: "Player's Handbook 2",
    categories: ["Society - Wealthy", "ID_FMP_BACKGROUND_86"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tiefling - Dark Secret"] = new engine.RulesElement({
    name: "Tiefling - Dark Secret",
    type: "Background",
    id: "ID_FMP_BACKGROUND_138",
    source: "Player's Handbook 2",
    categories: ["Tiefling - Dark Secret", "ID_FMP_BACKGROUND_138"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tiefling - Infernal Nightmares"] = new engine.RulesElement({
    name: "Tiefling - Infernal Nightmares",
    type: "Background",
    id: "ID_FMP_BACKGROUND_139",
    source: "Player's Handbook 2",
    categories: ["Tiefling - Infernal Nightmares", "ID_FMP_BACKGROUND_139"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tiefling - Merchant Dynasty"] = new engine.RulesElement({
    name: "Tiefling - Merchant Dynasty",
    type: "Background",
    id: "ID_FMP_BACKGROUND_137",
    source: "Player's Handbook 2",
    categories: ["Tiefling - Merchant Dynasty", "ID_FMP_BACKGROUND_137"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
