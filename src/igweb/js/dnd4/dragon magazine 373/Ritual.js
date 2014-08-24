(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Drowsy Dust"] = new RulesElement({
    name: "Drowsy Dust",
    type: "Ritual",
    id: "ID_FMP_RITUAL_233",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=233",
    categories: ["Drowsy Dust", "ID_FMP_RITUAL_233"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eyesting"] = new RulesElement({
    name: "Eyesting",
    type: "Ritual",
    id: "ID_FMP_RITUAL_234",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=234",
    categories: ["Eyesting", "ID_FMP_RITUAL_234"]
  });
  byID[te.id] = te;
  
  te = Ritual["Flashbang Powder"] = new RulesElement({
    name: "Flashbang Powder",
    type: "Ritual",
    id: "ID_FMP_RITUAL_235",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=235",
    categories: ["Flashbang Powder", "ID_FMP_RITUAL_235"]
  });
  byID[te.id] = te;
  
  
})(this);
