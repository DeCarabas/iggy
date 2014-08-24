(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Drowsy Dust"] = new RulesElement({
    name: "Scroll of Drowsy Dust",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DROWSY_DUST",
    source: "Dragon Magazine 373",
    categories: ["Scroll of Drowsy Dust", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DROWSY_DUST"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Eyesting"] = new RulesElement({
    name: "Scroll of Eyesting",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EYESTING",
    source: "Dragon Magazine 373",
    categories: ["Scroll of Eyesting", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EYESTING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Flashbang Powder"] = new RulesElement({
    name: "Scroll of Flashbang Powder",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FLASHBANG_POWDER",
    source: "Dragon Magazine 373",
    categories: ["Scroll of Flashbang Powder", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FLASHBANG_POWDER"]
  });
  byID[te.id] = te;
  
  
})(this);
