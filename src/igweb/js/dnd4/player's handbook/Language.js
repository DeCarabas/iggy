(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["Abyssal"] = new RulesElement({
    name: "Abyssal",
    type: "Language",
    id: "ID_FMP_LANGUAGE_7",
    source: "Player's Handbook",
    categories: ["Abyssal", "ID_FMP_LANGUAGE_7", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Common"] = new RulesElement({
    name: "Common",
    type: "Language",
    id: "ID_FMP_LANGUAGE_1",
    source: "Player's Handbook",
    categories: ["Common", "ID_FMP_LANGUAGE_1", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Deep Speech"] = new RulesElement({
    name: "Deep Speech",
    type: "Language",
    id: "ID_FMP_LANGUAGE_18",
    source: "Player's Handbook",
    categories: ["Deep Speech", "ID_FMP_LANGUAGE_18", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Draconic"] = new RulesElement({
    name: "Draconic",
    type: "Language",
    id: "ID_FMP_LANGUAGE_2",
    source: "Player's Handbook",
    categories: ["Draconic", "ID_FMP_LANGUAGE_2", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Dwarven"] = new RulesElement({
    name: "Dwarven",
    type: "Language",
    id: "ID_FMP_LANGUAGE_3",
    source: "Player's Handbook",
    categories: ["Dwarven", "ID_FMP_LANGUAGE_3", "ID_FMP_RACE_37", "Goliath", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Elven"] = new RulesElement({
    name: "Elven",
    type: "Language",
    id: "ID_FMP_LANGUAGE_4",
    source: "Player's Handbook",
    categories: ["Elven", "ID_FMP_LANGUAGE_4", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Giant"] = new RulesElement({
    name: "Giant",
    type: "Language",
    id: "ID_FMP_LANGUAGE_19",
    source: "Player's Handbook",
    categories: ["Giant", "ID_FMP_LANGUAGE_19", "ID_FMP_RACE_37", "Goliath", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Goblin"] = new RulesElement({
    name: "Goblin",
    type: "Language",
    id: "ID_FMP_LANGUAGE_20",
    source: "Player's Handbook",
    categories: ["Goblin", "ID_FMP_LANGUAGE_20", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Primordial"] = new RulesElement({
    name: "Primordial",
    type: "Language",
    id: "ID_FMP_LANGUAGE_6",
    source: "Player's Handbook",
    categories: ["Primordial", "ID_FMP_LANGUAGE_6", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Supernal"] = new RulesElement({
    name: "Supernal",
    type: "Language",
    id: "ID_FMP_LANGUAGE_8",
    source: "Player's Handbook",
    categories: ["Supernal", "ID_FMP_LANGUAGE_8", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
