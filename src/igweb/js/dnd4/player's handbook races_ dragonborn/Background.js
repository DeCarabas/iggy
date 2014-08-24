(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Arkhosian Totem Rager"] = new RulesElement({
    name: "Arkhosian Totem Rager",
    type: "Background",
    id: "ID_FMP_BACKGROUND_387",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Arkhosian Totem Rager", "ID_FMP_BACKGROUND_387"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Besmirched Birthright"] = new RulesElement({
    name: "Besmirched Birthright",
    type: "Background",
    id: "ID_FMP_BACKGROUND_370",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Besmirched Birthright", "ID_FMP_BACKGROUND_370"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Champion of Bahamut"] = new RulesElement({
    name: "Champion of Bahamut",
    type: "Background",
    id: "ID_FMP_BACKGROUND_379",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Champion of Bahamut", "ID_FMP_BACKGROUND_379"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Chosen of the Spirit Drake"] = new RulesElement({
    name: "Chosen of the Spirit Drake",
    type: "Background",
    id: "ID_FMP_BACKGROUND_388",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Chosen of the Spirit Drake", "ID_FMP_BACKGROUND_388"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Disciplined Soldier"] = new RulesElement({
    name: "Disciplined Soldier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_383",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Disciplined Soldier", "ID_FMP_BACKGROUND_383"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragon Totem Clan"] = new RulesElement({
    name: "Dragon Totem Clan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_389",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragon Totem Clan", "ID_FMP_BACKGROUND_389"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragon-Blooded Spellcaster"] = new RulesElement({
    name: "Dragon-Blooded Spellcaster",
    type: "Background",
    id: "ID_FMP_BACKGROUND_376",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragon-Blooded Spellcaster", "ID_FMP_BACKGROUND_376"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonbonded Clan"] = new RulesElement({
    name: "Dragonbonded Clan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_371",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragonbonded Clan", "ID_FMP_BACKGROUND_371"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn - Arcane Mercenary"] = new RulesElement({
    name: "Dragonborn - Arcane Mercenary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_375",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragonborn - Arcane Mercenary", "ID_FMP_BACKGROUND_375"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn Iconoclast"] = new RulesElement({
    name: "Dragonborn Iconoclast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_380",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragonborn Iconoclast", "ID_FMP_BACKGROUND_380"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragon-Bound Arcanist"] = new RulesElement({
    name: "Dragon-Bound Arcanist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_377",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragon-Bound Arcanist", "ID_FMP_BACKGROUND_377"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Exotic Gladiator"] = new RulesElement({
    name: "Exotic Gladiator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_384",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Exotic Gladiator", "ID_FMP_BACKGROUND_384"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fervent Commander"] = new RulesElement({
    name: "Fervent Commander",
    type: "Background",
    id: "ID_FMP_BACKGROUND_385",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Fervent Commander", "ID_FMP_BACKGROUND_385"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Laudable Legacy"] = new RulesElement({
    name: "Laudable Legacy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_372",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Laudable Legacy", "ID_FMP_BACKGROUND_372"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Reluctant Pawn of Tiamat"] = new RulesElement({
    name: "Reluctant Pawn of Tiamat",
    type: "Background",
    id: "ID_FMP_BACKGROUND_381",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Reluctant Pawn of Tiamat", "ID_FMP_BACKGROUND_381"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sandstorm Caller"] = new RulesElement({
    name: "Sandstorm Caller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_390",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Sandstorm Caller", "ID_FMP_BACKGROUND_390"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shard of Io"] = new RulesElement({
    name: "Shard of Io",
    type: "Background",
    id: "ID_FMP_BACKGROUND_382",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Shard of Io", "ID_FMP_BACKGROUND_382"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Student of the Ninefold Path"] = new RulesElement({
    name: "Student of the Ninefold Path",
    type: "Background",
    id: "ID_FMP_BACKGROUND_378",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Student of the Ninefold Path", "ID_FMP_BACKGROUND_378"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Turathi Slave Clan"] = new RulesElement({
    name: "Turathi Slave Clan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_373",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Turathi Slave Clan", "ID_FMP_BACKGROUND_373"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilderness Loner"] = new RulesElement({
    name: "Wilderness Loner",
    type: "Background",
    id: "ID_FMP_BACKGROUND_386",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Wilderness Loner", "ID_FMP_BACKGROUND_386"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
