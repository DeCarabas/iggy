(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Changeling Imposter"] = new RulesElement({
    name: "Changeling Imposter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_587",
    source: "Dragon Magazine 388",
    categories: ["Changeling Imposter", "ID_FMP_BACKGROUND_587"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deva Regressor"] = new RulesElement({
    name: "Deva Regressor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_588",
    source: "Dragon Magazine 388",
    categories: ["Deva Regressor", "ID_FMP_BACKGROUND_588"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragonborn Madness"] = new RulesElement({
    name: "Dragonborn Madness",
    type: "Background",
    id: "ID_FMP_BACKGROUND_589",
    source: "Dragon Magazine 388",
    categories: ["Dragonborn Madness", "ID_FMP_BACKGROUND_589"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lucky Child"] = new RulesElement({
    name: "Lucky Child",
    type: "Background",
    id: "ID_FMP_BACKGROUND_586",
    source: "Dragon Magazine 388",
    categories: ["Lucky Child", "ID_FMP_BACKGROUND_586"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Oathbound Death-Seeker"] = new RulesElement({
    name: "Oathbound Death-Seeker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_590",
    source: "Dragon Magazine 388",
    categories: ["Oathbound Death-Seeker", "ID_FMP_BACKGROUND_590"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psionic Descendant"] = new RulesElement({
    name: "Psionic Descendant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_593",
    source: "Dragon Magazine 388",
    categories: ["Psionic Descendant", "ID_FMP_BACKGROUND_593"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["River Guardian"] = new RulesElement({
    name: "River Guardian",
    type: "Background",
    id: "ID_FMP_BACKGROUND_592",
    source: "Dragon Magazine 388",
    categories: ["River Guardian", "ID_FMP_BACKGROUND_592"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Turathi Inquisitor"] = new RulesElement({
    name: "Turathi Inquisitor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_594",
    source: "Dragon Magazine 388",
    categories: ["Turathi Inquisitor", "ID_FMP_BACKGROUND_594"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Two Sides of the Coin"] = new RulesElement({
    name: "Two Sides of the Coin",
    type: "Background",
    id: "ID_FMP_BACKGROUND_585",
    source: "Dragon Magazine 388",
    categories: ["Two Sides of the Coin", "ID_FMP_BACKGROUND_585"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wandering Zealot"] = new RulesElement({
    name: "Wandering Zealot",
    type: "Background",
    id: "ID_FMP_BACKGROUND_591",
    source: "Dragon Magazine 388",
    categories: ["Wandering Zealot", "ID_FMP_BACKGROUND_591"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Ancient One"] = new RulesElement({
    name: "Wilden - Ancient One",
    type: "Background",
    id: "ID_FMP_BACKGROUND_582",
    source: "Dragon Magazine 388",
    categories: ["Wilden - Ancient One", "ID_FMP_BACKGROUND_582"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Destroyer"] = new RulesElement({
    name: "Wilden - Destroyer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_583",
    source: "Dragon Magazine 388",
    categories: ["Wilden - Destroyer", "ID_FMP_BACKGROUND_583"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Hunter"] = new RulesElement({
    name: "Wilden - Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_584",
    source: "Dragon Magazine 388",
    categories: ["Wilden - Hunter", "ID_FMP_BACKGROUND_584"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
