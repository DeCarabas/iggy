(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["All"] = new RulesElement({
    name: "All",
    type: "Language",
    id: "ID_INTERNAL_LANGUAGE_ALL",
    source: "Core",
    categories: ["All", "ID_INTERNAL_LANGUAGE_ALL"]
  });
  byID[te.id] = te;
  
  te = Language["Secret Language"] = new RulesElement({
    name: "Secret Language",
    type: "Language",
    id: "ID_INTERNAL_LANGUAGE_SECRET_LANGUAGE",
    source: "Core",
    categories: ["Secret Language", "ID_INTERNAL_LANGUAGE_SECRET_LANGUAGE"]
  });
  byID[te.id] = te;
  
  
})(this);
