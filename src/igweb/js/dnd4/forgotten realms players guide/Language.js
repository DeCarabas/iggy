define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["Chondathan"] = new engine.RulesElement({
    name: "Chondathan",
    type: "Language",
    id: "ID_FMP_LANGUAGE_34",
    source: "Forgotten Realms Player's Guide",
    categories: ["Chondathan", "ID_FMP_LANGUAGE_34", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Damaran"] = new engine.RulesElement({
    name: "Damaran",
    type: "Language",
    id: "ID_FMP_LANGUAGE_28",
    source: "Forgotten Realms Player's Guide",
    categories: ["Damaran", "ID_FMP_LANGUAGE_28", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Netherese"] = new engine.RulesElement({
    name: "Netherese",
    type: "Language",
    id: "ID_FMP_LANGUAGE_29",
    source: "Forgotten Realms Player's Guide",
    categories: ["Netherese", "ID_FMP_LANGUAGE_29", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Shou"] = new engine.RulesElement({
    name: "Shou",
    type: "Language",
    id: "ID_FMP_LANGUAGE_30",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shou", "ID_FMP_LANGUAGE_30", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Thayan"] = new engine.RulesElement({
    name: "Thayan",
    type: "Language",
    id: "ID_FMP_LANGUAGE_31",
    source: "Forgotten Realms Player's Guide",
    categories: ["Thayan", "ID_FMP_LANGUAGE_31", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Tulgan"] = new engine.RulesElement({
    name: "Tulgan",
    type: "Language",
    id: "ID_FMP_LANGUAGE_32",
    source: "Forgotten Realms Player's Guide",
    categories: ["Tulgan", "ID_FMP_LANGUAGE_32", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Untheric"] = new engine.RulesElement({
    name: "Untheric",
    type: "Language",
    id: "ID_FMP_LANGUAGE_33",
    source: "Forgotten Realms Player's Guide",
    categories: ["Untheric", "ID_FMP_LANGUAGE_33", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
