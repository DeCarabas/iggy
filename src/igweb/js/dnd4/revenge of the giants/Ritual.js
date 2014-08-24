(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Argent Portal"] = new RulesElement({
    name: "Argent Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_283",
    source: "Revenge of the Giants",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=283",
    categories: ["Argent Portal", "ID_FMP_RITUAL_283"]
  });
  byID[te.id] = te;
  
  
})(this);
