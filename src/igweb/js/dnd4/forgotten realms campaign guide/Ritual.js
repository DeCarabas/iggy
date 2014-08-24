(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Pact of the Iron Ring"] = new RulesElement({
    name: "Pact of the Iron Ring",
    type: "Ritual",
    id: "ID_FMP_RITUAL_73",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=73",
    categories: ["Pact of the Iron Ring", "ID_FMP_RITUAL_73"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ritual of Twin Burnings"] = new RulesElement({
    name: "Ritual of Twin Burnings",
    type: "Ritual",
    id: "ID_FMP_RITUAL_74",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=74",
    categories: ["Ritual of Twin Burnings", "ID_FMP_RITUAL_74"]
  });
  byID[te.id] = te;
  
  
})(this);
