(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Blood of the Darkwalker"] = new RulesElement({
    name: "Blood of the Darkwalker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_283",
    source: "Dragon Magazine 376",
    categories: ["Blood of the Darkwalker", "ID_FMP_BACKGROUND_283"]
  });
  byID[te.id] = te;
  
  te = Background["Brash Duelist"] = new RulesElement({
    name: "Brash Duelist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_280",
    source: "Dragon Magazine 376",
    categories: ["Brash Duelist", "ID_FMP_BACKGROUND_280"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Extra Muscle"] = new RulesElement({
    name: "Extra Muscle",
    type: "Background",
    id: "ID_FMP_BACKGROUND_271",
    source: "Dragon Magazine 376",
    categories: ["Extra Muscle", "ID_FMP_BACKGROUND_271"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Fastpaw"] = new RulesElement({
    name: "Fastpaw",
    type: "Background",
    id: "ID_FMP_BACKGROUND_284",
    source: "Dragon Magazine 376",
    categories: ["Fastpaw", "ID_FMP_BACKGROUND_284"]
  });
  byID[te.id] = te;
  
  te = Background["Flamescarred"] = new RulesElement({
    name: "Flamescarred",
    type: "Background",
    id: "ID_FMP_BACKGROUND_273",
    source: "Dragon Magazine 376",
    categories: ["Flamescarred", "ID_FMP_BACKGROUND_273"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Greenbeard"] = new RulesElement({
    name: "Greenbeard",
    type: "Background",
    id: "ID_FMP_BACKGROUND_285",
    source: "Dragon Magazine 376",
    categories: ["Greenbeard", "ID_FMP_BACKGROUND_285"]
  });
  byID[te.id] = te;
  
  te = Background["Hand-For-Hire"] = new RulesElement({
    name: "Hand-For-Hire",
    type: "Background",
    id: "ID_FMP_BACKGROUND_279",
    source: "Dragon Magazine 376",
    categories: ["Hand-For-Hire", "ID_FMP_BACKGROUND_279"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["High Roller"] = new RulesElement({
    name: "High Roller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_274",
    source: "Dragon Magazine 376",
    categories: ["High Roller", "ID_FMP_BACKGROUND_274"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Knight of Synnoria"] = new RulesElement({
    name: "Knight of Synnoria",
    type: "Background",
    id: "ID_FMP_BACKGROUND_286",
    source: "Dragon Magazine 376",
    categories: ["Knight of Synnoria", "ID_FMP_BACKGROUND_286"]
  });
  byID[te.id] = te;
  
  te = Background["Lashrael Crusader"] = new RulesElement({
    name: "Lashrael Crusader",
    type: "Background",
    id: "ID_FMP_BACKGROUND_287",
    source: "Dragon Magazine 376",
    categories: ["Lashrael Crusader", "ID_FMP_BACKGROUND_287"]
  });
  byID[te.id] = te;
  
  te = Background["Northman Reaver"] = new RulesElement({
    name: "Northman Reaver",
    type: "Background",
    id: "ID_FMP_BACKGROUND_288",
    source: "Dragon Magazine 376",
    categories: ["Northman Reaver", "ID_FMP_BACKGROUND_288"]
  });
  byID[te.id] = te;
  
  te = Background["Sarifal"] = new RulesElement({
    name: "Sarifal",
    type: "Background",
    id: "ID_FMP_BACKGROUND_282",
    source: "Dragon Magazine 376",
    categories: ["Sarifal", "ID_FMP_BACKGROUND_282"]
  });
  byID[te.id] = te;
  
  te = Background["Shipmaster's Aide"] = new RulesElement({
    name: "Shipmaster's Aide",
    type: "Background",
    id: "ID_FMP_BACKGROUND_278",
    source: "Dragon Magazine 376",
    categories: ["Shipmaster's Aide", "ID_FMP_BACKGROUND_278"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Skinwalker"] = new RulesElement({
    name: "Skinwalker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_289",
    source: "Dragon Magazine 376",
    categories: ["Skinwalker", "ID_FMP_BACKGROUND_289"]
  });
  byID[te.id] = te;
  
  te = Background["Tarmalune"] = new RulesElement({
    name: "Tarmalune",
    type: "Background",
    id: "ID_FMP_BACKGROUND_272",
    source: "Dragon Magazine 376",
    categories: ["Tarmalune", "ID_FMP_BACKGROUND_272"]
  });
  byID[te.id] = te;
  
  te = Background["Totem-Mystic"] = new RulesElement({
    name: "Totem-Mystic",
    type: "Background",
    id: "ID_FMP_BACKGROUND_290",
    source: "Dragon Magazine 376",
    categories: ["Totem-Mystic", "ID_FMP_BACKGROUND_290"]
  });
  byID[te.id] = te;
  
  te = Background["Upperdark Slave"] = new RulesElement({
    name: "Upperdark Slave",
    type: "Background",
    id: "ID_FMP_BACKGROUND_277",
    source: "Dragon Magazine 376",
    categories: ["Upperdark Slave", "ID_FMP_BACKGROUND_277"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Vigilant Informant"] = new RulesElement({
    name: "Vigilant Informant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_275",
    source: "Dragon Magazine 376",
    categories: ["Vigilant Informant", "ID_FMP_BACKGROUND_275"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Background["Windrise Ports"] = new RulesElement({
    name: "Windrise Ports",
    type: "Background",
    id: "ID_FMP_BACKGROUND_276",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports", "ID_FMP_BACKGROUND_276"]
  });
  byID[te.id] = te;
  
  te = Background["Wrath of the Ancients"] = new RulesElement({
    name: "Wrath of the Ancients",
    type: "Background",
    id: "ID_FMP_BACKGROUND_291",
    source: "Dragon Magazine 376",
    categories: ["Wrath of the Ancients", "ID_FMP_BACKGROUND_291"]
  });
  byID[te.id] = te;
  
  
})(this);
