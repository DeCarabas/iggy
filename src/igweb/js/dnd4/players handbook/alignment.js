define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var alignment = types['alignment'] || (types['alignment'] = {});
  te = alignment["Chaotic Evil"] = new engine.RulesElement({
    name: "Chaotic Evil",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_5",
    source: "Player's Handbook",
    categories: ["Chaotic Evil", "ID_FMP_ALIGNMENT_5"]
  });
  byID[te.id] = te;
  
  te = alignment["Evil"] = new engine.RulesElement({
    name: "Evil",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_4",
    source: "Player's Handbook",
    categories: ["Evil", "ID_FMP_ALIGNMENT_4"]
  });
  byID[te.id] = te;
  
  te = alignment["Good"] = new engine.RulesElement({
    name: "Good",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_3",
    source: "Player's Handbook",
    categories: ["Good", "ID_FMP_ALIGNMENT_3"]
  });
  byID[te.id] = te;
  
  te = alignment["Lawful Good"] = new engine.RulesElement({
    name: "Lawful Good",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_2",
    source: "Player's Handbook",
    categories: ["Lawful Good", "ID_FMP_ALIGNMENT_2"]
  });
  byID[te.id] = te;
  
  te = alignment["Unaligned"] = new engine.RulesElement({
    name: "Unaligned",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_1",
    source: "Player's Handbook",
    categories: ["Unaligned", "ID_FMP_ALIGNMENT_1"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
