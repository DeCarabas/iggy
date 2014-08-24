(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Endure Primordial Elements"] = new RulesElement({
    name: "Endure Primordial Elements",
    type: "Ritual",
    id: "ID_FMP_RITUAL_303",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=303",
    categories: ["Endure Primordial Elements", "ID_FMP_RITUAL_303"]
  });
  byID[te.id] = te;
  
  
})(this);