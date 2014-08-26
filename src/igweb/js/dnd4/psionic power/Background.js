define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Aberrant Slayer"] = new engine.RulesElement({
    name: "Aberrant Slayer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_698",
    source: "Psionic Power",
    categories: ["Aberrant Slayer", "ID_FMP_BACKGROUND_698"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Astronomer"] = new engine.RulesElement({
    name: "Astronomer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_680",
    source: "Psionic Power",
    categories: ["Astronomer", "ID_FMP_BACKGROUND_680"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Awakened"] = new engine.RulesElement({
    name: "Awakened",
    type: "Background",
    id: "ID_FMP_BACKGROUND_677",
    source: "Psionic Power",
    categories: ["Awakened", "ID_FMP_BACKGROUND_677"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Bestial"] = new engine.RulesElement({
    name: "Bestial",
    type: "Background",
    id: "ID_FMP_BACKGROUND_700",
    source: "Psionic Power",
    categories: ["Bestial", "ID_FMP_BACKGROUND_700"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Calamity"] = new engine.RulesElement({
    name: "Calamity",
    type: "Background",
    id: "ID_FMP_BACKGROUND_678",
    source: "Psionic Power",
    categories: ["Calamity", "ID_FMP_BACKGROUND_678"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cerulean Adepts"] = new engine.RulesElement({
    name: "Cerulean Adepts",
    type: "Background",
    id: "ID_FMP_BACKGROUND_665",
    source: "Psionic Power",
    categories: ["Cerulean Adepts", "ID_FMP_BACKGROUND_665"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Chameleon"] = new engine.RulesElement({
    name: "Chameleon",
    type: "Background",
    id: "ID_FMP_BACKGROUND_701",
    source: "Psionic Power",
    categories: ["Chameleon", "ID_FMP_BACKGROUND_701"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Con Artist (Psionic)"] = new engine.RulesElement({
    name: "Con Artist (Psionic)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_681",
    source: "Psionic Power",
    categories: ["Con Artist (Psionic)", "ID_FMP_BACKGROUND_681"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cosmopolitan Perspective"] = new engine.RulesElement({
    name: "Cosmopolitan Perspective",
    type: "Background",
    id: "ID_FMP_BACKGROUND_695",
    source: "Psionic Power",
    categories: ["Cosmopolitan Perspective", "ID_FMP_BACKGROUND_695"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Created"] = new engine.RulesElement({
    name: "Created",
    type: "Background",
    id: "ID_FMP_BACKGROUND_679",
    source: "Psionic Power",
    categories: ["Created", "ID_FMP_BACKGROUND_679"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Disgraced Pragmatist"] = new engine.RulesElement({
    name: "Disgraced Pragmatist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_699",
    source: "Psionic Power",
    categories: ["Disgraced Pragmatist", "ID_FMP_BACKGROUND_699"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Enlightened Prodigy"] = new engine.RulesElement({
    name: "Enlightened Prodigy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_693",
    source: "Psionic Power",
    categories: ["Enlightened Prodigy", "ID_FMP_BACKGROUND_693"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eternal Seekers"] = new engine.RulesElement({
    name: "Eternal Seekers",
    type: "Background",
    id: "ID_FMP_BACKGROUND_669",
    source: "Psionic Power",
    categories: ["Eternal Seekers", "ID_FMP_BACKGROUND_669"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Exotic Appearance"] = new engine.RulesElement({
    name: "Exotic Appearance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_702",
    source: "Psionic Power",
    categories: ["Exotic Appearance", "ID_FMP_BACKGROUND_702"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fey Inheritor"] = new engine.RulesElement({
    name: "Fey Inheritor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_689",
    source: "Psionic Power",
    categories: ["Fey Inheritor", "ID_FMP_BACKGROUND_689"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fists of Zuoken"] = new engine.RulesElement({
    name: "Fists of Zuoken",
    type: "Background",
    id: "ID_FMP_BACKGROUND_666",
    source: "Psionic Power",
    categories: ["Fists of Zuoken", "ID_FMP_BACKGROUND_666"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Guiding Hand"] = new engine.RulesElement({
    name: "Guiding Hand",
    type: "Background",
    id: "ID_FMP_BACKGROUND_670",
    source: "Psionic Power",
    categories: ["Guiding Hand", "ID_FMP_BACKGROUND_670"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Heir to Power"] = new engine.RulesElement({
    name: "Heir to Power",
    type: "Background",
    id: "ID_FMP_BACKGROUND_696",
    source: "Psionic Power",
    categories: ["Heir to Power", "ID_FMP_BACKGROUND_696"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Hereditary Psionics User"] = new engine.RulesElement({
    name: "Hereditary Psionics User",
    type: "Background",
    id: "ID_FMP_BACKGROUND_686",
    source: "Psionic Power",
    categories: ["Hereditary Psionics User", "ID_FMP_BACKGROUND_686"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Hulking"] = new engine.RulesElement({
    name: "Hulking",
    type: "Background",
    id: "ID_FMP_BACKGROUND_703",
    source: "Psionic Power",
    categories: ["Hulking", "ID_FMP_BACKGROUND_703"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Iron Mind"] = new engine.RulesElement({
    name: "Iron Mind",
    type: "Background",
    id: "ID_FMP_BACKGROUND_688",
    source: "Psionic Power",
    categories: ["Iron Mind", "ID_FMP_BACKGROUND_688"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Isolated (Psionic)"] = new engine.RulesElement({
    name: "Isolated (Psionic)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_674",
    source: "Psionic Power",
    categories: ["Isolated (Psionic)", "ID_FMP_BACKGROUND_674"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Keen Senses"] = new engine.RulesElement({
    name: "Keen Senses",
    type: "Background",
    id: "ID_FMP_BACKGROUND_704",
    source: "Psionic Power",
    categories: ["Keen Senses", "ID_FMP_BACKGROUND_704"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Keepers of the Internal Sun"] = new engine.RulesElement({
    name: "Keepers of the Internal Sun",
    type: "Background",
    id: "ID_FMP_BACKGROUND_667",
    source: "Psionic Power",
    categories: ["Keepers of the Internal Sun", "ID_FMP_BACKGROUND_667"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mirror Mind"] = new engine.RulesElement({
    name: "Mirror Mind",
    type: "Background",
    id: "ID_FMP_BACKGROUND_684",
    source: "Psionic Power",
    categories: ["Mirror Mind", "ID_FMP_BACKGROUND_684"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic"] = new engine.RulesElement({
    name: "Monastic",
    type: "Background",
    id: "ID_FMP_BACKGROUND_675",
    source: "Psionic Power",
    categories: ["Monastic", "ID_FMP_BACKGROUND_675"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ostracized"] = new engine.RulesElement({
    name: "Ostracized",
    type: "Background",
    id: "ID_FMP_BACKGROUND_676",
    source: "Psionic Power",
    categories: ["Ostracized", "ID_FMP_BACKGROUND_676"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Paranoid Manipulator"] = new engine.RulesElement({
    name: "Paranoid Manipulator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_687",
    source: "Psionic Power",
    categories: ["Paranoid Manipulator", "ID_FMP_BACKGROUND_687"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psionic Artifice"] = new engine.RulesElement({
    name: "Psionic Artifice",
    type: "Background",
    id: "ID_FMP_BACKGROUND_697",
    source: "Psionic Power",
    categories: ["Psionic Artifice", "ID_FMP_BACKGROUND_697"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psychic Hunter"] = new engine.RulesElement({
    name: "Psychic Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_694",
    source: "Psionic Power",
    categories: ["Psychic Hunter", "ID_FMP_BACKGROUND_694"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["School of Unmatched Excellence"] = new engine.RulesElement({
    name: "School of Unmatched Excellence",
    type: "Background",
    id: "ID_FMP_BACKGROUND_668",
    source: "Psionic Power",
    categories: ["School of Unmatched Excellence", "ID_FMP_BACKGROUND_668"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Seer (Psionic)"] = new engine.RulesElement({
    name: "Seer (Psionic)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_682",
    source: "Psionic Power",
    categories: ["Seer (Psionic)", "ID_FMP_BACKGROUND_682"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Substance of Thought"] = new engine.RulesElement({
    name: "Substance of Thought",
    type: "Background",
    id: "ID_FMP_BACKGROUND_690",
    source: "Psionic Power",
    categories: ["Substance of Thought", "ID_FMP_BACKGROUND_690"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Path of Thirty-Seven Obstacles"] = new engine.RulesElement({
    name: "The Path of Thirty-Seven Obstacles",
    type: "Background",
    id: "ID_FMP_BACKGROUND_671",
    source: "Psionic Power",
    categories: ["The Path of Thirty-Seven Obstacles", "ID_FMP_BACKGROUND_671"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Wide-Open Mind"] = new engine.RulesElement({
    name: "The Wide-Open Mind",
    type: "Background",
    id: "ID_FMP_BACKGROUND_692",
    source: "Psionic Power",
    categories: ["The Wide-Open Mind", "ID_FMP_BACKGROUND_692"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Twilight Dreamers"] = new engine.RulesElement({
    name: "Twilight Dreamers",
    type: "Background",
    id: "ID_FMP_BACKGROUND_672",
    source: "Psionic Power",
    categories: ["Twilight Dreamers", "ID_FMP_BACKGROUND_672"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Victim of Superstition"] = new engine.RulesElement({
    name: "Victim of Superstition",
    type: "Background",
    id: "ID_FMP_BACKGROUND_691",
    source: "Psionic Power",
    categories: ["Victim of Superstition", "ID_FMP_BACKGROUND_691"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Voice of a Dozen Generations"] = new engine.RulesElement({
    name: "Voice of a Dozen Generations",
    type: "Background",
    id: "ID_FMP_BACKGROUND_685",
    source: "Psionic Power",
    categories: ["Voice of a Dozen Generations", "ID_FMP_BACKGROUND_685"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wanderer"] = new engine.RulesElement({
    name: "Wanderer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_683",
    source: "Psionic Power",
    categories: ["Wanderer", "ID_FMP_BACKGROUND_683"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
