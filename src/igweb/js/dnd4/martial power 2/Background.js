define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Athlete"] = new engine.RulesElement({
    name: "Athlete",
    type: "Background",
    id: "ID_FMP_BACKGROUND_465",
    source: "Martial Power 2",
    categories: ["Athlete", "ID_FMP_BACKGROUND_465"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Beggar"] = new engine.RulesElement({
    name: "Beggar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_468",
    source: "Martial Power 2",
    categories: ["Beggar", "ID_FMP_BACKGROUND_468"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Borderland Nobility"] = new engine.RulesElement({
    name: "Borderland Nobility",
    type: "Background",
    id: "ID_FMP_BACKGROUND_469",
    source: "Martial Power 2",
    categories: ["Borderland Nobility", "ID_FMP_BACKGROUND_469"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Camp Follower"] = new engine.RulesElement({
    name: "Camp Follower",
    type: "Background",
    id: "ID_FMP_BACKGROUND_471",
    source: "Martial Power 2",
    categories: ["Camp Follower", "ID_FMP_BACKGROUND_471"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Circus Performer"] = new engine.RulesElement({
    name: "Circus Performer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_466",
    source: "Martial Power 2",
    categories: ["Circus Performer", "ID_FMP_BACKGROUND_466"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Hellion"] = new engine.RulesElement({
    name: "Hellion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_470",
    source: "Martial Power 2",
    categories: ["Hellion", "ID_FMP_BACKGROUND_470"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Bearer of the Heirloom"] = new engine.RulesElement({
    name: "Martial - Bearer of the Heirloom",
    type: "Background",
    id: "ID_FMP_BACKGROUND_459",
    source: "Martial Power 2",
    categories: ["Martial - Bearer of the Heirloom", "ID_FMP_BACKGROUND_459"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Disenchanted"] = new engine.RulesElement({
    name: "Martial - Disenchanted",
    type: "Background",
    id: "ID_FMP_BACKGROUND_460",
    source: "Martial Power 2",
    categories: ["Martial - Disenchanted", "ID_FMP_BACKGROUND_460"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Garrison Child"] = new engine.RulesElement({
    name: "Martial - Garrison Child",
    type: "Background",
    id: "ID_FMP_BACKGROUND_461",
    source: "Martial Power 2",
    categories: ["Martial - Garrison Child", "ID_FMP_BACKGROUND_461"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Guild Orphan"] = new engine.RulesElement({
    name: "Martial - Guild Orphan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_462",
    source: "Martial Power 2",
    categories: ["Martial - Guild Orphan", "ID_FMP_BACKGROUND_462"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Local Hero"] = new engine.RulesElement({
    name: "Martial - Local Hero",
    type: "Background",
    id: "ID_FMP_BACKGROUND_463",
    source: "Martial Power 2",
    categories: ["Martial - Local Hero", "ID_FMP_BACKGROUND_463"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Martial - Scion of a Legend"] = new engine.RulesElement({
    name: "Martial - Scion of a Legend",
    type: "Background",
    id: "ID_FMP_BACKGROUND_464",
    source: "Martial Power 2",
    categories: ["Martial - Scion of a Legend", "ID_FMP_BACKGROUND_464"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sentry"] = new engine.RulesElement({
    name: "Sentry",
    type: "Background",
    id: "ID_FMP_BACKGROUND_467",
    source: "Martial Power 2",
    categories: ["Sentry", "ID_FMP_BACKGROUND_467"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
