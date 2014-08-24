(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Argent Portal"] = new RulesElement({
    name: "Scroll of Argent Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARGENT_PORTAL",
    source: "Revenge of the Giants",
    categories: ["Scroll of Argent Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARGENT_PORTAL"]
  });
  byID[te.id] = te;
  
  
})(this);
