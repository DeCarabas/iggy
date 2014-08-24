(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Convert"] = new RulesElement({
    name: "Convert",
    type: "Background",
    id: "ID_FMP_BACKGROUND_182",
    source: "Divine Power",
    categories: ["Convert", "ID_FMP_BACKGROUND_182"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Disbeliever"] = new RulesElement({
    name: "Disbeliever",
    type: "Background",
    id: "ID_FMP_BACKGROUND_183",
    source: "Divine Power",
    categories: ["Disbeliever", "ID_FMP_BACKGROUND_183"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Divinely Inspired"] = new RulesElement({
    name: "Divinely Inspired",
    type: "Background",
    id: "ID_FMP_BACKGROUND_184",
    source: "Divine Power",
    categories: ["Divinely Inspired", "ID_FMP_BACKGROUND_184"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Family Tradition"] = new RulesElement({
    name: "Family Tradition",
    type: "Background",
    id: "ID_FMP_BACKGROUND_185",
    source: "Divine Power",
    categories: ["Family Tradition", "ID_FMP_BACKGROUND_185"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Followed a Cult"] = new RulesElement({
    name: "Followed a Cult",
    type: "Background",
    id: "ID_FMP_BACKGROUND_186",
    source: "Divine Power",
    categories: ["Followed a Cult", "ID_FMP_BACKGROUND_186"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Found Religion Among Others"] = new RulesElement({
    name: "Found Religion Among Others",
    type: "Background",
    id: "ID_FMP_BACKGROUND_187",
    source: "Divine Power",
    categories: ["Found Religion Among Others", "ID_FMP_BACKGROUND_187"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Heretic"] = new RulesElement({
    name: "Heretic",
    type: "Background",
    id: "ID_FMP_BACKGROUND_188",
    source: "Divine Power",
    categories: ["Heretic", "ID_FMP_BACKGROUND_188"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Missionary Life"] = new RulesElement({
    name: "Missionary Life",
    type: "Background",
    id: "ID_FMP_BACKGROUND_189",
    source: "Divine Power",
    categories: ["Missionary Life", "ID_FMP_BACKGROUND_189"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Out for Revenge"] = new RulesElement({
    name: "Out for Revenge",
    type: "Background",
    id: "ID_FMP_BACKGROUND_190",
    source: "Divine Power",
    categories: ["Out for Revenge", "ID_FMP_BACKGROUND_190"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Penitent"] = new RulesElement({
    name: "Penitent",
    type: "Background",
    id: "ID_FMP_BACKGROUND_191",
    source: "Divine Power",
    categories: ["Penitent", "ID_FMP_BACKGROUND_191"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Touched by an Angel"] = new RulesElement({
    name: "Touched by an Angel",
    type: "Background",
    id: "ID_FMP_BACKGROUND_192",
    source: "Divine Power",
    categories: ["Touched by an Angel", "ID_FMP_BACKGROUND_192"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Veteran of a Religious War"] = new RulesElement({
    name: "Veteran of a Religious War",
    type: "Background",
    id: "ID_FMP_BACKGROUND_193",
    source: "Divine Power",
    categories: ["Veteran of a Religious War", "ID_FMP_BACKGROUND_193"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ward of the Temple"] = new RulesElement({
    name: "Ward of the Temple",
    type: "Background",
    id: "ID_FMP_BACKGROUND_194",
    source: "Divine Power",
    categories: ["Ward of the Temple", "ID_FMP_BACKGROUND_194"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
