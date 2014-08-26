define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Carnival Performer"] = new engine.RulesElement({
    name: "Carnival Performer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_408",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Carnival Performer", "ID_FMP_BACKGROUND_408"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Chimera Tribe Champion"] = new engine.RulesElement({
    name: "Chimera Tribe Champion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_410",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Chimera Tribe Champion", "ID_FMP_BACKGROUND_410"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Crimson Curse"] = new engine.RulesElement({
    name: "Crimson Curse",
    type: "Background",
    id: "ID_FMP_BACKGROUND_392",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Crimson Curse", "ID_FMP_BACKGROUND_392"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fire in Your Veins"] = new engine.RulesElement({
    name: "Fire in Your Veins",
    type: "Background",
    id: "ID_FMP_BACKGROUND_393",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Fire in Your Veins", "ID_FMP_BACKGROUND_393"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fortune Teller"] = new engine.RulesElement({
    name: "Fortune Teller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_415",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Fortune Teller", "ID_FMP_BACKGROUND_415"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gang Leader"] = new engine.RulesElement({
    name: "Gang Leader",
    type: "Background",
    id: "ID_FMP_BACKGROUND_406",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Gang Leader", "ID_FMP_BACKGROUND_406"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Heaven's Weapon"] = new engine.RulesElement({
    name: "Heaven's Weapon",
    type: "Background",
    id: "ID_FMP_BACKGROUND_403",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Heaven's Weapon", "ID_FMP_BACKGROUND_403"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Hellfire Heir"] = new engine.RulesElement({
    name: "Hellfire Heir",
    type: "Background",
    id: "ID_FMP_BACKGROUND_400",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Heir", "ID_FMP_BACKGROUND_400"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["House of Lies"] = new engine.RulesElement({
    name: "House of Lies",
    type: "Background",
    id: "ID_FMP_BACKGROUND_394",
    source: "Player's Handbook Races: Tiefling",
    categories: ["House of Lies", "ID_FMP_BACKGROUND_394"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Last of the Line"] = new engine.RulesElement({
    name: "Last of the Line",
    type: "Background",
    id: "ID_FMP_BACKGROUND_395",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Last of the Line", "ID_FMP_BACKGROUND_395"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Memory Seeker"] = new engine.RulesElement({
    name: "Memory Seeker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_414",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Memory Seeker", "ID_FMP_BACKGROUND_414"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Prophesied Master"] = new engine.RulesElement({
    name: "Prophesied Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_399",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Prophesied Master", "ID_FMP_BACKGROUND_399"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psionic Academy Dropout"] = new engine.RulesElement({
    name: "Psionic Academy Dropout",
    type: "Background",
    id: "ID_FMP_BACKGROUND_413",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Psionic Academy Dropout", "ID_FMP_BACKGROUND_413"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Raised by Wild Beasts"] = new engine.RulesElement({
    name: "Raised by Wild Beasts",
    type: "Background",
    id: "ID_FMP_BACKGROUND_412",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Raised by Wild Beasts", "ID_FMP_BACKGROUND_412"],
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
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Rejected Inheritance"] = new engine.RulesElement({
    name: "Rejected Inheritance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_404",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rejected Inheritance", "ID_FMP_BACKGROUND_404"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Rogue Scholar"] = new engine.RulesElement({
    name: "Rogue Scholar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_398",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rogue Scholar", "ID_FMP_BACKGROUND_398"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Scion of Blood"] = new engine.RulesElement({
    name: "Scion of Blood",
    type: "Background",
    id: "ID_FMP_BACKGROUND_396",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Scion of Blood", "ID_FMP_BACKGROUND_396"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sellsword"] = new engine.RulesElement({
    name: "Sellsword",
    type: "Background",
    id: "ID_FMP_BACKGROUND_407",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sellsword", "ID_FMP_BACKGROUND_407"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Temple Foundling"] = new engine.RulesElement({
    name: "Temple Foundling",
    type: "Background",
    id: "ID_FMP_BACKGROUND_402",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Temple Foundling", "ID_FMP_BACKGROUND_402"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Unfettered Future"] = new engine.RulesElement({
    name: "Unfettered Future",
    type: "Background",
    id: "ID_FMP_BACKGROUND_397",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Unfettered Future", "ID_FMP_BACKGROUND_397"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Unlikely Primal Hero"] = new engine.RulesElement({
    name: "Unlikely Primal Hero",
    type: "Background",
    id: "ID_FMP_BACKGROUND_411",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Unlikely Primal Hero", "ID_FMP_BACKGROUND_411"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vengeful Royalty"] = new engine.RulesElement({
    name: "Vengeful Royalty",
    type: "Background",
    id: "ID_FMP_BACKGROUND_409",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Vengeful Royalty", "ID_FMP_BACKGROUND_409"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
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
