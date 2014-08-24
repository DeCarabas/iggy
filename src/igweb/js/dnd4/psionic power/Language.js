(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["The language of the mind"] = new RulesElement({
    name: "The language of the mind",
    type: "Language",
    id: "ID_FMP_LANGUAGE_45",
    source: "Psionic Power",
    categories: ["The language of the mind", "ID_FMP_LANGUAGE_45"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
