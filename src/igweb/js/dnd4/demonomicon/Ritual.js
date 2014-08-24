(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Summon Demon"] = new RulesElement({
    name: "Summon Demon",
    type: "Ritual",
    id: "ID_FMP_RITUAL_340",
    source: "Demonomicon",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=340",
    categories: ["Summon Demon", "ID_FMP_RITUAL_340"]
  });
  byID[te.id] = te;
  
  
})(this);
