(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Comrades' Succor"] = new RulesElement({
    name: "Comrades' Succor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_297",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=297",
    categories: ["Comrades' Succor", "ID_FMP_RITUAL_297"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ghost Walk"] = new RulesElement({
    name: "Ghost Walk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_298",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=298",
    categories: ["Ghost Walk", "ID_FMP_RITUAL_298"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hunter's Blessing"] = new RulesElement({
    name: "Hunter's Blessing",
    type: "Ritual",
    id: "ID_FMP_RITUAL_299",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=299",
    categories: ["Hunter's Blessing", "ID_FMP_RITUAL_299"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hunter's Curse"] = new RulesElement({
    name: "Hunter's Curse",
    type: "Ritual",
    id: "ID_FMP_RITUAL_300",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=300",
    categories: ["Hunter's Curse", "ID_FMP_RITUAL_300"]
  });
  byID[te.id] = te;
  
  te = Ritual["Spirit Fetch"] = new RulesElement({
    name: "Spirit Fetch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_301",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=301",
    categories: ["Spirit Fetch", "ID_FMP_RITUAL_301"]
  });
  byID[te.id] = te;
  
  te = Ritual["Vistani Passkey"] = new RulesElement({
    name: "Vistani Passkey",
    type: "Ritual",
    id: "ID_FMP_RITUAL_302",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=302",
    categories: ["Vistani Passkey", "ID_FMP_RITUAL_302"]
  });
  byID[te.id] = te;
  
  
})(this);
