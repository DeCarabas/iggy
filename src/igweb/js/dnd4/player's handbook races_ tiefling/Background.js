(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Carnival Performer"] = new RulesElement({
    name: "Carnival Performer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_408",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Carnival Performer", "ID_FMP_BACKGROUND_408"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Chimera Tribe Champion"] = new RulesElement({
    name: "Chimera Tribe Champion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_410",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Chimera Tribe Champion", "ID_FMP_BACKGROUND_410"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Crimson Curse"] = new RulesElement({
    name: "Crimson Curse",
    type: "Background",
    id: "ID_FMP_BACKGROUND_392",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Crimson Curse", "ID_FMP_BACKGROUND_392"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fire in Your Veins"] = new RulesElement({
    name: "Fire in Your Veins",
    type: "Background",
    id: "ID_FMP_BACKGROUND_393",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Fire in Your Veins", "ID_FMP_BACKGROUND_393"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fortune Teller"] = new RulesElement({
    name: "Fortune Teller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_415",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Fortune Teller", "ID_FMP_BACKGROUND_415"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gang Leader"] = new RulesElement({
    name: "Gang Leader",
    type: "Background",
    id: "ID_FMP_BACKGROUND_406",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Gang Leader", "ID_FMP_BACKGROUND_406"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Heaven's Weapon"] = new RulesElement({
    name: "Heaven's Weapon",
    type: "Background",
    id: "ID_FMP_BACKGROUND_403",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Heaven's Weapon", "ID_FMP_BACKGROUND_403"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Hellfire Heir"] = new RulesElement({
    name: "Hellfire Heir",
    type: "Background",
    id: "ID_FMP_BACKGROUND_400",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Heir", "ID_FMP_BACKGROUND_400"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["House of Lies"] = new RulesElement({
    name: "House of Lies",
    type: "Background",
    id: "ID_FMP_BACKGROUND_394",
    source: "Player's Handbook Races: Tiefling",
    categories: ["House of Lies", "ID_FMP_BACKGROUND_394"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Last of the Line"] = new RulesElement({
    name: "Last of the Line",
    type: "Background",
    id: "ID_FMP_BACKGROUND_395",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Last of the Line", "ID_FMP_BACKGROUND_395"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Memory Seeker"] = new RulesElement({
    name: "Memory Seeker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_414",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Memory Seeker", "ID_FMP_BACKGROUND_414"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Prophesied Master"] = new RulesElement({
    name: "Prophesied Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_399",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Prophesied Master", "ID_FMP_BACKGROUND_399"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psionic Academy Dropout"] = new RulesElement({
    name: "Psionic Academy Dropout",
    type: "Background",
    id: "ID_FMP_BACKGROUND_413",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Psionic Academy Dropout", "ID_FMP_BACKGROUND_413"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Raised by Wild Beasts"] = new RulesElement({
    name: "Raised by Wild Beasts",
    type: "Background",
    id: "ID_FMP_BACKGROUND_412",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Raised by Wild Beasts", "ID_FMP_BACKGROUND_412"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_COMMON"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DAMARAN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NETHERESE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SHOU"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THAYAN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_TULGAN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_UNTHERIC"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_CHONDATHAN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARGON"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RIEDRAN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THE_LANGUAGE_OF_THE_MIND"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SECRET_LANGUAGE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ALL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Rejected Inheritance"] = new RulesElement({
    name: "Rejected Inheritance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_404",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rejected Inheritance", "ID_FMP_BACKGROUND_404"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Rogue Scholar"] = new RulesElement({
    name: "Rogue Scholar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_398",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rogue Scholar", "ID_FMP_BACKGROUND_398"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Scion of Blood"] = new RulesElement({
    name: "Scion of Blood",
    type: "Background",
    id: "ID_FMP_BACKGROUND_396",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Scion of Blood", "ID_FMP_BACKGROUND_396"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sellsword"] = new RulesElement({
    name: "Sellsword",
    type: "Background",
    id: "ID_FMP_BACKGROUND_407",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sellsword", "ID_FMP_BACKGROUND_407"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Temple Foundling"] = new RulesElement({
    name: "Temple Foundling",
    type: "Background",
    id: "ID_FMP_BACKGROUND_402",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Temple Foundling", "ID_FMP_BACKGROUND_402"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Unfettered Future"] = new RulesElement({
    name: "Unfettered Future",
    type: "Background",
    id: "ID_FMP_BACKGROUND_397",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Unfettered Future", "ID_FMP_BACKGROUND_397"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Unlikely Primal Hero"] = new RulesElement({
    name: "Unlikely Primal Hero",
    type: "Background",
    id: "ID_FMP_BACKGROUND_411",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Unlikely Primal Hero", "ID_FMP_BACKGROUND_411"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vengeful Royalty"] = new RulesElement({
    name: "Vengeful Royalty",
    type: "Background",
    id: "ID_FMP_BACKGROUND_409",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Vengeful Royalty", "ID_FMP_BACKGROUND_409"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
