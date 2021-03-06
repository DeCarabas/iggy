define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Dark Apprenticeship"] = new engine.RulesElement({
    name: "Dark Apprenticeship",
    type: "Background",
    id: "ID_FMP_BACKGROUND_170",
    source: "Dragon Magazine 374",
    categories: ["Dark Apprenticeship", "ID_FMP_BACKGROUND_170"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Foundling"] = new engine.RulesElement({
    name: "Foundling",
    type: "Background",
    id: "ID_FMP_BACKGROUND_171",
    source: "Dragon Magazine 374",
    categories: ["Foundling", "ID_FMP_BACKGROUND_171"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Indulged Scion"] = new engine.RulesElement({
    name: "Indulged Scion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_172",
    source: "Dragon Magazine 374",
    categories: ["Indulged Scion", "ID_FMP_BACKGROUND_172"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Instructor's Child"] = new engine.RulesElement({
    name: "Instructor's Child",
    type: "Background",
    id: "ID_FMP_BACKGROUND_173",
    source: "Dragon Magazine 374",
    categories: ["Instructor's Child", "ID_FMP_BACKGROUND_173"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Oathbound Fellow"] = new engine.RulesElement({
    name: "Oathbound Fellow",
    type: "Background",
    id: "ID_FMP_BACKGROUND_174",
    source: "Dragon Magazine 374",
    categories: ["Oathbound Fellow", "ID_FMP_BACKGROUND_174"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Refused Admittance"] = new engine.RulesElement({
    name: "Refused Admittance",
    type: "Background",
    id: "ID_FMP_BACKGROUND_175",
    source: "Dragon Magazine 374",
    categories: ["Refused Admittance", "ID_FMP_BACKGROUND_175"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Saved from the Noose"] = new engine.RulesElement({
    name: "Saved from the Noose",
    type: "Background",
    id: "ID_FMP_BACKGROUND_176",
    source: "Dragon Magazine 374",
    categories: ["Saved from the Noose", "ID_FMP_BACKGROUND_176"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Scholarship Student"] = new engine.RulesElement({
    name: "Scholarship Student",
    type: "Background",
    id: "ID_FMP_BACKGROUND_177",
    source: "Dragon Magazine 374",
    categories: ["Scholarship Student", "ID_FMP_BACKGROUND_177"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Scholastic Stowaway"] = new engine.RulesElement({
    name: "Scholastic Stowaway",
    type: "Background",
    id: "ID_FMP_BACKGROUND_178",
    source: "Dragon Magazine 374",
    categories: ["Scholastic Stowaway", "ID_FMP_BACKGROUND_178"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wilden - Estranged Fey"] = new engine.RulesElement({
    name: "Wilden - Estranged Fey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_180",
    source: "Dragon Magazine 374",
    categories: ["Wilden - Estranged Fey", "ID_FMP_BACKGROUND_180"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
