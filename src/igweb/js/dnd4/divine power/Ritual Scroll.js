define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Adjure"] = new engine.RulesElement({
    name: "Scroll of Adjure",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ADJURE",
    source: "Divine Power",
    categories: ["Scroll of Adjure", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ADJURE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Create Holy Water"] = new engine.RulesElement({
    name: "Scroll of Create Holy Water",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CREATE_HOLY_WATER",
    source: "Divine Power",
    categories: ["Scroll of Create Holy Water", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CREATE_HOLY_WATER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Ease Spirit"] = new engine.RulesElement({
    name: "Scroll of Ease Spirit",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EASE_SPIRIT",
    source: "Divine Power",
    categories: ["Scroll of Ease Spirit", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EASE_SPIRIT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Hallowed Temple"] = new engine.RulesElement({
    name: "Scroll of Hallowed Temple",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HALLOWED_TEMPLE",
    source: "Divine Power",
    categories: ["Scroll of Hallowed Temple", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HALLOWED_TEMPLE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Iron Vigil"] = new engine.RulesElement({
    name: "Scroll of Iron Vigil",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IRON_VIGIL",
    source: "Divine Power",
    categories: ["Scroll of Iron Vigil", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IRON_VIGIL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Mark of Justice"] = new engine.RulesElement({
    name: "Scroll of Mark of Justice",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MARK_OF_JUSTICE",
    source: "Divine Power",
    categories: ["Scroll of Mark of Justice", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MARK_OF_JUSTICE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Succor"] = new engine.RulesElement({
    name: "Scroll of Succor",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUCCOR",
    source: "Divine Power",
    categories: ["Scroll of Succor", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUCCOR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Thief's Lament"] = new engine.RulesElement({
    name: "Scroll of Thief's Lament",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THIEF'S_LAMENT",
    source: "Divine Power",
    categories: ["Scroll of Thief's Lament", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THIEF'S_LAMENT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
