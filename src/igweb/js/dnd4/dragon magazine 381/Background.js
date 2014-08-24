(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Arcane Pariah"] = new RulesElement({
    name: "Arcane Pariah",
    type: "Background",
    id: "ID_FMP_BACKGROUND_347",
    source: "Dragon Magazine 381",
    categories: ["Arcane Pariah", "ID_FMP_BACKGROUND_347"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Brains"] = new RulesElement({
    name: "Brains",
    type: "Background",
    id: "ID_FMP_BACKGROUND_359",
    source: "Dragon Magazine 381",
    categories: ["Brains", "ID_FMP_BACKGROUND_359"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Burglar"] = new RulesElement({
    name: "Burglar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_360",
    source: "Dragon Magazine 381",
    categories: ["Burglar", "ID_FMP_BACKGROUND_360"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Buried Alive (Dark)"] = new RulesElement({
    name: "Buried Alive (Dark)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_348",
    source: "Dragon Magazine 381",
    categories: ["Buried Alive (Dark)", "ID_FMP_BACKGROUND_348"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cutpurse"] = new RulesElement({
    name: "Cutpurse",
    type: "Background",
    id: "ID_FMP_BACKGROUND_361",
    source: "Dragon Magazine 381",
    categories: ["Cutpurse", "ID_FMP_BACKGROUND_361"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dark Contract (Infernal)"] = new RulesElement({
    name: "Dark Contract (Infernal)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_349",
    source: "Dragon Magazine 381",
    categories: ["Dark Contract (Infernal)", "ID_FMP_BACKGROUND_349"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Desperate Measures"] = new RulesElement({
    name: "Desperate Measures",
    type: "Background",
    id: "ID_FMP_BACKGROUND_350",
    source: "Dragon Magazine 381",
    categories: ["Desperate Measures", "ID_FMP_BACKGROUND_350"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Glamoured (Fey)"] = new RulesElement({
    name: "Glamoured (Fey)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_351",
    source: "Dragon Magazine 381",
    categories: ["Glamoured (Fey)", "ID_FMP_BACKGROUND_351"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Grifter"] = new RulesElement({
    name: "Grifter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_362",
    source: "Dragon Magazine 381",
    categories: ["Grifter", "ID_FMP_BACKGROUND_362"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Halfling - High Roller"] = new RulesElement({
    name: "Halfling - High Roller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_357",
    source: "Dragon Magazine 381",
    categories: ["Halfling - High Roller", "ID_FMP_BACKGROUND_357"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Halfling - River Scout"] = new RulesElement({
    name: "Halfling - River Scout",
    type: "Background",
    id: "ID_FMP_BACKGROUND_358",
    source: "Dragon Magazine 381",
    categories: ["Halfling - River Scout", "ID_FMP_BACKGROUND_358"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Muscle"] = new RulesElement({
    name: "Muscle",
    type: "Background",
    id: "ID_FMP_BACKGROUND_363",
    source: "Dragon Magazine 381",
    categories: ["Muscle", "ID_FMP_BACKGROUND_363"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Naive Arrogance"] = new RulesElement({
    name: "Naive Arrogance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_352",
    source: "Dragon Magazine 381",
    categories: ["Naive Arrogance", "ID_FMP_BACKGROUND_352"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Remnant Legacy (Vestige)"] = new RulesElement({
    name: "Remnant Legacy (Vestige)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_353",
    source: "Dragon Magazine 381",
    categories: ["Remnant Legacy (Vestige)", "ID_FMP_BACKGROUND_353"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Seeking Penitence"] = new RulesElement({
    name: "Seeking Penitence",
    type: "Background",
    id: "ID_FMP_BACKGROUND_354",
    source: "Dragon Magazine 381",
    categories: ["Seeking Penitence", "ID_FMP_BACKGROUND_354"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Stargazer (Star)"] = new RulesElement({
    name: "Stargazer (Star)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_355",
    source: "Dragon Magazine 381",
    categories: ["Stargazer (Star)", "ID_FMP_BACKGROUND_355"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
