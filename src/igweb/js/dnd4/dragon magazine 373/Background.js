define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Occupation - Bounty Hunter"] = new engine.RulesElement({
    name: "Occupation - Bounty Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_143",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Bounty Hunter", "ID_FMP_BACKGROUND_143"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Executioner"] = new engine.RulesElement({
    name: "Occupation - Executioner",
    type: "Background",
    id: "ID_FMP_BACKGROUND_144",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Executioner", "ID_FMP_BACKGROUND_144"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Foe Killer"] = new engine.RulesElement({
    name: "Occupation - Foe Killer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_145",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Foe Killer", "ID_FMP_BACKGROUND_145"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Guerrilla"] = new engine.RulesElement({
    name: "Occupation - Guerrilla",
    type: "Background",
    id: "ID_FMP_BACKGROUND_146",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Guerrilla", "ID_FMP_BACKGROUND_146"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Hired Killer"] = new engine.RulesElement({
    name: "Occupation - Hired Killer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_147",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Hired Killer", "ID_FMP_BACKGROUND_147"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Hunter"] = new engine.RulesElement({
    name: "Occupation - Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_148",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Hunter", "ID_FMP_BACKGROUND_148"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Infiltrator"] = new engine.RulesElement({
    name: "Occupation - Infiltrator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_149",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Infiltrator", "ID_FMP_BACKGROUND_149"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Mystic Slayer"] = new engine.RulesElement({
    name: "Occupation - Mystic Slayer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_150",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Mystic Slayer", "ID_FMP_BACKGROUND_150"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Poison Master"] = new engine.RulesElement({
    name: "Occupation - Poison Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_151",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Poison Master", "ID_FMP_BACKGROUND_151"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Punisher"] = new engine.RulesElement({
    name: "Occupation - Punisher",
    type: "Background",
    id: "ID_FMP_BACKGROUND_152",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Punisher", "ID_FMP_BACKGROUND_152"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Revolutionary"] = new engine.RulesElement({
    name: "Occupation - Revolutionary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_153",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Revolutionary", "ID_FMP_BACKGROUND_153"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Thief"] = new engine.RulesElement({
    name: "Occupation - Thief",
    type: "Background",
    id: "ID_FMP_BACKGROUND_154",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Thief", "ID_FMP_BACKGROUND_154"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Thug"] = new engine.RulesElement({
    name: "Occupation - Thug",
    type: "Background",
    id: "ID_FMP_BACKGROUND_155",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Thug", "ID_FMP_BACKGROUND_155"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Occupation - Zealous Slayer"] = new engine.RulesElement({
    name: "Occupation - Zealous Slayer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_156",
    source: "Dragon Magazine 373",
    categories: ["Occupation - Zealous Slayer", "ID_FMP_BACKGROUND_156"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
