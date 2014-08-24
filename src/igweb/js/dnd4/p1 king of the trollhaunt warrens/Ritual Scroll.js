(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Ritual of Retrieval"] = new RulesElement({
    name: "Scroll of Ritual of Retrieval",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITUAL_OF_RETRIEVAL",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Scroll of Ritual of Retrieval", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITUAL_OF_RETRIEVAL"]
  });
  byID[te.id] = te;
  
  
})(this);
