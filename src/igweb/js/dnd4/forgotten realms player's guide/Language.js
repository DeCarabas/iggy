(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["Chondathan"] = new RulesElement({
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
  
  te = Language["Damaran"] = new RulesElement({
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
  
  te = Language["Netherese"] = new RulesElement({
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
  
  te = Language["Shou"] = new RulesElement({
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
  
  te = Language["Thayan"] = new RulesElement({
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
  
  te = Language["Tulgan"] = new RulesElement({
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
  
  te = Language["Untheric"] = new RulesElement({
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
  
  
})(this);
