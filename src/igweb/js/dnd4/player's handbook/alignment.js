(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var alignment = types['alignment'] || (types['alignment'] = {});
  te = alignment["Chaotic Evil"] = new RulesElement({
    name: "Chaotic Evil",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_5",
    source: "Player's Handbook",
    categories: ["Chaotic Evil", "ID_FMP_ALIGNMENT_5"]
  });
  byID[te.id] = te;
  
  te = alignment["Evil"] = new RulesElement({
    name: "Evil",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_4",
    source: "Player's Handbook",
    categories: ["Evil", "ID_FMP_ALIGNMENT_4"]
  });
  byID[te.id] = te;
  
  te = alignment["Good"] = new RulesElement({
    name: "Good",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_3",
    source: "Player's Handbook",
    categories: ["Good", "ID_FMP_ALIGNMENT_3"]
  });
  byID[te.id] = te;
  
  te = alignment["Lawful Good"] = new RulesElement({
    name: "Lawful Good",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_2",
    source: "Player's Handbook",
    categories: ["Lawful Good", "ID_FMP_ALIGNMENT_2"]
  });
  byID[te.id] = te;
  
  te = alignment["Unaligned"] = new RulesElement({
    name: "Unaligned",
    type: "alignment",
    id: "ID_FMP_ALIGNMENT_1",
    source: "Player's Handbook",
    categories: ["Unaligned", "ID_FMP_ALIGNMENT_1"]
  });
  byID[te.id] = te;
  
  
})(this);
