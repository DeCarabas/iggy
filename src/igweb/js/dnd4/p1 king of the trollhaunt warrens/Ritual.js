(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Ritual of Retrieval"] = new RulesElement({
    name: "Ritual of Retrieval",
    type: "Ritual",
    id: "ID_FMP_RITUAL_165",
    source: "P1 King of the Trollhaunt Warrens",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=165",
    categories: ["Ritual of Retrieval", "ID_FMP_RITUAL_165"]
  });
  byID[te.id] = te;
  
  
})(this);
