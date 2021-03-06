define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Channeled Fury"] = new engine.RulesElement({
    name: "Channeled Fury",
    type: "Background",
    id: "ID_FMP_BACKGROUND_608",
    source: "Dragon Magazine 389",
    categories: ["Channeled Fury", "ID_FMP_BACKGROUND_608"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Chaos Bound"] = new engine.RulesElement({
    name: "Chaos Bound",
    type: "Background",
    id: "ID_FMP_BACKGROUND_612",
    source: "Dragon Magazine 389",
    categories: ["Chaos Bound", "ID_FMP_BACKGROUND_612"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Clan Kranos"] = new engine.RulesElement({
    name: "Clan Kranos",
    type: "Background",
    id: "ID_FMP_BACKGROUND_596",
    source: "Dragon Magazine 389",
    categories: ["Clan Kranos", "ID_FMP_BACKGROUND_596"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Clan Sentune"] = new engine.RulesElement({
    name: "Clan Sentune",
    type: "Background",
    id: "ID_FMP_BACKGROUND_597",
    source: "Dragon Magazine 389",
    categories: ["Clan Sentune", "ID_FMP_BACKGROUND_597"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Clan Thavok"] = new engine.RulesElement({
    name: "Clan Thavok",
    type: "Background",
    id: "ID_FMP_BACKGROUND_598",
    source: "Dragon Magazine 389",
    categories: ["Clan Thavok", "ID_FMP_BACKGROUND_598"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cunning Hypnotist"] = new engine.RulesElement({
    name: "Cunning Hypnotist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_613",
    source: "Dragon Magazine 389",
    categories: ["Cunning Hypnotist", "ID_FMP_BACKGROUND_613"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deep Seer"] = new engine.RulesElement({
    name: "Deep Seer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_604",
    source: "Dragon Magazine 389",
    categories: ["Deep Seer", "ID_FMP_BACKGROUND_604"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eternal Journey"] = new engine.RulesElement({
    name: "Eternal Journey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_609",
    source: "Dragon Magazine 389",
    categories: ["Eternal Journey", "ID_FMP_BACKGROUND_609"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Narrow Way Clan"] = new engine.RulesElement({
    name: "Narrow Way Clan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_599",
    source: "Dragon Magazine 389",
    categories: ["Narrow Way Clan", "ID_FMP_BACKGROUND_599"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Perfect Recollection"] = new engine.RulesElement({
    name: "Perfect Recollection",
    type: "Background",
    id: "ID_FMP_BACKGROUND_615",
    source: "Dragon Magazine 389",
    categories: ["Perfect Recollection", "ID_FMP_BACKGROUND_615"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Psiforged"] = new engine.RulesElement({
    name: "Psiforged",
    type: "Background",
    id: "ID_FMP_BACKGROUND_616",
    source: "Dragon Magazine 389",
    categories: ["Psiforged", "ID_FMP_BACKGROUND_616"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Reclusive Mystic"] = new engine.RulesElement({
    name: "Reclusive Mystic",
    type: "Background",
    id: "ID_FMP_BACKGROUND_605",
    source: "Dragon Magazine 389",
    categories: ["Reclusive Mystic", "ID_FMP_BACKGROUND_605"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sisthera Master"] = new engine.RulesElement({
    name: "Sisthera Master",
    type: "Background",
    id: "ID_FMP_BACKGROUND_611",
    source: "Dragon Magazine 389",
    categories: ["Sisthera Master", "ID_FMP_BACKGROUND_611"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Spirit Possessed"] = new engine.RulesElement({
    name: "Spirit Possessed",
    type: "Background",
    id: "ID_FMP_BACKGROUND_607",
    source: "Dragon Magazine 389",
    categories: ["Spirit Possessed", "ID_FMP_BACKGROUND_607"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Still Water"] = new engine.RulesElement({
    name: "Still Water",
    type: "Background",
    id: "ID_FMP_BACKGROUND_614",
    source: "Dragon Magazine 389",
    categories: ["Still Water", "ID_FMP_BACKGROUND_614"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Basilisk Society"] = new engine.RulesElement({
    name: "The Basilisk Society",
    type: "Background",
    id: "ID_FMP_BACKGROUND_600",
    source: "Dragon Magazine 389",
    categories: ["The Basilisk Society", "ID_FMP_BACKGROUND_600"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Demon Binder"] = new engine.RulesElement({
    name: "The Demon Binder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_602",
    source: "Dragon Magazine 389",
    categories: ["The Demon Binder", "ID_FMP_BACKGROUND_602"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Five Wraiths"] = new engine.RulesElement({
    name: "The Five Wraiths",
    type: "Background",
    id: "ID_FMP_BACKGROUND_603",
    source: "Dragon Magazine 389",
    categories: ["The Five Wraiths", "ID_FMP_BACKGROUND_603"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The High One Falls"] = new engine.RulesElement({
    name: "The High One Falls",
    type: "Background",
    id: "ID_FMP_BACKGROUND_601",
    source: "Dragon Magazine 389",
    categories: ["The High One Falls", "ID_FMP_BACKGROUND_601"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Totemic Ally"] = new engine.RulesElement({
    name: "Totemic Ally",
    type: "Background",
    id: "ID_FMP_BACKGROUND_610",
    source: "Dragon Magazine 389",
    categories: ["Totemic Ally", "ID_FMP_BACKGROUND_610"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
