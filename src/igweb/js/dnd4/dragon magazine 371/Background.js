define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Accursed Lineage"] = new engine.RulesElement({
    name: "Accursed Lineage",
    type: "Background",
    id: "ID_FMP_BACKGROUND_163",
    source: "Dragon Magazine 371",
    categories: ["Accursed Lineage", "ID_FMP_BACKGROUND_163"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Adventurer's Scion"] = new engine.RulesElement({
    name: "Adventurer's Scion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_164",
    source: "Dragon Magazine 371",
    categories: ["Adventurer's Scion", "ID_FMP_BACKGROUND_164"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Curious Archeologist"] = new engine.RulesElement({
    name: "Curious Archeologist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_165",
    source: "Dragon Magazine 371",
    categories: ["Curious Archeologist", "ID_FMP_BACKGROUND_165"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lost Kin"] = new engine.RulesElement({
    name: "Lost Kin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_166",
    source: "Dragon Magazine 371",
    categories: ["Lost Kin", "ID_FMP_BACKGROUND_166"],
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
  
  te = Background["Necromancer's Chattel"] = new engine.RulesElement({
    name: "Necromancer's Chattel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_167",
    source: "Dragon Magazine 371",
    categories: ["Necromancer's Chattel", "ID_FMP_BACKGROUND_167"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Restless Dead"] = new engine.RulesElement({
    name: "Restless Dead",
    type: "Background",
    id: "ID_FMP_BACKGROUND_168",
    source: "Dragon Magazine 371",
    categories: ["Restless Dead", "ID_FMP_BACKGROUND_168"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Touched by Darkness"] = new engine.RulesElement({
    name: "Touched by Darkness",
    type: "Background",
    id: "ID_FMP_BACKGROUND_169",
    source: "Dragon Magazine 371",
    categories: ["Touched by Darkness", "ID_FMP_BACKGROUND_169"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
