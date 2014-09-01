define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Bravery Powder"] = new engine.RulesElement({
    name: "Bravery Powder",
    type: "Ritual",
    id: "ID_FMP_RITUAL_282",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=282",
    categories: ["Bravery Powder", "ID_FMP_RITUAL_282"]
  });
  byID[te.id] = te;
  
  te = Ritual["Corrosive Oil"] = new engine.RulesElement({
    name: "Corrosive Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_281",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=281",
    categories: ["Corrosive Oil", "ID_FMP_RITUAL_281"]
  });
  byID[te.id] = te;
  
  te = Ritual["Rust Bomb"] = new engine.RulesElement({
    name: "Rust Bomb",
    type: "Ritual",
    id: "ID_FMP_RITUAL_280",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=280",
    categories: ["Rust Bomb", "ID_FMP_RITUAL_280"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
