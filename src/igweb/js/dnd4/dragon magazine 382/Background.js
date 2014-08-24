(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Child of Fate"] = new RulesElement({
    name: "Child of Fate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_364",
    source: "Dragon Magazine 382",
    categories: ["Child of Fate", "ID_FMP_BACKGROUND_364"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Corellon Dedicate"] = new RulesElement({
    name: "Corellon Dedicate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_366",
    source: "Dragon Magazine 382",
    categories: ["Corellon Dedicate", "ID_FMP_BACKGROUND_366"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dusk Envoy"] = new RulesElement({
    name: "Dusk Envoy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_368",
    source: "Dragon Magazine 382",
    categories: ["Dusk Envoy", "ID_FMP_BACKGROUND_368"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Gloaming Guardian"] = new RulesElement({
    name: "Gloaming Guardian",
    type: "Background",
    id: "ID_FMP_BACKGROUND_367",
    source: "Dragon Magazine 382",
    categories: ["Gloaming Guardian", "ID_FMP_BACKGROUND_367"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mad Wanderer"] = new RulesElement({
    name: "Mad Wanderer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_391",
    source: "Dragon Magazine 382",
    categories: ["Mad Wanderer", "ID_FMP_BACKGROUND_391"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Moonstruck Hunter"] = new RulesElement({
    name: "Moonstruck Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_365",
    source: "Dragon Magazine 382",
    categories: ["Moonstruck Hunter", "ID_FMP_BACKGROUND_365"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
