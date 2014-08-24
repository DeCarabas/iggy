(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Banished from the Order"] = new RulesElement({
    name: "Banished from the Order",
    type: "Background",
    id: "ID_FMP_BACKGROUND_531",
    source: "Dragon Magazine 385",
    categories: ["Banished from the Order", "ID_FMP_BACKGROUND_531"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_SUPERNAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Experimental Prototype"] = new RulesElement({
    name: "Experimental Prototype",
    type: "Background",
    id: "ID_FMP_BACKGROUND_533",
    source: "Dragon Magazine 385",
    categories: ["Experimental Prototype", "ID_FMP_BACKGROUND_533"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Guardian Contemplative"] = new RulesElement({
    name: "Guardian Contemplative",
    type: "Background",
    id: "ID_FMP_BACKGROUND_524",
    source: "Dragon Magazine 385",
    categories: ["Guardian Contemplative", "ID_FMP_BACKGROUND_524"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Guardian Sentinel"] = new RulesElement({
    name: "Guardian Sentinel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_525",
    source: "Dragon Magazine 385",
    categories: ["Guardian Sentinel", "ID_FMP_BACKGROUND_525"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Incomplete Creation"] = new RulesElement({
    name: "Incomplete Creation",
    type: "Background",
    id: "ID_FMP_BACKGROUND_534",
    source: "Dragon Magazine 385",
    categories: ["Incomplete Creation", "ID_FMP_BACKGROUND_534"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mythspeaker"] = new RulesElement({
    name: "Mythspeaker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_529",
    source: "Dragon Magazine 385",
    categories: ["Mythspeaker", "ID_FMP_BACKGROUND_529"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Quori Nightmare"] = new RulesElement({
    name: "Quori Nightmare",
    type: "Background",
    id: "ID_FMP_BACKGROUND_528",
    source: "Dragon Magazine 385",
    categories: ["Quori Nightmare", "ID_FMP_BACKGROUND_528"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Self-Improvement Expert"] = new RulesElement({
    name: "Self-Improvement Expert",
    type: "Background",
    id: "ID_FMP_BACKGROUND_535",
    source: "Dragon Magazine 385",
    categories: ["Self-Improvement Expert", "ID_FMP_BACKGROUND_535"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Servant of the Light"] = new RulesElement({
    name: "Servant of the Light",
    type: "Background",
    id: "ID_FMP_BACKGROUND_527",
    source: "Dragon Magazine 385",
    categories: ["Servant of the Light", "ID_FMP_BACKGROUND_527"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Thoughtsinger"] = new RulesElement({
    name: "Thoughtsinger",
    type: "Background",
    id: "ID_FMP_BACKGROUND_530",
    source: "Dragon Magazine 385",
    categories: ["Thoughtsinger", "ID_FMP_BACKGROUND_530"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_QUORI"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Too Many Secrets"] = new RulesElement({
    name: "Too Many Secrets",
    type: "Background",
    id: "ID_FMP_BACKGROUND_532",
    source: "Dragon Magazine 385",
    categories: ["Too Many Secrets", "ID_FMP_BACKGROUND_532"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
