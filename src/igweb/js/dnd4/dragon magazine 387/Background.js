(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Domain Refugee"] = new RulesElement({
    name: "Domain Refugee",
    type: "Background",
    id: "ID_FMP_BACKGROUND_579",
    source: "Dragon Magazine 387",
    categories: ["Domain Refugee", "ID_FMP_BACKGROUND_579"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Founder"] = new RulesElement({
    name: "Founder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_578",
    source: "Dragon Magazine 387",
    categories: ["Founder", "ID_FMP_BACKGROUND_578"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Friend of an Eladrin House"] = new RulesElement({
    name: "Friend of an Eladrin House",
    type: "Background",
    id: "ID_FMP_BACKGROUND_566",
    source: "Dragon Magazine 387",
    categories: ["Friend of an Eladrin House", "ID_FMP_BACKGROUND_566"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lawmaker"] = new RulesElement({
    name: "Lawmaker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_576",
    source: "Dragon Magazine 387",
    categories: ["Lawmaker", "ID_FMP_BACKGROUND_576"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Magpie"] = new RulesElement({
    name: "Magpie",
    type: "Background",
    id: "ID_FMP_BACKGROUND_568",
    source: "Dragon Magazine 387",
    categories: ["Magpie", "ID_FMP_BACKGROUND_568"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Protégé of the Circle"] = new RulesElement({
    name: "Protégé of the Circle",
    type: "Background",
    id: "ID_FMP_BACKGROUND_565",
    source: "Dragon Magazine 387",
    categories: ["Protégé of the Circle", "ID_FMP_BACKGROUND_565"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Reformed Villain"] = new RulesElement({
    name: "Reformed Villain",
    type: "Background",
    id: "ID_FMP_BACKGROUND_580",
    source: "Dragon Magazine 387",
    categories: ["Reformed Villain", "ID_FMP_BACKGROUND_580"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Stone Runner"] = new RulesElement({
    name: "Stone Runner",
    type: "Background",
    id: "ID_FMP_BACKGROUND_569",
    source: "Dragon Magazine 387",
    categories: ["Stone Runner", "ID_FMP_BACKGROUND_569"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Trapped in the Feywild"] = new RulesElement({
    name: "Trapped in the Feywild",
    type: "Background",
    id: "ID_FMP_BACKGROUND_567",
    source: "Dragon Magazine 387",
    categories: ["Trapped in the Feywild", "ID_FMP_BACKGROUND_567"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Urban Shaman"] = new RulesElement({
    name: "Urban Shaman",
    type: "Background",
    id: "ID_FMP_BACKGROUND_570",
    source: "Dragon Magazine 387",
    categories: ["Urban Shaman", "ID_FMP_BACKGROUND_570"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ward of the State"] = new RulesElement({
    name: "Ward of the State",
    type: "Background",
    id: "ID_FMP_BACKGROUND_577",
    source: "Dragon Magazine 387",
    categories: ["Ward of the State", "ID_FMP_BACKGROUND_577"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wrongs to be Righted"] = new RulesElement({
    name: "Wrongs to be Righted",
    type: "Background",
    id: "ID_FMP_BACKGROUND_581",
    source: "Dragon Magazine 387",
    categories: ["Wrongs to be Righted", "ID_FMP_BACKGROUND_581"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
