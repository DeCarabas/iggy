(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Money = types['Money'] || (types['Money'] = {});
  te = Money["Astral Diamond"] = new RulesElement({
    name: "Astral Diamond",
    type: "Money",
    id: "ID_INTERNAL_MONEY_ASTRAL_DIAMOND",
    source: "Core",
    categories: ["Astral Diamond", "ID_INTERNAL_MONEY_ASTRAL_DIAMOND"]
  });
  byID[te.id] = te;
  
  te = Money["Copper Piece"] = new RulesElement({
    name: "Copper Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_COPPER_PIECE",
    source: "Core",
    categories: ["Copper Piece", "ID_INTERNAL_MONEY_COPPER_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Gold Piece"] = new RulesElement({
    name: "Gold Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_GOLD_PIECE",
    source: "Core",
    categories: ["Gold Piece", "ID_INTERNAL_MONEY_GOLD_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Platinum Piece"] = new RulesElement({
    name: "Platinum Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_PLATINUM_PIECE",
    source: "Core",
    categories: ["Platinum Piece", "ID_INTERNAL_MONEY_PLATINUM_PIECE"]
  });
  byID[te.id] = te;
  
  te = Money["Residuum"] = new RulesElement({
    name: "Residuum",
    type: "Money",
    id: "ID_INTERNAL_MONEY_RESIDUUM",
    source: "Core",
    categories: ["Residuum", "ID_INTERNAL_MONEY_RESIDUUM"]
  });
  byID[te.id] = te;
  
  te = Money["Silver Piece"] = new RulesElement({
    name: "Silver Piece",
    type: "Money",
    id: "ID_INTERNAL_MONEY_SILVER_PIECE",
    source: "Core",
    categories: ["Silver Piece", "ID_INTERNAL_MONEY_SILVER_PIECE"]
  });
  byID[te.id] = te;
  
  
})(this);
