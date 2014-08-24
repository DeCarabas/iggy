(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Raise Beast Companion"] = new RulesElement({
    name: "Scroll of Raise Beast Companion",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RAISE_BEAST_COMPANION",
    source: "Martial Power",
    categories: ["Scroll of Raise Beast Companion", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RAISE_BEAST_COMPANION"]
  });
  byID[te.id] = te;
  
  
})(this);
