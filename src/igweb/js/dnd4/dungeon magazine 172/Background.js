(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Airspur"] = new RulesElement({
    name: "Airspur",
    type: "Background",
    id: "ID_FMP_BACKGROUND_595",
    source: "Dungeon Magazine 172",
    categories: ["Airspur", "ID_FMP_BACKGROUND_595"]
  });
  byID[te.id] = te;
  
  
})(this);
