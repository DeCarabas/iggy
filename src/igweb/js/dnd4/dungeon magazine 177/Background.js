define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Bloodstone Runehammer"] = new engine.RulesElement({
    name: "Bloodstone Runehammer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_545",
    source: "Dungeon Magazine 177",
    categories: ["Bloodstone Runehammer", "ID_FMP_BACKGROUND_545"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Order of the Golden Cup"] = new engine.RulesElement({
    name: "Order of the Golden Cup",
    type: "Background",
    id: "ID_FMP_BACKGROUND_547",
    source: "Dungeon Magazine 177",
    categories: ["Order of the Golden Cup", "ID_FMP_BACKGROUND_547"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Scion of the Granite Tower"] = new engine.RulesElement({
    name: "Scion of the Granite Tower",
    type: "Background",
    id: "ID_FMP_BACKGROUND_548",
    source: "Dungeon Magazine 177",
    categories: ["Scion of the Granite Tower", "ID_FMP_BACKGROUND_548"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Spirit Hunter of the White Worm"] = new engine.RulesElement({
    name: "Spirit Hunter of the White Worm",
    type: "Background",
    id: "ID_FMP_BACKGROUND_544",
    source: "Dungeon Magazine 177",
    categories: ["Spirit Hunter of the White Worm", "ID_FMP_BACKGROUND_544"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Spysong Troubadour"] = new engine.RulesElement({
    name: "Spysong Troubadour",
    type: "Background",
    id: "ID_FMP_BACKGROUND_549",
    source: "Dungeon Magazine 177",
    categories: ["Spysong Troubadour", "ID_FMP_BACKGROUND_549"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Telosian Scamp"] = new engine.RulesElement({
    name: "Telosian Scamp",
    type: "Background",
    id: "ID_FMP_BACKGROUND_546",
    source: "Dungeon Magazine 177",
    categories: ["Telosian Scamp", "ID_FMP_BACKGROUND_546"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vault-Warden of the Lost Ways"] = new engine.RulesElement({
    name: "Vault-Warden of the Lost Ways",
    type: "Background",
    id: "ID_FMP_BACKGROUND_550",
    source: "Dungeon Magazine 177",
    categories: ["Vault-Warden of the Lost Ways", "ID_FMP_BACKGROUND_550"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Zhengyian Blood Mage"] = new engine.RulesElement({
    name: "Zhengyian Blood Mage",
    type: "Background",
    id: "ID_FMP_BACKGROUND_551",
    source: "Dungeon Magazine 177",
    categories: ["Zhengyian Blood Mage", "ID_FMP_BACKGROUND_551"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
