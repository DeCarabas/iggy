(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Bravery Powder"] = new RulesElement({
    name: "Bravery Powder",
    type: "Ritual",
    id: "ID_FMP_RITUAL_282",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=282",
    categories: ["Bravery Powder", "ID_FMP_RITUAL_282"]
  });
  byID[te.id] = te;
  
  te = Ritual["Corrosive Oil"] = new RulesElement({
    name: "Corrosive Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_281",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=281",
    categories: ["Corrosive Oil", "ID_FMP_RITUAL_281"]
  });
  byID[te.id] = te;
  
  te = Ritual["Rust Bomb"] = new RulesElement({
    name: "Rust Bomb",
    type: "Ritual",
    id: "ID_FMP_RITUAL_280",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=280",
    categories: ["Rust Bomb", "ID_FMP_RITUAL_280"]
  });
  byID[te.id] = te;
  
  
})(this);
