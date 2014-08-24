(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Raise Beast Companion"] = new RulesElement({
    name: "Raise Beast Companion",
    type: "Ritual",
    id: "ID_FMP_RITUAL_187",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=187",
    categories: ["Raise Beast Companion", "ID_FMP_RITUAL_187"]
  });
  byID[te.id] = te;
  
  
})(this);
