(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Mindshape Warwing Drake"] = new RulesElement({
    name: "Scroll of Mindshape Warwing Drake",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MINDSHAPE_WARWING_DRAKE",
    source: "Dungeon Magazine 165",
    categories: ["Scroll of Mindshape Warwing Drake", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MINDSHAPE_WARWING_DRAKE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Solace Bole"] = new RulesElement({
    name: "Scroll of Solace Bole",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SOLACE_BOLE",
    source: "Dungeon Magazine 165",
    categories: ["Scroll of Solace Bole", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SOLACE_BOLE"]
  });
  byID[te.id] = te;
  
  
})(this);
