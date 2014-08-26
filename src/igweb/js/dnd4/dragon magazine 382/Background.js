define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Child of Fate"] = new engine.RulesElement({
    name: "Child of Fate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_364",
    source: "Dragon Magazine 382",
    categories: ["Child of Fate", "ID_FMP_BACKGROUND_364"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Corellon Dedicate"] = new engine.RulesElement({
    name: "Corellon Dedicate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_366",
    source: "Dragon Magazine 382",
    categories: ["Corellon Dedicate", "ID_FMP_BACKGROUND_366"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dusk Envoy"] = new engine.RulesElement({
    name: "Dusk Envoy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_368",
    source: "Dragon Magazine 382",
    categories: ["Dusk Envoy", "ID_FMP_BACKGROUND_368"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gloaming Guardian"] = new engine.RulesElement({
    name: "Gloaming Guardian",
    type: "Background",
    id: "ID_FMP_BACKGROUND_367",
    source: "Dragon Magazine 382",
    categories: ["Gloaming Guardian", "ID_FMP_BACKGROUND_367"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mad Wanderer"] = new engine.RulesElement({
    name: "Mad Wanderer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_391",
    source: "Dragon Magazine 382",
    categories: ["Mad Wanderer", "ID_FMP_BACKGROUND_391"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Moonstruck Hunter"] = new engine.RulesElement({
    name: "Moonstruck Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_365",
    source: "Dragon Magazine 382",
    categories: ["Moonstruck Hunter", "ID_FMP_BACKGROUND_365"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
