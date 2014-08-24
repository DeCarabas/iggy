(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Imprint Anaxim"] = new RulesElement({
    name: "Imprint Anaxim",
    type: "Ritual",
    id: "ID_FMP_RITUAL_270",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=270",
    categories: ["Imprint Anaxim", "ID_FMP_RITUAL_270"]
  });
  byID[te.id] = te;
  
  
})(this);
