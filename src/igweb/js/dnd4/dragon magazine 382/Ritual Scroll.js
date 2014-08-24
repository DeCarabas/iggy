(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Familiar Mount"] = new RulesElement({
    name: "Scroll of Familiar Mount",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAMILIAR_MOUNT",
    source: "Dragon Magazine 382",
    categories: ["Scroll of Familiar Mount", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAMILIAR_MOUNT"]
  });
  byID[te.id] = te;
  
  
})(this);
