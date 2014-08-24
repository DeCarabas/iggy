(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Summon Demon"] = new RulesElement({
    name: "Scroll of Summon Demon",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUMMON_DEMON",
    source: "Demonomicon",
    categories: ["Scroll of Summon Demon", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUMMON_DEMON"]
  });
  byID[te.id] = te;
  
  
})(this);
