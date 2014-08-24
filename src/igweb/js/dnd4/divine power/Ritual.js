(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Adjure"] = new RulesElement({
    name: "Adjure",
    type: "Ritual",
    id: "ID_FMP_RITUAL_272",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=272",
    categories: ["Adjure", "ID_FMP_RITUAL_272"]
  });
  byID[te.id] = te;
  
  te = Ritual["Create Holy Water"] = new RulesElement({
    name: "Create Holy Water",
    type: "Ritual",
    id: "ID_FMP_RITUAL_273",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=273",
    categories: ["Create Holy Water", "ID_FMP_RITUAL_273"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ease Spirit"] = new RulesElement({
    name: "Ease Spirit",
    type: "Ritual",
    id: "ID_FMP_RITUAL_274",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=274",
    categories: ["Ease Spirit", "ID_FMP_RITUAL_274"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hallowed Temple"] = new RulesElement({
    name: "Hallowed Temple",
    type: "Ritual",
    id: "ID_FMP_RITUAL_275",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=275",
    categories: ["Hallowed Temple", "ID_FMP_RITUAL_275"]
  });
  byID[te.id] = te;
  
  te = Ritual["Iron Vigil"] = new RulesElement({
    name: "Iron Vigil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_276",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=276",
    categories: ["Iron Vigil", "ID_FMP_RITUAL_276"]
  });
  byID[te.id] = te;
  
  te = Ritual["Mark of Justice"] = new RulesElement({
    name: "Mark of Justice",
    type: "Ritual",
    id: "ID_FMP_RITUAL_277",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=277",
    categories: ["Mark of Justice", "ID_FMP_RITUAL_277"]
  });
  byID[te.id] = te;
  
  te = Ritual["Succor"] = new RulesElement({
    name: "Succor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_278",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=278",
    categories: ["Succor", "ID_FMP_RITUAL_278"]
  });
  byID[te.id] = te;
  
  te = Ritual["Thief's Lament"] = new RulesElement({
    name: "Thief's Lament",
    type: "Ritual",
    id: "ID_FMP_RITUAL_279",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=279",
    categories: ["Thief's Lament", "ID_FMP_RITUAL_279"]
  });
  byID[te.id] = te;
  
  
})(this);
