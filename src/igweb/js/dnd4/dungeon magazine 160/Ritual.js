(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Seal Portal"] = new RulesElement({
    name: "Seal Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_179",
    source: "Dungeon Magazine 160",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=179",
    categories: ["Seal Portal", "ID_FMP_RITUAL_179"]
  });
  byID[te.id] = te;
  
  
})(this);
