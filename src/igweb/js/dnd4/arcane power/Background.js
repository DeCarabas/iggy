(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Arcane Agent"] = new RulesElement({
    name: "Arcane Agent",
    type: "Background",
    id: "ID_FMP_BACKGROUND_158",
    source: "Arcane Power",
    categories: ["Arcane Agent", "ID_FMP_BACKGROUND_158"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Arcane Mercenary"] = new RulesElement({
    name: "Arcane Mercenary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_159",
    source: "Arcane Power",
    categories: ["Arcane Mercenary", "ID_FMP_BACKGROUND_159"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Arcane Refugee"] = new RulesElement({
    name: "Arcane Refugee",
    type: "Background",
    id: "ID_FMP_BACKGROUND_160",
    source: "Arcane Power",
    categories: ["Arcane Refugee", "ID_FMP_BACKGROUND_160"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Arcane Sentinel"] = new RulesElement({
    name: "Arcane Sentinel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_161",
    source: "Arcane Power",
    categories: ["Arcane Sentinel", "ID_FMP_BACKGROUND_161"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Arcane Tracker"] = new RulesElement({
    name: "Arcane Tracker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_162",
    source: "Arcane Power",
    categories: ["Arcane Tracker", "ID_FMP_BACKGROUND_162"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
