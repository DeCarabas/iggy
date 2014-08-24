(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Seal Portal"] = new RulesElement({
    name: "Scroll of Seal Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SEAL_PORTAL",
    source: "Dungeon Magazine 160",
    categories: ["Scroll of Seal Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SEAL_PORTAL"]
  });
  byID[te.id] = te;
  
  
})(this);
