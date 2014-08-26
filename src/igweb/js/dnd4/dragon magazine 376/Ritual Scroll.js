define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Bravery Powder"] = new engine.RulesElement({
    name: "Scroll of Bravery Powder",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BRAVERY_POWDER",
    source: "Dragon Magazine 376",
    categories: ["Scroll of Bravery Powder", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BRAVERY_POWDER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Corrosive Oil"] = new engine.RulesElement({
    name: "Scroll of Corrosive Oil",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORROSIVE_OIL",
    source: "Dragon Magazine 376",
    categories: ["Scroll of Corrosive Oil", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORROSIVE_OIL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Rust Bomb"] = new engine.RulesElement({
    name: "Scroll of Rust Bomb",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RUST_BOMB",
    source: "Dragon Magazine 376",
    categories: ["Scroll of Rust Bomb", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RUST_BOMB"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
