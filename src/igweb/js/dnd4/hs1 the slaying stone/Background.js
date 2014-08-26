define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Citizen of Kiris Dahn"] = new engine.RulesElement({
    name: "Citizen of Kiris Dahn",
    type: "Background",
    id: "ID_FMP_BACKGROUND_571",
    source: "HS1 The Slaying Stone",
    categories: ["Citizen of Kiris Dahn", "ID_FMP_BACKGROUND_571"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Defender of the Oppressed"] = new engine.RulesElement({
    name: "Defender of the Oppressed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_572",
    source: "HS1 The Slaying Stone",
    categories: ["Defender of the Oppressed", "ID_FMP_BACKGROUND_572"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Goblin Foe"] = new engine.RulesElement({
    name: "Goblin Foe",
    type: "Background",
    id: "ID_FMP_BACKGROUND_573",
    source: "HS1 The Slaying Stone",
    categories: ["Goblin Foe", "ID_FMP_BACKGROUND_573"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Redeemer of the Desecrated"] = new engine.RulesElement({
    name: "Redeemer of the Desecrated",
    type: "Background",
    id: "ID_FMP_BACKGROUND_574",
    source: "HS1 The Slaying Stone",
    categories: ["Redeemer of the Desecrated", "ID_FMP_BACKGROUND_574"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Treasure Hunter"] = new engine.RulesElement({
    name: "Treasure Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_575",
    source: "HS1 The Slaying Stone",
    categories: ["Treasure Hunter", "ID_FMP_BACKGROUND_575"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
