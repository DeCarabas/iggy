define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Barrister"] = new engine.RulesElement({
    name: "Barrister",
    type: "Background",
    id: "ID_FMP_BACKGROUND_292",
    source: "Dragon Magazine 378",
    categories: ["Barrister", "ID_FMP_BACKGROUND_292"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Captive"] = new engine.RulesElement({
    name: "Captive",
    type: "Background",
    id: "ID_FMP_BACKGROUND_293",
    source: "Dragon Magazine 378",
    categories: ["Captive", "ID_FMP_BACKGROUND_293"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Rebel"] = new engine.RulesElement({
    name: "Rebel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_294",
    source: "Dragon Magazine 378",
    categories: ["Rebel", "ID_FMP_BACKGROUND_294"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Redemption"] = new engine.RulesElement({
    name: "Redemption",
    type: "Background",
    id: "ID_FMP_BACKGROUND_295",
    source: "Dragon Magazine 378",
    categories: ["Redemption", "ID_FMP_BACKGROUND_295"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Squire"] = new engine.RulesElement({
    name: "Squire",
    type: "Background",
    id: "ID_FMP_BACKGROUND_296",
    source: "Dragon Magazine 378",
    categories: ["Squire", "ID_FMP_BACKGROUND_296"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Survivor"] = new engine.RulesElement({
    name: "Survivor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_297",
    source: "Dragon Magazine 378",
    categories: ["Survivor", "ID_FMP_BACKGROUND_297"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Witness"] = new engine.RulesElement({
    name: "Witness",
    type: "Background",
    id: "ID_FMP_BACKGROUND_617",
    source: "Dragon Magazine 378",
    categories: ["Witness", "ID_FMP_BACKGROUND_617"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
