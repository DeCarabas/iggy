(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Ikemmu"] = new RulesElement({
    name: "Ikemmu",
    type: "Background",
    id: "ID_FMP_BACKGROUND_523",
    source: "Dungeon Magazine 175",
    categories: ["Ikemmu", "ID_FMP_BACKGROUND_523"]
  });
  byID[te.id] = te;
  
  
})(this);
