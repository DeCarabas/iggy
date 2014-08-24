(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["Argon"] = new RulesElement({
    name: "Argon",
    type: "Language",
    id: "ID_FMP_LANGUAGE_37",
    source: "Eberron Player's Guide",
    categories: ["Argon", "ID_FMP_LANGUAGE_37", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Quori"] = new RulesElement({
    name: "Quori",
    type: "Language",
    id: "ID_FMP_LANGUAGE_38",
    source: "Eberron Player's Guide",
    categories: ["Quori", "ID_FMP_LANGUAGE_38", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Riedran"] = new RulesElement({
    name: "Riedran",
    type: "Language",
    id: "ID_FMP_LANGUAGE_40",
    source: "Eberron Player's Guide",
    categories: ["Riedran", "ID_FMP_LANGUAGE_40", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
