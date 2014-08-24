(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Familiar Mount"] = new RulesElement({
    name: "Familiar Mount",
    type: "Ritual",
    id: "ID_FMP_RITUAL_304",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=304",
    categories: ["Familiar Mount", "ID_FMP_RITUAL_304"]
  });
  byID[te.id] = te;
  
  
})(this);
