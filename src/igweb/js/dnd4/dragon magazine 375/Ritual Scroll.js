(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Imprint Anaxim"] = new RulesElement({
    name: "Scroll of Imprint Anaxim",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IMPRINT_ANAXIM",
    source: "Dragon Magazine 375",
    categories: ["Scroll of Imprint Anaxim", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IMPRINT_ANAXIM"]
  });
  byID[te.id] = te;
  
  
})(this);
