(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["Circle of Smoke and Whispers"] = new RulesElement({
    name: "Circle of Smoke and Whispers",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_CIRCLE_OF_SMOKE_AND_WHISPERS",
    source: "Dragon Magazine 390",
    categories: ["Circle of Smoke and Whispers", "ID_INTERNAL_INFORMATION_CIRCLE_OF_SMOKE_AND_WHISPERS"]
  });
  byID[te.id] = te;
  
  
})(this);
