(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Mindshape Warwing Drake"] = new RulesElement({
    name: "Mindshape Warwing Drake",
    type: "Ritual",
    id: "ID_FMP_RITUAL_271",
    source: "Dungeon Magazine 165",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=271",
    categories: ["Mindshape Warwing Drake", "ID_FMP_RITUAL_271"]
  });
  byID[te.id] = te;
  
  te = Ritual["Solace Bole"] = new RulesElement({
    name: "Solace Bole",
    type: "Ritual",
    id: "ID_FMP_RITUAL_236",
    source: "Dungeon Magazine 165",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=236",
    categories: ["Solace Bole", "ID_FMP_RITUAL_236"]
  });
  byID[te.id] = te;
  
  
})(this);
