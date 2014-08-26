define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Back Alley Bravo"] = new engine.RulesElement({
    name: "Back Alley Bravo",
    type: "Background",
    id: "ID_FMP_BACKGROUND_705",
    source: "Dragon Magazine 390",
    categories: ["Back Alley Bravo", "ID_FMP_BACKGROUND_705"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Battlefield Wonderworker"] = new engine.RulesElement({
    name: "Battlefield Wonderworker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_708",
    source: "Dragon Magazine 390",
    categories: ["Battlefield Wonderworker", "ID_FMP_BACKGROUND_708"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Fainéant Apprentice"] = new engine.RulesElement({
    name: "Fainéant Apprentice",
    type: "Background",
    id: "ID_FMP_BACKGROUND_709",
    source: "Dragon Magazine 390",
    categories: ["Fainéant Apprentice", "ID_FMP_BACKGROUND_709"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Faith Leech"] = new engine.RulesElement({
    name: "Faith Leech",
    type: "Background",
    id: "ID_FMP_BACKGROUND_710",
    source: "Dragon Magazine 390",
    categories: ["Faith Leech", "ID_FMP_BACKGROUND_710"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["God Hater"] = new engine.RulesElement({
    name: "God Hater",
    type: "Background",
    id: "ID_FMP_BACKGROUND_711",
    source: "Dragon Magazine 390",
    categories: ["God Hater", "ID_FMP_BACKGROUND_711"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Knife Enthusiast"] = new engine.RulesElement({
    name: "Knife Enthusiast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_706",
    source: "Dragon Magazine 390",
    categories: ["Knife Enthusiast", "ID_FMP_BACKGROUND_706"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Resurrectionist"] = new engine.RulesElement({
    name: "Resurrectionist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_712",
    source: "Dragon Magazine 390",
    categories: ["Resurrectionist", "ID_FMP_BACKGROUND_712"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Theologist"] = new engine.RulesElement({
    name: "Theologist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_713",
    source: "Dragon Magazine 390",
    categories: ["Theologist", "ID_FMP_BACKGROUND_713"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wandering Master"] = new engine.RulesElement({
    name: "Wandering Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_707",
    source: "Dragon Magazine 390",
    categories: ["Wandering Master", "ID_FMP_BACKGROUND_707"],
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
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
