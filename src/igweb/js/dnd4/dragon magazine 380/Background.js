define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Ancient"] = new engine.RulesElement({
    name: "Ancient",
    type: "Background",
    id: "ID_FMP_BACKGROUND_339",
    source: "Dragon Magazine 380",
    categories: ["Ancient", "ID_FMP_BACKGROUND_339"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Bereaved"] = new engine.RulesElement({
    name: "Bereaved",
    type: "Background",
    id: "ID_FMP_BACKGROUND_336",
    source: "Dragon Magazine 380",
    categories: ["Bereaved", "ID_FMP_BACKGROUND_336"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cursed"] = new engine.RulesElement({
    name: "Cursed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_340",
    source: "Dragon Magazine 380",
    categories: ["Cursed", "ID_FMP_BACKGROUND_340"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dead One"] = new engine.RulesElement({
    name: "Dead One",
    type: "Background",
    id: "ID_FMP_BACKGROUND_345",
    source: "Dragon Magazine 380",
    categories: ["Dead One", "ID_FMP_BACKGROUND_345"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deviant"] = new engine.RulesElement({
    name: "Deviant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_337",
    source: "Dragon Magazine 380",
    categories: ["Deviant", "ID_FMP_BACKGROUND_337"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Embalmer"] = new engine.RulesElement({
    name: "Embalmer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_331",
    source: "Dragon Magazine 380",
    categories: ["Embalmer", "ID_FMP_BACKGROUND_331"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ennui"] = new engine.RulesElement({
    name: "Ennui",
    type: "Background",
    id: "ID_FMP_BACKGROUND_343",
    source: "Dragon Magazine 380",
    categories: ["Ennui", "ID_FMP_BACKGROUND_343"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Grave Digger"] = new engine.RulesElement({
    name: "Grave Digger",
    type: "Background",
    id: "ID_FMP_BACKGROUND_332",
    source: "Dragon Magazine 380",
    categories: ["Grave Digger", "ID_FMP_BACKGROUND_332"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pact"] = new engine.RulesElement({
    name: "Pact",
    type: "Background",
    id: "ID_FMP_BACKGROUND_341",
    source: "Dragon Magazine 380",
    categories: ["Pact", "ID_FMP_BACKGROUND_341"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Raised"] = new engine.RulesElement({
    name: "Raised",
    type: "Background",
    id: "ID_FMP_BACKGROUND_338",
    source: "Dragon Magazine 380",
    categories: ["Raised", "ID_FMP_BACKGROUND_338"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Salvation"] = new engine.RulesElement({
    name: "Salvation",
    type: "Background",
    id: "ID_FMP_BACKGROUND_344",
    source: "Dragon Magazine 380",
    categories: ["Salvation", "ID_FMP_BACKGROUND_344"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Seer"] = new engine.RulesElement({
    name: "Seer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_333",
    source: "Dragon Magazine 380",
    categories: ["Seer", "ID_FMP_BACKGROUND_333"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Surgeon"] = new engine.RulesElement({
    name: "Surgeon",
    type: "Background",
    id: "ID_FMP_BACKGROUND_334",
    source: "Dragon Magazine 380",
    categories: ["Surgeon", "ID_FMP_BACKGROUND_334"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tomb Robber"] = new engine.RulesElement({
    name: "Tomb Robber",
    type: "Background",
    id: "ID_FMP_BACKGROUND_335",
    source: "Dragon Magazine 380",
    categories: ["Tomb Robber", "ID_FMP_BACKGROUND_335"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vengeance"] = new engine.RulesElement({
    name: "Vengeance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_342",
    source: "Dragon Magazine 380",
    categories: ["Vengeance", "ID_FMP_BACKGROUND_342"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["World Walker"] = new engine.RulesElement({
    name: "World Walker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_346",
    source: "Dragon Magazine 380",
    categories: ["World Walker", "ID_FMP_BACKGROUND_346"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
