(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Rite of Arkentaash"] = new RulesElement({
    name: "Scroll of Rite of Arkentaash",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITE_OF_ARKENTAASH",
    source: "Seekers of the Ashen Crown",
    categories: ["Scroll of Rite of Arkentaash", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITE_OF_ARKENTAASH"]
  });
  byID[te.id] = te;
  
  
})(this);
