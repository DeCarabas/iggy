(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Alter Ego"] = new RulesElement({
    name: "Alter Ego",
    type: "Ritual",
    id: "ID_FMP_RITUAL_293",
    source: "Dragon Magazine 381,Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=293",
    categories: ["Alter Ego", "ID_FMP_RITUAL_293"]
  });
  byID[te.id] = te;
  
  te = Ritual["Precise Forgery"] = new RulesElement({
    name: "Precise Forgery",
    type: "Ritual",
    id: "ID_FMP_RITUAL_294",
    source: "Dragon Magazine 381,Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=294",
    categories: ["Precise Forgery", "ID_FMP_RITUAL_294"]
  });
  byID[te.id] = te;
  
  te = Ritual["Speech Without Words"] = new RulesElement({
    name: "Speech Without Words",
    type: "Ritual",
    id: "ID_FMP_RITUAL_295",
    source: "Dragon Magazine 381,Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=295",
    categories: ["Speech Without Words", "ID_FMP_RITUAL_295"]
  });
  byID[te.id] = te;
  
  
})(this);
