define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Money = types['Money'] || (types['Money'] = {});
  te = Money["Astral Diamond"] = new engine.RulesElement({
    name: "Astral Diamond",
    type: "Money",
    id: "ID_INTERNAL_MONEY_ASTRAL_DIAMOND",
    source: "Core",
    categories: ["Astral Diamond", "ID_INTERNAL_MONEY_ASTRAL_DIAMOND"]
  });
  byID[te.id] = te;
  
  te = Money["Copper Piece"] = new engine.RulesElement({
    name: "Copper Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_COPPER_PIECE",
    source: "Core",
    categories: ["Copper Piece", "ID_INTERNAL_MONEY_COPPER_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Gold Piece"] = new engine.RulesElement({
    name: "Gold Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_GOLD_PIECE",
    source: "Core",
    categories: ["Gold Piece", "ID_INTERNAL_MONEY_GOLD_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Platinum Piece"] = new engine.RulesElement({
    name: "Platinum Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_PLATINUM_PIECE",
    source: "Core",
    categories: ["Platinum Piece", "ID_INTERNAL_MONEY_PLATINUM_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Residuum"] = new engine.RulesElement({
    name: "Residuum",
    type: "Money",
    id: "ID_INTERNAL_MONEY_RESIDUUM",
    source: "Core",
    categories: ["Residuum", "ID_INTERNAL_MONEY_RESIDUUM"]
  });
  byID[te.id] = te;
  
  te = Money["Silver Piece"] = new engine.RulesElement({
    name: "Silver Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_SILVER_PIECE",
    source: "Core",
    categories: ["Silver Piece", "ID_INTERNAL_MONEY_SILVER_PIECE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
